# 🚀 JavaScript Interview Questions (Top 220+ Most Asked)
---
## 🚀 11. ES6+ Features (211–240)

211. What are template literals?
212. What is destructuring?
213. What is the spread operator?
214. What is the rest operator?
215. What are modules?
216. What is import/export?
217. What are default exports?
218. What are named exports?
219. What are Sets?
220. What are Maps?
221. What are WeakSets?
222. What are WeakMaps?
223. What are Symbols?
224. What is optional chaining (?.)?
225. What is nullish coalescing (??)?
226. What is BigInt?
227. What is dynamic import()?
228. What are iterators?
229. What are generators?
230. What are modern JavaScript features?
231. What is Top-Level Await?
232. What is Array.prototype.at()?
233. What is Array.prototype.toSorted()?
234. What is Array.prototype.toReversed()?
235. What is Array.prototype.toSpliced()?
236. What is Object.hasOwn()?
237. What is structuredClone()?
238. Difference between CommonJS and ES Modules.
239. What is Tree Shaking?
240. What is Code Splitting?

---

## 🧪 12. Testing (241–250)

241. What is testing in JavaScript?
242. What is unit testing?
243. What is integration testing?
244. What is end-to-end (E2E) testing?
245. What is Jest?
246. What is Mocha?
247. What is Chai?
248. What is Cypress?
249. How do you mock functions in JavaScript?
250. What are testing best practices?

---

## 💼 13. Advanced & Real Interview Questions (251–280)

251. What is currying with practical examples?
252. What is memoization?
253. What is event delegation with examples?
254. What is deep cloning?
255. What is a polyfill?
256. What is transpilation?
257. What is Babel?
258. What is Webpack?
259. How does JavaScript handle memory management?
260. What is a memory leak?
261. How do you optimize JavaScript performance?
262. What are design patterns in JavaScript?
263. What is the Module Pattern?
264. What is the Singleton Pattern?
265. What is the Observer Pattern?
266. What is a debounce function and how do you implement it?
267. What is a throttle function and how do you implement it?
268. What is a polyfill and how do you write one?
269. How would you implement Array.prototype.map()?
270. How would you implement Array.prototype.filter()?
271. How would you implement Array.prototype.reduce()?
272. How would you implement Function.prototype.bind()?
273. How would you implement Promise.all()?
274. What is the difference between shallow copy and deep copy in real applications?
275. What are common JavaScript coding interview questions?
276. What are common JavaScript pitfalls?
277. What causes memory leaks in frontend applications?
278. How do closures affect memory usage?
279. How do you debug JavaScript performance issues?
280. Why is JavaScript the most popular web programming language?

### Final Result

Ab tumhari list:

* Core JS
* Execution Context
* Closures
* Event Loop
* Async JS
* DOM
* OOP
* ES6+
* Modern JS (2026)
* Testing
* Polyfills
* Performance
* Memory Management

sab cover karti hai.

**280 Questions** ka ye version mujhe original 260 se better lagta hai, kyunki isme:

* `Top-Level Await`
* `structuredClone`
* `Object.hasOwn`
* `Array.at`
* `toSorted`
* `toReversed`
* `toSpliced`
* `CommonJS vs ES Modules`
* Polyfill Implementations


# 🚀 11. ES6+ Features (211–240)

Here are detailed, interview-ready answers for **215–218**. These are extremely important for **MERN, React, Node.js, and modern JavaScript interviews**, because modular programming is used everywhere.

---

# 215. What are Modules?

## Definition

A module is a separate JavaScript file that contains code related to a specific functionality.

A module can contain:

* Variables
* Functions
* Classes
* Objects

These can be shared with other files using export/import.

In simple words:

> Modules help divide large applications into smaller, reusable, manageable pieces.

---

## Why Modules Are Needed?

Imagine writing an entire e-commerce project in one JavaScript file.

Example:

* Authentication logic
* Payment logic
* Product logic
* Cart logic
* API calls

Everything in one file becomes:

* Hard to manage
* Hard to debug
* Hard to scale

Modules solve this problem.

---

## Example Without Modules

```javascript
function login() {}
function logout() {}
function addProduct() {}
function removeProduct() {}
function makePayment() {}
```

All code in one file → messy.

---

## Example With Modules

**auth.js**

```javascript
export function login() {}
export function logout() {}
```

**product.js**

```javascript
export function addProduct() {}
export function removeProduct() {}
```

**payment.js**

```javascript
export function makePayment() {}
```

Now code becomes organized.

---

# Advantages of Modules

### 1. Reusability

Write once, use anywhere.

### 2. Maintainability

Code becomes easy to manage.

### 3. Encapsulation

Each module keeps its own scope.

### 4. Scalability

Large applications become manageable.

### 5. Cleaner Code

Better project structure.

---

# Types of Modules in JavaScript

Mainly two types:

### 1. CommonJS Modules

Used in older Node.js.

```javascript
const math = require("./math");
```

Export:

```javascript
module.exports = something;
```

---

### 2. ES Modules (Modern JavaScript)

Used in modern JS and React.

Import:

```javascript
import something from "./file.js";
```

Export:

```javascript
export default something;
```

---

# Real-World MERN Example

Project structure:

```javascript
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── utils/
```

Example:

* Navbar component → separate module
* API services → separate module
* Utility functions → separate module

---

# Interview Answer

> Modules are separate JavaScript files used to organize code into reusable and maintainable units. They help split large applications into smaller components like authentication, payment, and product management. Modules improve reusability, scalability, and code organization. JavaScript mainly supports CommonJS and ES Modules.

---

---

# 216. What is import/export?

## Definition

Import and export are ES6 features used for sharing code between modules.

* **export** → Send code out of a module
* **import** → Bring code into another module

Simple:

> export = share code
> import = use shared code

---

# Example

### math.js

```javascript
export const pi = 3.14;

export function add(a, b) {
    return a + b;
}
```

---

### app.js

```javascript
import { pi, add } from "./math.js";

console.log(pi);
console.log(add(2, 3));
```

