# JavaScript Basic Interview Preparation Notes
## Chapters 4-6: Objects, Functions & Arrays

---

# CHAPTER 4: OBJECTS

## 4.1 What is an Object?

### Definition
An object is a collection of key-value pairs where each key is a string (or Symbol) and each value can be any data type, including other objects. Objects are fundamental to JavaScript and provide a way to group related data and functions together.

### Why Objects?
- Model real-world entities (users, products, cars)
- Organize related data
- Encapsulate data with behavior (methods)
- Create complex data structures

---

## 4.2 Creating Objects

### 1. Object Literal (Most Common)
```javascript
const person = {
    name: "Vinod",
    age: 30,
    isStudent: false,
    greet: function () {
        console.log("Welcome to World Best JavaScript Course");
    }
};
```

### 2. Using new Object()
```javascript
const person = new Object();
person.name = "Vinod";
person.age = 30;
```

### 3. Using Object.create()
```javascript
const protoPerson = {
    greet: function() {
        console.log("Hello");
    }
};
const person = Object.create(protoPerson);
person.name = "Vinod";
```

### 4. Constructor Function
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("Vinod", 30);
```

---

## 4.3 Accessing Object Properties

### Dot Notation
```javascript
console.log(person.name);    // "Vinod"
console.log(person.age);     // 30
```

### Bracket Notation
```javascript
console.log(person["name"]);  // "Vinod"
console.log(person["age"]);   // 30
```

### When to Use Bracket Notation
- Property name has spaces or special characters
- Property name is stored in a variable
- Property name is a Symbol

```javascript
const person = {
    "full name": "Hitesh Choudhary",
    age: 18
};

console.log(person["full name"]);  // "Hitesh Choudhary"
// person.full name would cause syntax error
```

---

## 4.4 Adding and Modifying Properties

### Adding New Properties
```javascript
person.job = "web dev";
person["city"] = "Jaipur";
```

### Modifying Existing Properties
```javascript
person.age = 20;
person["name"] = "John";
```

### Dynamic Keys
```javascript
let idType = "studentId";

let student = {
    [idType]: "A123456",  // Dynamic key
    sName: "Vinod",
    sAge: 29
};

console.log(student.studentId);  // "A123456"
```

**Use Case:** React forms where field names are dynamic

---

## 4.5 Object Methods

### Defining Methods
```javascript
const person = {
    name: "Vinod",
    age: 30,
    
    // Method shorthand (ES6)
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    },
    
    // Traditional function
    sayHello: function() {
        console.log("Hello!");
    }
};

person.greet();      // "Hello, I'm Vinod"
person.sayHello();   // "Hello!"
```

---

## 4.6 The `this` Keyword

### Definition
The `this` keyword refers to an object. Which object depends on how `this` is being invoked.

### `this` in Different Contexts

#### 1. In Object Method
```javascript
const person = {
    name: "Kodyfier",
    greet: function () {
        console.log(this);  // Refers to person object
        console.log(this.name);  // "Kodyfier"
    }
};
person.greet();
```

#### 2. Alone / Global
```javascript
console.log(this);  // Window object (browser) or global (Node)
```

#### 3. In Regular Function
```javascript
function greet() {
    console.log(this);  // Window object (browser)
}
greet();
```

#### 4. In Function (Strict Mode)
```javascript
"use strict";
function greet() {
    console.log(this);  // undefined
}
greet();
```

#### 5. In Arrow Function
```javascript
const obj = {
    name: "thapa technical",
    greet: () => {
        console.log(this);  // Window/global (no own this)
    }
};
obj.greet();
```

**Important:** Arrow functions don't have their own `this`, they inherit from surrounding scope.

---

## 4.7 Pass by Reference vs Pass by Value

### Primitive Types (Pass by Value)
```javascript
let num = 10;
let num2 = num;  // Copy of value
num2 = 20;

