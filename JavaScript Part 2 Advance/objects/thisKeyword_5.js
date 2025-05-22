// * =====================================
// * "this" Object
// * ======================================

// ? In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.
// ("use strict");

x = 5;
console.log(x);

function callme() {
  console.log(this);
}

callme(); // try to run on browser console

// todo  Let's check the this keyword values in an object methods

// * Regular Function Expression:
// const obj = {
//   name: "Kodyfier",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet();

// * In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
// const obj = {
//   name: "Kodyfier",
//   greet() {
//     console.log(this);
//   },
// };

// obj.greet();

// * Fat Arrow Function
// const obj = {
//   name: "thapa technical",
//   greet: () => {
//     console.log(this);
//   },
// };

// obj.greet();