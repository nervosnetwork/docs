---
id: installation
title: Installation
---

To get started on your journey with CKB, you first need to download and install the softwares you need. This includes [CKB client](https://github.com/nervosnetwork/ckb) and [CKB-CLI](https://github.com/nervosnetwork/ckb-cli).

To get the CKB client software, you can choose to download the released binary directly, or [build it from the source code](../dev-guide/compile), or [use docker](https://github.com/nervosnetwork/ckb/blob/develop/docs/run-ckb-with-docker.md).

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
curl -O -L https://github.com/nervosnetwork/ckb/releases/download/v0.21.2/ckb_v0.21.2_x86_64-apple-darwin.zip
curl -O -L https://github.com/nervosnetwork/ckb/releases/download/v0.21.2/ckb_v0.21.2_x86_64-apple-darwin.zip.asc
```
<!--Linux-->
```bash
wget https://github.com/nervosnetwork/ckb/releases/download/v0.21.2/ckb_v0.21.2_x86_64-unknown-linux-gnu.tar.gz
wget https://github.com/nervosnetwork/ckb/releases/download/v0.21.2/ckb_v0.21.2_x86_64-unknown-linux-gnu.tar.gz.asc
```
<!--CentOS-->
```bash
curl -L -O https://github.com/nervosnetwork/ckb/releases/download/v0.21.2/ckb_v0.21.2_x86_64-unknown-centos-gnu.tar.gz
curl -L -O https://github.com/nervosnetwork/ckb/releases/download/v0.21.2/ckb_v0.21.2_x86_64-unknown-centos-gnu.tar.gz.asc
```
<!--END_DOCUSAURUS_CODE_TABS-->

> If you can not download from command line, you can go to [GitHub releases page](https://github.com/nervosnetwork/ckb/releases/tag/v0.14.0) to download from your browser directly.
>
> The `.asc` files are signatures. It is wise and more secure to check out for the files [integrity](https://github.com/nervosnetwork/ckb/blob/develop/docs/integrity-check.md).

Then unzip the file:

<!--DOCUSAURUS_CODE_TABS-->
<!--macOS-->
```bash
unzip ckb_v0.21.2_x86_64-apple-darwin.zip && \
cd ckb_v0.21.2_x86_64-apple-darwin
```
<!--Linux-->
```bash
tar -xzvf ckb_v0.21.2_x86_64-unknown-linux-gnu.tar.gz && \
cd ckb_v0.21.2_x86_64-unknown-linux-gnu
```

<!--END_DOCUSAURUS_CODE_TABS-->

After it is downloaded and unzipped, you need to copy the `ckb` and `ckb-cli` binary file to a `PATH` directory. In the unzipped folder:
```bash
sudo ln -snf "$(pwd)/ckb" /usr/local/bin/ckb
sudo ln -snf "$(pwd)/ckb-cli" /usr/local/bin/ckb-cli
```

Then check if it works with:
```bash
ckb --version
ckb-cli --version
```

<!-- Todo: change the response here -->

<details>
<summary>(click here to view response)</summary>
```bash
$ ckb --version
ckb-cli --version
ckb 0.21.2 (rylai-v10 bdb6870 2019-09-26)
ckb-cli 0.21.0 (b2a9e4f 2019-09-21)
```
</details>

If you see the response above, you have successfully installed CKB and CKB-CLI.