console.log(num);   // 10 (original unchanged)
console.log(num2);  // 20
```

### Objects (Pass by Reference)
```javascript
let person1 = { name: "John" };
let person2 = person1;  // Reference to same object
person2.name = "Jane";

console.log(person1.name);  // "Jane" (original changed)
console.log(person2.name);  // "Jane"
```

### Object Comparison
```javascript
let objA = { name: "Alice" };
let objB = { name: "Alice" };
let objC = objA;

console.log(objA === objB);  // false (different references)
console.log(objA === objC);  // true (same reference)
```

**Key Point:** Objects are equal only if they refer to the same memory location.

---

## 4.8 Object Methods (Built-in)

### 1. Object.keys()
Returns array of property names
```javascript
const person = { name: "John", age: 30, city: "NYC" };
console.log(Object.keys(person));
// Output: ["name", "age", "city"]
```

### 2. Object.values()
Returns array of property values
```javascript
console.log(Object.values(person));
// Output: ["John", 30, "NYC"]
```

### 3. Object.entries()
Returns array of [key, value] pairs
```javascript
console.log(Object.entries(person));
// Output: [["name", "John"], ["age", 30], ["city", "NYC"]]
```

### 4. Object.hasOwnProperty()
Checks if property exists on object
```javascript
console.log(person.hasOwnProperty("name"));   // true
console.log(person.hasOwnProperty("salary")); // false
```

### 5. Object.assign()
Copies properties from source to target
```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target);  // { a: 1, b: 2, c: 3 }
```

### 6. Object.freeze()
Prevents adding/modifying/deleting properties
```javascript
const person = { name: "John" };
Object.freeze(person);
person.name = "Jane";  // Fails silently (strict mode: error)
console.log(person.name);  // "John"
```

### 7. Object.seal()
Prevents adding/deleting but allows modifying
```javascript
const person = { name: "John" };
Object.seal(person);
person.name = "Jane";  // Allowed
person.age = 30;       // Fails
console.log(person);   // { name: "Jane" }
```

---

## 4.9 JSON (JavaScript Object Notation)

### JSON.stringify()
Converts object to JSON string
```javascript
const student = {
    id: 1,
    name: "Vinod",
    age: 29
};

const jsonData = JSON.stringify(student);
console.log(jsonData);
// Output: '{"id":1,"name":"Vinod","age":29}'
console.log(typeof jsonData);  // "string"
```

### JSON.parse()
Converts JSON string back to object
```javascript
const parsedObject = JSON.parse(jsonData);
console.log(parsedObject);
// Output: { id: 1, name: "Vinod", age: 29 }
console.log(typeof parsedObject);  // "object"
```

**Important:** Functions are not preserved in JSON (only data)

---

## 4.10 call(), apply(), bind()

### call()
Invokes function with specific `this` and individual arguments
```javascript
function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };
greet.call(person, "Hello");
// Output: "Hello, John!"
```

### apply()
Invokes function with specific `this` and array of arguments
```javascript
function greet(message, punctuation) {
    console.log(`${message}, ${this.name}${punctuation}`);
}

const person = { name: "John" };
greet.apply(person, ["Hello", "!"]);
// Output: "Hello, John!"
```

### bind()
Creates new function with specific `this` (doesn't invoke immediately)
```javascript
function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };
const greetJohn = greet.bind(person);
greetJohn("Hello");
// Output: "Hello, John!"
```

### Comparison
| Method | Invokes Immediately? | Arguments Format |
|--------|---------------------|------------------|
| call() | Yes | Individual |
| apply() | Yes | Array |
| bind() | No | Individual (preset) |

### Use Cases
- **call()**: Borrow methods, invoke with specific context
- **apply()**: When arguments are in array
- **bind()**: Create reusable function with fixed context

### Example: Borrowing Method
```javascript
const bioData = {
    name: "Thapa Technical",
    age: 30,
    greet: function () {
        console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
    }
};

