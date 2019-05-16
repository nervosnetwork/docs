---
id: step3
title: 3. Mining native tokens
---

We’ve been able to create an abstracted Wallet class, and retrieve the balance of the wallet, which is the unspent cells owned by a specific user’s public key.
Now we will mine some tokens, transfer it into your wallet so that you can send it to another wallet.



> You can follow the instructions [here](../getting-started/run-node) to install CKB if you haven't already.

Start the node from the directory that ckb is installed from and execute:

```
ckb run
```

You should see a new process running.
<details>
<summary>(click here to view response)</summary>
```shell
$ ckb run
2019-05-13 17:55:16.057 +08:00 main INFO sentry  sentry is disabled
2019-05-13 17:55:16.068 +08:00 main INFO ckb_db::rocksdb  Initialize a new database
2019-05-13 17:55:16.204 +08:00 main INFO main  chain genesis hash: 0x6448adcb403733f7976576eeffcdfa6929cd7af07d25fb925e0d9236dcc0c6f5
2019-05-13 17:55:16.205 +08:00 main INFO network  Generate random key
2019-05-13 17:55:16.205 +08:00 main INFO network  write random secret key to "/Users/haichaozhu/Desktop/ckb-dev/data/network/secret_key"
2019-05-13 17:55:16.219 +08:00 main INFO network  No peer in peer store, start seeding...
2019-05-13 17:55:16.221 +08:00 main INFO network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmRtEZwdSRPpTJHf4gPmwR8YobzpxwZDH4UtVPNJftwynh
2019-05-13 17:55:16.223 +08:00 tokio-runtime-worker-0 INFO network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
```
</details>


# 3.1 Test Method calls against CKB using RPC
Find RPC port in the log output, the following command assumes 8114 is used:
```
curl -d '{"id": 1, "jsonrpc": "2.0", "method":"get_tip_header","params": []}' \
  -H 'content-type:application/json' 'http://localhost:8114'
```

# 3.2 Miner Configuration

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

# 3.3 Run the Miner
By running the miner process, CKB-VM obtains a block template to mine and rewards the miner with a block reward. To run the miner process, in a new shell prompt, navigate to the CKB directory and execute the following command:

```
ckb miner
```

To be able to obtain capacity, one must successfully mine blocks and obtain a block reward. Rewards are provided through block rewards and transaction fees.

# 3.4 Mining Progress

After having the mining process executing after a  while, you can check how much capacity you have mined by performing the following command on your wallet:

```[2] pry(main)> my_wallet.get_balance
=> 100000
```
