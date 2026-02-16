// 9. Pipeline (Expert)
// Goal: Run a value through an array of functions (f(x) = x+1, x*2). Start: 5.
// Input: f(x) = x+1, x*2)
// Output: 12

//(5+1) * 2 = 12

function plus1(x){
    return x+1;
}

function times2(x){
    return 2*x;
}

//const input = [plus1, times2];

const input = [(x)=>x+1,(x)=>2*x];

const output = input.reduce((myResult,x)=>x(myResult),5);

console.log(output); 
