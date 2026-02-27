//console.log(process.argv.slice(2));
const myFormat = process.argv.slice(2);
const prompt = require("readline-sync"); // You'll need this library

const { error } = require("console");
const fs = require("fs");
const filePath = "input.txt";

const myStatus = ["todo", "in-progress", "done"];

const myCommand = myFormat[0];
const myPass = myFormat[1];

let AllTasks = [];
try {
  AllTasks = JSON.parse(fs.readFileSync(filePath, { encoding: "utf8" }));
} catch (err) {
  console.error(`Some error was founds ${err}`);
}

function add(myCommand) {
  if (myCommand === "add") {
    try {
      if (!myPass) {
        console.log("You didn't provide a description for your task");
        return;
      }
      //safe incremenet for ID to be unique
      let id = 1;
      try {
        id =
          AllTasks.length > 0 ? Math.max(...AllTasks.map((t) => t.id)) + 1 : 1;
      } catch (err) {
        console.error(`Some error was founds ${err}`);
      }

      const myTask = {
        id,
        description: myPass,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      AllTasks.push(myTask);

      fs.writeFileSync(filePath, JSON.stringify(AllTasks, null, 2), "utf8");

      console.log("Data appended successfully.");
    } catch (err) {
      console.error("Error appending to file:", err);
    }
  }
}

function listAll(myCommand, myPass) {
  if (myCommand === "list" && myPass === "all") {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
}

function listByStatus(myCommand, myPass) {
  if (myCommand === "list" && myStatus.includes(myPass)) {
    console.log(AllTasks.filter((task) => task.status === myPass));
  }
}

function deleteAll(myCommand, myPass) {
  if (myCommand === "delete" && myPass === "all") {
    fs.writeFile(filePath, " ", (err) => {
      if (err) {
        console.error("Error clearing file:", err);
      } else {
        console.log("File cleared successfully.");
      }
    });
  }
}

function deleteByID(myCommand, myPass) {
  if (myCommand === "delete" && !Number.isNaN(myPass)) {
    const taskID = Number(myPass);
    const deleteTask = AllTasks.find((thatTask) => thatTask.id === taskID);

    if (!deleteTask) {
      console.log(`The task with this id: ${taskID} wasn't found`);
    } else {
      AllTasks.splice(AllTasks.indexOf(deleteTask), 1);

      fs.writeFileSync(filePath, JSON.stringify(AllTasks), "utf8");
    }
  }
}

function update(myCommand, myPass) {
  if (myCommand === "update" && !Number.isNaN(myPass) && myFormat[2]) {
    const myDescription = myFormat[2];
    const taskID = Number(myPass);
    const updateTask = AllTasks.find((thatTask) => thatTask.id === taskID);

    if (!updateTask) {
      console.log(`The task with this id: ${taskID} wasn't found`);
    } else {
      updateTask.description = myFormat[2];

      updateTask.updatedAt = new Date().toISOString;

      if (myFormat[3]) {
        const myNewStatus = myFormat[3];
        updateTask.status = myNewStatus;
      }

      fs.writeFileSync(filePath, JSON.stringify(AllTasks, null, 2), "utf8");
    }
  }
}

//console.log(AllTasks);
let navigate = -1;

while (navigate !== 0) {
  console.log(`
  --- Task Tracker CLI Menu ---
  1. View all tasks
  2. View tasks by status
  3. Add a new task
  4. Update a task by ID
  5. Delete a task by ID
  6. Delete ALL tasks
  0. Exit
  -----------------------------
  `);

  const input = prompt.question("Choose an option: ");
  navigate = Number(input);

  switch (navigate) {
    case 1:
      console.log("Showing tasks...");
      listAll(myCommand, myPass);
      break;
    case 2:
      const x = prompt.question("Enter status (todo, in-progress, done): ");
      listByStatus(myCommand, myPass);
      break;
    case 3:
      const a = prompt.question("Add a new task");
      add(myCommand);
      break;
    case 4:
      const y = prompt.question("Enter your update ");
      update(myCommand, myPass);
      break;
    case 5:
      const b = prompt.question("Enter your task ID you want to delete");
      deleteByID(myCommand, myPass);
      break;
    case 6:
      const c = prompt.question("Delete all tasks: ");
      deleteAll(myCommand, myPass);
      break;
    case 0:
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid option, try again.");
  }
}
