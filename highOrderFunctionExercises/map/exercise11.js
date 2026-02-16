// 1. Extract Nested Email (Nesting Level: 2)
// Goal: Extract email from profile object.
// INPUT:
// [
//  {
//  "id": 1,
//  "profile": {
//  "email": "a@a.com"
//  }
//  },
//  {
//  "id": 2,
//  "profile": {
//  "email": "b@b.com"
//  }
//  }
// ]
// OUTPUT:
// [
//  "a@a.com",
//  "b@b.com"
// ]

const myInput = [
  {
    id: 1,
    profile: {
      email: "a@a.com",
    },
  },
  {
    id: 2,
    profile: {
      email: "b@b.com",
    },
  },
];


const myOutput = myInput.map(
    (x)=>{
        return x.profile.email;
    }
)

console.log(myOutput);