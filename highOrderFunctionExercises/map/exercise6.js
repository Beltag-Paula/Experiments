// 6. Boolean Flip (Intermediate)
// Goal: Invert the 'completed' status of tasks.
// Input: [{"id": 1, "completed": true}, {"id": 2, "completed": false}]
// Output: [{"id": 1, "completed": false}, {"id": 2, "completed": true}]

const input = [
  { id: 1, completed: true },
  { id: 2, completed: false },
];

const output = input.map(({id,completed})=>{return {id:id,completed:!completed}})

console.log(output);

// function myFunc(input){
//     return !input[1].completed;
// }
// console.log(myFunc(input));