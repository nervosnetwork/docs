---
id: step10
title: 10. Retrieving information about a transaction
---

To retrieve a transaction from the network, we retrieve it by obtaining the hash of a transaction and calling api.get_Transaction(hash_hex). We can create a convenience method to this as follows:


1 def get_transaction(hash_hex)
2      api.get_transaction(hash_hex)
3  end

Line 1 - This defines a function that takes the hash of a transaction in hex format

Line 2 - This uses the hash of the transaction in hex format to retrieve the transaction
