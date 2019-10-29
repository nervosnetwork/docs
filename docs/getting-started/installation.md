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

Download the binary file from the [CKB releases page on GitHub](https://github.com/nervosnetwork/ckb/releases):

you can download from command line & download from your browser directly.

 The `.asc` files are signatures. It is wise and more secure to check out for the files [integrity](https://github.com/nervosnetwork/ckb/blob/develop/docs/integrity-check.md).

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
ckb 0.23.0 (rylai-v11 52aa02ff 2019-10-19)
ckb-cli 0.23.0 (809fa15 2019-10-19)
```
</details>

If you see the response above, you have successfully installed CKB and CKB-CLI.
