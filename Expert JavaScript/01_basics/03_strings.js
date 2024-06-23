const name = "hitesh";
const repoCount = 50;
// Using template literals for string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");
// Accessing characters and properties
console.log(gameName.charAt(2)); // 't'
console.log(gameName.indexOf("t")); // 2

// Substring and slice methods
const newString = gameName.substring(0, 4);
console.log(newString); // 'hite'
const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // '' (empty because the indices are invalid)

// Trimming whitespace
const newStringOne = "   hitesh    ";
console.log(newStringOne); // '   hitesh    '
console.log(newStringOne.trim()); // 'hitesh'

// Replacing and checking for substrings
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-")); // 'https://hitesh.com/hitesh-choudhary'
console.log(url.includes("sundar")); // false

// Splitting a string
console.log(gameName.split("-")); // ['hitesh', 'hc', 'com']

// ***** NOTES *****
// (1) String interpolation: template literals ko use krty hovy variables ko string me add krna
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// (2) Creating string Object: string constructor ko use krty hovy string object banana
const nameGame = new String("hitesh-hc-com");
// (3) Accessing characters
console.log(nameGame[0]); // Access first character
console.log(nameGame.charAt(2)); // Access character at index 2
// (4) String Propertise and Methods
console.log(nameGame.length); // Length of the string
console.log(nameGame.toUpperCase()); // Convert to uppercase
console.log(nameGame.indexOf("t")); // Find index of character 't'
console.log(nameGame.substring(0, 4)); // Get substring from index 0 to 4
console.log(nameGame.slice(-8, 4)); // Slice string with negative index
console.log(newStringOne.trim()); // Trim whitespace
console.log(url.replace("%20", "-")); // Replace '%20' with '-'
console.log(url.includes("sundar")); // Check if 'sundar' is in the URL
console.log(nameGame.split("-")); // Split string by '-'
