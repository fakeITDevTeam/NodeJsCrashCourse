const fs = require('fs');

// reading files
// fs.readFile('./docs/blog01.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// this will run before the 'readFile' code since system runs this line of code while trying to read the text 
// console.log('last line');

// writing files
// fs.writeFile('./docs/blog01.txt', 'hello, world 01', () => {
//     console.log('file was written');
// });
// fs.writeFile('./docs/blog02.txt', 'hello, world 02', () => {
//     console.log('file was written');
// });

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {    
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}