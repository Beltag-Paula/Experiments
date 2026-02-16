// 4. Active Users (Intermediate)
// Goal: Filter users where isActive is true.
// Input: [{"id": 1, "isActive": true}, {"id": 2, "isActive": false}]
// Output: [{"id": 1, "isActive": true}]

const input = [
  { id: 0, isActive: true },
  { id: 1, isActive: false },
];

const output = input.filter((user)=>user.isActive)
//!!!!!!!!!!! const output = input.filter((user) => user.id>-1); truthy and falsy!!!!!!!
console.log(output);