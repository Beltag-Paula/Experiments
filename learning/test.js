const fs = require('fs');

var greetPromise = new Promise(function (myResolve, myReject) {

    fs.readFile(__dirname + '/myGreet.txt', 'utf8',
        (err, data) => {
            if (err) myReject(err);
            else myResolve(data);
        }
    )
writer.on('finish', () => {
  console.log('All writes are now complete.');
});

})

greetPromise.then((data) => console.log(greetPromise,data)).catch((err) => console.error(greetPromise,err));