Output:

```javascript
3.14
5
```

---

# Exporting Things

You can export:

* Variables
* Functions
* Classes
* Objects

Example:

```javascript
export const name = "Rishi";
export function greet() {}
export class User {}
```

---

# Importing Things

```javascript
import { name, greet, User } from "./file.js";
```

---

# Why Import/Export Important?

Without import/export:

* Code sharing is difficult
* Reusability becomes poor

With import/export:

* Easy code sharing
* Better architecture

---

# Real-World Example in React

Importing components:

```javascript
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
```

Importing hooks:

```javascript
import { useState } from "react";
```

---

# Interview Answer

> Import and export are ES6 features that allow sharing code between JavaScript modules. Export is used to expose variables, functions, or classes from a module, while import is used to access them in another file. They are essential in modern JavaScript applications like React and Node.js for modular architecture.

---

---

# 217. What are Default Exports?

## Definition

Default export means a module exports only one primary value as default.

Each module can have only **one default export**.

---

# Syntax

### Export

```javascript
export default something;
```

### Import

```javascript
import anything from "./file.js";
```

---

# Example with Function

### greet.js

```javascript
export default function greet() {
    console.log("Hello");
}
```

---

### app.js

```javascript
import greet from "./greet.js";

greet();
```

Output:

```javascript
Hello
```

---

# Important Feature

Imported name can be anything.

Example:

```javascript
import myFunction from "./greet.js";
```

This also works.

Why?

Because default export doesn’t require exact name matching.

---

# Example with Class

```javascript
export default class User {
}
```

Import:

```javascript
import User from "./User.js";
```

---

# Real-World Example in React

React components usually use default export.

```javascript
function Home() {
   return <h1>Home</h1>;
}

export default Home;
```

Import:

```javascript
import Home from "./Home";
```

---

# Advantages

* Cleaner syntax
* Easy importing
* Good for single main export

---

# Limitation

Only one default export per file.

Wrong:

```javascript
export default a;
export default b;
```

Not allowed.

---

# Interview Answer

> Default export allows a module to export one main value as the default export. A module can have only one default export. It is imported without curly braces and the imported name can be anything. Default exports are commonly used for React components, classes, or primary module functionality.

---

---

# 218. What are Named Exports?

## Definition

Named exports allow exporting multiple values from the same file using names.

Unlike default export:

* Multiple named exports allowed
* Import names must match exactly

---

# Syntax

### Export

```javascript
export const pi = 3.14;
export function add() {}
```

---

### Import

```javascript
import { pi, add } from "./math.js";
```

---

# Example

### math.js

```javascript
export const pi = 3.14;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

---

### app.js

```javascript
import { pi, add, subtract } from "./math.js";

console.log(pi);
console.log(add(10, 5));
```

---

# Renaming Named Imports

Using alias:

```javascript
import { add as sum } from "./math.js";
```

Example:

```javascript
sum(2, 3);
```

---

# Import All Named Exports

```javascript
import * as math from "./math.js";
```

Usage:

```javascript
math.add(2, 3);
math.subtract(5, 2);
```

---

# Real-World Example in React

```javascript
import { useState, useEffect } from "react";
```

Here:

* useState = named export
* useEffect = named export

---

# Default Export vs Named Export

| Default Export       | Named Export        |
| -------------------- | ------------------- |
| One per file         | Multiple allowed    |
| No curly braces      | Curly braces needed |
| Name can be anything | Exact name required |

Example:

```javascript
export default Home;
```

```javascript
export const pi = 3.14;
```

---

# Interview Answer

> Named exports allow multiple variables, functions, or classes to be exported from the same module. They are imported using curly braces and names must match exactly unless renamed with aliases. Named exports are useful when a module contains multiple reusable utilities or functions.


Here are detailed, interview-ready explanations for **219–222**. These topics are very important for modern JavaScript interviews because they test your understanding of **advanced data structures and memory management**.

---

# 219. What are Sets?

## Definition

A **Set** in JavaScript is a special object that stores **unique values only**.

That means:

* Duplicate values are automatically removed
* Values can be of any type

  * numbers
  * strings
  * objects
  * arrays

Simple definition:

> Set is a collection of unique values.

Introduced in ES6.

---

# Why Use Sets?

Suppose you have duplicate values:

```javascript
[1, 2, 2, 3, 4, 4]
```

If you want unique values only, Set is very useful.

---

# Creating a Set

```javascript
let set = new Set();
```

Or:

```javascript
let set = new Set([1, 2, 2, 3]);
```

Output:

```javascript
Set(3) {1, 2, 3}
```

Duplicate `2` is removed automatically.

---

# Common Methods

### add()

```javascript
let set = new Set();

set.add(10);
set.add(20);
set.add(20);

console.log(set);
```

Output:

```javascript
Set(2) {10, 20}
```

---

### has()

Checks if value exists.

```javascript
console.log(set.has(10));
```

Output:

```javascript
true
```

---

### delete()

```javascript
set.delete(10);
```

---

### size

```javascript
console.log(set.size);
```

---

### clear()

Removes everything.

```javascript
set.clear();
```

---

# Iterating Over Set

```javascript
let set = new Set([1, 2, 3]);

for (let value of set) {
    console.log(value);
}
```

---

# Real-World Example

Removing duplicates from array.

```javascript
let arr = [1, 2, 2, 3, 4, 4];

let unique = [...new Set(arr)];

console.log(unique);
```

Output:

```javascript
[1, 2, 3, 4]
```

Very common interview example.

---

# Important Characteristics

* Stores unique values
* Maintains insertion order
* Iterable
* Faster lookup than arrays in many cases

---

# Interview Answer

> A Set in JavaScript is an ES6 collection that stores unique values only. Duplicate values are automatically removed. Sets support methods like add(), delete(), has(), and clear(). They are commonly used for removing duplicates, fast lookups, and handling unique collections of data.

---

---

# 220. What are Maps?

## Definition

A **Map** is a collection of key-value pairs.

Similar to objects, but much more powerful.

Simple definition:

> Map stores data in key-value form where keys can be of any type.

---

# Difference from Object

Object keys:

* Mostly strings/symbols

Map keys:

* String
* Number
* Object
* Function
* Any type

This makes Map more flexible.

---

# Creating a Map

```javascript
let map = new Map();
```

---

# Adding Values

Using `.set()`

```javascript
let map = new Map();

