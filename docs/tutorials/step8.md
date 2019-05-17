---
id: step8
title: 8. Creating Lock Script
---

A __Lock Script__ is created and when attached to a cell, outlines who can unlock the cell when it is part of an input cell in a transaction.

# 8.1 Lock Script for a Cell

## Arguments for the script

* __Argument 1__ - public key, used to identify the token owner
* __Argument 2__ - signature, used to present ownership

__Script__

In a file called __lock_script.rb__ you can write the following file:

```
1 if ARGV.length != 2
2   raise "Wrong number of arguments!"
3 end

4 def hex_to_bin(s)
5  if s.start_with?("0x")
6    s = s[2..-1]
7  end
8  [s].pack("H*")
9 end

10 hash = CKB.load_tx_hash

11 pubkey = ARGV[0]
12 signature = ARGV[1]

13 unless Secp256k1.verify(hex_to_bin(pubkey), hex_to_bin(signature), hash)
14  raise "Signature verification error!"
15 end
```


__Lines 1-3__  - We perform argument validation to check we’re only submitting two arguments

__Line 4-9__  - Defines a function to convert hex to binary

__Line 10__ - We load in the transaction hash into the script

__Line 11__ - Assign the first argument as the pubic key

__Line 12__ - Assign the second argument as the signature

__Line 13-15__ - We validate the signature, public key and data objects to determine if it’s valid.

Now that you know how to create a __Lock Script__ to constrain a cell to a specific user, let's start sending a transaction to a wallet.
