// * =====================================
// * Interview Question - Objects
// * ======================================

// ! 1: What will be the output?

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const mergedObject = Object.assign({}, target, source);
console.log(mergedObject);
