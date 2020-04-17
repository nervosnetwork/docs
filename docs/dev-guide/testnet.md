---
id: testnet
title: Testnet Aggron
---

We are going to deploy a PoA (Proof of Authority) algorithm to create blocks in the testnet. However, it will take some time to develop. Before that we will reset the testnet regularily whenver there's no new blocks in an hour. 
The chain spec used to start Aggron has been published [here](https://github.com/nervosnetwork/ckb/wiki/Chains). Please refer to the [Chains](https://github.com/nervosnetwork/ckb/wiki/Chains) document for Aggron Testnet’s info.

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
ckb 0.31.0-pre (c900439 2020-04-02)
ckb-cli 0.30.0 (2a7ed95 2020-03-20)
```
</details>

**Step 2: Connect to Aggron Testnet**

* Init CKB node with `ckb init --chain testnet`

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
2020-04-17 11:20:38.767 +08:00 main INFO sentry  **Notice**: The ckb process will send stack trace to sentry on Rust panics. This is enabled by default before mainnet, which can be opted out by setting the option `dsn` to empty in the config file. The DSN is now https://48c6a88d92e246478e2d53b5917a887c@sentry.io/1422795
2020-04-17 11:20:38.834 +08:00 main INFO main  Miner is disabled, edit ckb.toml to enable it
2020-04-17 11:20:38.837 +08:00 main INFO ckb-db  Initialize a new database
2020-04-17 11:20:38.930 +08:00 main INFO ckb-db  Init database version 20191127135521
2020-04-17 11:20:38.938 +08:00 main INFO ckb-memory-tracker  track current process: unsupported
2020-04-17 11:20:38.938 +08:00 main INFO main  ckb version: 0.31.0-pre (c900439 2020-04-02)
2020-04-17 11:20:38.938 +08:00 main INFO main  chain genesis hash: 0x63547ecf6fc22d1325980c524b268b4a044d49cda3efbd584c0a8c8b9faaf9e1
2020-04-17 11:20:38.938 +08:00 main INFO ckb-network  Generate random key
2020-04-17 11:20:38.938 +08:00 main INFO ckb-network  write random secret key to "/Users/zengbing/Documents/projects/ckb_v0.31.0-rc1_x86_64-apple-darwin/data/network/secret_key"
2020-04-17 11:20:38.942 +08:00 NetworkRuntime- INFO ckb-network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
2020-04-17 11:20:38.944 +08:00 NetworkRuntime- INFO ckb-network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmTjQRCfq1SfAcaoQHWQvpZ8CAFR9bTXGm95HVTzMt9Rrt
2020-04-17 11:20:38.947 +08:00 main INFO ckb-db  Initialize a new database
2020-04-17 11:20:38.976 +08:00 main INFO ckb-db  Init database version 20191201091330
2020-04-17 11:20:39.198 +08:00 NetworkRuntime- INFO ckb-sync  SyncProtocol.connected peer=SessionId(1)
2020-04-17 11:20:39.198 +08:00 NetworkRuntime- INFO ckb-relay  RelayProtocol(1).connected peer=SessionId(1)
2020-04-17 11:20:39.337 +08:00 NetworkRuntime- INFO ckb-sync  Ignoring getheaders from peer=SessionId(1) because node is in initial block download
```
</details>
