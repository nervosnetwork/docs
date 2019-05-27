---
id: interact
title: Interacting with CKB
---

Once you have successfully started [running your own CKB node](run-node), you can try to interact with your node now.

We have provided [a simple SDK made with Ruby](https://github.com/nervosnetwork/ckb-sdk-ruby) tha has an interactive console to let you work with your CKB node. 

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

Now we have successfully created a wallet instance from the generated private key in the Ruby SDK environment. If you encountered any problems, don't worry, check out the [trouble shooting document](../references/troubleshooting).

> In the [GitHub repo](https://github.com/nervosnetwork/ckb-sdk-ruby/blob/master/lib/ckb/wallet.rb), you can find all the available Wallet API in this Ruby SDK.

## More SDKs

SDKs in other languages are also available to use. Their documents will be supplemented soon. For now, please kindly refer the tests as usage examples.

* [Ruby SDK](https://github.com/nervosnetwork/ckb-sdk-ruby)
* [Javascript SDK](https://github.com/nervosnetwork/ckb-sdk-js)
* [Java SDK](https://github.com/nervosnetwork/ckb-sdk-java)
* [Swift SDK](https://github.com/nervosnetwork/ckb-sdk-swift)
