---
id: wallet
title: Create a Wallet
---

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
sudo ln -snf "$(pwd)/ckb-cli" /usr/local/bin
```
<!--Linux-->
```bash
tar -xzvf ckb-cli-v0.2.0-x86_64-linux-musl.tar.gz && \
sudo ln -snf "$(pwd)/ckb-cli" /usr/local/bin
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

## Create Wallet

You can generate a private key with the following command:
```bash
ckb-cli wallet generate-key --privkey-path privkey
```
<details>
<summary>(click here to view response)</summary>
```bash
$ ckb-cli wallet generate-key --privkey-path privkey
Put this config in < ckb.toml >:

[block_assembler]
code_hash = "0x9e3b3557f11b2b3532ce352bfe8017e9fd11d154c4c7f9b7aaaa1e621b539a08"
args = ["0x7e6bccda0abe748eb5dc74be0e797662ae938036"]

{
  "address": "ckt1q9gry5zg0e4ueks2he6gadwuwjlqu7tkv2hf8qpkf47x2u",
  "lock_hash": "0x66313b870633a267297b8e25ac56ec04b0c6153ca319f3a597816b6ba1c735a6",
  "pubkey": "02988df184fcc74a98e03d9952e878db068d31b5667c233985802ee4e7f3751323"
}
```
</details>

In the output message, you can find the following information:
* `[block_assembler]`  is needed for configuring your miner software, so **please keep a record of it**.
* `address` is the address of the generated [wallet](../basic-concepts/states-tokens#wallet).
* `lock_hash` is needed for [unlocking Cells](../basic-concepts/architecture#lock-script).
* `pubkey` is the public key of this wallet.

This command will also create a file named `privkey` in your current folder. In this file you can find your private key (the first line of the file) and its address (the second line).

<details>
<summary>(click here to view an example `privkey`)</summary>
```bash
9404a426fa4a7b2e431f75e70d0b458233cbe04b8617935582cb39925892a429
ckt1q9gry5zg0e4ueks2he6gadwuwjlqu7tkv2hf8qpkf47x2u
```
</details>

> Note that your private key is the only key to your tokens and assets. Losing private key or give it to others is as same as losing your tokens or give them away.

## Import Wallet
If you already have a private key, you can import it into CKB-CLI to see its address or `block_assembler` information.

You need to create a file named `privkey` that has your private key in it:
```bash
echo '<your-private-key>' > privkey
```

Then you can see your wallet information with:
```bash
ckb-cli wallet key-info --privkey-path privkey
```

<details>
<summary>(click here to view an example)</summary>
```bash
$ echo '9404a426fa4a7b2e431f75e70d0b458233cbe04b8617935582cb39925892a429' > privkey
$ ckb-cli wallet key-info --privkey-path privkey
Put this config in < ckb.toml >:

[block_assembler]
code_hash = "0x9e3b3557f11b2b3532ce352bfe8017e9fd11d154c4c7f9b7aaaa1e621b539a08"
args = ["0x7e6bccda0abe748eb5dc74be0e797662ae938036"]

{
  "address": "ckt1q9gry5zg0e4ueks2he6gadwuwjlqu7tkv2hf8qpkf47x2u",
  "lock_hash": "0x66313b870633a267297b8e25ac56ec04b0c6153ca319f3a597816b6ba1c735a6",
  "pubkey": "02988df184fcc74a98e03d9952e878db068d31b5667c233985802ee4e7f3751323"
}
```
</details>

Now you have successfully created your own wallet. Congratulations! You can try to start your own node now.

If you find any problems, please refer to the [trouble shooting document](../references/troubleshooting).
