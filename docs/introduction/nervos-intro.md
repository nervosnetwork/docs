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

In Nervos, there is a utility token named CKB that users can use to pay for blockchain resources, which are need for issuing and storing different tokens. This token also secures the blockchain system by providing incentives for the node operators and miners in the CKB system.

> To learn more about the CKB token, please refer [Nervos Token Economics paper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md).

> CKB is both the token name and the name of the Layer 1 blockchain.

## Nervos CKB

Nervos Common Knowledge Base (CKB) is a permission-less public blockchain system. On CKB platform, both CKB token and the User Defined Tokens (UDT) can be programmed with turing complete scripts.

In a blockchain context, common knowledge refers to states verified by global consensus and Nervos CKB is designed to be a state verification system.

Comparing with Bitcoin, which was designed to be programmable money. CKB is designed to be a programmable assets platform, as not only the native CKB itself can be programmed with turing complete scripts, but also all the User Defined Tokens (UDTs) can be programmed in the same the CKB token is.

Ethereum was designed to be a world computer that provides functions of programmable escort account. On Ethereum you also can program the behavior of non-custodian accounts (i.e. smart contracts) to make UDTs such as ERC20 or ERC721. To compare with, CKB let users to program token directly without going through an account. This design philosophy difference leads to two different programming models, which you will be learning about in the later parts of this documentations.


## CKB Features


Nervos CKB generalizes Bitcoin's model to support User Defined Tokens (UDTs) and smart contracts with a RISC-V virtual machine and PoW consensus that can scale up when network conditions permit.