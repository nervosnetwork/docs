---
id: glossary
title: Glossary
---

<!--
Notes:
- Synonyms, Not To Be Confused With, and See Also should be omitted when they are empty.
- Avoid links in the definition. Add them to the sections in the note above.
- Definitions should be descriptive but brief. The Glossary is not a tutorial. 
- Links should be alphabetized with local links appearing above external links.
-->

## Active cell
A Cell in the current state of CKB. Active cells can be used as inputs to transactions.

#### Synonyms
- [Live Cell](#live-cell)

#### See Also
- [Cell](#cell)
- [Input](#input)
- [Transaction](#transaction)

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
- [Cell](#cell)
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

## Block
A record in the blockchain that contains and confirms transactions.

#### See Also
- [Confirmation](#confirmation)
- [Transaction](#transaction)

---

## Confirmation
A process where a transaction has been accepted and verified by the network and included in a block.

#### See Also
- [Block](#block)
- [Transaction](#transaction)

---

## First-Class Assets
A unique property of CKB wherein ownership of a Cell, and the data contained within, is not assigned by the issuer, developer, or smart contract. The user owns the cell and is responsible for costs associated with state rent.

#### See Also
- [Cell](#cell)
- [Cell Model](#cell-model)
- [First-Class Asset on the Nervos Network Blog](https://medium.com/nervosnetwork/first-class-asset-ff4feaf370c4)
- [State Rent](#state-rent)

---

## Capacity
The maximum amount of space (in bytes) that a Cell can occupy on the CKB blockchain.

#### Synonyms
- [CKByte](#ckbyte)

#### See Also
- [CKB](#ckb)
- [Common Knowledge Base](#common-knowledge-base)
- [Common Knowledge Byte](#common-knowledge-byte)

---

## Cell
A simple structure used hold a piece of state or data on the Nervos CKB.

A Cell is similar in concept to a Bitcoin UTXO.

#### See Also
- [Dead Cell](#dead-cell)
- [Live Cell](#live-cell)
- [Nervos CKB](#nervos-ckb)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Cell Model
A representation of how state is managed on Nervos CKB.

#### See Also
- [Lock Script](#lock-script)
- [Nervos CKB](#nervos-ckb)
- [Type Script](#type-script)
- [Cell Model on the Nervos Blog](https://medium.com/nervosnetwork/https-medium-com-nervosnetwork-cell-model-7323fca57571)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Cell Collection
The process of gathering cells that meet certain criteria.

For example: To find the balance of a particular account, all active cells for the address would need to be collected.

#### See Also
- [Cell](#cell)

---

## Cellbase
The transaction in each block that is responsible for the minting of new CKBytes.

This is the equivalent of a coinbase transaction in Bitcoin.

#### See Also
- [CKBytes](#ckbytes)
- [Minting](#minting)
- [Coinbase on Bitcoin.org](https://bitcoin.org/en/glossary/coinbase)

---

## CKB
An abbreviation which can have different meanings depending on the context:

- Common Knowledge Base - The layer 1 blockchain of the Nervos Network.
- Common Knowledge Byte - The native token of the Nervos Common Knowledge Base.

#### Synonyms
- [Common Knowledge Base](#common-knowledge-base)
- [Common Knowledge Byte](#common-knowledge-byte)

---

## CKByte
A shorthand name for Common Knowledge Byte.

CKByte is also sometimes shortened to CKB. Exchanges often use CKB as the ticker symbol.

#### Synonyms
- [CKB](#ckb)
- [Common Knowledge Byte](#common-knowledge-byte)

#### Not To Be Confused With
- [Common Knowledge Base](#common-knowledge-base)

---

## CKB-VM
The virtual machine used to execute Scripts on Nervos CKB.

The instruction set of CKB-VM is RISC-V.

#### See Also
- [Nervos CKB](#nervos-ckb)
- [RISC-V](#risc-v)
- [Script](#script)
- [Virtual Machine on Wikipedia](https://en.wikipedia.org/wiki/Virtual_machine)

---

## Commitment Zone
Section of the block that contains transaction commitments. The commitment zone can only contain valid transactions which have appeared in the proposal zone of one of the previous 2 to 10 blocks.

#### See Also
- [Block](#block)
- [Transaction](#transaction)

---

## Common Knowledge Base
A layer 1 proof of work blockchain that provides a foundation of decentralized trust for the Nervos Network.

#### Synonyms
- [CKB](#ckb)
- [Nervos CKB](#nervos-ckb)

#### Not To Be Confused With
- [Common Knowledge Byte](#common-knowledge-byte)

#### See Also
- [Nervos CKB on Nervos.org](https://www.nervos.org/ckb/)

---

## Common Knowledge Byte
The native token of the Nervos layer 1 blockchain, the Common Knowledge Base.

Common Knowledge Byte is often abbreviated as CKByte or CKB.

Owning a CKByte entitles the holder to store one byte of data on the Nervos CKB.

#### Synonyms
- [CKB](#ckb)
- [CKByte](#ckbyte)

#### Not To Be Confused With
- [Common Knowledge Base](#common-knowledge-base)

#### See Also
- [Capacity](#capacity)
- [Nervos CKB](#nervos-ckb)
- [Shannon](#shannon)

---

## Consume
The process of using a Live Cell as an input to a transaction.

The process of consumption marks the Live Cell as a Dead Cell. This is the equivalent of marking a UTXO as spent in Bitcoin.

#### See Also
- [Cell](#cell)
- [Cell Model](#cell-model)
- [Dead Cell](#dead-cell)
- [Live Cell](#live-cell)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Crypto Primitives
Well-established, low-level cryptographic algorithm commonly used to build out a cryptographic protocol.

#### See Also
- [Cryptographic Primitive on Wikipedia](https://en.wikipedia.org/wiki/Cryptographic_primitive)

---

## Cycles
The number of RISC-V computational cycles required by a script to execute.

This is a similar concept to Ethereum's Gas.

#### See Also
- [Script](#script)
- [RISC-V](#risc-v)
- [Gas on the Ethereum Wiki](https://github.com/ethereum/wiki/wiki/Glossary)

---

## DAO
Short for Decentralized Autonomous Organization. A DAO is an organization run by the rules of a computer program. A DAO is controlled by stakeholders, and may not have a physical location, therefore reducing the influence of governments.

#### See Also
- [DAO on Wikipedia](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)

---

## Dead Cell
A cell that has been used as an input to a previous transaction. It cannot be used as an input to a new transaction, nor can it be used as a dependency.

This is the equivalent of a "spent UTXO" in Bitcoin.

#### See Also
- [Cell](#cell)
- [Cell Model](#cell-model)
- [Consume](#consume)
- [Transaction](#transaction)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Deps
A shorthand name for dependencies.

#### Synonyms
- [Dependencies](#dependencies)

---

## Dependencies
Cells that are referenced in a transaction. Cells that are referenced as dependencies are read-only and made available to any Scripts executing within the transaction. Dependencies are not consumed.

#### Synonyms
- [Deps](#deps)

#### See Also
- [Cell](#cell)
- [Consume](#consume)
- [Script](#script)
- [Transaction](#transaction)

---

## Eaglesong
The proof of work function used for mining on Nervos CKB.

#### See Also
- [Eaglesong RFC on the Nervos Github](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0010-eaglesong/0010-eaglesong.md)

---

## Generator
A program that is used to create transactions that can be broadcast to the Nervos CKB network.

#### See Also
- [Nervos CKB](#nervos-ckb)
- [Transaction](#transaction)

---

## Governance Script
A Type Script which defines the monetary policy of a User Defined Token (UDT).

#### See Also
- [Governance Script Hash](#governance-script-hash)
- [UDT](#udt)
- [User Defined Token](#user-defined-token)
- [Type Script](#type-script)

---

## Governance Script Hash
A Blake2b hash of a Type Script which is used as an identifier for the Script when referenced by a Cell.

#### Synonyms
- [Type Script Hash](#type-script-hash)

#### See Also
- [Governance Script](#governance-script)
- [UDT](#udt)
- [User Defined Token](#user-defined-token)
- [Type Script](#type-script)

---

## Input
A Live Cell that is used in a transaction. If the transaction is accepted by the network, the Live Cell will be consumed, and marked as a Dead Cell.

#### See Also
- [Cell](#cell)
- [Consume](#consume)
- [Dead Cell](#dead-cell)
- [Live Cell](#live-cell)
- [Transaction](#transaction)

---

## Layer 1
A proof of work blockchain known as the Common Knowledge Base (CKB) that serves as the base layer for the Nervos Network.

#### Synonyms
- [CKB](#ckb)
- [Common Knowledge Base](#common-knowledge-base)

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
- [Cell](#cell)
- [Cell Model](#cell-model)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Lock Script
A Script that enforces access and ownership of a Cell. This Script controls who has permission to use the Cell as an input. 

#### See Also
- [Cell](#cell)
- [Type Script](#type-script)
- [Script](#script)

---

## Lock Script Hash
A Blake2b hash of a Lock Script which is used as an identifier for the Script when referenced by a Cell.

#### See Also
- [Cell](#cell)
- [Lock Script](#lock-script)

---

## Mainnet
The Nervos CKB public blockchain.

The name of the Nervos CKB Mainnet is Lina.

#### Synonyms
- [CKB](#ckb)
- [Common Knowledge Base](#common-knowledge-base)
- [Lina](#lina)
- [Nervos CKB](#nervos-ckb)

#### Not To Be Confused With
- [Aggron](#aggron)
- [Testnet](#testnet)

---

## Nervos CKB
The layer 1 blockchain of the Nervos Network, the Common Knowledge Base.

#### Synonyms
- [CKB](#ckb)
- [Common Knowledge Base](#common-knowledge-base)

#### See Also
- [Layer 1](#layer-1)

---

## Nervos DAO
A system that allows users to lock CKBytes for a period of time to earn rewards from Secondary Issuance. This process is similar to staking on other platforms.

#### See Also
- [DAO](#dao)
- [Nervos DAO Explained on the Nervos Blog](https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c)

---

## Outpoint
A particular output Cell in a transaction.

#### See Also
- [Cell](#cell)
- [Output](#output)
- [Transaction](#transaction)

---

## Output
A Live Cell that is created in a transaction.

#### See Also
- [Cell](#cell)
- [Live Cell](#live-cell)
- [Transaction](#transaction)

---

## RISC-V
An open standard instruction set architecture (ISA) for general computing.

RISC-V is the instruction set used by the CKB-VM.

#### See Also
- [CKB-VM](#ckb-vm)
- [RISC-V on Wikipedia](https://en.wikipedia.org/wiki/RISC-V)

---

## Script
A program that executes on the CKB-VM. A Script can be one of two types:

- Lock Script - Used to control ownership and access to a Cell.
- Type Script - Used to control how a Cell is used in a transaction.

A Script is a binary executable in the ELF format for the RISC-V architecture.

#### See Also
- [CKB-VM](#ckb-vm)
- [Lock Script](#lock-script)
- [RISC-V](#risc-v)
- [Type Script](#type-script)
- [ELF on Wikipedia](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format)

---

## Shannon
A fractional denomination of CKBytes. One CKByte is equal to 100,000,000 Shannons.

A Shannon is the equivalent of a Bitcoin Satoshi.

#### See Also
- [CKByte](#ckbyte)
- [Common Knowledge Byte](#common-knowledge-byte)
- [Satoshi (denomination) on Bitcoin.org](https://bitcoin.org/en/glossary/denominations)

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

## Transaction
An entry in the blockchain that describes any change in state. 

#### See Also
- [Nervos CKB](#nervos-ckb)

---

## Type Script
A Script that enforces the rules that must be followed in a transaction for a Cell to be consumed as an input or for a Cell to be created as an output.

#### See Also
- [Cell](#cell)
- [Lock Script](#lock-script)
- [Script](#script)
- [Type Script Hash](#type-script-hash)

---

## Type Script Hash
A Blake2b hash of a Type Script which is used as an identifier for the Script when referenced by a Cell.

#### See Also
- [Cell](#cell)
- [Script](#script)
- [Type Script](#type-script)

---

## UDT
An abbreviation for User-Defined Token.

#### Synonyms
- [User-Defined Token](#user-defined-token)

---

## User-Defined Token
A unique non-fungible token with properties defined by the user.

A UDT is equivalent of an Ethereum ERC20 token or ER777 token.

#### See Also
- [ERC20 on Ethereum.org](https://eips.ethereum.org/EIPS/eip-20)
- [ERC777 on Ethereum.org](https://eips.ethereum.org/EIPS/eip-777)
- [UDT Draft Spec on Nervos Talk](https://talk.nervos.org/t/rfc-simple-udt-draft-spec/4333)

---

## Validator
A Script that is used to ensure that a transaction created by a Generator is valid.

Validators are Scripts that run within the CKB-VM, and are either Lock Scripts or Type Scripts.

#### See Also
- [CKB-VM](#ckb-vm)
- [Lock Script](#lock-script)
- [Type Script](#type-script)
- [Transaction](#transaction)

---

## Witness
A set of cryptographic signatures that contains the data required to prove authorization to the resources used in a transaction.

#### See Also
- [Transaction](#transaction)

---
