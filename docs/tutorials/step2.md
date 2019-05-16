---
id: step2
title: 2. How to create a Wallet
---

Similar to Bitcoin, in Nervos CKB, a wallet is an abstraction that computes its balance by traversing over the transactions that have unspent transaction outputs and sums up the total amount of unspent cell capacities to determine its balance. It does not follow an Account Model where the balance is stored and updated in one place.

Our wallet will serve the following functions:

* Storing Nervos native tokens(CKBytes)
* Transferring native tokens
* Getting current balance

In order to fulfill this, from a development perspective, we will need to:

* Interface with __CKB__ using the __SDK__
* Create a __Wallet__ Class that abstracts functions away from  CKB
* Create some __Helper functions__ to be able to make coding easier
* __Mine native tokens__ on Testnet and transfer them to your Wallet Class
* Create a __Lock Script__ to verify Cell ownership
* __Construct new Cell Outputs__ to store the new state
* __Construct, sign and send__ new Transactions to be validated and committed to CKB blockchain
* Retrieve data about the transaction after it’s committed

# 2.1 CKB Instance

The CKB Instance enables developers to interface with CKB-VM in a statically typed manner. On the command-line you can execute the following commands:
```
[1] pry(main)> api = CKB::API.new
[2] pry(main)> api.load_default_configuration!
```
CKB-VM is the blockchain implementation using RISC-V instruction set. From the CKB Instance, you are able to instantiate the interface between your code and the blockchain and perform specific functions.

# 2.2 Create a Wallet Class

The first step of managing native tokens is to have a place to store them. We do this by creating a wallet. This wallet will be used in to interface with CKB via the SDK.

To create a wallet, open your editor and first create a __Wallet Class__ called __wallet.rb__ with an initializer that takes in 2 input arguments:

__CKB Api__ - This is a reference to the CKB API SDK that was instantiated above
private key - the private key represents the key of the user that owns’ the wallet

__Private Key__ - This is the private key that is owned by the wallet holder.



```
1  class Wallet
2    attr_reader :api
3    # privkey is a bin string
4    attr_reader :key
5
6    # @param api [CKB::API]
7    # @param key [CKB::Key]
8    def initialize(api, key)
9      @api = api
10     @key = key
11   end
12
13    def self.from_hex(api, privkey)
14      new(api, Key.new(privkey))
15    end
16  end
```

* __Line 1__ - Defines the Wallet Class
* __Line 2-3__ - Define the private variables to store the CKB API object and private key of the user who owns the wallet
* __Line 5__ - Defines the constructor for the class
* __Lines 6-8__ - Checks to see if the private key being sent is a String data type and has a length of 32, otherwise, it throws an error
* __Lines 9-10__ - assigns the api and private key for storage
* __Lines 13-15__ - assigns the api and private key for storage


Now in the command line you can execute the following. First we create a private key using the SecureRandom method and pass it into the wallet constructor along with the api we instantiated in 2.1

```
[1] pry(main)> privkey = CKB::Key.random_private_key
=> "<omitted ..>"

[2] pry(main)> my_wallet = CKB::Wallet.from_hex(api, privkey)
```

# 2.3 Retrieving the Wallet balance

Once we have the wallet object created, we can retrieve the balance of the wallet from looking at all the cells in the blockchain where the owner, designated by its public key, has unspent cells(Cell Outputs that have not been included in Cell Inputs of a subsequent transaction) .

We must go through all the blocks in the chain and save all the cells that are owned by the public key of the wallet. We say a cell is unspent if the cell is live and has not been used as part of an input to a transaction.

__Retrieving unspent cells__
```  
   1  def get_unspent_cells
   2    to = api.get_tip_block_number.to_i
   3    results = []
   4    current_from = 1
   5    while current_from <= to
   6      current_to = [current_from + 100, to].min
   7      cells = api.get_cells_by_lock_hash(lock_hash, current_from.to_s, current_to.to_s)
   8      results.concat(cells)
   9      current_from = current_to + 1
   10   end
   11  results
   12  end
```
* __Line 1__ - Defines the function to retrieve the unspent cells for a specific owner

* __Line 2__ -  [api.get_tip_block_number.to_i](Type Scripts) returns the block number with the most height on the* canonical chain, we need this to iterate over all blocks to find the cells  with the lock hash

