/*
Why: JS is single-threaded
If we didn't write asynchronous code we would be blocking code.

Use cases for ansync code:
- Data traveling over a network (fecth)
- Reading a writing to files
- Import when async calling URLs (quite new feature)
- Interacting with a database
- Heavy calculations
- Encryption/Decryption

Basically anything that takes time (since we don't want to block and prevent other code from running).

How handle async code:
Solution 1: Callback functions. Native way of doing it in JS. Problem: risk of callback hell/pyramid of doom
Solution 2: Promises. Not better, just syntaxic sugar.
    Two states:
        - Pending
        - Fulfilled
            -Resolved, Rejected


We probably are going to have to wrap nodemailer in a promise
*/

new Promise((resolve, reject) => {
    try {
        throw Error
        resolve("Yay, resolved!")
    } catch(stackTracw) {
        reject("Nay, rejected")
    }   
})
.then(successMessage => console.log(successMessage)) //then handles the success case
.catch(errorMessage => console.log(errorMessage))

// addigment impliment a new Promise in a function called somethingGoodSomethingBad
//the function should return the promise
//bonus implement a 3 second delay in the promise to simulate async code

//permissified function
function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            try {
                resolve("Good")
            } catch (error) {
                reject("Bad")
            } 
        }, 3000)        
    })
}

console.log(somethingGoodSomethingBad())

//calling a function that returns a promisem then handles it
somethingGoodSomethingBad()
.then(good => console.log(good))
.catch(bad => console.log(bad))

function howAwesomeAmI(name) {
    return new Promise((resolve, reject) => {
        try {
            resolve(`${name} is very awesome!`)
        } catch (error) {
            reject("Something when wrong when handling promise :(")
        }
    })
}

howAwesomeAmI("Anders")
.then(answer => console.log(answer))
.catch(error => console.log(error))

//async await is not better or faster than promises. It's syntatix sugar for promises (which are syntastix sugar for callbacks)
//use whatever, but choose one so you are consistent

//get await to work:
//1. use .mjs
//2. pacakage.json specify type: module
//3. use async function

//const shouldBeGood = await somethingGoodSomethingBad()

async function asyncAwaitExample() {
    try {
        const shouldBeGood = await somethingGoodSomethingBad()
        console.log(shouldBeGood)
    } catch (error) {
        console.log(error)
    } 
 }

 asyncAwaitExample()

 /*
 //IIFE immediatly invoked function expression
 (async function iifeFunc() {
    try {
        const shouldBeGood = await greet()
        console.log(shouldBeGood)
    } catch (error) {
        console.log(error)
    } 
 })()
 */



 //only use promises when you need to use the result