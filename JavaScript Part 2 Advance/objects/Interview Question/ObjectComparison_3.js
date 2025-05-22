// * ===============================================
// * Interview Question - Object Comparison:
// * ================================================
// Todo: Problem: Write a function that compares two objects to determine if they have the same properties and values.

// const areObjectsEqual = (obj1, obj2) => {
//   //   if (obj1.length != obj2.length) {
//   //     console.log("hi");
//   //     return false;
//   //   }
//   let o1 = Object.keys(obj1);
//   let o2 = Object.keys(obj2);

//   if (o1.length != o2.length) {
//     console.log("There keys are not same");
//     return false;
//   }

//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

const areObjectsEqual = (obj1, obj2) => {

//------------------------------------------------------------------------------------------
  //not work because object not support length and Index
  //   if (obj1.length === !obj2.length) {
  //     console.log("h1");
  //     return false;
  //   }
//------------------------------------------------------------------------------------------

  // Step 1: Check if both are objects and not null
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  // Step 2: Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

//------------------------------------------------------------------------------------------
  //   if (a1.length !== a2.length) {
  //     console.log("There keys are not same");
  //     return false;
  //   }
  //   console.log(a2);
 //------------------------------------------------------------------------------------------ 

  // Step 3: Compare length of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

//------------------------------------------------------------------------------------------
  //   for (let key of obj1) {  // Directly not work because fo of loop not work in object
  //     console.log(obj1[key]);
  //   }
//------------------------------------------------------------------------------------------

  // Step 4: Compare values for each key
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
// Todo: Problem: Write a function that compares two objects to determine if they have the same properties and values.
// // Example usage:
let objA = { name: "Alice", age: 26, city: "New York" };
let objB = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York", country: "India" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };

console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false


//------------------------------------------------------------------------------------------
// 🧠 Notes:
// You cannot use for...of directly on an object. Use Object.keys() to iterate keys.

// length and index access like arrays do not apply to plain objects.

// Make sure to handle null and type checks before comparing objects.
//------------------------------------------------------------------------------------------