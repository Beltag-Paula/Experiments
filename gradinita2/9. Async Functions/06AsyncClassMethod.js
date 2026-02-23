// Title: Async Class Method (Intermediate)
// Goal: Use async/await in a class.
// Input: class API { async getData() { ... } }
// Output: Method returns a promise.

class Animal {
  name;
  age;
  species;
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
  async getData() {
    try {
      return await new Promise((resolve, reject) => {
        if (!this.species) {
          reject("No species was found");
        } else {
          resolve(`Hi! My name is ${this.name}, I am a ${this.species}`);
        }
      });
    } catch (err) {
      console.error("Error was found: " + err);
      return null;
    }
  }
}

const darwin = new Animal("Darwin", 10, "cat");
console.log(await darwin.getData());

const garfield = new Animal("Garfield", 30);
console.log(await garfield.getData());