# JavaScript Basic Interview Preparation Notes
## Chapters 1-3: Variables, Data Types, Operators, Statements & Loops

---

# CHAPTER 1: VARIABLES & DATA TYPES

## 1.1 Variables in JavaScript

### Definition
A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.

### Types of Variable Declarations

#### 1. `var` (Old way - NOT recommended)
```javascript
var accountPassword = "12345"
accountCity = "Jaipur"  // Can be declared without var (global scope)
```
**Issues with var:**
- Function-scoped (not block-scoped)
- Can be redeclared
- Hoisted with undefined value
- **Avoid using var in modern JavaScript**

#### 2. `let` (Modern way - Preferred for variables that change)
```javascript
let accountEmail = "hitesh@google.com"
accountEmail = "hc@hc.com"  // Can be reassigned
let accountState;  // Can be declared without value (undefined)
```
**Characteristics:**
- Block-scoped
- Cannot be redeclared in same scope
- Can be reassigned
- Hoisted but in Temporal Dead Zone (TDZ)

#### 3. `const` (Modern way - Preferred for constants)
```javascript
const accountId = 144553
// accountId = 2  // ERROR: Cannot be reassigned
```
**Characteristics:**
- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized at declaration
- Hoisted but in Temporal Dead Zone (TDZ)

### Variable Naming Rules
```javascript
// VALID variable names:
let my_firstName = "John";        // Starts with letter, contains underscore
let _myLastName$ = "Doe";         // Starts with underscore
let $cityName = "New York";       // Starts with dollar sign

// INVALID variable names:
let 123myAge = 25;                // ❌ Cannot start with number
let my@Email = "john@example.com"; // ❌ Special characters not allowed
```

**Rules:**
- Must start with letter, underscore (_), or dollar sign ($)
- Can contain letters, numbers, underscores, and dollar signs
- Case-sensitive
- Cannot use reserved keywords

---

## 1.2 Data Types in JavaScript

### Primitive Data Types (7 types)

#### 1. Number
```javascript
let age = 18
let score = 33.5
let negative = -5
```
- Represents numeric values (integers and floating-point)
- Range: 2^53 to -2^53 (safe integer range)
- Special values: Infinity, -Infinity, NaN

#### 2. String
```javascript
let name = "hitesh"
let message = 'Hello World'
let template = `Hello ${name}`  // Template literal
```
- Sequence of characters enclosed in quotes
- Can use single (''), double ("") or backticks (`)
- Template literals allow interpolation

#### 3. Boolean
```javascript
let isLoggedIn = false
let isActive = true
```
- Represents logical entity
- Only two values: true or false

#### 4. Undefined
```javascript
let state;  // Automatically assigned undefined
console.log(state);  // undefined
```
- Represents absence of value
- Variable declared but not assigned
- Default value of uninitialized variables

#### 5. Null
```javascript
let emptyValue = null
console.log(typeof null);  // "object" (This is a JavaScript bug)
```
- Represents intentional absence of value
- Must be explicitly assigned
- Different from undefined

#### 6. BigInt
```javascript
const bigNumber = 1234567890123456789012345678901234567890n
```
- For integers larger than 2^53
- Created by appending 'n' to number
- Available since ES2020

#### 7. Symbol
```javascript
const mySymbol = Symbol("description")
```
- Unique and immutable
- Used as object property keys
- Used for creating unique identifiers

### Non-Primitive Data Type

#### Object
```javascript
let user = {
    name: "John",
    age: 30
}
```
- Collection of key-value pairs
- Reference type
- Can contain any data type

---

## 1.3 Type Conversion

### String to Number
```javascript
let score = "33"
let valueInNumber = Number(score)

// Conversion results:
// "33"    => 33
// "33abc" => NaN (Not a Number)
// "hitesh"=> NaN
// true    => 1
// false   => 0
```

### Number to Boolean
```javascript
let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)

