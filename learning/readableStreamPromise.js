const fs = require('fs')

const myPromise = new Promise((resolve, reject) =>{
    const readableStream = fs.createReadStream('readMe.txt', {
        encoding: 'utf8',
        highWaterMark: 64 * 1024
    });
    
    readableStream.on('data', (chunk) => {
        console.log(`Received ${chunk.length} bytes of data`);
        console.log(chunk);
    })
    
    readableStream.on('end', () => {
        resolve('Stream ended');
    })
    
    readableStream.on('error', (err) => {
        reject(err)
    })
})

myPromise
    .then(message => {
        console.log('Success!', message);
    })
    .catch(err => {
        console.error('Error reading stream file', err.message);
    });