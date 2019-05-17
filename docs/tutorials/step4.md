---
id: step4
title: 4. Constructing a Cell
---

Now that we have the tokens in the wallet that we created, we can now build additional functions to transfer tokens.

## Recall

A cell is used to store binary data up to the cells capacity. A cell cannot be created if the capacity of the cells contents exceeds the allocated cells capacity as outlined in the capacity field
Occupied capacity <= Cell Capacity
A cell contains the following fields: capacity, data, type script and lock script


# 4.1 Cell Creation

The cell to transfer tokens has no data in its data field, just capacity and the lock script that will be executed when unlocking the cell:
```
1 	cell = Types::Output.new(
2          capacity: 500,
3          lock: Types::Script.generate_lock(
4            key.address.parse(target_address),
5            api.system_script_code_hash
6          )
7        )
```

* __Line 1__ - Defines the cell variable we will store the newly cell in

* __Line 2__ - We have defined this cell to be created with 500 native tokens

* __Lines 3-5__ - Generates the lock script based on the target address of who can unlock the cell and the system script code hash.

## Calculating Cell Capacity

One cell can have a maximum capacity of 1000 Kb and a minimum capacity of Y such that 0 < X < 1000, where X is the capacity of a cell being created.

In this example, we will set cell capacity = 500.

## Cell Capacities as Change

There are instances where cells are created as change to send back to the original owner because input capacities are greater than output capacities

```
1  if input_capacities > capacity
2     outputs << Types::Output.new(
3       capacity: input_capacities - capacity,
4       lock: lock
5     )
```

* __Line 1__ - Checks to see if the total input capacities in the transaction are greater than the outputs that are being sent

* __Line 2__ - If true, we create a new cell to be placed as a Cell Output

* __Lines 3__ - The capacity we send is the left over capacity not included in the outputs, so we can send it back to ourselves as change

* __Lines 4__ - We put the lock script of the owner of the wallet.

Note: if we don’t construct a cell to send the left over capacity back to yourself, all left over capacity will be sent to the miner as a transaction fee!

# 4.2 Cell Data

The data field of a cell contains binary data that you wish to store.  In this example, because we are transferring native tokens, we do not have to store any data. And it can be omitted from the call. Further tutorials will demonstrate examples of storying different types of data in this field.


* __Line 1__ - Defines binary data that is included in this cell. For transferring native tokens, this can be left empty.

# 4.3 Cell Type Script

Type Scripts  are __optional__ scripts that are created to dictate how a cell can be used and spent. In this example, we will not create a type script because it is not required to send native tokens.

# 4.4 Cell Lock Script

Lock Scripts are __mandatory__  scripts that are created to determine who can unlock a previous Transaction Output when included in a Transaction Input. In other words, a Lock Script is created at the time of the Cell being created, but it is executed and verified at the time the Cell is being spent(as part of a Cell Input in a Transaction Object)
