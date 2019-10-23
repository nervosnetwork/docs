---
id: run-node
title: Run a CKB Node
---

Once you have successfully [created your own wallet](wallet), you can try to run a node now.

If you are not familiar with the concepts of node and mining yet, [here is a document](../basic-concepts/node-mining) you can learn from.


## Configurations
You can generate the default configuration files for connecting with our testnet with the following command. It will make a workshop folder called `ckb-testnet` and the generated files will be in this folder:

> The `<LOCK_ARG>` here configs the wallet that receives the miner rewards, so please make sure it is correct. You should get this parameter upon the [wallet creation](./wallet#create-wallet) step. Please add `0x` before the generated `<LOCK_ARG>` 

```bash
ckb init -C ckb-testnet --chain testnet --force --ba-arg 0x<LOCK_ARG> && \
cd ckb-testnet
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ckb init -C ckb-testnet --chain testnet --force --ba-arg 0x7e6bccda0abe748eb5dc74be0e797662ae938036 && \
cd ckb-testnet
Initialized CKB directory in /Users/username/code/ckb-testnet
create ckb.toml
create ckb-miner.toml
```
</details>

Then you can find a `ckb.toml` file in the generated `ckb-testnet` folder, which contains the configurations of your CKB node, as well as your miner wallet, which you can find at the bottom of the file.

<details>
<summary>(click here to view an example of miner wallet configuration)</summary>
```toml
[block_assembler]
code_hash = "0x1892ea40d82b53c678ff88312450bbb17e164d7a3e0a90941aa58839f56f8df2"
args = ["0x7e6bccda0abe748eb5dc74be0e797662ae938036"]
hash_type = "type"
```
</details>

## Start a Node

Now you can start the CKB client to run a node. Navigate the command line to `ckb-testnet` folder and run this command:
```bash
ckb run
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ckb run
2019-05-18 08:06:37.246 +08:00 main INFO sentry  **Notice**: The ckb process will send stack trace to sentry on Rust panics. This is enabled by default before mainnet, which can be opted out by setting the option `dsn` to empty in the config file. The DSN is now https://48c6a88d92e246478e2d53b5917a887c@sentry.io/1422795
2019-05-18 08:06:37.257 +08:00 main INFO ckb_db::rocksdb  Initialize a new database
2019-05-18 08:06:37.385 +08:00 main INFO main  chain genesis hash: 0xaad9b82caa07f5989dfb8caa44927f0bab515a96ccaaceba82c7bea609fec205
2019-05-18 08:06:37.385 +08:00 main INFO network  Generate random key
2019-05-18 08:06:37.386 +08:00 main INFO network  write random secret key to "/Users/username/code/ckb-testnet/data/network/secret_key"
2019-05-18 08:06:37.391 +08:00 main INFO network  No peer in peer store, start seeding...
2019-05-18 08:06:37.392 +08:00 main INFO network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmSbvRYNUujyEBEpRipdREfS8cqLxCSndDAWRDAE1Hms2H
2019-05-18 08:06:37.394 +08:00 tokio-runtime-worker-0 INFO network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
2019-05-18 08:06:37.441 +08:00 tokio-runtime-worker-6 INFO network  SessionId(1) open, registry /ip4/47.111.169.36/tcp/8111/p2p/QmNQ4jky6uVqLDrPU7snqxARuNGWNLgSrTnssbRuy3ij2W success
```
</details>

Congratulations! You just started a CKB node!

If you find any error messages, don't worry, check out the [trouble shooting document](../references/troubleshooting).
