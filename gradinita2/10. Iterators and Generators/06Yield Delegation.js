// Title: Yield Delegation (Intermediate)
// Goal: Use yield* to call another generator.
// Input: genA yields 1, calls yield* genB, yields 3.
// Output: Sequence: 1, (values from B), 3.

function* A() {
  yield 1;
  yield* B();
  yield 2;
}

function* B() {
  yield 100000;
}

const gen = A();

for (const x of gen) {
  console.log(x);
}
