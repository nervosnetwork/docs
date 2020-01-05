---
id: ckb-vm
title: CKB-VM
---

## Introduction

Nervos CKB contains a new blockchain virtual machine, based on the [RISC-V instruction set](https://codasip.com/2016/09/22/what-is-risc-vwhy-do-we-care-and-why-you-should-too/). The CKB-VM executes type and lock scripts contained in cells (link). CKB-VM uses only standard RISC-V instructions and maintains a standard compliant RISC-V software implementation which can embrace broad industry support. 

[RISC-V](https://riscv.org/) is an open-source RISC instruction set architecture (ISA) designed by UC Berkeley professors intended to support the next generation of system architecture development, more information about RISC-V is here.



## CKB-VM

CKB-VM is a crypto-agnostic virtual machine. Instead of using customized instructions, CKB-VM implements cryptographic primitives as ordinary assembly running on its VM. New cryptographic primitives can always be deployed and used by scripts like an ordinary library. 

RISC-V standard compliance means that existing cryptographic libraries written in C or other languages can be easily ported to CKB VM and used by cell scripts. The default hash function and public-key cryptography of CKB used for transaction verification are even implemented in this way.

CKB relies on dynamic linking and syscalls to provide additional capabilities required by the blockchain, such as reading external cells or other computations. CKB-VM is designed to be compatible with existing toolchains. Any compilers with RV64I support, such as [riscv-gcc](https://github.com/riscv/riscv-gcc), [riscv-llvm](https://github.com/lowRISC/riscv-llvm) or [Rust](https://www.rust-lang.org/) can be used to generate CKB compatible scripts. Executables emitted by these compilers can be directly used as CKB contracts.

Higher-level language VMs, such as [duktape](https://duktape.org/) or [mruby](http://mruby.org/) can also be compiled and loaded to run contracts running in JavaScript or Ruby.



## Running a contract on CKB-VM

Running a contract is similar to running an executable in a single core Linux environment:

Each contract has a maximum size of 10MB uncompressed and 1MB in size gzipped. CKB-VM has a maximum of 128MB runtime memory for running contracts. The VM's runtime memory provides space for executable code pages mapped from contracts, stack space, head space and mapped pages of external cells.

Contract execution starts from the main function in the [ELF formatted](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) contract file, arguments are passed in via standard argc and argv. When main returns 0, the contract is treated as success. CKB-VM is a strict single-threaded model, though contracts can ship with coroutines of their own.

CKB-VM defines cycles for each instruction and provides total cycles executed during transaction verification to help miners determine transaction fees. The total cycles accumulated when contract is completed will then be treated as the runtime cost of the contract. This allows for a straightforward, accurate calculation of computational requirements of the VM.



## CKB-VM Design Goals

CKB-VM has been designed with the following goals:

1. Flexibility: Native CKB data structures and algorithms are kept to a minimum, maximizing compatibility and allowing developers to implement the data structures and algorithms on top of CKB that best suit their applications.

2. Stability: Given that the RISC-V CPU instruction set has been designed for hardware and finalized, it will not be modified, creating a very stable base for a blockchain VM.

3. Resource visibility: A RISC-V VM allows for maximum resource utilization, programs can query VM resource usage (disk, memory, processor) in real-time.




## Comparing to WebAssembly

Though [WebAssembly](https://webassembly.org/) has great potential as a virtual machine environment, it does not deliver all of the benefits RISC-V brings today. RISC-V is much more mature, with design beginning in 2010, first release in 2011 and hardware emerging in 2012. WebAssembly emerged much later in 2015, with an MVP release in 2017.

However, the use of WebAssembly is not discarded in CKB-VM. WebAssembly can be run on CKB-VM as described in this article (link).

 

## Technical details

CKB-VM uses the rv64imc architecture (link) : it is based on core RV64I ISA with M standard extension for integer multiplication and division, and C standard extension for RCV(RISC-V Compressed Instructions). 

Note that CKB-VM doesn't support floating point instructions, however a CKB script developer can choose to pack a softfloat implementation into the binary if needed.

For maximum tooling and debugging support, CKB-VM leverages the Linux ELF format directly as contract format.
