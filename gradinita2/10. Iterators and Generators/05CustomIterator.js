// Title: Custom Iterator (Intermediate)
// Goal: Make a class iterable.
// Input: Class with [Symbol.iterator] method.
// Output: Can be used in for...of.

class MyCounter {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  //iterator
  [Symbol.iterator]() {
    let x = this.start;
    let y = this.end;

    return {
      next() {
        if (x <= y) {
          return { value: x++, done: false };
        }
        return { done: true };
      },
    };
  }

}

const counterIterator = new MyCounter(1, 4);

for (const num of counterIterator) {
  console.log(num);
}


// class Counter {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   *[Symbol.iterator]() {
//     for (let i = this.start; i <= this.end; i++) {
//       yield i;
//     }
//   }
// }