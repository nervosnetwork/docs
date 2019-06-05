---
id: nervos-intro
title: What is Nervos?
---

Nervos envisions a future called Crypto Economies, where users' assets are represented by different kinds of cryptographic based tokens and are traded in a financial system that is open and programmable. In such a world, trading frictions between different assets are largely lower than our existing economy system today. Social resource can be allocated to the right hand in a faster and better way. In essence, a better world.

To realize this vision, we will need an infrastructure for securely storing users' assets (tokens). This infrastructure also has to be programmable, so that we can design different tokens and transact them intelligently.

The mission of Nervos is to build this infrastructure.

![nervos-log](assets/nervos-layers.png)

Nervos has a layered architecture, which has a single Layer 1 system based on blockchain technology, as well as many Layer 2 systems. The layer 1 blockchain in Nervos is named Common Knowledge Base (CKB). Developers are able to construct their own layer 2 systems rooted in CKB and interact with CKB. Layer 1 focus on security and decentralization, while Layer 2 focus on functionalities and scalability.

> To learn more about the layered architecture of Nervos, please refer [Nervos Whitepaper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md).

In Nervos, there is a utility token named CK Byte. Users can use CK Byte to exchange for blockchain resources, which are needed for issuing and storing different tokens. This token also secures the blockchain system by providing incentives for the node operators and miners in the CKB system.

> To learn more about the CK Bytes, please refer [Nervos Token Economics paper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).

> CKB is both the token name and the name of the Layer 1 blockchain.

## Nervos CKB

Nervos Common Knowledge Base (CKB) is a permission-less public blockchain system. On the CKB platform, both the Native Token(CKB) and the User Defined Tokens (UDT) can be programmed with Turing complete scripts.

In a blockchain context, common knowledge refers to states verified by global consensus. The role of Nervos CKB is to verify state and store state on-chain, where the state will be secure and censorship resistant.

Comparing with Bitcoin, which was designed to be programmable money, CKB is designed to be a programmable assets platform. Not only the native token CK Byte itself can be programmed with Turing complete scripts, but also all the User Defined Tokens (UDTs) can be programmed in the same way the native token is.

Ethereum was designed to be a world computer that supports programmable escrow account. On Ethereum, you also can program the behavior of non-custodian accounts (i.e. smart contracts) to make UDTs such as ERC20 or ERC721. To compare with, CKB let users program the token directly without going through an account, which has benefits when user are interacting with Layer 2s or Decentralized Exchanges (DEX).


## CKB Features

Here we introduce features of CKB that make it different from other public blockchain platforms.

### Nakamoto Consensus Max
Nervos CKB adopts an improved Nakamoto Consensus algorithm called NC-Max as the consensus mechanism. NC-Max uses orphan block rate as the on-chain network bandwidth status indicator and dynamically adjust the block interval to achieve better network bandwidth usage efficiency as well as making selfish mining unprofitable.

To learn more about NC-Max, please refer [this presentation video](https://www.youtube.com/watch?v=HSXzbgVRH_M).

### Cell Model

Nervos CKB adopts a generalized UTXO model called Cell model as the state model. Cell is the representation of CK Bytes in practice, just like the UTXO is the representation of BTC. Cell is also the container for storing states on-chain, and you can use Cells to describe and program your customized tokens.

You can find this concept explained in detail in a [latter section](../basic-concepts/architecture.md#cell), or you can refer to the [Nervos Whitepaper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md) where you can find a high-level comprehensive explanation.

### RISC-V Based CKB-VM
CKB-VM is a virtual machine designed for CKB blockchain. It is a software simulator based on [RISC-V](https://riscv.org/) instruction set. With CKB-VM, you can program in any language that has a compiler supported by RISC-V, such as C/C++, as well as high-level programming languages such as Javascript, Python, and Ruby. Moreover, with CKB-VM you can execute any kinds of hash function and signature function on-chain, which means you will be able to define your own private key verification function for your assets/tokens, instead of limited by a set of predefined crypto primitives.

To learn more about CKB-VM, please refer [CKB-VM paper](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm).

### Token Economics
The CKB economic model focuses on the state. The native token CK Bytes represent rights to occupy state storage. For example: holding 1000 CK Bytes would allow the user to create a Cell with 1000 bytes in capacity, or multiple Cells that add up to 1000 bytes in capacity.

Owners utilize their CK Bytes to store state or can lend CK Bytes to others. An implicit storage cost proportional to space and time is created: if an owner utilizes their Cell to store state, they will incur an opportunity cost equivalent to what they could have earned by lending out the capacity.

To learn more about the CKB token economics, please refer [token economics paper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).
