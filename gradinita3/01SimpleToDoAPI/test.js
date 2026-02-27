// 1. Simple To-Do API
//     • What: Create a REST API to add, view, update, and delete tasks.
//     • Skills: Express routes, request/response handling, array-based storage.
//     • Stretch: Add filtering by status (completed/not completed).

const express = require("express");
const { resolve } = require("node:dns");
const { request } = require("node:http");
const app = express();
const PORT = 8000;

app.use(express.json());

const myTasks = [];

////////////////////////////////////////////////////////////////////////////

//view
app.get("/", (request, response) => {
  response.send(myTasks);
});

//filtering view by status
app.get('/:completion', (request, response)=>{
    if(myTasks.length === 0){
        response.status(400).json({message:"There are no tasks"})
    }
    else{
    myTasks.sort((x,y)=>y.completed-x.completed);
    response.send(myTasks);
}
})

////////////////////////////////////////////////////////////////////////////

//add
app.post("/", (request, response) => {
  const { name,completed } = request.body;
  const id = myTasks.length + 1;
  const newTask = {
    id,
    name,
    completed,
    createdAt: new Date().toISOString(),
  };

  myTasks.push(newTask);
  response
    .status(200)
    .json({ message: "Task was sucessfully created", task: newTask });
});

////////////////////////////////////////////////////////////////////////////

//update
app.patch("/:id", (request, response) => {
  const taskWithThatID = request.params.id;
  console.log(taskWithThatID);
  const findThatTask = myTasks.find(
    (task) => task.id === parseInt(taskWithThatID),
  );

  //if it doesn't exists send back a response
  if (!findThatTask) {
    response
      .status(400)
      .json({ message: "Could not find the task with this id" });
  } else {
    const toPatch = request.body;

    const newTask = {
      ...findThatTask,
      ...toPatch,
    };

    const oldIndexOftask = myTasks.indexOf(findThatTask);
    // deletes from index, amount, inserts new elements at that index
    myTasks.splice(oldIndexOftask, 1, newTask);

    response.status(200).json(findThatTask);
  }
});

////////////////////////////////////////////////////////////////////////////

//as the name says, delete
app.delete("/:id", (request, response) => {
  const taskWithThatID = request.params.id;
  const findThatTask = myTasks.find(
    (task) => task.id === parseInt(taskWithThatID),
  );

  if (!findThatTask) {
    response
      .status(400)
      .json({ message: "Could not find the task with this id" });
  } else {
    const oldIndexOftask = myTasks.indexOf(findThatTask);
    myTasks.splice(oldIndexOftask, 1);
    response
      .status(200)
      .json({ message: `Task ${taskWithThatID} was deleted sucessfully` });
  }
});


////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
