const fs = require('fs');

const rs = fs.createReadStream('./spot.json', {
  encoding: 'utf8'
});

const ws = fs.createWriteStream('./copy.json');

rs.on('data', data => {
  ws.write(data);
});

rs.on('end', () => {
  ws.end();
});


