---
id: ruby-sdk
title: Use Ruby SDK
---

This document introduces how you can use Ruby SDK to interact with your CKB node.

You can learn about how to run your own node in a [previous section](../getting-started/run-node).


We have prepared [a simple SDK made with Ruby](https://github.com/nervosnetwork/ckb-sdk-ruby) tha has an interactive console to let you work with your CKB node. 

> You can also use RPC command to interact with your node. You can find a list of [RPC API commands](../api/rpc) in the API section.

## Installation

### Dependencies
For Linux user, Ubuntu v18.04 or above is required. For macOS user, please install [Homebrew](https://brew.sh/) first.

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```bash
brew install ruby autoconf automake libtool git libsodium && \
brew tap nervosnetwork/tap && \
brew install libsecp256k1 && \
sudo gem install bundler
```

<!--Linux-->
```bash
sudo apt update && \
sudo apt install git-core curl build-essential libssl-dev libreadline-dev libyaml-dev libcurl4-openssl-dev libffi-dev autoconf autogen libtool pkg-config libsodium-dev libsecp256k1-dev && \
sudo apt install ruby-full && \
sudo gem install bundler
```

<!--END_DOCUSAURUS_CODE_TABS-->

> Ruby version is needed to be above `v2.4`. 

### Install SDK
Then clone the Ruby SDK repo to anywhere you like:
```bash
git clone https://github.com/nervosnetwork/ckb-sdk-ruby && \
cd ckb-sdk-ruby
```

Checkout to `master` branch:
```bash
git checkout master
```

Run bundler to install dependencies:
```bash
bundle
```

## Use API

Use this command to enter an interactive console:
```bash
bin/console
```

<details>
<summary>(click here to view response)</summary>
```bash
$ bin/console 
[1] pry(main)> 
```
</details>

In the console, create an API instance (you need to keep the `ckb run` process alive for using API):
```ruby
api = CKB::API.new
```

<details>
<summary>(click here to view response)</summary>
```ruby
[1] pry(main)> api = CKB::API.new
=> #<API@http://localhost:8114>
```
</details>

Then call RPC command with it:
```ruby
api.get_tip_header
```

<details>
<summary>(click here to view response)</summary>
```ruby
[2] pry(main)> api.get_tip_header
=> #<CKB::Types::BlockHeader:0x00007fe5db8fcfa0
 @difficulty="0x1000",
 @epoch="0",
 @hash="0x09798b1170adcd608b65f2fbdc360b21555acde5b05295212f8b6cde9e72e880",
 @number="285",
 @parent_hash="0x12e738f2968bde032007349c543d4fa99cf8d82f354c102ab8a0a4ef6d284288",
 @proposals_hash="0x0000000000000000000000000000000000000000000000000000000000000000",
 @seal=
  #<CKB::Types::Seal:0x00007fe5db8fd068
   @nonce="4164299460367927268",
   @proof="0x140e0000191500004d1f0000ea2c0000ee2d0000362e0000f22e0000be310000993e000029470000bc5a0000fb6c0000">,
 @timestamp="1558139378253",
 @transactions_root="0x671a66d80e28103e1f19bdd631ec91feb4b8107e72341b0abe0e453e5fe961da",
 @uncles_count="0",
 @uncles_hash="0x0000000000000000000000000000000000000000000000000000000000000000",
 @version="0",
 @witnesses_root="0x0000000000000000000000000000000000000000000000000000000000000000">
```
</details>

> In the [GitHub repo](https://github.com/nervosnetwork/ckb-sdk-ruby/blob/master/lib/ckb/api.rb), you can find all the available RPC API in this Ruby SDK.

## Create Wallet
To create a wallet, we first need to generate a private key:
``` ruby
privkey = CKB::Key.random_private_key
``` 

<details>
<summary>(click here to view response)</summary>
```ruby
[1] pry(main)> privkey = CKB::Key.random_private_key
=> "0x99f5b41b3d02b74f262790f827890ab03c0b4f1e80427d0d24ceac2f0148d047"
```
</details>

You need to write down the returned privkey in order to use it later.

> Note that your private key is the only key to your tokens and assets. Losing private key or give it to others is as same as losing your tokens or give them away.

Then create an API instance:
```ruby
api = CKB::API.new
```

<details>
<summary>(click here to view response)</summary>
```ruby
[2] pry(main)> api = CKB::API.new
=> #<API@http://localhost:8114>
```
</details>


Then we create a wallet with our private key:
```ruby
wallet = CKB::Wallet.from_hex(api, privkey)
```

<details>
<summary>(click here to view response)</summary>
```ruby
[3] pry(main)> wallet = CKB::Wallet.from_hex(api, privkey)
=> #<CKB::Wallet:0x00007f932597a530
 @api=#<API@http://localhost:8114>,
 @key=
  #<CKB::Key:0x00007f932597b318
   @address=
    #<CKB::Address:0x00007f932597a580
     @prefix="ckt",
     @pubkey="0x0353051e82d41413c5e14e0ad3e24eba15c9e50c0823b920fae5c777f59265370c">,
   @privkey="0x99f5b41b3d02b74f262790f827890ab03c0b4f1e80427d0d24ceac2f0148d047",
   @pubkey="0x0353051e82d41413c5e14e0ad3e24eba15c9e50c0823b920fae5c777f59265370c">>
```
</details>

> You can also replace the `privkey` here with a string of private key to import another wallet, such as `"0x47b58afbd304cfe591719f1243dfa13a545328a5cd7572d7f166fe2a040edf29"`.

We can check the address of our wallet:
```ruby
wallet.address
```

<details>
<summary>(click here to view response)</summary>
```ruby
[4] pry(main)> wallet.address
=> "ckt1q9gry5zgavgjvc3qhnvcujj5w95we9pyuxl3rj8mhwalwg"
```
</details>

> In the [GitHub repo](https://github.com/nervosnetwork/ckb-sdk-ruby/blob/master/lib/ckb/wallet.rb), you can find all the available Wallet API in this Ruby SDK.

## Transfer CK Bytes

To transfer CK Bytes, you first need to make sure you have some balance in your wallet. If you do not have any tokens on your address, you can choose to [mine some tokens](../getting-started/mine) by following the guidance in the previous section.

In your Ruby SDK console, check your wallet balance to make sure you have some tokens for Alice:
```ruby
wallet.get_balance
```

> The CK Bytes unit used in SDK is [CK Shannon](https://github.com/nervosnetwork/rfcs/blob/8a9a7870b2d356ec1daae3b85aeb24f793056bea/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md#native-tokens): `1 CK Byte = 100_000_000 CK Shannons`.

Then, as an example here, we create another wallet:
```ruby
alice = CKB::Wallet.from_hex(api, "0x2e8640dab5d1db5cfdfa0d3bdfd26bf9ccd04967b730236a74281fbcdfd68d8b")
```

Check the balance of Alice's wallet:
```ruby
alice.get_balance
```

It should be `0`. Now let's send some tokens to Alice (and store the transaction hash):
```ruby
tx_hash = wallet.send_capacity(alice.address, 1000 * 10**8)
```

<details>
<summary>(click here to view response)</summary>
```ruby
[7] pry(main)> tx_hash = wallet.send_capacity(alice.address, 1000 * 10**8)
=> "0xb76199fe641c8d6de8a7a7d4b2adb96cdb125e180147813d2981b4b7801c21c0"
```
</details>

Then we need to wait for the miner to pack this transaction into a block. Meanwhile we can check the transaction status by:
```ruby
api.get_transaction(tx_hash)
```

<details>
<summary>(click here to view response)</summary>
```ruby
[8] pry(main)> api.get_transaction(tx_hash)
=> #<CKB::Types::TransactionWithStatus:0x00007f9325bc5ec0
 @transaction=
  #<CKB::Types::Transaction:0x00007f9325bc5fb0
   @deps=
    [#<CKB::Types::OutPoint:0x00007f9325bc6460
      @block_hash=nil,
      @cell=
       #<CKB::Types::CellOutPoint:0x00007f9325bc64d8
        @index=0,
        @tx_hash="0xf8532f2ed92aad146878dca1d5ad9840e9c803ab85d1361652500eaee09c9038">>],
   @hash="0xb76199fe641c8d6de8a7a7d4b2adb96cdb125e180147813d2981b4b7801c21c0",
   @inputs=
    [#<CKB::Types::Input:0x00007f9325bc62d0
      @args=[],
      @previous_output=
       #<CKB::Types::OutPoint:0x00007f9325bc6348
        @block_hash=nil,
        @cell=
         #<CKB::Types::CellOutPoint:0x00007f9325bc63c0
          @index=0,
          @tx_hash="0x3f53986ab711c4d118f1c86e7c87988511852cb59b770ca26afe08ec9fd21fa2">>,
      @since="0">],
   @outputs=
    [#<CKB::Types::Output:0x00007f9325bc61b8
      @capacity="100000000000",
      @data="0x",
      @lock=
       #<CKB::Types::Script:0x00007f9325bc6230
        @args=["0xe3c7c50e2c7b4521bf962c6ef68e41c48b205dc6"],
        @code_hash="0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5">,
      @out_point=nil,
      @type=nil>,
     #<CKB::Types::Output:0x00007f9325bc60c8
      @capacity="4900000000000",
      @data="0x",
      @lock=
       #<CKB::Types::Script:0x00007f9325bc6140
        @args=["0xeb11266220bcd98e4a547168ec9424e1bf11c8fb"],
        @code_hash="0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5">,
      @out_point=nil,
      @type=nil>],
   @version=0,
   @witnesses=
    [#<CKB::Types::Witness:0x00007f9325bc6028
      @data=
       ["0x0353051e82d41413c5e14e0ad3e24eba15c9e50c0823b920fae5c777f59265370c",
        "0x3045022100da2ccc121c3680bbb01f895f52c248c220715da1b033a256d10b459e4a0b3d8b022008691a1b133a11edc9431e31e95a11138fa0e639b44039817658434b69f5fa3a",
        "0x4700000000000000"]>]>,
 @tx_status=
  #<CKB::Types::TxStatus:0x00007f9325bc5f38
   @block_hash="0xc0e5aa5a77e6e1c9227c987af774bd5e951a2eda63752354599a78263253795a",
   @status="committed">>
```
</details>

After the transaction is committed, we can check Alice's balance again:
```ruby
alice.get_balance
```

<details>
<summary>(click here to view response)</summary>
```ruby
[9] pry(main)> alice.get_balance
=> 100000000000
```
</details>


Now you have learned about how to use the Ruby SDK to interact with your node. If you encountered any problems, don't worry, check out the [trouble shooting document](../references/troubleshooting).

## More SDKs

SDKs in other languages are also available to use. Their documents will be supplemented soon. For now, please kindly refer their unit tests as usage examples.

* [Ruby SDK](https://github.com/nervosnetwork/ckb-sdk-ruby)
* [Javascript SDK](https://github.com/nervosnetwork/ckb-sdk-js)
* [Java SDK](https://github.com/nervosnetwork/ckb-sdk-java)
* [Swift SDK](https://github.com/nervosnetwork/ckb-sdk-swift)
