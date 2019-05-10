---
id: step5
title: 5. Constructing a Transaction
---

A transaction is an intent to transfer ownership of an asset that is broadcasted to the network in order to be validated and included in a block.

Fig A.

![data-structure](assets/ckb-structure.png)

# 5.1 Transaction Inputs

Inputs to transactions are called Cell Inputs. They are live cells that have been included in a Cell Output to a previous transaction, and have not been spent already. There can be many Cell Inputs included in a transaction. Cell Inputs reference the cell by its outpoint and index of the cell in the transaction output.

__Outpoint__

An outpoint is a reference to a cell output in a previous committed transaction.

It consists of the following:
* {hash: <hash_of_tx>,
* index: <index_of_target_cell_in_tx_outputs>}

__Transaction Index__

The transaction index of an outpoint indicates the index of the output transaction.

To aid in the creation of transaction inputs, we define a function to help us:

```
1 def gather_inputs(capacity, min_capacity)
2      raise "capacity cannot be less than #{min_capacity}" if capacity < min_capacity

3      input_capacities = 0
4      inputs = []
5      pubkeys = []
6      get_unspent_cells.each do |cell|
7        input = {
8          previous_output: cell[:out_point],
9          args: [],
10          valid_since: "0"
11        }
12        pubkeys << pubkey
13        inputs << input
14       input_capacities += cell[:capacity].to_i

15        break if input_capacities >= capacity && (input_capacities - capacity) >= min_capacity
16      end

 17     raise "Not enough capacity!" if input_capacities < capacity

18     OpenStruct.new(inputs: inputs, capacities: input_capacities, pubkeys: pubkeys)
19    end
```

* __Line  1__ - Defines a function to return unspent cells, total capacity that they occupy and the public keys for these cells

* __Line 2__ - Validator to check that the capacity provided as input is not less than a cell’s minimum capacity

* __Line 3-5__ - These variables will be used to store values that will be returning at the end of the function.

* __Line 6-11__ We retrieve all the unspent cells for this wallet and for each cell,  we create a subsequent input cell using the unspent cells outpoint <Add more explanation here on why we do this>

* __Line 12-14__ - We store the public keys, input cell and input capacities to return at the end of the function

* __Line 15-16__ - We stop looking for additional cells once the amount of input capacities is greater than or equal to the amount we want to send and greater than the minimum capacity for a cell

* __Line 17__ - Raises an error if the capacities that are included in the inputs are less than the amount of capacity we want to send in the outputs

* __Line 18__ -  Returns the Transaction Inputs, total capacities and the public keys

# 5.2 Transaction Outputs

Outputs to transactions are called Transaction Outputs. They are newly created Cells as seen in Step 4. In this example to send new native tokens to someone, we will have to create a new Cell, with new tokens, where the Lock Script can only be unlocked by the users wallet that you are sending the native tokens to

```
1 def generate_outputs(input_capacities, capacity)
2    
3   outputs = [
4        {
5          capacity: capacity,
6          data: "",
7          lock: target_lock
8        }
9      ]
10     # if input capacities greater than output, send
11      # back input remaining capacities as change
12     if input_capacities > capacity
13        outputs << {
14         capacity: input_capacities - capacity,
15          data: "",
16          lock: lock
17        }
18     end
19   end
```
__Line 1__ - Defines a function name to generate the output cell for the wallet we are sending the tokens to

__Line 3-9__ - Define an array of output cells, where each cell has a fixed capacity and the lock script of the target wallet that can unlock the newly created cell

__Lines 12__ - 17 - If there is more capacity to in the input cells than the output cells, we construct an additional output cell to send back to ourselves.

# 5.3 Generating a Transaction

We will now define a function to generate a transaction:
```
1 def generate_tx(target_lock, capacity)
2     i = gather_inputs(capacity, MIN_CELL_CAPACITY)
3      input_capacities = i.capacities
4       outputs  = generate_outputs(input_capacities, capacity);
5     {
6        version: 0,
7       deps: [api.mruby_out_point],
8        inputs: Ckb::Utils.sign_sighash_all_inputs(i.inputs, outputs, privkey),
9        outputs: outputs
10     }
11    end
```

* __Line 1__ - Defines the function name for generating a transaction it takes the lock script of the person you would like to send it to and the capacity to send.

* __Line 2__ - Calls the function you created in 5.1 to create the input cells

* __Line 3__ - Assigns the total amount of capacities in the input cells

* __Line 4__ - Calls the function you created in 5.3 to generate the output cells with the specified capacity.

* __Lines 5 - 10__ - We construct a transaction object with the following values:

	Version - The version number associated to the cell
	Deps - We include the mruby outpoint reference cell to be able to compile and execute ruby code

Signed inputs -  We sign all the inputs from line 2 and outputs of the transaction using the private key of this wallet.

Outputs - These are the included output cells from line 4
