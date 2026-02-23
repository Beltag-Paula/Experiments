// Title: Boolean Coercion
// Goal: Compare boolean true with number 1.
// Input: true == 1 vs true === 1
// Output: true, false


//strict equality, true is a boolean and 1 is a number, different types, therefore false
console.log(true === 1);


//loose equality, the boolean is converted into a number (true is 1 and false is 0), therefore this will give true
console.log(true == 1);