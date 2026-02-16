// Goal: Find item with x=10 and y=20.
// Input: [{"x": 10, "y": 5}, {"x": 10, "y": 20}]
// Output: {"x": 10, "y": 20}

const input = [{"x": 10, "y": 5}, {"x": 10, "y": 20}];

const output = input.find((cordinates) => cordinates.x ===10 && cordinates.y===20);

console.log(output);