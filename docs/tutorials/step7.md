---
id: step7
title: 7. Scripts
---

Scripts in CKB are used to determine:

* How cells can be used [(Type Scripts)](https://github.com/nervosnetwork/ckb-sdk-ruby)
* Who has the right to spend them. [(Lock Scripts)](https://github.com/nervosnetwork/ckb-sdk-ruby)

# 7.1 Input Arguments

	Since ruby scripts need to be compiled to binary code, scripts written in ruby need to reference the cell responsible for doing this (which is a cell provided on the network called mruby_out_point). The specific ruby code you wish to execute is always given as the first argument in the script data structure that references the mruby_out_point. The next arguments are passed into the script that you passed as the first argument.

# 7.2 Available APIs
Within scripts, we have the following APIs available to us:
* ## Blake2b  
Blake 2b is a cryptographic hash function used to hash data that can be used to verify its authenticity. Blake2b computes the pre-image and final image of the hashed data
* ## Secp2561k
 Is used to sign and verify signatures using elliptical curve cryptography.
* ## CKB  
CKB is a reference to the CKB-VM and allows the interactions with computing and retrieving on-chain events

# 7.3 Transaction Scope

Each script has a reference to the current transaction scope to which it is creating or unlocking:

We retrieve the transaction by:

tx = CKB.load_tx
