// Title: DOM Manipulation (Expert)
// Goal: Select an element that might not exist and access innerHTML.
// Input: document.querySelector('.missing-class')?.innerHTML
// Output: undefined

// This is one of the most common real-world uses for optional chaining. 
// Before ?. existed, frontend developers had to write if (element) checks every single time 
// they touched the DOM to prevent the entire site from breaking 
// if a class name was changed or a component didn't load.

// querySelector returns null if the element isn't found
//THIS WORKS ONLY IN BROWSER!
// const content = document.querySelector('.missing-class')?.innerHTML;

// console.log(content); // Output: undefined

// THIS IN Node
const document = {
    querySelector: (selector) => {
        console.log(`Searching for: ${selector}`);
        return null; // Simulate element not found
    }
};

const content = document.querySelector('.missing-class')?.innerHTML;

console.log(content); // Output: undefined (No error!)