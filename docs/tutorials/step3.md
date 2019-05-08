---
id: step3
title: 3. Mining native tokens
---

We’ve been able to create an abstracted Wallet class, and retrieve the balance of the wallet, which is the unspent cells owned by a specific user’s public key.
Now we will mine some tokens, transfer it into your wallet so that you can send it to another wallet
Start the node from the directory that ckb is installed from and execute
ckb run
You should see a new process running.
3.1 Test Method calls against CKB using RPC
Find RPC port in the log output, the following command assumes 8114 is used:
curl -d '{"id": 1, "jsonrpc": "2.0", "method":"get_tip_header","params": []}' \
  -H 'content-type:application/json' 'http://localhost:8114'
3.2 Run Miner
By running the miner process, CKB-VM obtains a block template to mine and rewards the miner with a block reward. To run the miner process, in a new shell prompt, navigate to the CKB directory and execute the following command:
ckb miner

To be able to obtain capacity, one must successfully mine blocks and obtain a block reward. Rewards are provided through block rewards and transaction fees.
3.3 Mining Progress

After having the mining process executing after a  while, you can check how much capacity you have mined by performing the following command on your wallet:

[2] pry(main)> bob.get_balance
=> 100000

3.4 Sending tokens to the Wallet:
[3] pry(main)> asw.send_capacity(bob.lock, 300000 * 10 ** 8)
[4] pry(main)> # wait a while
[5] pry(main)> bob.get_balance
=> 30000000000000
