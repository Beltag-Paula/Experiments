// Title: For...of Loop
// Goal: Consume a generator.
// Input: Generator from #1.
// Output: Loop logs 1, 2, 3.

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = generator();

for(let x of gen){
    console.log(x);
}