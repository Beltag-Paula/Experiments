// Goal: Sort alphabetically by profile.personal.name.
// INPUT:
// [
//  {
//  "profile": {
//  "personal": {
//  "name": "B"
//  }
//  }
//  },
//  {
//  "profile": {
//  "personal": {
//  "name": "A"
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "profile": {
//  "personal": {
//  "name": "A"
//  }
//  }
//  },
//  {
//  "profile": {
//  "personal": {
//  "name": "B"
//  }
//  }
//  }
// ]

const input = [
  {
    profile: {
      personal: {
        name: "B",
      },
    },
  },
  {
    profile: {
      personal: {
        name: "A",
      },
    },
  },
  {
    profile: {
      personal: {
        name: "Z",
      },
    },
  },
  {
    profile: {
      personal: {
        name: "E",
      },
    },
  },
  {
    profile: {
      personal: {
        name: "G",
      },
    },
  },
  {
    profile: {
      personal: {
        name: "Q",
      },
    },
  },
  {
    profile: {
      personal: {
        name: "W",
      },
    },
  },
  {
    profile: {
      personal: {
        name: "P",
      },
    },
  },
];

console.log(
  JSON.stringify(
    input.sort((x, y) =>
      x.profile.personal.name.localeCompare(y.profile.personal.name),
    ),
    null,
    2,
  ),
);