map.set("name", "Rishi");
map.set("age", 22);
```

---

# Reading Values

Using `.get()`

```javascript
console.log(map.get("name"));
```

Output:

```javascript
Rishi
```

---

# Common Methods

### set()

```javascript
map.set("city", "Indore");
```

---

### get()

```javascript
map.get("city");
```

---

### has()

```javascript
map.has("city");
```

---

### delete()

```javascript
map.delete("city");
```

---

### size

```javascript
console.log(map.size);
```

---

### clear()

```javascript
map.clear();
```

---

# Using Object as Key

Huge advantage.

```javascript
let user = { id: 1 };

let map = new Map();
map.set(user, "Admin");

console.log(map.get(user));
```

Output:

```javascript
Admin
```

Objects cannot do this effectively.

---

# Iterating Over Map

```javascript
for (let [key, value] of map) {
    console.log(key, value);
}
```

---

# Real-World Example

Caching data.

```javascript
let cache = new Map();

cache.set("user1", { name: "Rishi" });
```

Useful in:

* API caching
* Session storage
* Memoization

---

# Interview Answer

> Map is an ES6 collection that stores key-value pairs. Unlike objects, Map allows keys of any type including objects and functions. It provides methods like set(), get(), has(), and delete(). Maps are useful for caching, lookups, and managing dynamic key-value data efficiently.

---

---

# 221. What are WeakSets?

## Definition

WeakSet is similar to Set but with limitations.

It stores:

* Only objects

Not allowed:

* numbers
* strings
* booleans

---

# Example

```javascript
let weakSet = new WeakSet();

let user = { name: "Rishi" };

weakSet.add(user);
```

Valid.

---

Invalid:

```javascript
weakSet.add(10);
```

Error.

---

# Why "Weak"?

Because references are weak.

Meaning:

If no other reference to object exists, JavaScript garbage collector can remove it automatically.

Example:

```javascript
let weakSet = new WeakSet();

let obj = { id: 1 };

weakSet.add(obj);

obj = null;
```

Now object becomes eligible for garbage collection.

---

# Common Methods

WeakSet supports only:

* add()
* delete()
* has()

---

# Limitations

No:

* size
* clear()
* iteration

Example:

```javascript
weakSet.size
```

Not supported.

---

# Why?

Because objects can disappear anytime due to garbage collection.

---

# Real-World Use Cases

Useful for:

* Tracking object references
* Managing DOM elements
* Preventing memory leaks

Example:
Tracking visited objects.

---

# Interview Answer

> WeakSet is similar to Set but only stores objects and holds weak references to them. If an object has no other references, it can be garbage collected automatically. WeakSet supports add(), delete(), and has(), but does not support iteration or size. It is mainly used for memory-efficient object tracking.

---

---

# 222. What are WeakMaps?

## Definition

WeakMap is similar to Map but with restrictions.

* Keys must be objects only
* Keys are weakly referenced

Simple definition:

> WeakMap stores key-value pairs where keys must be objects and can be garbage collected.

---

# Example

```javascript
let weakMap = new WeakMap();

let user = {};

weakMap.set(user, "Admin");
```

Valid.

---

Invalid:

```javascript
weakMap.set("name", "Rishi");
```

Error because key is string.

---

# Why Weak?

Because object keys are weakly held.

Example:

```javascript
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "data");

obj = null;
```

Now object can be garbage collected.

---

# Common Methods

WeakMap supports:

* set()
* get()
* has()
* delete()

---

# Limitations

No:

* iteration
* size
* clear()

---

# Real-World Use Cases

Very useful for:

* Private data storage
* Metadata storage
* Memory-efficient caching

Example:

```javascript
const privateData = new WeakMap();

class User {
    constructor(name) {
        privateData.set(this, { name });
    }

    getName() {
        return privateData.get(this).name;
    }
}
```

This simulates private properties.

---

# Map vs WeakMap

| Map                  | WeakMap              |
| -------------------- | -------------------- |
| Keys can be any type | Keys must be objects |
| Iterable             | Not iterable         |
| Has size             | No size              |
| Strong references    | Weak references      |

---

# Interview Answer

> WeakMap is similar to Map but only allows objects as keys and stores weak references to those keys. If an object key has no other references, it becomes eligible for garbage collection. WeakMap supports set(), get(), has(), and delete(), and is commonly used for private data storage and memory-efficient caching.


Here are detailed, interview-ready explanations for **223–226**. These are important modern JavaScript features and interviewers often ask them to test ES6+ knowledge.

---

# 223. What are Symbols?

## Definition

A **Symbol** is a primitive data type introduced in ES6.

Its main purpose is to create **unique identifiers**.

Even if two symbols have the same description, they are always unique.

Simple definition:

> Symbol is a primitive type used to create unique values.

---

# Why Symbols Were Introduced?

In objects, property names usually use strings.

Example:

```javascript
let user = {
    name: "Rishi"
};
```

Problem:
Sometimes property name conflicts happen.

Example:

* Library A uses property `"id"`
* Library B also uses property `"id"`

Collision occurs.

Symbols solve this problem by creating unique property keys.

---

# Creating a Symbol

```javascript
let id = Symbol();
```

Or with description:

```javascript
let id = Symbol("id");
```

---

# Uniqueness

```javascript
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);
```

Output:

```javascript
false
```

Even though descriptions are same, symbols are unique.

---

# Using Symbol as Object Key

```javascript
const id = Symbol("id");

let user = {
    name: "Rishi",
    [id]: 101
};

