# CKB 

## Introduction

Nervos CKB is the base of a layered cryptoeconomic network; infrastructure is separated into two layers: a verification layer (layer 1, CKB) that serves as a trust root and programmable asset custodian and a generation layer (layer 2) for high-performance transactions, a degree of privacy and maximum flexibility.



## Scaling Solutions

To support a global cryptoeconomy, scaling solutions will be needed to move public blockchains beyond their current capabilities. Scaling solutions can be generally divided into two broad categories: on-chain scaling and off-chain scaling. 

**On-chain scaling**

On-chain scaling solutions scale up at the layer where consensus runs (layer 1). However, global consensus is slow almost by definition, nodes all over the world exchange messages and eventually reach agreement on the global state of the blockchain. 

Message exchange on a public and open network is slow and uncertain, and nodes must wait and retry to reach agreement in the consensus process. To scale at this layer, there are two options: 1) the processing ability and network bandwidth of nodes can be increased (which forces sacrifices in decentralization due to high hardware and infrastructure costs) or 2) global state can be divided through sharding (which increases complexity and degrades performance through required shard coordination and cross-shard operations).

**Off-chain scaling**

Global consensus of a permissionless blockchain is incredibly costly compared to any other consensus scope. It does however offer the highest degree of security and decentralization. Most transactions between two or more parties don't need to be known by every node or user in the network. Large numbers of transactions can remain between these parties until they are ready to be settled and make their net effects known to the entirety of the network. 

While it is difficult to scale global consensus, it can be used wisely; consensus can occur within different scopes and each scope will incur a particular cost. A layered network scales by offloading most transactional activity to layer 2, which does not present the limitations of the layer 1 blockchain. Additionally, off-chain transaction provide lower latency, a better user experience and a degree of privacy.




## Scaling with Nervos CKB

Nervos CKB has been designed from scratch to support a layered blockchain network for off-chain scaling solutions. It is a layer 1 blockchain, a decentralized and secure layer that provides common knowledge custody for the network. Common knowledge refers to state verified by global consensus, crypto-assets are an example of common knowledge.

In the Nervos Network, layer 1 is where state is stored and defined and layer 2 is the generation layer (or computation layer) that processes most transactions and generates new states. Layer 2 participants submit newly generated states to the CKB eventually when they deem necessary. If those states pass the corresponding verification performed by nodes in a global network, the CKB stores them in a peer-to-peer node securely.



## CKB Cell Model

CKB provides a stateful Turing-complete programming model through CKB-VM and the cell model. Detailed information about CKB-VM can be found here (link), and more detail about the cell model can be found here (link).

In the cell model, decentralized application logic is split into two parts (generation and verification), which run in different places. CKB transactions have an inputs/outputs based structure like Bitcoin. State generation logic runs off-chain on the client side; new states are packaged into transactions and broadcasted to the entire network. Transaction inputs are references to previous outputs, and are included along with proofs to unlock them. The client includes the generated new states in the transaction as outputs, which are called cells in CKB.

Cells are the primary state storage units in CKB. They are assets owned by users that must follow associated application logic specified by scripts. CKB-VM executes these scripts and verifies proofs included in inputs to make sure the user is permitted to use referenced cells and the state transition is valid under specified application logic.

State in CKB is a first-class citizen, states are included in transactions and blocks and synchronized directly among nodes. Cells are immutable objects, they cannot be modified after creation. Every cell can only be used once, cell "updates" mark previous cells as history and create new cells with the same capacity to replace them.

Each cell has an associated "capacity" value, which is the max amount of data that can be stored in that cell. The entire capacity of a cell can be transferred, or the cell can be split, for example, a cell with capacity of 200 bytes can become two cells with capacity is 100 bytes each.

The set of all current (or live) cells represents the latest version of all common knowledge in CKB, and the set of history (or dead) cells represents all historical versions of common knowledge.



## Programming on CKB

Although the programming model is stateful, scripts running in CKB-VM are pure functions with no internal state, which makes CKB scripts deterministic, conducive to parallel execution, and easy to compose. More information about scripting with Nervos CKB can be found in the cell model documentation (link pending).

CKB implements cryptographic primitives as ordinary assembly running on its VM. It supports syscall, by which scripts can read metadata such as current transaction and general blockchain information from CKB. CKB-VM defines `cycles` for each instruction, and provides total cycles executed during transaction verification to help miners determine transaction fees

New cryptographic primitives can always be deployed and used by scripts like an ordinary library. Transactions express state transitions, resulting in cell transfer, update, or both. In a single transaction, users can update data in one or more cells or transfer their cells to other users. All state transitions in the transaction are atomic, they will either all succeed or all fail.




## A Verification Network

The layered architecture of Nervos CKB separates state and computation, providing each layer greater flexibility and scalability. 

While CKB is the lowest layer of the network with the broadest and most secure consensus, different applications might prefer different consensus scopes. With CKB's layered architecture, applications can choose the appropriate generation methods based on their needs. Applications will need to submit states to CKB for broader agreement when their use cases require verification and storage through global consensus.

Examples of state generation methods include (but are not limited to):

- **Local generators on client-side:** Generators run directly on the client’s devices. Developers can implement generators in any programming language.
- **Web services:** Users may use traditional web services to generate new states. All current web services may work with CKB in this way to gain more trust and liquidity for the generated states. For example, game companies may define in-game items as assets in CKB, the game itself may function as a web service that generates game data, which can then be verified and stored on CKB.
- **State channels:** Two or more users may use peer-to-peer communication to generate new states, secured by cryptoeconomic mechanisms on CKB, which protect the settlement integrity of their off-chain transactions.
- **Sidechains:** A sidechain is a blockchain that generates new states and stores them in CKB. These chains may be permissionless or permissioned. In each sidechain, nodes reach consensus in smaller scopes, providing better performance, privacy and user experience.
- **Off-chain computation:** Transactions are gathered from users by a relayer (or pool of relayers), who computes a [zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof) to prove transaction and state transition validity and then submits this proof to the layer 1 blockchain for verification.



## Securing CKB

Nervos CKB is secured through proof-of-work, with a Nakamoto consensus variant algorithm. Nodes can freely join and exit the network and every node can participate in the consensus process, either by mining to produce new blocks or by verifying new blocks are valid. 

The proof-of-work function of CKB is an ASIC-neutral hash function which you can read more about [here](https://medium.com/nervosnetwork/the-proof-of-work-function-of-nervos-ckb-3cc8364464d9).



## CKB Economic Model

The CKB economic model focuses on state, by using cell capacity and transaction fees as incentives for stakeholders. A single CKByte token entitles a holder to 1 byte of state storage on the blockchain. A cell owner can use a cell to store state, lend the cell's capacity to others or lock the CKByte native tokens in the [Nervos DAO](https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c) to receive issuance rewards. 

If a user is using their CKBytes to store data, they will incur an cost of inflation, paying for storage with a cost that is proportional to both space and time. Compared to an upfront payment model, this implicit state cost model avoids any situation that would require removing state due to non-payment. Accordingly, any problems that would result from removing dependent contracts and contract recovery processes are avoided as well.



## Computation Costs and Transaction Fees

Updating a cell’s data or transferring cell ownership will require transaction fees. Miners can set a transaction fee level that they are willing to accept based on the number of CKB-VM cycles used and state changes in transaction verification.

With the cell model, cell owners operating applications can also pay transaction fees on behalf of their users. Fees can also be paid in any other user-defined assets, as long as miners are willing to accept them; there is no hard-coded payment method in CKB transactions.