const student = { name: "vinod", age: "29" };
bioData.greet.call(student);  // "Hi, I'm vinod. I'm 29 years old."
```

---

## 4.11 Data Modeling with Objects

### Example: Product Object
```javascript
const product = {
    id: 1,
    name: "Laptop",
    category: "Computers",
    brand: "ExampleBrand",
    price: 999.99,
    stock: 50,
    description: "Powerful laptop with quad-core i5 processor",
    
    start: function() {
        console.log("Engine started!");
    }
};
```

### Example: User Object
```javascript
const user = {
    username: "hitesh",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    
    login: function() {
        this.isLoggedIn = true;
        console.log(`${this.username} logged in`);
    }
};
```

---

## 4.12 Symbols as Object Keys

### Creating Symbol Keys
```javascript
const mySym = Symbol("key1");
const JsUser = {
    name: "Hitesh",
    [mySym]: "mykey1",  // Symbol key
    age: 18
};

console.log(JsUser[mySym]);  // "mykey1"
```

**Use Case:** Create unique property keys that won't collide with other properties

---

## 4.13 Interview Questions - Chapter 4

### Q1: Difference between pass by value and pass by reference?
**Answer:**
- Pass by value: Copy of primitive value (number, string, boolean)
- Pass by reference: Reference to object (changes affect original)

### Q2: Why are two objects with same properties not equal?
**Answer:** Objects are compared by reference, not by value. They must point to same memory location.

### Q3: What does `this` refer to in arrow functions?
**Answer:** Arrow functions don't have their own `this`. They inherit `this` from surrounding scope (lexical scoping).

### Q4: Difference between call(), apply(), and bind()?
**Answer:**
- call(): Invokes immediately with individual arguments
- apply(): Invokes immediately with array arguments
- bind(): Returns new function, doesn't invoke immediately

### Q5: How to deep clone an object?
**Answer:**
```javascript
// Method 1: JSON (doesn't work with functions)
const clone = JSON.parse(JSON.stringify(original));

// Method 2: Object.assign (shallow copy)
const clone = Object.assign({}, original);

// Method 3: Spread operator (shallow copy)
const clone = { ...original };
```

---

# CHAPTER 5: FUNCTIONS

## 5.1 What is a Function?

### Definition
A function is a reusable block of code that performs a specific task. Functions help organize code, avoid repetition, and make programs more modular.

### Why Functions?
- Code reusability
- Modularity
- Abstraction
- Easier debugging and testing

---

## 5.2 Function Declaration

### Syntax
```javascript
function functionName(parameter1, parameter2) {
    // Code to execute
    return result;
}
```

### Example
```javascript
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();  // Invoke the function
```

### Function with Parameters
```javascript
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result: ", result);  // 8
```

---

## 5.3 Function Expression

### Syntax
```javascript
const functionName = function(parameters) {
    // Code to execute
};
```

### Example
```javascript
const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5));  // 7
```

### Key Difference from Declaration
```javascript
// Function Declaration: Can be called before definition
console.log(addOne(5));  // 6 (works)

function addOne(num) {
    return num + 1;
}

// Function Expression: Cannot be called before definition
// console.log(addTwo(5));  // Error (doesn't work)

const addTwo = function(num) {
    return num + 2;
};
```

**Hoisting:** Function declarations are hoisted, expressions are not.

---

## 5.4 Arrow Functions (ES6)

### Syntax
```javascript
const functionName = (parameters) => {
    // Code to execute
};
```

### Different Forms

#### 1. Basic Arrow Function
```javascript
const addTwo = (num1, num2) => {
    return num1 + num2;
};
```

#### 2. Implicit Return (One Line)
```javascript
const addTwo = (num1, num2) => num1 + num2;
```

#### 3. Implicit Return with Parentheses
```javascript
const addTwo = (num1, num2) => (num1 + num2);
```

#### 4. Returning Object
```javascript
const addUser = () => ({ username: "hitesh" });
// Note: Parentheses required for object literal
```

### Arrow Function with `this`
```javascript
const user = {
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
};

