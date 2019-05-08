---
id: transfer
title: Transfer CKB
---

So far you have [started a node](run-node), [created a wallet](interact) and [earned some CKB tokens by mining](mine). Now you can try to send the tokens to someone else.

In your Ruby SDK console, check your wallet balance to make sure you have some tokens for Alice:
```ruby
wallet.get_balance
```

> The CKB token unit used in SDK is [CK Shannon](https://github.com/nervosnetwork/rfcs/blob/8a9a7870b2d356ec1daae3b85aeb24f793056bea/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md#native-tokens): `1 CK Byte = 100_000_000 CK Shannons`.

Then, as an example here, we create another wallet:
```ruby
alice = CKB::Wallet.from_hex(api, "0x2e8640dab5d1db5cfdfa0d3bdfd26bf9ccd04967b730236a74281fbcdfd68d8b")
```

Check the balance of Alice's wallet:
```ruby
alice.get_balance
```

It should be `0`. Now let's send some tokens to Alice (and store the transaction hash):
```ruby
tx_hash = wallet.send_capacity(alice.address, 1000 * 10**8)
```

Then we need for the miner to pack this transaction into a block. Meanwhile we can check the transaction status by:
```ruby
api.get_transaction(tx_hash)
```

After the transaction is committed, we can check Alice's balance again:
```ruby
alice.get_balance
```

Now you have successfully made your CKB token transfer. Congratulations!





