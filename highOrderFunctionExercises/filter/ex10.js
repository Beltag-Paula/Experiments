// 10. Date Range (Expert)
// Goal: Keep events occurring in 2024.
// Input: [{"d": "2023-12-31"}, {"d": "2024-01-01"}, {"d": "2025-01-01"}]
// Output: [{"d": "2024-01-01"}]

const input = [
    { d: "2023-12-31" }, 
    { d: "2024-01-01" }, 
    { d: "2025-01-01" }
];


const output = input.filter((date)=>date.d.includes("2024"));

console.log(output);