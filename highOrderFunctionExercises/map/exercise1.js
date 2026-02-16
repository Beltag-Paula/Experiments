// 1. Basic Extraction (Beginner)
// Goal: Extract an array of just the product names.
// Input: [{"id": 1, "name": "Pen"}, {"id": 2, "name": "Pencil"}]
// Output: ["Pen", "Pencil"]

const productList = [
  { id: 1, name: "Pen" },
  { id: 2, name: "Pencil" },
];
function callbackFn(product) {
  return { porecla: product.name };
}
//const basicExtractor = productList.map(callbackFn);

const returnedValues = [callbackFn(productList[0]), callbackFn(productList[1])];

//console.log(returnedValues);

const returnedValues2 = [];

for (let i = 0; i < productList.length; i++) {
  returnedValues2.push(callbackFn(productList[i]));
}
console.log(returnedValues2);
