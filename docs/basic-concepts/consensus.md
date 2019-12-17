# CKB Consensus


## Introduction

The CKB consensus protocol is a variant of Nakamoto Consensus, which raises its performance limit and selfish mining resistance while maintaining all of its merits. By eliminating the bottleneck in Nakamoto Consensus (NC) block propagation latency, the CKB consensus protocol supports very short block intervals without making any security sacrifices. 




## Background

Though new BFT protocol families have been proposed following NC, comparatively they often demand significant communication overhead to certify certain nodes have witnessed a block. 

Bitcoin's Nakamoto Consensus (NC) is well-received due to its simplicity and low communication overhead. It does however, suffer from two kinds of drawbacks: 
	1) Its transaction processing throughput is limited to roughly 10 transactions per second
	2) It is vulnerable to a selfish mining attack, in which attackers can gain greater block rewards by deviating from the protocol's prescribed behavior

Two parameters collectively cap system throughput in Bitcoin:
	1) the maximum block size;
	2) the expected block interval

Bitcoin enforces an upper bound on block size of roughly 4MB and targets a 10-minute block interval, translating to roughly 10 transactions per second (TPS). 

**Increasing throughput**
When increasing throughput, increasing the block size leads to longer block propagation latency and reducing the block interval leads to more frequent block generation events. Both of these approaches raise the fraction of blocks that are generated during the time competing blocks are being propagated, thus raising the fraction of competing blocks. 

Because only one block will contribute to transaction confirmation in Nakamoto Consensus, nodes waste bandwidth propagating other **orphaned blocks**, and the system's effective throughput is limited.

**Security implications**

In this system, an increase in orphan rate degrades system security, as the system's total hash power is divided among multiple very short forks. Difficulty is adjusted according to the amount of hash power directed at the canonical chain. As orphan rate rises attackers are provided the opportunity to produce an alternate chain by matching only the work that has gone into the canonical chain. 

Selfish miners with sufficient hash power can deliberately orphan other miners blocks and over time collect block rewards in excess of their share of total system hash power. 

Researchers observe that the unfair profit opportunity presented by selfish mining is rooted in the difficulty adjustment mechanism of Nakamoto Consensus [(link)](https://arxiv.org/abs/1805.08281), which neglects orphaned blocks when estimating the network's computing power. 



## From Nakamoto to Nervos

The Nervos CKB consensus protocol makes three changes to Nakamoto Consensus:

1. The CKB consensus protocol eliminates the bottleneck in block propagation resulting from the transference of newly broadcast, or **fresh transactions**, which have not finished propagating to the network when they are embedded in the latest block.

   This is done through a decoupling of transaction confirmation into two separate steps: **propose** and **commit**. A transaction is proposed via inclusion of its truncated hash in the **proposal zone** of a confirmed block or one of its [uncles](https://www.investopedia.com/terms/u/uncle-block-cryptocurrency.asp).

   The proposal zone is only used to facilitate transaction synchronization, newly proposed transactions do not affect block validity or block propagation. A node can start transferring a block to its neighbors before receiving these transactions. A proposed transaction could be previously proposed, in conflict with other transactions, or even malformed, without affecting block validity.

   The transaction is then committed if it appears in a confirmed block's **commitment zone** in a window between **2 to 10** blocks after its proposal. This two-step confirmation rule eliminates the bottleneck in propagating transactions, as a block's committed transactions will have already been received and verified by all nodes when they are proposed.

   

2. The CKB consensus protocol prescribes that blocks refer to all orphaned blocks as uncles. This information allows for estimation of current block propagation latency and dynamic adjustment of the expected block interval, increasing throughput when the latency of network allows.

   The difficulty adjustment targets a fixed orphan rate, to utilize the shortened latency without compromising security. The protocol hard-codes the interval's upper and lower bounds to defend against DoS attacks and avoid overloading the nodes. All epochs have the same expected length, and in each epoch the block reward is adjusted proportionally to the expected block interval of the epoch, so that the expected time-averaged reward is constant, independent of the block interval.

   

3. The CKB consensus protocol eliminates the opportunity presented by selfish mining. Selfish mining is not profitable regardless of how the attacker divides its mining power among honest mining, selfish mining or idling equipment, and regardless of the number of epochs the attack encompasses. The detailed proof will be released in 2020.

   


## Block Structure

A block includes the following fields:

| Name                   | Description                                             |
| :--------------------- | :------------------------------------------------------ |
| Header                 | block metadata                                          |
| Commitment zone        | transactions committed in this block                    |
| Proposal zone          | truncated hashes of transactions proposed in this block |
| Uncle headers          | headers of uncle blocks                                 |
| Uncles’ proposal zones | truncated hashes of transactions proposed in the uncles |



**Block structure rules:**

1. Similar to NC, in the CKB consensus protocol a compact block replaces a block’s commitment zone with the transactions’ `shortid`s, a salt and a list of prefilled transactions. All other fields remain unchanged in [the compact block](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki).

2. The total size of the first four fields should be no larger than the hard-coded **block size limit**. The main purpose of implementing a block size limit is to avoid overloading public nodes' bandwidth. 

3. The uncle blocks’ proposal zones do not count in the limit as they are usually already synchronized when the block is mined. 

   *The number of truncated transaction hashes in a proposal zone also has a hard-coded upper bound.*



## Block Propagation


Nodes should broadcast all blocks with valid proofs-of-work, including orphans, as they may be referred to in the main chain as uncles. Valid proofs-of-work cannot be utilized to pollute the network, as constructing them is time-consuming. 

The protocol’s block propagation protocol removes the extra round trip of fresh transactions in most circumstances. When the round trip is inevitable, the protocol ensures that it only lasts for one hop in the propagation. This is achieved by the following three rules.

**Block Propagation rules:**

1. If some committed transactions are previously unknown to the sending node, they will be embedded in the prefilled transaction list and sent along with the compact block. This modification removes the extra round trip if the sender and the receiver share the same list of proposed, but-not-broadcast transactions. 
2. If certain committed transactions are still missing, the receiver queries the sender with a short timeout. Failing to send these transactions in time leads to the receiver disconnecting and blacklisting the sender. Blocks with incomplete commitment zones will not be propagated further.
3. As long as the commitment zone is complete and valid, a node can start forwarding the compact block before receiving all newly-proposed transactions. A node requests the newly-proposed transactions from the upstream peer and sends compact blocks to other peers simultaneously. This modification does not downgrade the security as transactions in the proposal zone do not affect the block’s validity.
