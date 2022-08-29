// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const result = Number(numberOne) + Number(numberTwo)
console.log(result)

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const total = Number(numberOne) + Number(numberTwo)
const totalString = total.toFixed(2) //I stringify it, I supposed this was ok because I only needed to display the result
console.log(totalString)
// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = ((one + two + three) / 3).toFixed(5)
console.log(average)



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"
const c = letters[2]
console.log(c)



// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const replacedFact = fact.replace("j", "J")
console.log(replacedFact)

// --------------------------------------



