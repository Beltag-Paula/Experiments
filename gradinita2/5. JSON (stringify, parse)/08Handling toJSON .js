// Title: Handling toJSON (Expert)
// Goal: Add a toJSON method to a class/object to customize its serialization.
// Input: Class User with private fields, toJSON returns only public fields.
// Output: JSON string of public fields only.

const user = {
    name: 'Big Billy',
    age: '100',
    address: 'Earth',

    toJSON(){
        return this.name +' '+ this.address;
    }
}


const output = JSON.stringify(user);

console.log(output);

