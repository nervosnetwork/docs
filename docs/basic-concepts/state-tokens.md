---
id: state-tokens
title: State and Tokens
---

Here you can learn the concepts of "state" and "tokens" as well as "wallet" in the context of Nervos CKB.

## State
From a computer science point of view, the public blockchain system is a distributed replicated state machine, where global state is stored by all the computers in the blockchain network. The transitions of these states are triggered by events. For example, Alice has 10 CKBytes now and Bob has no CKBytes. This is the current state. Alice then send 5 CKBytes to Bob. This is an event. The new state would be that each Alice and Bob has 5 CKBytes.

In the context of Blockchain, take Bitcoin for an example, the current state of Bitcoin is the collection of all the [Unspent Transaction Outputs (UTXOs)](blockchain#utxo-model). This state is changed when a transaction is sent to one of the nodes in the network to spend UTXO(s) and create new UTXO(s). 

CKB adopts a state model called the cell model, which is a generalized UTXO model, for storing state. Similar to Bitcoin, the current state of CKB is the collection set of all live cells.

A cell is a container of state, state data is stored inside of cells. For example, the state "Alice owns 10 token A" on CKB could be expressed with a cell that has a number 10 stored in it, and a reference to a `type`  script that defines the logic governing token A.

## Native Token CKBytes
CKB is designed to be a platform for securely storing assets. In this context, assets are represented by programmable tokens.

The Common Knowledge Byte (CKByte) is the native token of the Nervos Common Knowledge Base. It is the storage used by users and developers to store common knowledge, incentives for miners to secure the platform, and a store of value for holders.

CKByte is the measurement unit for the storage capacity of a cell. When users and developers want to store their state on-chain, they will need to create cells that have a sufficient amount of CKBytes to store their state. For example, if Alice owns 1000 CKBytes she can create a cell that has 1000 bytes of capacity or multiple cells that add up to 1000 bytes of storage. 

CKBytes are also used as mining rewards for miners and transaction fees. For paying fees, CKBytes can be divided, 1 CK Byte = 100,000,000 CK Shannons.

> It is also possible to pay transaction fee with other kinds of tokens (UDTs) as long as a miner accepts them.

Given the fixed issuance curve of CKBytes and [Nervos DAO](https://github.com/nervosnetwork/rfcs/blob/2aa14e142397570778f300468de2bb427e485507/rfcs/0000-dao-deposit-withdraw/0000-dao-deposit-withdraw.md), the token dynamics of CKBytes are similar to Bitcoin, making CKBytes a store of value.

For more information about the token economic design of the CKByte token, please refer to [RFC 0015-Cryptoeconomics](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).

## User Defined Token (UDT)
One of the typical use cases of CKB is to issue User Defined Tokens (UDT). Anyone is able to design and create tokens for representing different kinds of assets.


## Token Programming

Developers can program both CKBytes and UDTs with turing-complete scripts. Typical applications are multi-sig wallets and atomic swaps, which can be easily done on CKB.

The cell model of the CKB blockchain is built to work well with Layer 2 systems. Similar to Bitcoin's UTXO's, users control a single state that can be moved to Layer 2 independent of other users' assets. More sophisticated applications can be built on top of Layer 2 to provide a better user experience and lower transaction fees. Users can transfer their CKBytes or UDTs to Layer 2 and utilize them in these applications.
