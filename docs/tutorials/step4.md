---
id: step4
title: 4. Constructing a Cell
---

Now that we have the tokens in the wallet that we created, we can now build additional functions to transfer tokens.

Recall

A cell is used to store binary data up to the cells capacity. A cell cannot be created if the capacity of the cells contents exceeds the allocated cells capacity as outlined in the capacity field
Occupied capacity <= Cell Capacity
A cell contains the following fields: capacity, data, type script and lock script


4.1 Cell Creation

The cell to transfer tokens has no data in its data field, just capacity and the lock script that will be executed when unlocking the cell:

1 	cell = {
2        capacity: 500,
3        data: “”,
4        lock: wallet.lock,
5    }

Line 1 - Defines the cell variable we will store the newly cell in

Line 2 - We have defined this cell to be created with 500 native tokens

Lines 3 - We leave the data field empty, because all we are concerned about is transferring native tokens, which do not require any data to be stored in this field.

Lines 4 - Specifies the lock script of who can unlock the cell and use it as a Cell Input in a subsequent transaction.

Calculating Cell Capacity

One cell can have a maximum capacity of 1000 Kb and a minimum capacity of Y such that 0 < X < 1000, where X is the capacity of a cell being created.

In this example, we will set capacity = 500

1 capacity = 500

Cell Capacities as Change

There are instances where cells are created as change to send back to the original owner because input capacities are greater than output capacities

1 if input_capacities > capacity
2       outputs << {
3          capacity: input_capacities - capacity,
4          data: "",
5          lock: lock
6        }

Line 1 - Checks to see if the total input capacities in the transaction are greater than the outputs that are being sent

Line 2 - If true, we create a new cell to be placed as a Cell Output

Lines 3  The capacity we send is the left over capacity not included in the outpts, so we can send it back to ourselves as change

Lines 4 - The data field is left blank as it is not required.

Lines 5 - We put the lock script of the owner of the wallet.

Note: if we don’t construct a cell to send the left over capacity back to yourself, all left over capacity will be sent to the miner as a transaction fee!
4.2 Cell Data

The data field of a cell contains binary data that you wish to store.  In this example, because we are transferring native tokens, we do not have to store any data. Further tutorials will demonstrate examples of storying different types of data in this field.

1 data = “”


Line 1 - Defines binary data that is included in this cell. For transferring native tokens, this can be left empty.
4.3 Cell Type Script

Type Scripts  are optional scripts that are created to dictate how a cell can be used and spent. In this example, we will not create a type script because it is not required to send native tokens.
4.4 Cell Lock Script

Lock Scripts are created to determine who can unlock a previous cell output when included in a Cell Input. In other words, a Lock Script is created at the time of the Cell being created, but it is executed and verified at the time the Cell is being spent(as part of a Cell Input in a Transaction Object)
