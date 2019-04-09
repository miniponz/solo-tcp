const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 64 * 1028
}); //emits a data event


rs.on('data', data => {
  console.log(data);
});

let body = '';
rs.on('data', chunk => {
  body += chunk;
});

rs.on('end', () => {
  console.log(body);
});

//readStream - has other events data, end, 
