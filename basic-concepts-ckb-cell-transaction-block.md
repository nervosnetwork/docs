# Basic Concepts of CKB/Cell/Transaction/Block
This document introduces some of the basic concepts you should know before you start to develop on CKB.

## CKB
Common Knowledge Base is a permission-less public blockchain system that supports smart contract functionality.

CKB offers storage for the most important data (or state) that needs to be stored with absolute security and immutability, such as an agreement or a contract. Any altering attempts to the data or the state on CKB are verified by Turing-Complete verification scripts, which are also stored on-chain, with absolute security. So developing application is basically to make use of the states stored on CKB as well as the scripts that are used to verify the state transitions.

[A figure for showing 3 structures]

There are primarily 3 data structures you need to know in order to develop on CKB: Cell, Transaction and Block. We have a [document](https://github.com/nervosnetwork/ckb/blob/c7fc6c9213f39780e157abfa8d5a5fa5394794a6/docs/data-structures.md) for explaining every pieces of the data.

 <!--Up to here, bitcoiners may have noticed that CKB has a very similar structure to Bitcoin. That's why we have wrote up a quick guideline for you bootstrap easily with your bitcoin background.--> 

## Cell

> More information about Cell can be found in the [whitepaper](https://github.com/nervosnetwork/rfcs/blob/afe50463bb620393b179bd8f08c263b78e366ab3/rfcs/0002-ckb/0002-ckb.md#42-cell).

Cell is the most basic element in CKB system. A cell can be used to store a state or a script. 

A state cell may contain the information data of an application or an UDT (User-Defined-Asset), such as the balance of a user's ERC20 token. A script cell may contain the logic of an application or the rules of an UDT, such as the balance of an ERC20 token can not be negative. 

> It is feasible to let a cell store both the state and the logic of an application, but this is not recommended for an application based on an layer2 system. This may result in the same problem of [why it is hard to implement EVM on Plasma](https://medium.com/@kelvinfichter/why-is-evm-on-plasma-hard-bf2d99c48df7).


In a single cell, the `capacity` parts limits the size of this cell. The `data`, `type` and `lock` are the three parts a developer needs to be considered about when designing an application. 
* `data` stores the state or the script. 
* `type` defines the type of a cell by defining how the `data` part can be modified. 
* `lock` defines the ownership of a cell. 

We will explain how to program these parts in the next section.

## Transaction

> More information about the Transaction of Nervos CKB can be found in [whitepaper](https://github.com/nervosnetwork/rfcs/blob/afe50463bb620393b179bd8f08c263b78e366ab3/rfcs/0002-ckb/0002-ckb.md#44-transaction).

Transaction is for updating the cells on-chain. Each transaction has a group of input cells (old states) and a group of output cells (new states). Transactions should be sent to the node of CKB to get it verified and confirmed on the blockchain system, so the new state can become valid on-chain.

> This is different from the transaction of Ethereum, where the transactions only have the event for updating the states stored on-chain. After received a transaction, Ethereum calculate the new state based on the transaction data and the old state on the blockchain system. 



To assemble a transaction, 4 parts need to be filled in, which are input cells, unlock scripts, output cells and the dependency cells. Now we introduce how a transaction is verified, which should help you to make sense of how these 4 fields should be filled.

After a CKB node received a transaction. It first get verified by the rules defined by the CKB system, such as the sum capacity of the output cells should be lower than the input cells.

> The sum capacity difference of the input and output cells are paid to the miner as mining fees.

> Every Cell has two conceptual status: live (unspent) or dead (spent). It is required by the transaction verification that, only the live cells can be used in a transaction as input. After a transaction is mined and confirmed on-chain, its input cells become "dead", and the output cells has the status of "live". It is this mechanism that prevents double spending from happening.

A transaction also needs to be verified by the scripts specified by the `lock` of input cells and the `type` of output cells.

As mentioned above, `lock` defines the ownership of the cell. In a transaction, there's an `unlock` script along with each of the input cells. Verification rules require that the hash of a cell's `unlock` script should match the hash stored in the `lock` filed of this cell. Then the `unlock` script will be executed and the ownership of this cell is verified.

The `type` defines how the data of a cell can be modified. In a transaction, when there's a group of input cell and a group of output cell has the same `type` field, then the change of the `data` needs to comply with the rule defined by the `type` script. 

For example, Alice has a cell, whose `data` field stores the balance of a kind of UDT, and its `type` field refers to a cell that defines the rules and logic of this UDT. If Alice wants to send some of this UDT to others, then she would use this cell as input, and make another cell that has the exact same `type` field as this one for output, then assemble the transaction and send it to the CKB node. After received the transaction, the node would first verify the `lock` and the `unlock` script of this input cell, to make sure that Alice indeed owns the cell. Then it verifies the `type` script of the output cell, which is same to the `type` script of the input cell, to make the sure the UDT transaction is valid according to the rules defined by the `type` script.

> In theory, `lock` script can replace the function of `type` script, as they both can access all the information about the transaction. Still, `type` field is still added by the design of Nervos protocol, in order to explicitly show the type of cells. This may improve the readability of the transaction data, so that it is easier for the development or doing security audits.

The scripts doesn't need to be included in the `type` directly. It can also refer to a script stored in another cell through the `reference` field. When the verification of a transaction has the dependencies of the cells derived from other transactions, these cells should be explicitly referred in the `deps` field of this transaction.

> During the verification process, the specified scripts is loaded and executed in a CKB-VM instance. Check the [CKB-VM RFC](https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0003-ckb-vm) to learn more about the CKB-VM.

For learning about how to write `script` in practice, please refer [how to write contracts on Nervos CKB](https://github.com/nervosnetwork/ckb-demo-ruby-sdk/blob/develop/docs/how-to-write-contracts.md#script-model).

## Block

Block contains a pack of transactions and a block header with some meta-data. It is the miner's job to pack transactions into a block and do the Proof-of-Work calculation to find a "seal" to seal the block, then broadcast it to the whole network. Other miners would receive this block, verify it, and start to mine a new block based on it. 

Basically, this part of knowledge is actually not necessary for the developers to be familiar with (unless it is the miner software you are looking to develop), please refer [this document](https://github.com/nervosnetwork/ckb/blob/c7fc6c9213f39780e157abfa8d5a5fa5394794a6/docs/data-structures.md#block) for the details information of the block structure.

