// * =====================================
// *  Interview Question
// * ======================================

// ! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

// ? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
// ? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

// let a = 10;
// const modifyValue = (x) => (x = 20);

// console.log(modifyValue(a));
// console.log(a);

// ? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

// let obj = { id: 5, name: "Rishi singh" };

// let obj1 = obj;

// obj1.name = "Ranjeet singh";
// console.log(obj1);
// console.log("original", obj);

// To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...):

// ? Object.assign() is used to copy properties from one or more source objects to a target object.

// let obj = { id: 5, name: "kodyfier" };
// let obj1 = {};
// let newObj = Object.assign(obj1, obj);

// newObj.name = "thapa technical";
// console.log(newObj);
// console.log("original", obj);

// * =====================================
// * Comparison by Reference:
// * ======================================

// ? Two objects are equal only if they refer to the same object.
// ? Independent objects (even if they look alike) are not equal:

// const obj1 = { name: "vinod" };
// const obj2 = { name: "vinod" };
// const obj3 = obj1;

// // const isEqual = obj1 == obj2 ? true : false;
// const isEqual = obj1 == obj3 ? true : false;
// console.log(isEqual);