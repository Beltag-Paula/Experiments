// Goal: Sort: items with deep 'verified':true come first.
// INPUT:
// [
//   {
//     d: {
//       d: {
//         d: {
//           d: {
//             d: {
//               verified: false,
//             },
//           },
//         },
//       },
//     },
//   },
//   {
//     d: {
//       d: {
//         d: {
//           d: {
//             d: {
//               verified: true,
//             },
//           },
//         },
//       },
//     },
//   },
// ];
// OUTPUT:
// [
//   {
//     d: {
//       d: {
//         d: {
//           d: {
//             d: {
//               verified: true,
//             },
//           },
//         },
//       },
//     },
//   },
//   {
//     d: {
//       d: {
//         d: {
//           d: {
//             d: {
//               verified: false,
//             },
//           },
//         },
//       },
//     },
//   },
// ];


const input = [
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              verified: false,
            },
          },
        },
      },
    },
  },
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              verified: true,
            },
          },
        },
      },
    },
  },
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              verified: false,
            },
          },
        },
      },
    },
  },
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              verified: true,
            },
          },
        },
      },
    },
  },
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              verified: false,
            },
          },
        },
      },
    },
  },
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              verified: true,
            },
          },
        },
      },
    },
  },
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              verified: false,
            },
          },
        },
      },
    },
  },
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              verified: true,
            },
          },
        },
      },
    },
  },
];

console.log(
  JSON.stringify(
    input.sort((x, y) => y.d.d.d.d.d.verified - x.d.d.d.d.d.verified),
    null,
    2,
  ),
);