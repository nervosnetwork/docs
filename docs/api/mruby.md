---
id: mruby
title: mruby Libraries
---

## mruby-blake2b

[mruby-blake2b](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-blake2b) is a simple library providing Ruby bindings for blake2b (hard-code personalization to "ckb-default-hash"). 

```ruby
blake2b = Blake2b.new
blake2b.update("abcdef")
# Only string is accepted as argument to the update method
blake2b.update(5.to_s)
hash = blake2b.final
```

## mruby-secp256k1

[mruby-secp256k1](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-secp256k1) provides Ruby binding for secp256k1 algorithm.

### Fetch public key

```ruby
secret_key = "<I am a secret key>"
public_key = Secp256k1.pubkey(secret_key)
```

### Sign message

```ruby
secret_key = "<I am a secret key>"
message = "<I am a 32 byte long message>"
signature = Secp256k1.sign(secret_key, message)
```

### Verify signature

```ruby
public_key = "<I am a public key>"
signature = "<I am a signature>"
message = "<I am a 32 byte long message>"
verified = Secp256k1.verify(public_key, signature, message)
unless verified
  raise "Signature verification error!"
end
```

## mruby-ckb

[mruby-ckb](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-ckb) provides wrapper functions to interact with CKB.

To learn more about how to interact with CKB in scripts, please refer [VM Syscalls RFC](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md).

### Debug

mruby-ckb provides a debug method to print debug messages to CKB:

```ruby
CKB.debug "I'm a debug message: ${5}"
```

### Load Transaction

With the following code in a Ruby script:

```ruby
tx = CKB.load_tx
CKB.debug "TX: #{tx}"
```

We can see logs in CKB like following:

```
2018-12-17 16:03:21.650 +08:00 TransactionPoolService DEBUG script  Transaction 5c065df07094..(omit 40)..5bcdebf47e81, input 0 DEBUG OUTPUT: TX: {"version"=>0, "deps"=>[{"tx_hash"=>"s+\xfdV\xf4v\x87\x05cm{J\x1dc\xbc\x01]\xff\xaf)\x8e!\xe2@Gx\xb5!\xc3\x17]\xca", "index"=>2}], "inputs"=>[{"tx_hash"=>"d\x02\x11\v\x8f\eT\xe6\xce\xe9\xcej\x82\xf9_K\x97U\f\xe1\x92\xfe\xb2\xba_\x86\xe6\x90\xb5PW\xc5", "index"=>0}], "outputs"=>[{"capacity"=>3500000000000, "lock"=>"\xfe\x1a\xc2\xd4\xa6\xd8R\xc3\x94t>\x98\x8f\xd2\xcf\x9eI\xa7j%5n|\x8b\#@\xf6X\xef\xbc,\x1f"}, {"capacity"=>1500000000000, "lock"=>"\x98L\xb0\xc6\a\xe5\xfa7\x8fj\x85m\x02\xdf\x82Y\x0e\xf8T\xc6\xa2>\x15\xd2\f\xe5\xda\x9f\xa4\x9d\x8f\xb2"}]}
```

Here we can see the whole transaction structure is returned by `CKB.load_tx`

### Load Script Hash

Following code can be used to load the hash of a script:

```ruby
# Load cell input 1's unlock script hash, note lock and unlock refer to the same item.
# Return value here is a string of 32 bytes
CKB.load_script_hash(1, CKB::Source::INPUT, CKB::Category::LOCK)
# Load cell output 2's type script hash, note that type script is optional, so the
# returned value here could be nil
CKB.load_script_hash(2, CKB::Source::OUTPUT, CKB::Category::TYPE)
# Load current cell's lock hash
CKB.load_script_hash(0, CKB::Source::CURRENT, CKB::Category::LOCK)
```

### Load Input OutPoint

With the following code in a Ruby script:

```ruby
CKB.debug "OutPoint: #{CKB.load_input_out_point(0, CKB::Source::CURRENT)}"
```

We can expect output logs in CKB like:

```
2018-12-17 16:10:44.185 +08:00 TransactionPoolService DEBUG script  Transaction f424348ef9d0..(omit 40)..8f79d68c82b4, input 0 DEBUG OUTPUT: OutPoint: {"tx_hash"=>"#~\x9ekK23\xc7\x0f%\xaa\n\xa1\xc8\xc0\x81<\x948`B\xab\x9e\xb5\xe0\xea8\xe3r\xd3\x9e\x99", "index"=>0}
```

It's also possible to load input OutPoint from a different index:

```ruby
CKB.load_input_out_point(1, CKB::Source::INPUT)
# This won't trigger errors but would always return nil since output doesn't have
# OutPoint
CKB.load_input_out_point(1, CKB::Source::OUTPUT)
```

### Load Cell By Field

We can also load certain field in a cell:

```ruby
# Capacity is serialized into 8-byte little endian bytes
capacity = CKB::CellField.new(CKB::Source::INPUT, 1, CKB::CellField::CAPACITY).read(0, 8).unpack("Q<")[0]
# Data is stored as raw bytes, readall here can be used to fetch all the data
data = CKB::CellField.new(CKB::Source::OUTPUT, 2, CKB::CellField::DATA).readall
# Lock and contract hash are returned as 32 byte string
lock_hash_length = CKB::CellField.new(CKB::Source::CURRENT, 0, CKB::CellField::LOCK_HASH).length
unless length == 32
  raise "Lock hash has invalid length!"
end
contract_hash = CKB::CellField.new(CKB::Source::OUTPUT, 0, CKB::CellField::LOCK_HASH).read(16, 16)
```