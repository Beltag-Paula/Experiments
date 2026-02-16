// 9. Complex Nested Filter (Expert)
// Goal: Keep users who have 'admin' in their roles array.
// Input: [{"u": "A", "roles": ["user"]}, {"u": "B", "roles": ["user", "admin"]}]
// Output: [{"u": "B", "roles": ["user", "admin"]}]

const input = [
  { u: "A", roles: ["user"] },
  { u: "B", roles: ["user", "admin"] },
];


const output = input.filter((user)=>{

    return user.roles.includes("admin");
})

console.log(output);