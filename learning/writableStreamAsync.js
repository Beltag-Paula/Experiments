const fs = require('fs');

async function writeMePlz(inputFile, outputFile){
    const readFile = fs.createReadStream(inputFile, {
        encoding: 'utf8',
        highWaterMark: 64*1024
    })

    const writeFile = fs.createWriteStream(outputFile);

    try{
        await new Promise((resolve, reject)=>{
            writeFile.on('finish', resolve);
            writeFile.on('error', reject);
            readFile.pipe(writeFile);
        });
        console.log("Finished writing this file!")
    }
    catch(err){
        console.error("Eroor writing file", err);
    }
}

writeMePlz('readMe.txt', 'writeMe2.txt');
