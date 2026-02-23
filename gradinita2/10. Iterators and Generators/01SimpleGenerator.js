// Title: Simple Generator
// Goal: Create a generator that yields 1, 2, 3.
// Input: function* gen() { ... }
// Output: g.next().value is 1, then 2, then 3.

function* generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);