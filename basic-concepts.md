# Basic Concepts
This document introduces some of the basic concepts you should know before you start to develop on CKB.

## CKB
Common Knowledge Base is a permission-less public blockchain system that supports smart contract functionality.

CKB offers storage for the most important data (or state) that needs to be stored with absolute security and immutability, such as an agreement or a contract. Any altering attempts to the data or the state on CKB are verified by turing-complete verification scripts, which are also stored on-chain, with absolute security.

[A figure for showing 3 structures]

There are primarily 3 data structures you need to know in order to develop on CKB: Cell, Transaction and Block. 
- Cell is the basic storage element for storing states or scripts. 
- Transaction is for updating the cells (i.e. the state) on-chain. Each transaction contains both the old cells (input cells) and the new cells (output cells). The new cells can only be valid on-chain after its related transaction has been verified and confirmed on-chain.
- Block contains a pack of transactions and a block header with some meta-data. The miners of CKB pack a block and calculate for a "seal" to seal this block, then broadcast it on the whole network. Other miners receive this block, verify it, and start to mine a new block based on it.

 <!--Up to here, bitcoiners may have noticed that CKB has a very similar structure to Bitcoin. That's why we have wrote up a quick guideline for you bootstrap easily with your bitcoin background.--> 

We are going introduce these three structures in details. Also at last, we will talk about how the concept of "wallet" and "address" can fit in this system.

## Cell
By definition, Cell is the most basic element in CKB system. It stores states or scripts. Here's an example:

```json
{
    "capacity": 5000000,
    "data": "0x",
    "lock": "0xa58a960b28d6e283546e38740e80142da94f88e88d5114d8dc91312b8da4765a",
    "type": null
}
```

A Cell contains four parts:

| Name       | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `capacity` | uint64     | `capacity` is the size of the cell. When a new cell is generated, one   of the verification rule is `capacity = len(capacity)+len(data)+len(type)+len(lock)`. `capacity` value also represents the balance of CKB coin, just like the `balance` field in the Bitcoin's UTXO.                                                                                                                                                            |
| `data`     | Bytes      | `data` is for storing states or scripts. One could store arbitrary data in this part of Cell.                                                                                                                                                                                                                                                                                                                                           |
| `type`     | `Script`   | `type` defines the type of the cell. In a transaction, if an input cell and an output cell has the same `type` field, then the `data` part of these two cells is limited by the `type script` upon the transaction verification. I.e. `type` is a script that limits how the `data` field of the new cells can be changed from the old cells. `type` is required to be a data structure `script`. This field is not required in a Cell. |
| `lock`     | H256(hash) | `lock` defines the ownership of the cell, just like the `lock` field in the Bitcoin's UTXO. Whoever can provide an unlock script that has the same hash of a cell's `lock` hash can use this cell as input in an transaction (i.e. has the ownership of this cell). This is similar to the P2SH scheme in Bitcoin.                                                                                                                      |

Every Cell have two conceptual status: live (unspent) or dead (spent). It is required by the transaction verification that, only the live cells can be used in a transaction as input, and when a transaction is mined and confirmed on-chain, its input cells switch to the dead status. This mechanism contributes to the prevention of double spending.

