// Title: Passing Arguments (Expert)
// Goal: Pass data into the generator via .next(val).
// Input: val = yield; caller uses .next(5).
// Output: val inside generator becomes 5.

function* myFunction(){
    const val = yield;
    console.log(val)
}

const gen = myFunction();

gen.next();
gen.next(10);

//////////////////////////

function* mySum(){
    const a = yield("Enter first number: ");
    const b = yield("Enter second number:");

    return (a+b);
}
const calc = mySum();

console.log(calc.next().value); // "Enter first number"
console.log(calc.next(3).value); // "Enter second number"
console.log(calc.next(4).value);  