console.log(user[id]);
```

Output:

```javascript
101
```

---

# Important Feature

Symbol properties are hidden from normal iteration.

Example:

```javascript
for (let key in user) {
    console.log(key);
}
```

Output:
Only normal keys.

Symbol keys won’t appear.

---

# Global Symbols

Using `Symbol.for()`

```javascript
let s1 = Symbol.for("user");
let s2 = Symbol.for("user");

console.log(s1 === s2);
```

Output:

```javascript
true
```

Unlike normal Symbol(), global symbols can be shared.

---

# Real-World Use Cases

* Unique object keys
* Avoid naming collisions
* Internal object properties
* Library/framework development

---

# Interview Answer

> Symbol is a primitive data type introduced in ES6 used to create unique identifiers. Each Symbol value is unique even if descriptions are the same. Symbols are commonly used as object property keys to avoid naming collisions and create hidden properties. They are especially useful in library or framework development.

---

---

# 224. What is Optional Chaining (?.)?

## Definition

Optional chaining (`?.`) is a modern JavaScript feature used to safely access nested object properties.

It prevents errors when a property is:

* null
* undefined

Simple definition:

> Optional chaining allows safe access to deeply nested properties without throwing errors.

---

# Problem Without Optional Chaining

Example:

```javascript
let user = {};
```

Now:

```javascript
console.log(user.address.city);
```

Error:

```javascript
Cannot read property 'city' of undefined
```

Because `address` doesn’t exist.

---

# Solution with Optional Chaining

```javascript
console.log(user.address?.city);
```

Output:

```javascript
undefined
```

No error.

---

# Syntax

```javascript
object?.property
```

---

# Nested Access

```javascript
let user = {
    address: {
        city: "Indore"
    }
};

console.log(user.address?.city);
```

Output:

```javascript
Indore
```

---

# Optional Chaining with Arrays

```javascript
let users = null;

console.log(users?.[0]);
```

No error.

---

# Optional Chaining with Function Calls

```javascript
let user = {
    greet() {
        console.log("Hello");
    }
};

user.greet?.();
```

If function exists → runs
If not → returns undefined

---

# Real-World Example

API response handling.

```javascript
const response = {
    data: {
        user: {
            profile: {
                city: "Indore"
            }
        }
    }
};

console.log(response.data?.user?.profile?.city);
```

Very useful in:

* React
* APIs
* Frontend apps

---

# Interview Answer

> Optional chaining is a JavaScript feature that allows safe access to nested object properties using `?.`. If any property in the chain is null or undefined, it returns undefined instead of throwing an error. It is widely used in React applications and API response handling to prevent runtime crashes.

---

---

# 225. What is Nullish Coalescing (??)?

## Definition

Nullish coalescing (`??`) provides a default value when the left side is:

* null
* undefined

Simple definition:

> It returns the right value only if left value is null or undefined.

---

# Syntax

```javascript
value ?? defaultValue
```

---

# Example

```javascript
let name = null;

console.log(name ?? "Guest");
```

Output:

```javascript
Guest
```

---

# Important Difference from OR (`||`)

Many developers confuse `??` and `||`.

Example with OR:

```javascript
let count = 0;

console.log(count || 10);
```

Output:

```javascript
10
```

Problem:
`0` is valid but treated as falsy.

---

Using `??`

```javascript
let count = 0;

console.log(count ?? 10);
```

Output:

```javascript
0
```

Correct.

---

# Values Considered Nullish

Only:

* null
* undefined

Not:

* 0
* false
* ""
* NaN

---

# Real-World Example

Form values:

```javascript
let username = "";

console.log(username ?? "Guest");
```

Output:
Empty string remains.

Very useful when:

* 0 is valid
* false is valid
* empty string is valid

---

# Interview Answer

> Nullish coalescing is a JavaScript operator represented by `??` that provides a default value only when the left operand is null or undefined. Unlike the OR operator, it does not treat 0, false, or empty strings as missing values. It is useful for handling default values safely.

---

---

# 226. What is BigInt?

## Definition

BigInt is a primitive data type introduced in modern JavaScript for handling integers larger than Number can safely store.

Simple definition:

> BigInt allows working with very large integers beyond JavaScript’s safe integer limit.

---

# Problem with Number

JavaScript number has limitations.

Maximum safe integer:

```javascript
Number.MAX_SAFE_INTEGER
```

Value:

```javascript
9007199254740991
```

Beyond this, precision issues happen.

Example:

```javascript
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);
```

Unexpected results may happen.

---

# Creating BigInt

Add `n` at end.

```javascript
let big = 123456789012345678901234567890n;
```

Or:

```javascript
let big = BigInt("123456789012345678901234567890");
```

---

# Example

```javascript
let a = 999999999999999999n;
let b = 1n;

console.log(a + b);
```

Output:
Large integer calculation works accurately.

---

# Arithmetic with BigInt

```javascript
let a = 10n;
let b = 5n;

console.log(a + b);
console.log(a * b);
```

Works normally.

---

# Important Rule

Cannot mix Number and BigInt directly.

Wrong:

```javascript
10n + 5
```

Error.

Correct:

```javascript
10n + BigInt(5)
```

---

# Real-World Use Cases

Useful in:

* Financial systems
* Banking
* Cryptography
* Blockchain
* Large database IDs

Example:

* Bitcoin transaction calculations

---

# Number vs BigInt

| Number            | BigInt          |
| ----------------- | --------------- |
| Supports decimals | No decimals     |
| Limited range     | Huge integers   |
| Faster            | Slightly slower |

---

# Interview Answer

> BigInt is a JavaScript primitive type used to represent integers larger than Number.MAX_SAFE_INTEGER. It solves precision issues in large integer calculations. BigInt values are created using the `n` suffix or BigInt() constructor. It is useful in financial systems, cryptography, and large-scale numeric computations.


Here are detailed, interview-ready explanations for **227–230**. These topics are important because they cover **advanced JavaScript concepts and modern ES6+ features**, which are frequently asked in MERN interviews.

---

# 227. What is dynamic import()?

## Definition

`dynamic import()` is a modern JavaScript feature used to load modules dynamically at runtime instead of loading everything at the beginning.

Normally imports are static:

```javascript
import math from "./math.js";
```

This happens before code execution.

Dynamic import allows:

> Load module only when needed.

---

# Syntax

```javascript
import("./module.js")
```

It returns a **Promise**.

---

# Example

### math.js

```javascript
export function add(a, b) {
    return a + b;
}
```

---

### app.js

```javascript
import("./math.js")
    .then(module => {
        console.log(module.add(2, 3));
    });
