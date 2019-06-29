---
id: wallet
title: Create a Wallet
---

<<<<<<< HEAD
Once you have done with the installation, you can create a wallet for yourself now.
=======
To get started on your journey with CKB, the first thing you need is to create a wallet for yourself.

We have provided [a CKB compatible command line tool CKB-CLI](https://github.com/TheWaWaR/ckb-cli) for you to do this.

> **Breaking Changes**: To work with CKB v0.14.0, users MUST generate new wallet addresses with CKB-CLI v0.2.0 or above.

## Installation

Download the latest version of CKB-CLI from [GitHub releases](https://github.com/TheWaWaR/ckb-cli/releases):


<!-- Todo: change the ckb-cli version here -->

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```bash
curl -OL https://github.com/TheWaWaR/ckb-cli/releases/download/v0.2.0/ckb-cli-v0.2.0-x86_64-apple-drawin.tar.gz
```
<!--macOS(中国镜像)-->
```bash
curl -O http://ckbbin.engpro.cryptape.com/ckb-cli-v0.2.0-x86_64-apple-drawin.tar.gz
```
<!--Linux-->
```bash
wget https://github.com/TheWaWaR/ckb-cli/releases/download/v0.2.0/ckb-cli-v0.2.0-x86_64-linux-musl.tar.gz
```
<!--Linux(中国镜像)-->
```bash
wget http://ckbbin.engpro.cryptape.com/ckb-cli-v0.2.0-x86_64-linux-musl.tar.gz
```
<!--END_DOCUSAURUS_CODE_TABS-->

> For users who find it is slow to download the file, you can choose to download [from the website](https://github.com/TheWaWaR/ckb-cli/releases) directly using your browser.

Then unzip the file and add it to your system PATH:

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```bash
tar -xzvf ckb-cli-v0.2.0-x86_64-apple-drawin.tar.gz && \
sudo ln -snf "$(pwd)/ckb-cli" /usr/local/bin/ckb-cli
```
<!--Linux-->
```bash
tar -xzvf ckb-cli-v0.2.0-x86_64-linux-musl.tar.gz && \
sudo ln -snf "$(pwd)/ckb-cli" /usr/local/bin/ckb-cli
```
<!--END_DOCUSAURUS_CODE_TABS-->

Now you have successfully installed the CKB-CLI. You can check if it works with:
```bash
ckb-cli --version
```

<!-- Todo: change the response here -->

<details>
<summary>(click here to view response)</summary>
```bash
$ ckb-cli --version
ckb-cli 0.2.0 (v0.2.0-1-gfdec5d1 2019-06-15)
```
</details>

If you see the response above, you have successfully installed CKB-CLI.
>>>>>>> d7ee54dde72e5190d5cdcb01d89485468a76a8e2

## Create Wallet

You can generate a new [HD wallet](https://bitcoin.org/en/glossary/hd-protocol) address with the following command. Note that you need to set a password for this wallet:
```bash
ckb-cli account new
```
<details>
<summary>(click here to view response)</summary>
```bash
$ ckb-cli wallet generate-key --privkey-path privkey
Password: 
Repeat password: 
address:
  mainnet: ckb1q9gry5zgtd230sp6el8qe3e5hrtdgth72fp72yfmtf2vte
  testnet: ckt1q9gry5zgtd230sp6el8qe3e5hrtdgth72fp72yfmp4jk6t
lock_arg: 5b5517c03acfce0cc734b8d6d42efe5243e5113b
```
</details>

In the output message, you can find the following information:
* `lock_arg`  is needed for configuring your miner software as well as exporting your private key, so **please backup it**.
* `address` is the address of the generated [wallet](../basic-concepts/states-tokens#wallet).

## Export Wallet Private Key

> Before your export your private key, you should be aware that your private key is the only key to your tokens and assets. Losing private key or give it to others is as same as losing your tokens or give them away.

You can use this command to export the private key (note that you need to enter your wallet password):
```bash
ckb-cli account export --lock-arg 5b5517c03acfce0cc734b8d6d42efe5243e5113b --extended-privkey-path privkey
```

This command will create a file named `privkey` in your current folder. In this file you can find your private key (the first line of the file) and the chain code of the generated HD wallet (the second line).

<details>
<summary>(click here to view an example `privkey`)</summary>
```bash
aa61885f255aadaa5ed1eedd4e0331c37e25b5e115678eab043e169e4150e8d2
03b2cf09e3911fe79618692e99c7ce5e7cdc2d196e9938cf04ef361cb394f7d9
```
</details>

Now you have successfully created your own wallet. Congratulations! You can try to start your own node now.

If you find any problems, please refer to the [trouble shooting document](../references/troubleshooting).
