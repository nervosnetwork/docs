---
id: architecture
title: CKB Architecture
---

![data-structure](assets/ckb-structure.png)



There are primarily four major data structures in CKB: Cell, Transaction, Script, and Block. You can find detailed explanations to each of them in the [RFC#0019](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md).

 
## Cell

> More information about Cell can be found in the [Nervos whitepaper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#42-cell).

Cell is the most basic element in CKB system. A cell can be used to store a state or a script. 

A state cell may contain the information data of an application or a UDT (User-Defined-Asset), such as the balance of a user's UDT. A script cell may contain the logic of an application or the rules of a UDT, such as a rule says that the balance of a UDT cannot be negative. 

> It is feasible to let a cell store both the state and the logic of an application, but if this application wants to leverage the power of [layer2 solutions](https://github.com/Awesome-Layer-2/Awesome-Layer-2), this is not recommended. This may result in the same problem of [why it is hard to implement EVM on Plasma](https://medium.com/@kelvinfichter/why-is-evm-on-plasma-hard-bf2d99c48df7).


In a single cell, the `capacity` part limits the size of this cell. The `data`, `type` and `lock` are the three parts a developer needs to be considered about when designing an application. 
* `data` stores the data of state or scripts. 
* `type` defines the type of cell by defining how the `data` part can be modified. 
* `lock` defines the ownership of a cell. 

We will explain how to fill in these parts work in the next section.

## Transaction

> More information about the Transaction of Nervos CKB can be found in [whitepaper](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#44-transaction).

### Structure
Transaction is for updating the cells on-chain (i.e., the state on-chain). Each transaction has a group of input cells (old states) and a group of output cells (new states). A transaction should be sent to a CKB node to get it verified and confirmed by the whole blockchain system so that the new cells can become valid on-chain.

> This is different from the transaction of Ethereum, where the transactions only contain the event for updating the states stored on-chain. After received a transaction, an Ethereum node would calculate the new state based on the transaction data and the old state on the blockchain system, then replace the old state with the newly calculated state. This basically means that Ethereum generates state on-chain, while CKB leaves state to be generated off-chain.

To assemble a transaction, three parts need to be filled in: input cells (`inputs`),  output cells (`outputs`), and the dependency cells (`deps`). Now let's talk about how a transaction is verified, and hope it can help you to make sense of how these three fields should be filled in.

### Transaction Verification

> [Here is an RFC](https://github.com/nervosnetwork/rfcs/pull/80) that lists all the transaction verification rules defined by CKB protocol.

After a CKB node received a transaction, it first gets verified by the rules defined by the CKB protocol, such as the sum capacity of the output cells should be lower or equal than the input cells.

> The sum capacity difference of the input and output cells are collected by the miner as mining fees. It is also possible to pay mining fee with UDTs as long as the miner agree on it.

Another example is that only the live cells can be used in a transaction as input. Every Cell has two conceptual status: live (unspent) or dead (spent).  After a transaction is mined and confirmed on-chain, its input cells become "dead", and the output cells get the status of "live". It is this mechanism that prevents double spending from happening.


## Scripts

Apart from the rules defined by CKB system, a transaction also needs to be verified by the scripts specified by the `lock` script of input cells and the `type` script of output cells. This is the part that is crucial for understanding how to define the transition behavior of the on-chain state.

### `lock` script
As mentioned above, the `lock` script defines the ownership of a cell. 

In a transaction, there is a group of `inputs`, which are input cells. Each of the `inputs` has two values: an input cell and an array of `args`. 

> The input cell here is actually named as `previous_output`. It is an outpoint that points to a previous transaction's output cell. This is same to the Bitcoin's UTXO.

In the transaction, there is also a field named `witnesses`, which is an array of witness that corresponding to each of the `inputs`. This field is for implementing [SegWit protocol](https://en.bitcoin.it/wiki/Segregated_Witness) that can help to solve the [malleability problem](https://en.bitcoin.it/wiki/Transaction_malleability).

Upon the transaction verification, the `lock` script will be executed with the `args` in `inputs` and the corresponding witness argument in `witnesses`. Only when the script is successfully executed (returns 0), the transaction is recognized as valid.

A typical `lock` script may contain the information of the public key of the cell owner, and to unlock it, the user needs to put the signature of the transaction in the `witnesses` part. In this case, during the verification process, the `lock` script recover the signature and see if it match with the stored public key, to make sure the transaction is indeed signed by the owner of the input cells.

> The signature function and the hash function used by `lock` script (or `type` script) is not defined by CKB protocol. Developers are free to design and implement their own signature functions in the `lock` script.

### `type` script

`type` script defines how the `data` of a cell can be modified. In a transaction, when there's a group of input cell and a group of output cell that have the same `type` field, the modification of the `data` fields from the input cells to the output cells needs to comply with the rules defined by the `type` script. 

For example, Alice has a cell, whose `data` field stores the balance of a kind of UDT, and its `type` script defines the rules and logic of this UDT. If Alice wants to send some of this UDT to Bob, then she would use this cell as input, and make another cell that has the exact same `type` field with this one as output, but use Bob's `lock` script for this output cell. Then Alice can assemble the transaction and send it to the CKB node. (Alice also needs to make another output cell for herself as the changes for herself) 

### Script Verification

After receiving the transaction, the CKB node would first verify the `lock` script with the `args` of this input cell, as well as the `witness`, to make sure that Alice indeed owns the cell. Then it verifies the `type` script of the output cell, which is same to the `type` script of the input cell, to make sure the UDT transaction is valid according to the rules defined by the `type` script.


> In practice, the scripts code is NOT included in the `type` or `lock` directly. The actual code would be stored in another cell and is referred by `type` and `lock` through their hash. This is done by referring these needed cells in the dependency cells field (`deps`) in the transaction using their `outpoint`, and put the hash of their `data` fields in the `code_hash` field of `type` or `lock`.


During the verification process, the specified scripts are loaded and executed in a CKB-VM instance. Check the [CKB-VM RFC](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm) to learn more about how it works in the CKB-VM.


To learn more about how to write `script` in practice, please refer [write script section](../dev-guide/scripts).


## Block

Block contains a pack of transactions and a block header with some meta-data. It is the miner's job to pack transactions into a block and do the Proof-of-Work calculation to find a "seal" to seal the block, then broadcast it to the whole network. Other miners would receive this block, verify it, collect transactions and start to mine a new block based on this received block. 

In CKB, a block also contains the information of uncle blocks in the block structure. It has the complete uncle block header as well as part of the transaction information. Please refer to the [RFC#0019](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#uncleblock) for more details.


### Computing Cycles and Transaction Size

There are two limitations for miners to be considered about when selecting transactions to pack into a block: computing cycles and transaction size.

In CKB, the computation resource consumed by transaction verification, specifically speaking the script's execution, is measured with `cycles`. Each instruction in CKB-VM may [cost different cycles](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits.md#instruction-cycles). The sum cycles cost by all the scripts executed when verifying all the transactions in a block is limited by a value defined by CKB protocol called `MAX_BLOCK_CYCLES`.

The size of a transaction is measured in bytes. The sum size of all the transactions in a block should be lower than `MAX_BLOCK_BYTES`.
