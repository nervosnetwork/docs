---
id: neuron
title: Neuron Wallet
---

[Github](https://github.com/nervosnetwork/neuron) | [Download](https://github.com/nervosnetwork/neuron/releases)

A blockchain wallet is very important in the blockchain ecosystem, it is a user’s gateway to the blockchain world. 

Neuron Wallet is a CKB wallet produced by the Nervos Foundation, it holds your keys and can create and broadcast transactions on your behalf. The functionality of the Neuron Wallet is focused on transfer of CKBytes and deposit/withdrawal functions of the Nervos DAO.

Now Neuron Wallet has bundled a CKB Mainnet node and configured to connect to the CKB Mainnet. After installation, as you open the Neuron Wallet, the bundled Mainnet node will run.

You can also run a CKB node yourself and launch Neuron wallet, then Neuron will NOT start the bundled node, but connects to your node instead. [run a CKB mainnet node](/getting-started/run-node)

In this section we will give an overall introduction to Neuron Wallet. Tutorials are included in the [Getting Started](/getting-started/introduction) and [Neuron Wallet Guide](/references/neuron-wallet-guide) sections.

Please [download](https://github.com/nervosnetwork/neuron/releases) and install the latest Neuron Wallet version, click `Create a New Wallet`, and you will then see the main interface. There are seven tabs: **Overview, Send, Receive, History, Nervos DAO, Addresses and Customized Assets(experimental)**.

<img src="../assets/neuron-wallet/overview1.png" width = "600"/>

### Overview

`Overview`  displays the 「Wallet name」、「Balance」、「Recent Activities」、「Block Number」

You can cross-check the `Tip Block` in `Block Number` with `Latest Block`  in [CKB-Explorer](https://explorer.nervos.org/) to make sure the node is synced.

<img src="../assets/neuron-wallet/overview1.png" width = "600"/>

### Send

You can create transactions and transfer CKB. Please make sure the node is synced before sending transactions. 

<img src="../assets/neuron-wallet/send.png" width = "600"/>

### Receive

`Receive`  displays the wallet’s address and QRcode.

<img src="../assets/neuron-wallet/receive.png" width = "600"/>

### History

Here you can search for previous transactions. Right click on the list and you can check the 「Detail」 「Copy Transaction Hash」「View on Explorer」

<img src="../assets/neuron-wallet/history.png" width = "600"/>

### Nervos DAO

Information about the economic function of the Nervos DAO is [here](https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c), with this functionality you can deposit and withdraw CKBytes through Neuron Wallet. 

<img src="../assets/neuron-wallet/deposit.png" width = "600"/>

### Addresses

Neuron Wallet is HD（Hierarchical Determinstic）wallet defined by BIP32, BIP39,BIP-43 and BIP-44. It is developed to derive 20 Receiving addresses and 10 change addresses from a “seed phrase”. It’s recommended to refer to [Mastering Bitcoin-Chapter 4- Wallets](https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch04.html) for more details.

<img src="../assets/neuron-wallet/addresses.png" width = "600"/>

In addition，the menu bar also provide practical functions,such as: 「Check for Updates」, 「Preference」,「Help」, etc.

<img src="../assets/neuron-wallet/menu1.png" width = "600"/>



