const express = require('express')
const blockchain = require('../blockchain/blockchain')
const PORT = process.env.PORT || 3000;
const P2pServer = require('./p2p-server');

const app = express()
bc = new blockchain();

const p2pServer = new P2pServer(bc);

app.use(express.json());

app.get('/blocks', (req, res) => {
    res.json(bc.chain)
});

app.post('/miner', (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(req.data)
    console.log(`Ǹew Block added: ${block.toString()}`)
    res.redirect('/blocks');
})

app.listen(PORT, () => {
    console.log("Listening on port", process.env.PORT || 3000)
});
p2pServer.listen();

