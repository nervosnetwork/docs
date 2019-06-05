---
id: states-tokens
title: States and Tokens
---

Here you can learn the concepts of "states and "tokens" as well as "wallet" in the context of Nervos CKB.

## States
From a computer science point of view, the public blockchain system is actually a distributed replicated state machine, where states are stored by all the computers in the blockchain network. The transitions of these states are triggered by events. For example, Alice has 10 CK Bytes now and Bob has no CK Bytes. This is the current state. Alice then send 5 CK Bytes to Bob. This is an event. The new state would be that each Alice and Bob has 5 CK Bytes.

In the context of Blockchain, take Bitcoin for an example, the current state of Bitcoin is the collection of all the [Unspent Transaction Outputs (UTXOs)](blockchain#utxo-model). This state is changed when there is a transaction been sent to one of the nodes in the network. This node will then verify the validity of this transaction and update its state locally, and then broadcast this transaction to other nodes in the network.

CKB adopts a state model called cell model, which is a generalized UTXO model, for storing states. Similar to Bitcoin, the current state of CKB will be the collection set of all the live Cells.

The role of cell is being the container of states. The state data is stored inside of Cells. For example, the state that "Alice owns 10 token A" on CKB could be a cell that has a number 10 stored in it, and link to another cell that stores a script that defines the rule and logic of token A.

## Native Token CK Bytes
CKB is designed to be a platform for securely storing assets. In this context, assets are represented by programmable tokens.

Common Knowledge Bytes (CK Bytes) is the native token as it is generated from the CKB protocol. It has two functions: as the Medium-of-Exchange and Unit-of-Account for users and developers to consume blockchain resources; and as incentives for miners to secure the platform.

CK Byte is the measurement unit for the storage capacity of cell. hen users and developers want to store their state on-chain, they need to prepare cells that have sufficient amount of CK Bytes to store their states. For example, Alice owns 100 CK Bytes means that she has a cell that has 100 bytes of capacity for storing states (or multiple cells that adds up to 100 bytes of capacity). Once the states are stored, the occupied cell cannot be used to store anything else, which means that the CK Bytes can not be double-used.

CK Bytes is also used as mining rewards for miners and transaction fees. When it does, a different unit called CK Shannon might be used. 1 CK Byte = 100_000_000 CK Shannons.

> It is also possible to pay transaction fee with other kinds of tokens (UDTs) as long as the miner agrees on it.

For more information about the token economic design of CKB token, please refer [Nervos CKB Token Economics paper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).

## User Defined Token (UDT)
One of the typical usages of CKB is to issue User Defined Tokens (UDT) on it. It means anyone could be able to design and create tokens for representing different kinds of assets, without the need of building a new public blockchain from scratch.

Just like the native token CKB, UDTs are also stored in Cells. It means you can transfer UDTs in the same way that you transfer CKB tokens. This is different from Ethereum that the UDT on Ethereum (e.g. ERC20 or ERC721) are issued and stored by smart contract accounts, so that users can only control their UDT assets through the contract instead of controlling them directly by users themselves.

## Token Programming

Developers can program both CK Bytes and UDTs with Turing-complete scripts. Typical applications are multisig wallets and atomic swaps, which can be easily done on CKB.

CKB blockchain can also work with Layer 2 systems. More sophisticated applications can be built on top of Layer 2 to have better user experience and lower transaction fees. Users can transfer their CKB or UDT to Layer 2 to use them in these applications.

## Wallet
A user's tokens (CK Bytes or UDTs) are locked with their private key. Whoever has this private key will be able to unlock these tokens, and transfer them or destroy them. It is very important to store and manage the private key securely, and this is what a wallet does.

A wallet would help users to keep their private keys and use these keys to sign transactions (i.e. unlock tokens).

A wallet may have different forms. It could be a desktop computer application, a web application or a smartphone app. Nervos CKB has a wallet called [Neuron](https://github.com/nervosnetwork/neuron), which is under development now.

> As a user or developer, it is recommended to have sufficient knowledge of wallet before you choose which wallet to use for storing all your valuable tokens.