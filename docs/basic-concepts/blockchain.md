---
id: blockchain
title: Blockchain
---

Here are some of the information you should be familiar with before you start your journey as a cool blockchain developer.

## Blockchain Structure
To do

## UTXO Model
To do

## Private Key
To do

## Proof-of-Work
To do

## Node
CKB is structured as a peer-to-peer network on top of our existing internet. Here the term "peer-to-peer" means that the all the computers that participate in the network are peers to each other. In this context, we refer each of these computers as node.

Every computer in this world that has sufficient capability (basically means all the modern computers) would be able to run a CKB node and join the CKB network freely. 

Being a node in the network means you will synchronize the existing blocks, transaction and states and receive the new ones from other peer nodes. You will also be able to verify transactions and broadcast your own transactions to other nodes.

## Mining

Miners are the kinds of nodes that construct new blocks with a pack of transactions in it. 

In CKB, miners need to compete with each other on a game called Proof-of-Work. After the miner constructed a block, they need to calculate the hash of the block (and a nonce) to get a hash that is smaller than a specific target number (called difficulty). Whoever successfully figured out the correct hash will have the right to broadcast the block to the whole network. Other nodes will receive the block, and verify it, and start to mine a new block on it.

> The hash function for CKB mining has not been decided yet.

## Mastering Bitcoin

Overall, CKB has a very similar structure to Bitcoin. So if you wanna learn more basic knowledge , I would recommend you to have a look at [Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook).