# Basic Concepts
This document introduces some of the basic concepts you should know before you start to develop on CKB.

## CKB
Common Knowledge Base is a permission-less public blockchain system that supports smart contract functionality.

CKB offers storage for the most important data (or state) that needs to be stored with absolute security and immutability, such as an agreement or a contract. Any altering attempts to the data or the state on CKB are verified by turing-complete verification scripts, which are also stored on-chain, with absolute security.

[A figure for showing 3 structures]

There are primarily 3 data structures you need to know in order to develop on CKB: Cell, Transaction and Block. 
- Cell is the basic storage element for storing states or scripts. 
- Transaction is for updating the cells (i.e. the state) on-chain. Each transaction contains both the old cells and the new cells. The new cells can only be valid on-chain after its related transaction has been verified and confirmed on-chain.
- Block contains a pack of transactions and a block header with some meta-data. The miners of CKB pack a block and calculate for a "seal" to seal this block, then broadcast it on the whole network. Other miners receive this block, verify it, and start to mine a new block based on it.


<!-- Up to here, bitcoiners may have noticed that CKB has a very similar structure to Bitcoin. That's why we have wrote up a quick guideline for you bootstrap easily with your bitcoin background. -->

We are going introduce these three structures in details. Also at last, we will talk about how the concept of "wallet" and "address" can fit in this system.

## Cell

## Transaction
A transaction 

Developing on CKB is different from Ethereum. CKB requires the state to be generated off-chain instead of on-chain. To update the on-chain state and data, a transaction


## Block

## Wallet & Address