---
id: scripts
title: Write Scripts
---

This document introduces how the script works in CKB system, and how can you program scripts to build applications.


## Script Model

Both `lock` script and `type` script are [`script`  data structure](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Script), which has two parts: `code_hash` and `args`.

> the `args` in a `script` is different from the `args` in the `inputs` of a transaction. The `args` in `script` is part of the `lock` (or `type`) script itself, while the `args` in `inputs` is for unlocking the input cells.

### `code_hash`

`code_hash` is the hash of a Linux [ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) formatted [RISC-V](https://riscv.org/) script binary.

The actual script code MUST NOT be put in the `script` structure directly. Instead, it should always be stored in the `data` field of a `cell`.

To use the script code in a [transaction](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#transaction), the `cell` that stores the script code should be used as a `deps` cell in the transaction. Upon the transaction verification, the CKB client will search the `deps` cell of this transaction for a cell whose `data` field has the same hash with the `code_hash` of an input (or output) cell's `type` (or `lock`) script. Then this `deps` cell's `data` field will be loaded into a CKB-VM instance to be executed as the actual `type` (or `lock`) script.

### `args`

`args` is an array of arguments as the script input.

CKB scripts use the UNIX standard execution environment. Each script should contain a main function with the following arguments:

```c
int main(int argc, char* argv[]);
```

When the script data is loaded into a CKB-VM instance, along with the `args` in the `lock` script, the `args` in the `inputs` of the transaction as well as the `witness` will be concatenated (`args` in script + `args` in `inputs` + `witness`) and used as input arguments for the script. This group of input arguments will fill in the `argc`/`argv` part in the `main` function. (`argc` is the number of arguments in `args` and `argv` is a pointer that points to the start point of all the input arguments in the memory)



### Script Execution

The script is executed in a CKB-VM instance, which is a [RISC-V](https://riscv.org/) simulator. To learn more about how the CKB-VM works, please refer [CKB-VM paper](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm).

When the script execution is terminated, the `main` function of the script should return a code. A return code of `0` means that the script execution was succeeded, other values may indicate that the execution was failed.


## Writing Scripts in Ruby

Here we will show how to write scripts in Ruby.

> We only use Ruby here as an example. Please note that it's also possible to write scripts in language that is supported by [RISC-V](https://riscv.org/), such as Javascript or Python as well as C/C++.

### CKB mruby
[mruby](https://github.com/mruby/mruby) is the lightweight implementation of the Ruby language. On CKB, we made a customized [CKB mruby](https://github.com/nervosnetwork/mruby-contracts) to enable writing scripts in Ruby.

The way we do it is to run the Ruby script on top of the mruby that is on top of the CKB-VM. When running a ruby script, first the CKB mruby binary will be loaded into a CKB-VM instance, creating a Ruby interpreter environment. Then the ruby script will be entered into the CKB mruby as input arguments, and then the actual arguments to the Ruby scripts will be entered afterward.

If the script works normal and is successfully executed, it should return a code `0`; otherwise, if there are any errors, the Ruby script throws an exception and the CKB-VM instance returns a non-zero code.


> It is also possible to do the same thing with [micropython](https://micropython.org/) or [duktape](https://duktape.org/) to enable writing scripts in Python and Javascript.

### Example Demo
We have built a [Ruby demo example](https://github.com/nervosnetwork/ckb-demo-ruby) to show how this is done. Please refer its [README.md](https://github.com/nervosnetwork/ckb-demo-ruby/blob/develop/README.md) for the walkthrough.


At the end of the day, a `script` that use Ruby might look like this:

```json
{
  "code_hash": "0x12b464bcab8f55822501cdb91ea35ea707d72ec970363972388a0c49b94d377c",
  "args": [
    "# This contract needs 3 required arguments:\n# 0. pubkey hash, double blake2b hash of pubkey, used to shield the real\n# pubkey in lock script.\n# 1. pubkey, real pubkey used to identify token owner\n# 2. signature, signature used to present ownership\nif ARGV.length != 3\n  raise \"Wrong number of arguments!\"\nend\n\ndef hex_to_bin(s)\n  if s.start_with?(\"0x\")\n    s = s[2..-1]\n  end\n  [s].pack(\"H*\")\nend\n\npubkey_hash = hex_to_bin(ARGV[0])\npubkey = hex_to_bin(ARGV[1])\nhash = Blake2b.new.update(Blake2b.new.update(pubkey).final).final\nunless hash == pubkey_hash\n  raise \"Invalid pubkey!\"\nend\n\ntx = CKB.load_tx\nblake2b = Blake2b.new\n\ntx[\"inputs\"].each_with_index do |input, i|\n  blake2b.update(input[\"hash\"])\n  blake2b.update(input[\"index\"].to_s)\nend\ntx[\"outputs\"].each_with_index do |output, i|\n  blake2b.update(output[\"capacity\"].to_s)\n  blake2b.update(CKB.load_script_hash(i, CKB::Source::OUTPUT, CKB::HashType::LOCK))\n  if hash = CKB.load_script_hash(i, CKB::Source::OUTPUT, CKB::HashType::TYPE)\n    blake2b.update(hash)\n  end\nend\nhash = blake2b.final\npubkey = ARGV[0]\nsignature = ARGV[1]\n\nunless Secp256k1.verify(hex_to_bin(pubkey), hex_to_bin(signature), hash)\n  raise \"Signature verification error!\"\nend\n",
    "0x64886cbe860703f6b4f3fdded7958f38ed3f54ac75d773ba6f323ab063fe5bb2"
  ]
}
```

The `code_hash`  "0x12b46..." here is the hash of the compiled customized CKB `mruby` binary, which is stored in a `deps` cell.

The first argument in `args` is [the actual Ruby script](https://gist.github.com/Mine77/c6dca07d306304a579e80f9184397065) to be executed. The second on is a hashed pubkey. (This pubkey is hashed for verifying the owner of the cell without disclose the identity of the cell before it is used.)

To use one of the cells that is locked by this `lock` script, put the following data in the `witness` part of the transaction.
```json
"witnesses":[{
    "data":[
  "0x024a501efd328e062c8675f2365970728c859c592beeefd6be8ead3d901330bc01",
  "0x3044022038f282cffdd26e2a050d7779ddc29be81a7e2f8a73706d2b7a6fde8a78e950ee0220538657b4c01be3e77827a82e92d33a923e864c55b88fd18cd5e5b25597432e9b"
]
}]
```

### Ruby Libraries

In addition to the standard Ruby methods, we also provide some [Ruby libraries](https://github.com/nervosnetwork/mruby-contracts) to support scripts to do verifications easier or read information from CKB:

* [`mruby-ckb`](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-ckb): provides access to CKB environment, such as loading transaction, script hash, cell data as well as debugging support.
* [`mruby-secp256k1`](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-secp256k1): provides secp256k1 binding in Ruby environment
* [`mruby-blake2b`](https://github.com/nervosnetwork/mruby-contracts/tree/master/mruby-blake2b): provides a basic Blake2b binding in Ruby environment(hard-code personalization to "ckb-default-hash")
