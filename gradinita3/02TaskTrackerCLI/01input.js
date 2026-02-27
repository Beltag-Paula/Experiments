const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });
const filePath = "text2.json";

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


function add(description) {
  if (!description) {
    console.log("You didn't provide a description for your task");
    return;
  }

  const newTask = {
    id: generateID(),
    description: description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  AllTasks.push(newTask);
  saveToFile(AllTasks);
  console.log("New task was added successfully");
}


function listAll() {
  if (AllTasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log(JSON.stringify(AllTasks, null, 2));
  }
}


function listByStatus(status) {
  if (!currentStatuses.includes(status)) {
    console.log("Invalid status. Choose todo, in-progress, or done.");
    return;
  }
  const filtered = AllTasks.filter((task) => task.status === status);
  if (filtered.length === 0) {
    console.log(`No tasks with status "${status}"`);
  } else {
    console.log(JSON.stringify(filtered, null, 2));
  }
}

function deleteAll() {
  AllTasks = [];
  saveToFile(AllTasks);
  console.log("All tasks deleted successfully");
}


function deleteByID(taskID) {
  const id = Number(taskID);
  if (isNaN(id)) {
    console.log("Invalid ID");
    return;
  }

  const task = AllTasks.find((t) => t.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found`);
    return;
  }

  AllTasks = AllTasks.filter((t) => t.id !== id);
  saveToFile(AllTasks);
  console.log("Task deleted successfully");
}

function update(taskID, description, status) {
  const id = Number(taskID);
  if (isNaN(id)) {
    console.log("Invalid ID");
    return;
  }

  const task = AllTasks.find((t) => t.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found`);
    return;
  }

  if (description) task.description = description;
  if (status && currentStatuses.includes(status)) task.status = status;

  task.updatedAt = new Date().toISOString();
  saveToFile(AllTasks);
  console.log("Task updated successfully");
}


let navigate = -1;

while (navigate !== 0) {
  console.log(`
----------  Task Tracker CLI Menu -----
1. View all tasks        -> list all
2. View tasks by status  -> list [todo] / [in-progress] / [done]
3. Add a new task        -> add [description]
4. Update a task by ID   -> update [id] [description] [status]
5. Delete a task by ID   -> delete [id]
6. Delete ALL tasks      -> delete all
0. Exit
---------------------------------------
`);

  navigate = Number(prompt("Choose an option: "));

  switch (navigate) {
    case 1:
      listAll();
      break;
    case 2:
      const status = prompt("Enter status (todo, in-progress, done): ");
      listByStatus(status);
      break;
    case 3:
      const desc = prompt("Enter task description: ");
      add(desc);
      break;
    case 4:
      const updateID = prompt("Enter task ID to update: ");
      const updateDesc = prompt(
        "Enter new description (leave blank to keep same): ",
      );
      const updateStatus = prompt(
        "Enter new status (todo, in-progress, done) or leave blank: ",
      );
      update(updateID, updateDesc, updateStatus);
      break;
    case 5:
      const delID = prompt("Enter task ID to delete: ");
      deleteByID(delID);
      break;
    case 6:
      const confirm = prompt(
        "Are you sure you want to delete ALL tasks? (yes/no): ",
      );
      if (confirm.toLowerCase() === "yes") deleteAll();
      else console.log("Canceled");
      break;
    case 0:
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid option, try again.");
  }
}
