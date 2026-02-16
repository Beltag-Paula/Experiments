// Goal: Create string 'City, Country' from deep address.
// INPUT:
// [
//  {
//  "user": {
//  "details": {
//  "addr": {
//  "city": "NY",
//  "country": "USA"
//  }
//  }
//  }
//  },
//  {
//  "user": {
//  "details": {
//  "addr": {
//  "city": "LDN",
//  "country": "UK"
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  "NY, USA",
//  "LDN, UK"
// ]

const input = [
  {
    user: {
      details: {
        addr: {
          city: "NY",
          country: "USA",
        },
      },
    },
  },
  {
    user: {
      details: {
        addr: {
          city: "LDN",
          country: "UK",
        },
      },
    },
  },
];

const ouput = input.map((x) => `${x.user.details.addr.city}, ${x.user.details.addr.country}`);
