//? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//todo When a function declaration is hoisted, its entire definition (including the body) is moved to the top of its containing scope during the creation phase. This means that you can call the function before it's actually declared in the code, and it will still work as expected.

//---------------------------------------------------------------------------
// use var and function
// console.log(myVar);
// greet();

// var myVar = 10; // Undefined show
// function greet() {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome"); //run
// }   //not show error

//----------------------------------------------------------------------------
// use let and function // show error in let
// console.log(myVar);
// greet();

// let myVar = 10;  //show error
// function greet() {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome");
// }

//---------------------------------------------------------------------------
// use var and fath arrow function expression  // show error in fat h arrow function expression
// console.log(myVar);
// greet();
// var myVar = 10;
// const greet = () => {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };

//---------------------------------------------------------------------------------
// let myVar = 10;
// const greet = () => {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };
// console.log(myVar);
// greet();
