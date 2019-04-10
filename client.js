const net = require('net');
const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$$'
});

const client = net.createConnection(5446, 'localhost', () => {
  console.log('I am connected');
  
  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });

});

client.on('data', data => {
  console.log(`\n${data.toString()}`);
  rl.prompt();
});