```

Output:

```javascript
5
```

---

# Using Async/Await

```javascript
async function loadModule() {
    const math = await import("./math.js");
    console.log(math.add(10, 20));
}

loadModule();
```

---

# Why Dynamic Import?

Suppose your app has:

* Dashboard
* Admin panel
* Analytics page

User opens dashboard only.

Why load admin code immediately?

Dynamic import solves this.

Load modules only when required.

---

# Real-World Example in React

Code splitting:

```javascript
const AdminPage = React.lazy(() => import("./AdminPage"));
```

Benefits:

* Faster initial load
* Better performance
* Smaller bundle size

---

# Advantages

* Lazy loading
* Better performance
* Reduced initial bundle
* Code splitting

---

# Interview Answer

> Dynamic import is a JavaScript feature that allows modules to be loaded at runtime using `import()`. Unlike static imports, it returns a Promise and loads code only when needed. It is useful for lazy loading, code splitting, and improving application performance, especially in React applications.

---

---

# 228. What are Iterators?

## Definition

An iterator is an object that allows sequential access to elements one at a time.

Simple definition:

> Iterator provides a way to traverse data one element at a time.

Used with:

* Arrays
* Strings
* Sets
* Maps

---

# Why Iterators?

Suppose you have:

```javascript
let arr = [10, 20, 30];
```

You want controlled access:

* First value
* Second value
* Third value

Iterator helps.

---

# How Iterator Works

Iterator uses `.next()` method.

Each call returns an object:

```javascript
{
   value: something,
   done: true/false
}
```

---

# Example

```javascript
let arr = [10, 20, 30];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

Output:

```javascript
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
```

---

# Behind the Scenes

`for...of` uses iterators internally.

Example:

```javascript
for (let value of [1, 2, 3]) {
    console.log(value);
}
```

Internally uses iterator protocol.

---

# Iterator Protocol

To be iterable, object must implement:

```javascript
Symbol.iterator
```

That function returns iterator object.

Iterator object must contain:

```javascript
next()
```

---

# Real-World Use Cases

* Custom data traversal
* Lazy data processing
* Streaming large datasets

---

# Interview Answer

> Iterators in JavaScript provide a way to access collection elements one at a time. An iterator object has a `next()` method that returns `{ value, done }`. Arrays, strings, Sets, and Maps are iterable by default. Features like `for...of` internally use iterators.

---

---

# 229. What are Generators?

## Definition

Generators are special functions that can pause and resume execution.

Defined using `function*`.

Simple definition:

> Generator is a function that can yield multiple values over time.

---

# Syntax

```javascript
function* generatorName() {
}
```

---

# Important Keyword: yield

`yield` pauses execution and returns value.

---

# Example

```javascript
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}
```

Create generator:

```javascript
let gen = numbers();
```

---

# Access Values

```javascript
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

Output:

```javascript
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
```

---

# How It Works

Execution pauses at every `yield`.

Example:

```javascript
function* demo() {
    console.log("Start");
    yield 1;

    console.log("Middle");
    yield 2;

    console.log("End");
}
```

---

# Why Generators?

Useful when:

* Large data processing
* Lazy execution
* Infinite sequences

---

# Example: Infinite Generator

```javascript
function* infiniteCounter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
```

---

# Relation with Iterators

Generator automatically returns iterator object.

That means generators simplify iterator creation.

---

# Real-World Use Cases

* Pagination
* Data streams
* Async workflows
* State machines

---

# Interview Answer

> Generators are special JavaScript functions defined using `function*` that can pause and resume execution using the `yield` keyword. Each call to `next()` resumes execution until the next yield. Generators are useful for lazy execution, iterators, infinite sequences, and efficient data processing.

---

---

# 230. What are modern JavaScript features?

## Definition

Modern JavaScript usually refers to features introduced after ES6 (ECMAScript 2015 and later).

These features made JavaScript more:

* Powerful
* Readable
* Efficient

---

# Major Modern JavaScript Features

---

## 1. let and const

```javascript
let age = 22;
const name = "Rishi";
```

Better than `var`.

---

## 2. Arrow Functions

```javascript
const add = (a, b) => a + b;
```

Cleaner syntax.

---

## 3. Template Literals

```javascript
console.log(`Hello ${name}`);
```

---

## 4. Destructuring

```javascript
const {name, age} = user;
```

---

## 5. Spread / Rest Operator

```javascript
const arr2 = [...arr1];
```

---

## 6. Classes

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
}
```

---

## 7. Modules

```javascript
export default User;
import User from "./User";
```

---

## 8. Promises

```javascript
fetch(url).then(res => res.json());
```

---

## 9. Async/Await

```javascript
const data = await fetch(url);
```

Cleaner async code.

---

## 10. Optional Chaining

```javascript
user?.address?.city
```

---

## 11. Nullish Coalescing

```javascript
value ?? "default"
```

---

## 12. BigInt

```javascript
123456789n
```

---

## 13. Map and Set

```javascript
new Map();
new Set();
```

---

## 14. Symbol

Unique identifiers.

---

## 15. Dynamic Import

```javascript
import("./module.js")
```

---

# Why Modern Features Important?

Modern JS improves:

* Performance
* Maintainability
* Readability
* Scalability

Especially in:

* React
* Node.js
* MERN stack

---

# Interview Answer

> Modern JavaScript features refer to ES6 and later enhancements such as let/const, arrow functions, template literals, destructuring, spread operator, classes, modules, promises, async/await, optional chaining, and dynamic imports. These features improve readability, performance, and scalability, making JavaScript more suitable for large modern applications like React and Node.js.


