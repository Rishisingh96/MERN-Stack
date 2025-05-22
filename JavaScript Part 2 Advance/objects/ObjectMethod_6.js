// * =====================================
// * Objects Useful Methods
// * ======================================

// const product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computers",
//   brand: "ExampleBrand",
//   price: 999.99,
//   stock: 50,
//   description:
//     "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
//   image: "image link will be added during projects",
// };

// ? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

// let keys = Object.keys(product);
// console.log(keys);

// ? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.
// let values = Object.values(product);
// console.log(values);

// ? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
// let entries = Object.entries(product);
// console.log(entries);

// ? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
// console.log(product.hasOwnProperty("name")); // Output: true
// console.log(product.hasOwnProperty("isStudent")); // Output: false

// ? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
// const target = { a: 1, b: 5 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

// ? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
// Object.freeze(product);
// product.id = "5656";
// console.log(product);