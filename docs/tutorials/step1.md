---
id: step1
title: 1. Installing the Nervos CKB SDK
---

The __SDK__ is provided to aid in the development of generator code by providing useful APIs.

The __mruby system cell__ is provided to enable us to deploy ruby scripts to cells and also exposes select APIs that allow us to do things like view all of the data in the transaction or trigger the script execution.


# 1.1 Install Ruby

First please refer the [Ruby official guidance](https://www.ruby-lang.org/en/downloads/) for installing the latest version of Ruby.

Then, install bundler in case you have not installed it yet:

```
gem install bundler
```

# 1.2 Download the SDK

In order to begin working with the SDK we need to clone it from the master branch.

## Create a Directory for your Application
Start a new project in a folder called __nervos_demos__:

`mkdir nervos_demos`

Clone the CKB Ruby SDK in this folder:

`cd nervos_demos`

`git clone --recursive https://github.com/nervosnetwork/ckb-sdk-ruby && cd ckb-sdk-ruby`

Checkout to master branch:

```
git checkout master
```

# 1.3 Installing Dependencies

The following dependencies are required to be able to run and execute the SDK

* bitcoin-secp256k1 gem
* rbnacl gem
* Manual install of secp256k1
* libsodium library
* Mruby Contract - this is required to compile and execute ruby c

We can install them locally by following these steps:

[bitcoin-secp256k1](https://github.com/bitcoin-core/secp256k1) and [libsodium](https://download.libsodium.org/doc/) are needed as dependencies for this SDK.

To install bitcoin-secp256k1 (you will need to enter your sudo password for the last step):
```shell
git clone https://github.com/bitcoin-core/secp256k1.git && \
cd secp256k1 && \
./autogen.sh && \
./configure && \
make && \
sudo make install
```

To install libsodium, for MacOS user you can use brew (other user please refer to the [libsodium doc](https://download.libsodium.org/doc/)):
```shell
brew install libsodium
```

# 1.4 Install mruby contract

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

# 1.5 Successful Installation

Validate your successful installation by doing the following in your __nervos_demos__ directory:

``` $ cd nervos_demos
$ bundle
```



Now that we have all of our dependencies for the project set up, we will start creating a __Wallet Class__ to hold our tokens.
