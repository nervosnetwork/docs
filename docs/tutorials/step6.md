---
id: step6
title: 6. Transaction Signing
---

A transaction can be signed in many ways as per the below:  

Similar to bitcoin, we can sign inputs and outputs of a transaction in many ways:

* __SIGHASH ALL__  - 0x01
Signature applies to all inputs and outputs

* __SIGHASH NONE__ -  0x02
Signature applies to all inputs, none of the outputs

* __SIGHASH SINGLE__  0x03
Signature applies to all inputs but only the one output with the same index number as the signed input

* __ANYONE CAN PAY__ modifier
When Anyone can Pay is set, only one input is signed, leaving the rest of the inputs open for modification

* __SIGHASH ALL | ANYONE CAN PAY__ - 0x81
Signature applies to one input and all outputs

* __SIGHASH NONE | ANYONE CAN PAY__ - 0x82
Signature apples to one input, none of the inputs

* __SIGHASH SINGLE | ANYONE CAN PAY__ - 0x83
Signature applies to one input and the output with the same index number


```
1 def self.sign_sighash_all_inputs(inputs, outputs, privkey)
2      s = Ckb::Blake2b.new
3      sighash_type = 0x1.to_s
4      s.update(sighash_type)
5      inputs.each do |input|
6       s.update(Ckb::Utils.hex_to_bin(input[:previous_output][:hash]))
7        s.update(input[:previous_output][:index].to_s)
8     end
9      outputs.each do |output|
10        s.update(output[:capacity].to_s)
11        s.update(Ckb::Utils.hex_to_bin(Ckb::Utils.json_script_to_hash(output[:lock])))
12        if output[:type]
13         s.update(Ckb::Utils.hex_to_bin(Ckb::Utils.json_script_to_hash(output[:type])))
14        end
15      end
16     key = Secp256k1::PrivateKey.new(privkey: privkey)
17      signature = key.ecdsa_serialize(key.ecdsa_sign(s.digest, raw: true))
18     signature_hex = Ckb::Utils.bin_to_hex(signature)
19      inputs.map do |input|
20       args = input[:args] + [signature_hex, sighash_type]
21       input.merge(args: args)
22     end
23   end
```

__Line 1__ - Defines the function name for to sign all inputs

__Line 2__ - Instantiates a new pre-image of a hash using the Blake2b hash algorithm

__Line 3__ - Selects how we would like to sign this transaction, in this situation, we will choose to use SIGHASH ALL signing(similar to bitcoin transactions)

__Line 4__ - We then update the pre-image of the hash with the sighash type

__Lines 5-8__ - For each input, update the pre-image hash for the transaction and and index.

__Lines 9-15__ - For Each output, update the pre-image of the capacity and lock script hash.

__Line 16__ - This creates a new private key using the Secp256k1 algorithm

__Line 17__ - This creates a signature by having the private key sign the data from the hash function using the ECDSA algorithm. It then serializes it to binary.

__Line 18__ - This converts the signature binary to hex format.

__Lines 19-22__ -  For each input, we build the arguments to sign their values.
