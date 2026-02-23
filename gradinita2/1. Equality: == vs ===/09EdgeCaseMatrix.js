// Title: Edge Case Matrix (Expert)
// Goal: Compare an array with a string containing a comma.
// Input: [1,2] == "1,2"
// Output: true


//when using "==" JS performs implicit type conversion,
// so the array [1,2] is converted to a primitive, array convert strings via .toString()
// so the [1,2].toString() -> "1,2"
console.log([1,2]=="1,2"); //true

//using "===" does not coerce types;
//One is Onject (array), the other is a string
//console.log([1, 2] === "1,2");