// Conversion results:
// 1        => true
// 0        => false
// ""       => false
// "hitesh" => true
// null     => false
// undefined=> false
```

### Number to String
```javascript
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);  // "string"
```

### Quick Conversion Methods
```javascript
// String to Number
let str = "10"
let num = +str           // Using unary plus
let num2 = Number(str)   // Using Number()
let num3 = parseInt(str) // Using parseInt()

// Number to String
let num = 5
let str = String(num)    // Using String()
let str2 = num + ""      // Using concatenation
let str3 = num.toString() // Using toString()
```

---

## 1.4 Comparison Operators

### Equality Operators
```javascript
console.log(2 == 1);   // false (loose equality)
console.log(2 === 1);  // false (strict equality)
console.log("2" == 2);  // true  (type coercion)
console.log("2" === 2); // false (no type coercion)
```

**Difference:**
- `==` : Loose equality (converts types before comparing)
- `===` : Strict equality (compares both value and type)

### Comparison Operators
```javascript
console.log(2 > 1);    // true
console.log(2 >= 1);   // true
console.log(2 < 1);    // false
console.log(2 != 1);   // true
console.log(2 !== 1);  // true (strict not equal)
```

### Special Cases with null and undefined
```javascript
console.log(null > 0);       // false
console.log(null == 0);      // false
console.log(null >= 0);      // true (weird behavior)

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
```

**Important:** Avoid comparisons with null and undefined due to inconsistent behavior.

---

## 1.5 Truthy and Falsy Values

### Falsy Values (treated as false in boolean context)
```javascript
false
0 (zero)
"" (empty string)
null
undefined
NaN (Not a Number)
```

### Truthy Values (treated as true in boolean context)
```javascript
true
Any non-empty string ("hello")
Any non-zero number (42, -5)
Arrays and objects (even if empty)
```

### Example
```javascript
let myName = "hitesh"
if (myName) {
    console.log("this is truthy value");
} else {
    console.log("its a falsy value");
}
// Output: "this is truthy value"
```

---

## 1.6 parseInt & parseFloat

### parseInt()
Converts string to integer (whole number)
```javascript
parseInt("42")       // 42
parseInt("42.5")     // 42 (decimal truncated)
parseInt("123abc")   // 123
parseInt("abc123")   // NaN
parseInt("077")      // 77 (leading zeros ignored)
parseInt("   123 ")  // 123 (whitespace ignored)
```

### parseFloat()
Converts string to floating-point number (decimal)
```javascript
parseFloat("42.5")   // 42.5
parseFloat("42")     // 42
parseFloat("123.45abc") // 123.45
```

### isNaN()
Checks if value is Not a Number
```javascript
isNaN("vinod")       // true
isNaN("123")         // false
isNaN(NaN)           // true
```

**Important:** NaN === NaN returns false (NaN is not equal to itself)

---

## 1.7 Operations

### Arithmetic Operators
```javascript
let value = 3
let negValue = -value  // -3

console.log(2 + 2);    // Addition: 4
console.log(2 - 2);    // Subtraction: 0
console.log(2 * 2);    // Multiplication: 4
console.log(2 ** 3);   // Exponentiation: 8
console.log(2 / 3);    // Division: 0.666...
console.log(2 % 3);    // Modulus: 2
```

### String Concatenation
```javascript
let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2  // "hello hitesh"
```

### Type Coercion in Operations
```javascript
console.log("1" + 2);     // "12" (number converted to string)
console.log(1 + "2");     // "12" (number converted to string)
console.log("1" + 2 + 2); // "122" (left to right evaluation)
console.log(1 + 2 + "2"); // "32" (addition first, then concatenation)
```

### Increment/Decrement
```javascript
let gameCounter = 100
++gameCounter;  // 101 (pre-increment)
gameCounter++;  // 102 (post-increment)
--gameCounter;  // 101 (pre-decrement)
gameCounter--;  // 100 (post-decrement)
```

### Unary Plus
```javascript
console.log(+true);   // 1
console.log(+"");     // 0
```

---

## 1.8 Interview Questions - Chapter 1

### Q1: Difference between null and undefined?
**Answer:** 
- `null`: Intentional absence of value (empty box on purpose)
- `undefined`: Variable declared but not assigned (box not opened yet)

### Q2: Why is typeof null === "object"?
**Answer:** This is a historical bug in JavaScript. null should have its own type but for backward compatibility, it returns "object".

### Q3: Difference between == and ===?
**Answer:**
- `==`: Loose equality, performs type coercion
- `===`: Strict equality, checks both value and type

### Q4: What are truthy and falsy values?
**Answer:**
- Falsy: false, 0, "", null, undefined, NaN
- Truthy: Everything else (including empty arrays and objects)

### Q5: Why is NaN !== NaN?
**Answer:** NaN represents "Not a Number" and is conceptually not equal to any value, including itself. Use isNaN() to check for NaN.

---

# CHAPTER 2: OPERATORS & STATEMENTS

## 2.1 If-Else Statements

### Basic If Statement
```javascript
const temperature = 41

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
```

### If-Else If-Else Chain
```javascript
const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
```

### Block Scope with If
```javascript
const score = 200

