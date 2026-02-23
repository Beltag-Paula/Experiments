// Title: Config Merger (Expert)
// Goal: Function that merges user config with default, allowing 0 timeouts.
// Input: userConfig = {timeout: 0}; final = userConfig.timeout ?? 5000
// Output: 0

const userConfig = {timeout: 0};

const final = userConfig.timeout ?? 5000;

console.log(final);