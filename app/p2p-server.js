const WebSocket = require('ws');
const PORT_P2P = process.env.PORT_P2P || 5000;
const peers = process.env.PEERS ? process.env.PEERS.split(',')  : [];

class P2pServer{
    constructor(blockchain){
        this.blockchain = blockchain;
        this.socket = [];
    }

    listen (){
        const server = new WebSocket.Server({port: PORT_P2P});
        server.on('connection', socket => this.connectSocket(socket))
        
        this.connectToPeers();
    
        console.log(`Listening for peer-to-peer connections on: ${PORT_P2P}`)
    }
    
    connectToPeers(){
        peers.forEach(peer => {
            const socket = new WebSocket(peer);
            socket.on('open', () =>{
                this.connectSocket(socket)
            });
        })
    }
    
    connectSocket(socket){
        this.socket.push(socket)
        console.log('Socket connected')

        this.messageHandler(socket);
        socket.send(JSON.stringify(this.blockchain.chain));
    }

    messageHandler(socket){
        socket.on('message', message => {
            const data = JSON.parse(message);
            console.log('data', data)
        })
    }
}

module.exports = P2pServer;