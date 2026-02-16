// Goal: Count occurrences of status in meta.status.
// INPUT:
// [
//  {
//  "meta": {
//  "status": "ok"
//  }
//  },
//  {
//  "meta": {
//  "status": "fail"
//  }
//  },
//  {
//  "meta": {
//  "status": "ok"
//  }
//  }
// ]
// OUTPUT:
// {
//  "ok": 2,
//  "fail": 1
// }

const input = [
  {
    meta: {
      status: "ok",
    },
  },
  {
    meta: {
      status: "fail",
    },
  },
  {
    meta: {
      status: "ok",
    },
  },
];

const output = input.reduce((myResult, x) => {
  myResult[x.meta.status] = (myResult[x.meta.status] || 0) + 1;
  return myResult;
}, {});

console.log(output);
