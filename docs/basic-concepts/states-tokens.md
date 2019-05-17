---
id: states-tokens
title: States and Tokens
---

Here you can learn the concepts of "states and "tokens" as well as "wallet" in the context of Nervos CKB.

## States
From a computer science point of view, the public blockchain system is actually a distributed replicated state machine, where transitions of states are triggered by events. For example, let's say Alice has 10 CKB now and Bob has no CKB, which is the current state. She then send 5 CKB to Bob, which is an event. The new state would be Alice and Bob each has 5 CKB.

In the context of Blockchain, take Bitcoin for an example, the current state of Bitcoin is the collection of all the [Unspent Transaction Outputs (UTXOs)](blockchain#utxo-model). This state is changed when there is a transaction been sent to one of the nodes in the network. This node will then verify the validity of this transaction and update its state locally, and then broadcast this transaction to other nodes in the network.

CKB adopts Cell model, which is a generalized UTXO model, for describing states. Similar to Bitcoin, the current state of CKB will be the collection set of all the live Cells.

The state data is stored inside of Cells . For example, the state that "Alice owns 10 CKB token" on CKB could be a Cell that has a capacity of 10.

## Native Token CKB
CKB is designed to be a platform for securely storing assets. In this context, assets are represented by programmable tokens.

Common Knowledge Bytes (CKB) is the native token as it is generated from the CKB protocol. It has two functions: as the Medium-of-Exchange and Unit-of-Account for users and developers to consume blockchain resources; and as incentives for miners to secure the platform.

> CKB is both the token name and the blockchain name.

CKB token is the container for storing on-chain state. When users and developers want to store their state on-chain, they need to prepare a sufficient amount of CKB as containers to store these states. For example, 100 CKB can be used to store 100 bytes of state data. Once the states are stored, the occupied CKB cannot be used to store anything else.

> The transaction fee is also paid with CKB token. It is also possible to pay transaction fee with other kinds of tokens as long as the miner agrees on it.

CKB token is also used as mining rewards for miners.

For more information about the token economic design of CKB token, please refer [Nervos CKB Token Economics paper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).

## User Defined Token (UDT)
One of the typical usages of CKB is to issue User Defined Tokens (UDT) on it. It means anyone could be able to design and create tokens for representing different kinds of assets, without the need of building a new public blockchain from scratch.

Just like the native token CKB, UDTs are also stored in Cells. It means you can transfer UDTs in the same way that you transfer CKB tokens. This is different from Ethereum that the UDT on Ethereum (e.g. ERC20 or ERC721) are issued and stored by smart contract accounts, so that users can only control their UDT assets through the contract instead of controlling them directly by users themselves.

## Token Programming

Developers can program both CKB tokens and UDTs with Turing-complete scripts. Typical applications are multisig wallets and atomic swaps, which can be easily done on CKB.

CKB blockchain can also work with Layer 2 systems. More sophisticated applications can be built on top of Layer 2 to have better user experience and lower transaction fees. Users can transfer their CKB or UDT to Layer 2 to use them in these applications.

## Wallet
A user's tokens (CKB or UDTs) are locked with their private key. Whoever has this private key will be able to unlock these tokens, and transfer them or destroy them. It is very important to store and manage the private key securely, and this is what a wallet does.

A wallet would help users to keep their private keys and use these keys to sign transactions (i.e. unlock tokens).

A wallet may have different forms. It could be a desktop computer application, a web application or a smartphone app. Nervos CKB has a wallet called [Neuron](https://github.com/nervosnetwork/neuron), which is under development now.

> As a user or developer, it is recommended to have sufficient knowledge of wallet before you choose which wallet to use for storing all your valuable tokens.
