---
id: compile
title: Compile CKB from Source
---

This document introduces how to compile and build the CKB from the source code.

## Install Rust
CKB is developed with Rust. To get Rust and its tools, please refer to the [rustup website](https://www.rustup.rs/) for how to install rustup.

## Dependencies
Install dependencies with the following command:

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```bash
brew install autoconf libtool
```

<!--Ubuntu and Debian-->
```bash
sudo apt-get install -y git gcc libc6-dev pkg-config libssl-dev libclang-dev clang
```

<!--Arch Linux-->
```bash
sudo pacman -Sy git gcc pkgconf clang
```

<!--END_DOCUSAURUS_CODE_TABS-->

> For CentOS user, here's a [guidance](https://github.com/nervosnetwork/ckb/issues/626) for you.

## Build
Here we build from the source code on `master` branch, which is the latest release version. For other versions and branches, please check the [CKB repo](https://github.com/nervosnetwork/ckb) for more information.

Get the source code:

```bash
git clone https://github.com/nervosnetwork/ckb.git && \
cd ckb && \
git checkout master
```

Build it:
```bash
make build
```

You will find the generated executable binary in `target/release/ckb` folder.

Then you need to move it to a `PATH` directory:
```bash
sudo ln -snf "$(pwd)/target/release/ckb" /usr/local/bin/ckb
```

Then check if it works with:
```bash
ckb --version
```

<!-- Todo: change the response here -->

<details>
<summary>(click here to view response)</summary>
```bash
ckb --version
ckb 0.13.0 (rylai-v2 v0.13.0 2019-06-01)
```
</details>