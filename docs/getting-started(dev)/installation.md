---
id: installation
title: Installation
---

To get started on your journey with CKB, you first need to download and install the softwares you need. This includes [CKB binary](https://github.com/nervosnetwork/ckb) and [CKB-CLI](https://github.com/nervosnetwork/ckb-cli).

### Download and unzip/extract the download file to an easily accessible folder.

Download the binary file from the [CKB releases page on GitHub](https://github.com/nervosnetwork/ckb/releases). Please make sure the version you download must be **v0.25.2**.

Open up terminal or command line.
* On Mac:

  * Either open your Applications folder, then open Utilities and double-click on Terminal, or press Command - Spacebar or Control -Spacebar to launch Spotlight and type "Terminal," then double-click the search result and the following steps are performed on Terminal.
* On Windows:

  * Note: if you are familiar with command line operation on Windows, you can skip this step and open the cmd or Power Shell terminal instead.Download Git for windows from Git-Downloads, double-click to install it and open Git Bash in start menu and the following steps are performed on Git Bash.
* Copy and paste the commands below into the terminal / command line depending on whether you are using Mac or Windows:

* Copy and paste the commands below into the terminal / command line depending on whether you are using Mac or Windows:

**please note:** the directory and folder name must match the commands below, if not, please modify the command script correspondingly.
the $ is not part of the command line, it's a placeholder for the file stored location on your computer

**Mac**

```
cd /Users/(NAME)/Documents/ckb_v0.25.2_x86_64-apple-darwin 
./ckb --version
./ckb-cli --version
```

**Windows**
```
cd C:/ckb_v0.25.2_x86_64-pc-windows-msvc 
 ckb --version
 ckb-cli --version
```
<details>
<summary>Click here to view response</summary>
```bash
./ckb --version
./ckb-cli --version
ckb 0.25.2 (dda4ed9 2019-11-17)
ckb-cli 0.25.2 (6ca7bbb 2019-11-17)
```
</details>

If you see the response above, you have successfully installed CKB and CKB-CLI.






