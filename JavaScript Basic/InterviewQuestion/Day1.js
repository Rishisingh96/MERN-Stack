const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 19 },
    { name: "Eve", age: 18 },
    { name: "Frank", age: 21 },
    { name: "Grace", age: 23 },
    { name: "Heidi", age: 24 },
    { name: "Ivan", age: 25 },
    { name: "Judy", age: 26 },
    { name: "Mallory", age: 27 },
    { name: "Niaj", age: 28 },
    { name: "Oscar", age: 29 },
    { name: "Peggy", age: 30 },
    { name: "Sybil", age: 31 },
    { name: "Trent", age: 32 },
  ];
  
  console.log("1. Using filter + map + forEach:");
  users
    .filter((user) => user.age > 18 && user.age < 30)
    .map((user) => user.name)
    .forEach((name) => console.log(name));
  
  console.log("\n2. Using traditional for loop:");
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18 && users[i].age < 30) {
      console.log(users[i].name);
    }
  }
  
  console.log("\n3. Using forEach:");
  users.forEach((user) => {
    if (user.age > 18 && user.age < 30) {
      console.log(user.name);
    }
  });
  
  console.log("\n4. Using reduce:");
  const filteredNames = users.reduce((acc, user) => {
    if (user.age > 18 && user.age < 30) {
      acc.push(user.name);
    }
    return acc;
  }, []);
  filteredNames.forEach(name => console.log(name));
  
  console.log("\n5. Using for...of loop:");
  for (const user of users) {
    if (user.age > 18 && user.age < 30) {
      console.log(user.name);
    }
  }
  

//   Great, Rishi bhai! Here's the JavaScript version of your notes in the same structured style, focused on ES6+ features like filter, map, forEach, reduce, for...of, etc. — perfect for frontend dev or JavaScript interviews.

// 📘 JavaScript ES6+ Features Notes (Filtering Users by Age)
// javascript
// Copy
// Edit
// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 19 },
//   { name: "Eve", age: 18 },
//   { name: "Frank", age: 21 },
//   { name: "Grace", age: 23 },
//   { name: "Heidi", age: 24 },
//   { name: "Ivan", age: 25 },
//   { name: "Judy", age: 26 },
//   { name: "Mallory", age: 27 },
//   { name: "Niaj", age: 28 },
//   { name: "Oscar", age: 29 },
//   { name: "Peggy", age: 30 },
// ];
// ✅ 1. filter() + map() + forEach()
// javascript
// Copy
// Edit
// users
//   .filter(user => user.age > 18 && user.age < 30)
//   .map(user => user.name)
//   .forEach(name => console.log(name));
// 📌 Concepts Used:

// filter(): Returns users with age between 19–29.

// map(): Extracts only the names.

// forEach(): Prints each name.

// 📝 Note:

// Functional programming approach — clean and expressive.

// ✅ 2. Traditional for Loop
// javascript
// Copy
// Edit
// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 18 && users[i].age < 30) {
//     console.log(users[i].name);
//   }
// }
// 📌 Concepts Used:

// Classic iteration.

// Good control over loop variables.

// 📝 Note:

// Still used where performance or fine control is needed.

// ✅ 3. forEach() Method
// javascript
// Copy
// Edit
// users.forEach(user => {
//   if (user.age > 18 && user.age < 30) {
//     console.log(user.name);
//   }
// });
// 📌 Concepts Used:

// forEach() for clean iteration.

// Arrow function for compact syntax.

// 📝 Note:

// Great for side effects like logging.

// ✅ 4. Using reduce()
// javascript
// Copy
// Edit
// const names = users.reduce((acc, user) => {
//   if (user.age > 18 && user.age < 30) {
//     acc.push(user.name);
//   }
//   return acc;
// }, []);
// names.forEach(name => console.log(name));
// 📌 Concepts Used:

// reduce() to accumulate names.

// Works even if you want to compute other aggregates.

// 📝 Note:

// Best when transforming a structure or computing total, average, etc.

// ✅ 5. for...of Loop
// javascript
// Copy
// Edit
// for (const user of users) {
//   if (user.age > 18 && user.age < 30) {
//     console.log(user.name);
//   }
// }
// 📌 Concepts Used:

// for...of: Clean syntax for array iteration.

// Great with break or continue.

// 📝 Note:

// Cleaner than for loop, readable for beginners.

// 📒 Summary Table
// Method	ES6+ Feature	Notes
// filter + map + forEach	✅ Yes	Most readable, modern way
// for loop	❌ No	Traditional, still useful for indexes
// forEach()	✅ Yes	Clean, expressive for side-effects
// reduce()	✅ Yes	Powerful for transformation or accumulation
// for...of	✅ Yes	Clean and readable, supports break/continue

// Would you like both Java and JavaScript notes bundled into a PDF or Word file for revision or sharing?