For the reference of the data structure of `script`, please refer [how to write contracts on Nervos CKB](https://github.com/nervosnetwork/ckb-demo-ruby-sdk/blob/develop/docs/how-to-write-contracts.md#script-model). However I recommend to finish reading this document first.

More information about Cell can be found in the [whitepaper](https://github.com/nervosnetwork/rfcs/blob/afe50463bb620393b179bd8f08c263b78e366ab3/rfcs/0002-ckb/0002-ckb.md#42-cell).

## Transaction
Developing on CKB is different from Ethereum. CKB requires the state to be generated off-chain instead of on-chain. To update the on-chain state and data, a transaction contains both old state (old cells) and new state (new cells) should be sent to the blockchain, to get verified and confirmed by all the nodes.

Here's an example of the transaction of CKB:

```json
{
    "deps": [],
    "hash": "0x4707810253259258e3091934dc5b543403c10cc899859e077fe26067f8d52dc0",
    "inputs": [
      {
        "previous_output": {
          "hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "index": 4294967295
        },
        "unlock": {
          "args": [],
          "binary": "0x0d00000000000000",
          "reference": null,
          "signed_args": [],
          "version": 0
        }
      }
    ],
    "outputs": [
      {
        "capacity": 5000000,
        "data": "0x",
        "lock": "0xa58a960b28d6e283546e38740e80142da94f88e88d5114d8dc91312b8da4765a",
        "type": null
      }
    ],
    "version": 0
}
```

A transaction contains 5 parts:

| Name                         | Type              | Description                                                                                                                                                                                                                                                                              |
|------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `version`                    | uint32            | The version of the transaction. It‘s used to distinguish transactions when there's a fork happened to the blockchain system.                                                                                                                                                             |
| `deps`                       | array of `Cell`   | A list of cells that are dependencies of this transaction. Only live cells can be listed here. The cells listed are read-only.                                                                                                                                                           |
| `inputs` / `previous_output` | array of `Cell`   | Input cells are in fact the output of previous transactions, hence they are noted as `previous_output`. These cells are referred through `outpoint`, which contains the transaction `hash` of the previous transaction, as well as this cell's `index` in its transaction's output list. |
| `inputs` / `unlock`          | array of `script` | The script for unlocking its related input cell (i.e. `previous_output`). As mentioned above, please refer [how to write contracts on Nervos CKB](https://github.com/nervosnetwork/ckb-demo-ruby-sdk/blob/develop/docs/how-to-write-contracts.md#script-model) this part of information. |
| `outputs`                    | array of `Cell`   | The output cells, i.e. the newly generated cells. These are the cells may be used as inputs for other transactions.                                                                                                                                                                      |

As you may noticed, in a transaction data structure, cells are not shown explicitly. They are represented by `outputs` and `previous_outputs`. Especially when they are in the `previous_outputs` part, they are referred through an `outpoint`: transaction `hash` and `index`.

More information about the Transaction of Nervos CKB can be found in [whitepaper](https://github.com/nervosnetwork/rfcs/blob/afe50463bb620393b179bd8f08c263b78e366ab3/rfcs/0002-ckb/0002-ckb.md#44-transaction).

## Block
The block structure of Nervos CKB is similar to all the other blockchain systems, except that for the purpose of implementing CKB's consensus algorithm NC-Max (which will be introduced later), the block structure of CKB has two differences:
* Transactions are separated into two groups: `commit_transactions` and `proposal_transactions`
* The information of uncle blocks (`uncles`) are also included in the block as well

Here's an example of the transaction of CKB:
```json
{
"commit_transactions": [
    {
    "deps": [],
    "hash": "0xabeb06aea75b59ec316db9d21243ee3f0b0ad0723e50f57761cef7e07974b9b5",
    "inputs": [
        {
        "previous_output": {
            "hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "index": 4294967295
        },
        "unlock": {
            "args": [],
            "binary": "0x0b00000000000000",
            "reference": null,
            "signed_args": [],
            "version": 0
        }
        }
    ],
    "outputs": [
        {
        "capacity": 5000000,
        "data": "0x",
        "lock": "0xa58a960b28d6e283546e38740e80142da94f88e88d5114d8dc91312b8da4765a",
        "type": null
        }
    ],
    "version": 0
    }
],
"header": {
    "cellbase_id": "0xabeb06aea75b59ec316db9d21243ee3f0b0ad0723e50f57761cef7e07974b9b5",
    "difficulty": "0x100",
    "hash": "0xcddd882eff5edd2f7db25074cbbdc1d21cd698f60d6fb39412ef91d19eb900e8",
    "number": 11,
    "parent_hash": "0x255f65bf9dc00bcd9f9b8be8624be222cba16b51366208a8267f1925eb40e7e4",
    "seal": {
        "nonce": 503529102265201399,
        "proof": "0x"
    },
    "timestamp": 1551155125985,
    "txs_commit": "0xabeb06aea75b59ec316db9d21243ee3f0b0ad0723e50f57761cef7e07974b9b5",
    "txs_proposal": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "uncles_count": 1,
    "uncles_hash": "0x99cf8710e59303bfac236b57256fcea2c58192f2c9c39d1ea4c19cbcf88b4952",
    "version": 0
},
"proposal_transactions": [],
"uncles": [
    {
    "cellbase": {
        ...
    },
    "header": {
        ...
    },
    "proposal_transactions": []
    }
]
}
```

A block contains 4 parts:

| Name                    | Type                   | Description |
| ----------------------- | ---------------------- | ----------- |
| `header`                | `struct`               |             |
| `commit_trasactions`    | array of `transaction` |             |
| `proposal_transactions` | array of `transaction` |             |
| `uncles`                | `struct`               |             |


A block header contains 12 fields:
| Name             | Type       | Description |
| ---------------- | ---------- | ----------- |
| `cellbase_id`    | H256(hash) |             |
| `difficulty`     | Bytes      |             |
| `hash`           | H256(hash) |             |
| `number`         | uint64     |             |
| `parent_hash`    | H256(hash) |             |
| `seal` / `nonce` | uint64     |             |
| `seal` / `proof` | Bytes      |             |
| `timestamp`      | uint64     |             |
| `txs_commit`     | H256(hash) |             |
| `txs_proposal`   | H256(hash) |             |
| `uncles_count`   | uint32     |             |
| `uncles_hash`    | H256(hash) |             |
| `version`        | uint32     |             |


The `uncles` part of a block contains 3 parts:
| Name                    | Type                   | Description |
| ----------------------- | ---------------------- | ----------- |
| `header`                | [struct]               |             |
| `commit_trasactions`    | array of [transaction] |             |
| `proposal_transactions` | array of [transaction] |             |
| `uncles`                | [struct]               |             |



## Wallet & Address



To do:

* remind to run a node and use rpc to get the datas