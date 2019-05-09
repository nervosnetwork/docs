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

10 tx = CKB.load_tx
11 blake2b = Blake2b.new

12 tx["inputs"].each_with_index do |input, i|
13  blake2b.update(input["hash"])
14  blake2b.update(input["index"].to_s)
15 end
16 tx["outputs"].each_with_index do |output, i|
17  blake2b.update(output["capacity"].to_s)
18  blake2b.update(CKB.load_script_hash(i, CKB::Source::OUTPUT, CKB::HashType::LOCK))
19  if hash = CKB.load_script_hash(i, CKB::Source::OUTPUT, CKB::HashType::TYPE)
20    blake2b.update(hash)
21  end
22 end
23 hash = blake2b.final

24 pubkey = ARGV[0]
25 signature = ARGV[1]

26 unless Secp256k1.verify(hex_to_bin(pubkey), hex_to_bin(signature), hash)
27  raise "Signature verification error!"
end
```


__Lines 1-3__  - We perform argument validation to check we’re only submitting two arguments

__Line 4-9__  - Defines a function to convert hex to binary

__Line 10__ - We load in the transaction object into the script

__Line 11__ - Instantiate the Blake2b pre-image

__Lines 12-15__  - we update the hash with the inputs to the transaction

__Line 16-22__  - For each output of the transaction, we update the hash with the capacity, the hash of the lock script. If there is a type script on the output cell, we also update the hash with this.

__Line 23__ - Create the hash of the data using the Blake2b algorithm

__Line 24__ - Assign the first argument as the pubic key

__Line 25__ - Assign the second argument as the signature

__Line 26-27__ - We validate the signature, public key and data objects to determine if it’s valid.
