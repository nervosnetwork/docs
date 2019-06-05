---
id: rpc
title: JSON-RPC Commands
---

<!-- Todo update rpc document -->

This RPC API document is compatible with `ckb 0.12.0 (v0.12.0 2019-05-17)`. For more versions of this document, please refer to the [GitHub repo](https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md) directly. 

[Here](https://gist.github.com/Mine77/cb26558a993088a298a2bc1862bb9662) is a `paw` file you can use to import into Rest API softwares such as [Postman](https://www.getpostman.com/)

> The RPC port of your CKB node can be set in your [node configuration](https://github.com/nervosnetwork/ckb/blob/develop/docs/configure.md) file. By default, it uses port 8114.

## An Example
You can interact with your CKB node client via RPC port. Here's an example showing how to get the header information of the tip block (the latest block).

Open a new terminal, and use this command to get the tip block header (note that you should have the `ckb run` running):
```bash
curl -d '{"id": 2, "jsonrpc": "2.0", "method":"get_tip_header","params": []}' -H 'content-type:application/json' 'http://localhost:8114'
```

> Note that you need to have [curl](https://www.google.com/search?q=how+to+install+curl+on+linux) installed.

<details>
<summary>(click here to view response)</summary>
```json
{
    "jsonrpc":"2.0",
    "result":{
        "difficulty":"0x1000",
        "epoch":"0",
        "hash":"0x7ab75ce1a45f30a6fe0d83856aa56827243c88271f4b8e2f968809b175fa2e7e",
        "number":"227",
        "parent_hash":"0xc1b02d64c8a294f1bc935706655213314926d33f031e84fe97fc601559aae9b1",
        "proposals_hash":"0x0000000000000000000000000000000000000000000000000000000000000000",
        "seal":{
            "nonce":"12843279316432878493",
            "proof":"0xa1060000d51100007b130000fd16000031200000982b0000fd370000d757000071730000dc740000a3790000a37b0000"
            },
        "timestamp":"1558138968104",
        "transactions_root":"0xc7067232dc4b44d393b50cea57635a642193963ac19ee3f5385940b2c23a5073",
        "uncles_count":"0",
        "uncles_hash":"0x0000000000000000000000000000000000000000000000000000000000000000",
        "version":"0",
        "witnesses_root":"0x822916ce5ad8b248f5ce549139c456abfdbba3ea3d2a8642c55da706876d0734"
        },
    "id":2
}
```
</details>



## Chain

### `get_block`

Returns the information about a block by hash.

#### Parameters

    hash - Hash of a block

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_block",
    "params": [
        "0xbd63393483cb066d2fb9f779b20b904020bb599b03fab6e4571990828510d829"
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "header": {
            "difficulty": "0x3e8",
            "epoch": "0",
            "hash": "0xbd63393483cb066d2fb9f779b20b904020bb599b03fab6e4571990828510d829",
            "number": "2",
            "parent_hash": "0xbd71290db6b9ebff5f72e62093ee9e228bd5c29d3bc7d3b607e9a764e561a563",
            "proposals_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "seal": {
                "nonce": "0",
                "proof": "0x"
            },
            "timestamp": "1557310745",
            "transactions_root": "0x530204fd06dbe0c831bf1043a6ec758bb4b0db7eca6445793194ffb84ad29400",
            "uncles_count": "0",
            "uncles_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "version": "0",
            "witnesses_root": "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "proposals": [],
        "transactions": [
            {
                "deps": [],
                "hash": "0x530204fd06dbe0c831bf1043a6ec758bb4b0db7eca6445793194ffb84ad29400",
                "inputs": [
                    {
                        "args": [
                            "0x0200000000000000"
                        ],
                        "previous_output": {
                            "block_hash": null,
                            "cell": null
                        },
                        "since": "0"
                    }
                ],
                "outputs": [
                    {
                        "capacity": "50000000000000",
                        "data": "0x",
                        "lock": {
                            "args": [],
                            "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
                        },
                        "type": null
                    }
                ],
                "version": "0",
                "witnesses": []
            }
        ],
        "uncles": []
    }
}
```

### `get_block_by_number`

Get block by number

#### Parameters

    block_number - Number of a block

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_block_by_number",
    "params": [
        "1024"
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "header": {
            "difficulty": "0x3e8",
            "epoch": "0",
            "hash": "0x4d381124b9a3a55bad2c45b49efe1ffd6b365d3ea7cf3141d5830b0bb94deeb8",
            "number": "1024",
            "parent_hash": "0xf674b89a0b85be6bf9da0e6d6c53e137293cb21d1a2439e11c376bbe2571c1b4",
            "proposals_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "seal": {
                "nonce": "0",
                "proof": "0x"
            },
            "timestamp": "1557311767",
            "transactions_root": "0x1a98116f150c6f795bc02ebf65fd43ba6b3363c5ea9d2457791bcbc4baaae90b",
            "uncles_count": "0",
            "uncles_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "version": "0",
            "witnesses_root": "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "proposals": [],
        "transactions": [
            {
                "deps": [],
                "hash": "0x1a98116f150c6f795bc02ebf65fd43ba6b3363c5ea9d2457791bcbc4baaae90b",
                "inputs": [
                    {
                        "args": [
                            "0x0004000000000000"
                        ],
                        "previous_output": {
                            "block_hash": null,
                            "cell": null
                        },
                        "since": "0"
                    }
                ],
                "outputs": [
                    {
                        "capacity": "50000000000000",
                        "data": "0x",
                        "lock": {
                            "args": [],
                            "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
                        },
                        "type": null
                    }
                ],
                "version": "0",
                "witnesses": []
            }
        ],
        "uncles": []
    }
}
```

### `get_block_hash`

Returns the hash of a block in the best-block-chain by block number; block of No.0 is the genesis block.

#### Parameters

    block_number - Number of a block

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_block_hash",
    "params": [
        "2"
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": "0xbd63393483cb066d2fb9f779b20b904020bb599b03fab6e4571990828510d829"
}
```

### `get_cells_by_lock_hash`

Returns the information about cells collection by the hash of lock script.

#### Parameters

    lock_hash - Cell lock script hash
    from - Start block number
    to - End block number

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_cells_by_lock_hash",
    "params": [
        "0x9a9a6bdbc38d4905eace1822f85237e3a1e238bb3f277aa7b7c8903441123510",
        "2",
        "5"
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": [
        {
            "capacity": "50000000000000",
            "lock": {
                "args": [],
                "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
            },
            "out_point": {
                "block_hash": "0xbd63393483cb066d2fb9f779b20b904020bb599b03fab6e4571990828510d829",
                "cell": {
                    "index": "0",
                    "tx_hash": "0x530204fd06dbe0c831bf1043a6ec758bb4b0db7eca6445793194ffb84ad29400"
                }
            }
        },
        {
            "capacity": "50000000000000",
            "lock": {
                "args": [],
                "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
            },
            "out_point": {
                "block_hash": "0x7ff4ff104794ca4146059d78b89acb4e16ad3959fadde361730f7a835004be45",
                "cell": {
                    "index": "0",
                    "tx_hash": "0x5af3009f5e2be240ce95a2faedab1b144821a24703c026ab8f25328ac596f550"
                }
            }
        },
        {
            "capacity": "50000000000000",
            "lock": {
                "args": [],
                "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
            },
            "out_point": {
                "block_hash": "0x79ef2d2666ad3c5a94e0b069b412cbf8049301338e09e8c193f80d9fec084cf8",
                "cell": {
                    "index": "0",
                    "tx_hash": "0x53d13bbfee6b4a64763b7231b00e18c7db5379b58d74f9b0677be1394ea1ef85"
                }
            }
        },
        {
            "capacity": "50000000000000",
            "lock": {
                "args": [],
                "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
            },
            "out_point": {
                "block_hash": "0x05786d4ac8858d5065a2f2ac41c87a85f59516bdb8779e81e1636151bdc89027",
                "cell": {
                    "index": "0",
                    "tx_hash": "0x00e47be2eeac34a22c4d7573bf2a65e531a5b78427ef5808c1b4971cf73418ac"
                }
            }
        }
    ]
}
```

### `get_current_epoch`

Returns the information about the current epoch.


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_current_epoch",
    "params": []
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "block_reward": "250000000000",
        "difficulty": "0x3e8",
        "last_block_hash_in_previous_epoch": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "length": "2000",
        "number": "0",
        "remainder_reward": "0",
        "start_number": "0"
    }
}
```

### `get_epoch_by_number`

Return the information corresponding the given epoch number.

#### Parameters

    epoch_number - Epoch number

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_epoch_by_number",
    "params": [
        "0"
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "block_reward": "250000000000",
        "difficulty": "0x3e8",
        "last_block_hash_in_previous_epoch": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "length": "2000",
        "number": "0",
        "remainder_reward": "0",
        "start_number": "0"
    }
}
```

