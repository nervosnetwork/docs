---
id: ckb-cli
title: ckb-cli
---
ckb-cli is a command line tool for debugging CKB in development to facilitate user interaction with CKB. 

* Download and unzip the latest released [ckb-cli](https://github.com/nervosnetwork/ckb-cli/releases) 
* `./ckb-cli `and open in command line.
* ckb-cli includes functionality to:
    * search blockchain info,
    * configure environment variables,
    * invoke RPC to interact with the CKB node,
    * handle mock transactions,
    * create wallets and query balance etc. 
* You can use   `--help`  to check subcommands.
* Please refer to the [Github](https://github.com/nervosnetwork/ckb-cli) for more details.

```
CKB> --help
interactive 0.25.2

USAGE:
    interactive [SUBCOMMAND]

FLAGS:
    -h, --help    Prints help information

SUBCOMMANDS:
    config     Config environment
    info       Display global variables
    exit       Exit the interactive interface [aliases: quit]
    rpc        Invoke RPC call to node
    account    Manage accounts
    mock-tx    Handle mock transactions (verify/send)
    util       Utilities
    wallet     Transfer / query balance (with local index) / key utils
    help       Prints this message or the help of the given subcommand(s)
```