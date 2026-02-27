const myFormat = process.argv.slice(2);
//const myPrompt = require("readline-sync");
const fs = require("fs");

const filePath = "text.json";

const myFirstArg = myFormat[0];
const mySecondArg = myFormat[1];
const myThirdArg = myFormat[2];
const myFourthArg = myFormat[3];

const currentStatuses = ["todo", "in-progress", "done"];
let AllTasks = [];

try {
  AllTasks = JSON.parse(fs.readFileSync(filePath, "utf8"));
} catch {
  AllTasks = [];
}

function saveToFile(taskData) {
  fs.writeFileSync(filePath, JSON.stringify(taskData, null, 2));
}

function generateID() {
  return AllTasks.length > 0
    ? Math.max(...AllTasks.map((task) => task.id)) + 1
    : 1;
}

///// the menu /////
switch (myFirstArg) {
  case "add":
    try {
      if (!mySecondArg) {
        console.log("You didn't provide a description for your task");
        break;
      }

      const newTask = {
        id: generateID(),
        description: mySecondArg,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      AllTasks.push(newTask);
      saveToFile(AllTasks);
      console.log("New task was added sucessfully");
      break;
    } catch (err) {
      console.error("Something went wrong: " + err);
      break;
    }

  case "list":
    try {
      if (!mySecondArg) {
        console.log("You didn't provide a description for your task");
        break;
      }

      if (mySecondArg === "all") {
        console.log(JSON.stringify(AllTasks, null, 2));

        break;
      }

      if (currentStatuses.includes(mySecondArg)) {
        console.log(AllTasks.filter((task) => task.status === mySecondArg));
        break;
      }
    } catch (err) {
      console.error("Something went wrong: " + err);
      break;
    }

  case "delete":
    try {
      if (!mySecondArg) {
        console.log("You didn't provide a description for your task");
        break;
      }

      if (mySecondArg === "all") {
        saveToFile([]);
        console.log("All tasks deleted successfully");
        break;
      }

      if (!Number.isNaN(Number(mySecondArg))) {
        const taskID = Number(mySecondArg);
        if (!AllTasks.find((thatTask) => thatTask.id === taskID)) {
          console.log(`The task with this id: ${taskID} wasn't found`);
          break;
        } else {
          AllTasks = AllTasks.filter((task) => task.id !== taskID);
          saveToFile(AllTasks);
          console.log("Task deleted sucessfully");
          break;
        }
      }
    } catch (err) {
      console.error("Something went wrong: " + err);
      break;
    }

  case "update":
    try {
      if (!mySecondArg) {
        console.log(
          "You didn't provide the ID for the task you want to update",
        );
        break;
      }

      if (!Number.isNaN(Number(mySecondArg))) {
        const taskID = Number(mySecondArg);
        const updateFoundTask = AllTasks.find((task) => task.id === taskID);

        if (!updateFoundTask) {
          console.log(`The task with this id: ${taskID} wasn't found`);
          break;
        }

        //id remains the same,
        //2nd arg is the id,
        //3rd is the description
        //4th is the status
        //update always changes updated time by default

        if (!myThirdArg) {
          console.log("You didn't provide a description");
          break;
        }

        updateFoundTask.description = myThirdArg;

        if (myFourthArg && currentStatuses.includes(myFourthArg)) {
          updateFoundTask.status = myFourthArg;
        }

        updateFoundTask.updatedAt = new Date().toISOString();

        saveToFile(AllTasks);
        console.log("Task updated successfully");
        break;
      }
    } catch (err) {
      console.error("Something went wrong: " + err);
      break;
    }

  default:
    console.log(`
  ----------  Task Tracker CLI Menu -----
  1. View all tasks        -> list [all]
  2. View tasks by status  -> list [todo] / [in-progress] / done
  3. Add a new task        -> add [description of your task]
  4. Update a task by ID   -> update [id] [description] [status]
  5. Delete a task by ID   -> delete [id]
  6. Delete ALL tasks      -> delete [all]
  ---------------------------------------
  `);
}
