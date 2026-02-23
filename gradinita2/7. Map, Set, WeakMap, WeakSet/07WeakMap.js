// Title: WeakMap Basics (Expert)
// Goal: Store metadata for a DOM element (or object) without preventing GC.
// Input: wm = new WeakMap(); wm.set(obj, "meta")
// Output: wm.get(obj) is "meta".

const wm = new WeakMap();
const obj = {};
wm.set(obj, "meta");

console.log(wm.get(obj));