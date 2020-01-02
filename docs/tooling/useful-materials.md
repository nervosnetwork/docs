---
id: useful-materials
title: Useful Materials
---
If you want to develop on Nervos CKB, it’s recommended that you learn some background knowledge. Here is a collection of all the materials that can help you to understand it. If you want to learn more about the design philosophy of Nervos, you can refer to the [Nervos System Design](https://docs.nervos.org/references/nervos-design.html)

### Data structure

[Data Structures of Nervos CKB](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md) explains all of the basic data structures used in CKB, you can find the basic data structures and example used in CKB:

* [Cell](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Cell)
* [Script](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Script)
* [Transaction](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md)
* [Block](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Block)

### CKB Transaction structure

CKB Transaction is an essential data structure in CKB. We provide an RFC: [CKB Transaction structure](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md). The RFC contains two parts: the first one covers the core transaction features and the second one introduces some extensions. The details in this RFC maybe outdated, but still worth to read, you can check the newest transaction structure from the [schema](https://github.com/nervosnetwork/ckb/blob/develop/util/types/schemas/blockchain.mol#L64)

### Deposit and Withdraw in Nervos DAO

[Deposit and Withdraw in Nervos DAO](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0023-dao-deposit-withdraw/0023-dao-deposit-withdraw.md) describes deposit and withdraw transactions in Nervos DAO with example. It’s very useful for developing Nervos DAO related features.


### CKB Script Programming

Nervos CKB VM developer [Xuejie Xiao](https://xuejie.space/) has written a series of articles about CKB Script Programming. It’s very useful for developing scripts and applications that utilize CKB.

* [Introduction to CKB Script Programming 1: Validation Model](https://xuejie.space/2019_07_05_introduction_to_ckb_script_programming_validation_model/)
* [Introduction to CKB Script Programming 2: Script Basics](https://xuejie.space/2019_07_13_introduction_to_ckb_script_programming_script_basics/)
* [Introduction to CKB Script Programming 3: UDT](https://xuejie.space/2019_09_06_introduction_to_ckb_script_programming_udt/)
* [Introduction to CKB Script Programming 4: WebAssembly on CKB](https://xuejie.space/2019_10_09_introduction_to_ckb_script_programming_wasm_on_ckb/)
* [Introduction to CKB Script Programming 5: Debugging](https://xuejie.space/2019_10_18_introduction_to_ckb_script_programming_debugging/)

### Lockscript Samples

Currently, CKB has two lock scripts in the genesis block, The address code hash index `0x00` is for pay to pubkey hash and `0x01` is for pay to multisig, see [RFC](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md#short-payload-format) to learn details. You can refer to the samples：

* [secp256k1 system script](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c)
* [multisign system script](https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_multisig_all.c)
* [How to sign transaction](https://github.com/nervosnetwork/ckb-system-scripts/wiki/How-to-sign-transaction)

### Build CKB contract with Rust

Nervos CKB developer [JJY](https://github.com/jjyr) has written a series of articles to explain that  how to write a CKB contract in Rust and deploy it. We’ll see that the `no_std` Rust actually is better than our first impression.

* [Build CKB contract with Rust - part 1](https://talk.nervos.org/t/build-ckb-contract-with-rust-part-1/4064)

