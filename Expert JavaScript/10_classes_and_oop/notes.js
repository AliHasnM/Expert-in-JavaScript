// (1) javascript and classes
// javascript is a Prototype language (ES6 me classes aie thi, but ye prototype language hai, yani k hum classes b bana sakty hain wasy necessary nhi)
// JavaScript is a prototype-based language, which means it relies on prototypes to define the structure and behavior of objects. However, ES6 introduced classes to provide a cleaner and more intuitive syntax for creating objects and handling inheritance

// (2) OOP
// code write krne a style (oop, functional, etc)
// OOP is a programming style that uses objects to represent data and methods to manipulate that data. It aims to make the code more modular, reusable, and easier to manage

// (3) Object
// collection of properties (data) and methods (functions) that operate on data (toLowerCase, toUpperCase, Promises, etc)

let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
person.greet(); // Output: Hello, John

// (4) why use OOP
// Purpose: OOP provides a structured way to organize and manage code, making it less error-prone and more readable. It allows the use of additional features like inheritance and encapsulation

// (5) Parts of OOP
// (i) Object literal: simple way to create objects using literal syntax

let car = {
  make: "Toyota",
  model: "Corolla",
};

// (ii) Constructor function: constructor function allow for creation of multiple objects with similar properties and methods

function Car(make, model) {
  this.make = make;
  this.model = model;
}
let myCar = new Car("Honda", "Civic");

// (iii) Prototypes: prototype provide a way to add methods and properties to all instances of an object or constructor function, saving memory and improving performance

Car.prototype.drive = function () {
  console.log(this.make + " " + this.model + " is driving");
};
myCar.drive(); // Output: Honda Civic is driving

// (iv) Classes: a cleaner and more readable syntax for creating constructor functions (object) and handling Inheritance

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log(this.make + " " + this.model + " is driving");
  }
}
let myCar2 = new Car("Ford", "Mustang");
myCar2.drive(); // Output: Ford Mustang is driving

// (v) Instances (new, this):  Instances are individual objects created using a class or constructor function. The "new" keyword is used to create instances, and "this" refers to the current instance

let anotherCar = new Car("Chevy", "Impala");
console.log(anotherCar.make); // Output: Chevy

// ***** 4 Pillars *****

// (1) Abstraction: show only necessary features, hide the details(example: fetch() method, car GPS show route and hide complex mapping data)

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
fetchData("https://api.example.com/data");

// (2) Encapsulation: Wrapping data and methods into single unit (example: credit card statement hide transcation details, only show balance)

class Account {
  #balance; // private field
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  getBalance() {
    return this.#balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
}
let myAccount = new Account(100);
myAccount.deposit(50);
console.log(myAccount.getBalance()); // Output: 150

// (3) Inheritance: creating new class based on existing class, inheriting properties and methods (example: BMW is type of car, inherit attributes from the car class)

class Vehicle {
  constructor(type) {
    this.type = type;
  }
  start() {
    console.log(this.type + " is starting");
  }
}
class Car extends Vehicle {
  constructor(make, model) {
    super("Car");
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log(this.make + " " + this.model + " is driving");
  }
}
let myCar3 = new Car("BMW", "X5");
myCar3.start(); // Output: Car is starting
myCar3.drive(); // Output: BMW X5 is driving

// (4) Polymorphism: using single entity in multiple forms (example: phone can be use for calls, texts, etc)

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}
let animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
// Output:
// Animal speaks
// Dog barks
// Cat meowss
