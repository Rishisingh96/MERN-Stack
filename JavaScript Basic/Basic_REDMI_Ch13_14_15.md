# JavaScript Basic Interview Preparation Notes
## Chapters 13-15: ES6, Async JavaScript & OOPs

---

# CHAPTER 13: ES6 FEATURES

## 13.1 What is ES6?

### Definition
ES6 (ECMAScript 2015) is a major update to JavaScript that introduced many new features to make the language more powerful and easier to work with.

### Why ES6?
- Cleaner syntax
- Better scoping (let, const)
- Arrow functions
- Classes
- Modules
- Promises
- Template literals
- Destructuring
- Spread/Rest operators
- And many more

---

## 13.2 let and const

### let
Block-scoped variable declaration
```javascript
let name = "John";
name = "Jane";  // Can be reassigned

if (true) {
    let blockScoped = "visible only here";
}
// blockScoped is not accessible here
```

### const
Block-scoped constant declaration
```javascript
const PI = 3.14159;
// PI = 3.14;  // ERROR: Cannot be reassigned

const user = { name: "John" };
user.name = "Jane";  // Allowed (object reference unchanged)
```

**Key Points:**
- `let`: Can be reassigned, block-scoped
- `const`: Cannot be reassigned, block-scoped
- Both are hoisted but in Temporal Dead Zone (TDZ)

---

## 13.3 Template Literals

### Definition
String literals allowing embedded expressions and multi-line strings.

### Basic Usage
```javascript
const name = "John";
const age = 30;

// Template literal
const message = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log(message);
// Output: "Hello, my name is John and I'm 30 years old."
```

### Multi-line Strings
```javascript
const html = `
    <div>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
    </div>
`;
```

### Expression Interpolation
```javascript
const a = 10;
const b = 20;
console.log(`Sum: ${a + b}`);  // "Sum: 30"
console.log(`2 + 2 = ${2 + 2}`);  // "2 + 2 = 4"
```

### Tagged Templates
```javascript
function tag(strings, ...values) {
    console.log(strings);  // ["Hello ", "! How are you?"]
    console.log(values);   // ["John"]
    return strings[0] + values[0] + strings[1];
}

const name = "John";
const result = tag`Hello ${name}! How are you?`;
console.log(result);  // "Hello John! How are you?"
```

---

## 13.4 Destructuring

### Array Destructuring
```javascript
const numbers = [1, 2, 3, 4, 5];

// Basic destructuring
const [first, second] = numbers;
console.log(first, second);  // 1, 2

// Skipping elements
const [first, , third] = numbers;
console.log(first, third);  // 1, 3

// Rest pattern
const [first, ...rest] = numbers;
console.log(first);  // 1
console.log(rest);   // [2, 3, 4, 5]

// Default values
const [a, b, c = 10] = [1, 2];
console.log(a, b, c);  // 1, 2, 10
```

### Object Destructuring
```javascript
const user = {
    name: "John",
    age: 30,
    city: "New York"
};

// Basic destructuring
const { name, age } = user;
console.log(name, age);  // "John", 30

// Renaming
const { name: userName, age: userAge } = user;
console.log(userName, userAge);  // "John", 30

// Default values
const { name, country = "USA" } = user;
console.log(name, country);  // "John", "USA"

// Rest pattern
const { name, ...rest } = user;
console.log(name);  // "John"
console.log(rest);  // { age: 30, city: "New York" }
```

### Destructuring in Function Parameters
```javascript
// Array destructuring
function sum([a, b]) {
    return a + b;
}
console.log(sum([1, 2]));  // 3

// Object destructuring
function greet({ name, age }) {
    console.log(`Hello ${name}, you're ${age}`);
}
greet({ name: "John", age: 30 });
// Output: "Hello John, you're 30"
```

### Nested Destructuring
```javascript
const user = {
    name: "John",
    address: {
        city: "New York",
        country: "USA"
    }
};

const { address: { city, country } } = user;
console.log(city, country);  // "New York", "USA"
```

---

## 13.5 Spread and Rest Operators

### Spread Operator
Expands iterable into individual elements
```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined);  // { a: 1, b: 2, c: 3, d: 4 }

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));  // 6

// Copy array
const original = [1, 2, 3];
const copy = [...original];