### `get_live_cell`

Returns the information about a cell by out_point. If <block_hash> is not specific, returns the cell if it is live. If <block_hash> is specified, return the live cell only if the corresponding block contain this cell

#### Parameters

    out_point - OutPoint object {{"tx_hash": <tx_hash>, "index": <index>}, "block_hash": <block_hash>}.

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_live_cell",
    "params": [
        {
            "block_hash": null,
            "cell": {
                "index": "0",
                "tx_hash": "0x00e47be2eeac34a22c4d7573bf2a65e531a5b78427ef5808c1b4971cf73418ac"
            }
        }
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "cell": {
            "capacity": "50000000000000",
            "data": "0x",
            "lock": {
                "args": [],
                "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
            },
            "type": null
        },
        "status": "live"
    }
}
```

### `get_tip_block_number`

Returns the number of blocks in the longest blockchain.


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_tip_block_number",
    "params": []
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": "1024"
}
```

### `get_tip_header`

Returns the information about the tip header of the longest.


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_tip_header",
    "params": []
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "difficulty": "0x3e8",
        "epoch": "0",
        "hash": "0x4d381124b9a3a55bad2c45b49efe1ffd6b365d3ea7cf3141d5830b0bb94deeb8",
        "number": "1024",
        "parent_hash": "0xf674b89a0b85be6bf9da0e6d6c53e137293cb21d1a2439e11c376bbe2571c1b4",
        "proposals_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "seal": {
            "nonce": "0",
            "proof": "0x"
        },
        "timestamp": "1557311767",
        "transactions_root": "0x1a98116f150c6f795bc02ebf65fd43ba6b3363c5ea9d2457791bcbc4baaae90b",
        "uncles_count": "0",
        "uncles_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "version": "0",
        "witnesses_root": "0x0000000000000000000000000000000000000000000000000000000000000000"
    }
}
```

### `get_transaction`

Returns the information about a transaction requested by transaction hash.

#### Parameters

    hash - Hash of a transaction

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_transaction",
    "params": [
        "0x1a98116f150c6f795bc02ebf65fd43ba6b3363c5ea9d2457791bcbc4baaae90b"
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "transaction": {
            "deps": [],
            "hash": "0x1a98116f150c6f795bc02ebf65fd43ba6b3363c5ea9d2457791bcbc4baaae90b",
            "inputs": [
                {
                    "args": [
                        "0x0004000000000000"
                    ],
                    "previous_output": {
                        "block_hash": null,
                        "cell": null
                    },
                    "since": "0"
                }
            ],
            "outputs": [
                {
                    "capacity": "50000000000000",
                    "data": "0x",
                    "lock": {
                        "args": [],
                        "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
                    },
                    "type": null
                }
            ],
            "version": "0",
            "witnesses": []
        },
        "tx_status": {
            "block_hash": "0x4d381124b9a3a55bad2c45b49efe1ffd6b365d3ea7cf3141d5830b0bb94deeb8",
            "status": "committed"
        }
    }
}
```

