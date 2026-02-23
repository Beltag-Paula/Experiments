// Title: Nested Templates (Intermediate)
// Goal: Nest a template literal inside another.
// Input: users = [{name:'A'}]; Template iterating to create list items <li>.
// Output: "<ul><li>A</li></ul>"

// const users = [{ name: "A" }];

// console.log(`<ul><li>${users[0].name}</li></ul>`);

const users = [{ name: "A" }, { name: "B" }];

// The outer backticks wrap the <ul>
// The inner backticks (inside .map) wrap the <li>
const list = `<ul>
  ${users.map((user) => `<li>${user.name}</li>`).join("")}
</ul>`;

console.log(list);