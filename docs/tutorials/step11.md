---
id: step11
title: 11. Receiving Native Tokens
---

To receive tokens, we must get Alice's wallet to send tokens outlining the lock script for your wallet:

```
[2] pry(main)> alice.generate_tx(my_wallet.lock,3000)
=> 100000

[2] pry(main)> my_wallet.get_balance
=> 2000000
```