user.welcomeMessage();  // "hitesh, welcome to website"
user.username = "sam";
user.welcomeMessage();  // "sam, welcome to website"
```

**Important:** Arrow functions don't have their own `this`, they inherit from surrounding scope.

---

## 5.5 Default Parameters

### Syntax
```javascript
function functionName(param = defaultValue) {
    // Code
}
```

### Example
```javascript
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Rishi"));  // "Rishi just logged in"
console.log(loginUserMessage());         // "sam just logged in"
```

---

## 5.6 Rest Parameters

### Syntax
```javascript
function functionName(...paramName) {
    // paramName is an array
}
```

### Example
```javascript
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [200, 400, 500, 2000]
```

### With Other Parameters
```javascript
function calculateCartPrice(val1, val2, ...num1) {
    console.log(val1);  // 200
    console.log(val2);  // 400
    console.log(num1);  // [500, 2000]
}

calculateCartPrice(200, 400, 500, 2000);
```

**Use Case:** Handle variable number of arguments

---

## 5.7 Passing Objects to Functions

### Example
```javascript
const user = {
    username: "hitesh",
    prices: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user);
// Output: "Username is hitesh and price is 199"

// Direct object
handleObject({
    username: "sam",
    price: 399
});
// Output: "Username is sam and price is 399"
```

---

## 5.8 Passing Arrays to Functions

### Example
```javascript
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[2];
}

console.log(returnSecondValue(myNewArray));  // 100
console.log(returnSecondValue([200, 400, 500, 1000]));  // 500
```

---

## 5.9 Scope in JavaScript

### Definition
Scope determines the accessibility of variables and functions in different parts of your code.

### Types of Scope

#### 1. Global Scope
```javascript
let a = 300;  // Global variable
function one() {
    console.log(a);  // Can access global
}
one();
```

#### 2. Function Scope (Block Scope with let/const)
```javascript
let a = 300;
if (true) {
    let a = 10;      // Block-scoped
    const b = 20;    // Block-scoped
    var c = 300;     // Function-scoped (NOT block-scoped)
    console.log("INNER:", a);  // 10
}

console.log(a);  // 300 (global a unchanged)
// console.log(b);  // Error: b is not defined
console.log(c);  // 300 (var leaks out of block)
```

#### 3. Nested Function Scope
```javascript
function one() {
    const username = "Rishi";
    
    function two() {
        const website = "youtube";
        console.log(username);  // Can access outer function's variable
    }
    
    // console.log(website);  // Error: website not accessible here
    two();
}

one();
// two();  // Error: two not accessible outside one()
```

### Scope Chain
JavaScript looks for variables in the current scope, then outer scopes, until global scope.

---

## 5.10 Hoisting

### Definition
Hoisting is JavaScript's behavior of moving declarations to the top of the current scope.

### Function Hoisting
```javascript
console.log(addOne(5));  // Works: 6

function addOne(num) {
    return num + 1;
}
```

### Variable Hoisting
```javascript
console.log(a);  // undefined (not error)
var a = 10;

// console.log(b);  // Error: Cannot access before initialization
let b = 20;
```

### Function Expression Hoisting
```javascript
// addTwo(5);  // Error: addTwo is not a function

