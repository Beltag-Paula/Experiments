// 5. Object Reformatter (Intermediate)
// Goal: Rename keys: 'n' to 'name', 'a' to 'age'.
// Input: [{"n": "Ali", "a": 20}]
// Output: [{"name": "Ali", "age": 20}]

const input = [{ n: "Ali", a: 20 }];

const output = input.map((x) => {
  return { name: x.n, age: x.a };
});

console.log(output);
