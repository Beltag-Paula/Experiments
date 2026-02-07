
const fs = require('fs');

async function readMePlz(inputFile) {

    let counter = 0;
    let totalBytes = 0;


    const readableStream = fs.createReadStream(inputFile, {
        encoding: 'utf8',
    });

    try{
        for await (const chunk of readableStream){
            totalBytes+=chunk.length
            for (const character of chunk){
                if(character === '\n'){
                    counter++;
                }
            }
        }

        console.log(`Found ${counter} new lines in stream`)
        console.log(`Total bytes read: ${totalBytes}`);

        console.log('Stream ended');
    }
    catch(err){
        console.error('Error reading strean', err);
    }

}

readMePlz('readMe.txt');


