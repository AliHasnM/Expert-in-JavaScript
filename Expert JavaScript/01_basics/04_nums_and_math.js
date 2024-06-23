const score = 400;
console.log(score);

// Number Object Creation
const balance = new Number(100);
console.log(balance); // Creating a number object

// Number Methods
console.log(balance.toString().length); // Converts number to string and gets length
console.log(balance.toFixed(1)); // Formats number to 1 decimal place
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // Formats number to specified length

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // Formats number according to Indian locale

// Math Methods
console.log(Math.abs(-4)); // return Absolute value of -4
console.log(Math.round(4.6)); // Rounds 4.6 to 5
console.log(Math.ceil(4.2)); // Rounds 4.2 up to 5
console.log(Math.floor(4.9)); // Rounds 4.9 down to 4
console.log(Math.min(4, 3, 6, 8)); // Minimum value among 4, 3, 6, 8
console.log(Math.max(4, 3, 6, 8)); // Maximum value among 4, 3, 6, 8

// Random Number Generation
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 10 + 1); // Random number between 1 and 11
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between 10 and 20

/*
***** NOTES *****
(1) Number Methods:
    toString(): Converts number to string
    toFixed(): Formats number to fixed number of decimal places
    toPrecision(): Formats number to specified length

(2) Math Methods:
    abs(): Returns absolute value of number
    round(): Rounds nearest integer
    ceil(): Rounds up to next largest integer
    floor(): Rounds down to next smallest integer
    min(): Returns smallest of zero or more numbers
    max(): Returns largest of zero or more numbers

(3) Random Number Generation:
    Math.random(): Returns a pseudo-random number between 0 and 1
*/
