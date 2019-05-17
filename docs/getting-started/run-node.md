---
id: run-node
title: Run a CKB Node
---

To get started on your journey with CKB, the first thing you can try is to run a CKB node yourself. 

If you are not familiar with the concepts of node and mining yet, [here is a document](../basic-concepts/node-mining) you can learn from.

## Get CKB Client

To get the CKB client software, you can choose to download the released binary directly, or build it from the source code.

### Use Docker
You can also use Docker to run your CKB node. For the detailed guidance, please refer to [this document on GitHub](https://github.com/nervosnetwork/ckb/blob/develop/docs/run-ckb-with-docker.md). 

> For Windows user, we recommend you to use Docker for running CKB node.

### Download from Release

#### Dependencies

For Linux user (not necessary for MacOS user), you need to install `libssl` dynamic libraries before using the released binary.

```shell
sudo apt-get install -y libssl1.0.0
```

#### Download

Download the binary file from the [CKB releases page on GitHub](https://github.com/nervosnetwork/ckb/releases):

<!-- Todo: change the release version here -->

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```shell
wget https://github.com/nervosnetwork/ckb/releases/download/rylai30/ckb_rylai30_darwin_amd64.zip
```
<!--Linux-->
```shell
wget https://github.com/nervosnetwork/ckb/releases/download/rylai30/ckb_rylai30_linux_amd64.tar.gz
```

<!--END_DOCUSAURUS_CODE_TABS-->

> You can also find nightly build versions from the releases of the [ckb-builds repo](https://github.com/ckb-builds/ckb-builds/releases)

Then uncompress the file:

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```shell
unzip ckb_rylai30_darwin_amd64.zip && \
cd ckb_rylai30_darwin_amd64
```
<!--Linux-->
```shell
tar -xzvf ckb_rylai30_linux_amd64.tar.gz && \
cd ckb_rylai30_linux_amd64
```

<!--END_DOCUSAURUS_CODE_TABS-->

After it is downloaded and unzipped, you need to copy the `ckb` binary file to a `PATH` directory. In the unzipped folder:
```shell
sudo ln -snf "$(pwd)/ckb" /usr/local/bin/ckb
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

If you see the response above, you have successfully installed CKB. You can try to [start a CKB node](#run-ckb) now.

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
Here we build from the source code on `master` branch, which is the latest release version. For other versions and branches, please check the [CKB repo](https://github.com/nervosnetwork/ckb) for more information.

Get the source code:

```shell
git clone https://github.com/nervosnetwork/ckb.git && \
cd ckb && \
git checkout master
```

Build it:
```shell
make build
```

You will find the generated executable binary in `target/release/ckb` folder.

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
Here you will learn about how to start a CKB node.

### Configurations
You can generate the default configuration files the following command. It will make a workshop folder called `ckb-dev` and generate default configuration files in it.
```shell
ckb init -C ckb-dev && \
cd ckb-dev
```

<details>
<summary>(click here to view response)</summary>
```shell
$ ckb init -C ckb-dev && \
cd ckb-dev
Initialized CKB directory in /Users/username/code/ckb-dev
export ckb.toml
export ckb-miner.toml
```
</details>

If you want to start a node that can connect to the testnet, you can specify the `testnet` paramter:
```shell
ckb init -C ckb-testnet --spec testnet && \
cd ckb-testnet
```

<details>
<summary>(click here to view response)</summary>
```shell
$ ckb init -C ckb-testnet --spec testnet && \ 
cd ckb-testnet
Initialized CKB directory in /Users/username/code/ckb-testnet
export ckb.toml
export ckb-miner.toml
```
</details>

In `ckb.toml`, you will find the information of bootnodes. These nodes will serve as the seed nodes to help you discover other CKB nodes in the CKB network.

> On github there is document that talks about [how to configure CKB](https://github.com/nervosnetwork/ckb/blob/develop/docs/configure.md) in details.

### Start a Node

Now you can start the CKB client to run a node:
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
2019-05-13 17:55:16.205 +08:00 main INFO network  write random secret key to "/Users/username/Desktop/ckb-dev/data/network/secret_key"
2019-05-13 17:55:16.219 +08:00 main INFO network  No peer in peer store, start seeding...
2019-05-13 17:55:16.221 +08:00 main INFO network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmRtEZwdSRPpTJHf4gPmwR8YobzpxwZDH4UtVPNJftwynh
2019-05-13 17:55:16.223 +08:00 tokio-runtime-worker-0 INFO network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
```
</details>

Congratulations! You just started a CKB node!

If you generated a configuration file with `testnet` parameter, you should see your node synchronizing blocks now.

If you find any error messages, don't worry, check out the [trouble shooting document](../references/troubleshooting).
