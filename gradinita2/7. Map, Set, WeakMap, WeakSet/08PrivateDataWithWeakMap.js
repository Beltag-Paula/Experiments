// Title: Private Data with WeakMap (Expert)
// Goal: Simulate private class properties.
// Input: A class using a module-level WeakMap to store internal state keyed by this.
// Output: Properties accessible only via class methods.

//emulating private members
const privateData = new WeakMap();

class Duelist {
  constructor(name, deck, secretID) {
    privateData.set(this, {
      id: secretID,
      loginCount: 0,
    });
    this.name = name; //public
  }

  getSecretID(){
    const data = privateData.get(this);
    return data.id;
  }

  incremenentLogin(){
    const data = privateData.get(this);
    data.loginCount++;
    console.log(`${this.name} has logged in ${data.loginCount} times`);
  }
}

const kaiba = new Duelist("Kaiba", "Blue-Eyes-White-Dragon", "secret12345");

console.log(kaiba.name); //"Kaiba"; visibile;
console.log(kaiba.id); //undefined; hidden;

console.log(kaiba.getSecretID()); //secret12345, visibile and accessible only via method getSecretID()

kaiba.incremenentLogin(); // Kaiba has logged in 1 times
kaiba.incremenentLogin(); // Kaiba has logged in 2 times

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

//Modern Alternative (ES2022+ Private Fields)
//If you're using modern JavaScript, you can use built-in private fields:

class Duelist2 {
  #id;
  #loginCount = 0;

  constructor(name, deck, secretID) {
    this.name = name;
    this.deck = deck;
    this.#id = secretID;
  }

  getSecretID() {
    return this.#id;
  }

  incrementLogin() {
    this.#loginCount++;
    console.log(`${this.name} has logged in ${this.#loginCount} times`);
  }
}