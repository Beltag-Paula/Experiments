// Goal: Sort by task.meta.priority (High > Low).
// INPUT:
// [
//  {
//  "task": {
//  "meta": {
//  "priority": "Low"
//  }
//  }
//  },
//  {
//  "task": {
//  "meta": {
//  "priority": "High"
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "task": {
//  "meta": {
//  "priority": "High"
//  }
//  }
//  },
//  {
//  "task": {
//  "meta": {
//  "priority": "Low"
//  }
//  }
//  }
// ]

const input = [
  {
    task: {
      meta: {
        priority: "Low",
      },
    },
  },
  {
    task: {
      meta: {
        priority: "High",
      },
    },
  },
  {
    task: {
      meta: {
        priority: "Low",
      },
    },
  },
  {
    task: {
      meta: {
        priority: "High",
      },
    },
  },
  {
    task: {
      meta: {
        priority: "Low",
      },
    },
  },
  {
    task: {
      meta: {
        priority: "High",
      },
    },
  },
];

console.log(
    JSON.stringify(
        input.sort((x,y)=>x.task.meta.priority.localeCompare(y.task.meta.priority)),
        null,2
    )
)
