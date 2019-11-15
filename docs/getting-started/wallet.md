---
id: wallet
title: Create a Wallet
---

Once you have done with the installation, you can create a wallet for yourself now.

## Create Wallet

You can generate a new account with the following command. Note that you need to set a password for this wallet:
```bash
ckb-cli account new
```
<details>
<summary>(click here to view response)</summary>
```bash
$ ckb-cli account new
Password: 
Repeat password: 
address:
  mainnet: ckb1qyq8fxuxz49nvatawuqye0fydpm4gulcs6usgyfkrr
  testnet: ckt1qyq8fxuxz49nvatawuqye0fydpm4gulcs6us4phf0l
lock_arg: b1bc3c78fa72deb65bbd202903f36dc222cbc78e
lock_hash: ~
```
</details>

In the output message, you can find the following information:
* `lock_arg`  is needed for configuring your miner software as well as exporting your private key, so **please backup it**.
* `address` is the address of the generated [wallet](../basic-concepts/state-tokens#wallet).

## Export Wallet Private Key

> Before your export your private key, you should be aware that your private key is the only key to your tokens and assets. Losing private key or give it to others is as same as losing your tokens or give them away.

You can use this command to export the private key (note that you need to enter your wallet password):
```bash
ckb-cli account export --lock-arg <LOCK_ARG> --extended-privkey-path privkey
```

> Please replace the `<LOCK_ARG>` part with your own `lock_arg`.

This command will create a file named `privkey` in your current folder. In this file you can find your private key (the first line of the file) and the chain code of the generated account (the second line).

<details>
<summary>(click here to view an example `privkey`)</summary>
```bash
aa61885f255aadaa5ed1eedd4e0331c37e25b5e115678eab043e169e4150e8d2
03b2cf09e3911fe79618692e99c7ce5e7cdc2d196e9938cf04ef361cb394f7d9
```
</details>

Now you have successfully created your own wallet. Congratulations! You can try to start your own node now.

If you find any problems, please refer to the [trouble shooting document](../references/troubleshooting).
