---
id: node-mining
title: Node and Mining
---

Here introduce the concepts of node and mining in CKB.

### Node
CKB is structured as a peer-to-peer network on top of our existing internet. Here the term "peer-to-peer" means that all the computers that participate in the network are peers to each other. In this context, we refer each of these computers as a node.

Every computer in this world that has sufficient capability (basically means all the modern computers) would be able to run a CKB node and join the CKB network freely. 

Being a node in the network means you will synchronize the existing blocks, transaction, and states as well as receive the new ones from other peer nodes. You will also be able to verify transactions and broadcast your own transactions to other nodes.

### Mining

Miners are the kinds of nodes that construct new blocks with a pack of transactions in it. 

In CKB, miners need to compete with each other on a game called Proof-of-Work. After a miner constructed a block, it needs to calculate the hash of the block (with a nonce) to get a hash that is smaller than a specific target number (difficulty). Whoever successfully figured out the correct hash will have the right to broadcast the block to the whole network. Other nodes will receive the block, and verify it, and start to mine a new block on it.

> The hash function for mining CKB mainnet has not been decided yet. For testnet, [Cuckoo](https://github.com/nervosnetwork/ckb/wiki/PoW-Engines) is used as the PoW function.


