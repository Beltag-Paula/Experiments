// Title: Spread Syntax
// Goal: Expand a generator into an array.
// Input: [...gen()]
// Output: [1, 2, 3]

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = [...generator()];

for(const x of gen){
    console.log(x);
}

console.log(gen);

//console.log(gen.map((x)=>console.log(x)));