const addTwo = function(num) {
    return num + 2;
};
```

**Key Points:**
- Function declarations are fully hoisted
- `var` declarations are hoisted but initialized as undefined
- `let` and `const` are hoisted but in Temporal Dead Zone (TDZ)
- Function expressions are not hoisted

---

## 5.11 IIFE (Immediately Invoked Function Expression)

### Definition
IIFE is a function that runs immediately after it's defined.

### Syntax
```javascript
(function() {
    // Code
})();
```

### Named IIFE
```javascript
(function chai() {
    console.log("DB CONNECTED");
})();
// Output: "DB CONNECTED"
```

### IIFE with Parameters
```javascript
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
// Output: "DB CONNECTED TWO hitesh"
```

### Arrow Function IIFE
```javascript
(() => {
    console.log("DB CONNECTED");
})();
```

### Use Cases
- Avoid polluting global namespace
- Create private scope
- Execute initialization code once
- Module pattern implementation

### Important: Semicolon
```javascript
(function chai() {
    console.log("DB CONNECTED");
})();  // Semicolon required to separate from next IIFE

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
```

---

## 5.12 First-Class Functions

### Definition
Functions are first-class citizens in JavaScript, meaning they can be:
- Assigned to variables
- Passed as arguments
- Returned from other functions
- Stored in data structures

### Example
```javascript
// Function as variable
const greet = function() {
    console.log("Hello");
};

// Function as argument
function executeFunction(fn) {
    fn();
}
executeFunction(greet);  // "Hello"

// Function as return value
function createGreeter(message) {
    return function() {
        console.log(message);
    };
}
const greetHello = createGreeter("Hello");
greetHello();  // "Hello"
```

---

## 5.13 Higher-Order Functions

### Definition
Functions that take other functions as arguments or return functions.

### Example
```javascript
// Higher-order function
function withLog(fn) {
    return function(...args) {
        console.log("Calling function with:", args);
        const result = fn(...args);
        console.log("Result:", result);
        return result;
    };
}

const add = (a, b) => a + b;
const loggedAdd = withLog(add);
loggedAdd(2, 3);
// Output:
// "Calling function with: [2, 3]"
// "Result: 5"
```

---

## 5.14 Callback Functions

### Definition
A function passed as an argument to another function to be executed later.

### Example
```javascript
function processData(data, callback) {
    // Process data
    const result = data.toUpperCase();
    callback(result);
}

processData("hello", function(result) {
    console.log(result);  // "HELLO"
});
```

**Use Case:** Asynchronous operations, event handlers

---

## 5.15 Closures

### Definition
A closure is a function that has access to variables from its outer (enclosing) function, even after the outer function has returned.

### Example
```javascript
function outer() {
    const outerVar = "I'm from outer";
    
    function inner() {
        console.log(outerVar);  // Accesses outerVar
    }
    
    return inner;
}

const closureFunc = outer();
closureFunc();  // "I'm from outer"
```

### Practical Example: Counter
```javascript
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.decrement();  // 1
console.log(counter.getCount());  // 1
```

### Use Cases
- Data privacy
- Function factories
- Maintaining state
- Memoization

---

## 5.16 Interview Questions - Chapter 5

### Q1: Difference between function declaration and expression?
**Answer:**
- Declaration: Hoisted, can be called before definition
- Expression: Not hoisted, must be defined before use

### Q2: What is the difference between regular function and arrow function?
**Answer:**
- Arrow functions don't have their own `this`
- Arrow functions don't have `arguments` object
- Arrow functions cannot be used as constructors
- Arrow functions are always anonymous

### Q3: What is hoisting?
**Answer:** JavaScript's behavior of moving declarations to the top. Function declarations are fully hoisted, variables are hoisted but not initialized.

### Q4: What is a closure?
**Answer:** A function that retains access to variables from its outer scope even after the outer function has returned. Used for data privacy and maintaining state.

### Q5: What is IIFE and why use it?
**Answer:** Immediately Invoked Function Expression - runs immediately after definition. Used to avoid polluting global namespace and create private scope.

### Q6: What is the difference between rest parameters and spread operator?
**Answer:**
- Rest: Collects multiple arguments into array (...args)
- Spread: Expands array into individual arguments [...arr]

---

# CHAPTER 6: ARRAYS

## 6.1 What is an Array?

### Definition
An array is an ordered collection of values stored in a single variable. Each value has a numeric index starting from 0.

### Why Arrays?
- Store multiple values in single variable
- Maintain order
- Easy iteration
- Built-in methods for manipulation

---

## 6.2 Creating Arrays

### 1. Array Literal (Most Common)
```javascript
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];
const mixedArray = [1, "hello", true, { name: "John" }, [1, 2]];
```

### 2. Array Constructor
```javascript
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2);  // [1, 2, 3, 4]
```

### 3. Array with Single Number
```javascript
const singleElement = new Array(5);  // Creates array with 5 empty slots
console.log(singleElement);  // [empty × 5]

