// 6. Search Term (Intermediate)
// Goal: Keep strings that contain 'pro' (case insensitive).
// Input: ["Profile", "Settings", "Product", "Home"]
// Output: ["Profile", "Product"]


const input =  ["Profile", "Settings", "Product", "Home"];

const output = input.filter((menu)=>menu.toLowerCase().includes("pro"));

console.log(output);