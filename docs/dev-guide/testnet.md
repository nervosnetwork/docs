---
id: testnet
title: Testnet Aggron
---

We are going to deploy a PoA (Proof of Authority) algorithm to create blocks in the testnet. However, it will take some time to develop. Before that we will reset the testnet regularily whenver there's no new blocks in an hour. 
The chain spec used to start Aggron has been published [here](https://gist.github.com/doitian/573513c345165c0fe4f3504ebc1c8f9f). Please refer to the [Chains](https://github.com/nervosnetwork/ckb/wiki/Chains) document for Aggron Testnet’s info.

### Run a CKB Testnet node

**System Requirements**

Any modern computer with macOS/Linux/Windows operating system should be able to run a CKB node and mining programs. Alternatively, you can also use [Docker](https://github.com/nervosnetwork/ckb/blob/develop/docs/run-ckb-with-docker.md) if your operating system is not properly supported by CKB for now.

To run a CKB node, please follow the instructions explained in detail below:

**Step 1: Download the latest ckb binary file from the CKB releases page on GitHub (https://github.com/nervosnetwork/ckb/releases), then check if it works with:**

```
ckb --version 
ckb-cli --version
```

<details>
<summary>(click here to view response)</summary>
```bash
ckb 0.25.2 (dda4ed9 2019-11-17)
ckb-cli 0.25.2 (6ca7bbb 2019-11-17)
```
</details>

**Step 2: Connect to Aggron Testnet**

* Create [aggron.toml](https://gist.github.com/doitian/573513c345165c0fe4f3504ebc1c8f9f/raw/3032bed68550e0a50e91df2c706481e80b579c70/aggron.toml) in the directory containing the CKB binary. 
* Init CKB node with `ckb init --import-spec ./aggron.toml --chain testnet`

<details>
<summary>(click here to view response)</summary>
```bash
WARN: mining feature is disabled because of lacking the block assembler config options
Initialized CKB directory in /PATH/ckb_v0.25.2_x86_64-apple-darwin
cp ./aggron.toml specs/testnet.toml
create ckb.toml
create ckb-miner.toml
```
</details>

**Step 3: Start the CKB Testnet node**

```
ckb run
```
<details>
<summary>(click here to view response)</summary>
```bash
2019-12-09 18:13:45.183 +08:00 main INFO sentry  **Notice**: The ckb process will send stack trace to sentry on Rust panics. This is enabled by default before mainnet, which can be opted out by setting the option `dsn` to empty in the config file. The DSN is now https://48c6a88d92e246478e2d53b5917a887c@sentry.io/1422795
2019-12-09 18:13:45.290 +08:00 main INFO main  Miner is disabled, edit ckb.toml to enable it
2019-12-09 18:13:47.355 +08:00 main INFO ckb-chain  Start: loading live cells ...
2019-12-09 18:13:47.385 +08:00 main INFO ckb-chain      loading 10000 transactions which include live cells ...
2019-12-09 18:13:47.419 +08:00 main INFO ckb-chain      loading 20000 transactions which include live cells ...
2019-12-09 18:13:47.454 +08:00 main INFO ckb-chain      loading 30000 transactions which include live cells ...
2019-12-09 18:13:47.495 +08:00 main INFO ckb-chain      loading 40000 transactions which include live cells ...
2019-12-09 18:13:47.534 +08:00 main INFO ckb-chain      loading 50000 transactions which include live cells ...
2019-12-09 18:13:47.551 +08:00 main INFO ckb-chain  Done: total 54318 transactions.
2019-12-09 18:13:47.563 +08:00 main INFO main  chain genesis hash: 0x184ac4658ed0c04a126551257990db132366cac22ab6270bbbc1f8c3220f302d
2019-12-09 18:13:47.587 +08:00 main INFO ckb-network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmbpVxKM6zCw6dCJ6vBW6Ejip9d9XgUt49rjNeKRU67f68
2019-12-09 18:13:47.591 +08:00 NetworkRuntime-1 INFO ckb-network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
2019-12-09 18:13:47.807 +08:00 NetworkRuntime-3 INFO ckb-relay  RelayProtocol(1).connected peer=SessionId(2)
2019-12-09 18:13:47.807 +08:00 NetworkRuntime-3 INFO ckb-relay  RelayProtocol(1).connected peer=SessionId(1)
2019-12-09 18:13:47.807 +08:00 NetworkRuntime-0 INFO ckb-sync  SyncProtocol.connected peer=SessionId(1)
2019-12-09 18:13:47.807 +08:00 NetworkRuntime-0 INFO ckb-sync  SyncProtocol.connected peer=SessionId(2)
2019-12-09 18:13:47.865 +08:00 NetworkRuntime-8 INFO ckb-relay  RelayProtocol(1).connected peer=SessionId(3)
2019-12-09 18:13:47.865 +08:00 NetworkRuntime-1 INFO ckb-sync  SyncProtocol.connected peer=SessionId(3)
2019-12-09 18:13:47.998 +08:00 NetworkRuntime-2 INFO ckb-relay  RelayProtocol(1).connected peer=SessionId(4)
2019-12-09 18:13:47.998 +08:00 NetworkRuntime-1 INFO ckb-sync  SyncProtocol.connected peer=SessionId(4)
2019-12-09 18:13:48.210 +08:00 ChainService INFO ckb-chain  block: 62481, hash: 0x95f1b7d6b614b4b1e0313892ae74c6c4d052df6abd0d5eda74cd974216ee65f6, epoch: 67(363/865), total_diff: 0x225465c6b33, txs: 1

```
</details>
