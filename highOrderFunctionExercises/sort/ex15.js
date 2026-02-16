// Goal: Sort by (stats.wins - stats.losses).
// INPUT:
// [
//  {
//  "stats": {
//  "wins": 10,
//  "losses": 5
//  }
//  },
//  {
//  "stats": {
//  "wins": 20,
//  "losses": 2
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "stats": {
//  "wins": 20,
//  "losses": 2
//  }
// },
//  {
//  "stats": {
//  "wins": 10,
//  "losses": 5
//  }
//  }
// ]

const input = [
  {
    stats: {
      wins: 10,
      losses: 0,
    },
  },
  {
    stats: {
      wins: 3,
      losses: 7,
    },
  },
  {
    stats: {
      wins: 5,
      losses: 5,
    },
  },
  {
    stats: {
      wins: 4,
      losses: 6,
    },
  },
];

input.sort((x,y)=>y.stats.wins-x.stats.wins+x.stats.losses-y.stats.losses);

console.log(JSON.stringify(input,null,2));