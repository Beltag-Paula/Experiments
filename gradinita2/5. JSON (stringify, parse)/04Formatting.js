// Title: Formatting (Intermediate)
// Goal: Pretty print JSON with indentation.
// Input: stringify(obj, null, 2)
// Output: Multi-line string with 2-space indents.



const input = [
  {
    mod: "A",
    deps: {
      d1: {
        deps: {
          d2: {
            vulnerable: true,
          },
        },
      },
    },
  },
  {
    mod: "B",
    deps: {
      d1: {
        deps: {
          d2: {
            vulnerable: false,
          },
        },
      },
    },
  },
  {
    mod: "A",
    deps: {
      d1: {
        deps: {
          d2: {},
        },
      },
    },
  },
];

console.log(JSON.stringify(input, null, 2));
