// Goal: Filter where meta.active is true.
// INPUT:
// [
//  {
//  "meta": {
//  "active": true
//  }
//  },
//  {
//  "meta": {
//  "active": false
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "meta": {
//  "active": true
//  }
//  }

const input = [
  {
    meta: {
      active: true,
    },
  },
  {
    meta: {
      active: false,
    },
  },
];

const output = input.filter((x)=>x.meta.active);

console.log(output);
