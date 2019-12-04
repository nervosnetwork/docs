---
id: run-node
title: Run a CKB Mainnet Node
---

*Fun Fact: Running a CKB Mainnet node not only helps contribute to the robustness and decentralized nature of the Network, it also means you do not need to rely on any 3rd party to provide data from the blockchain, which increases your security.*

Running a node requires using the command line. If you have never used a command line before, you may refer to [how to use the command line tool](https://www.google.com/search?q=learn+command+line) on your computer. Although it may seem complicated at first, it is quite simple and you should be able to easily run a CKB node following the specific instructions below.

Step 1: Download the latest release CKB binary file from [CKB releases page on GitHub](https://github.com/nervosnetwork/ckb/releases)  Please make sure the version you download is **v0.25.2 or later.**

Step 2:  Unzip / extract the downloaded file to an easily accessible folder. 
For Windows we recommend `C:\ckb` 
On Mac we recommend `~/Documents`

Step 3: Open up Terminal (Mac) or command line (Windows).

* On Mac:

    * Either 1) open your Applications folder, then open Utilities and double-click on Terminal, or 2) press `Command - Spacebar` or `Control -Spacebar` to launch Spotlight and type "Terminal," then double-click the search result and the following steps are performed on Terminal.

* On Windows:

    * Please note: if you are familiar with command line operation on Windows, you can skip this step and open the `cmd` or `Power Shell` terminal instead.
    * Download Git for windows from [Git-Downloads](https://git-scm.com/downloads), double-click to install it and open Git Bash in start menu. The following steps will be performed in Git Bash.

Step 4：Copy and paste the commands below into the Terminal (Mac) / Command Line (Windows):

* Please note: the directory and folder name on your computer must match the commands below, if not, please modify the command script correspondingly. 

* Mac

```
cd /Users/(NAME)/Documents/ckb_v0.25.2_x86_64-apple-darwin
./ckb --version
./ckb-cli --version
```

* Windows

```
cd C:/ckb_v0.25.2_x86_64-pc-windows-msvc 
ckb --version 
ckb-cli --version
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ./ckb --version
$ ./ckb-cli --version

ckb 0.25.2 (dda4ed9 2019-11-17)
ckb-cli 0.25.2 (6ca7bbb 2019-11-17)
```
</details>

Step 5: To run the CKB node, copy and paste the commands below into the Terminal (Mac) / Command Line (Windows):

* Initialize the node (run only once)

```
./ckb init --chain mainnet
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ./ckb init --chain mainnet

WARN: mining feature is disabled because of lacking the block assembler config options
Initialized CKB directory in /`PATH`/ckb_v0.25.2_x86_64-apple-darwin
create ckb.toml
create ckb-miner.toml
```
</details>

* Start the node.

```
./ckb run
```

<details>
<summary>(click here to view response)</summary>
```bash
$ ./ckb run

**2019-11-28 14:22:25.464 +08:00** **main** INFO sentry sentry is disabled
**2019-11-28 14:22:25.565 +08:00** **main** INFO main Miner is disabled, edit ckb.toml to enable it
**2019-11-28 14:22:25.635 +08:00** **main** INFO ckb-chain Start: loading live cells ...
**2019-11-28 14:22:25.636 +08:00** **main** INFO ckb-chain Done: total 2 transactions.
**2019-11-28 14:22:25.654 +08:00** **main** INFO main chain genesis hash: 0x92b197aa1fba0f63633922c61c92375c9c074a93e85963554f5499fe1450d0e5
**2019-11-28 14:22:25.670 +08:00** **main** INFO ckb-network Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmbjjSgGQpvn3Fo28kvVWy9yZfgvtk9cNwRHEv646xxWYB
**2019-11-28 14:22:25.674 +08:00** **NetworkRuntime-0** INFO ckb-network p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }
**2019-11-28 14:22:25.845 +08:00** **NetworkRuntime-3** INFO ckb-sync SyncProtocol.connected peer=SessionId(1)
**2019-11-28 14:22:25.846 +08:00** **NetworkRuntime-6** INFO ckb-relay RelayProtocol(1).connected peer=SessionId(1)
**2019-11-28 14:22:26.063 +08:00** **NetworkRuntime-4** INFO ckb-sync Ignoring getheaders from peer=SessionId(1) because node is in initial block download
**2019-11-28 14:22:26.197 +08:00** **ChainService** INFO ckb-chain block: 1, hash: 0x2567f226c73b04a6cb3ef04b3bb10ab99f37850794cd9569be7de00bac4db875, epoch: 0(1/1743), total_diff: 0x3b1bb3d4c1376a, txs: 1
```
</details>
