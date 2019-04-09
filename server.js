const net = require('net');

//every client is a socket(node.js doc term), but is a particular client connecting to server.
const server = net.createServer(client => {
  console.log('client connected');
  client.on('data', data => {
    console.log(data.toString());
  });
});

server.listen(5446);


