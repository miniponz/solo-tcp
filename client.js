const net = require('net');

const client = net.createConnection(5446, 'localhost', () => {
  console.log('I am connected');
  client.write('hello I am a client');
});

