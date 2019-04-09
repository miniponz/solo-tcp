const net = require('net');

//every client is a socket(node.js doc term), but is a particular client connecting to server.
const server = net.createServer(client => {
  console.log('client connected');

  //   client.pipe(client);
  client.on('data', data => {
    client.write(`ECHO FROM SERVER: ${data}`);
  });
});

// tell server to listen on port no.
server.listen(5446);


