---
id: glossary-economic
title: Economic Glossary
---

<!--
Notes:
- Synonyms, Not To Be Confused With, and See Also should be omitted when they are empty.
- Avoid links in the definition. Add them to the sections in the note above.
- Definitions should be descriptive but brief. The Glossary is not a tutorial. 
- Links should be alphabetized with local links appearing above external links.
-->

## Base Issuance
The creation of new CKBytes through temporary inflation that is paid to miners through Base Rewards.

Base Issuance is paid for by using a fixed and decreasing inflation schedule. Approximately every four years the amount is halved until eventually stopping when the cap of 33.6 billion CKBytes have been issued.

#### See Also
- [Base Reward](#base-reward)
- [CKByte](/glossary/glossary-general#ckbyte)
- [Secondary Issuance](#secondary-issuance)
- [Miner](/glossary/glossary-general#miner)
- [Crypto-Economics RFC on Nervos Network GitHub](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md)

---

## Base Reward
A subsidy paid to miners in CKBytes for providing the compute and storage requirements required for processing transactions and persisting data on Nervos.

Base Rewards are created from Base Issuance and will decrease over time until eventually ending.

#### See Also
- [Base Issuance](#base-issuance)
- [CKByte](/glossary/glossary-general#ckbyte)
- [Miner](/glossary/glossary-general#miner)
- [Transaction](/glossary/glossary-general#transaction)

---

## Commit Reward
A reward paid to miners in CKBytes for committing a previously proposed transaction. After the transaction has been committed it is confirmed.

#### See Also
- [CKByte](/glossary/glossary-general#ckbyte)
- [Confirmation](/glossary/glossary-general#confirmation)
- [Miner](/glossary/glossary-general#miner)
- [Transaction](/glossary/glossary-general#transaction)

---

## Fiat Currency
Fiat currency is a form of money that has no intrinsic value. The value of fiat currency is derived from the support of the governing body that maintains it, and by the agreed value by parties that transact with it.

#### See Also
- [Cryptocurrency](/glossary/glossary-general#cryptocurrency)
- [Digital Currency](/glossary/glossary-general#digital-currency)

---

## Heavy Asset Problem
A common problem found in multi-asset blockchain platforms where the value of the assets stored on the chain gains significant value but the native token of the chain does not. This raises the incentive to attack the the network, but does not increase the security because the value of the native token is what is used to secure the network.

#### See Also
- [Asset](/glossary/glossary-general#asset)
- [Starving Layer 1 Problem](#starving-layer-1-problem)
- [Tragedy of the Security Commons](#tragedy-of-the-security-commons)

---

## Liquidity
The ability for an asset to be bought or sold easily without causing a significant change in the current market price.

#### See Also
- [Asset](/glossary/glossary-general#asset)

---

## Proposal Reward
A reward paid to miners in CKBytes for proposing an unconfirmed transaction. After the transaction has been proposed it becomes eligible to be committed.

#### See Also
- [CKByte](/glossary/glossary-general#ckbyte)
- [Confirmation](/glossary/glossary-general#confirmation)
- [Miner](/glossary/glossary-general#miner)
- [Transaction](/glossary/glossary-general#transaction)

---

## Secondary Issuance
The creation of new CKBytes through limited and decreasing inflation that is paid to miners through Secondary Rewards.

Secondary Issuance follows a fixed inflation schedule of 1.344 billion CKBytes per year. This amount does not change. Unlike Base Issuance, Secondary Issuance does not affect everyone on the network. It is a small and targeted inflation from users that occupy space on Nervos or hold their CKBytes outside of the Nervos DAO.

#### See Also
- [Base Issuance](#base-issuance)
- [CKByte](/glossary/glossary-general#ckbyte)
- [Nervos DAO](/glossary/glossary-general#nervos-dao)
- [Secondary Reward](#secondary-reward)
- [State](/glossary/glossary-general#state)
- [Crypto-Economics RFC on Nervos Network GitHub](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md)

---

## Secondary Reward
A subsidy paid to miners in CKBytes for providing the compute and storage requirements required for processing transactions and persisting data on Nervos.

Secondary Rewards are created from Secondary Issuance, and continuously pay miners for the preservation of state data contained on the blockchain.

#### See Also
- [CKByte](/glossary/glossary-general#ckbyte)
- [Miner](/glossary/glossary-general#miner)
- [Secondary Issuance](#secondary-issuance)
- [Transaction](/glossary/glossary-general#transaction)

---

## Starving Layer 1 Problem
A scenario that can arise in multi-layer blockchain platforms where the vast majority of the transaction traffic moves from layer 1 to layer 2, taking the vast majority of transaction fees with it. If layer 1 relies exclusively on transaction fees to support the security of the platform, it may end up not having enough incentives available to properly secure it.

#### See Also
- [Heavy Asset Problem](#heavy-asset-problem)
- [Layer 1](/glossary/glossary-technical#layer-1)
- [Layer 2](/glossary/glossary-technical#layer-2)
- [Transaction](/glossary/glossary-general#transaction)
- [Transaction Fee](/glossary/glossary-general#transaction-fee)

---

## State Rent
A recurring fee that is paid to persist and secure state data.

On Nervos, Secondary Issuance is used to facilitate the paying of State Rent by the users who occupy the space on the Nervos blockchain.

#### See Also
- [Secondary Issuance](#secondary-issuance)
- [Nervos Blockchain](/glossary/glossary-general#nervos-blockchain)
- [Crypto-Economics RFC on Nervos Network GitHub](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md)

---

## Store of Assets
A platform which is designed to safely preserve multiple types of assets, each of which could be a store of value.

#### See Also
- [Store of Value](#store-of-value)

---

## Store of Value
An asset that is purchased to retain purchasing power in the long-term.

A good store of value either match or outpace the inflation rate of fiat currency, and has a reasonable amount of liquidity, allowing the asset to be easily sold.

#### See Also
- [Store of Assets](#store-of-assets)
- [Liquidity](#liquidity)

---

## Tail Emission
A type of reward that is paid to miners through a fixed amount of inflation.

#### See Also
- [Secondary Reward](#secondary-reward)

---

## Targeted Inflation
A form of inflation that only affects a specific subset of users.

Nervos uses Secondary Issuance to create targeted inflation on users who occupy space on the Nervos blockchain to pay State Rent. Long-term holders of CKBytes have the option of locking them in the Nervos DAO, which acts and an inflation shelter.

#### See Also
- [CKByte](/glossary/glossary-general#ckbyte)
- [Secondary Issuance](#secondary-issuance)
- [Nervos Blockchain](/glossary/glossary-general#nervos-blockchain)
- [Nervos DAO](/glossary/glossary-general#nervos-dao)
- [Crypto-Economics RFC on Nervos Network GitHub](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md)

---

## Tragedy of the Commons
A situation in a system where the participants act in accordance with their own self interest and deplete or destroy a shared resource through their collective action.

#### See Also
- [Tragedy of the Security Commons](#tragedy-of-the-security-commons)
- [Tragedy of the Storage Commons](#tragedy-of-the-storage-commons)

---

## Tragedy of the Security Commons
A situation that can emerge on multi-asset blockchain platforms where asset tokens rely on the storage and security of the blockchain platform, but do not contribute back to the platform. As the number of assets that "ride for free" increases, so does the burden placed on the underlying blockchain platform. If the assets do not contribute to the underlying platform, the available security may not properly support the network.

#### See Also
- [Heavy Asset Problem](#heavy-asset-problem)
- [Tragedy of the Commons](#tragedy-of-the-commons)
- [Tragedy of the Storage Commons](#tragedy-of-the-storage-commons)

---

## Tragedy of the Storage Commons
A situation that can emerge on incentivized blockchain platforms where mining rewards are paid for inclusion of data to the blockchain, but no rewards exist for the long-term persistance of the blockchain data. As the size of the chain grows, so do the costs associated with persisting the data. If there is no direct incentive for persisting data, fewer and fewer nodes will do so. Eventually, too few nodes will be available to properly support the network.

#### See Also
- [Tragedy of the Commons](#tragedy-of-the-commons)
- [Tragedy of the Security Commons](#tragedy-of-the-security-commons)

---
