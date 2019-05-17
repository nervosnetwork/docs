---
id: step10
title: 10. Retrieving Transaction Information
---

To retrieve a transaction from the network, we retrieve it by obtaining the hash of a transaction and calling api.get_Transaction(hash_hex). We can create a convenience method to this as follows:

```
1 # @param hash_hex [String] "0x..."
2    #
3    # @return [CKB::Types::Transaction]
4    def get_transaction(hash)
5      api.get_transaction(hash)
6    end
```

__Line 4__ - This defines a function that takes the hash of a transaction in hex format

__Line 5__ - This uses the hash of the transaction in hex format to retrieve the transaction

Now that you have been able to retrieve the hash of the transaction, let's get Alice's wallet to send you some tokens.
