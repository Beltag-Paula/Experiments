// 8. Group By (Expert)
// Goal: Group people by age.
// Input: [{"n": "A", "age": 20}, {"n": "B", "age": 20}, {"n": "C", "age": 21}]
// Output: {"20": [{"n": "A", "age": 20}, {"n": "B", "age": 20}], "21": [{"n": "C", "age":21}]}

const input = [
  { n: "A", age: 20 },
  { n: "B", age: 20 },
  { n: "C", age: 21 },
];

const output = input.reduce((myResult, x) => {
  const age = x.age;
  if (!myResult[age]) {
    myResult[age] = [];
  }
  myResult[age].push(x);
  return myResult;
}, {});

console.log(output);
