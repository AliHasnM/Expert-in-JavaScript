// ***** (1)    Data Types *****
"use strict"; // treat all JS code as newer version
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// Variable declarations with different data types
let name = "hitesh"; // string data type
let age = 18; // number data type
let isLoggedIn = false; // boolean data type
let state; // undefined data type

// Logging types of null and undefined
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known JavaScript quirk)

// ***** (2)   Data Types Conversion *****
// Attempting to convert a string to a number
let score = "hitesh";
let valueInNumber = Number(score); // NaN (Not a Number because "hitesh" is not a number)

// Convert string to boolean
let booleanIsLoggedIn = Boolean(isLoggedIn); // true (non-empty strings are truthy)

// Convert number to string
let someNumber = 33;
let stringNumber = String(someNumber); // "33"

// ***** (3)   Operation *****
// Arithmetic operations
let value = 3;
let negValue = -value; // -3 (negation)

// String concatenation
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2; // "hello hitesh"

// Type coercion in string and number operations
console.log("1" + 2); // "12" (string concatenation)
console.log(1 + "2"); // "12" (string concatenation)
console.log("1" + 2 + 2); // "122" (string concatenation)
console.log(1 + 2 + "2"); // "32" (addition followed by concatenation)

// Mixed arithmetic and modulo operation
console.log(((3 + 4) * 5) % 3); // 2

// Unary operators
console.log(+true); // 1 (true converted to number)
console.log(+""); // 0 (empty string converted to number)

// Multiple variable assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // 4

// Increment operation
let gameCounter = 100;
++gameCounter; // 101 (increment by 1)
gameCounter--; // 100 (decrement by 1)
console.log(gameCounter); // 100

// Comparison operations
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// Comparison with type coercion
console.log("2" > 1); // true (string "2" is converted to number 2)
console.log("02" > 1); // true (string "02" is converted to number 2)

// Special cases with null and undefined
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// Strict equality comparison (data type b check kry ga sath)
console.log("2" === 2); // false (different types)

// ***** (4)   Summery of Data Types *****
// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Number data type
const score1 = 100; // integer
const scoreValue = 100.3; // floating-point number
// Boolean data type
const isLoggedIn1 = false; // boolean
// Null data type
const outsideTemp = null; // null
// Undefined data type
let userEmail; // undefined (no value assigned)
// Symbol data type
const id = Symbol("123"); // symbol
const anotherId = Symbol("123"); // symbol

// Comparison of two symbols (symbols are unique)
console.log(id === anotherId); // false

// BigInt data type
const bigNumber = 3456543576654356754n;

// Reference (Non-primitive)
// Array, Objects, Functions

// Array data type
const heros = ["shaktiman", "naagraj", "doga"]; // array of strings

// Object data type
let myObj = {
  name: "hitesh", // string
  age: 22, // number
};

// Function data type
const myFunction = function () {
  console.log("Hello world"); // function
};

// Check the type of a Symbol
console.log(typeof anotherId); // "symbol"

// Link to ECMA specification
// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
 ***** NOTES *****
 (1) Data Types: variables kis types ki values store kry gy wo batata hai
 (2) Data Types Conversion: variables ki type ko change krna (one type to another type)
 (3) Operations: variables pr Airthematic and Logical operations performs krna

 (4) data types kis terha memory me store hogi aur kis terha access hogi es ki bina par data types ko two-parts me divide kia gia hai (i) Primitive (ii) Non-Primitive /Reference Type
 (i) PRIMITIVE --> call by value (yani k hamy copy milti hai original data change nhi hota) 7-types: (Number, BigInt, String, Boolean, Null, Undefined, Symbol)
    Number: integers, float-point numbers
    BigInt: large integers (limit include)
    String: textual data
    Boolean: true or false
    Null: empty value or object
    Undefined: jb variable ko abi tk value assign na ki ho
    Symbol: unique identifier
 (ii) NON-PRIMITIVE/REFERENCE-TYPES: call by reference (yani k hamy data ka memory-address milta hai aur aghar hum koi changing kry gay tu wo original data me b hogi) 3-types: (Array, Object, Function)
    Array: store multiple values in single variable
    Object: collection of key-value pairs
    Function: block of code to perform a specific task

 (iii) Memory Types (two-types)
    Stack-Memory: store all PRIMITIVE types of data (call by value, hamy data ka copy mily ga, changes krne par copy me changes hota hai original data change nhi hota)
    Heap-Memory: store all NON-PRIMITIVE types of data (call by reference, hamy memory-address mily ga data ka aur changes pr original data change hoga)
*/
