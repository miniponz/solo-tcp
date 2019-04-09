const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'a'
});

// const dog = {
//   name: 'spot',
//   age: 4,
//   breed: 'mixed'
// };

ws.write('{');
ws.write('\n\t"name": "spot",'); //write data or chunk to a file.
ws.write('\n\t"age": "4",'); //write data or chunk to a file.
ws.write('\n\t"breed": "mixed"'); //write data or chunk to a file then use callback? to check?
ws.write('}');


ws.end(); //indicates done writing.

const rs = fs.createReadStream('./spot.json', {
  encoding: 'utf8',
}); //emits a data event
  
  
rs.on('data', data => {
  console.log(data);
});

