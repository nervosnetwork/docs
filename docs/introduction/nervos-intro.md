---
id: nervos-intro
title: What is Nervos?

---

The Nervos Network is built to support the growth of a crypto economy. In this economy, users' assets are represented by different kinds of tokens, and are traded in a financial system that is open and programmable. Trading friction of these assets is significantly lower than the traditional economic system, allowing our society's resources to be more efficiently allocated, and in time making this world a better place.

Realizing this vision will require infrastructure that can securely store users' assets (tokens) and interfaces to make them programmable. The mission of the Nervos Network is to create this infrastructure.

![nervos-log](assets/nervos-layers.png)

The Nervos Network has a layered architecture, with a single Layer 1 blockchain, the Nervos Common Knowledge Base (CKB), and many Layer 2 systems. Layer 1 is focused on providing security and decentralization, while developers can construct layer 2 systems (focused on functionality and performance) that are securely rooted in and interoperable with the Layer 1 CKB.

> To learn more about the layered architecture of the Nervos Network, please refer to the [CKB RFC](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md).

On Nervos CKB, the utility token CKBytes (CKB) allows users to utilize the state storage capacity of the blockchain, which is required to issue and store different tokens. CKBytes (CKB) can also be used to pay transaction fees. This issuance of this token creates a security model for the blockchain by providing incentives to miners. 

> To learn more about the CKB token, please refer [Nervos Token Economics RFC](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).

> CKB is both the token name and the name of the Layer 1 blockchain.

## Nervos CKB

Nervos Common Knowledge Base (CKB) is a permissionless public blockchain. In a blockchain context, common knowledge refers to states verified by global consensus. On CKB, both the native token (CKB) and User Defined Tokens (UDT) can be programmed with Turing-complete scripts.

Similar to Bitcoin, Nervos CKB is designed to be a state verification system. Compared with Bitcoin, which was designed to be programmable money, CKB is designed to be a programmable assets platform. All User Defined Tokens (UDTs) can be programmed in the same way as the CKB token.

In contrast, Ethereum was designed to be a world computer and to provide programmable escrow accounts (smart contracts). On Ethereum, accounts can be programmed to create user-defined tokens such as ERC20 or ERC721, however CKB allows users to program tokens directly without utilizing an account structure. This design philosophy difference creates a new programming model (the cell model) which will be covered in later parts of this documentation.


## CKB Features

This section covers the features of CKB that make it different from other public blockchains in terms of protocol design.

### Nakamoto Consensus Max

Nervos CKB adopts an improved Nakamoto Consensus algorithm called NC-Max. This algorithm uses the blockchain's orphan block rate as an on-chain network bandwidth status indicator and dynamically adjusts block interval to maximize network bandwidth usage and also makes selfish mining unprofitable.

To learn more about NC-Max, please refer to [this video](https://www.youtube.com/watch?v=HSXzbgVRH_M).

### Cell Model

Nervos CKB adopts a generalized UTXO model called the Cell model for describing and programming both the native token (CKB) and User Defined Tokens (UDT).

You can find this concept explained in a [latter section](../basic-concepts/architecture.md#cell), or you can refer to the [CKB RFC](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md) for a high-level comprehensive explanation.

### RISC-V Based CKB-VM

CKB-VM is a virtual machine designed for the CKB blockchain. It is a software simulator based on the [RISC-V](https://riscv.org/) instruction set. With CKB-VM, scripts can be created in any language that has a compiler supported by RISC-V, such as C/C++ and high-level programming languages such as Javascript, Python, and Ruby. 

Moreover, CKB-VM does not hard code any cryptography, allowing users to utilize any kind of on-chain signature or hash function. Application designers can select the verification functionality for specific assets/tokens, instead of being limited by a set of pre-defined crypto primitives.

To learn more about CKB-VM, please refer [CKB-VM RFC](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm).

### Token Economics

The CKB economic model focuses on state. The native token (CKBytes) represents rights to occupy state storage. For example: holding 1000 CKBytes allows a user to create a cell with 1000 bytes in capacity or multiple cells that add up to 1000 bytes in capacity.

Owners can utilize their CKBytes to store state or can lock these CKBytes in the [Nervos DAO to receive issuance rewards](https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c). An implicit storage cost proportional to space and time is created: if an owner utilizes their cell to store state, they will incur an opportunity cost equivalent to what they could have earned by locking these tokens in the Nervos DAO. This is analogous to 'state rent' as described in the Ethereum community and is the CKB's solution to the 'state bloat' problem.

*The implementation of the Nervos DAO and CKByte issuance design also allows 'store of value users' to effectively hold hard-capped tokens (similar to Bitcoin's hard cap).* 

To learn more about the CKB token economics, please refer to the [token economics RFC](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).
