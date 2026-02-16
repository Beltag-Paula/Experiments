// 9. Calculate Tax (Expert)
// Goal: Add a 'tax' property (10% of price) to each item.
// Input: [{"price": 100}, {"price": 50}]
// Output: [{"price": 100, "tax": 10}, {"price": 50, "tax": 5}]

const input = [{ price: 100 }, { price: 50 }];

const output = input.map((x)=>{
    return {price:x.price, tax:(x.price/10)};
});

console.log(output);