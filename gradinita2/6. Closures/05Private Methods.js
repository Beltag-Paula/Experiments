// Title: Private Methods (Intermediate)
// Goal: Use an object to expose specific ways to manipulate a hidden variable.
// Input: const wallet = createWallet(100); with methods add(amt) and check().
// Output: Attempting to log wallet.balance returns undefined, but wallet.check() returns the current total.

function createWallet(initialMoney){
    let balance = initialMoney;
    return {
      add(amount) {
        balance += amount;
        return `Added ${amount}. New balance: ${balance}`;
      },
      withdraw(amount) {
        balance -= amount;
        return `Withdrawn ${amount}. New balance: ${balance}`;
      },
      check() {
        return `Your balance: ${balance}`;
      },
    };
}

const myWallet = createWallet(100);

console.log(myWallet.balance);
console.log(myWallet.check());

console.log(myWallet.add(200));
console.log(myWallet.check());

console.log(myWallet.withdraw(50));
console.log(myWallet.check());