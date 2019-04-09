// The readable.pipe() method returns a reference to the destination stream making it possible to set up chains of piped streams:

const fs = require('fs');
const rs = fs.createReadStream('spot.json');
const ws = fs.createWriteStream('another.json');

rs.pipe(ws);
//don't have to listen for 'end' event by writeable stream. end is called when readable stream emits end.

// rs.pipe(wr).pipe(ws)? where wr is a read/write stream? 
