---
id: run-node
title: Run a CKB Node
---

To get started on your journey with CKB, the first thing you can try is to run a CKB node yourself. 

If you are not familiar with the concepts of node and mining yet, [here is a document](../basic-concepts/node-mining) you can learn from.

> CKB testnet will be launched very soon. When it does, your node can join the testnet to be a part of it, or you can just interact with one of the existing testnet nodes without running your own node.

## Get CKB

To get the CKB client software, you can choose to download the released binary directly, or build it from the source code.

### Use Docker
You can use Docker to run your CKB node. For the detailed guidance, please refer to [this document on GitHub](https://github.com/nervosnetwork/ckb/blob/develop/docs/run-ckb-with-docker.md). 

> For Windows user, we recommend you to use Docker for running CKB node.

### Download from Release

#### Dependencies

For Linux user (not necessary for MacOS user), you need to install `libssl` dynamic libraries before using the released binary.

```shell
sudo apt-get install -y libssl1.0.0
```

#### Download

<!-- Todo: change the version here -->

 Go to the [CKB releases page on GitHub](https://github.com/nervosnetwork/ckb/releases). Then choose the file to download according to your operating system. (For MacOS user, please choose `darwin`) You can also find nightly build versions from the releases of the [ckb-builds repo](https://github.com/ckb-builds/ckb-builds/releases).

After it is downloaded and unzipped, you need to copy the `ckb` binary file to a `PATH` directory. In the unzipped folder:
```shell
ln -snf "$(pwd)/ckb" /usr/local/bin/ckb
```

Then check if it works with:
```shell
ckb --version
```

<!-- Todo: change the response here -->

<details>
<summary>(click here to view response)</summary>
```shell
$ ckb --version
ckb 0.12.0-pre (rylai17 2019-05-07)
```
</details>

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
git clone https://github.com/nervosnetwork/ckb.git && \
cd ckb && \
git checkout master
```

Install Rust (currently, CKB is mainly tested with version `stable-1.34.2`):
```shell
rustup install 1.34.2
```

Build it:
```shell
make build
```

You will find the built executable binary in `target/release/ckb` folder.

Then you need to move it to a `PATH` directory:
```shell
sudo ln -snf "$(pwd)/target/release/ckb" /usr/local/bin/ckb
```

Then check if it works with:
```shell
ckb --version
```

<!-- Todo: change the response here -->

<details>
<summary>(click here to view response)</summary>
```shell
$ ckb --version
ckb 0.12.0-pre (rylai17 2019-05-07)
```
</details>

## Run CKB
First, you need to have a workshop folder to run CKB (you can create this folder anywhere you like. It does not need to be in the cloned folder.):
```shell
mkdir ckb-dev && \
cd ckb-dev
```

Then generate default configuration files:
```shell
ckb init
```

<details>
<summary>(click here to view response)</summary>
```shell
$ ckb init
Initialized CKB directory in /Users/haichaozhu/Desktop/ckb-dev
export ckb.toml
export ckb-miner.toml
```
</details>

> See here for more details about how to [configure CKB](https://github.com/nervosnetwork/ckb/blob/develop/docs/configure.md).

Then you can start the node:
```shell
ckb run
```

<details>
<summary>(click here to view response)</summary>
```shell
$ ckb run
2019-05-13 17:55:16.057 +08:00 main INFO sentry  sentry is disabled
2019-05-13 17:55:16.068 +08:00 main INFO ckb_db::rocksdb  Initialize a new database
2019-05-13 17:55:16.204 +08:00 main INFO main  chain genesis hash: 0x6448adcb403733f7976576eeffcdfa6929cd7af07d25fb925e0d9236dcc0c6f5
2019-05-13 17:55:16.205 +08:00 main INFO network  Generate random key
2019-05-13 17:55:16.205 +08:00 main INFO network  write random secret key to "/Users/haichaozhu/Desktop/ckb-dev/data/network/secret_key"
2019-05-13 17:55:16.219 +08:00 main INFO network  No peer in peer store, start seeding...
2019-05-13 17:55:16.221 +08:00 main INFO network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmRtEZwdSRPpTJHf4gPmwR8YobzpxwZDH4UtVPNJftwynh
2019-05-13 17:55:16.223 +08:00 tokio-runtime-worker-0 INFO network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
```
</details>

Congratulations! You just started a CKB node!

If you find any error messages, don't worry, check out the [trouble shooting document](../references/troubleshooting).
