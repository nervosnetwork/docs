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

# 3.1 Test Method calls against CKB using RPC
Find RPC port in the log output, the following command assumes 8114 is used:
```
curl -d '{"id": 1, "jsonrpc": "2.0", "method":"get_tip_header","params": []}' \
  -H 'content-type:application/json' 'http://localhost:8114'
```

# 3.2 Run the Miner
By running the miner process, CKB-VM obtains a block template to mine and rewards the miner with a block reward. To run the miner process, in a new shell prompt, navigate to the CKB directory and execute the following command:

```
ckb miner
```

To be able to obtain capacity, one must successfully mine blocks and obtain a block reward. Rewards are provided through block rewards and transaction fees.

# 3.3 Mining Progress

After having the mining process executing after a  while, you can check how much capacity you have mined by performing the following command on your wallet:

```[2] pry(main)> my_wallet.get_balance
=> 100000
```

# 3.4 Sending tokens to the Wallet

We will use the AlwaysSuccessWallet to mine capacities and distribute to your wallet by executing the following commands:

```
[1] pry(main)> asw = Ckb::AlwaysSuccessWallet.new(api)
[2] pry(main)> conf = asw.install_mruby_cell!("/path/to/argv_source_entry")
=> {:out_point=>{:tx_hash=>"0x20b849ffe67eb5872eca0d68fff1de193f07354ea903948ade6a3c170d89e282", :index=>0},
 :cell_hash=>"0x03dba46071a6702b39c1e626f469b4ed9460ed0ad92cf2e21456c34e1e2b04fd"}
[3] pry(main)> asw.configuration_installed?(conf)
=> false
[3] pry(main)> # Wait a while till this becomes true
[4] pry(main)> asw.configuration_installed?(conf)
=> true
[5] pry(main)> asw.send_capacity(my_wallet.lock, 300000 * 10 ** 8)
[6] pry(main)> # wait a while
[7] pry(main)> my_wallet.get_balance
=> 30000000000000
```
