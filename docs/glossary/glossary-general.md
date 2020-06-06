---
id: glossary-general
title: General Glossary
---

<!--
Notes:
- Synonyms, Not To Be Confused With, and See Also should be omitted when they are empty.
- Avoid links in the definition. Add them to the sections in the note above.
- Definitions should be descriptive but brief. The Glossary is not a tutorial. 
- Links should be alphabetized with local links appearing above external links.
-->

## Address
A shorthand name for Payment Address.

#### Synonyms
- [Payment Address](#payment-address)

---

## Asset
A shorthand name for digital asset.

#### Synonyms
- [Digital Asset](#digital-asset)
- [Token](#token)

---

## Block
A record in the blockchain that contains and confirms transactions.

#### See Also
- [Blockchain](#blockchain)
- [Confirmation](#confirmation)
- [Transaction](#transaction)

---

## Block Height
The block height is the total number of blocks that have been confirmed on the blockchain.

This term can also used to refer to identify a single unique block when specifying a specific block height since there is always exactly one block at any block height.

#### Synonyms
- [Height](#height)

#### See Also
- [Block](#block)
- [Blockchain](#blockchain)
- [Confirmation](#confirmation)

---

## Block Interval
The approximate amount of time between between the creation of two blocks in a blockchain.

On Bitcoin blockchain the block interval is approximately every 10 minutes. On the Nervos blockchain the block interval is variable, but normally under 10 seconds.

#### Synonyms
- [Block Time](#block-time)

#### See Also
- [Block](#block)
- [Blockchain](#blockchain)

---

## Block Propagation
The process of synchronizing a new block to the majority of full nodes in the network.

#### See Also
- [Block](#block)
- [Broadcast](#broadcast)
- [Full Node](#full-node)

---

## Block Reward
A payment that is made in the native currency of the blockchain that is paid to to miners for providing the computational resources create a block and secure the blockchain.

#### See Also
- [Block](#block)
- [Block Subsidy](/glossary/glossary-technical#block-subsidy)

---

## Block Time
A alternate name for Block Interval.

#### Synonyms
- [Block Interval](#block-interval)

---

## Blockchain
An immutable data structure that where each subsequent block of data is cryptographically linked to the previous blocks. This creates a chain like structure where none of the historical data can be altered without causing a validation error.

#### See Also
- [Block](#block)

---

## Broadcast
A message that is sent to all nodes in a blockchain network.

#### See Also
- [Blockchain](#blockchain)
- [Node](#node)

---

## Capacity
The maximum amount of space (in bytes) that a Cell can occupy on the Nervos blockchain.

#### Synonyms
- [CKByte](#ckbyte)

#### See Also
- [CKB](#ckb)
- [Common Knowledge Base](#common-knowledge-base)
- [Common Knowledge Byte](#common-knowledge-byte)
- [Nervos Blockchain](#nervos-blockchain)

---

## Cell
A simple structure used hold a piece of state or data on the Nervos CKB.

A Cell is similar in concept to a Bitcoin UTXO.

#### Synonyms
- [Micro-State](#micro-state)

#### See Also
- [Dead Cell](/glossary/glossary-technical#dead-cell)
- [Live Cell](/glossary/glossary-technical#live-cell)
- [Nervos CKB](/glossary/glossary-technical#nervos-ckb)
- [Cell Model in Key Concepts](/key-concepts/cell-model)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Cell Model
A representation of how state is managed on Nervos CKB.

#### See Also
- [Lock Script](/glossary/glossary-technical#lock-script)
- [Nervos CKB](/glossary/glossary-technical#nervos-ckb)
- [Type Script](/glossary/glossary-technical#type-script)
- [Cell Model in Key Concepts](/key-concepts/cell-model)
- [Cell Model on the Nervos Blog](https://medium.com/nervosnetwork/https-medium-com-nervosnetwork-cell-model-7323fca57571)
- [UTXO on Bitcoin.org](https://bitcoin.org/en/glossary/unspent-transaction-output)

---

## Chain
A shorthand name for blockchain.

#### Synonyms
- [Blockchain](#blockchain)

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
- [Nervos CKB](/glossary/glossary-technical#nervos-ckb)
- [RISC-V](/glossary/glossary-technical#risc-v)
- [Script](/glossary/glossary-technical#script)
- [Virtual Machine on Wikipedia](https://en.wikipedia.org/wiki/Virtual_machine)

---

## Cold Storage
A method of securing funds by placing them in a cold wallet; a type of wallet that is never connected to the internet.

#### See Also
- [Cold Wallet](#cold-wallet)
- [Hardware Wallet](#hardware-wallet)
- [Wallet](#wallet)

---

## Cold Wallet
A wallet that is used to secure assets offline. This wallet is permanently disconnected from the internet, and not vulnerable to attacks which rely on an active internet connection.

#### See Also
- [Cold Storage](#cold-storage)
- [Wallet](#wallet)

---

## Common Knowledge Base
A layer 1 proof of work blockchain that provides a foundation of decentralized trust for the Nervos Network.

#### Synonyms
- [CKB](#ckb)
- [Nervos CKB](/glossary/glossary-technical#nervos-ckb)

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
- [Nervos CKB](/glossary/glossary-technical#nervos-ckb)
- [Shannon](#shannon)

---
## Confirmation
A process where a transaction has been accepted and verified by the network and included in a block.

#### See Also
- [Block](#block)
- [Transaction](#transaction)

---

## Consensus
Consensus is a state of agreement between the participants (nodes) of a decentralized network.

#### See Also
- [Full Node](#full-node)
- [Node](#node)

---

## Cryptocurrency
Digital currency that relies on mathematics and cryptography to secure funds and facilitate transfers from one party to another.

---

## Cryptographic Signature
A concise piece of proof data which is used to prove that the creator of the signature has ownership of a specific private key by "signing" a unique piece of data. This signing process proves ownership of the private keys without revealing the private keys.

#### Synonyms
- [Private Key](#private-key)
- [Signature](#signature)

---

## Cryptography
The study and practice of using mathematics to secure communications and information.

#### See Also
- [Cryptography at Wikipedia](https://en.wikipedia.org/wiki/Cryptography)

---

## Cycles
The number of RISC-V computational cycles required by a script to execute.

This is a similar concept to Ethereum's Gas.

#### See Also
- [Script](/glossary/glossary-technical#script)
- [RISC-V](/glossary/glossary-technical#risc-v)
- [Gas on the Ethereum Wiki](https://github.com/ethereum/wiki/wiki/Glossary)

---

## DAO
Short for Decentralized Autonomous Organization. A DAO is an organization run by the rules of a computer program. A DAO is controlled by stakeholders, and may not have a physical location, therefore reducing the influence of governments.

#### See Also
- [DAO on Wikipedia](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)

---

## Decentralization
The process of spreading the responsibility and ownership between multiple parties in order to mitigate the risks associated with a single party being in control.

#### See Also
- [Distributed](#distributed)
- [Decentralization on Wikipedia](https://en.wikipedia.org/wiki/Decentralization)

---

## Digital Asset
A digital asset is an individual piece of data that has value, or represents another entity that has value.

Digital assets are most commonly represented as tokens, which may be used as digital currency or represent physical items such as real estate.

#### Synonyms
- [Asset](#asset)
- [Token](#token)

---

## Digital Currency
A type of currency that primarily exists digitally over the internet. Physical representations of the currency, in the form of cards, bills, or coins, may exist, but are secondary mediums.

#### See Also
- [Cryptocurrency](#cryptocurrency)

---

## Distributed
A system where components are spread across multiple nodes to parallelize workloads, add redundancy, or eliminate single points of failure.

#### See Also
- [Decentralization](#decentralization)

---

## Double Spend
A double spend is a fraudlent action where a cryptocurrency token is spent in two places at once, effectively allowing the attacker to spend more tokens than they actually own.

The potential for a double spend is based on network synchronization delays. These problems are automatically resolved over time, which is why most blockchains set guidelines on the minimum number of confirmations that should be accumulated before considering a transaction final.

#### See Also
- [Confirmation](#confirmation)
- [Cryptocurrency](#cryptocurrency)
- [Token](#token)
- [Transaction](#transaction)

---

## Epoch
An epoch is a period of time for a set of blocks.

In Nervos an epoch is approximately four hours.

#### See Also
- [Block](#block)

---

## First-Class Assets
A unique property of CKB wherein ownership of a Cell, and the data contained within, is not assigned by the issuer, developer, or smart contract. The user owns the cell and is responsible for costs associated with state rent.

#### See Also
- [Cell](#cell)
- [Cell Model](#cell-model)
- [State Rent](/glossary/glossary-economic#state-rent)
- [First-Class Asset on the Nervos Network Blog](https://medium.com/nervosnetwork/first-class-asset-ff4feaf370c4)

---

## Fungible Token
Any token where every unit has identical characteristics and is interchangeable with other tokens of the same type.

Fungible tokens represent the vast majority of cryptocurrencies.

#### See Also
- [Non-Fungible Token](#non-fungible-token)
- [Token](#token)
- [User-Defined Token](#user-defined-token)

---

## Full Node
A node that contains a complete copy of the entire blockchain history.

#### Synonyms
- [Node](#node)

---

## Hardware Wallet
A cryptocurrency wallet that uses a physical hardware component to store private keys. These devices are permanently disconnected from the internet and typically interface with computers only for specific activities such as sending funds.

A hardware wallet is a form of cold wallet.

#### See Also
- [Cold Storage](#cold-storage)
- [Cold Wallet](#cold-wallet)
- [Private Key](#private-key)
- [Wallet](#wallet)

---

## Hash Rate
A measure of the speed at which a computer is able to complete cryptographic operations. These operations are known as "hashing", and are often measured in hashes per second.

#### See Also
- [Miner](#miner)
- [Network Hash Rate](#network-hash-rate)

---

## Height
A shorthand name for block height.

## Synonyms
- [Block Height](#block-height)

---

## Light Client
A type of node software with much lower resource requirements than a full node. A light client allows for the most common basic functions, but does not have advanced functionality.

Light clients do not contain a copy of the full blockchain or full state. They typically rely on full nodes in the network in order to operate.

#### See Also
- [Blockchain](#blockchain)
- [Full Node](#full-node)
- [Node](#node)

---

## Mainnet
The Nervos CKB public blockchain.

The name of the Nervos CKB Mainnet is Lina.

#### Synonyms
- [CKB](#ckb)
- [Common Knowledge Base](#common-knowledge-base)
- [Lina](/glossary/glossary-technical#lina)
- [Nervos CKB](/glossary/glossary-technical#nervos-ckb)

#### Not To Be Confused With
- [Aggron](/glossary/glossary-technical#aggron)
- [Testnet](#testnet)

---

## Mempool
A shorthand name for memory pool. A "waiting area" on full nodes for transactions that have been broadcasted to the network but have not yet been confirmed on the blockchain.

#### See Also
- [Confirmation](#confirmation)
- [Transaction](#transaction)

---

## Micro-State
A small piece of state that is isolated and often able to be acted upon independently without knowing the total state of the network.

On Nervos, micro-state is represented by a Cell.

#### Synonyms
- [Cell](#cell)

#### See Also
- [State](#state)

---

## Miner
A miner is a computer that provides computing power to validate transactions and create the blocks in the blockchain.

#### See Also
- [Block](#block)
- [Blockchain](#blockchain)

---

## Miner Fee
Another term for transaction fee.

#### Synonyms
- [Transaction Fee](#transaction-fee)

---

## Mining
The practice of providing computational power to validate transactions and create blocks in the blockchain in exchange for a mining reward.

#### See Also
- [Block](#block)
- [Blockchain](#blockchain)
- [Mining Reward](#mining-reward)
- [Transaction](#transaction)

---

## Mining Reward
Native tokens that are paid to a miner in exchange for providing the computational resources required for mining.

#### See Also
- [Miner](#miner)
- [Mining](#mining)
- [Native Token](#native-token)

---

## Native Token
A token type which is used for paying fees and rewards on a public blockchain. This token is often unique as it is the only token that must exist on the blockchain in order to operate.

On Nervos the native token is the CKByte.

#### See Also
- [CKByte](#ckbyte)
- [Token](#token)

---

## NC-MAX
The consensus algorithm used on the Nervos blockchain.

#### See Also
- [Consensus](#consensus)
- [Nervos Blockchain](#nervos-blockchain)

---

## Neighbor
A node that is directly connected to another node in the blockchain peer to peer network.

#### See Also
- [Node](#node)
- [Peer to Peer](#peer-to-peer)

---

## Nervos Blockchain
The layer 1 blockchain of the Nervos Network known as the Common Knowledge Base.

#### Synonyms
- [Common Knowledge Base](#common-knowledge-base)
- [Layer 1](/glossary/glossary-technical#layer-1)
- [Nervos CKB](/glossary/glossary-technical#nervos-ckb)

---

## Nervos DAO
A system that allows users to lock CKBytes for a period of time to earn rewards from Secondary Issuance. This process is similar to staking on other platforms.

#### See Also
- [CKByte](#ckbyte)
- [DAO](#dao)
- [Secondary Issuance](/glossary/glossary-economic#secondary-issuance)
- [Nervos DAO Explained on the Nervos Blog](https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c)

---

## Network Hash Rate
A measurement of the total computational processing power which is dedicated to providing security to the network.

#### See Also
- [Hash Rate](#hash-rate)
- [Miner]

---

## Node
A computer that is running the blockchain node software, which allows them to participate in the blockchain's peer to peer network.

#### Synonyms
- [Full Node](#full-node)

#### See Also
- [Pruned Node](#pruned-node)

---

## Non-Fungible Token
Any token where every unit within the same type can have different characteristics, making each token unique.

Non-fungible tokens are often used for digital representation of unique real-world items, such as real-estate.

#### See Also
- [Fungible Token](#fungible-token)
- [Token](#token)
- [User-Defined Token](#user-defined-token)

---

## Open Source
A piece of software where source code is freely available for examination or alteration by any third-party.

#### See Also
- [What is Open Source at OpenSource.com](https://opensource.com/resources/what-open-source)

---

## P2P
A shortname name for peer to peer.

#### Synonyms
- [Peer to Peer](#peer-to-peer)

---

## Paper Wallet
A form of storing a recovery phrase or private keys offline by printing them on a piece of paper. This document would then be stored by traditional means in a secured location of the user's choosing, such as a safe.

#### See Also
- [Private Key](#private-key)
- [Wallet](#wallet)

---

## Payment Address
A string of letters and numbers that cryptocurrency and assets can be sent to and from.

Nervos addresses always begin with the letters "ckb" and are 46 characters in length.

A payment address is designed to be shared with others, similar to an email address.

#### Synonyms
- [Address](#address)

---

## Peer to Peer
A type of network where the nodes communicate directly with each other instead of going through an intermediary centralized server.

#### Synonyms
- [P2P](#p2p)

#### See Also
- [Node](#node)

---

## Proof of Work
A type of consensus algorithm that requires high computational resources in order to produce answers to cryptographic puzzles in return for a mining reward paid in native tokens.

These answers used to produce blocks and process transactions in a public blockchain. The computational difficulty itself is the basis for security in the public blockchain because it is extremely costly to replicate.

#### See Also
- [Block](#block)
- [Consensus](#consensus)
- [Mining Reward](#mining-reward)
- [Proof of Stake](#proof-of-stake)
- [Transaction](#transaction)

---

## Proof of Stake
A type of consensus algorithm where the participants of the network cast votes to reach agreement on the creation of blocks and processing of transactions. The strength of each vote is weighted by the amount of native token owned by the voter.

#### See Also
- [Consensus](#consensus)
- [Mining Reward](#mining-reward)
- [Proof of Work](#proof-of-work)
- [Transaction](#transaction)

---

## Private Key
A string of letters and numbers that is used to prove ownership of cryptocurrency or digital assets, allowing them to be sent to other payment addresses. A private key is normally stored in a wallet.

A private key must be kept secret at all times. A private key works similarly to a key to a safe containing your cryptocurrency. Anyone with the key has the ability to open the safe and take the contents.

#### See Also
- [Digital Asset](#digital-asset)
- [Paper Wallet](#paper-wallet)
- [Payment Address](#payment-address)
- [Wallet](#wallet)

---

## Pruned Node
A node which contains only part of the blockchain history.

#### See Also
- [Node](#node)

---

## Shannon
A fractional denomination of CKBytes. One CKByte is equal to 100,000,000 Shannons.

A Shannon is the equivalent of a Bitcoin Satoshi.

#### See Also
- [CKByte](#ckbyte)
- [Common Knowledge Byte](#common-knowledge-byte)
- [Satoshi (denomination) on Bitcoin.org](https://bitcoin.org/en/glossary/denominations)

---

## Signature
A shorthand name for cryptographic signature.

#### Synonyms
- [Cryptographic Signature](#cryptographic-signature)

---

## State
Data stored on the blockchain. In most contexts this this means current data and excludes historical data.

#### See Also
- [Blockchain](#blockchain)

---

## Testnet
An alternate public blockchain used for testing purposes that is running the same or similar software as the Mainnet. All tokens and data on testnets have no value.

The name of the Nervos Testnet is Aggron.

#### Synonyms
- [Aggron](/glossary/glossary-technical#aggron)

#### Not To Be Confused With
- [Lina](/glossary/glossary-technical#lina)
- [Mainnet](#mainnet)

---

## Tip
A shorthand name for tip block.

#### Synonyms
- [Tip Block](#tip-block)

---

## Tip Block
The most recent block to be confirmed in a blockchain. The tip block has the highest block height in the blockchain.

#### Synonyms
- [Tip](#tip)

#### See Also
- [Block](#block)
- [Block Height](#block-height)
- [Blockchain](#blockchain)

---

## Transaction
An entry in the blockchain that describes any change in state. 

#### See Also
- [Blockchain](/glossary/glossary-general#blockchain)
- [Nervos Blockchain](/glossary/glossary-general#nervos-blockchain)

---

## Transaction Fee
A fee which is paid in the native token to miners in exchange for processing a transaction.

#### Synonyms
- [Miner Fee](#miner-fee)

#### See Also
- [Miner](#miner)
- [Native Token](#native-token)
- [Transaction](#transaction)

---

## Token
A single unit of information used to facilitate a transaction on a blockchain.

#### See Also
- [Blockchain](#blockchain)
- [Digital Asset](#digital-asset)
- [Transaction](#transaction)

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

## Wallet
A piece of software used to manage a user's private keys and payment addresses. A wallet allows a user to send and receive cryptocurrency payments. Some wallets also incorporate functionality to manage digital assets.

#### See Also
- [Paper Wallet](#paper-wallet)
- [Private Key](#private-key)
- [Payment Address](#payment-address)
- [Digital Asset](#digital-asset)

---