const literal = [5];  // Creates array with one element: 5
console.log(literal);  // [5]
```

---

## 6.3 Accessing Array Elements

### By Index
```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);  // "apple"
console.log(fruits[1]);  // "banana"
console.log(fruits[2]);  // "cherry"
```

### Negative Index (Not supported natively)
```javascript
console.log(fruits[-1]);  // undefined
// Use: fruits[fruits.length - 1] for last element
```

---

## 6.4 Array Methods

### 1. push()
Adds element(s) to the end (modifies original)
```javascript
const myArr = [0, 1, 2, 3, 4, 5];
myArr.push(6);
myArr.push(7);
console.log(myArr);  // [0, 1, 2, 3, 4, 5, 6, 7]
```

### 2. pop()
Removes last element (modifies original)
```javascript
myArr.pop();
console.log(myArr);  // [0, 1, 2, 3, 4, 5, 6]
```

### 3. unshift()
Adds element(s) to the beginning (modifies original)
```javascript
myArr.unshift(9);
console.log(myArr);  // [9, 0, 1, 2, 3, 4, 5, 6]
```

### 4. shift()
Removes first element (modifies original)
```javascript
myArr.shift();
console.log(myArr);  // [0, 1, 2, 3, 4, 5, 6]
```

### 5. includes()
Checks if element exists (returns boolean)
```javascript
console.log(myArr.includes(9));   // false
console.log(myArr.includes(3));   // true
```

### 6. indexOf()
Returns index of element (or -1 if not found)
```javascript
console.log(myArr.indexOf(3));   // 3
console.log(myArr.indexOf(10));  // -1
```

### 7. join()
Converts array to string with separator
```javascript
const newArr = myArr.join();
console.log(newArr);  // "0,1,2,3,4,5,6"
console.log(myArr.join("-"));  // "0-1-2-3-4-5-6"
console.log(myArr);  // Original array unchanged
```

---

## 6.5 slice() vs splice()

### slice()
Extracts portion of array (doesn't modify original)
```javascript
const myArr = [0, 1, 2, 3, 4, 5];
console.log("A ", myArr);  // [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3);
console.log(myn1);  // [1, 2] (from index 1 to 2, excludes 3)
console.log("B ", myArr);  // [0, 1, 2, 3, 4, 5] (unchanged)
```

**Syntax:** `array.slice(start, end)` - end is exclusive

### splice()
Removes/adds elements (modifies original)
```javascript
const myArr = [0, 1, 2, 3, 4, 5];
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);  // [0, 4, 5] (removed elements)
console.log(myn2);  // [1, 2, 3] (removed elements)
```

**Syntax:** `array.splice(start, deleteCount, item1, item2, ...)`

### Key Difference
| Method | Modifies Original | Returns |
|--------|------------------|---------|
| slice() | No | Extracted portion |
| splice() | Yes | Removed elements |

---

## 6.6 Array Concatenation

### concat()
Merges arrays (doesn't modify original)
```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
// ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
```

### Spread Operator (Modern Way)
```javascript
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
```

### Push with Array (Not Recommended)
```javascript
marvel_heros.push(dc_heros);
console.log(marvel_heros);
// ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// Creates nested array (not what you want)
```

---

## 6.7 flat()

Flattens nested arrays
```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
```

**Syntax:** `array.flat(depth)` - depth defaults to 1, Infinity flattens all levels

---

## 6.8 Array.from()

Creates array from iterable or array-like object
```javascript
// From string
console.log(Array.from("Hitesh"));
// ["H", "i", "t", "e", "s", "h"]

