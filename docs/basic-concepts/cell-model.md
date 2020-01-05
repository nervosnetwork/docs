---
id: cell-model
title: Cell Model
---

## Introduction

Nervos CKB is unique in a number of ways, but one of its most significant differentiators is a new programming model, called the "cell model", inspired by Bitcoin's UTXO model.

Though digital assets existed prior to Bitcoin (for example domain names), the UTXO was the first time a truly digital object was created. (Domain names are very much under control of people and functions of the 'real' world)

Each UTXO contains an amount of BTC, for example: a UTXO that contains 2 BTC can be split into 2 UTXO's containing 1 BTC. [For more information about Bitcoin's UTXO model, please click here.](https://www.youtube.com/watch?v=YjiE4SZtSlY)



## Introducing Cells

While a Bitcoin UTXO stores a single number (an amount of BTC), the cell model allows for storage of arbitrary data. Developers can construct stateful scripts, new digital assets and smart contracts governing interactions.

With the cell model, Nervos CKB retains the consistency and simplicity of Bitcoin while offering an open-ended programming environment for developers to construct new kinds of applications. All state is stored in cells, computation is done off-chain, and nodes verify all state transitions in the network.



## Comparing UTXO model and Cell model

**UTXO model**

* Coin (Asset) is most essential element in the system;
* Owner is an attribute of coin, each coin has an owner;
* Coins are constantly being destroyed and created

**Cell model**

* State is the most essential element in the system;
* Owner is an attribute of state, each state has an owner;
* Cells are constantly being destroyed and created

Contrasting Bitcoin and Ethereum, we can see the implications of this design decision: in Ethereum, transaction history and state history are two different dimensions. Blocks and transactions represent the events that trigger state transitions, instead of the new states themselves. In Bitcoin, transactions and state exist in a single dimension, its architecture is centered on state.



## Examining Cells

In a cell, the amount field of the UTXO is replaced by ‘capacity’ and ‘data’ fields. Both of the two fields are combined to represent ownership of storage space.

Any cell's data can be used to store assets, with the usage of lock scripts, users really own the assets saved in their cells. Only the person who can produce the parameters required by the lock script (such as a signature) can “update” the state of the cell.

A CKB transaction describes a state transition, the “update” of cell content is done through destroying of input cells and creation of output cells. Cells are immutable, once they've been created, they can't be changed. Every transaction destroys some cells and creates new cells, the newly-created cells can have new owners and store new data. 

Note: destroyed capacity must always be greater than or equal to the newly-created capacity, so that no additional capacity is created through a transaction.

**CKBytes** are the native asset of the CKB network, capacity represents space for consensus state, with a defined issuance. More information about the CKByte can be found here. (link pending)



## Cell Programming

Transaction execution involves the CKB-VM first verifying the transaction inputs through execution of the lock script, ensuring the users’ ownership of the inputs and their right to destroy the corresponding cells.

The state transition of inputs to output cells is then verified by logic contained in the type script(s) associated with the input cell(s). This script defines the rules that govern state transitions and thus imposes constraints on new state.

The CKB-VM will then execute the type script(s) and verify that the state saved in the newly-generated cell conforms to the rules predefined by the type script. All of the cells that are restricted by the same kind of type script store the same type of data. 



## Verification Networks

When forming a CKB transaction, computation is completed on the user’s side and its result (the new state) can be confirmed by user before the transaction is sent. The user broadcasts and input and output states to the blockchain and CKB-VM will then execute the type script associated with the input cells to confirm the results.

in CKB, state is a first-class citizen, states are included in transactions and blocks, and synchronized directly among nodes. Although the programming model is stateful, scripts running in CKB-VM are pure functions with no internal state, which makes CKB scripts deterministic, conducive to parallel execution, and easy to compose.

The advantages to separating state generation and verification are:

* **Deterministic transactions:** In CKB, users generate new states on the client side. They can confirm the new states before broadcasting their state transition to the network. The transaction outcome is certain: either the transaction passes on-chain verification and the new state is accepted or the transaction is deemed invalid and no state change is made to CKB.

* **Parallelism:** Given that transactions explicitly include previous states and new states, nodes can see dependencies between transactions prior to verification and can then process transactions in parallel.

* **Higher resource utilization:** Application logic is split and runs in different places, allowing the network to distribute computational workload more evenly between node and client, thus utilizing system resources more efficiently.

* **Flexible state generation:** Developers can implement generation and verification in different ways. On the client side there is the flexibility to choose the programming language that provides for better performance and fast development.



## Additional Benefits of the Cell Model

System throughput can be improved by utilizing asymmetry between state generation and verification. Moving details of computation to the client side is also valuable for algorithm protection and privacy. With the advancement of technologies such as zero-knowledge proofs, we may find efficient generation and verification solutions to general problems and CKB is a natural fit for these types of solutions.

Programs that generate new states and create new cells are referred to as 'generators'. Generators run locally on the client side (off-chain), they utilize user input and existing cells as program inputs to create new cells with new states as outputs. The inputs that generators use and the outputs they produce together form a transaction.

* **Upgradable cryptography:** Anyone can deploy useful cryptographic libraries written in languages such as C or C++ and use them in type and lock scripts. On CKB, there are no hardcoded cryptographic primitives, users are free to choose any cryptographic signature scheme they'd like to use to sign transactions.
* **Multisig:** Users can easily create M-of-N multisig or more complex lock scripts.
* **Lending:** Cell owners can lend cells for others to use while still maintaining their ownership of the cells.



## Cell/transaction specifications

A cell contains the following fields:

* **capacity:** Size limit of the cell. A cell's size is the total size of all fields contained in it.
* **data:** State data stored in the cell. It could be empty, however the total bytes used by a cell (including data), must always be less than or equal to its capacity.
* **type script:** State verification script
* **lock script:** Script that represents the ownership of the cell



A transaction contains the following fields:

* **deps:** Dependent cell set, provides read-only cells required by transaction verification. These must be references to living cells.

* **inputs:** Cell references and proofs. Cell references point to live cells that are transferred or updated in the transaction. Proofs (e.g., a signature) prove that the transaction creator has the permission to transfer or update the referenced cells.
* **outputs:** New cells created in this state transition.



CKB allows users to transfer a cell's capacity all at once, or to transfer only a fraction of a cell's capacity, which would in turn lead to more cells being created (e.g., a cell with capacity of 200 bytes can become two cells with capacity of 100 bytes each).

The **deps** and **inputs** in CKB transactions make it easier for nodes to determine transaction dependencies and perform parallel transaction processing. Different types of cells can be mixed and included in a single transaction to achieve atomic operation across types.

The set of all current (or live) cells represents the latest version of all common knowledge (current state) in CKB and the set of history (or dead) cells represents all historical versions of common knowledge (history).

