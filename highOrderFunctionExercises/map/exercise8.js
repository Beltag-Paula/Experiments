// 8. Conditional Logic (Expert)
// Goal: If age > 18, set isAdult: true, else false. Return objects.
// Input: [{"age": 10}, {"age": 25}]
// Output: [{"age": 10, "isAdult": false}, {"age": 25, "isAdult": true}]

const input = [{ age: 10 }, { age: 25 }];

const output = input.map((x) => {
  return { age: x.age, isAdult: x.age < 18};
});

console.log(output);
