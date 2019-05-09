---
id: step1
title: 1. Installing the Nervos CKB SDK
---

The SDK is provided to aid in the development of generator code by providing useful APIs. The mruby system cell is provided to enable us to deploy ruby scripts to cells and also exposes select APIs that allow us to do things like view all of the data in the transaction has triggered the script execution in the first place.

# 1.1 Download the SDK

In order to begin working with the SDK we need to clone it from the master branch:

```git clone --recursive https://github.com/nervosnetwork/ckb-sdk-ruby
```

# 1.2 Installing Dependencies

	The following dependencies are required to be able to run and execute the SDK
* bitcoin-secp256k1 gem
* rbnacl gem
* Manual install of secp256k1
* libsodium library
* Mruby Contract - this is required to compile and execute ruby c

Follow this and this to install them locally.

# 1.3 Install SDK

Add this line to your application's Gemfile:

```gem 'ckb-sdk-ruby', github: 'nervosnetwork/ckb-sdk-ruby', require: 'ckb'
```

``` $ cd ckb-sdk-ruby
$ bundle
```
# 1.4 Install mruby contract

Mruby contract is required to compile and execute Ruby code in the CKB-VM. This will allow you to create, compile and execute the Scripts that we will be creating later in the tutorial.

	Using the argv file you installed before at: /path/to/argv_source_entry . We can install the mruby contract here:

```[1] pry(main)> asw = Ckb::AlwaysSuccessWallet.new(api)
[2] pry(main)> conf = asw.install_mruby_cell!("/path/to/argv_source_entry")
=> {:out_point=>{:tx_hash=>"0x20b849ffe67eb5872eca0d68fff1de193f07354ea903948ade6a3c170d89e282", :index=>0},
 :cell_hash=>"0x03dba46071a6702b39c1e626f469b4ed9460ed0ad92cf2e21456c34e1e2b04fd"}
[3] pry(main)> asw.configuration_installed?(conf)
=> false
[3] pry(main)> # Wait a while till this becomes true
[4] pry(main)> asw.configuration_installed?(conf)
=> true
```
# Optional:

Now you have the mruby contract installed in CKB, and the relevant configuration in conf structure. You can inform api object to use this configuration:

```
[1] pry(main)> api.set_and_save_default_configuration!(conf)
```

# 1.5 Successful Installation

Validate your successful installation by doing the following:

``` $ cd ckb-sdk-ruby
$ bundle
```