if (score > 100) {
    let power = "fly"  // Block-scoped
    console.log(`User power: ${power}`);
}
// console.log(power);  // ERROR: power is not defined here
```

**Important:** Use `let` instead of `var` inside if blocks to maintain block scope.

---

## 2.2 Logical Operators

### Logical AND (&&)
Returns true if both operands are true
```javascript
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}
// Output: Nothing (2 == 3 is false)
```

### Logical OR (||)
Returns true if at least one operand is true
```javascript
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// Output: "User logged in"
```

### Logical NOT (!)
Inverts the boolean value
```javascript
let isTrue = true
console.log(!isTrue);  // false
```

---

## 2.3 Switch Statement

### Syntax
```javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    
    case value2:
        // Code to execute if expression === value2
        break;
    
    default:
        // Code to execute if no case matches
        break;
}
```

### Example
```javascript
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    
    default:
        console.log("default case match");
        break;
}
// Output: "March"
```

### Important Points
- Uses strict equality (===) for comparison
- `break` statement prevents fall-through
- `default` case executes if no match found
- Without `break`, execution continues to next case (fall-through)

### Fall-Through Example
```javascript
const day = "Monday"

switch (day) {
    case "Monday":
    case "Tuesday":
        console.log("Weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Other day");
}
// Output: "Weekday"
```

---

## 2.4 Ternary Operator

### Syntax
```javascript
condition ? expression1 : expression2
```

### Example
```javascript
let age = 18
let canVote = age >= 18 ? "Yes" : "No"
console.log(canVote);  // "Yes"
```

### Nested Ternary
```javascript
let score = 85
let grade = score >= 90 ? "A" : 
           score >= 80 ? "B" : 
           score >= 70 ? "C" : "F"
