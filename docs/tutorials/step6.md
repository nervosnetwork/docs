---
id: step6
title: 6. Transaction Signing
---

A transaction can be signed in many ways as per the below:  

Similar to bitcoin, we can sign inputs and outputs of a transaction in many ways:
6.1 SIGHASH ALL  - 0x01
Signature applies to all inputs and outputs
6.2 SIGHASH NONE -  0x02
Signature applies to all inputs, mone of the outputs
6.3 SIGHASH SINGLE  0x03
Signature applies to all inputs but only the one output with the same index number as the signed input
6.4 ANYONE CAN PAY modifier
When Anyone can Pay is set, only one input is signed, leaving the rest of the inputs open for modification
6.5 SIGHASH ALL | ANYONE CAN PAY - 0x81
Signature applies to one input and all outputs
6.6 SIGHASH NONE | ANYONE CAN PAY - 0x82
Signature apples to one input, none of the inputs
6.7 SIGHASH SINGLE | ANYONE CAN PAY - 0x83
Signature applies to one input and the output with the same index number



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

Line 1 - Defines the function name for to sign all inputs

Line 2 - Instantiates a new pre-image of a hash using the Blake2b hash algorithm

Line 3 - Selects how we would like to sign this transaction, in this situation, we will choose to use SIGHASH ALL signing(similar to bitcoin transactions)

Line 4 - We then update the pre-image of the hash with the sighash type

Lines 5-8 - For each input, do this

Lines 9-15 - For Each output, do this

Line 16 - This creates a new private key using the Secp256k1 algorithm

Line 17 - This creates a signature by having the private key sign the data from the hash function using the ecdsa algorithm. It then serializes it to binary.

Line 18 - This converts the signature binary to hex format.

Lines 19 - 22 -  
