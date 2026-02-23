// Title: Infinite Sequence (Intermediate)
// Goal: Generator for infinite ID creation.
// Input: while(true) { yield i++ }
// Output: Can call .next() forever to get unique integers.

function* infiniteIDcreation() {
  let i = 1;

  while (true) {
    yield `id${i++}`;
  }
}

const ids = infiniteIDcreation();

let i=1;
while (i <= 10) {
  console.log(ids.next().value);
  i++;
}
