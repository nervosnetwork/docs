---
id: devchain
title: Dev Chain
---

Nervos CKB supports a `dev` mode that is particularly useful for development and testing. You can change the configuring parameters then run a customized development chain.

**Step 1: Download the latest ckb binary file from the CKB releases page on [GitHub](https://github.com/nervosnetwork/ckb/releases), then check if it works with:**

```
ckb --version 
ckb-cli --version
```

<details>
<summary>(click here to view response)</summary>
```bash
ckb 0.25.2 (dda4ed9 2019-11-17)
ckb-cli 0.25.2 (6ca7bbb 2019-11-17)
```
</details>

**Step 2: Initialization the development chain**

```
ckb init —chain dev
```
<details>
<summary>(click here to view response)</summary>
```bash
WARN: mining feature is disabled because of lacking the block assembler config options
Initialized CKB directory in /Users/zengbing/Documents/work/ckb_v0.25.2_x86_64-apple-darwin
create specs/dev.toml
create ckb.toml
create ckb-miner.toml
```
</details>

**Step 3: Customizing the development chain.**

* Change the epoch length by `genesis_epoch_length` in `specs/dev.toml`, unit of measurement is **block**.It is useful when you need to debug NervosDAO related functions.

```
[params]
initial_primary_epoch_reward = 1_917_808_21917808
secondary_epoch_reward = 613_698_63013698
max_block_cycles = 10_000_000_000
cellbase_maturity = 0
primary_epoch_reward_halving_interval = 8760
epoch_duration_target = 14400
genesis_epoch_length = 1000
```
* Change the mining idle interval by `value` in `ckb-miner.toml`, unit of measurement is **ms**.

```
[[miner.workers]]
worker_type = "Dummy"
delay_type = "Constant"
value = 5000
```
**Step 4: Configure `block-assembler` in `ckb.toml`for mining.**
* use `ckb-cli` to generate `lock_arg`. `lock_arg` is needed for configuring the mining feature so please backup it.
```
ckb-cli account new
```
<details>
<summary>(click here to view response)</summary>
```bash
Your new account is locked with a password. Please give a password. Do not forget this password.
Password: 
Repeat password: 
address:
  mainnet: ckb1qyqwge8mnj02una3f94akmqlyfvps5qnk4msls5c5d
  testnet: ckt1qyqwge8mnj02una3f94akmqlyfvps5qnk4msz428c3
lock_arg: e464fb9c9eae4fb1496bdb6c1f2258185013b577
lock_hash: ~
```
</details>

* open ckb.toml and configure [block_assembler] part. 
    * `lock_arg` need to attach 0x to the prefix, then fill in `args`
    * fill in message with 0x

<details>
<summary>(click here to view response)</summary>
```bash
#
#     ckb cli secp256k1-lock <pubkey> --format cmd
#
# The two commands can be combined together:
#
#     ckb init $(ckb cli secp256k1-lock <pubkey> --format cmd)
#
# secp256k1_blake160_sighash_all example:
 [block_assembler]
 code_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"
 args = "0xe464fb9c9eae4fb1496bdb6c1f2258185013b577"
 hash_type = "type"
 message = "0x"
```
</details>

**step 5：Run the customized development chain.**

```
ckb run
ckb miner
```