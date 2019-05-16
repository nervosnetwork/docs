---
id: step7
title: 7. Scripts
---

Scripts in CKB are used to determine:

* How cells can be used [(Type Scripts)](/dev-guide/scripts)
* Who has the right to spend them. [(Lock Scripts)](/dev-guide/scripts)

For a more in-depth review of scripts please go [here](/dev-guide/scripts)

# 7.1 Input Arguments

Since ruby scripts need to be compiled to binary code, scripts written in ruby need to reference the cell responsible for doing this (which is a cell provided on the network called mruby_out_point).

The specific ruby code you wish to execute is always given as the first argument in the script data structure that references the mruby_out_point.

The next arguments are passed into the script that you passed as the first argument.

An example script arguments:

```json
{
  "code_hash": "0x12b464bcab8f55822501cdb91ea35ea707d72ec970363972388a0c49b94d377c",
  "args": [
    "# This contract needs 3 required arguments:\n# 0. pubkey hash, double blake2b hash of pubkey, used to shield the real\n# pubkey in lock script.\n# 1. pubkey, real pubkey used to identify token owner\n# 2. signature, signature used to present ownership\nif ARGV.length != 3\n  raise \"Wrong number of arguments!\"\nend\n\ndef hex_to_bin(s)\n  if s.start_with?(\"0x\")\n    s = s[2..-1]\n  end\n  [s].pack(\"H*\")\nend\n\npubkey_hash = hex_to_bin(ARGV[0])\npubkey = hex_to_bin(ARGV[1])\nhash = Blake2b.new.update(Blake2b.new.update(pubkey).final).final\nunless hash == pubkey_hash\n  raise \"Invalid pubkey!\"\nend\n\ntx = CKB.load_tx\nblake2b = Blake2b.new\n\ntx[\"inputs\"].each_with_index do |input, i|\n  blake2b.update(input[\"hash\"])\n  blake2b.update(input[\"index\"].to_s)\nend\ntx[\"outputs\"].each_with_index do |output, i|\n  blake2b.update(output[\"capacity\"].to_s)\n  blake2b.update(CKB.load_script_hash(i, CKB::Source::OUTPUT, CKB::HashType::LOCK))\n  if hash = CKB.load_script_hash(i, CKB::Source::OUTPUT, CKB::HashType::TYPE)\n    blake2b.update(hash)\n  end\nend\nhash = blake2b.final\npubkey = ARGV[0]\nsignature = ARGV[1]\n\nunless Secp256k1.verify(hex_to_bin(pubkey), hex_to_bin(signature), hash)\n  raise \"Signature verification error!\"\nend\n",
    "0x64886cbe860703f6b4f3fdded7958f38ed3f54ac75d773ba6f323ab063fe5bb2"
  ]
}
```



# 7.2 Available APIs
Within scripts, we have the following APIs available to us:
* ## Blake2b  
Blake 2b is a cryptographic hash function used to hash data that can be used to verify its authenticity. Blake2b computes the pre-image and final image of the hashed data.

```
blake2b = Blake2b.new
```

* ## Secp2561k
Secp2561k is used to sign and verify signatures using elliptical curve cryptography.

```
Secp256k1.verify(hex_to_bin(pubkey), hex_to_bin(signature), hash)
```

* ## CKB  
CKB is a reference to the CKB-VM and allows the interactions with computing and retrieving on-chain events

```
tx = CKB.load_tx
```

# 7.3 Transaction Scope

Each script has a reference to the current transaction scope to which it is creating or unlocking:

We retrieve the transaction by:

```
tx = CKB.load_tx
```

Now that you know the basic APIs that are available to you in scripts, let's start making one.
