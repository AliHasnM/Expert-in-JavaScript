// (1) for loop: use for specifying iteration, allow code to  execute repeatedly (array or ranges, etc)
// Return Value: Does not return a value

// (2) break: loop ko ternimate kr deta hai
// continue: current iteration ko skip kr k next iteration pr move kr jata hai

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Stops the loop when i is 5
  }
  console.log(i); // Outputs: 1, 2, 3, 4
}
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skips the current iteration when i is 5
  }
  console.log(i); // Outputs: 1, 2, 3, 4, 6, 7, 8, 9, 10
}

// (3) while loop: allow code to executed repeatedly base on specific condition
// Return Value: Does not return a value

let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
}

// (4) dowhile loop: similar to while loop but check condition after execute code. jb hamy one time code ko lazami run krna ho tb hum esy use krty hain
// Return Value: Does not return a value

let a = 5;
do {
  console.log(a); // Outputs: 5 (executes at least once)
  a++;
} while (a < 5);

// (5) for_of loop: iterable object (like arrays or string) k her element k leye code ko execute krta hai
// Return Value: Does not return a value

const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // Outputs: 10, 20, 30
}

// (6) for_in loop: object ki value k through iterate krta hai(object: like key or properties)
// Return Value: Does not return a value

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]); // Outputs: a 1, b 2, c 3
}

// *****************************************************

// (7) map: key-value pairs ko store and manage krne aur in par operation perform krne k leye use krty hain
// Return Value: Does not return a value when iterating

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
for (const [key, value] of map) {
  console.log(key, value); // Outputs: a 1, b 2, c 3
}

// (9) nested loop: loop inside loop(multi - dimensional, matrices or tables wagara k leye use krty hain)
// Return Value: Does not return a value

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j); // Outputs pairs like (1,1), (1,2), (1,3), ..., (3,3)
  }
}

// ********************************************

// (10) foreach method: execute a provided function once for each element
// Return Value: undefined

const array = [1, 2, 3];
array.forEach((num) => console.log(num)); // Outputs: 1, 2, 3

// (11) filter method: create new array with all elements that pass condition implemented by provided function (array se asey element ko filter krna jo condition ko follow krty hain)
// Return Value: new array with elements that pass condition

const arrNum = [1, 2, 3, 4, 5];
const filtered = arrNum.filter((num) => num > 3);
console.log(filtered); // Outputs: [4, 5]

// (12) map method: create new array with results of calling a provided function on every element in array (transform elements in array based on specified function)
// Return Value: new array with transformed elements

const numArray = [1, 2, 3];
const mapped = numArray.map((num) => num * 2);
console.log(mapped); // Outputs: [2, 4, 6]

// (13) reduce method: execute reducer function on each element of array and result in single output value (array ko reduce kr k single value me convert kr deta hai (sum, product, etc) by interating and accumulating result)
// Return Value: accumulated value

const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "py course", price: 999 },
  { itemName: "mobile dev course", price: 5999 },
  { itemName: "data science course", price: 12999 },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // Outputs: 22996