## Experiment

### `_compute_code_hash`

Returns code hash of given hex encoded data

**Deprecated**: will be removed in a later version

#### Parameters

    data - Hex encoded data

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "_compute_code_hash",
    "params": [
        "0x123456"
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": "0x7dacea2e6ae8131b7f187570135ebb1b217a69458b3eae350104942c06939783"
}
```

### `_compute_script_hash`

Returns script hash of given transaction script

**Deprecated**: will be removed in a later version

#### Parameters

    args - Hex encoded arguments passed to reference cell
    code_hash - Code hash of referenced cell

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "_compute_script_hash",
    "params": [
        {
            "args": [
                "0x123450",
                "0x678900"
            ],
            "code_hash": "0xb35557e7e9854206f7bc13e3c3a7fa4cf8892c84a09237fb0aab40aab3771eee"
        }
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": "0x7c72a3b5705bf5a4e7364fc358e2972f4eb376cf7937bf7ffd319f50f07e27a2"
}
```

### `_compute_transaction_hash`

Return the transaction hash

**Deprecated**: will be removed in a later version

#### Parameters

    transaction - The transaction object
    version - Transaction version
    deps - Dependent cells
    inputs - Transaction inputs
    outputs - Transaction outputs
    witnesses - Witnesses

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "_compute_transaction_hash",
    "params": [
        {
            "deps": [],
            "inputs": [
                {
                    "args": [],
                    "previous_output": {
                        "block_hash": "0x4d381124b9a3a55bad2c45b49efe1ffd6b365d3ea7cf3141d5830b0bb94deeb8",
                        "cell": {
                            "index": "0",
                            "tx_hash": "0x1a98116f150c6f795bc02ebf65fd43ba6b3363c5ea9d2457791bcbc4baaae90b"
                        }
                    },
                    "since": "0"
                }
            ],
            "outputs": [
                {
                    "capacity": "100000000000",
                    "data": "0x",
                    "lock": {
                        "args": [],
                        "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
                    },
                    "type": null
                }
            ],
            "version": "0",
            "witnesses": []
        }
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": "0x62cd8eab85dbb6989d5b9d18d6eb098bcf202089907b918be8cbee8ec8cc58ec"
}
```

### `dry_run_transaction`

Dry run transaction and return the execution cycles.

This method will not check the transaction validity, but only run the lock script
and type script and then return the execution cycles.
Used to debug transaction scripts and query how many cycles the scripts consume


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "dry_run_transaction",
    "params": [
        {
            "deps": [
                {
                    "cell": {
                        "index": "0",
                        "tx_hash": "0xde3f97f9bad32043a4c631d6cf2529f69e82575193208029e0f4bd77df83e4bc"
                    }
                }
            ],
            "inputs": [
                {
                    "args": [],
                    "previous_output": {
                        "block_hash": "0x4d381124b9a3a55bad2c45b49efe1ffd6b365d3ea7cf3141d5830b0bb94deeb8",
                        "cell": {
                            "index": "0",
                            "tx_hash": "0x1a98116f150c6f795bc02ebf65fd43ba6b3363c5ea9d2457791bcbc4baaae90b"
                        }
                    },
                    "since": "0"
                }
            ],
            "outputs": [
                {
                    "capacity": "100000000000",
                    "data": "0x",
                    "lock": {
                        "args": [],
                        "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
                    },
                    "type": null
                }
            ],
            "version": "0",
            "witnesses": []
        }
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "cycles": "12"
    }
}
```

