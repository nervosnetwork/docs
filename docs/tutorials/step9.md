---
id: step9
title: 9. Sending a transaction
---

Using the [generate_tx](/tutorials/step5#53-generating-a-transaction) method in __5.3__ we created, we can now send a transaction and send some tokens to  Alice based on Alice's lock script.

```
[1] pry(main)> alice = CKB::Wallet.from_hex(api, "0x76e853efa8245389e33f6fe49dcbd359eb56be2f6c3594e12521d2a806d32156")
=> ...
[2] pry(main)> my_wallet.generate_tx(alice.address,3000)
=> 100000
```

Now that you have sent a transaction, let's get the details of the transaction.