// Copy object
const originalObj = { name: "John" };
const copyObj = { ...originalObj };
```

### Rest Parameter
Collects multiple elements into array
```javascript
// Function parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// With other parameters
function greet(greeting, ...names) {
    console.log(greeting);
    names.forEach(name => console.log(name));
}
greet("Hello", "John", "Jane", "Bob");
// Output: "Hello", "John", "Jane", "Bob"

// Destructuring
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4, 5]
```

---

## 13.6 Arrow Functions

### Syntax
```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => {
    return a + b;
};

// Implicit return (one line)
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const square = x => x * x;

// No parameters
const greet = () => "Hello";
```

### Key Differences
```javascript
// 1. No own 'this'
const obj = {
    name: "John",
    regular: function() {
        console.log(this.name);  // "John"
    },
    arrow: () => {
        console.log(this.name);  // undefined (inherits from outer scope)
    }
};

// 2. No 'arguments' object
const regular = function() {
    console.log(arguments);
};
const arrow = () => {
    console.log(arguments);  // ReferenceError
};

// 3. Cannot be used as constructor
const Person = (name) => {
    this.name = name;
};
// new Person("John");  // TypeError
```

### Use Cases
```javascript
// Callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// Array methods
const filtered = numbers.filter(n => n > 1);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Event handlers
button.addEventListener('click', () => {
    console.log('Clicked');
});
```

---

## 13.7 Default Parameters

### Syntax
```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet();        // "Hello, Guest!"
greet("John");  // "Hello, John!"
```

### With Destructuring
```javascript
function createUser({ name = "Anonymous", age = 0 } = {}) {
    console.log(name, age);
}

createUser();                          // "Anonymous", 0
createUser({ name: "John" });          // "John", 0
createUser({ name: "Jane", age: 25 });  // "Jane", 25
```

### Expressions as Defaults
```javascript
function getValue(value = getDefault()) {
    return value;
}

function getDefault() {
    console.log("Default called");
    return 10;
}

getValue();       // "Default called", 10
getValue(20);     // 20 (default not called)
```

---

## 13.8 Enhanced Object Literals

### Property Shorthand
```javascript
const name = "John";
const age = 30;

// ES5
const user = {
    name: name,
    age: age,
    greet: function() {
        console.log("Hello");
    }
};

// ES6
const user = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};
```

### Computed Property Names
```javascript
const key = "username";
const value = "john123";

const user = {
    [key]: value
};
console.log(user);  // { username: "john123" }
```

### Method Shorthand
```javascript
const obj = {
    // ES5
    method: function() {
        return "Hello";
    },
    
    // ES6
    method() {
        return "Hello";
    }
};
```

---

## 13.9 Classes

### Class Declaration
```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    
    greet() {
        console.log(`Hello, ${this.username}`);
    }
}

const user = new User("john", "john@example.com");
user.greet();  // "Hello, john"
```

### Class Expression
```javascript
const User = class {
    constructor(username) {
        this.username = username;
    }
    
    greet() {
        console.log(`Hello, ${this.username}`);
    }
};
```

### Getters and Setters
```javascript
class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    
    get email() {
        return this._email.toUpperCase();
    }
    
    set email(value) {
        this._email = value;
    }
    
    get password() {
        return `${this._password}abc`;
    }
    
    set password(value) {
        this._password = value;
    }
}

const user = new User("john@example.com", "123");
console.log(user.email);  // "JOHN@EXAMPLE.COM"
```

### Static Methods
```javascript
class User {
    constructor(username) {
        this.username = username;
    }
    
    static createId() {
        return Math.random().toString(36).substr(2, 9);
    }
    
    logMe() {
        console.log(`Username: ${this.username}`);
    }
}

console.log(User.createId());  // Random ID
// const user = new User("john");
// user.createId();  // ERROR: Not a function
```

### Inheritance
```javascript
class User {
    constructor(username) {
        this.username = username;
    }
    
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher = new Teacher("john", "john@teacher.com", "123");
teacher.logMe();       // "USERNAME is john"
teacher.addCourse();   // "A new course was added by john"
console.log(teacher instanceof User);  // true
```

---

## 13.10 Modules

### Export
```javascript
// utils.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export class Calculator {
    add(a, b) {
        return a + b;
    }
}

// Default export
export default function greet(name) {
    return `Hello, ${name}`;
}
```

### Import
```javascript
// main.js
import greet from './utils.js';
import { PI, add, Calculator } from './utils.js';
import * as utils from './utils.js';

