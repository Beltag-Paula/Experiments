// 3. ID Search (Beginner)
// Goal: Find user with ID 3.
// Input: [{"id": 1}, {"id": 2}, {"id": 3}]
// Output: {"id": 3}

const input = [{"id": 1}, {"id": 2}, {"id": 3}];

const output = input.find((x)=>x.id===3);

console.log(output);