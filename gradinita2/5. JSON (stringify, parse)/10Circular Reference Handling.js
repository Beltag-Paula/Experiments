// Title: Circular Reference Handling (Expert)
// Goal: safely stringify an object with circular references (requires custom logic or library concepts).
// Input: a = {}; a.self = a;
// Output: Error handling or a custom replacer that breaks the cycle (e.g., returns "[Circular]").

function safeStringify(obj){
    const trackMe = new WeakSet();

    return JSON.stringify(obj, function (key,value){
        if(typeof value === 'object' && value !== null){
            if (trackMe.has(value)){
                return "[Circular]";
            }
            trackMe.add(value);
        }
        return value;
    });
}


const a = {};
a.self = a;

console.log(safeStringify(a));