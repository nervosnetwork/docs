---
id: interact
title: Interacting with CKB
---

Once you have successfully started running your own CKB node and the miner program with it, you can try to interact with your node now.

Here you can learn about how to do this with RPC commands for some basic operations. Also, we have provided a simple SDK made with Ruby, which has wallet functionalities for you to interact with your node easily. 


## Use RPC Command
You can interact with your CKB node client via RPC port. Here's an example showing how to get the header information of the tip block (the latest block).

In a new shell (note that you should have the `ckb run` running):
```shell
$ curl -d '{"id": 2, "jsonrpc": "2.0", "method":"get_tip_header","params": []}' -H 'content-type:application/json' 'http://localhost:8114'
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
$ gem install bundler
```

Then clone the Ruby SDK repo:
```shell
$ git clone https://github.com/nervosnetwork/ckb-sdk-ruby && cd ckb-sdk-ruby
```

Run bundler:
```shell
$ bundle
```

### Use API

Use this command to enter an interactive console:
```shell
$ bin/console
[1] pry(main)>
```

In the console, create an API instance:
```ruby
[1] pry(main)> api = CKB::API.new
=> #<API@http://localhost:8114>
```

Then call RPC command with it:
```ruby
[2] pry(main)> api.get_tip_header
```

> In the [GitHub repo](https://github.com/nervosnetwork/ckb-sdk-ruby/blob/master/lib/ckb/api.rb), you can find all the available RPC API in this Ruby SDK.

### Create Wallet
To create a wallet, we first need to generate a private key:
``` ruby
[1] pry(main)> privkey = SecureRandom.hex(32)
=> "<omitted ..>"
``` 

> Note that your private key is identical to your tokens and assets. Losing private key or give it to others is as same as losing your tokens or give them away.

Then create an API instance:
```ruby
[2] pry(main)> api = CKB::API.new
=> #<API@http://localhost:8114>
```

Then we create a wallet with our private key:
```ruby
[3] pry(main)> wallet = CKB::Wallet.from_hex(api, privkey)
=> #<CKB::Wallet:0x00005563817dda68 @api=#<API@http://localhost:8114>, @privkey="<omitted ..>">
```

Now we have successfully created a wallet instance from the generated private key in the Ruby SDK environment. 

To make this wallet be the wallet that receives mining reward when mining CKB, we need to generate parameters for the miner configuration. Still in the Ruby console:
```ruby
[4] pry(main)> puts wallet.block_assembler_config
[block_assembler]
code_hash = "0xfe1cf5a297023a3c5282ecd9b0ca88d6736424d75fbe4dcf47a7c8b303e4d339"
args = [[56, 50, 52, 57, 53, 49, 51, 98, 51, 57, 56, 98, 99, 50, 51, 98, 98, 49, 50, 48, 99, 102, 102, 55, 99, 55, 97, 99, 51, 51, 54, 57, 102, 100, 50, 49, 52, 52, 54, 98, 55, 49, 57, 48, 97, 56, 98, 101, 52, 54, 98, 48, 97, 53, 53, 98, 57, 53, 52, 97, 52, 97, 97, 56]]
```

The output information here will be used in the next section for setting the configurations of mining CKB.

> In the [GitHub repo](https://github.com/nervosnetwork/ckb-sdk-ruby/blob/master/lib/ckb/wallet.rb), you can find all the available Wallet API in this Ruby SDK.

## More SDKs

SDKs in other languages are also available to use. Their documents will be supplemented soon. For now, please kindly refer the tests as usage examples.

* [Ruby SDK](https://github.com/nervosnetwork/ckb-sdk-ruby)
* [Javascript SDK](https://github.com/nervosnetwork/ckb-sdk-js)
* [Java SDK](https://github.com/nervosnetwork/ckb-sdk-java)
* [Swift SDK](https://github.com/nervosnetwork/ckb-sdk-swift)
