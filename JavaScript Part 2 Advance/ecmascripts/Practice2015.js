// let firstName = "Rishi";
// let lastName = "Singh";

// let fullName1 = firstName + lastName;
// console.log(fullName1);
// let fullName2 = `${firstName} ${lastName}`;
// console.log(fullName2);


// String Interpolation : 
// let age = 30;
// let message = `I am ${age} year old`;
// console.log(message);

//Expression Evaluation 
// let num1 = 5;
// console.log("5*" + num1 + "="+5*num1)
// let num2 = 5;
// console.log(`5*${num2}=${5*num2}`);

//Default value/parameter
// let b=0;
// function sum( a=20, myCurClass=10){
//     return a+b;
// }
// console.log(sum());

//FAT ARROW FUNCTION

// const sum =function(a,b){
//     let result = `The sum of ${a} and ${a+b}.`;
//     console.log(result);
// };
// sum(5,5);

//Notes
//1.
// const sum = (a,b) =>console.log(`The sum of ${a} and ${b} is ${a+b}.`);
// sum(5,5);

//2. can be omitted
// const square = (a)=>`The square of ${a} is ${a*a}`;
// console.log(square(5));

//3.No parameter
// const greet = () => console.log("My name is Rishi singh....");
// greet()


//////////////////////////////////

// ============ Part 2 Modern JavaScript ================

// Object Properties - <MJ>
// const name = "Rishi singh";
// const age = 30;

// //Traditional way
// const person1 = {name:name, age:age};
// console.log(person1);

// //Using Shorthand notation for object property
// const person2 = {name, age};
// console.log(person2);

// ==== Destructing========= Modern JS

//? 1: Extracting specific elements:
// const numbers = [10, 20 , 30];
// const first = numbers[0];
// console.log(first);

// const [first, second, third] = numbers;
// console.log(second);

//? 2: Ignoring elements:
// const[,,third] = numbers
// console.log(third);


//! Interview Questions
//! Write a program to swap two variables without using 3rd variable?
let a = 10;
let b = 30;

// //Using 3rd var
// let c = b;
// b = a;
// a = c;

// console.log(`The vale is \n
//     a = ${a} \n
//     b = ${b}`);

//? without using 3rd variable
// [a,b] = [b,a];
// console.log(a,b);

//* Destructuring Objects:
// const user = { 
//     name: "Rishi", 
//     age: 30 
// };

// //? Extracting properties:
// const myName = user.name;
// const {age, name} = user;
// console.log(age, name);
// console.log(myName);

//? Renaming properties:
// const {name:fullName, age} = user;

//  console.log(fullName);

 //*  Spread Operator - Modern JavaScript
 //? 1. Copying an array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// let newFruits = [...fruits];
//  console.log(fruits);
//  console.log(newFruits);

 //? 2: Concatenating arrays / Combining arrays
//  const numbers1 = [1,2,3,4];
//  const numbers2 = [4,5,6];
//  const newNumbers  = [...numbers1, ...numbers2];
//  console.log(newNumbers);

//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// fruits.push("guava", "grapes");
// fruits.push(...["banana","guava","grapes"]);
// console.log(fruits);

//! One more useCases
//? In JavaScript, when you spread a string using the spread syntax (...), it converts the string into an array of its individual characters.

//? Traditional way
// const country = "INDIA";
// console.log(country.split(""));

//? New way of doing it
// const country = "INDIA";
// console.log([...country]);

//*  Rest parameters  - Modern JavaScript
//* =========================================
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.

//? traditional way of doing it
// const sum1 = (a,b,c,d) =>{
//     return a+b+c+d;
// };


//? with rest parameters
// const sum2 = (...numbers) =>{
//     // console.log(typeof numbers);
//     return numbers.reduce((accum,curVal) => 
//         (accum = accum + curVal),0);
// }
// console.log(sum1(1, 2, 3, 4));
// console.log(sum2(1, 2, 3, 4,9,6,2));
// console.log(sum2(1, 2, 3, 4));

//* ==========================================
//*    ECMAScript Features (2016):
//* =========================================

//* ==============================
//*    Exponentiation Operator
//* ===============================

// use double asterisk **

// let base = 2;
// let exponent = 3;
// console.log("using Math.pow()", 
//     Math.pow(base,exponent))

// console.log("using exponentiation operator", base**exponent)

//? In expressions:
//! calculates the area of a circle with a radius of 5 units.
// let area = Math.PI*5**2;
// console.log(area.toFixed(2));

//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

