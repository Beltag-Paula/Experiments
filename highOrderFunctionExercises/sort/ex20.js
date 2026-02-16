// Goal: Sort by deep Category, then deep Price.
// INPUT:
const input = [
  {
    d: {
      cat: "A",
      p: 100,
    },
  },
  {
    d: {
      cat: "C",
      p: 10,
    },
  },
  {
    d: {
      cat: "B",
      p: 50,
    },
  },
];

console.log(
    JSON.stringify(
        input.sort((x,y)=>(x.d.cat.localeCompare(y.d.cat))+(y.d.p-x.d.p))
    ,null,2
));