## Net

### `get_peers`

Returns the connected peers information.


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_peers",
    "params": []
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": [
        {
            "addresses": [
                {
                    "address": "/ip4/192.168.0.3/tcp/8115",
                    "score": "1"
                }
            ],
            "is_outbound": true,
            "node_id": "QmaaaLB4uPyDpZwTQGhV63zuYrKm4reyN2tF1j2ain4oE7",
            "version": "unknown"
        },
        {
            "addresses": [
                {
                    "address": "/ip4/192.168.0.4/tcp/8113",
                    "score": "255"
                }
            ],
            "is_outbound": false,
            "node_id": "QmRuGcpVC3vE7aEoB6fhUdq9uzdHbyweCnn1sDBSjfmcbM",
            "version": "unknown"
        },
        {
            "addresses": [],
            "node_id": "QmUddxwRqgTmT6tFujXbYPMLGLAE2Tciyv6uHGfdYFyDVa",
            "version": "unknown"
        }
    ]
}
```

### `local_node_info`

Returns the local node information.


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "local_node_info",
    "params": []
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "addresses": [
            {
                "address": "/ip4/192.168.0.2/tcp/8112/p2p/QmTRHCdrRtgUzYLNCin69zEvPvLYdxUZLLfLYyHVY3DZAS",
                "score": "255"
            },
            {
                "address": "/ip4/0.0.0.0/tcp/8112/p2p/QmTRHCdrRtgUzYLNCin69zEvPvLYdxUZLLfLYyHVY3DZAS",
                "score": "1"
            }
        ],
        "is_outbound": null,
        "node_id": "QmTRHCdrRtgUzYLNCin69zEvPvLYdxUZLLfLYyHVY3DZAS",
        "version": "0.9.0"
    }
}
```