//? List of new useful features added in ES8  👇
// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//* =====================
//*  String padding
//* =====================
// const companyName = "kodyfier";
// const paddedName = companyName.padStart(5);
// const paddedName = companyName.padStart(15);
// console.log(paddedName);
// console.log(paddedName.length);

//? Using padEnd() to pad from the end:
// const paddedName = companyName.padEnd(15);
// const paddedName = companyName.padEnd(15,"*");
// console.log(paddedName);
// console.log(paddedName.length);

//* =====================
//*  trailing commas
//* ====================
//? This feature allows to have trailing commas in function declarations, functions calls, array literal & object literal:

// // Function parameter list
// function greet(name, age, boolean){
//     console.log(`Hello ${name}, you are ${age} year old.`);
// }

// greet("Shivam", 30,true);

// // Array literal
// const colors = ["red", "green", "blue"];

// Object literal
// const person = {
//     firstName:"Rishi",
//     lastName: "Singh",
//     age:30,
// };
// console.log(person)

//* ======================================
//*  Object.entries() & Object.values()
//* ======================================
//? We have already covered in our Objects Section. Please watch the section for same

//* ======================================
//*  Async Await - Async Functions
//* 


//* ==========================================
//*    ECMAScript Features (2018) / ES9
//* =========================================

//? List of new useful features added in ES8  👇
// Rest/Spread Properties
// Promise.prototype.finally()


//* ============================
//*  Rest/Spread Properties
//* =============================

//? ES6 introduced the concept of a rest element when working with array destructuring:
// const numbers = [1, 2, 3, 4, 5];
// [first, second, ...others] = numbers;

// const numbers = [1, 2, 3, 4, 5,10,-2];
// const sum = (a,b,c,d,e) => a+b+c+d+e
// const sumOfNumbers = sum(...numbers)
// console.log(sumOfNumbers)
// console.log(sum)

//* ES2018 introduces the same but for objects.

//? Object and Rest Operator
// const student = {
//   age: 10,
//   name: "Rishi",
//   isStudent: true,
// };

// const {age,...others} =student
// const {...others} =student
// console.log(others);


// Object and Spread operator
// const obj1 = { a: 10, b: 20, c: 50 };
// const obj2 = { c: 30, d: 40 };

// const newObj = {...obj2, ...obj1}
// console.log(newObj);


//* ==========================================
//*    ECMAScript Features (2019) / ES10
//* =========================================

//? List of new useful features added in ES8  👇
// Array.prototype.{flat,flatMap}
// Object.fromEntries()
// String.prototype.{trimStart,trimEnd}
// Symbol.prototype.description
// Optional catch binding

//* ==================================
//*  Array.flat & Array.flatMap
//* ================================
//? flat() is a new array instance method that can create a one-dimensional array from a multidimensional array. (nested arrays into a single, flat array.)

// const nestedArray = [1,2,[3,4],5];
// const nestedArray1 = [1, [2, [3, [4]]], 5];

// const flattenedArray = nestedArray.flat();
// const flattenedArray = nestedArray1.flat(3);
// console.log(flattenedArray);

//? flatMap() is a new Array instance method that combines flat() with map(). It’s useful when calling a function that returns an array in the map() callback, but you want your resulted array to be flat:
// const arr = ["My name","is Rishi","Singh"]
// const newArr = arr.flatMap((curVal)=>
//     curVal.split(" "));
// console.log(newArr);


//* ============================
//*  Object.fromEntries()
//* =============================
//? Objects have an entries() method, since ES2017.
//? It returns an array containing all the object own properties, as an array of [key, value] pairs:

//? ES2019 introduces a new Object.fromEntries() method, which can create a new object from such array of properties:

const person = {name:"Rishi", age:22};
const entries = Object.entries(person);
// console.log(entries);

const newPerson = Object.fromEntries(entries);
// console.log(newPerson);

// console.log(person == newPerson);

//* ========================================
//* String.prototype.{trimStart,trimEnd}
//* =========================================

//? trimStart(): Return a new string with removed white space from the start of the original string
// console.log("Testing".trimStart());
// console.log("           Testing".trimStart());
// console.log("     Testing     ".trimStart());
// console.log("Testing    ".trimStart());

// console.log("Testing".trimEnd());
// console.log("          Testing".trimEnd());
// console.log("     Testing     ".trimEnd());
// console.log("Testing    ".trimEnd());

//Symbol.prototype.description
const mySymbol = Symbol("This is my symbol");
// console.log(typeof mySymbol);
// console.log(mySymbol.description);
try {
  //...
} catch (e) {
  // handle error
}


