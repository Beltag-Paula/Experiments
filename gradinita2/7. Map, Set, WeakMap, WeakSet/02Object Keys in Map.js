// Title: Object Keys in Map
// Goal: Use an object as a Map key.
// Input: k = {id:1}; m.set(k, 'data')
// Output: m.get(k) retrieves 'data'.

const m = new Map();

const k = { id: 1 };

m.set(k, "data");

console.log(m.get(k));

//Real Life Application:
// we have 10 million user, and only one is admin
// if you want to know who is an admin, you have to add a property like user.isAdmin()
// but a malicious script can find it and change  it into false or true
// for that we use Map()

const user1 = { name: "Alice", id: 1 };
const user2 = { name: "Bob", id: 2 };
const user3 = { name: "Lily", id: 3 };
const user4 = { name: "Billy", id: 4 };
const user5 = { name: "Kiki", id: 5 };
const user6 = { name: "Tiki", id: 6 };
//....

const privateAdminList = new Map();

privateAdminList.set(user1, "Level_99_Access");

//Alice doesn't have an isAdmin property on her, she looks like any other user
console.log(user1.isAdmin) //undefined, Secret

if(privateAdminList.has(user1)){
    console.log("Access Granted for "+user1.name)
}