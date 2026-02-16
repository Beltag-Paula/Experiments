// 10. Custom Order (Expert)
// Goal: Sort by status priority: 'Active' > 'Pending' > 'Closed'.
// Input: ["Closed", "Active", "Pending"]
// Output: ["Active", "Pending", "Closed"]

const input = ["Closed", "Active", "Pending"];
const statusOrder = ["Active", "Pending", "Closed"];

const output = input.sort(
  (a, b) => statusOrder.indexOf(a) - statusOrder.indexOf(b),
);

console.log(output);