console.log(greet("John"));  // "Hello, John"
console.log(PI);              // 3.14159
console.log(add(1, 2));       // 3
const calc = new Calculator();
console.log(calc.add(1, 2));  // 3
```

---

## 13.11 Symbols

### Creating Symbols
```javascript
const sym1 = Symbol("description");
const sym2 = Symbol("description");

console.log(sym1 === sym2);  // false (always unique)
```

### Using Symbols as Object Keys
```javascript
const id = Symbol("id");

const user = {
    name: "John",
    [id]: 123
};

console.log(user[id]);  // 123
console.log(Object.keys(user));  // ["name"] (symbols not included)
```

### Well-Known Symbols
```javascript
const obj = {
    [Symbol.toStringTag]: "MyObject"
};

console.log(obj.toString());  // "[object MyObject]"
```

---

## 13.12 Iterators and Generators

### Iterators
```javascript
const myIterable = {
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                if (step < 3) {
                    return { value: step++, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

for (const value of myIterable) {
    console.log(value);  // 0, 1, 2
}
```

### Generators
```javascript
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generateSequence();
console.log(generator.next().value);  // 1
console.log(generator.next().value);  // 2
console.log(generator.next().value);  // 3
console.log(generator.next().value);  // undefined

// for...of with generator
for (const value of generateSequence()) {
    console.log(value);  // 1, 2, 3
}
```

---

## 13.13 Interview Questions - Chapter 13

### Q1: Difference between var, let, and const?
**Answer:**
- `var`: Function-scoped, can be redeclared, hoisted with undefined
- `let`: Block-scoped, cannot be redeclared, hoisted in TDZ
- `const`: Block-scoped, cannot be reassigned, hoisted in TDZ

### Q2: What is destructuring?
**Answer:** Extracting values from arrays or objects into variables using a concise syntax.

### Q3: Difference between spread and rest?
**Answer:**
- Spread: Expands iterable into individual elements
- Rest: Collects multiple elements into array

### Q4: What are arrow functions?
**Answer:** Concise function syntax with implicit return, no own `this`, no `arguments` object.

### Q5: What is a Symbol?
**Answer:** Unique and immutable primitive type, often used as object property keys to avoid collisions.

---

# CHAPTER 14: ASYNCHRONOUS JAVASCRIPT

## 14.1 Synchronous vs Asynchronous

### Synchronous
Code executes line by line, blocking until complete
```javascript
console.log("Start");
console.log("Middle");
console.log("End");
// Output: Start, Middle, End (in order)
```

### Asynchronous
Code doesn't block, continues execution while waiting
```javascript
console.log("Start");
setTimeout(() => {
    console.log("Delayed");
}, 1000);
console.log("End");
// Output: Start, End, Delayed (after 1 second)
```

---

## 14.2 Callbacks

### Definition
A function passed as an argument to another function to be executed later.

### Basic Callback
```javascript
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("John", sayGoodbye);
// Output: "Hello, John", "Goodbye!"
```

### Callback Hell
```javascript
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                // Nested callbacks - hard to read
            });
        });
    });
});
```

### Solving Callback Hell
```javascript
// Use named functions instead of anonymous
function step1(data, callback) {
    callback(data);
}

function step2(data, callback) {
    callback(data);
}

step1("data1", (result1) => {
    step2(result1, (result2) => {
        console.log(result2);
    });
});
```

---

## 14.3 Promises

### Definition
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

### Promise States
- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

### Creating a Promise
```javascript
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    const success = true;
    
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
```

### Consuming a Promise
```javascript
myPromise
    .then((result) => {
        console.log(result);  // "Operation successful!"
    })
    .catch((error) => {
        console.log(error);  // "Operation failed!"
    })
    .finally(() => {
        console.log("Promise settled");
    });
