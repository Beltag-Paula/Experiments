// Title: The Null/Undefined Trap
// Goal: Check loose equality between null and undefined.
// Input: null == undefined vs null === undefined
// Output: true, false

// console.log(null === undefined); //false

// console.log(null == undefined); //true

const myNumber = Math.random();

let myVar;
if (myNumber > 0.3 && myNumber <= 0.5) {
  myVar = 0.4;
}
else if (myNumber >= 0.6 && myNumber < 0.8) {
  myVar = 0.7;
}
else if (myNumber >= 0.8) {
  myVar = 0.9;
}
else if(myNumber<=0.3){
    myVar=null;
}


console.log(myVar);