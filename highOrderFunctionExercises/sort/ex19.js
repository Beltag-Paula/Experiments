// Goal: Sort by deep version string 'v1.0' vs 'v2.0'.
// INPUT:
const input = [
  {
    v: {
      v: {
        v: {
          v: {
            v: {
              ver: "v2.0",
            },
          },
        },
      },
    },
  },
  {
    v: {
      v: {
        v: {
          v: {
            v: {
              ver: "v1.0",
            },
          },
        },
      },
    },
  },
  {
    v: {
      v: {
        v: {
          v: {
            v: {
              ver: "v6.0",
            },
          },
        },
      },
    },
  },
  {
    v: {
      v: {
        v: {
          v: {
            v: {
              ver: "v0.0",
            },
          },
        },
      },
    },
  },
  {
    v: {
      v: {
        v: {
          v: {
            v: {
              ver: "v8.0",
            },
          },
        },
      },
    },
  },
  {
    v: {
      v: {
        v: {
          v: {
            v: {
              ver: "v4.0",
            },
          },
        },
      },
    },
  },
];

console.log(
  JSON.stringify(
    input.sort((x, y) => x.v.v.v.v.v.ver.localeCompare(y.v.v.v.v.v.ver)),
    null,
    2,
  ),
);