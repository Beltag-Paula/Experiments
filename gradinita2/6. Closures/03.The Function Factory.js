// Title: The Function Factory
// Goal: Generate a specialized function based on an initial argument.
// Input: const addFive = createAdder(5);
// Output: addFive(10) returns 15.


function createAdder(base){
    return function (number){
        return base+number;
    }
}

const addFive = createAdder(5);

console.log(addFive(10));
console.log(addFive(3));

