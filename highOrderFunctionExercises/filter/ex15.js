// Goal: Filter orders where price > 100 in deep object.
// INPUT:
// [
//  {
//  "ord": {
//  "data": {
//  "fin": {
//  "price": 50
//  }
//  }
//  }
//  },
//  {
//  "ord": {
//  "data": {
//  "fin": {
//  "price": 150
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "ord": {
//  "data": {
//  "fin": {
//  "price": 150
//  }
//  }
//  }
//  }

const input = [
  {
    ord: {
      data: {
        fin: {
          price: 50,
        },
      },
    },
  },
  {
    ord: {
      data: {
        fin: {
          price: 150,
        },
      },
    },
  },
];


const output = input.filter((x)=>x.ord.data.fin.price>100);

console.log(JSON.stringify(output,null,2));