---
id: step8
title: 8. Creating Lock Script
---

A Lock Script is created and when attached to a cell, outlines who can unlock the cell when it is part of an input cell in a transaction.
8.1 Lock Script for a Cell

Arguments for the script

Argument 1 - public key, used to identify the token owner

Argument 2 - signature, used to present ownership

Script

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



Lines 1 - 3  - We perform argument validation to check we’re only submitting two arguments

Line 4 - 9  - Defines a function to convert hex to binary

Line 10 - We load in the transaction object into the script

Line 11 - Instantiate the Blake2b pre-image

Lines 12 - 15  - we update the hash with the inputs to the transaction

Line 16 - 22  - For each output of the transaction, we update the hash with the capacity, the hash of the lock script. If there is a type script on the output cell, we also update the hash with this.

Line 23 - Create the hash of the data using the blake2b algorithm

Line 24 - Assign the first argument as the pubic key

Line 25 - Assign the second argument as the signature

Line 26 - 27 - We validate the signature, public key and data objects to determine if it’s valid.
