const net = require('net');

const server = net.createServer(() => {
  console.log('client connected');
});

server.listen(1919);
