---
id: architecture
title: CKB Architecture
---

![data-structure](assets/ckb-structure.png)



There are primarily four major data structures in CKB: cell, transaction, script, and block. You can find their detailed data structures in the [RFC#0019](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md).

 
## Cell

> More information about cell can be found in the [Nervos whitepaper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#42-cell).

cell is the most basic element in CKB system. cell can be used to store states or scripts. 

A state cell may contain the state data of an application or a UDT (User Different Token), for example, a user's balance of a kind of UDT. A script cell may contain the logic of an application or the rules of a UDT, such as a rule says that the balance of a UDT cannot be negative. 

> It is feasible to let a cell store both the state and the logic of an application, but if this application wants to leverage the power of [layer2 solutions](https://github.com/Awesome-Layer-2/Awesome-Layer-2), this is not recommended. This may result in the same problem of ["Looking at ownership in the EVM"](https://medium.com/@kelvinfichter/looking-at-ownership-in-the-evm-6e6914d341d).


A cell has four parts:
* `capacity` limits the size of the cell.
* `data` stores the state data or scripts. 
* `type` defines the type of cell by defining how the `data` part can be modified. 
* `lock` defines the ownership of a cell. 

We will explain how these four parts work in the next section.

## Transaction

> More information about the transaction of Nervos CKB can be found in [whitepaper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#44-transaction).

### Structure
Transaction is for updating the cells on-chain (i.e. the state on-chain). By sending a transaction to a CKB node, the transaction will be verified and confirmed by the whole blockchain system, and the new cells that contain new states can become valid on-chain.

Each transaction has a group of input cells (old states) and a group of output cells (new states). This is different from the transaction of Ethereum, where the transactions only contain the event for updating the states stored on-chain. After received a transaction, an Ethereum node would calculate the new state based on the transaction data and the old state on the blockchain system, then replace the old state with the newly calculated state. This basically means that Ethereum generates state on-chain, while CKB leaves state to be generated off-chain and verified on-chain.

A transaction basically has three parts: a group of input cells (`inputs`),  a group of output cells (`outputs`), and the dependency data including `deps` and `witness` for providing context for the transaction.

### Transaction Verification

> [Here is an RFC](https://github.com/nervosnetwork/rfcs/pull/80) that lists all the transaction verification rules defined by CKB protocol.

After a CKB node received a transaction, it first gets verified by the rules defined by the CKB protocol, such as the sum capacity of the output cells should be lower or equal than the input cells.

> The sum capacity difference of the input and output cells are collected by the miner as mining fees. It is also possible to pay mining fee with UDTs as long as the miner agree on it.

Another example is that only the live cells can be used in a transaction as input. Every cell has two conceptual status: live (unspent) or dead (spent).  After a transaction is mined and confirmed on-chain, its input cells become "dead", and the output cells become "live". It is this mechanism that prevents double spending from happening.


## Scripts

Apart from the rules defined by CKB system, a transaction also needs to be verified by `lock` script of input cells and the `type` script of output cells. This part is important for understanding how to program cells to limit the state transition of a UDT or an application.

### `lock` script
As mentioned above, the `lock` script defines the ownership of a cell. 

In a transaction, each of the `inputs` has two values: an input cell and an array of `args`. 

> The input cell here is actually a pointer that points to a previous transaction's output cell. This is why the input cells here are actually named as `previous_output`.

In the transaction, there is also a field named `witnesses`, which is an array of witness corresponding to each of the `inputs`. This field is for implementing [SegWit protocol](https://en.bitcoin.it/wiki/Segregated_Witness) that can help to solve the [malleability problem](https://en.bitcoin.it/wiki/Transaction_malleability).

A typical `lock` script may contain the information of the public key of the cell owner. To unlock it, the user needs to put the signature of the transaction in the `witnesses` part. During the verification process, the `lock` script would recover the signature and see if it match with the stored public key, to make sure the transaction is indeed signed by the owner of the input cells.

> The signature function and the hash function used by `lock` script (or `type` script) is not defined by CKB protocol. Developers are free to design and implement their own signature functions in the `lock` script.

### `type` script

`type` script defines how the `data` of a cell can be modified. In a transaction, when there's a group of input cell and a group of output cell that have the same `type` field, the modification of the `data` fields from the input cells to the output cells needs to comply with the rules defined by the `type` script. 

For example, Alice has a cell, whose `data` field stores her balance of a kind of UDT, and its `type` script defines the rules and logic of this UDT. If Alice wants to send some of this UDT to Bob, then she would use this cell as input, and make another cell that has the exact same `type` field with this one as output, but use Bob's `lock` script for this output cell. Then Alice can assemble the transaction and send it to the CKB node. (Alice also needs to make another output cell for herself as the changes for herself) 

### Script Verification

After receiving the transaction, the CKB node would verify the `lock` script with the `args` of this input cell, as well as the `witness`, to make sure that Alice indeed owns the cell. Then it verifies the `type` script of the output cell, which is same to the `type` script of the input cell, to make sure the UDT transaction is valid according to the rules defined by the `type` script.


> In practice, the scripts code is NOT included in the `type` or `lock` directly. The actual code would be stored in another cell and is referred by `type` and `lock` through their hash. This is done by referring these needed cells in the dependency cells field (`deps`) in the transaction using their `outpoint`, and put the hash of their `data` fields in the `code_hash` field of `type` or `lock`.


During the verification process, the specified scripts are loaded and executed in a CKB-VM instance. If the instance returns a code 0 upon the end of execution, the scripts execution is succeeded. Check the [CKB-VM RFC](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm) to learn more about how it works in the CKB-VM.


To learn more about how to write `script` in practice, please refer [write script section](../dev-guide/scripts).


## Block

Block structure contains a pack of transactions and a block header with some meta-data. It is the miner's job to pack transactions into a block and do the Proof-of-Work calculation to find a "seal" to seal the block, then broadcast it to the whole network. Other miners would receive this block, verify it, collect some transactions from their own transaction pool and start to mine a new block based on this received block. 

In CKB, a block also contains the information of uncle blocks in the block structure. It has the complete uncle block header as well as part of the transaction information. Please refer to the [RFC#0019](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#uncleblock) for more details.


### Computing Cycles and Transaction Size

There are two limitations for miners to be considered about when selecting transactions to pack into a block: computing cycles and transaction size.

In CKB, the computation resource consumed by transaction verification, specifically speaking the script's execution, is measured with `cycles`. Each instruction in CKB-VM may [cost different cycles](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits.md#instruction-cycles). The sum cycles cost by all the scripts executed when verifying all the transactions in a block is limited by a value defined by CKB protocol called `MAX_BLOCK_CYCLES`.

The size of a transaction is measured in bytes. The sum size of all the transactions in a block should be lower than `MAX_BLOCK_BYTES`.

> The value of `MAX_BLOCK_CYCLES` and `MAX_BLOCK_BYTES` are not decided yet. They still may be changed in the testnet phase.