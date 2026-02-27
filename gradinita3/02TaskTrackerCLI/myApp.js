//https://roadmap.sh/projects/task-tracker

const yargs = require("yargs");

const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8'); 

//argv - argmuent vector; the array of command line arguments passed into ur program
const argv = process.argv.slice(2)
console.log(argv)


//yargs.command('add', 'add a task in que')
// yargs.command("update", "update a task in que by it's ID");
//yargs.command("delete", "delete a task in que by it's ID");
yargs().command(["list","l"], "list all taks",{}, function(){
    console.log(data)
}
).help().parse(argv);


