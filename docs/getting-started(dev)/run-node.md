---
id: run-node
title: Run a CKB Testnet Node
---

Once you have successfully [created your own wallet](wallet), you can try to run a node now.

If you are not familiar with the concepts of node and mining yet, [here is a document](../basic-concepts/node-mining) you can learn from.


## Configurations
You can generate the default configuration files for connecting with our testnet with the following command. It will make a workshop folder called `ckb-testnet` and the generated files will be in this folder:

> The `<LOCK_ARG>` here configs the wallet that receives the miner rewards, so please make sure it is correct. You should get this parameter upon the [wallet creation](./wallet#create-wallet) step. Please add `0x` before the generated `<LOCK_ARG>` 

```bash
./ckb init -C ckb-testnet --chain testnet --force --ba-arg 0x<LOCK_ARG> && \
cd ckb-testnet
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ckb init -C ckb-testnet --chain testnet --force --ba-arg 0xb7c1867f2ff3987b44fa1df2c4f223affb397a99 && \
cd ckb-testnet
Initialized CKB directory in ckb-testnet
create ckb.toml
create ckb-miner.toml
```
</details>

Then you can find a `ckb.toml` file in the generated `ckb-testnet` folder, which contains the configurations of your CKB node, as well as your miner wallet, which you can find at the bottom of the file.

<details>
<summary>(click here to view an example of miner wallet configuration)</summary>
```toml
[block_assembler]
code_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"
args = "0xb7c1867f2ff3987b44fa1df2c4f223affb397a99"
hash_type = "type"
message = "0x"
```
</details>

## Start a Node

Now you can start the CKB client to run a node. Navigate the command line to `ckb-testnet` folder and run this command:
```bash
../ckb run
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ../ckb run
2019-11-18 21:13:42.228 +08:00 main INFO sentry  **Notice**: The ckb process will send stack trace to sentry on Rust panics. This is enabled by default before mainnet, which can be opted out by setting the option `dsn` to empty in the config file. The DSN is now https://48c6a88d92e246478e2d53b5917a887c@sentry.io/1422795
2019-11-18 21:13:42.310 +08:00 main INFO ckb-db  Initialize a new database
2019-11-18 21:13:42.534 +08:00 main INFO ckb-chain  Start: loading live cells ...
2019-11-18 21:13:42.534 +08:00 main INFO ckb-chain  Done: total 2 transactions.
2019-11-18 21:13:42.544 +08:00 main INFO main  chain genesis hash: 0xaac7df2cd822df88ebf9929feabb01f7bf56b866c16ccd4e66a8176b74e45cc5
2019-11-18 21:13:42.546 +08:00 main INFO ckb-network  Generate random key
2019-11-18 21:13:42.546 +08:00 main INFO ckb-network  write random secret key to "/Users/zengbing/Documents/ckb_v0.25.2_x86_64-apple-darwin/ckb-testnet/data/network/secret_key"
2019-11-18 21:13:42.558 +08:00 main INFO ckb-network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmVS8VncSaf7sEagQScn3QMh61c5y87a9g6jrqFRcQg8ev
2019-11-18 21:13:42.561 +08:00 NetworkRuntime-0 INFO ckb-network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
2019-11-18 21:13:42.974 +08:00 NetworkRuntime-3 INFO ckb-relay  RelayProtocol(1).connected peer=SessionId(1)
2019-11-18 21:13:42.974 +08:00 NetworkRuntime-0 INFO ckb-sync  SyncProtocol.connected peer=SessionId(1)
2019-11-18 21:13:43.118 +08:00 NetworkRuntime-7 INFO ckb-sync  Ignoring getheaders from peer=SessionId(1) because node is in initial block download
```
</details>

Congratulations! You just started a CKB node!

If you find any error messages, don't worry, check out the [trouble shooting document](../references/troubleshooting).


