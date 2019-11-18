---
id: introduction
title: Introduction
---

Please note that this document is compatible with the `ckb 0.25.2 (dda4ed9 2019-11-17)`. More information about CKB versions can be found in [the CKB repo on GitHub](https://github.com/nervosnetwork/ckb).

## System Requirements
Any modern computer should be able to run CKB node and mining programs.

Recommended Operating System:  
* Ubuntu 18.04 LTS x86-64
* macOS
* Windows x86-64
 
Theoratically Sypported System:
* Ubuntu 16.04 LTS x86-64
* Arch Linux x86-64
* Centos 7 x86-64
* Debian x86-64, Stretch or later

## Lina Mainnet
### Chain info
* ckb version: v0.25.2
* genesis hash: 0x92b197aa1fba0f63633922c61c92375c9c074a93e85963554f5499fe1450d0e5
* launched at: 2019-11-15 21:11:00 UTC

Before you start to have some fun with the Mainnet, here are something you should notice:
* Nervos CKB Mainnet Lina is in many ways like a newborn baby — weak in the beginning, but with unlimited potential when mature.For a new PoW chain, risks may come from:
  * **Unstable Hashrate**：For security, using a sufficiently large confirmation number is recommended before transferring CKBytes.
  * **Immature Toolchain**：The SDKs provided by Nervos Foundation are convenient tools to simplify RPC invocation and transaction building/signing/sending but have not been tested in a production environment yet, Please use them cautiously.

If you need to send transaction in the early weeks, **choose a sufficiently large confirmation number** before transferring CKBytes.

## Aggron Testnet
### Chain info
* ckb version: v0.25.2
* genesis hash: 0xaac7df2cd822df88ebf9929feabb01f7bf56b866c16ccd4e66a8176b74e45cc5
* init command: ckb init --chain testnet
* launched at: 2019-11-17 08:00:00 UTC

Before you start to have some fun with the testnet, here are something you should notice:
* Nervos CKB Testnet Aggron is only for development and test use.
* The tokens on this testnet has **no values**, so please be aware of scams.
* **The testnet will be reset and updated at fixed period**, so any tokens or states you have on the testnet will be cleared upon the testnet reset.

## Prerequisites
As most of the guidances in this document are based on command line interface, you might need to know [how to use the command line tool](https://www.google.com/search?q=learn+command+line) on your computer.

Congratulations! You just started a CKB Mainnet node!

If you have any question, you are welcome to post on [Nervos Talk](https://talk.nervos.org/) or join our [Telegram group: NervosNetwork](https://t.me/NervosNetwork) and [Telegram group: Nervos 中文社区](https://t.me/NervosNetworkcn)
