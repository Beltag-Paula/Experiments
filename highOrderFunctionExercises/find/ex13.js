// Goal: Find config where settings.display.theme is 'dark'.
// INPUT:
// [
//  { "settings": {
//  "display": {
//  "theme": "light"
//  }
//  }
//  },
//  {
//  "settings": {
//  "display": {
//  "theme": "dark"
//  }
//  }
//  }
// ]
// OUTPUT:
// {
//  "settings": {
//  "display": {
//  "theme": "dark"
//  }
//  }
// }

const input = [
  {
    settings: {
      display: {
        theme: "light",
      },
    },
  },
  {
    settings: {
      display: {
        theme: "dark",
      },
    },
  },
];

const output = input.find((x)=>{return x.settings.display.theme === "dark"});

console.log(output);