// 3. Fahrenheit to Celsius (Beginner)
// Goal: Convert temperatures: (F - 32) * 5/9.
// Input: [32, 68, 100]
// Output: [0, 20, 37.7]

const myTempF = [32, 68, 100];

const myTempC = myTempF.map((x) => ((x - 32) * 5/9).toFixed(2));

console.log(myTempC);