// 7. Array to Object (Intermediate)
// Goal: Map ID to Name: [{'id':1, 'n':'A'}] -> {1: 'A'}.
// Input: [{"id": 1, "n": "A"}, {"id": 2, "n": "B"}]
// Output: {"1": "A", "2": "B"}

const input = [
  { id: 1, n: "A" },
  { id: 2, n: "B" },
];

const output = input.reduce((myResult, x) => {
  myResult[x.id] = x.n;
  return myResult;
}, {});

console.log(output);
