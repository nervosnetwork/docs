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
```ruby
[block_assembler]
code_hash = "0xfe1cf5a297023a3c5282ecd9b0ca88d6736424d75fbe4dcf47a7c8b303e4d339"
args = [[56, 50, 52, 57, 53, 49, 51, 98, 51, 57, 56, 98, 99, 50, 51, 98, 98, 49, 50, 48, 99, 102, 102, 55, 99, 55, 97, 99, 51, 51, 54, 57, 102, 100, 50, 49, 52, 52, 54, 98, 55, 49, 57, 48, 97, 56, 98, 101, 52, 54, 98, 48, 97, 53, 53, 98, 57, 53, 52, 97, 52, 97, 97, 56]]
```
</details>


To set the miner wallet, in the `ckb` work directory, find `ckb.toml` file and use the returned parameters above to replace the existing one.

<details>
<summary>(click here to view the existing default parameter)</summary>
```ruby
[block_assembler]
# value is set as always success binary hash
code_hash = "0x0000000000000000000000000000000000000000000000000000000000000001"
args = []
```
</details>

Now you are ready to start to mine CKB for your own wallet.

## Run Miner

The miner process of CKB is not integrated with the main CKB process. So to run the CKB miner, you need to open another shell instance while keeping the `ckb run` process still alive. 

In another shell:
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