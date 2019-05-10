---
id: step9
title: 9. Sending a transaction
---

Using the [generate_tx](https://www.google.com) method in __5.3__ we created, we can now send a transaction and send some tokens to  Alice based on Alice's lock script.

```
[2] pry(main)> my_wallet.generate_tx(alice.lock,3000)
=> 100000
```

Now that you have sent a transaction, let's get the details of the transaction.
