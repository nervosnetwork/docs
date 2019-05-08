---
id: step2
title: 2. How to create a wallet
---

Similar to Bitcoin, in Nervos CKB, a wallet is an abstraction that computes its balance by traversing over the transactions that have unspent transaction outputs and sums up the total amount of unspent cell capacities to determine its balance. It does not follow an Account Model where the balance is stored and updated in one place.

Our wallet will serve the following functions:

Storing Nervos native tokens(CKBytes)
The native token for Nervos CKB is CKBytes. 1 CKByte represents 1 Kb of storage on the Nervos network.
Transferring native tokens
Getting current balance
In order to fulfill this, from a development perspective, we will need to:

Interface with CKB using the SDK
Create a Wallet Class that abstracts functions away from  CKB
Create some Helper functions to be able to make coding easier
Mine native tokens on Testnet and transfer them to your Wallet Class
Create a Lock Script to verify Cell ownership
Construct new Cell Outputs to store the new state
Construct, sign and send new Transactions to be validated and committed to CKB blockchain
Retrieve data about the transaction after it’s commited

2.1 CKB Instance

The CKB Instance enables developers to interface with CKB-VM in a statically typed manner:

[1] pry(main)> api = Ckb::Api.new
[2] pry(main)> api.load_default_configuration!

CKB-VM is the blockchain implementation using RISC-V instruction set. From the CKB Instance you are able to instantiate the interface between your code and the blockchain and perform specific functions to interface with the blockchain.
2.2 Create a Wallet Instance

The first step of managing native tokens is to have a place to store them. We do this by creating a wallet. This wallet will be used in to interface with CKB via the SDK.

To create a wallet, open your editor and first create a Wallet Class with an initializer that takes in 2 input arguments:

CKB Api - This is a reference to the CKB API SDK that was instantiated above
private key - the private key represents the key of the user that owns’ the wallet

 1  class Wallet

2	attr_reader :api
3   	 attr_reader :privkey

4   # initialize wallet with private key and api object
5    def initialize(api, privkey)
6      unless privkey.instance_of?(String) && privkey.size == 32
7       raise ArgumentError, "invalid privkey!"
8      end
 9     @api = api
10     @privkey = privkey
11   end
12  end


Line 1 - Defines the Wallet Class
Line 2-3 - Define the private variables to store the CKb API object and private key of the user who owns the wallet
Lines 5 - Defines the constructor fhte class
Lines 6-8 - Checks to see if the private key being sent is a String data type and has a length of 32, otherwise, it throws an error
Lines 9-10 - assigns the api and private key for storage

Now in the command line you can execute the following. First we create a private key using the SecureRandom method and pass it into the wallet constructor along with the api we instantiated in 2.1


[1] pry(main)> privkey = SecureRandom.hex(32)
=> "<omitted ..>"

[2] pry(main)> bobs_wallet = Ckb::Wallet(api, privkey)

2.3 Retrieving the wallet balance:

Once we have the wallet object created, we can retrieve the balance of the wallet from looking at all the cells in the blockchain where the owner, designated by its public key, has unspent cells(Cell Outputs that have not been included in Cell Inputs of a subsequent transaction) .

We must go through all the blocks in the chain and save all the cells that are owned by the public key of the wallet. We say a cell is unspent if the cell is live and has not been used as part of an input to a transaction.

Retrieving unspent cells

  1  def get_unspent_cells
   2   to = api.get_tip_number
   3  results = []
   4 current_from = 1
   5   while current_from <= to
   6     current_to = [current_from + 100, to].min
   7     cells = api.get_cells_by_lock_hash(verify_script_hash, current_from, current_to)
   8    results.concat(cells)
   9     current_from = current_to + 1
   10   end
   11  results
   12  end

Line 1 - Defines the function to retrieve the unspent cells for a specific owner

Line 2 -  api.get_tip_number returns the block number with the most height on the canonical chain, we need this to iterate over all blocks to find the cells  with the lock hash

Lines 3 - We will store the unspent cells in this variable

Lines 4  - This is a moving index that defines the current index to start iterating through blocks

Lines 5  -  We continue iterating over the blocks until we reach the highest block

Lines 6 - We set the local max block numbers by increasing blocks by 100 (this is arbitrary and can be changed based on performance evaluation)

Lines 7 - We use the api.get_cells_by_lock_hash method to retrieve cells between the block index range[current_from and current_to] and retrieve ells that a have a lock script hash of defined by verify_script_hash

Lines 8 - For the cells returned, we add them to the list

Lines 9-10 - We increment the block number to start the next iteration of block traversal

Lines 11-12 -  Return the unspent cells referred to by the verify_script_hash

Now we create a convenience method to sum all the capacities from the unspent cells:

Retrieving the wallet balance

1 def get_balance
2     get_unspent_cells.map { |c| c[:capacity] }.reduce(0, &:+)
3  end

Line 1 - Defines get balance function with no parameters

Line 2 - This calls the function we created above, retrieves the capacity in each unspent cell and sums it up

Lines 3 - ends the function

Now in the command line you can execute the following:

[2] pry(main)> bob.get_balance
=> 0

Notice that the balance of bob’s wallet is 0. Do you know why? Of course! It’s because Bob, who has a public key, does not own any cells that are unspent on the network.

2.4 Helper Functions

We will create 3 helper function to allow our development to be easier moving forward:

Retrieve the public key binary from the users private key
Retrieve the hash of the public key binary using Blake2b hashing function
Retrieve the Script data structure that we will use as input arguments to the Lock Script (don’t worry if this is a bit confusing right now, we will explain this in detail later:


  1  def pubkey_bin
  2    Ckb::Utils.extract_pubkey_bin(privkey)
  3   end

  4  def pubkey_hash_bin
  5    Ckb::Blake2b.digest(Ckb::Blake2b.digest(pubkey_bin))
  6  end

  7 def verify_script_json_object
  8    {
  9      binary_hash: api.mruby_cell_hash,
  10      args: [
  11        Ckb::Utils.bin_to_hex(pubkey_hash_bin)
  12      ]
  13    }
  14  end

Line 1-3  - Given the private key listed in privkey, we extract the public key in binary format.

Lines 4-6  - Given the public key in binary format, we create a hash of this twice to represent the hash of public key

Lines 7-14 - We create and return a Script data structure that includes the hash of the mruby cell and the args to the lock script, in this case the public key hash in hexadecimal format.  

Now that we have a basic wallet created and helper functions, we will begin to fill the wallet with some tokens.