```

### Chaining Promises
```javascript
fetch('/api/user')
    .then(response => response.json())
    .then(user => {
        console.log(user);
        return fetch(`/api/posts/${user.id}`);
    })
    .then(response => response.json())
    .then(posts => {
        console.log(posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### Promise Methods

#### Promise.all()
Waits for all promises to resolve, rejects if any reject
```javascript
const promise1 = Promise.resolve(3);
const promise2 = 1337;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);  // [3, 1337, "foo"]
});
```

#### Promise.allSettled()
Waits for all promises to settle (fulfilled or rejected)
```javascript
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("error");
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log(results);
    // [
    //   { status: 'fulfilled', value: 3 },
    //   { status: 'rejected', reason: 'error' },
    //   { status: 'fulfilled', value: 'foo' }
    // ]
});
```

#### Promise.race()
Resolves/rejects when first promise settles
```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 50, 'two'));

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);  // "two" (faster)
});
```

#### Promise.any()
Resolves when first promise fulfills
```javascript
const promise1 = Promise.reject("error1");
const promise2 = Promise.reject("error2");
const promise3 = Promise.resolve("success");

Promise.any([promise1, promise2, promise3]).then((value) => {
    console.log(value);  // "success"
});
```

### Promise.resolve() and Promise.reject()
```javascript
// Promise.resolve
Promise.resolve("Success").then(value => console.log(value));
// Output: "Success"

// Promise.reject
Promise.reject("Error").catch(error => console.log(error));
// Output: "Error"
```

---

## 14.4 Async/Await

### Definition
Syntactic sugar over Promises, making asynchronous code look synchronous.

### Basic Usage
```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

### Async Functions Always Return Promises
```javascript
async function hello() {
    return "Hello";
}

hello().then(value => console.log(value));  // "Hello"
```

### Error Handling
```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;  // Re-throw if needed
    }
}
```

### Parallel Execution
```javascript
async function fetchMultiple() {
    const [user, posts, comments] = await Promise.all([
        fetch('/api/user').then(r => r.json()),
        fetch('/api/posts').then(r => r.json()),
        fetch('/api/comments').then(r => r.json())
    ]);
    
    return { user, posts, comments };
}
```

### Sequential Execution
```javascript
async function fetchSequential() {
    const user = await fetch('/api/user').then(r => r.json());
    const posts = await fetch(`/api/posts/${user.id}`).then(r => r.json());
    const comments = await fetch(`/api/comments/${posts[0].id}`).then(r => r.json());
    
    return { user, posts, comments };
}
```

---

## 14.5 Event Loop

### Definition
The Event Loop is responsible for executing code, collecting and processing events, and executing queued sub-tasks.

### How It Works
1. Call Stack: Executes synchronous code
2. Web APIs: Handle async operations (setTimeout, fetch, etc.)
3. Callback Queue: Stores callbacks from Web APIs
4. Event Loop: Pushes callbacks from queue to stack when stack is empty

### Example
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Output: Start, End, Promise, Timeout
// Explanation:
// 1. "Start" - synchronous
// 2. setTimeout - goes to Web API, then to Task Queue
// 3. Promise - goes to Microtask Queue
// 4. "End" - synchronous
// 5. Microtask Queue (Promise) executes before Task Queue (setTimeout)
```

### Microtask Queue vs Task Queue
```javascript
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

// Output: Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2
// Microtasks (Promises) execute before Macrotasks (setTimeout)
```

---

## 14.6 Practical Examples

### Example 1: Fetch Data with Async/Await
```javascript
async function getUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
```

### Example 2: Retry Mechanism
```javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}
```

### Example 3: Timeout Promise
```javascript
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithTimeout(url, ms = 5000) {
    try {
        const response = await Promise.race([
            fetch(url),
            timeout(ms).then(() => { throw new Error('Timeout'); })
        ]);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
```

### Example 4: Sequential vs Parallel
```javascript
// Sequential (slow)
async function sequential() {
    const start = Date.now();
    await timeout(1000);
    await timeout(1000);
    await timeout(1000);
    console.log(`Sequential: ${Date.now() - start}ms`);
}

// Parallel (fast)
async function parallel() {
    const start = Date.now();
    await Promise.all([timeout(1000), timeout(1000), timeout(1000)]);
    console.log(`Parallel: ${Date.now() - start}ms`);
}
```

### Example 5: Promisifying Callbacks
```javascript
function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    };
}

const readFile = promisify(require('fs').readFile);
readFile('file.txt').then(data => console.log(data));
```

---

## 14.7 Interview Questions - Chapter 14

### Q1: What is the difference between synchronous and asynchronous?
**Answer:**
- Synchronous: Code blocks until complete, executes line by line
- Asynchronous: Code doesn't block, continues while waiting

### Q2: What is a Promise?
**Answer:** Object representing eventual completion/failure of async operation with states: pending, fulfilled, rejected.

### Q3: Difference between Promise.all() and Promise.allSettled()?
**Answer:**
- `all()`: Rejects if any promise rejects
- `allSettled()`: Waits for all to settle (fulfilled or rejected)

### Q4: What is async/await?
**Answer:** Syntactic sugar over Promises, makes async code look synchronous with try/catch error handling.

### Q5: Explain the Event Loop.
**Answer:** Mechanism that manages execution of code, callbacks, and events. Processes Microtask Queue before Task Queue.

---

# CHAPTER 15: OBJECT-ORIENTED PROGRAMMING (OOP)

## 15.1 What is OOP?

### Definition
Object-Oriented Programming is a programming paradigm based on "objects" containing data and code. JavaScript uses prototype-based inheritance.

### OOP Principles
1. **Encapsulation**: Bundling data and methods
2. **Inheritance**: Child classes inherit from parent
3. **Polymorphism**: Same interface, different implementations
4. **Abstraction**: Hiding complex implementation details

---

## 15.2 Objects in JavaScript

### Creating Objects
```javascript
// Object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function() {
        console.log(this);
    }
};

// Constructor function
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    };
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
```

### The `new` Keyword
When `new` is used:
1. A new object is created
2. Prototype is linked to constructor's prototype
3. Constructor is called with `this` bound to new object
4. New object is returned

---

## 15.3 Prototypes

### Definition
Every JavaScript object has a prototype, which is another object from which it inherits properties and methods.

### Prototype Chain
```javascript
function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
};

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
};

const chai = new createUser("chai", 25);
chai.increment();
chai.printMe();  // "Score is 26"
```

### Adding Methods to Prototype
```javascript
// Adding to all objects
Object.prototype.hitesh = function() {
    console.log("hitesh is present in all objects");
};

// Adding to all arrays
Array.prototype.heyHitesh = function() {
    console.log("Hitesh says hello");
};

const myHeros = ["thor", "spiderman"];
myHeros.heyHitesh();  // "Hitesh says hello"
```

### Prototype Inheritance
```javascript
const User = {
    name: "chai",
    email: "chai@google.com"
};

const Teacher = {
    makeVideo: true
};

// Old syntax
Teacher.__proto__ = User;

// Modern syntax
Object.setPrototypeOf(Teacher, User);
console.log(Teacher.name);  // "chai"
```

---

## 15.4 Classes (ES6)

### Class Declaration
```javascript
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    encryptPassword() {
        return `${this.password}abc`;
    }
    
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());  // "123abc"
console.log(chai.changeUsername());   // "CHAI"
```

### Behind the Scenes (Prototype)
```javascript
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
};

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());  // "123abc"
```

**Key Point:** Classes are syntactic sugar over prototype-based inheritance.

---

## 15.5 Inheritance

### Using extends and super
```javascript
class User {
    constructor(username) {
        this.username = username;
    }
    
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);  // Call parent constructor
        this.email = email;
        this.password = password;
    }
    
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.logMe();       // "USERNAME is chai"
chai.addCourse();   // "A new course was added by chai"
console.log(chai instanceof User);  // true
```

### Method Overriding
```javascript
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak();  // "Dog barks"
```

---

## 15.6 Getters and Setters

### Using Class Syntax
```javascript
class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    
    get email() {
        return this._email.toUpperCase();
    }
    
    set email(value) {
        this._email = value;
    }
    
    get password() {
        return `${this._password}hitesh`;
    }
    
    set password(value) {
        this._password = value;
    }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);  // "H@HITESH.AI"
```

### Using Object.defineProperty
```javascript
function User(email, password) {
    this._email = email;
    this._password = password;
    
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });
    
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    });
}

const chai = new User("chai@chai.com", "chai");
console.log(chai.email);  // "CHAI@CHAI.COM"
```

---

## 15.7 Static Properties and Methods

### Static Methods
```javascript
class User {
    constructor(username) {
        this.username = username;
    }
    
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    
    static createId() {
        return `123`;
    }
}

const hitesh = new User("hitesh");
// hitesh.createId();  // ERROR: Not a function
console.log(User.createId());  // "123"
```

### Static Methods with Inheritance
```javascript
class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());  // "123" (inherited static method)
```

---

## 15.8 call(), apply(), bind() in OOP

### Using call() for Constructor Borrowing
```javascript
function SetUsername(username) {
    // Complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username);  // Borrow constructor
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);  // { username: "chai", email: "chai@fb.com", password: "123" }
```

---

## 15.9 Practical Examples

### Example 1: Bank Account
```javascript
class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }
    
    get balance() {
        return this._balance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            return true;
        }
        return false;
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            return true;
        }
        return false;
    }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.balance);  // 120
```

### Example 2: Shopping Cart
```javascript
class Cart {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }
    
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }
    
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

const cart = new Cart();
cart.addItem({ id: 1, name: "Book", price: 20 });
cart.addItem({ id: 2, name: "Pen", price: 5 });
console.log(cart.getTotal());  // 25
```

### Example 3: Employee Hierarchy
```javascript
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    getAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }
    
    getAnnualSalary() {
        return super.getAnnualSalary() + this.bonus;
    }
}

const manager = new Manager("John", 5000, 10000);
console.log(manager.getAnnualSalary());  // 70000
```

---

## 15.10 Interview Questions - Chapter 15

### Q1: What is a prototype?
**Answer:** Object from which other objects inherit properties and methods. Every object has a prototype.

### Q2: How does `new` keyword work?
**Answer:**
1. Creates new object
2. Links to constructor's prototype
3. Binds `this` to new object
4. Returns new object

### Q3: Difference between class and constructor function?
**Answer:** Class is syntactic sugar over constructor function with prototype-based inheritance. Both work the same under the hood.

### Q4: What are getters and setters?
**Answer:** Methods to get and set property values with additional logic, using `get` and `set` keywords.

### Q5: What is a static method?
**Answer:** Method called on class itself, not on instances. Used for utility functions.

### Q6: What is method overriding?
**Answer:** Child class provides specific implementation of method already defined in parent class.

---

# QUICK REFERENCE

## ES6 Features
```javascript
// Variables
let name = "John";
const PI = 3.14;

// Template literals
const message = `Hello ${name}`;

// Destructuring
const [a, b] = [1, 2];
const { name, age } = user;

// Spread/Rest
const arr = [...arr1, ...arr2];
function sum(...nums) {}

// Arrow function
const add = (a, b) => a + b;

// Default parameters
function greet(name = "Guest") {}

// Classes
class User {
    constructor(name) { this.name = name; }
    method() {}
}

// Modules
import { func } from './module.js';
export default function() {}
```

## Async JavaScript
```javascript
// Callback
function getData(callback) {
    callback(data);
}

// Promise
const promise = new Promise((resolve, reject) => {
    resolve(data);
});
promise.then(result => {}).catch(error => {});

// Async/Await
async function fetchData() {
    try {
        const data = await fetch(url);
        return await data.json();
    } catch (error) {
        console.error(error);
    }
}

// Promise methods
Promise.all([p1, p2])
Promise.race([p1, p2])
Promise.allSettled([p1, p2])
```

## OOP
```javascript
// Constructor function
function User(name) {
    this.name = name;
}
User.prototype.method = function() {};

// Class
class User {
    constructor(name) { this.name = name; }
    method() {}
}

// Inheritance
class Teacher extends User {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

// Getters/Setters
class User {
    get email() { return this._email; }
    set email(value) { this._email = value; }
}

// Static
class User {
    static createId() { return "123"; }
}

// call/apply/bind
func.call(thisArg, arg1, arg2);
func.apply(thisArg, [arg1, arg2]);
const bound = func.bind(thisArg);
```

---

# BEST PRACTICES

## ES6
1. Use `const` by default, `let` when reassignment needed
2. Use template literals for string interpolation
3. Use destructuring for cleaner code
4. Use arrow functions for callbacks
5. Use classes for OOP, understand prototype underneath

## Async JavaScript
1. Prefer async/await over callbacks
2. Always handle errors with try/catch
3. Use Promise.all for parallel operations
4. Understand Event Loop for debugging
5. Avoid mixing callbacks and promises

## OOP
1. Use classes for better structure
2. Use inheritance wisely (composition over inheritance)
3. Use getters/setters for validation
4. Use static methods for utilities
5. Understand prototype chain

---

# COMMON MISTAKES TO AVOID

## ES6
1. Using `var` instead of `let`/`const`
2. Forgetting destructuring defaults
3. Confusing spread and rest
4. Using arrow functions when `this` needed
5. Not understanding template literal escaping

## Async JavaScript
1. Not handling promise rejections
2. Mixing callbacks and promises
3. Forgetting `await` in async functions
4. Not understanding Event Loop order
5. Creating callback hell

## OOP
1. Confusing class with constructor function
2. Not using `super()` in child constructor
3. Overusing inheritance
4. Not understanding prototype chain
5. Forgetting `this` context issues

---

**End of Chapter 13-15 Notes**
**Good luck with your interview preparation! 🚀**
