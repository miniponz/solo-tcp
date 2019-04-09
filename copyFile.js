const fs = require('fs');

const rs = fs.createReadStream('./spot.json', {
  encoding: 'utf8'
});

rs.on('data', data => {
  const ws = fs.createWriteStream('./copy.json', {
    
  });
  ws.write(data);
});

