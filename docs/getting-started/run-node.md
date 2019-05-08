---
id: run-node
title: Run a CKB Node
---

To get started on your journey with CKB, the first thing you can try is to run a CKB node yourself. 

If you are not familiar with the concepts of node and mining yet, [here is a document](../basic-concepts/node-mining) you can learn from.

> CKB testnet will be launched very soon. When it does, your node can join the testnet to be a part of it, or you can just interact with one of the existing testnet nodes without running your own node.

## Get CKB

To get the CKB client software, you can choose to download the released binary directly, or build it from the source code, or [run it in a docker](https://github.com/nervosnetwork/ckb/blob/develop/docs/run-ckb-with-docker.md).

### Download from Release

#### Dependencies

For Linux user, you need to install `libssl` dynamic libraries before using the released binary.

```shell
sudo apt-get install -y libssl1.0.0
```

#### Download

 You can find the CKB releases on [GitHub Releases](https://github.com/nervosnetwork/ckb/releases). Just choose the file to download according to your operating system. (You can also find nightly build versions from the releases of the [ckb-builds repo](https://github.com/ckb-builds/ckb-builds/releases))

After it is downloaded, you need to move it to a `PATH` directory:
```shell
ln -snf "$(pwd)/ckb" /usr/local/bin/ckb
```

Then check if it works with:
```shell
ckb --version
```

### Compile from Source

#### Dependencies
CKB is developed with Rust. To get Rust and its tools, please refer to the [rustup website](https://www.rustup.rs/) for how to install rustup.

Then install dependencies with the following command:

<!--DOCUSAURUS_CODE_TABS-->
<!--Ubuntu and Debian-->
```shell
sudo apt-get install -y git gcc libc6-dev pkg-config libssl-dev libclang-dev clang
```
<!--Arch Linux-->
```shell
sudo pacman -Sy git gcc pkgconf clang
```

<!--macOS-->
```shell
brew install autoconf libtool
```
<!--END_DOCUSAURUS_CODE_TABS-->


#### Build
Here we build from the source code on `Master` branch, which is the latest release version. For other versions and branches, please refer [CKB repo](https://github.com/nervosnetwork/ckb) for more information.

Get the source code:

```shell
git clone https://github.com/nervosnetwork/ckb.git
cd ckb
git checkout master
```

Install Rust (currently, CKB is mainly tested with version `stable-1.34.1`):
```shell
rustup override set 1.34.1
```

Build it:
```shell
Make Build
```

You will find the built executable binary in `target/release/ckb` folder.

Then you need to move it to a `PATH` directory:
```shell
ln -snf "$(pwd)/ckb" /usr/local/bin/ckb
```

Then check if it works with:
```shell
ckb --version
```
### Use Docker
You can also use Docker to run your CKB node. For the detailed guidance, please refer to [this document on GitHub](https://github.com/nervosnetwork/ckb/blob/develop/docs/run-ckb-with-docker.md).

## Run CKB
First, you need to have a workshop folder to run CKB:
```shell
mkdir ckb-dev
cd ckb-dev
```

Then generate default configuration files:
```shell
ckb init
```

> See here for more details about how to [configure CKB](https://github.com/nervosnetwork/ckb/blob/develop/docs/configure.md).

Then you can start the node:
```shell
ckb run
```

Now, you should be seeing logs like:
```shell
2019-05-02 12:13:14.552 +08:00 main INFO sentry  sentry is disabled
2019-05-02 12:13:14.554 +08:00 main INFO ckb_db::rocksdb  Initialize a new database
2019-05-02 12:13:14.650 +08:00 main INFO main  chain genesis hash: 0xabe655029aa05408ff0ae846ecc32b40b9edf703440627bcaeda3626cf07f8db
2019-05-02 12:13:14.650 +08:00 main INFO network  Generate random key
2019-05-02 12:13:14.651 +08:00 main INFO network  write random secret key to "/Users/username/ckb-dev/data/network/secret_key"
2019-05-02 12:13:14.657 +08:00 main INFO network  No peer in peer store, start seeding...
2019-05-02 12:13:14.658 +08:00 main INFO network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmfABTZ46Ffdf6n5K9J1bVAktaKbQS5mUa5Cg4ZHGJBiMK
2019-05-02 12:13:14.659 +08:00 tokio-runtime-worker-4 INFO network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
```

If you see the same response above, congratulations! You just started a CKB node!

If not, don't worry, check out the [trouble shooting document](../references/troubleshooting).