## Pool

### `send_transaction`

Send new transaction into transaction pool

If <block_hash> of <previsous_output> is not specified, loads the corresponding input cell. If <block_hash> is specified, load the corresponding input cell only if the corresponding block exist and contain this cell as output.

#### Parameters

    transaction - The transaction object
    version - Transaction version
    deps - Dependent cells
    inputs - Transaction inputs
    outputs - Transaction outputs
    witnesses - Witnesses

#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "send_transaction",
    "params": [
        {
            "deps": [
                {
                    "cell": {
                        "index": "0",
                        "tx_hash": "0xde3f97f9bad32043a4c631d6cf2529f69e82575193208029e0f4bd77df83e4bc"
                    }
                }
            ],
            "inputs": [
                {
                    "args": [],
                    "previous_output": {
                        "block_hash": "0x4d381124b9a3a55bad2c45b49efe1ffd6b365d3ea7cf3141d5830b0bb94deeb8",
                        "cell": {
                            "index": "0",
                            "tx_hash": "0x1a98116f150c6f795bc02ebf65fd43ba6b3363c5ea9d2457791bcbc4baaae90b"
                        }
                    },
                    "since": "0"
                }
            ],
            "outputs": [
                {
                    "capacity": "100000000000",
                    "data": "0x",
                    "lock": {
                        "args": [],
                        "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5"
                    },
                    "type": null
                }
            ],
            "version": "0",
            "witnesses": []
        }
    ]
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": "0x8ad1e331e489af86d98078d2d6ac769b5f8d38464d92de61564ba3a49a7f42f8"
}
```

### `tx_pool_info`

Return the transaction pool information


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "tx_pool_info",
    "params": []
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "last_txs_updated_at": "0",
        "orphan": "0",
        "pending": "1",
        "proposed": "0",
        "total_tx_cycles": "12",
        "total_tx_size": "156"
    }
}
```

## Stats

### `get_blockchain_info`

Return state info of blockchain


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_blockchain_info",
    "params": []
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": {
        "chain": "main",
        "difficulty": "0x3e8",
        "epoch": "0",
        "is_initial_block_download": true,
        "median_time": "1557311762",
        "warnings": ""
    }
}
```

### `get_peers_state`

Deprecating in 0.12.0: Return state info of peers


#### Examples

```bash
echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_peers_state",
    "params": []
}' \
| tr -d '\n' \
| curl -H 'content-type: application/json' -d @- \
http://localhost:8114
```

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": [
        {
            "blocks_in_flight": "86",
            "last_updated": "1557289448237",
            "peer": "1"
        }
    ]
}
```