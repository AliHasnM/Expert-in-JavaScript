// (1) Array Creation
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]); // Access the second element (1)

// (2) Array methods
myArr.push(6); // Adds 6 to the end
myArr.push(7); // Adds 7 to the end
myArr.pop(); // Removes the last element (7)
myArr.unshift(9); // Adds 9 to the beginning
myArr.shift(); // Removes the first element (9)

// (3) Searchin Elements
console.log(myArr.includes(9)); // Checks if 9 is in the array
console.log(myArr.indexOf(3)); // Finds the index of 3

// (4) Join Array
const newArr = myArr.join();
// console.log(newArr); // Joins the array into a string

// (5) Slice and Splice the Array
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // Slices the array from index 1 to 3 (excluding 3)
console.log(myn1);
console.log("B ", myArr); // Original array remains unchanged
const myn2 = myArr.splice(1, 3); // Removes elements from index 1 to 3
console.log("C ", myArr); // Original array is modified
console.log(myn2); // Contains the removed elements
// (6) Combining Arrays
const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes); // Merges both arrays

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes); // Merges both arrays using the spread operator

// (7) flat Array
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray); // Flattens the array completely

// (8) Array type checking and Conversion
console.log(Array.isArray("Hitesh")); // Checks if "Hitesh" is an array
console.log(Array.from("Hitesh")); // Converts string "Hitesh" to an array
console.log(Array.of({ name: "hitesh" })); // Converts an object to an array (unusual use case)

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Creates an array from arguments

/*
***** NOTES *****
push(): Adds elements to the end of an array
pop(): Removes the last element from an array
unshift(): Adds elements to the beginning of an array
shift(): Removes the first element from an array

includes(): Checks if an array contains a specified element
indexOf(): Returns the first index of a specified element

join(): Joins all elements of an array into a string

slice(): Returns a shallow copy of a portion of an array
splice(): Adds/removes elements from an array and returns the removed elements

concat(): Merges two or more arrays
Spread Operator (...): Combines arrays

flat(): convert nested array in a single array

Array.isArray(): check krta hai k ye value array me hai k nahi (true or false)
Array.from(): array-like object or literable-object or string se new array create krta hai
Array.of(): given elements se new array return krta hai
*/
