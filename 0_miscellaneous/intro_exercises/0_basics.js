// --------------------------------------
// Variables, strings, numbers
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// Print out the following in the console:
// My first name is Anders and my last name is Latif
const message = "My first name is " + firstName + " and my last name is " + lastName
console.log(message)
console.log("My first name is", firstName, "and my last name is", lastName) //alternativ løsning

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2021";
const number = 1;

// Add the year plus the number
// The result should be 2022
// You cannot touch line 1 or 2
const newYear = parseInt(year) + number
const newYear1 = +year + number
const newYear2 = Number(year) + number
console.log(newYear)


// --------------------------------------
