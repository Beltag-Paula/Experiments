// Title: Try/Catch Block
// Goal: Handle rejection in async/await.
// Input: Await a rejected promise inside try.
// Output: catch block executes.

async function myFunction(){
    let x = 3;

    try{
        const myPromise = await new Promise((resolve,reject)=>{
            if(x===2){resolve("The value is correct:"+x)}
            else{reject("The value is incorrect: It should be: "+x)}
        })

        return myPromise;
    }
    catch (err){
        console.error('There was an error: '+err);
        return null;
    }
}

const myResult = await myFunction();

console.log(myResult);