# Economics of Nervos CKB

## Introduction

Public permissionless blockchains are open and distributed systems with diverse groups of participants. A well-designed crypto-economic model provides incentives that align participants' economic self-interest, leading to emergent behaviors that contribute to the blockchain network's success.

The Nervos Common Knowledge Base (Nervos CKB for short) is a preservation-focused, "Store of Assets" blockchain. It is designed to best support on-chain state and off-chain computation, while providing sustainable security and decentralization.




## Background

Bitcoin uses its native currency to incentivize miners to validate and produce blocks and encourages block producing miners to propagate new blocks as soon as they produce them and validate blocks as soon as they receive them. 

Bitcoins function as both a utility token (Medium of Exchange) and an asset (Store of Value). The Bitcoin protocol constrains the network's transaction throughput by using a fixed block size limit and users bid with fees on the limited throughput to have their transactions processed, fees are determined by transaction demand. 

'Store of Value' users view the Bitcoin network as a protocol to provide security to its native cryptocurrency, which can preserve value over time. To succeed as a Store of Value network, a blockchain must continue to keep its monetary policy stable and its network secure and decentralized.

Alternative blockchains that have been designed to compete based on throughput capacity must prioritize for low transaction costs. Transactional users are willing to accept sub-optimal security, because of their limited exposure to security risk. These users are willing to accept the possibility of censorship, as long as they have the option to take their transaction elsewhere. 

In order to preserve assets and function as a store of value, a blockchain must be sustainably secure and censorship-resistant, with a low barrier for consensus and full node participation. A blockchain that prioritizes security or censorship-resistance will have higher cost transactions, making the network less cost competitive. An economic model is required that does not focus on transaction demand, but ongoing occupation of the global state, security and decentralization.

The level of platform security must also grow along with the asset value it preserves. Otherwise, as asset value grows, it will be increasingly profitable to "double-spend" assets by attacking the consensus process of the platform. The security of a multi-asset or "smart contract" platform can be seen as a "public good" that benefits all projects built on top of it. To sustain this security, there must be a clear mechanism through which the underlying blockchain captures the economic success of its ecosystem and raises its own level of security.




## Native Token of Nervos CKB: CKByte

The native token of Nervos CKB is the "Common Knowledge Byte", or "CKByte" for short. CKBytes represent rights to cell capacity in bytes, providing token owners the ability to occupy a portion of the blockchain's overall global state.

For example, if Alice owns 1000 CK Bytes, she can create a cell with 1000 bytes in capacity, or multiple cells that add up to 1000 bytes in capacity. The smallest unit of the native token is the "CK Shannon": 1 CKByte = 100,000,000 CK Shannons. "CK Shannon" is the indivisible unit.

The design of the CKByte creates "First Class Assets", allowing cell owners to always control their own assets. This also puts the cost of state ownership on the users, leading to more sustainable economics than a "pay once, store forever" paradigm. Developers will only have to hold CKBytes to store application logic. 

The design of the CKByte allows for value capture of the assets preserved on CKB. Demand to hold assets on the platform is directly translated into demand to own the native tokens and this allows CKB to sustainably grow its security budget over time (through block rewards denominated in CKBytes) and function as an effective "Store of Assets" platform.



## CKByte Issuance Schedule

Since the native CKBytes represent the right to expand global state, the issuance policy of the native token bounds the rate of state growth. When state storage is bounded, it becomes a scarce resource and can be market-priced and traded. 

To maintain a decentralized and censorship-resistant network, it is important to limit the resource requirements of consensus and full nodes. In addition to controlling state storage through issuance, Nervos CKB also limits the blockchain's throughput of bandwidth and computation, similar to limited block space in Bitcoin or limited computation in Ethereum. 

In a Store of Value network, relying on inflation to fund network security is incentive compatible with users. An inflation-based block reward represents indirect payments from the beneficiaries of the network's ongoing security to the providers of such security. In Nervos CKB, there are two types of native CKByte token issuance: 

### Base Issuance

"Base issuance" has a finite total supply, with a Bitcoin-like issuance schedule: the amount of base issuance halves approximately every 4 years until all the base issuance tokens have been mined. Initial issuance is (33.6 billion / 2) / 4 CKBytes per year for the first 4 years. All base issuance tokens are rewarded to the miners as incentives to protect the network.

### Secondary Issuance