// From object (interesting case)
console.log(Array.from({ name: "hitesh" }));
// [] (empty - need to specify keys or values)

// From object with keys
console.log(Array.from({ length: 3 }, (_, i) => i + 1));
// [1, 2, 3]
```

---

## 6.9 Array.of()

Creates array from set of values
```javascript
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// [100, 200, 300]
```

**Difference from new Array():**
- `Array.of(5)` → `[5]`
- `new Array(5)` → `[empty × 5]`

---

## 6.10 Array.isArray()

Checks if value is array
```javascript
console.log(Array.isArray("Hitesh"));  // false
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({}));       // false
```

---

## 6.11 Array Iteration Methods

### map()
Creates new array by applying function to each element
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
```

### filter()
Creates new array with elements that pass condition
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6]
```

### reduce()
Reduces array to single value
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // 15
```

### find()
Returns first element that satisfies condition
```javascript
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];
const user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: "Jane" }
```

### some()
Returns true if at least one element passes condition
```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);  // true
```

### every()
Returns true if all elements pass condition
```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);  // true
```

---

## 6.12 Array Sorting

### sort()
Sorts array elements (modifies original)
```javascript
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);  // ["apple", "banana", "cherry"]

// Numbers need compare function
const numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b);
console.log(numbers);  // [1, 1, 3, 4, 5, 9]
```

### reverse()
Reverses array order (modifies original)
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]
```

---

## 6.13 Array Searching

### findIndex()
Returns index of first element that satisfies condition
```javascript
const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex(num => num > 3);
console.log(index);  // 3
```

### lastIndexOf()
Returns last index of element
```javascript
const numbers = [1, 2, 3, 2, 1];
console.log(numbers.lastIndexOf(2));  // 3
```

---

## 6.14 Array Transformation

### fill()
Fills array with static value
```javascript
const arr = new Array(5);
arr.fill(0);
console.log(arr);  // [0, 0, 0, 0, 0]

