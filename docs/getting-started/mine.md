---
id: mine
title: Mine Some CK Bytes
---

Now you have [created a wallet](wallet) and [started running a node](run-node) The next step is to run the miner program and earn some CKB.

> Please note that before you start to mine, you should wait until the `ckb run` have synchronized to the [latest height](https://explorer.nervos.org/).

## Run Miner

The miner process of CKB is not integrated with the main CKB process. So to run the CKB miner, you need to open another terminal instance while **keeping the `ckb run` process still alive**. 

Open another terminal in your node configuration folder `ckb-testnet` and run:
```bash
ckb miner
```

Then both the main process and the miner should be working now.

Wait for around a minute and when you see message like this, it means you have mined a new block:
```bash
2019-05-02 12:19:23.463 +08:00 main INFO miner \
found seal: Seal { \
    nonce: 16607377657024071670, \
    proof: 0xa2020000681b00005d27000018340000973d000083430000fc600000376600008c660000cc6800007970000015760000 \
}
```

You can check your CKB balance with your address on [CKB explorer](https://explorer.nervos.org/).

If there are any problems, check out the [trouble shooting document](../references/troubleshooting).


## GPU Miner
From CKB testnet `v0.18.0` there is a GPU miner available to use. The detailed information can be found in its [GitHub repo](https://github.com/nervosnetwork/ckb-cuckoo-miner).