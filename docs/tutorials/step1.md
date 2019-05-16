---
id: step1
title: 1. Installing the Nervos CKB SDK
---

The __SDK__ is provided to aid in the development of generator code by providing useful APIs.

The __mruby system cell__ is provided to enable us to deploy ruby scripts to cells and also exposes select APIs that allow us to do things like view all of the data in the transaction or trigger the script execution.

# 1.1 Download the SDK

In order to begin working with the SDK we need to clone it from the master branch.

## Create a Directory for your Application
Start a new project in a folder called __nervos_demos__:

`mkdir nervos_demos`

Clone the CKB Ruby SDK in this folder:

`cd nervos_demos`
`git clone --recursive https://github.com/nervosnetwork/ckb-sdk-ruby`

# 1.2 Installing Dependencies

The following dependencies are required to be able to run and execute the SDK

* bitcoin-secp256k1 gem
* rbnacl gem
* Manual install of secp256k1
* libsodium library
* Mruby Contract - this is required to compile and execute ruby c

We will install them locally in the next couple steps.

# 1.3 Create Gem File to manage Dependencies


Create a Gemfile and add the following dependencies to the Gemfile to be able to build the project.

```
ruby "2.3.7"
source 'https://rubygems.org'

#gem 'ckb-sdk-ruby', github: 'nervosnetwork/ckb-sdk-ruby', require: 'ckb'
gem 'minitest'
#gem 'pry'
gem 'dotenv'

# Until ckb-sdk gem is ready:

#gem "bundler", "~> 2.0"
gem "rake", "~> 10.0"
gem "rspec", "~> 3.0"
gem "rubocop", "~> 0.66.0"
gem "pry", "~> 0.12.2"

gem "rbnacl", "~> 6.0", ">= 6.0.1"
gem "bitcoin-secp256k1", "~> 0.5.0"
```

# 1.4 Install SDK

Add this line to your application's Gemfile:

`gem 'ckb-sdk-ruby', github: 'nervosnetwork/ckb-sdk-ruby', require: 'ckb'`


# 1.5 Install mruby contract

Mruby contract is required to compile and execute Ruby code in the CKB-VM. This will allow you to create, compile and execute the Scripts that we will be creating later in the tutorial.

Using the argv file you installed before at: /path/to/argv_source_entry . We can install the mruby contract [here](https://github.com/nervosnetwork/mruby-contracts):

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

# 1.6 Successful Installation

Validate your successful installation by doing the following in your __nervos_demos__ directory:

``` $ cd nervos_demos
$ bundle
```



Now that we have all of our dependencies for the project set up, we will start creating a __Wallet Class__ to hold our tokens.
