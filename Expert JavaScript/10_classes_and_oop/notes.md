# javascript and classes

javascript is a Prototype language (ES6 me classes aie thi, but ye prototype language hai, yani k hum classes b bana sakty hain wasy necessary nhi)
JavaScript is a prototype-based language, which means it relies on prototypes to define the structure and behavior of objects. However, ES6 introduced classes to provide a cleaner and more intuitive syntax for creating objects and handling inheritance.

## OOP

code write krne a style (oop, functional, etc)
OOP is a programming style that uses objects to represent data and methods to manipulate that data. It aims to make the code more modular, reusable, and easier to manage.

## Object

- collection of properties (data) and methods (functions) that operate on data (toLowerCase, toUpperCase, Promises, etc)
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
person.greet(); // Output: Hello, John


## why use OOP

code bohat zada raff-code ki terha lagta tha tu osey syntax style dia OOP ka. es se hum Javascript k bohat sary aur features b use kr paie

## parts of OOP

Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars

Abstraction: show only necessary features, hide the details (example: fetch() method, car GPS show route and hide complex mapping data)

Encapsulation: Wrapping data and methods into single unit (example: credit card statement hide transcation details, only show balance)

Inheritance: creating new class based on existing class (example: BMW is type of car, inherit attributes from the car class)

Polymorphism: using single entity in multiple forms (example: phone can be use for calls, texts, etc)