* __Line 3__ - We will store the unspent cells in this variable

* __Lines 4__  - This is a moving index that defines the current index to start iterating through blocks

* __Lines 5__  -  We continue iterating over the blocks until we reach the highest block

* __Line 6__ - We set the local max block numbers by increasing blocks by 100 (this is arbitrary and can be changed based on performance evaluation)

* __Lines 7__ - We use the [api.get_cells_by_lock_hash](Type Scripts) method to retrieve cells between the block index range[current_from and current_to] and retrieve cells that a have a lock script hash of defined by verify_script_hash

* __Lines 8__ - For the cells returned, we add them to the list

* __Lines 9-10__ - We increment the block number to start the next iteration of block traversal

* __Lines 11-12__ -  Return the unspent cells referred to by the verify_script_hash

Now we create a convenience method to sum all the capacities from the unspent cells:

Retrieving the wallet balance
```
1 def get_balance
2     get_unspent_cells.map { |cell| cell[:capacity].to_i }.reduce(0, &:+)
3  end
```
* __Line 1__ - Defines get balance function with no parameters.

* __Line 2__ - This calls the function we created above, retrieves the capacity in each unspent cell and sums it up.

* __Lines 3__ - Ends the function.

Now in the command line you can execute the following:

```
[2] pry(main)> my_wallet.get_balance
=> 0
```
Notice that the balance of your wallet is 0. Do you know why? Of course! It’s because the owner, who has a public key, does not own any cells that are unspent on the network.

# 2.4 Helper Functions

We will create 3 helper function to allow our development to be easier moving forward:

* Retrieve the public key binary from the users private key
* Retrieve the hash of the public key binary using Blake2b hashing function
* Retrieve the Script data structure that we will use as input arguments to the Lock Script (don’t worry if this is a bit confusing right now, we will explain this in detail later:

```
1    def pubkey
2      @key.pubkey
3    end
4
5    def lock_hash
6      @lock_hash ||= lock.to_hash
7    end
8
9    # @return [CKB::Types::Script]
10    def lock
11      Types::Script.generate_lock(
12        @key.address.blake160,
13        api.system_script_code_hash
14      )
15    end
16    end
```

* __Line 1-3__  - Given the private key, we extract the public key.

* __Lines 5-7__  - Return the hash of the lock script.

* __Lines 9-15__ - This returns the Lock Script.

# 2.5 Putting things together
Your __wallet.rb__ file should now look like this:

```
1 require_relative "../ckb-sdk-ruby/lib/ckb.rb"
2 require_relative "../ckb-sdk-ruby/lib/api"
3 require_relative "../ckb-sdk-ruby/lib/always_success_wallet"
4 require_relative "../ckb-sdk-ruby/lib/utils"
5 require_relative "../ckb-sdk-ruby/lib/version"
6 require_relative "../ckb-sdk-ruby/lib/blake2b"
7
8  LOCK_SCRIPT = File.read(File.expand_path("../../../scripts/sighash_all.rb", __FILE__))
9
10  class Wallet
11    attr_reader :api
12    # privkey is a bin string
13    attr_reader :key
14
15    # @param api [CKB::API]
16    # @param key [CKB::Key]
17    def initialize(api, key)
18      @api = api
19     @key = key
20   end
21
22    def self.from_hex(api, privkey)
23      new(api, Key.new(privkey))
24    end
25
26  def get_unspent_cells
27    to = api.get_tip_block_number.to_i
28    results = []
29    current_from = 1
30    while current_from <= to
31      current_to = [current_from + 100, to].min
32      cells = api.get_cells_by_lock_hash(lock_hash, current_from.to_s, current_to.to_s)
33      results.concat(cells)
34      current_from = current_to + 1
35   end
36  results
37    end
38
39  def get_balance
40     get_unspent_cells.map { |cell| cell[:capacity].to_i }.reduce(0, &:+)
41   end
42
43    def pubkey
44      @key.pubkey
45    end
46
47    def lock_hash
48      @lock_hash ||= lock.to_hash
49    end
50
51    # @return [CKB::Types::Script]
52    def lock
53      Types::Script.generate_lock(
54        @key.address.blake160,
55        api.system_script_code_hash
56      )
57    end
58  end
```


Now that we have a basic wallet created and helper functions, we will begin to fill the wallet with some tokens.
