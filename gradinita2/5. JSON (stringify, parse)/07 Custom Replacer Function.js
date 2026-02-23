// Title: Custom Replacer Function (Expert)
// Goal: Convert all string values to uppercase during serialization.
// Input: replacer function checks typeof value === 'string'.
// Output: JSON string with uppercase values.

const input = {x:"triangle", y:"square", z:"circle", a:"rectangle"};

function myFunction(key, value){
    console.log(key, value);
    if(typeof value ==='string'){
        return value.toUpperCase();
    }
    return value;
}

const output = JSON.stringify(input,myFunction);

console.log(output);