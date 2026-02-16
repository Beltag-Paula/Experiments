// 10. Remove Duplicates (Expert)
// Goal: Reduce to unique values.
// Input: [1, 2, 2, 3, 3, 3]
// Output: [1, 2, 3]

const input = [1, 2, 2, 3, 3, 3];

const output = input.reduce((myArray, x) => {
    const number = x
    if(!myArray[number] && myArray[number]===myArray[number-1]){
        myArray.push(number);
    }
    return myArray;
}, []);

console.log(output);
