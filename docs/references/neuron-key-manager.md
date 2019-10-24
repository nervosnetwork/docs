---
id: neuron-key-manager
title: Neuron Key Manager
---

To manage your assets on CKB, you will need a neuron key manager app. This tutorial covers how to install and use the basic features of neuron key manager.

## Install

1. Go to [download](https://github.com/nervosnetwork/neuron-key-manager/releases) webpage
2. Choose correct package of your platform
   
<img src="../assets/neuron-key-manager/download.png" width = "600"/>

3. Install package in your device

## Open

- ### Windows

When you open the app first time, you may get this: ( tap `More info` )

 <img src="../assets/neuron-key-manager/intercept-win.png" height = "300" width = "400"/>

Then tap `Run anyway`:

<img src="../assets/neuron-key-manager/open-win.png" height = "300" width = "400"/>

- ### MacOS

When you open the app first time, you may get this:

<img src="../assets/neuron-key-manager/intercept.png" height = "300" width = "500"/>

The solution is to open the `System Preferences`, and tap `Security & Privacy`, you will see this: ( tap `Open Anyway` )

<img src="../assets/neuron-key-manager/setting.png" height = "400" width = "500"/>

Then re-open neuron key manager app: ( tap `Open` )

<img src="../assets/neuron-key-manager/open.png" height = "300" width = "500"/>

## Agreement

- For U.S. Residents

<img src="../assets/neuron-key-manager/us.png" width = "800"/>

- For Non-U.S. Residents

<img src="../assets/neuron-key-manager/non-us.png" width = "800"/>

## Get Started

There are 3 ways to generate a wallet:
- started from scratch
- recover wallet 
- import from keystore

### 1. Started from scratch

#### Step 1: Create a wallet

<img src="../assets/neuron-key-manager/from-scratch.png" width = "800"/>

#### Step 2: Save wallet seed

- wallet seed is the mnemonic word of private key, you can use it to recover your wallet ( address ).

- you should save it in a safe place.

 <img src="../assets/neuron-key-manager/save-seed.png" width = "800"/>

#### Step 3: Input wallet seed

Input wallet seed of step 2.

<img src="../assets/neuron-key-manager/input-seed.png" width = "800"/>

#### Step 4: Name your wallet and set password

The password is used to do security-related action, eg:
- backup wallet
- delete wallet 

<img src="../assets/neuron-key-manager/name-password.png" width = "800"/>

#### Step 5: Address generated 

> **This address can be used as receiver address of Nervos Coinlist.**

> **Please keep the mnemonic safe, and manage the token received in future.**

<img src="../assets/neuron-key-manager/address.png" width = "800"/>

### 2. Recover wallet 

#### Step 1: Tap "Import Wallet Seed" tab

<img src="../assets/neuron-key-manager/home.png" width = "800"/>

#### Step 2: Input wallet seed

<img src="../assets/neuron-key-manager/input-seed.png" width = "800"/>

And follow the next instructions.

### 3. Import from keystore

#### Step 1: Tap "Import From Keystore" tab

<img src="../assets/neuron-key-manager/home.png" width = "800"/>

#### Step 2: Input keystore file

Password is the password you set when backup wallet.

<img src="../assets/neuron-key-manager/from-keystore.png" width = "800"/>
And follow the next instructions.

## Backup wallet

You can backup your wallet into a keystore file, and recover wallet from keystore when you need it.

#### Step 1: Tap "Backup Current Wallet"

<img src="../assets/neuron-key-manager/to-keystore.png" width = "600"/>

#### Step 2: Input password

Set a password to protect keystore file. And when you recover wallet from keystore, you will input the password.

 <img src="../assets/neuron-key-manager/keystore-password.png" width = "300"/>


#### Step 3: Choose where to store keystore file

 <img src="../assets/neuron-key-manager/keystore-path.png" width = "400"/>

> **Notice: if you lose your wallet, nobody can recover that. So remember to backup!**
