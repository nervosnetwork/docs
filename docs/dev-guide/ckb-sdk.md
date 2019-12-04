---
id: ckb-sdk
title: ckb-sdk
---
There are a couple different aspects to developing blockchain applications with CKB:

1. Smart contract development - writing code that gets deployed to the blockchain.
2. Developing websites or clients that interact with the blockchain - writing code that reads data from or writes data to the blockchain with smart contracts.

ckb-sdk enables the second method of development, developing client applications that interact with the Nervos CKB blockchain. 

ckb-sdk is a collection of libraries which allow you to interact with a local or remote CKB node by using JSON-RPC. **Please note that ckb-sdk is still under development and NOT production ready.** You should get familiar with CKB transaction structure and [JSON-RPC](https://github.com/nervosnetwork/ckb/tree/develop/rpc) before using it. now ckb-sdk is implemented by four kind of programming language: JavaScript、Ruby、Swift、Java.

* ckb-sdk-js  [Github](https://github.com/nervosnetwork/ckb-sdk-js)
    * ckb-sdk-js is an SDK implemented in JavaScript, and published in [NPM Registry](https://www.npmjs.com/package/@nervosnetwork/ckb-sdk-core/), and provides APIs for developers to send requests to the CKB blockchain. Neuron Wallet utilizes ckb-sdk-js .
* ckb-sdk-ruby  [Github](https://github.com/nervosnetwork/ckb-sdk-ruby)
    * ckb-sdk-ruby is an SDK implemented in Ruby and provides APIs for developers to send requests to the CKB blockchain. CKB-Explorer utilizes ckb-sdk-ruby .
* ckb-sdk-swift  [Github](https://github.com/nervosnetwork/ckb-sdk-swift)
    * ckb-sdk-swift is an SDK implemented in Swift and provides APIs for developers to send requests to the CKB blockchain. Testnet Faucet utilizes ckb-sdk-swift .
* ckb-sdk-java  [Github](https://github.com/nervosnetwork/ckb-sdk-java)
    * ckb-sdk-java is an SDK implemented in Java and provides APIs for developers to send requests to the CKB blockchain.