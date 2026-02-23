// Title: WeakSet Use Case (Expert)
// Goal: Track "visited" objects in a recursive traversal to avoid infinite loops.
// Input: Nested object structure with cycles.
// Output: Traversal completes without crashing by checking visited.has(node).

//see Detecting circular references from
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

const visited = new WeakSet();

const alice = {name:"Alice"};
const bob = {name: "Bob"};

alice.friend = bob;
bob.friend = alice;

function trackVisited(person){
    // 1 check if person is in visited
    if(visited.has(person)){
        console.log("Stop, I've already seen "+person.name);
        return;
    }

    //2 if not add it to visited
    visited.add(person);

    //3 send this console log
    console.log('Hi!,'+person.name+ " nice to see you");

    //4 move to next person that hasn't been visited
    if(person.friend){
        trackVisited(person.friend);
    }
}

trackVisited(alice);