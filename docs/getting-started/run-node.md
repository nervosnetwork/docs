---
id: run-node
title: Run a CKB Node
---

Once you have successfully [created your own wallet](wallet), you can try to run a node now.

If you are not familiar with the concepts of node and mining yet, [here is a document](../basic-concepts/node-mining) you can learn from.

## Get CKB Client

To get the CKB client software, you can choose to download the released binary directly, or [build it from the source code](../dev-guide/compile), or [use docker](https://github.com/nervosnetwork/ckb/blob/develop/docs/run-ckb-with-docker.md).

> For Windows user, we recommend you to use Docker for running CKB node.

In this guidance we use the pre-built binary directly.

### Dependencies

CentOS users please use the `x86_64-unknown-centos-gnu` package, which also requires OpenSSL 1.0 to run:

```shell
sudo yum install openssl-libs
```

### Download

Download the binary file from the CKB releases page on GitHub:

<!-- Todo: change the release version here -->

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```bash
curl -O -L https://github.com/nervosnetwork/ckb/releases/download/v0.13.0/ckb_v0.13.0_x86_64-apple-darwin.zip
```
<!--macOS 中国镜像-->
```bash
wget https://nervos.oss-cn-beijing.aliyuncs.com/ckb_v0.13.0_x86_64-apple-darwin.zip
```
<!--Linux-->
```bash
wget https://github.com/nervosnetwork/ckb/releases/download/v0.13.0/ckb_v0.13.0_x86_64-unknown-linux-gnu.tar.gz
```
<!--Linux 中国镜像-->
```bash
wget https://nervos.oss-cn-beijing.aliyuncs.com/ckb_v0.13.0_x86_64-unknown-linux-gnu.tar.gz
```
<!--CentOS-->
```bash
curl -L -O https://github.com/nervosnetwork/ckb/releases/download/v0.13.0/ckb_v0.13.0_x86_64-unknown-centos-gnu.tar.gz
```
<!--CentOS 中国镜像-->
```bash
wget https://nervos.oss-cn-beijing.aliyuncs.com/ckb_v0.13.0_x86_64-unknown-centos-gnu.tar.gz
```
<!--END_DOCUSAURUS_CODE_TABS-->

> If you can not download from command line, you can go to [GitHub releases page](https://github.com/nervosnetwork/ckb/releases/tag/v0.13.0) to download from your browser directly.

Then unzip the file:

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```bash
unzip ckb_v0.13.0_x86_64-apple-darwin.zip && \
cd ckb_v0.13.0_x86_64-apple-darwin
```
<!--Linux-->
```bash
tar -xzvf ckb_v0.13.0_x86_64-unknown-linux-gnu.tar.gz && \
cd ckb_v0.13.0_x86_64-unknown-linux-gnu
```

<!--END_DOCUSAURUS_CODE_TABS-->

After it is downloaded and unzipped, you need to copy the `ckb` binary file to a `PATH` directory. In the unzipped folder:
```bash
sudo ln -snf "$(pwd)/ckb" /usr/local/bin/ckb
```

Then check if it works with:
```bash
ckb --version
```

<!-- Todo: change the response here -->

<details>
<summary>(click here to view response)</summary>
```bash
$ ckb --version
ckb 0.13.0 (rylai-v2 v0.13.0 2019-06-01)
```
</details>

If you see the response above, you have successfully installed CKB.

## Configurations
You can generate the default configuration files for connecting with our testnet with the following command. It will make a workshop folder called `ckb-testnet` and the generated files will be in this folder:
```bash
ckb init -C ckb-testnet --spec testnet && \
cd ckb-testnet
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ckb init -C ckb-testnet --chain testnet && \
cd ckb-testnet
Initialized CKB directory in /Users/username/code/ckb-testnet
export ckb.toml
export ckb-miner.toml
```
</details>

Then you can find a `ckb.toml` file in the generated `ckb-testnet` folder, which contains the configurations of your CKB node.

To set your miner wallet, you need to add the `[block_assembler]` you got from your [wallet creation](wallet#create-wallet) to the end of the `ckb.toml` file (Please replace the `<YOUR-CODE_HASH>` and `<YOUR-ARGS>` parts in the following command)
```bash
cat <<EOT >> ckb.toml
[block_assembler]
code_hash = "<YOUR-CODE_HASH>"
args = ["<YOUR-ARGS>"]
EOT
```


<details>
<summary>(click here to view an example)</summary>
```bash
$ cat <<EOT >> ckb.toml
[block_assembler]
code_hash = "0x9e3b3557f11b2b3532ce352bfe8017e9fd11d154c4c7f9b7aaaa1e621b539a08"
args = ["0x7e6bccda0abe748eb5dc74be0e797662ae938036"]
EOT
```
</details>

## Start a Node

Now you can start the CKB client to run a node:
```bash
ckb run
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ckb run
2019-05-18 08:06:37.246 +08:00 main INFO sentry  **Notice**: The ckb process will send stack trace to sentry on Rust panics. This is enabled by default before mainnet, which can be opted out by setting the option `dsn` to empty in the config file. The DSN is now https://48c6a88d92e246478e2d53b5917a887c@sentry.io/1422795
2019-05-18 08:06:37.257 +08:00 main INFO ckb_db::rocksdb  Initialize a new database
2019-05-18 08:06:37.385 +08:00 main INFO main  chain genesis hash: 0xaad9b82caa07f5989dfb8caa44927f0bab515a96ccaaceba82c7bea609fec205
2019-05-18 08:06:37.385 +08:00 main INFO network  Generate random key
2019-05-18 08:06:37.386 +08:00 main INFO network  write random secret key to "/Users/username/code/ckb-testnet/data/network/secret_key"
2019-05-18 08:06:37.391 +08:00 main INFO network  No peer in peer store, start seeding...
2019-05-18 08:06:37.392 +08:00 main INFO network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmSbvRYNUujyEBEpRipdREfS8cqLxCSndDAWRDAE1Hms2H
2019-05-18 08:06:37.394 +08:00 tokio-runtime-worker-0 INFO network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
2019-05-18 08:06:37.441 +08:00 tokio-runtime-worker-6 INFO network  SessionId(1) open, registry /ip4/47.111.169.36/tcp/8111/p2p/QmNQ4jky6uVqLDrPU7snqxARuNGWNLgSrTnssbRuy3ij2W success
```
</details>

Congratulations! You just started a CKB node!

If you find any error messages, don't worry, check out the [trouble shooting document](../references/troubleshooting).
