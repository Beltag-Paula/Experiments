// Title: The Toggler (Intermediate)
// Goal: Create a function that cycles through a set of predefined states.
// Input: const toggle = makeToggler('Red', 'Green', 'Blue');
// Output: Successive calls return 'Red', then 'Green', then 'Blue', then 'Red'.

function makeToggler(...states){
    let index = 0;

    return function (){
        const state = states[index];
        index = (index+1)%states.length; //cycle back to 0
        return state;
    };
}

const toggle = makeToggler('Red', 'Green', 'Blue');

console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());