const fs = require('fs');

const readFile = fs.createReadStream('readMe.txt', {
    encoding: 'utf8',
    highWaterMark: 64 *1024
});

const writeFile = fs.createWriteStream('writeMe.txt');

readFile.pipe(writeFile);

writeFile.on('finish', ()=>{
    console.log("Finished writing the file");
})

readFile.on('error', (err)=>{console.error('Read error: ', err)});
writeFile.on('error', (err)=>{console.error('Write error: ', err)})