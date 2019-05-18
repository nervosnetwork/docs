---
id: transfer
title: Transfer CKB
---

So far you have [started a node](run-node), [created a wallet](interact) and [earned some CKB tokens by mining](mine). Now you can try to send the tokens to someone else.

In your Ruby SDK console, check your wallet balance to make sure you have some tokens for Alice:
```ruby
wallet.get_balance
```

> The CKB token unit used in SDK is [CK Shannon](https://github.com/nervosnetwork/rfcs/blob/8a9a7870b2d356ec1daae3b85aeb24f793056bea/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md#native-tokens): `1 CK Byte = 100_000_000 CK Shannons`.

Then, as an example here, we create another wallet:
```ruby
alice = CKB::Wallet.from_hex(api, "0x2e8640dab5d1db5cfdfa0d3bdfd26bf9ccd04967b730236a74281fbcdfd68d8b")
```

Check the balance of Alice's wallet:
```ruby
alice.get_balance
```

It should be `0`. Now let's send some tokens to Alice (and store the transaction hash):
```ruby
tx_hash = wallet.send_capacity(alice.address, 1000 * 10**8)
```

<details>
<summary>(click here to view response)</summary>
```ruby
[7] pry(main)> tx_hash = wallet.send_capacity(alice.address, 1000 * 10**8)
=> "0xb76199fe641c8d6de8a7a7d4b2adb96cdb125e180147813d2981b4b7801c21c0"
```
</details>

Then we need to wait for the miner to pack this transaction into a block. Meanwhile we can check the transaction status by:
```ruby
api.get_transaction(tx_hash)
```

<details>
<summary>(click here to view response)</summary>
```ruby
[8] pry(main)> api.get_transaction(tx_hash)
=> #<CKB::Types::TransactionWithStatus:0x00007f9325bc5ec0
 @transaction=
  #<CKB::Types::Transaction:0x00007f9325bc5fb0
   @deps=
    [#<CKB::Types::OutPoint:0x00007f9325bc6460
      @block_hash=nil,
      @cell=
       #<CKB::Types::CellOutPoint:0x00007f9325bc64d8
        @index=0,
        @tx_hash="0xf8532f2ed92aad146878dca1d5ad9840e9c803ab85d1361652500eaee09c9038">>],
   @hash="0xb76199fe641c8d6de8a7a7d4b2adb96cdb125e180147813d2981b4b7801c21c0",
   @inputs=
    [#<CKB::Types::Input:0x00007f9325bc62d0
      @args=[],
      @previous_output=
       #<CKB::Types::OutPoint:0x00007f9325bc6348
        @block_hash=nil,
        @cell=
         #<CKB::Types::CellOutPoint:0x00007f9325bc63c0
          @index=0,
          @tx_hash="0x3f53986ab711c4d118f1c86e7c87988511852cb59b770ca26afe08ec9fd21fa2">>,
      @since="0">],
   @outputs=
    [#<CKB::Types::Output:0x00007f9325bc61b8
      @capacity="100000000000",
      @data="0x",
      @lock=
       #<CKB::Types::Script:0x00007f9325bc6230
        @args=["0xe3c7c50e2c7b4521bf962c6ef68e41c48b205dc6"],
        @code_hash="0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5">,
      @out_point=nil,
      @type=nil>,
     #<CKB::Types::Output:0x00007f9325bc60c8
      @capacity="4900000000000",
      @data="0x",
      @lock=
       #<CKB::Types::Script:0x00007f9325bc6140
        @args=["0xeb11266220bcd98e4a547168ec9424e1bf11c8fb"],
        @code_hash="0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5">,
      @out_point=nil,
      @type=nil>],
   @version=0,
   @witnesses=
    [#<CKB::Types::Witness:0x00007f9325bc6028
      @data=
       ["0x0353051e82d41413c5e14e0ad3e24eba15c9e50c0823b920fae5c777f59265370c",
        "0x3045022100da2ccc121c3680bbb01f895f52c248c220715da1b033a256d10b459e4a0b3d8b022008691a1b133a11edc9431e31e95a11138fa0e639b44039817658434b69f5fa3a",
        "0x4700000000000000"]>]>,
 @tx_status=
  #<CKB::Types::TxStatus:0x00007f9325bc5f38
   @block_hash="0xc0e5aa5a77e6e1c9227c987af774bd5e951a2eda63752354599a78263253795a",
   @status="committed">>
```
</details>

After the transaction is committed, we can check Alice's balance again:
```ruby
alice.get_balance
```

<details>
<summary>(click here to view response)</summary>
```ruby
[9] pry(main)> alice.get_balance
=> 100000000000
```
</details>

Now you have successfully made your CKB token transfer. Congratulations!

If you encountered any problems, please refer to [troubleshooting](../references/troubleshooting).





