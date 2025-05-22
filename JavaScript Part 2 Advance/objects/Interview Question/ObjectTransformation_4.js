// * ===============================================
// * Interview Question - Object Transformation:
// * ================================================
// ! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

let inputArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// const arrayToObj = (arr) => {
//   //   console.log(arr[2].id);
//   let obj = {};
//   for (let key of arr) {
//     console.log(key.id, key);
//     obj[key.id] = key;
//     // console.log(key);
//   }
//   return obj;
// };

//------------------------------------------------------------------------------------------

const arrayToObj = (arr) => {
  //------------------------------------------------------------------------------------------
  //for check
  //   console.log(arr);
  //   console.log(arr[2].id);
  //------------------------------------------------------------------------------------------
  //print Id and keys
  //   for (let key of arr) {
  //     console.log(key.id, key);
  //   }

  //------------------------------------------------------------------------------------------
  let obj = {};
  for (let key of arr) {
    // console.log(key.id, key);
    obj[key.id] = key;
  }
  return obj;
};

console.log(arrayToObj(inputArray));

//------------------------------------------------------------------------------------------
// Should print: {
//  '1': { id: 1, name: 'Alice' },
//  '2': { id: 2, name: 'Bob' },
//  '3': { id: 3, name: 'Charlie' }
// }
//------------------------------------------------------------------------------------------
