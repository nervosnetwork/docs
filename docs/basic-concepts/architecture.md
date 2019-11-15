---
id: architecture
title: CKB Architecture
---

![data-structure](assets/ckb-structure.png) //update



There are primarily four major data structures in CKB: cell, transaction, script, and block. 

You can find detailed descriptions of these data structures in [RFC#0019](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md).


## Cell

> More information about the cell can be found in the [Nervos CKB RFC](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#42-cell).

A cell is the most basic element in CKB system. Cell can be used to store state or scripts. 

A state cell may contain the state data of an application or a UDT (User Defined Token), for example, a user's balance of a particular UDT. 

A script cell may contain the logic of an application or the rules of a UDT, such as a rule preventing negative UDT balances. 

> It is feasible that a cell could store both the state and the logic of an application, however, if this application will leverage the power of [Layer 2 solutions](https://github.com/Awesome-Layer-2/Awesome-Layer-2), this is not recommended. This may result in the problem described in ["Looking at ownership in the EVM"](https://medium.com/@kelvinfichter/looking-at-ownership-in-the-evm-6e6914d341d).


A cell contains four fields:
* `capacity` limits the size of the cell.
* `data` stores the state or script data. 
* `type` defines the type of cell by defining the conditions under which the `data` field can be modified. 
* `lock` defines the ownership of a cell. 

We will explain how these four fields work in the next section.

## Transaction

> More information about the transactions in Nervos CKB can be found in the [Nervos CKB RFC](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#44-transaction), as well as [this article describing transaction structure](https://medium.com/nervosnetwork/exploring-an-essential-data-structure-in-ckb-the-transaction-a1ca8fcbfbda). 

### Structure
Transaction is for updating the cells on-chain (i.e. the state on-chain). By sending a transaction to a CKB node, the transaction will be verified and confirmed by all nodes and the new cells containing new state will become valid on-chain.

Each transaction has a group of input cells (old state) and a group of output cells (new state). This is different from transactions in Ethereum, in which transactions only contain an event to kick off updating state on-chain. After receiving a transaction, an Ethereum node will calculate a new state based on the transaction data and prior on-chain state, then replace the old state with the newly calculated state. While Ethereum generates new state on-chain, Nervos CKB requires state to be generated off-chain and then subsequently verified on-chain.

A transaction contains three parts: a group of input cells (`inputs`),  a group of output cells (`outputs`), dependent library code (`deps`) and signature(s)  (`witness`) to support transaction processing.

### Transaction Verification

> [Here is an RFC](https://github.com/nervosnetwork/rfcs/pull/80) that lists all the transaction verification rules defined by CKB protocol. //check link

After a CKB node receives a transaction, it will first verify that the transaction conforms to CKB protocol rules, examples of protocol rules: 

1) Only live cells can be used as inputs to a transaction. A cell is either 1) live (unspent) or 2) dead (spent).  After a transaction is mined and confirmed on-chain, its input cells become "dead", and the output cells become "live". This mechanism prevents double spending.

2) Sum capacity of the output cells must be lower than or equal to the input cells.

> The sum capacity difference between the input and output cells are collected as mining fees paid to the block miner. It is also possible to pay mining fees with UDTs as long as a miner is willing to accept them.




## Scripts

Apart from the rules defined by the CKB protocol, a transaction will also need to be verified according to the `lock` scripts of the transaction input cells and the `type` scripts of transaction input and output cells.  Understanding the operation of`lock` and  `type` scripts is essential to understanding state transitions and UDT or application logic on Nervos CKB.

### `lock` script
As mentioned above, the `lock` script defines the ownership of a cell. 

In a transaction, each of the `inputs` has two values: an input cell and an array of `args`. 

> Input cell is technically a pointer to a previous transaction's output cell. This is why the input cells are sometimes named `previous_output`.

In the transaction, there is also a field named `witnesses`, which is an array of arbitrary arguments to fulfill lock and type scripts' requirements to make the transaction a valid one. Witnesses are user inputs of the state transition represented by the transaction.

A typical `lock` script may contain the information of the public key of the cell owner. To unlock a cell, a user usually needs to include a signature in the `witnesses` field. During the verification process, the `lock` script will recover the signature and check if it matches the stored public key, ensuring the transaction is indeed signed by the owner of the input cells.

> The signature function and the hash function used by `lock` script (or `type` script) is not defined by CKB protocol. Developers are free to design and implement their own signature functions in the `lock` script.

### `type` script

A `type` script defines the conditions under which a cell can be transformed, or in other words, constraints on state transition. In a transaction, when a group of input cells and a group of output cells have the same `type` field value, the transformation from the input cells to the output cells must comply with rules defined by the `type` script.

For example, Alice owns a cell, with a `data` field that stores her balance of a particular UDT, its `type` script defines the rules and logic of this UDT. If Alice wants to send some of her tokens to Bob, then she would use this cell as input, and create an output cell with same `type` field value, but use Bob's `lock` script for this output cell. Alice can then assemble the transaction and send it to a CKB node. (Alice also needs to create another output cell for herself if she is not sending the entire token balance in this cell to Bob)

### Script Verification

After receiving a transaction, the CKB node will verify the `lock` script with the `args` of this input cell, as well as the `witness`, to make sure that Alice indeed owns the cell. It will then verify the `type` script of input cells and output cells in groups (inputs and outputs will the same `type` script) to make sure that the UDT transaction is valid according to the rules defined by the `type` script.

> In practice, script code is NOT included in the `type` or `lock` script directly. The actual code would be stored in another cell, referenced by the `type` and `lock` scripts through their hash. This is done by referring to these cells in the dependency cells field (`deps`) in the transaction using their `outpoint`, and placing the hash of their `data` fields in the `code_hash` field of `type` or `lock`.

During the verification process, the specified scripts are loaded and executed in a CKB-VM instance. If the instance returns a code 0 upon the end of execution, the scripts execution is succeeded. Check the [CKB-VM RFC](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm) to learn more about how it works in the CKB-VM.

To learn more about how to write `script` in practice, please refer [write script section](../dev-guide/scripts).

## Block

A block structure contains a group of transactions and a block header including metadata. It is the miner's job to pack transactions into a block and do the Proof-of-Work calculation to find a "seal" to seal the block, then broadcast it to the network. Other miners will receive this block, verify it, collect some transactions from their own transaction pool and start to mine a new block based on this received block. 

In CKB, a block also contains the information of uncle blocks in the block structure. It has the complete uncle block header as well as their proposals. Please refer to [RFC#0019-Data Structures](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#uncleblock) for more details.

### Computing 'Cycles' and Transaction Size

There are two limitations miners consider when selecting transactions to pack into a block: computing cycles and transaction size.

In CKB, the computational resources consumed by transaction verification, (specifically script execution), is measured with `cycles`. Each instruction in CKB-VM carries a [different cycle cost](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits.md#instruction-cycles). The sum cycles consumed by all scripts executed when verifying all the transactions in a block is limited by the  `MAX_BLOCK_CYCLES` value defined by the CKB protocol.

The size of a transaction is measured in bytes. The sum size of all the transactions in a block should be lower than `MAX_BLOCK_BYTES` as defined by the CKB protocol.

> On mainnet Lina, the value of `MAX_BLOCK_BYTES` is `597_000` and `MAX_BLOCK_CYCLES` is `3_500_000_000`.