Here are detailed, interview-ready explanations for **231–234**. These are newer JavaScript features (ES2022+) and asking them in interviews is becoming more common, especially for modern frontend/MERN roles.

---

# 231. What is Top-Level Await?

## Definition

Top-Level Await is a modern JavaScript feature that allows using `await` directly at the top level of a module, without wrapping it inside an `async` function.

Before this feature, `await` was only allowed inside async functions.

Simple definition:

> Top-Level Await allows asynchronous code execution directly in ES modules.

---

# Problem Before Top-Level Await

Earlier, if you wanted to use `await`, you had to write:

```javascript id="2t5uij"
async function loadData() {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
}

loadData();
```

Extra wrapper function needed.

---

# With Top-Level Await

Now in ES modules:

```javascript id="ehw5h9"
const response = await fetch("/api/data");
const data = await response.json();

console.log(data);
```

Much cleaner.

---

# Important Requirement

Top-Level Await works only inside:

* ES Modules (`type="module"`)
* Modern module environments

Not in regular scripts.

---

# Example in Node.js

```javascript id="0b4sxy"
const data = await fetch("https://api.example.com/users");
const users = await data.json();

console.log(users);
```

---

# Why Useful?

Useful when app needs data before execution.

Examples:

* Load config
* Fetch API data
* Database connection
* Load translations

---

# Real-World Example

In Node.js backend:

```javascript id="jff6f8"
const config = await loadConfig();
const db = await connectDatabase(config);
```

Application waits until setup completes.

---

# Benefits

* Cleaner code
* Less boilerplate
* Better readability

---

# Interview Answer

> Top-Level Await is a modern JavaScript feature that allows using `await` directly at the top level of an ES module without wrapping it in an async function. It simplifies asynchronous initialization tasks like fetching configuration data, API responses, or database connections.

---

---

# 232. What is Array.prototype.at()?

## Definition

`at()` is a modern JavaScript array method used to access elements by index.

Main advantage:

* Supports negative indexing

Simple definition:

> `at()` returns the element at a specific index, including negative indexes from the end.

---

# Syntax

```javascript id="3c9kkv"
array.at(index)
```

---

# Example

```javascript id="m61k2o"
let arr = [10, 20, 30, 40];

console.log(arr.at(1));
```

Output:

```javascript id="rbm0gc"
20
```

---

# Negative Indexing

This is the biggest advantage.

Without `at()`:

```javascript id="l47psx"
arr[arr.length - 1]
```

With `at()`:

```javascript id="lceh8f"
arr.at(-1)
```

Output:

```javascript id="1amlnf"
40
```

---

# More Examples

```javascript id="g5f8qn"
console.log(arr.at(-2));
```

Output:

```javascript id="iqqg0v"
30
```

---

# Why Useful?

Cleaner syntax for:

* Last element
* Second last element
* Reverse access

---

# Real-World Example

Getting last message:

```javascript id="x5h4hn"
let messages = ["Hi", "Hello", "Bye"];

console.log(messages.at(-1));
```

Output:

```javascript id="uqn4r9"
Bye
```

---

# Interview Answer

> `Array.prototype.at()` is a modern JavaScript method used to access array elements by index. Its biggest advantage is support for negative indexing, allowing easy access from the end of the array. For example, `arr.at(-1)` returns the last element.

---

---

# 233. What is Array.prototype.toSorted()?

## Definition

`toSorted()` is a modern JavaScript array method that returns a **new sorted array** without modifying the original array.

Simple definition:

> `toSorted()` sorts an array immutably.

---

# Problem with sort()

Normal `sort()` modifies original array.

Example:

```javascript id="94g8mk"
let arr = [3, 1, 2];

arr.sort();

console.log(arr);
```

Original array changes.

---

# With toSorted()

```javascript id="qn0ofg"
let arr = [3, 1, 2];

let sorted = arr.toSorted();

console.log(sorted);
console.log(arr);
```

Output:

```javascript id="j2w85s"
[1, 2, 3]
[3, 1, 2]
```

Original array unchanged.

---

# Custom Sorting

```javascript id="xw4vwv"
let nums = [10, 5, 20];

let sorted = nums.toSorted((a, b) => a - b);

console.log(sorted);
```

Output:

```javascript id="q0y88w"
[5, 10, 20]
```

---

# Why Important?

Immutability is very important in:

* React
* Redux
* State management

Mutating state directly causes bugs.

---

# Real-World Example

Sorting products by price.

```javascript id="8wc7kt"
const sortedProducts = products.toSorted(
    (a, b) => a.price - b.price
);
```

Safe because original array remains unchanged.

---

# Interview Answer

> `Array.prototype.toSorted()` is a modern JavaScript method that returns a new sorted array without mutating the original array. Unlike `sort()`, it preserves immutability, making it especially useful in React and state management systems.

---

---

# 234. What is Array.prototype.toReversed()?

## Definition

`toReversed()` is a modern JavaScript method that returns a new reversed array without modifying the original array.

Simple definition:

> `toReversed()` reverses an array immutably.

---

# Problem with reverse()

Normal `reverse()` mutates original array.

Example:

```javascript id="vxb2cz"
let arr = [1, 2, 3];

arr.reverse();

console.log(arr);
```

Output:

```javascript id="c4g9xv"
[3, 2, 1]
```

Original changed.

---

# With toReversed()

```javascript id="2wbw8y"
let arr = [1, 2, 3];

let reversed = arr.toReversed();

console.log(reversed);
console.log(arr);
```

Output:

```javascript id="mv3q9e"
[3, 2, 1]
[1, 2, 3]
```

Original remains same.

---

# Why Important?

Modern JavaScript encourages immutability.

Especially in:

* React
* State updates
* Functional programming

---

# Real-World Example

Chat messages latest-first view.

```javascript id="yy1n2y"
const latestMessages = messages.toReversed();
```

Display newest messages first without changing original data.

---

# Interview Answer

