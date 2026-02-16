// Goal: Find user where profile.id is 5.
// INPUT:
// [
//  {
//  "profile": {
//  "id": 1
//  }
//  },
//  {
//  "profile": {
//  "id": 5
//  }
//  }
// ]
// OUTPUT:
// {
//  "profile": {
//  "id": 5
//  }
// }

const intput = [
  {
    profile: {
      id: 1,
    },
  },
  {
    profile: {
      id: 5,
    },
  },
];

const  output = intput.find((x)=>x.profile.id === 5)

console.log(output);
