const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog03.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog04.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\n\nNEW CHUNK\n\n');
//     writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream)