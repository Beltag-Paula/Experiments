// Title: Basic Rejection
// Goal: Handle a promise rejection.
// Input: Promise.reject("Fail")
// Output: .catch(err => err) is "Fail"

Promise.reject("Fail").catch(err=>console.log(err));