> `Array.prototype.toReversed()` is a modern JavaScript method that returns a new reversed array without modifying the original array. Unlike `reverse()`, it supports immutable programming and is useful in React and state management scenarios where mutation should be avoided.


Here are detailed, interview-ready explanations for **235–238**. These are modern JavaScript topics and very useful in MERN interviews, especially when interviewers ask about **immutability, cloning, and module systems**.

---

# 235. What is Array.prototype.toSpliced()?

## Definition

`toSpliced()` is a modern JavaScript array method that works like `splice()`, but it does **not mutate the original array**.

Simple definition:

> `toSpliced()` creates a new array with elements added, removed, or replaced, while keeping the original array unchanged.

---

# Problem with splice()

Normal `splice()` changes original array.

Example:

```javascript
let arr = [1, 2, 3, 4];

arr.splice(1, 2);

console.log(arr);
```

Output:

```javascript
[1, 4]
```

Original array changed.

---

# With toSpliced()

```javascript
let arr = [1, 2, 3, 4];

let newArr = arr.toSpliced(1, 2);

console.log(newArr);
console.log(arr);
```

Output:

```javascript
[1, 4]
[1, 2, 3, 4]
```

Original remains unchanged.

---

# Syntax

```javascript
array.toSpliced(start, deleteCount, item1, item2)
```

Parameters:

* `start` → Starting index
* `deleteCount` → Number of elements to remove
* `items` → Optional items to insert

---

# Example: Replace Elements

```javascript
let arr = [1, 2, 3, 4];

let result = arr.toSpliced(1, 2, 100, 200);

console.log(result);
```

Output:

```javascript
[1, 100, 200, 4]
```

---

# Real-World Example

In React state management:

```javascript
const updatedUsers = users.toSpliced(index, 1);
```

Remove user safely without mutating original state.

---

# Interview Answer

> `Array.prototype.toSpliced()` is a modern JavaScript method similar to `splice()`, but it returns a new array instead of modifying the original one. It supports adding, removing, and replacing elements while maintaining immutability. This makes it especially useful in React and state management scenarios.

---

---

# 236. What is Object.hasOwn()?

## Definition

`Object.hasOwn()` is a modern JavaScript method used to check whether an object contains a property as its **own property**, not inherited.

Simple definition:

> It checks if a property exists directly on an object.

---

# Syntax

```javascript
Object.hasOwn(object, property)
```

---

# Example

```javascript
const user = {
    name: "Rishi"
};

console.log(Object.hasOwn(user, "name"));
```

Output:

```javascript
true
```

---

# Own Property vs Inherited Property

Example:

```javascript
const obj = {};
```

Check:

```javascript
console.log(Object.hasOwn(obj, "toString"));
```

Output:

```javascript
false
```

Why?

Because `toString` comes from prototype, not directly from object.

---

# Problem with hasOwnProperty()

Older way:

```javascript
obj.hasOwnProperty("name")
```

Problem:
If object overrides `hasOwnProperty`, issues happen.

Example:

```javascript
const obj = {
    hasOwnProperty: () => false
};
```

This can break.

---

# Safer Modern Solution

```javascript
Object.hasOwn(obj, "name")
```

Safer and cleaner.

---

# Real-World Example

Checking API response fields:

```javascript
if (Object.hasOwn(response, "data")) {
   console.log(response.data);
}
```

---

# Interview Answer

> `Object.hasOwn()` is a modern JavaScript method used to check whether a property exists directly on an object rather than being inherited through the prototype chain. It is a safer and cleaner alternative to `hasOwnProperty()`.

---

---

# 237. What is structuredClone()?

## Definition

`structuredClone()` is a modern JavaScript function used to create a **deep copy** of an object.

Simple definition:

> structuredClone creates a full deep clone of complex JavaScript values.

---

# Problem with Shallow Copy

Spread operator creates shallow copy.

Example:

```javascript
const user = {
    name: "Rishi",
    address: {
        city: "Indore"
    }
};

const copy = { ...user };
```

Problem:
Nested object still shares reference.

---

# Example

```javascript
copy.address.city = "Bhopal";

console.log(user.address.city);
```

Output:

```javascript
Bhopal
```

Original changed.

---

# Solution: structuredClone()

```javascript
const user = {
    name: "Rishi",
    address: {
        city: "Indore"
    }
};

const copy = structuredClone(user);
```

Now:

```javascript
copy.address.city = "Bhopal";

console.log(user.address.city);
```

Output:

```javascript
Indore
```

Deep copy successful.

---

# Supports Complex Data

Can clone:

* Objects
* Arrays
* Maps
* Sets
* Dates
* Nested structures

Example:

```javascript
const data = {
    numbers: [1, 2],
    map: new Map()
};

const copy = structuredClone(data);
```

---

# Better Than JSON Method

Old approach:

```javascript
JSON.parse(JSON.stringify(obj))
```

Problems:

* Loses Date
* Loses Map
* Loses Set
* Fails on circular references

`structuredClone()` solves these.

---

# Real-World Example

Useful in:

* Undo/Redo systems
* State snapshots
* Large nested objects

Especially in React apps.

---

# Interview Answer

> `structuredClone()` is a modern JavaScript function used for deep cloning objects and complex data structures. Unlike spread syntax or JSON cloning, it properly handles nested objects, arrays, Maps, Sets, and other structured data. It is useful for immutable state management and creating safe copies of complex objects.

---

---

# 238. Difference between CommonJS and ES Modules

## Definition

Both are JavaScript module systems used to organize code.

Main difference:

* CommonJS → Older module system
* ES Modules → Modern standard

---

# CommonJS

Used mainly in older Node.js.

Import:

```javascript
const math = require("./math");
```

Export:

```javascript
module.exports = math;
```

---

# Example

### math.js

```javascript
function add(a, b) {
    return a + b;
}

module.exports = add;
```

---

### app.js

```javascript
const add = require("./math");

console.log(add(2, 3));
```

---

# ES Modules (ESM)

Modern JavaScript standard.

Import:

