---
id: design-philosophy
title: Design Philosophy of Nervos CKB
---

# Design Philosophy of Nervos CKB

This article contains links to articles and videos to provide background information to provide context for the design decisions of Nervos CKB. These resources will provide the necessary knowledge to understand these decisions.



## Proof of Work vs. Proof of Stake Cryptoeconomics

[Proof of Work Explained](https://www.youtube.com/watch?v=EWfGzeF3Xmw)

[Proof of Work vs. Proof of Stake (Explanations of each & Advantages of PoW)](https://medium.com/@hydrominer/proof-of-work-vs-proof-of-stake-7b3afe24f0cc)

[Proof of Work vs. Proof of Stake (Advantages/Criticisms of each)](https://edge.app/blog/proof-of-work-vs-proof-of-stake/)

*Nervos CKB chooses proof of work consensus*



## On-chain vs. Off-chain Scaling

[Blockchain scaling: on-chain vs off-chain](https://bdtechtalks.com/2019/09/16/blockchain-scaling-on-chain-vs-off-chain/)

[What is the difference between on-chain scaling and off-chain scaling?](https://bitcoin.stackexchange.com/questions/63375/what-is-the-difference-between-on-chain-scaling-and-off-chain-scaling)

[On-chain vs Off-chain Processing and Storage](https://www.youtube.com/watch?v=aEpLdKbPTV4)

*Nervos CKB chooses off-chain scaling*



## Layer 2 Constructions

[Bitcoin's Lightning Network (Payment channels)](https://www.youtube.com/watch?v=rrr_zPmEiME)

[Sidechains & Plasma](https://www.youtube.com/watch?v=l6h50Omq_hs)

[State Channels](https://www.youtube.com/watch?v=tADoptxNuzQ)

[ZK Rollup](https://www.youtube.com/watch?v=QyM9qdFKsEA)

[Optimistic Rollup and ZK Rollup](https://medium.com/matter-labs/optimistic-vs-zk-rollup-deep-dive-ea141e71e075)

*Nervos CKB is built to provide maximum flexibility for Layer 2 constructions*



## RISC-V & WebAssembly (VMs)

[What is RISC-V?](https://codasip.com/2016/09/22/what-is-risc-vwhy-do-we-care-and-why-you-should-too/)

[Blockchain VMs and RISC-V](https://www.youtube.com/watch?v=QHjmykiyT5Q)

[Is WASM a better choice than RISC-V?](https://www.reddit.com/r/RISCV/comments/a9kxm5/is_wasm_a_better_choice_than_riscv/)

[CKB VM Lite Paper (VM design rationale)](https://medium.com/@m.quinn/ckb-vm-lite-paper-6b01082d9123)

*Nervos CKB chooses RISC-V as the instruction set of the CKB VM*



## UTXO model vs Account model

[UTXO model Explained (Bitcoin)](https://komodoplatform.com/whats-utxo/)

[Account model explained (Ethereum)](https://thecoinoffering.com/learn/ethereum-transactions/)

[UTXO and Account model comparison](https://hackernoon.com/utxo-and-account-model-comparison-v-2-cdf9669c6c0d)

[UTXO and Account model pros/cons](https://medium.com/@sunflora98/utxo-vs-account-balance-model-5e6470f4e0cf)

*Nervos CKB generalizes the UTXO model, creating the [cell model](https://www.youtube.com/watch?v=EBoTUw4MI0k), which enables turing-complete scripting*

