// Title: Object to Map Conversion (Intermediate)
// Goal: Convert Object to Map.
// Input: obj = {x:10}; new Map(Object.entries(obj))
// Output: Map {'x' => 10}

const obj = { x: 10 };

const objConvertedToMap = new Map(Object.entries(obj));

console.log(objConvertedToMap);


//bonus: map to object:
const mapConvertedToObject = Object.fromEntries(objConvertedToMap);
console.log(mapConvertedToObject);