console.log(grade);  // "B"
```

---

## 2.5 Interview Questions - Chapter 2

### Q1: Difference between if-else and switch?
**Answer:**
- if-else: Better for complex conditions with ranges
- switch: Better for discrete values, more readable for multiple equality checks

### Q2: What happens if you forget break in switch?
**Answer:** Execution falls through to the next case (fall-through), which can cause unexpected behavior.

### Q3: When to use ternary operator?
**Answer:** For simple conditional assignments. Avoid nesting for complex logic as it reduces readability.

---

# CHAPTER 3: LOOPS

## 3.1 For Loop

### Syntax
```javascript
for (initialization; condition; iteration) {
    // Code to execute in each iteration
}
```

### Components
- **Initialization**: Executed once before loop starts
- **Condition**: Checked before each iteration
- **Iteration**: Executed after each iteration

### Example
```javascript
for (let num = 1; num <= 10; num++) {
    console.log(num);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

### Use Cases
- When you know the exact number of iterations
- Iterating over arrays with index
- Performing tasks a specific number of times

### Infinite Loop
```javascript
for (;;) {
    // Runs forever until break
    // Equivalent to while (true) {}
}
```

**Use Case:** Game development (continuous rendering until game over)

---

## 3.2 While Loop

### Syntax
```javascript
while (condition) {
    // Code to execute while condition is true
}
```

### Example
```javascript
let num = 1
while (num <= 10) {
    console.log(num);
    num++;
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

### Use Cases
- When number of iterations is unknown
- Reading data until condition is met
- Validating user input

### Example: Multiplication Table
```javascript
let num = 1
while (num <= 10) {
    console.log(`5 * ${num} = ${5 * num}`);
    num++;
}
```

---

## 3.3 Do-While Loop

### Syntax
```javascript
do {
    // Code to execute at least once
} while (condition);
```

### Example
```javascript
let num = 1
do {
    console.log(num);
    num++;
} while (num <= 10);
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

### Key Difference
- **Guarantees at least one execution** (even if condition is false)
- Condition is checked AFTER first iteration

### Use Case: User Input Validation
```javascript
let userInput;
let positiveNumber;

do {
    userInput = prompt("Enter any positive number");
    positiveNumber = parseFloat(userInput);
} while (isNaN(positiveNumber) || positiveNumber < 0);

console.log("Valid number:", positiveNumber);
```

---

## 3.4 For-Of Loop

### Syntax
```javascript
for (const element of iterable) {
    // Code to execute for each element
}
```

### With Arrays
```javascript
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
// Output: 1, 2, 3, 4, 5
```

### With Strings
```javascript
const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// Output: H, e, l, l, o, , w, o, r, l, d, !
```

### With Maps
```javascript
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// Output: IN :- India, USA :- United States of America, Fr :- France
```

### Limitation
```javascript
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
// ERROR: Objects are not iterable with for-of
```

**Use Cases:**
- Iterating over arrays
- Iterating over strings
- Iterating over Maps and Sets

---

## 3.5 For-In Loop

### Syntax
```javascript
for (const key in object) {
    // Code to execute for each key
}
```

### With Objects
```javascript
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// Output: js shortcut is for javascript, cpp shortcut is for C++, etc.
```

### With Arrays
```javascript
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
// Output: js, rb, py, java, cpp (returns indices as keys)
```

### With Maps
```javascript
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")

for (const key in map) {
    console.log(key);
}
// Output: Nothing (Maps are not iterable with for-in)
```

**Use Cases:**
- Iterating over object properties
- Iterating over array indices (not recommended for arrays)

---

## 3.6 forEach Loop

### Syntax
```javascript
array.forEach(function(currentValue, index, array) {
    // Code to execute for each element
});
```

### Basic Usage
```javascript
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
    console.log(val);
})
// Output: js, ruby, java, python, cpp
```

### With Arrow Function
```javascript
coding.forEach((item) => {
    console.log(item);
})
```

### With Callback Function
```javascript
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)
```

### With Index and Array
```javascript
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
// Output: js 0 ["js", "ruby", "java", "python", "cpp"], etc.
```

### With Array of Objects
```javascript
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
// Output: javascript, java, python
```

### Important Notes
- Cannot use `break` or `continue` in forEach
- Always returns `undefined`
- Designed for side effects, not for returning values

---

## 3.7 Loop Comparison

| Loop Type | Best For | Can Break/Continue | Returns Value |
|-----------|----------|-------------------|---------------|
| for       | Known iterations | Yes | No |
| while     | Unknown iterations | Yes | No |
| do-while  | At least one iteration | Yes | No |
| for-of    | Arrays, Strings, Maps | Yes (with break) | No |
| for-in    | Objects | Yes (with break) | No |
| forEach   | Arrays with callback | No | No |

---

## 3.8 Practical Examples

### Example 1: Check if Number is Even or Odd
```javascript
let num = 7
if (num % 2 === 0) {
    console.log("Num is even");
} else {
    console.log("Num is odd");
}
// Output: "Num is odd"
```

### Example 2: Check if Number is Prime
```javascript
let num = 13
let isPrime = true

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Num is prime");
} else {
    console.log("Num is not prime");
}
// Output: "Num is prime"
```

### Example 3: Check Number Type
```javascript
let num = -10
if (num === 0) {
    console.log("Num is zero");
} else if (num > 0) {
    console.log("Num is positive");
} else {
    console.log("Num is negative");
}
// Output: "Num is negative"
```

### Example 4: Calculate Sum 1 to 10
```javascript
let sum = 0
for (let num = 1; num <= 10; num++) {
    sum = sum + num;
}
console.log(sum);  // 55
```

### Example 5: Generate Multiplication Table
```javascript
for (let num = 1; num <= 10; num++) {
    console.log(`5 * ${num} = ${5 * num}`);
}
```

### Example 6: Check Leap Year
```javascript
let year = 2020

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "it's a leap year");
} else {
    console.log(year, "it's not a leap year");
}
// Output: "2020 it's a leap year"
```

### Example 7: Draw Pattern
```javascript
// Pattern:
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let pattern = ""
    for (let j = 1; j <= i; j++) {
        pattern = pattern + " *"
    }
    console.log(pattern);
}
```

---

## 3.9 Interview Questions - Chapter 3

### Q1: Difference between for-of and for-in?
**Answer:**
- `for-of`: Iterates over values (arrays, strings, maps)
- `for-in`: Iterates over keys/indices (objects, arrays)

### Q2: When to use forEach vs for loop?
**Answer:**
- `forEach`: When you need to perform operation on each element, don't need break/continue
- `for loop`: When you need more control (break, continue, skip indices)

### Q3: What is the difference between while and do-while?
**Answer:**
- `while`: Checks condition before execution (might not execute)
- `do-while`: Executes at least once, then checks condition

### Q4: Can you use break in forEach?
**Answer:** No, forEach doesn't support break or continue. Use for-of or for loop instead.

### Q5: How to iterate over object properties?
**Answer:** Use for-in loop or Object.keys()/Object.values()/Object.entries()

---

# QUICK REFERENCE

## Variable Declaration
```javascript
const CONSTANT = "value"  // Use for constants
let variable = "value"    // Use for variables that change
// var oldWay = "value"   // Avoid using
```

## Type Conversion
```javascript
Number("33")    // 33
String(33)      // "33"
Boolean("text") // true
parseInt("42")  // 42
parseFloat("42.5") // 42.5
```

## Comparison
```javascript
===  // Strict equality (recommended)
==   // Loose equality (avoid)
!==  // Strict not equal
!=   // Loose not equal
```

## Loops Summary
```javascript
// For loop - known iterations
for (let i = 0; i < 10; i++) {}

// While loop - unknown iterations
while (condition) {}

// Do-while - at least once
do {} while (condition);

// For-of - values
for (const item of array) {}

// For-in - keys
for (const key in object) {}

// forEach - callback
array.forEach((item) => {});
```

---

# BEST PRACTICES

1. **Always use `const` by default, `let` when reassignment is needed**
2. **Avoid `var` in modern JavaScript**
3. **Use `===` instead of `==` for comparisons**
4. **Use `for-of` for arrays instead of `for-in`**
5. **Use `forEach` for simple array operations**
6. **Always include `break` in switch cases (unless intentional fall-through)**
7. **Use meaningful variable names**
8. **Initialize variables when possible**
9. **Check for null/undefined before using object properties**
10. **Use template literals for string concatenation**

---

# COMMON MISTAKES TO AVOID

1. **Forgetting `break` in switch statements**
2. **Using `==` instead of `===`**
3. **Declaring variables without `let`/`const` (creates global variables)**
4. **Using `for-in` for arrays (returns indices, not values)**
5. **Expecting `forEach` to support `break` or `continue`**
6. **Comparing with `null` or `undefined` directly**
7. **Not handling `NaN` properly (use `isNaN()`)**
8. **Confusing `null` and `undefined`**
9. **Using `var` inside blocks (function-scoped, not block-scoped)**
10. **Forgetting that `typeof null` returns `"object"`**

---

**End of Chapter 1-3 Notes**
**Good luck with your interview preparation! 🚀**
