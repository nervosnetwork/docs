---
id: ckb-sdk-js
title: ckb-sdk-js
---

* [Github](https://github.com/nervosnetwork/ckb-sdk-js)

ckb-sdk-js is an SDK implemented in JavaScript published in [NPM Registry](https://www.npmjs.com/package/@nervosnetwork/ckb-sdk-core/), produced by the Nervos Foundation.

ckb-sdk-js provides APIs for developers to send requests to the CKB blockchain and can be used both in-browser and [Node.js](https://nodejs.org/) because actually it is implemented in [Typescript](https://www.typescriptlang.org/), which is a superset of JavaScript and compiled into ES6. 

Please note that ckb-sdk-js is still under development and NOT production ready. You should get familiar with CKB transaction structure and RPC before using it.

ckb-sdk-js won’t generate private keys. If you want to generate private keys, you can use `openssl`

```
openssl rand 32 -hex
```

ckb-sdk-js includes three modules：

* RPC module: RPC module can send RPC requests to the CKB blockchain, the list of requests can be found in the [CKB Project](https://github.com/nervosnetwork/ckb/blob/develop/util/jsonrpc-types/src/blockchain.rs) and the interfaces could be found in `DefaultRPC` class in this module.
* Utils module: The Utils module provides useful methods for other modules.
* Types module: The Types module id used to provide the type definition of CKB Components according to the [CKB Project](https://github.com/nervosnetwork/ckb/blob/develop/util/jsonrpc-types/src/blockchain.rs). CKB Project complies to the snake case convention, which is listed in types/CKB_RPC in the RPC module. TypeScript complies to the PascalCase convention, which is listed in this module.

All three modules are integrated into the core module called `@nervosnetwork/ckb-sdk-core`

## Prerequisites

Before you start using this SDK, you'll first need to install [yarn](https://yarnpkg.com/en/) on your system. There are a growing number of different ways to install Yarn. Please refer to [installation](https://yarnpkg.com/lang/en/docs/install/#mac-stable) documentation. 

## Installation

If  you want to use  `@nervosnetwork/ckb-sdk-core`, you need to import it in your project and instantiate it with a node object. For now, the node object only contains one field named `url`, the URI of the blockchain node you are going to communicate with.

* Import in the project

```
$ yarn add @nervosnetwork/ckb-sdk-core
```

* Instantiate it with a node object

* For now, the node object only contains one field named `url`, the URI of the blockchain node you are going to communicate with.

```js
const CKB = require('@nervosnetwork/ckb-sdk-core').default

const nodeUrl = 'http://localhost:8114'

const ckb = new CKB(nodeUrl)
```

After that you can use the `ckb` object to generate addresses, send requests, etc.

## Development key points

### Code Examples 

1. [Send Simple Transaction](https://github.com/nervosnetwork/ckb-sdk-js/blob/develop/packages/ckb-sdk-core/examples/sendSimpleTransaction.js)
2. [Send All Balance](https://github.com/nervosnetwork/ckb-sdk-js/blob/develop/packages/ckb-sdk-core/examples/sendAllBalance.js)
3. [Send Transaction with multiple private key](https://github.com/nervosnetwork/ckb-sdk-js/blob/develop/packages/ckb-sdk-core/examples/sendTransactionWithMultiplePrivateKey.js)
4. [Deposit to and withdraw from Nervos DAO](https://github.com/nervosnetwork/ckb-sdk-js/blob/develop/packages/ckb-sdk-core/examples/nervosDAO.js)

### Persistent Connection

If ckb-sdk-js is running in Node.js, please add `httpAgent` or `httpsAgent` to enable the persistent connection.

```
// HTTP Agent
const http = require('http')
const httpAgent = new http.Agent({ keepAlive: true })
ckb.rpc.setNode({ httpAgent })
// HTTPS Agent
const https = require('https')
const httpsAgent = new https.Agent({ keepAlive: true })
ckb.rpc.setNode({ httpsAgent })
```





