const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'a',

});



ws.write('{');
ws.write('\n\t"name": "spot",'); 
ws.write('\n\t"age": "4",'); 
ws.write('\n\t"breed": "mixed"'); 
ws.write('}');

ws.end(); 

const rs = fs.createReadStream('./spot.json', {
  encoding: 'utf8',
}); 
  
rs.on('data', data => {
  return (data);
});

