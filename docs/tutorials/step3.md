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
code_hash = "0x9e3b3557f11b2b3532ce352bfe8017e9fd11d154c4c7f9b7aaaa1e621b539a08"
args = ["0x36c329ed630d6ce750712a477543672adab57f4c"]
```
</details>

And set your own `block_assembler` in `ckb.toml`.

# 3.3 Run the Miner
By running the miner process, CKB-VM obtains a block template to mine and rewards the miner with a block reward. To run the miner process, in a new shell prompt, navigate to the CKB directory and execute the following command:

```
ckb miner
```

To be able to obtain capacity, one must successfully mine blocks and obtain a block reward. Rewards are provided through block rewards and transaction fees.

# 3.4 Mining Progress

After having the mining process executing after a  while, you can check how much capacity you have mined by performing the following command on your wallet:

```ruby
[2] pry(main)> my_wallet.get_balance
=> 100000
```
