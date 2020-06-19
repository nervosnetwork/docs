---
id: glossary-technical
title: Technical Glossary
---

<!--
Notes:
- Synonyms, Not To Be Confused With, and See Also should be omitted when they are empty.
- Avoid links in the definition. Add them to the sections in the note above.
- Definitions should be descriptive but brief. The Glossary is not a tutorial. 
- Links should be alphabetized with local links appearing above external links.
-->

## Active Cell
A Cell in the current state of CKB. Active cells can be used as inputs to transactions.

#### Synonyms
- [Live Cell](#live-cell)

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Input](#input)
- [Transaction](/glossary/glossary-general#transaction)

---

## Aggron
The name of the main public testnet for Nervos CKB.

#### Synonyms
- [Testnet](#testnet)

#### Not To Be Confused With
- [Lina](#lina)
- [Mainnet](#mainnet)

---

## Animagus
A framework layer that runs on top of Nervos CKB which provides an easy way to query for account balances without having to go through the Cell Collection process.

#### See Also
- [Cell Collection](#cell-collection)
- [Nervos CKB](#nervos-ckb)
- [Animagus Introduction on the Nervos Blog](https://medium.com/nervosnetwork/https-medium-com-nervosnetwork-animagus-part-1-introduction-66fa8ce27ccd-cfb361a7d883)

---

## Args
Args is short for arguments, and is data provided to a Lock Script or Type Script within a Cell. This is nearly identical to arguments provided to a normal command-line application.

Arguments are stored as part of the Cell when it is created.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Lock Script](#lock-script)
- [Type Script](#type-script)

---

## Axon
A layer 2 side-chain of the Nervos CKB developed by the Nervos Core Team. Axon provides high-performance smart contract execution while utilizing Nervos CKB as a trust layer.

#### See Also
- [Layer 2](#layer-2)
- [Nervos CKB](#nervos-ckb)
- [Axon on Nervos.org](https://www.nervos.org/network/)

---

## Blake2b
A general-purpose cryptographic hashing algorithm that can create a succinct data fingerprint for any type of data.

#### See Also
- [Blake Hash Function on Wikipedia](https://en.wikipedia.org/wiki/BLAKE_(hash_function))
- [Hash Function on Wikipedia](https://en.wikipedia.org/wiki/Hash_function)

---

## Block Subsidy
A payment that is made in the native currency of the blockchain that is paid to to miners for providing the computational resources create a block and secure the blockchain.

The subsidy consists is the portion of the total block reward that is issued out of inflation for creating the block, but does not include any additional transaction fees that may be paid on top.

#### Synonyms
- [Block Reward](/glossary/glossary-general#block-reward)
- [Transaction Fee](/glossary/glossary-general#transaction-fee)

---

## BLS
A cryptographic signature scheme for signing and verification.

BLS is short for Boneh–Lynn–Shacham.

#### See Also
- [Boneh–Lynn–Shacham on Wikipedia](https://en.wikipedia.org/wiki/Boneh%E2%80%93Lynn%E2%80%93Shacham)

---

## Boxer
A lightweight Rust library for verifying the Nervos layer 1 blockchain, the Common Knowledge Base.

#### See Also
- [Common Knowledge Base](/glossary/glossary-general#common-knowledge-base)
- [Boxer on GitHub](https://github.com/xxuejie/ckb-boxer)

---

## Cell Collection
The process of gathering cells that meet certain criteria.

For example: To find the balance of a particular account, all active cells for the address would need to be collected.

#### See Also
- [Cell](/glossary/glossary-general#cell)

---

## Cellbase
The transaction in each block that is responsible for the minting of new CKBytes.

This is the equivalent of a coinbase transaction in Bitcoin.

#### See Also
- [CKByte](/glossary/glossary-general#ckbyte)
- [Coinbase on Bitcoin.org](https://bitcoin.org/en/glossary/coinbase)

---

## Commit
The process of taking a proposed transaction and adding it to the blockchain. After the transaction has been committed it is confirmed.

Miners are incentivized to commit transactions by being paid a commit reward.

#### See Also
- [Commit Reward](/glossary/glossary-economic#commit-reward)
- [Confirmation](/glossary/glossary-general#confirmation)
- [Propose](#propose)
- [Transaction](/glossary/glossary-general#transaction)

---

## Commitment Zone
Section of the block that contains transaction commitments. The commitment zone can only contain valid transactions which have appeared in the proposal zone of one of the previous 2 to 10 blocks.

#### See Also
- [Block](/glossary/glossary-general#block)
- [Transaction](/glossary/glossary-general#transaction)

---

## Consume
The process of using a Live Cell as an input to a transaction.

The process of consumption marks the Live Cell as a Dead Cell. This is the equivalent of marking a UTXO as spent in Bitcoin.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Cell Model](/glossary/glossary-general#cell-model)
- [Dead Cell](#dead-cell)
- [Live Cell](#live-cell)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Crypto Primitives
Well-established, low-level cryptographic algorithm commonly used to build out a cryptographic protocol.

#### See Also
- [Cryptographic Primitive on Wikipedia](https://en.wikipedia.org/wiki/Cryptographic_primitive)

---

## Data
In Nervos specific contexts, data may refer to the data structure within a Cell. This structure is used to hold any form of information that needs to be stored on the Nervos blockchain.

In more general contexts, data may refer to any form of information.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Cell Model](/glossary/glossary-general#cell-model)

---

## Dead Cell
A cell that has been used as an input to a previous transaction. It cannot be used as an input to a new transaction, nor can it be used as a dependency.

This is the equivalent of a "spent UTXO" in Bitcoin.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Cell Model](/glossary/glossary-general#cell-model)
- [Consume](#consume)
- [Transaction](/glossary/glossary-general#transaction)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Dep Group
A method for referencing multiple dependencies which are commonly used together using a single dependency field.

#### See Also
- [Dep Type](#dep-type)
- [Dependencies](#dependencies)
- [CKB Transaction Structure on GitHub](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md)

---

## Dep Type
A field that specifies the type of the dependency.

#### See Also
- [Dep Group](#dep-group)
- [Dependencies](#dependencies)
- [CKB Transaction Structure on GitHub](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md)

---

## Deps
A shorthand name for dependencies.

#### Synonyms
- [Dependencies](#dependencies)

---

## Dependencies
Cells that are referenced in a transaction. Cells that are referenced as dependencies are read-only and made available to any Scripts executing within the transaction. Dependencies are not consumed.

Dependencies are commonly referred to as deps.

#### Synonyms
- [Deps](#deps)

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Consume](#consume)
- [Script](#script)
- [Transaction](/glossary/glossary-general#transaction)

---

## Difficulty
A measurement of how difficult it is to solve the Proof of Work cryptographic puzzle required to create a block.

Networks automatically adjust the difficulty to control the speed at which blocks are generated as mining participants enter and exit the network.

#### See Also
- [Proof of Work](/glossary/glossary-general#proof-of-work)

---

## Diviner
A deterministic testing framework for Rust.

#### See Also
- [Diviner on GitHub](https://github.com/xxuejie/diviner)

---

## Eaglesong
The proof of work function used for mining on Nervos CKB.

#### See Also
- [Eaglesong RFC on the Nervos Github](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0010-eaglesong/0010-eaglesong.md)

---

## ERC20
An Ethereum token standard for basic fungible tokens.

An SUDT on Nervos is the equivalent of Ethereum tokens standards ERC20 and ERC777.

#### See Also
- [Fungible Token](/glossary/glossary-general#fungible-token)
- [Token](/glossary/glossary-general#token)
- [User-Defined Token](/glossary/glossary-general#user-defined-token)
- [ERC20 on Ethereum.org](https://eips.ethereum.org/EIPS/eip-20)

---

## ERC721
An Ethereum token standard for non-fungible tokens.

#### See Also
- [Non-Fungible Token](/glossary/glossary-general#non-fungible-token)
- [Token](/glossary/glossary-general#token)
- [ERC721 on Ethereum.org](https://eips.ethereum.org/EIPS/eip-721)

---

## Generator
A program that is used to create transactions that can be broadcast to the Nervos CKB network.

#### See Also
- [Nervos CKB](#nervos-ckb)
- [Transaction](/glossary/glossary-general#transaction)

---

## Governance Script
A Type Script which defines the monetary policy of a User Defined Token (UDT).

#### See Also
- [Governance Script Hash](#governance-script-hash)
- [UDT](/glossary/glossary-general#udt)
- [User Defined Token](/glossary/glossary-general#user-defined-token)
- [Type Script](#type-script)

---

## Governance Script Hash
A Blake2b hash of a Type Script which is used as an identifier for the Script when referenced by a Cell.

#### Synonyms
- [Type Script Hash](#type-script-hash)

#### See Also
- [Governance Script](#governance-script)
- [UDT](/glossary/glossary-general#udt)
- [User Defined Token](/glossary/glossary-general#user-defined-token)
- [Type Script](#type-script)

---

## Input
A Live Cell that is used in a transaction. If the transaction is accepted by the network, the Live Cell will be consumed, and marked as a Dead Cell.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Consume](#consume)
- [Dead Cell](#dead-cell)
- [Live Cell](#live-cell)
- [Transaction](/glossary/glossary-general#transaction)

---

## Keyper
A specification of how to manage wallet Lock Scripts which apply to a specific user.

#### See Also
- [Lock Script](#lock-script)

---

## Layer 1
A proof of work blockchain known as the Common Knowledge Base (CKB) that serves as the base layer for the Nervos Network.

#### Synonyms
- [CKB](/glossary/glossary-general#ckb)
- [Common Knowledge Base](/glossary/glossary-general#common-knowledge-base)

#### See Also
- [Layer 2](#layer-2)

---

## Layer 2
Any framework or protocol that is built on top of and dependent on a layer 1 blockchain.

Layer 2 systems often address different concerns than layer 1, allowing for a wider range of use cases while directly inheriting many of benefits of layer 1.

#### See Also
- [Layer 1](#layer-1)

---

## Lina
The name of public Mainnet of the Nervos CKB.

#### Synonyms
- [Mainnet](#mainnet)

#### Not To Be Confused With
- [Aggron](#aggron)
- [Testnet](#testnet)

#### See Also
- [Nervos CKB](#nervos-ckb)

---

## Live Cell
A Cell that has not been consumed and is available for use.

This is similar to an unspent transaction output (UTXO) in Bitcoin.

#### Synonyms
- [Active Cell](#active-cell)

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Cell Model](/glossary/glossary-general#cell-model)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Lock Script
A Script that enforces access and ownership of a Cell. This Script controls who has permission to use the Cell as an input. 

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Type Script](#type-script)
- [Script](#script)

---

## Lock Script Hash
A Blake2b hash of a Lock Script which is used as an identifier for the Script when referenced by a Cell.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Lock Script](#lock-script)

---

## Mainnet
The Nervos CKB public blockchain.

The name of the Nervos CKB Mainnet is Lina.

#### Synonyms
- [CKB](/glossary/glossary-general#ckb)
- [Common Knowledge Base](/glossary/glossary-general#common-knowledge-base)
- [Lina](#lina)
- [Nervos CKB](#nervos-ckb)

#### Not To Be Confused With
- [Aggron](#aggron)
- [Testnet](#testnet)

---

## Nervos CKB
The layer 1 blockchain of the Nervos Network, the Common Knowledge Base.

#### Synonyms
- [CKB](/glossary/glossary-general#ckb)
- [Common Knowledge Base](/glossary/glossary-general#common-knowledge-base)

#### See Also
- [Layer 1](#layer-1)

---

## Outpoint
A particular output Cell in a transaction.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Output](#output)
- [Transaction](/glossary/glossary-general#transaction)

---

## Output
A Live Cell that is created in a transaction.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Live Cell](#live-cell)
- [Transaction](/glossary/glossary-general#transaction)

---

## Propose
The process of taking an unconfirmed transaction out of the mempool and proposing it for commitment. A transaction is not confirmed until after it has been committed.

Miners are incentivized to propose transactions by being paid a proposal reward.

#### See Also
- [Commit](#commit)
- [Confirmation](/glossary/glossary-general#confirmation)
- [Mempool](/glossary/glossary-general#mempool)
- [Proposal Reward](/glossary/glossary-economic#proposal-reward)
- [Transaction](/glossary/glossary-general#transaction)

---

## RISC-V
An open standard instruction set architecture (ISA) for general computing.

RISC-V is the instruction set used by the CKB-VM.

#### See Also
- [CKB-VM](/glossary/glossary-general#risc-v)
- [RISC-V on Wikipedia](https://en.wikipedia.org/wiki/RISC-V)

---

## Schnorr Signature
A cryptographic signature scheme for signing and verification.

#### See Also
- [Schnorr Signature on Wikipedia](https://en.wikipedia.org/wiki/Schnorr_signature)

---

## Script
A program that executes on the CKB-VM. A Script can be one of two types:

- Lock Script - Used to control ownership and access to a Cell.
- Type Script - Used to control how a Cell is used in a transaction.

A Script is a binary executable in the ELF format for the RISC-V architecture.

#### See Also
- [CKB-VM](/glossary/glossary-general#risc-v)
- [Lock Script](#lock-script)
- [RISC-V](#risc-v)
- [Type Script](#type-script)
- [ELF on Wikipedia](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format)

---

## Shannon
A fractional denomination of CKBytes. One CKByte is equal to 100,000,000 Shannons.

A Shannon is the equivalent of a Bitcoin Satoshi.

#### See Also
- [CKByte](/glossary/glossary-general#ckbyte)
- [Common Knowledge Byte](/glossary/glossary-general#common-knowledge-byte)
- [Satoshi (denomination) on Bitcoin.org](https://bitcoin.org/en/glossary/denominations)

---

## Simple UDT
A standard that defines a the most basic implementation of a UDT fungible token on Nervos.

A Simple UDT is often referred to by its abbreviation, SUDT.

An SUDT on Nervos is the equivalent of Ethereum tokens standards ERC20 and ERC777.

#### Synonyms
- [SUDT](#sudt)

#### See Also
- [Token](/glossary/glossary-general#token)
- [UDT](/glossary/glossary-general#udt)
- [User-Defined Token](/glossary/glossary-general#user-defined-token)
- [ERC20 on Ethereum.org](https://eips.ethereum.org/EIPS/eip-20)
- [Simple UDT RFC Draft Spec on Nervos Talk](https://talk.nervos.org/t/rfc-simple-udt-draft-spec/4333/1)

---

## SUDT
An abbreviation for Simple UDT.

#### Synonyms
- [Simple UDT](#simple-udt)

---

## Testnet
An alternate public blockchain used for testing purposes that is running the same or similar software as the Mainnet. All tokens and data on testnets have no value.

The name of the Nervos CKB Testnet is Aggron.

#### Synonyms
- [Aggron](#aggron)

#### Not To Be Confused With
- [Lina](#lina)
- [Mainnet](#mainnet)

---

## Type Script
A Script that enforces the rules that must be followed in a transaction for a Cell to be consumed as an input or for a Cell to be created as an output.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Lock Script](#lock-script)
- [Script](#script)
- [Type Script Hash](#type-script-hash)

---

## Type Script Hash
A Blake2b hash of a Type Script which is used as an identifier for the Script when referenced by a Cell.

#### See Also
- [Cell](/glossary/glossary-general#cell)
- [Script](#script)
- [Type Script](#type-script)

---

## Validator
A Script that is used to ensure that a transaction created by a Generator is valid.

Validators are Scripts that run within the CKB-VM, and are either Lock Scripts or Type Scripts.

#### See Also
- [CKB-VM](/glossary/glossary-general#risc-v)
- [Lock Script](#lock-script)
- [Type Script](#type-script)
- [Transaction](/glossary/glossary-general#transaction)

---

## Witness
A set of cryptographic signatures that contains the data required to prove authorization to the resources used in a transaction.

#### See Also
- [Transaction](/glossary/glossary-general#transaction)

---
