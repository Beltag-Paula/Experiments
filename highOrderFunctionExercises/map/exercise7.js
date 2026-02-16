// 7. Extract Nested Data (Intermediate)
// Goal: Map to an array of just the city names from address objects.
// Input: [{"user": "A", "addr": {"city": "NY"}}, {"user": "B", "addr": {"city": "LA"}}]
// Output: ["NY", "LA"]

const input = [
  { user: "A", addr: { city: "NY" } },
  { user: "B", addr: { city: "LA" } },
];

const output = input.map((x)=> x.addr.city);
console.log(output);