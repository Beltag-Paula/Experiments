// INPUT:
// [
//  {
//  "deps": {
//  "dev": {
//  "core": {
//  "version": "0.9"
//  }
//  }
//  }
//  },
//  {
//  "deps": {
//  "dev": {
//  "core": {
//  "version": "1.0.0"
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// {
//  "deps": {
//  "dev": {
//  "core": {
//  "version": "1.0.0"
//  }
//  }
//  }
// }

const input = [
  {
    deps: {
      dev: {
        core: {
          version: "0.9",
        },
      },
    },
  },
  {
    deps: {
      dev: {
        core: {
          version: "1.0.0",
        },
      },
    },
  },
];

const output = input.find((x)=>x.deps.dev.core.version === "1.0.0");

console.log(JSON.stringify(output,null,2));

