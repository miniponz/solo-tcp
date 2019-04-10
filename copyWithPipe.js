
const fs = require('fs');
const rs = fs.createReadStream('spot.json');
const ws = fs.createWriteStream('another.json');

rs.pipe(ws);

