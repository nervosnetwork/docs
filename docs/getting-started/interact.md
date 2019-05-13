---
id: interact
title: Interacting with CKB
---

Once you have successfully started [running your own CKB node](run-node) and the miner program with it, you can try to interact with your node now.

Here you can learn about how to do this with RPC commands for some basic operations. Also, we have provided a simple SDK made with Ruby, which has wallet functionalities for you to interact with your node easily. 


## Use RPC Command
You can interact with your CKB node client via RPC port. Here's an example showing how to get the header information of the tip block (the latest block).

In a new shell (note that you should have the `ckb run` running):
```shell
curl -d '{"id": 2, "jsonrpc": "2.0", "method":"get_tip_header","params": []}' -H 'content-type:application/json' 'http://localhost:8114'
```

The response message will be:
```shell
{"jsonrpc":"2.0","result":{"difficulty":"0x100","hash":"0xabe655029aa05408ff0ae846ecc32b40b9edf703440627bcaeda3626cf07f8db","number":"0","parent_hash":"0x0000000000000000000000000000000000000000000000000000000000000000","proposals_root":"0x0000000000000000000000000000000000000000000000000000000000000000","seal":{"nonce":"0","proof":"0x00"},"timestamp":"0","transactions_root":"0x013d8bd8c65e22655cc907c146c8ca8eaa2cfef46bf5b5f08dc145d72bf65a60","uncles_count":0,"uncles_hash":"0x0000000000000000000000000000000000000000000000000000000000000000","version":0,"witnesses_root":"0x0000000000000000000000000000000000000000000000000000000000000000"},"id":1}
```

> The RPC port can be set in your [node configuration](https://github.com/nervosnetwork/ckb/blob/develop/docs/configure.md) file. By default, it uses port 8114.

You can find all the RPC commands in the [RPC API document](../api/rpc).


## Use Ruby SDK

The current version of CKB client implementation does not have a very comprehensive Command Line Interface (CLI) ready to use. However, there's a simple Ruby SDK that can help you to work with your node.

### Installation 
First please refer the [Ruby official guidance](https://www.ruby-lang.org/en/downloads/) for installing the latest version of Ruby.

Install bundler in case you have not installed it yet:
```shell
gem install bundler
```

Then clone the Ruby SDK repo:
```shell
git clone https://github.com/nervosnetwork/ckb-sdk-ruby && cd ckb-sdk-ruby
```

Checkout to `master` branch:
```shell
git checkout master
```

Run bundler:
```shell
bundle
```

### Use API

Use this command to enter an interactive console:
```shell
bin/console
```

In the console, create an API instance:
```ruby
api = CKB::API.new
```

Then call RPC command with it:
```ruby
api.get_tip_header
```

> In the [GitHub repo](https://github.com/nervosnetwork/ckb-sdk-ruby/blob/master/lib/ckb/api.rb), you can find all the available RPC API in this Ruby SDK.

### Create Wallet
To create a wallet, we first need to generate a private key:
``` ruby
privkey = "0x" + SecureRandom.hex(32)
``` 

It will give you a private key like this:
```ruby
=> "0x9379dda1d4a8791555b3460b1c9033982563c8563fc6a69ce28f67fa2ca77e14"
```

You need to write down the returned privkey in order to use it later.

> Note that your private key is the only key to your tokens and assets. Losing private key or give it to others is as same as losing your tokens or give them away.

Then create an API instance:
```ruby
api = CKB::API.new
```

Then we create a wallet with our private key:
```ruby
wallet = CKB::Wallet.from_hex(api, privkey)
```

You should see response message like this:
```ruby
=> #<CKB::Wallet:0x00007fce84a9a060
 @api=#<CKB::API:0x3fe74250b4a0>,
 @key=
  #<CKB::Key:0x00007fce84a9a858
   @address=
    #<CKB::Address:0x00007fce84a9a088
     @prefix="ckt",
     @pubkey=
      "0x03ed9721742f278a2bba09a9846ced887d93ca0241a23b309957917a11a8f11098">,
   @privkey=
    "0x92d583ca62524c1c48bb4c33892cf9c704b1c5013c4a7b6254218052e62daf52",
   @pubkey=
    "0x03ed9721742f278a2bba09a9846ced887d93ca0241a23b309957917a11a8f11098">>
```

We can check the address of our wallet:
```ruby
wallet.address
```

Response should be like:
```ruby
=> "ckt1q9gry5zgq657y04q7yyf4whx93vtrufvhl6nxq087eg9kg"
```

Now we have successfully created a wallet instance from the generated private key in the Ruby SDK environment. If you encountered any problems, don't worry, check out the [trouble shooting document](../references/troubleshooting).

> In the [GitHub repo](https://github.com/nervosnetwork/ckb-sdk-ruby/blob/master/lib/ckb/wallet.rb), you can find all the available Wallet API in this Ruby SDK.

## More SDKs

SDKs in other languages are also available to use. Their documents will be supplemented soon. For now, please kindly refer the tests as usage examples.

* [Ruby SDK](https://github.com/nervosnetwork/ckb-sdk-ruby)
* [Javascript SDK](https://github.com/nervosnetwork/ckb-sdk-js)
* [Java SDK](https://github.com/nervosnetwork/ckb-sdk-java)
* [Swift SDK](https://github.com/nervosnetwork/ckb-sdk-swift)
