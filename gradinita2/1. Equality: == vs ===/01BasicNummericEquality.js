// Goal: Understand type coercion vs. strict equality.
// Title: Basic Numeric Equality
// Goal: Compare a number and a string representation.
// Input: 5 == "5" vs 5 === "5"

//! === idenity operator, ! == equality operator

//false -this is strict equality, in this case 5 is a number and "5" is a string
console.log(5 === "5"); 

//true- this is lower equality, JS will convert the string "5" into a number so that 
//  it will give true 
console.log(5 == "5"); //true
