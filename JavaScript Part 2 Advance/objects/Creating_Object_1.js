// * ==============================
// * Object in JavaScript
// * ==============================
// ? Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.

// * ==============================
// * Creating Objects:
// * ==============================
// ? There are several ways to create objects in JavaScript. The most common one is using object literals:

// const product = {
//   id: 1,
//   pName: "laptop",
// };

// --------------------------------------------------------------------------------------------------------

// let person = {
//   name: "Rishi singh",
//   age: 30,
//   isStudent: false,
//   greet: function () {
//     console.log("Welcome to World Best CSS Course");
//   },
// };

// console.log(person.age);
// console.log(person.name);
// console.log(person.isStudent);
// greet(); // show error

// --------------------------------------------------------------------------------------------------------

// let person = {
//   name: "Rishi singh",
//   age: 30,
//   "is'Student": false,
//   greet: function () {
//     console.log("Welcome to World Best JavaScript Course");
//   },
// };

// --------------------------------------------------------------------------------------------------------
// * ==============================
// * Accessing Properties:
// * ==============================
// ? You can access object properties using dot notation or square bracket notation:

// console.log(person.age);
// console.log(person.name);
// console.log(person[`is'Student`]);  // when we use string with special character

// --------------------------------------------------------------------------------------------------------------------
// * =================================
// * Adding and Modifying Properties:
// * =================================
// ? You can add new properties or modify existing ones:
// person["job"] = "Java web dev";
// // person.age = 18;
// person["age"] = 20;

// console.log(person);

// --------------------------------------------------------------------------------------------------------
// * =================================
// * Methods:
// * =================================
// ? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:

// person.greet();