```javascript
import add from "./math.js";
```

Export:

```javascript
export default add;
```

---

# Example

### math.js

```javascript
export function add(a, b) {
    return a + b;
}
```

---

### app.js

```javascript
import { add } from "./math.js";

console.log(add(2, 3));
```

---

# Key Differences

| Feature         | CommonJS       | ES Modules   |
| --------------- | -------------- | ------------ |
| Import          | require()      | import       |
| Export          | module.exports | export       |
| Loading         | Synchronous    | Asynchronous |
| Usage           | Older Node.js  | Modern JS    |
| Static Analysis | Limited        | Better       |
| Tree Shaking    | No             | Yes          |

---

# Important Difference: Loading

### CommonJS

Loads synchronously.

```javascript
const data = require("./data");
```

---

### ES Modules

Supports static analysis and optimizations.

Better for:

* Bundlers
* Tree shaking
* Performance

---

# Real-World Example

In MERN:

* Older backend projects → CommonJS
* Modern React / Node.js → ES Modules

---

# Interview Answer

> CommonJS and ES Modules are JavaScript module systems. CommonJS uses `require()` and `module.exports`, mainly in older Node.js applications, while ES Modules use `import` and `export`, which are the modern JavaScript standard. ES Modules support static analysis, tree shaking, and better optimization, making them preferred for modern applications.



Here are detailed, interview-ready explanations for **239–240**. These two concepts are extremely important in **modern frontend development**, especially in **React**, bundlers, and performance optimization interviews.

Both are related to reducing JavaScript bundle size and improving app performance.

---

# 239. What is Tree Shaking?

## Definition

Tree Shaking is a technique used by modern JavaScript bundlers to remove unused code from the final bundle.

Simple definition:

> Tree Shaking removes dead code (unused code) from your application bundle.

The name comes from the idea of shaking a tree so dead leaves fall off.

---

# Why Tree Shaking?

Suppose you have a utility file:

```javascript id="ryyk26"
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}
```

Now in app:

```javascript id="rwt4k1"
import { add } from "./math.js";

console.log(add(2, 3));
```

Only `add()` is used.

Without tree shaking:

* add
* subtract
* multiply

All functions go into bundle.

Waste of bundle size.

---

# With Tree Shaking

Bundler removes:

* subtract()
* multiply()

Final bundle contains only:

```javascript id="vkvhd4"
function add(a, b) {
    return a + b;
}
```

Much smaller bundle.

---

# Where Tree Shaking Happens?

Bundlers perform tree shaking.

Examples:

* Webpack
* Vite
* Rollup
* Parcel

---

# Requirement for Tree Shaking

Tree shaking works best with **ES Modules**.

Because ES Modules use static imports:

```javascript id="o1pv6f"
import { add } from "./math.js";
```

Bundler can analyze imports at build time.

---

# Why CommonJS Is Less Effective?

Example:

```javascript id="uw5k8w"
const math = require("./math");
```

`require()` is dynamic.

Bundlers cannot easily analyze which code is used.

---

# Real-World Example

Suppose you import entire library:

```javascript id="u8m17q"
import _ from "lodash";
```

This may load large code.

Better:

```javascript id="1pdcq5"
import debounce from "lodash/debounce";
```

Only needed code included.

Smaller bundle.

---

# Benefits

* Smaller bundle size
* Faster loading
* Better performance
* Reduced memory usage

---

# Interview Answer

> Tree Shaking is a build optimization technique that removes unused code from the final JavaScript bundle. Modern bundlers like Webpack, Rollup, and Vite analyze ES module imports and eliminate dead code. This reduces bundle size, improves load time, and boosts performance.

---

---

# 240. What is Code Splitting?

## Definition

Code Splitting is a technique where JavaScript code is split into smaller bundles instead of one large bundle.

Simple definition:

> Code Splitting breaks a large bundle into smaller chunks that load only when needed.

---

# Problem Without Code Splitting

Suppose app has:

* Home page
* Admin page
* Analytics page
* Settings page

If everything loads at once:

```javascript id="waf2d0"
bundle.js → 5 MB
```

Problem:

* Slow initial load
* Bad user experience

Even if user visits only Home page.

---

# Solution: Code Splitting

Split bundle into:

```javascript id="72o57m"
home.bundle.js
admin.bundle.js
analytics.bundle.js
settings.bundle.js
```

Now:

* Load Home initially
* Load Admin only when user visits admin page

Better performance.

---

# How It Works

Often done using:

* Dynamic import()
* Lazy loading
* Route-based splitting

---

# Example Using Dynamic Import

```javascript id="wb1krd"
import("./AdminPanel.js")
    .then(module => {
        module.loadAdmin();
    });
```

Admin code loads only when needed.

---

# Real-World Example in React

Using `React.lazy`

```javascript id="gjg6u3"
const AdminPage = React.lazy(() => import("./AdminPage"));
```

Used with Suspense:

```javascript id="qof2r3"
<Suspense fallback={<div>Loading...</div>}>
    <AdminPage />
</Suspense>
```

---

# Types of Code Splitting

## 1. Route-Based Splitting

Load page-specific code.

Example:

* Dashboard chunk
* Profile chunk

---

## 2. Component-Based Splitting

Heavy components load on demand.

Example:

* Charts
* Video player

---

## 3. Library Splitting

Third-party libraries in separate chunks.

Example:

* Chart libraries
* Rich editors

---

# Benefits

* Faster initial loading
* Smaller initial bundle
* Better performance
* Improved user experience

---

# Tree Shaking vs Code Splitting

| Tree Shaking          | Code Splitting          |
| --------------------- | ----------------------- |
| Removes unused code   | Splits code into chunks |
| Dead code elimination | Lazy loading            |
| Reduces bundle size   | Improves loading speed  |

---

# Interview Answer

> Code Splitting is a performance optimization technique where a large JavaScript bundle is divided into smaller chunks that load only when needed. It improves application performance by reducing initial load time. It is commonly implemented using dynamic imports and lazy loading in frameworks like React.