arr.fill(1, 1, 3);  // Fill from index 1 to 2
console.log(arr);  // [0, 1, 1, 0, 0]
```

### copyWithin()
Copies array elements within array
```javascript
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);  // Copy from index 3 to index 0
console.log(arr);  // [4, 5, 3, 4, 5]
```

---

## 6.15 Destructuring Arrays

### Basic Destructuring
```javascript
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);   // "red"
console.log(second);  // "green"
console.log(third);   // "blue"
```

### Skipping Elements
```javascript
const colors = ["red", "green", "blue"];
const [first, , third] = colors;
console.log(first);  // "red"
console.log(third);  // "blue"
```

### Rest Pattern
```javascript
const colors = ["red", "green", "blue", "yellow"];
const [first, ...rest] = colors;
console.log(first);  // "red"
console.log(rest);   // ["green", "blue", "yellow"]
```

### Default Values
```javascript
const colors = ["red"];
const [first, second = "green"] = colors;
console.log(first);   // "red"
console.log(second);  // "green"
```

---

## 6.16 Array vs Object

| Feature | Array | Object |
|---------|-------|--------|
| Keys | Numeric indices (0, 1, 2...) | Strings/Symbols |
| Order | Maintained | Not guaranteed |
| Iteration | for, for-of, forEach | for-in, Object.keys() |
| Use Case | Ordered list of items | Key-value pairs |
| Length | .length property | No length property |

---

## 6.17 Common Array Operations

### Check if Array is Empty
```javascript
const arr = [];
if (arr.length === 0) {
    console.log("Array is empty");
}
```

### Remove Duplicates
```javascript
const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)];
console.log(unique);  // [1, 2, 3]
```

### Find Maximum/Minimum
```javascript
const numbers = [1, 5, 3, 9, 2];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max);  // 9
console.log(min);  // 1
```

### Chunk Array
```javascript
function chunk(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(chunk(arr, 2));  // [[1, 2], [3, 4], [5, 6]]
```

---

## 6.18 Interview Questions - Chapter 6

### Q1: Difference between slice() and splice()?
**Answer:**
- slice(): Extracts portion, doesn't modify original
- splice(): Removes/adds elements, modifies original

### Q2: How to check if a value is an array?
**Answer:** Use `Array.isArray(value)` - returns true if array, false otherwise.

### Q3: Difference between map() and forEach()?
**Answer:**
- map(): Returns new array, used for transformation
- forEach(): Returns undefined, used for side effects

### Q4: How to flatten nested arrays?
**Answer:** Use `array.flat(depth)` or `array.flat(Infinity)` for all levels.

### Q5: Difference between spread operator and rest parameter?
**Answer:**
- Spread: Expands array into individual elements [...arr]
- Rest: Collects elements into array [...args]

### Q6: How to remove duplicates from array?
**Answer:** `[...new Set(array)]` or use filter with indexOf.

### Q7: What is the difference between push() and concat()?
**Answer:**
- push(): Adds to end, modifies original, can create nested arrays
- concat(): Merges arrays, returns new array, doesn't modify original

---

# QUICK REFERENCE

## Objects
```javascript
// Create
const obj = { key: "value" };

// Access
obj.key          // Dot notation
obj["key"]       // Bracket notation

// Methods
Object.keys(obj)      // Array of keys
Object.values(obj)    // Array of values
Object.entries(obj)   // Array of [key, value] pairs
Object.freeze(obj)    // Prevent modifications
Object.assign({}, obj) // Copy object

// this
const obj = {
    method() { console.log(this); }  // this refers to obj
};
```

## Functions
```javascript
// Declaration
function name() {}

// Expression
const name = function() {}

// Arrow
const name = () => {}

// IIFE
(function() {})()

// Default params
function name(param = "default") {}

// Rest params
function name(...args) {}
```

## Arrays
```javascript
// Create
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

// Methods
arr.push(4)        // Add to end
arr.pop()          // Remove from end
arr.unshift(0)     // Add to start
arr.shift()        // Remove from start
arr.slice(1, 3)    // Extract (no modify)
arr.splice(1, 2)   // Remove/insert (modifies)
arr.includes(2)    // Check existence
arr.indexOf(2)     // Get index
arr.join("-")      // Convert to string
arr.flat()         // Flatten nested
arr.map(x => x*2)  // Transform
arr.filter(x => x>2) // Filter
arr.reduce((a,b) => a+b, 0) // Reduce
```

---

# BEST PRACTICES

## Objects
1. Use object literals for simple objects
2. Use bracket notation for dynamic keys
3. Freeze objects that shouldn't change
4. Use Object.keys/values/entries for iteration
5. Be aware of pass by reference behavior

## Functions
1. Use arrow functions for callbacks
2. Use default parameters for flexibility
3. Use rest parameters for variable arguments
4. Avoid global functions (use IIFE or modules)
5. Keep functions small and focused

## Arrays
1. Use const for arrays (methods modify in place)
2. Use map/filter/reduce for transformations
3. Use spread operator for copying
4. Use Array.isArray() for type checking
5. Prefer forEach over for loops for readability

---

# COMMON MISTAKES TO AVOID

## Objects
1. Comparing objects with === (compares references)
2. Forgetting that objects are passed by reference
3. Using var instead of let/const in objects
4. Not checking for undefined properties
5. Confusing this in arrow functions

## Functions
1. Calling function expressions before definition
2. Forgetting return statement
3. Not handling default parameters
4. Confusing this in different contexts
5. Not understanding hoisting

## Arrays
1. Using push with array (creates nested array)
2. Confusing slice() and splice()
3. Modifying array while iterating
4. Forgetting that methods modify original
5. Not checking array length before access

---

**End of Chapter 4-6 Notes**
**Good luck with your interview preparation! 🚀**
