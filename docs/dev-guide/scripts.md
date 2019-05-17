---
id: scripts
title: Scripts
---

This document introduces how the script works in CKB system, and how can you program scripts to build applications.

Please notice that scripts functionality is not stable at the moment. There might be major changes been made to this part in the future. Also the toolchain for scripting is not fully developed yet. So here we only gie an introduction to the scripting in CKB.


## Script Model

Both `lock` script and `type` script are [`script`  data structure](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Script), which has two parts: `code_hash` and `args`.

### `code_hash`

`code_hash` is the hash of a Linux [ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) formatted [RISC-V](https://riscv.org/) script binary.

The actual script code MUST NOT be put in the `script` structure directly. Instead, it should always be stored in the `data` field of a `cell`.

To use the script code in a [transaction](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#transaction), the `cell` that stores the script code should be used as a `deps` cell in the transaction. Upon the transaction verification, the CKB client will search the `deps` cell of this transaction for a cell whose `data` field has the same hash with the `code_hash` field. Then this `deps` cell's `data` field will be loaded into a CKB-VM instance to be executed as the actual script.

### `args`

`args` is an array of arguments as the script input.

CKB scripts use the UNIX standard execution environment. Each script should contain a main function with the following arguments:

```c
int main(int argc, char* argv[]);
```

For `lock` script, when the script data is loaded into a CKB-VM instance, along with the `args` in the `lock` script, the `args` in the `inputs` of the transaction as well as the `witness` will be concatenated (`args` in script + `args` in `inputs` + `witness`) and used as input arguments for the script. This group of input arguments will fill in the `argc`/`argv` part in the `main` function. (`argc` is the number of arguments in `args` and `argv` is a pointer that points to the start point of all the input arguments in the memory)

For `type` script, only the `args` in its own `script` structure will be used as input arguments for the script execution.


### Script Execution

The script is executed in a CKB-VM instance, which is a [RISC-V](https://riscv.org/) simulator. To learn more about how the CKB-VM works, please refer [CKB-VM paper](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm).

When the script execution is terminated, the `main` function of the script should return a code. A return code of `0` means that the script execution was succeeded, other values may indicate that the execution was failed.


## A Script Example

Here we will show an example script: [secp256k1_blake160_sighash_all.c](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c). 

This script here is used in the `lock` script. It takes four parameters:
* The hashed pubkey. 
* The original pubkey 
* The transaction signature
* The length of the signature

The first argument should be stored on-chain inside of the `lock` script as an `args`. It will later be used as a proof. Others should be put in transaction `witness` when you are trying to unlock a `lock` script. 

> The first argument is hashed because in this way the original pubkey does not need to be disclosed on-chain, so that it can achieve privacy to some extend.

The script's function is to check if the signature of the transaction is indeed signed by the owner of the pubkey. When the script is executed in a CKB-VM instance, it will first verify the pubkey against the hashed pubkey stored on-chain to see if it is valid. Then it will recover the transaction signature and verify it against the pubkey again to check if the transaction is indeed singed by the owner of the pubkey, who is also the owner of the `lock` script. In this way, the owner of this `lock` script will be the owner of the cells that are "locked" by this `lock` script.


Here is the procedure for using this script on CKB. Please note that this is not a step-by-step tutorial. It is just for showing you how this process works.
* Compile the script to get an ELF format binary file
* Deploy a cell that has this binary file in its `data` field to CKB
* Calculate the hash of this binary, which will later be used as the `code_hash` in the `lock` script
* Calculate the hash of your pubkey, which will later be used as the `args` in the `lock` script

At the end of the day, you will get a `lock` script like this:
```json
"lock":{
  "code_hash": "0x9e3b3557f11b2b3532ce352bfe8017e9fd11d154c4c7f9b7aaaa1e621b539a08",
  "args": [
    "0x7f52f0fccdd1d11391c441adfb174f87bca612b0"
  ]
}
```

You can send this script to your friend and your friend will be able to send you some CK Bytes by sending a transaction to CKB with an output cell that has this `lock` script.

To use your cell, you need to construct a transaction with a `witness` that has your pubkey and transaction signature. It will be something like this:

```json
"witnesses":[{
    "data":[
  "0x024a501efd328e062c8675f2365970728c859c592beeefd6be8ead3d901330bc01",
  "0x3044022038f282cffdd26e2a050d7779ddc29be81a7e2f8a73706d2b7a6fde8a78e950ee0220538657b4c01be3e77827a82e92d33a923e864c55b88fd18cd5e5b25597432e9b"
]
}]
```

## Scripting with Other Languages

The example showed above is programmed with C. It is also possible to write scripts for CKB using other languages.

Any programming languages supported by [RISC-V](https://riscv.org/) toolchain will be able to be used for scripting. This includes high level languages such as Ruby, Javascript and Python. 

For example, we can enable scripting using Ruby with [mruby](https://github.com/mruby/mruby), which is the lightweight implementation of the Ruby language.

The way we do it is to run the Ruby script on top of the mruby that is on top of the CKB-VM. When running a ruby script, first the CKB mruby binary will be loaded into a CKB-VM instance, creating a Ruby interpreter environment. Then the ruby script will be entered into the CKB mruby as input arguments, and then the actual arguments to the Ruby scripts will be entered afterward.

It is also possible to do the same thing with [micropython](https://micropython.org/) or [duktape](https://duktape.org/) to enable writing scripts in Python and Javascript.

This part of function is still under development.