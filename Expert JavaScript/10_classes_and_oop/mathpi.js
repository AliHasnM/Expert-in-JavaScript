// Using Object.getOwnPropertyDescriptor
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor); // Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

// Attempting to change Math.PI (will not change because writable is false)
console.log(Math.PI); // Output: 3.141592653589793
Math.PI = 5;
console.log(Math.PI); // Output: 3.141592653589793

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

// Getting property descriptor for 'name'
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Output: { value: 'ginger chai', writable: true, enumerable: true, configurable: true }

// Defining property descriptor for 'name'
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true,
});

// Checking updated property descriptor for 'name'
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Output: { value: 'ginger chai', writable: false, enumerable: true, configurable: true }

// Iterating over properties of the object
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
// Output:
// name : ginger chai
// price : 250
// isAvailable : true
