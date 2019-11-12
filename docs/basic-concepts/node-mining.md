---
id: node-mining
title: Node and Mining
---

Here introduce the concepts of node and mining in CKB.

### Node
CKB is structured as a peer-to-peer network to run on top of public Internet. The term "peer-to-peer" refers to all the computers that participate in the network, equal peers in the network topology. In this context, we refer each of these computers as a node.

All modern computers should have sufficient capability to run a CKB node and freely join the Nervos network. 

Nodes in the network means will synchronize existing blocks, transactions, and global state as well as receive new blocks and transactions from other nodes. Nodes will verify transactions, as well as broadcast new transactions to other nodes.

### Mining

Miners are nodes that construct new blocks with a group of transactions. 

In CKB, miners compete with each other to add blocks to the blockchain through Proof-of-Work. After a miner constructs a block, it will need to calculate the hash of the block (with a nonce) to produce a hash that is smaller than a specific target number (difficulty). 

The first miner to find a suitable hash will have the right to broadcast the block to the network. Other nodes will receive the block, verify it, and begin mining a new block on top of it.

> The hash function for mining CKB mainnet is Eaglesong, you can learn more about it in
>
> [RFC 0010 - Eaglesong]: https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0010-eaglesong/0010-eaglesong.md
>
> 