// * ==========================================
// *    ECMAScript Features (2020) / ES11
// * =========================================
// const maxNumber = Number.MAX_SAFE_INTEGER;
// console.log("This is a Max number",maxNumber);
// console.log(`This is a Max number ${maxNumber}`);
// let num = maxNumber + 11;
// console.log(num-1);

// This is a Max number 9007199254740991
// 9007199254741000


const anotherLeargeNumber = BigInt("12345454543545464643564353654364363446546436")
// console.log(anotherLeargeNumber);
// console.log(typeof anotherLeargeNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
maxNumber = BigInt(maxNumber);
let num = maxNumber + 10n;
// console.log(num);

//Nullish 
let favNum = 0;
// userFavNumber = favNum || 10;
userFavNumber = favNum ?? 10;
// console.log(userFavNumber);

const person0 = {
    name : "Rishi",
    address: {
        // city: "Indore",
        city: 0,
        zipCode: 12345,
    },
};

// const city = person.address;
// const city1 = person.address ? person.address:"city not present"; 
// console.log(city1);  // show city not present

const city1 = person0.address?.city ?? "city not present"; 
// console.log(city1);  // show city not present
const person1 = {
  name: "John",
  address: {
    city: "New York",
    zipCode: 12345,
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
};

const latitude = person1.address?.coordinates?.latitude ?? "not present";
// console.log(latitude);

// * ==========================================
// *    ECMAScript Features (2021) / ES12
// * =========================================

// ? List of new useful features added in ES8  
// String.prototype.replaceAll()
// Logical Assignment Operators (||=, &&=, ??=)
// Numeric Separators
// Promise.any()
// * ==========================================
// *  String.prototype.replaceAll()
// * =========================================
// ? replaceAll in JavaScript is a function that replaces all occurrences of a specified value with another value in a given string.

const originalString = "Hello, world! Hello agian.";
const newString = originalString.replaceAll("Hello","Hii");
// console.log(originalString);
// console.log(newString);

const text = "This  has   extra        space. ";
const normalizedText = text.replaceAll(/\s+/g, " ");
// console.log(normalmal

// * =====================================================
// *  Logical Assignment Operators (||=, &&=, ??=)
// * ====================================================
let x = false;
x = x || true;
// console.log(x);

const bigNumber = 1_000_000;
// console.log(bigNumber);
// Output: 1000000;

// Promise.any
// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 200, "Promise 1")
// );
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "Promise 2")
// );
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 300, "Promise 3")
// );

// Promise.any([promise1, promise2, promise3]).then((value) => console.log(value));

// * ==========================================
// *    ECMAScript Features (2022) / ES13
// * =========================================

// ? List of new useful features added in ES8  👇
// .at() function for indexing
// Object.hasOwn(obj, propKey)

//.at()
const array = [1,2,4,5,6,7];
// console.log(array[array.length - 1]);
// console.log(array.at(-1));

// * =====================================
// *  Object.hasOwn(obj, propKey)
// * =====================================
// ? Object.hasOwn() is a static method that you can use to check if a property exists in an object or not. It returns true if the specified object contains the indicated property as its own, and if the property is inherited or doesn’t exist, it returns false. This method takes the object as the first argument and the property you want to check as the second.


const book = {
  name: "World Best JS Course",
  author: "Thapa Technical",
};

// Using Object.prototype.hasOwnProperty() method 
// console.log(book.hasOwnProperty("name"));
// console.log(book.hasOwnProperty("price"));

// console.log(Object.hasOwn(book, "name"));

const student = Object.create(null);
// console.log(typeof student);
student.name = "Rishi";
// console.log(student.hasOwnProperty("name"));
// console.log(Object.hasOwn(student, "name"));


// * ==========================================
// *    ECMAScript Features (2023) / ES13
// * =========================================

// ? List of new useful features added in ES8  👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)

// * ===============================================
// *  Array.findLast() & Array.findLastIndex()
// * ==============================================

const array1 = [1,2,3,4,5,6,4];
// console.log(array1.findLast((elem) => elem >4));
// console.log(array1.findLast((elem) =>elem));


const myNames = ["Rishi", "bahadur", "thapa", "kodyfier"];

const reversedNum = myNames.toReversed();
// console.log("reversed", reversedNum);

const sortedArr = myNames.toSorted();
// console.log("o", myNames);
// console.log("sorted", sortedArr);

const replaceWith = myNames.with(1,"Singh");
console.log("o", myNames);
console.log("replaced", replaceWith);


