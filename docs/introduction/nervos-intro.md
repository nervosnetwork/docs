---
id: nervos-intro
title: What is Nervos?
---

Nervos envision a future called Crypto Economies, where users' assets are represented by different kinds of tokens and are traded in a financial system that is open and programmable. In such world, the trading friction of different assets are largely lower than the original economy system, and the social resource can be allocated to the right hand in a faster and better way, which will eventually make this world a better place.

To realize this vision, we will need an infrastructure for securely storing users' assets (tokens) as well as making them programmable, so that we can design different tokens and transact them intelligently. 

The mission of Nervos is to build this infrastructure.

![nervos-log](assets/nervos-layers.png)

Nervos has a layered architecture, which has a Layer 1 named Common Knowledge Base (CKB) as the foundation layer for issuing all kinds of tokens and securely storing them. There are also Layer 2 systems works around CKB as plugins for enabling lower transaction fee and better transaction user experience for transferring these token between users.

> To learn more about the layered architecture of Nervos, please refer [Nervos Whitepaper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md).

In Nervos, there is a utility token named CKB that users can use to pay for blockchain resources, which are needed for issuing and storing different tokens. This token also secures the blockchain system by providing incentives for the node operators and miners in the CKB system.

> To learn more about the CKB token, please refer [Nervos Token Economics paper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).

> CKB is both the token name and the name of the Layer 1 blockchain.

## Nervos CKB

Nervos Common Knowledge Base (CKB) is a permission-less public blockchain system. On CKB platform, both CKB token and the User Defined Tokens (UDT) can be programmed with Turing complete scripts.

In a blockchain context, common knowledge refers to states verified by global consensus and Nervos CKB is designed to be a state verification system.

Comparing with Bitcoin, which was designed to be programmable money, CKB is designed to be a programmable assets platform, as not only the native CKB itself can be programmed with Turing complete scripts, but also all the User Defined Tokens (UDTs) can be programmed in the same the CKB token is.

Ethereum was designed to be a world computer that provides functions of programmable escort account. On Ethereum you also can program the behavior of non-custodian accounts (i.e. smart contracts) to make UDTs such as ERC20 or ERC721. To compare with, CKB let users program token directly without going through an account. This design philosophy difference leads to two different programming models, which you will be learning about in the later parts of this documentation.


## CKB Features

Here introduce features of CKB that make it different from other public blockchain platforms in terms of the protocol design.

### Nakamoto Consensus Max
Nervos CKB adopts an improved Nakamoto Consensus algorithm called NC-Max as the consensus mechanism. NC-Max uses orphan block rate as the on-chain network bandwidth status indicator and dynamically adjust the block interval to achieve better network bandwidth usage efficiency as well as making selfish mining unprofitable.

To learn more about NC-Max, please refer [this presentation video](https://www.youtube.com/watch?v=HSXzbgVRH_M).

### Cell Model

Nervos CKB adopts a generalized UTXO model called Cell model for describing and programming both native token CKB and User Defined Tokens (UDT).

You can find this concept explained in a [latter section](../basic-concepts/architecture.md#cell), or you can refer to the [Nervos Whitepaper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md) where you can find a high-level comprehensive explanation.

### RISC-V Based CKB-VM
CKB-VM is a virtual machine designed for CKB blockchain. It is a software simulator based on [RISC-V](https://riscv.org/) instruction set. With CKB-VM, you can program in any language that has a compiler supported by RISC-V, such as C/C++ and high-level programming languages such as Javascript, Python, and Ruby. Moreover, with CKB-VM you can execute any kinds of hash function and signature function on-chain, which means you will be able to define your own private key verification function for your assets/tokens, instead of limited by a set of predefined crypto primitives. 

To learn more about CKB-VM, please refer [CKB-VM paper](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm).

### Token Economics
The CKB economic model focuses on the state. The native token (CK Bytes) represent rights to occupy state storage. For example: holding 1000 CK Bytes would allow the user to create a cell with 1000 bytes in capacity, or multiple cells that add up to 1000 bytes in capacity.

Owners utilize their CK Bytes to store state or can lend capacity to others. An implicit storage cost proportional to space and time is created: if an owner utilizes their cell to store state, they will incur an opportunity cost equivalent to what they could have earned by lending out the capacity. This is the CKB's solution to the 'state bloat' problem.

To learn more about the CKB token economics, please refer [token economics paper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).