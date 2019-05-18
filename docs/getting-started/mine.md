---
id: mine
title: Mine CKB
---

Now you have tried [running a node](run-node) and [interact with it](interact) using SDK as well as creating a wallet. The next step is to run the miner program and earn some CKB.


## Configurations
We first need to generate the miner wallet configuration parameters. Our Ruby SDK can help us to do it.

In [the last document](interact#create-wallet), you should have created a wallet with the Ruby SDK.

<details>
<summary>(click here to view the previous commands for creating wallet)</summary>
```ruby
[1] pry(main)> privkey = CKB::Key.random_private_key
[2] pry(main)> api = CKB::API.new
[3] pry(main)> wallet = CKB::Wallet.from_hex(api, privkey)
```
</details>

Now you can use this command to generate the block assembler config parameters:
```ruby
puts wallet.block_assembler_config
```

<details>
<summary>(click here to view response)</summary>
```toml
[block_assembler]
code_hash = "0x9e3b3557f11b2b3532ce352bfe8017e9fd11d154c4c7f9b7aaaa1e621b539a08"
args = ["0x03ae708e284f6a53d12da45f7fe5e8c232c353c2"]
```
</details>


To set the miner wallet, in the `ckb` work directory, find `ckb.toml` file and use the returned parameters above to replace the existing one.

<details>
<summary>(click here to view the existing default parameter)</summary>
```toml
# This config is derived using 0x5c2514fb16b83259d3326a0acf05901c15a87dc46239b77b0a501cd58198dca0
# as private key. If you want to mine CKB, please make sure to create your own
# private key and change the config here, otherwise your CKB might be stolen by
# someone else.
[block_assembler]
code_hash = "0x9e3b3557f11b2b3532ce352bfe8017e9fd11d154c4c7f9b7aaaa1e621b539a08"
args = ["0x7f52f0fccdd1d11391c441adfb174f87bca612b0"]
```
</details>

**Notice:** After you changed the configuration, restart the node again (use `ckb run` command). Otherwise your new configuration will not take effect.

Now you are ready to mine CKB for your own wallet.

## Run Miner

The miner process of CKB is not integrated with the main CKB process. So to run the CKB miner, you need to open another shell instance while keeping the `ckb run` process still alive. 

Open another shell in your node configuration folder `ckb-dev` or `ckb-testnet`:
```shell
ckb miner
```

Then both the main process and the miner should be working now.

Wait for around a minute and when you see message like this, it means you have mined a new block:
```shell
2019-05-02 12:19:23.463 +08:00 main INFO miner \
found seal: Seal { \
    nonce: 16607377657024071670, \
    proof: 0xa2020000681b00005d27000018340000973d000083430000fc600000376600008c660000cc6800007970000015760000 \
}
```

Now you can check your CKB balance with Ruby SDK:
```ruby
wallet.get_balance
```

It shoud be:
```ruby
=> 5000000000000
```

If you see many zeros here, congratulations! You just mined some CKB!

If not, don't worry, check out the [trouble shooting document](../references/troubleshooting).