"Secondary issuance" is designed to collect state rent, and has an issuance amount that is constant over time (1.344 billion CKBytes/year). State rent adds the necessary time dimension to the fee structure of state storage occupation and Nervos CKB uses a "targeted inflation" scheme to collect rent instead of periodic rent payments. While an owner is utilizing their CKBytes to store data on Nervos CKB, the value of these CKBytes will be slowly reduced through inflation. Long-term holders can protect the value of their holdings by depositing in the Nervos DAO as described in the next section.

After base issuance stops, block rewards will consist of only secondary issuance rewards, ensuring that miner compensation is predictable and based on preservation demand instead of transactional demand. This maintains the blockchain's incentive compatibility as the base issuance moves toward 0. Secondary issuance will also play an important role in stabilizing miner income in a future when most transactions move to layer 2 solutions, leaving the layer 1 blockchain with relatively low transaction demand.




## Store of value use case & Nervos DAO

The narrative of "digital gold" and 21,000,000 BTC has been a powerful force in investment communities. The hard-capped supply and fixed monetary policy of Bitcoin makes it very attractive for long-term investors. This use case of Bitcoin is referred to as "store of value" and in Nervos the CKByte has also designed to be a store of value for long-term holders. 

To accomplish this, the Nervos CKB blockchain contains a special contract called the "Nervos DAO", which allows users to deposit and lock their CKBytes and then receive secondary issuance rewards that offset inflation beyond the hard-capped base issuance. With CKBytes locked in the Nervos DAO, the value of long-term holdings are not affected by inflation from secondary issuance, and these users are effectively holding a cryptocurrency with a hard-capped issuance like Bitcoin.



## Miner Compensation

In Nervos CKB, miners are compensated with both block rewards and transaction fees. They receive all of the base issuance reward and a portion of secondary issuance. As base issuance moves toward 0, miners will still receive state rent income independent of transaction demand, but tied to the occupation of the blockchain and adoption of the common knowledge base.

### Transaction Fees

To ensure decentralization, Nervos CKB restricts both the computation and bandwidth throughput of the blockchain, effectively creating an auction among users to use those system resources. When submitting a transaction, the amount of total input cell capacity that exceeds total output cell capacity is a transaction fee payable to the miner who creates the block containing that transaction.

### Paying for Transaction Fees with User Defined Tokens

In Nervos CKB, transaction fees can be paid with native tokens, user defined tokens or a combination of both. Users are also free to use other tokens (for example, stablecoins) to pay transaction fees, as long as miners are willing to accept them.

### Transaction Cycles (Computation)

"Cycles" are units of computation that are required for executing each transaction. The Nervos CKB VM (link) is a RISC-V CPU simulator, "cycles" refer to real CPU computation cycles in the VM. The number of cycles the transaction consumes is added to the peer-to-peer messages between full nodes. 

When producing blocks, miners order transactions based on both transaction fees and the number of computation cycles necessary for transaction validation, maximizing per-computation-cycle income within the computation and bandwidth throughput restrictions.




## Incentive system of Nervos CKB

In Nervos CKB, the incentives of stakeholders are as follows: 

- users storing assets users want security of their assets; 
- developers want more adoption (reflected in more assets preserved); 
- miners want higher income from block rewards/fees;
- token holders want price appreciation of their tokens 

A higher token price supports everyone's objectives - the network becomes more secure (users), the network becomes more attractive to store assets (developers), miners get higher income and token holders get better returns.

As the number of assets and amount of common knowledge secured by the network grows, more native tokens of Nervos CKB will be used to store data on the blockchain. This will reduce circulating supply and provide positive support to the market price of the tokens. 

A higher token price and increased share of secondary issuance will motivate miners to expand operations, increasing network security, increasing the intrinsic value of the network and native tokens, attracting more and higher value preservation usage.




## Examples of use cases

### Subscriptions

Recurring payment or subscription is a typical economic model for services offered on a blockchain. One such example is an off-chain transaction monitoring service (or "watchtower") that's often needed for layer 2 solutions. 

On Nervos CKB, these services can ask that users lock a certain number of CKBytes in the Nervos DAO and designate the service providers as beneficiaries of the generated income. Users can stop using the services by withdrawing their tokens from the Nervos DAO.

### Liquidity Income

In a Plasma-like layer 2 solution, a typical pattern is: users deposit native tokens in a smart contract on the layer 1 blockchain in exchange for transaction tokens on the layer 2 blockchain. On Nervos CKB, a layer 2 operator can have users commit to fixed duration deposits, and then use such deposits to provide liquidity to the lending market and earn income, providing these operators an additional revenue stream on top of fees collected on the layer 2 blockchain.
