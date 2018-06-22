const WebSocket = require('ws');

const ws = new WebSocket('wss://ws.blockchain.info/inv');

ws.on('open', () => {
    ws.send('{"op":"addr_sub", "addr":"1J37CY8hcdUXQ1KfBhMCsUVafa8XjDsdCn"}');
});

ws.on('message', data => console.log(data));
