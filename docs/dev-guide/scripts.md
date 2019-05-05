---
id: scripts
title: Write Scripts
---

This document introduces how the script works in CKB system, and how can you program scripts to build applications.


## Script Model

Both `lock` script and `type` script are [`Script`  data structure](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Script), which has two parts: `code_hash` and `args`.

### `code_hash`

`code_hash` is the hash of an ELF formatted RISC-V script binary.

The actual script code MUST NOT be put in the `script` structure directly, instead it should always be stored in the `data` field of a `cell`.

To use the script code in a [transaction](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#transaction), the `cell` that stores the script code should be used as a `deps` cell in the transaction. Upon the transaction verification, the CKB client will search the `deps` cell of this transaction for a cell whose `data` filed has the same hash with the `code_hash` of an input (or output) cell's `type` (or `lock`) script. Then this `deps` cell's `data` field will be loaded into an  CKB-VM instance to be executed as the actual `type` (or `lock`) script.

### `args`

`args` is an array of arguments as the script input.

CKB scripts use UNIX standard execution environment. Each script should contain a main function with the following arguments:

```c
int main(int argc, char* argv[]);
```

When the script data is loaded into an CKB-VM instance, `args` will be used as arguments for the `argc`/`argv` part. (`argc` is the number of arguments in `args` and `argv` is a pointer that points to the start point of all the input arguments in the memory)

### Script Execution

The script is executed in a CKB-VM instance, which is a RISC-V simulator. To learn more about how the CKB-VM works, please refer [CKB-VM paper](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm).

When the script execution is terminated, the `main` function of the script should return a code. A return code of `0` means that the script execution was succeeded, other values may indicate that the execution was failed.

In practice, one example script might look like this:

```json
{
  "code_hash": "0x12b464bcab8f55822501cdb91ea35ea707d72ec970363972388a0c49b94d377c",
  "args": [
    "0x024a501efd328e062c8675f2365970728c859c592beeefd6be8ead3d901330bc01",
    "0x3044022038f282cffdd26e2a050d7779ddc29be81a7e2f8a73706d2b7a6fde8a78e950ee0220538657b4c01be3e77827a82e92d33a923e864c55b88fd18cd5e5b25597432e9b",
    "0x1"
  ]
}
```

This script structure uses `reference` field to refer to an existing cell for using its script's `binary`. [The referenced script here](https://github.com/nervosnetwork/ckb-ruby-scripts/blob/281936ed0d5fa0a9b0c259e08efc1740e8b66992/bitcoin_unlock.rb#L1-L10) is a cryptographic verification program that works like Bitcoin's unlock scripts. It can recover the signature of the transaction and verify it against a public key. In this example. the public key is in the `signed_args` and the signature of the transaction is in the `args`. (The second parameter of `args` is for specifing the type of `SIGHASH`.) By making use of this script here, you can unlock a cell with a `lock` that has a `type_hash` of this script, and use it as input of the transaction you want to send.



## Writing Scripts in Ruby

Here we will show how to write scripts in Ruby.

> We only use Ruby here as an example. Please note that it's also possible to write scripts in language that is supported by RISC-V, such as Javascript or Python as well as C/C++.

### CKB mruby
[mruby](https://github.com/mruby/mruby) is the lightweight implementation of the Ruby language. On CKB, we made a customized [CKB mruby](https://github.com/nervosnetwork/mruby-contracts) to enable writing scripts in Ruby.

The way we do it is to run the Ruby script on top of the mruby that is on top of the CKB-VM. When running a ruby script, first the CKB mruby binary will be loaded into a CKB-VM instance, creating a Ruby interpreter environment. Then the ruby script will be entered into the CKB mruby as input arguments, and then the actual arguments to the Ruby scripts will be entered afterwards.

If the scripts works normal and is successfully executed, it should return a code `0`; otherwise, if there is any errors, the Ruby script throws an exception and the CKB-VM instance returns a non-zero code.


> It is also possible to do the same thing with [micropython](https://micropython.org/) or [duktape](https://duktape.org/) to enable writing scripts in python and Javascript.

### Example Demo
We have built a [Ruby demo example](https://github.com/nervosnetwork/ckb-demo-ruby) to show how this is done. Please refer its [README.md](https://github.com/nervosnetwork/ckb-demo-ruby/blob/develop/README.md) for the walkthrough.

At the end of the day, a `script` that use Ruby might looks like this:

```json
{
  "code_hash": "0x12b464bcab8f55822501cdb91ea35ea707d72ec970363972388a0c49b94d377c",
  "args": [
    "# This contract needs 4 required arguments:\n# 0. pubkey hash, double blake2b hash of pubkey, used to shield the real\n# pubkey in lock script.\n# 1. pubkey, real pubkey used to identify token owner\n# 2. signature, signature used to present ownership\n# 3. type, SIGHASH type\n# One optional argument is supported here:\n# 4. output(s), this is only used for SIGHASH_SINGLE and SIGHASH_MULTIPLE types,\n# for SIGHASH_SINGLE, it stores an integer denoting the index of output to be\n# signed; for SIGHASH_MULTIPLE, it stores a string of `,` separated array denoting\n# outputs to sign\nif ARGV.length != 3 && ARGV.length != 4\n  raise \"Wrong number of arguments!\"\nend\n\nSIGHASH_ALL = 0x1\nSIGHASH_NONE = 0x2\nSIGHASH_SINGLE = 0x3\nSIGHASH_MULTIPLE = 0x4\nSIGHASH_ANYONECANPAY = 0x80\n\ndef hex_to_bin(s)\n  if s.start_with?(\"0x\")\n    s = s[2..-1]\n  end\n  [s].pack(\"H*\")\nend\n\n\ntx = CKB.load_tx\nblake2b = Blake2b.new\n\nblake2b.update(ARGV[2])\nsighash_type = ARGV[2].to_i\n\nif sighash_type & SIGHASH_ANYONECANPAY != 0\n  # Only hash current input\n  out_point = CKB.load_input_out_point(0, CKB::Source::CURRENT)\n  blake2b.update(out_point[\"hash\"])\n  blake2b.update(out_point[\"index\"].to_s)\n  blake2b.update(CKB::CellField.new(CKB::Source::CURRENT, 0, CKB::CellField::LOCK_HASH).readall)\nelse\n  # Hash all inputs\n  tx[\"inputs\"].each_with_index do |input, i|\n    blake2b.update(input[\"hash\"])\n    blake2b.update(input[\"index\"].to_s)\n    blake2b.update(CKB.load_script_hash(i, CKB::Source::INPUT, CKB::Category::LOCK))\n  end\nend\n\ncase sighash_type & (~SIGHASH_ANYONECANPAY)\nwhen SIGHASH_ALL\n  tx[\"outputs\"].each_with_index do |output, i|\n    blake2b.update(output[\"capacity\"].to_s)\n    blake2b.update(output[\"lock\"])\n    if hash = CKB.load_script_hash(i, CKB::Source::OUTPUT, CKB::Category::TYPE)\n      blake2b.update(hash)\n    end\n  end\nwhen SIGHASH_SINGLE\n  raise \"Not enough arguments\" unless ARGV[3]\n  output_index = ARGV[3].to_i\n  output = tx[\"outputs\"][output_index]\n  blake2b.update(output[\"capacity\"].to_s)\n  blake2b.update(output[\"lock\"])\n  if hash = CKB.load_script_hash(output_index, CKB::Source::OUTPUT, CKB::Category::TYPE)\n    blake2b.update(hash)\n  end\nwhen SIGHASH_MULTIPLE\n  raise \"Not enough arguments\" unless ARGV[3]\n  ARGV[3].split(\",\").each do |output_index|\n    output_index = output_index.to_i\n    output = tx[\"outputs\"][output_index]\n    blake2b.update(output[\"capacity\"].to_s)\n    blake2b.update(output[\"lock\"])\n    if hash = CKB.load_script_hash(output_index, CKB::Source::OUTPUT, CKB::Category::TYPE)\n      blake2b.update(hash)\n    end\n  end\nend\nhash = blake2b.final\n\npubkey = ARGV[0]\nsignature = ARGV[1]\n\nunless Secp256k1.verify(hex_to_bin(pubkey), hex_to_bin(signature), hash)\n  raise \"Signature verification error!\"\nend\n",
    "0x64886cbe860703f6b4f3fdded7958f38ed3f54ac75d773ba6f323ab063fe5bb2",
    "0x024a501efd328e062c8675f2365970728c859c592beeefd6be8ead3d901330bc01",
    "0x3044022038f282cffdd26e2a050d7779ddc29be81a7e2f8a73706d2b7a6fde8a78e950ee0220538657b4c01be3e77827a82e92d33a923e864c55b88fd18cd5e5b25597432e9b",
    "0x1"
  ]
}
```

The `code_hash`  "0x12b46..." here is the hash of the compiled customized CKB `mruby` binary, which is stored in a `deps` cell. 

The first argument in `args` is [the actual Ruby script](https://github.com/nervosnetwork/ckb-ruby-scripts/blob/master/secp256k1_blake2b_lock.rb) to be executed. From the second one to the fifth one are the arguments for this Ruby script.

As you can see from the comments at the beginning of the code, these 4 input arguments for the Ruby scripts are: hash of pubkey, pubkey, signature and the flag of selecting SIGHASH type.


### Ruby Libraries

In addition to the standard Ruby methods, we also provide some [Ruby libraries](https://github.com/nervosnetwork/mruby-contracts) to support scripts to do verifications easier or read information from CKB:

* [`mruby-ckb`](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-ckb): provides access to CKB environment, such as loading transaction, script hash, cell data as well as debugging support.
* [`mruby-secp256k1`](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-secp256k1): provides secp256k1 binding in Ruby environment
* [`mruby-blake2b`](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-blake2b): provides a basic Blake2b binding in Ruby environment(hard-code personalization to "ckb-default-hash")

