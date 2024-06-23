// (1) --- Prototype Inheritance --- (Objects can inherit properties and methods from other objects)
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

// Setting User as the prototype of Teacher
Teacher.__proto__ = User;

console.log(Teacher.name); // Output: chai

// Modern syntax for setting prototypes
Object.setPrototypeOf(Teacher, User);

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

console.log(TASupport.isAvailable); // Output: false

// (2) --- Adding Methods to Prototype --- (Adding methods to extend functionality)
Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

myHeros.hitesh(); // Output: hitesh is present in all objects
myHeros.heyHitesh(); // Output: Hitesh says hello
heroPower.hitesh(); // Output: hitesh is present in all objects

// (3) --- Extending String Prototype --- (Adding methods to the String prototype)
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

let anotherUsername = "ChaiAurCode     ";
anotherUsername.trueLength(); // Output: ChaiAurCode, True length is: 11
"hitesh".trueLength(); // Output: hitesh, True length is: 6
"iceTea".trueLength(); // Output: iceTea, True length is: 6
