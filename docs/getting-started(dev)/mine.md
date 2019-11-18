---
id: mine
title: Mine Some CK Bytes in Testnet
---

Now you have [created a wallet](wallet) and [started running a node](run-node) The next step is to run the miner program and earn some CKB.

> Please note that before you start to mine, you should wait until the `ckb run` have synchronized to the [latest height](https://explorer.nervos.org/).

## Run Miner

The miner process of CKB is not integrated with the main CKB process. So to run the CKB miner, you need to open another terminal instance while **keeping the `ckb run` process still alive**. 

Open another terminal in your node configuration folder `ckb-testnet` and run:
```bash
cd /ckb_v0.25.2_x86_64-apple-darwin/ckb-testnet
../ckb miner
```

Then both the main process and the miner should be working now.

Wait for around a minute and when you see message like this, it means you have mined a new block:
```bash
2019-11-18 21:13:50.211 +08:00 main INFO sentry  **Notice**: The ckb process will send stack trace to sentry on Rust panics. This is enabled by default before mainnet, which can be opted out by setting the option `dsn` to empty in the config file. The DSN is now https://48c6a88d92e246478e2d53b5917a887c@sentry.io/1422795
Found! #3659 0x5a612a398686eea9588f525b3510a845760085cb33d3a7748a6a908e9f376ebb
Found! #5207 0xa76db3d8e633bf46571c56f8543197e6b327b4729684b59a427ae51c28041b37
EaglesongSimple-Worker-0 ⠈ [00:03:01] hash rate: 222429.005 / nonces found:          2
Total nonces found:   2
```

If there are any problems, check out the [trouble shooting document](../references/troubleshooting).