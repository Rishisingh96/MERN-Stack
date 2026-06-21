# 🚀 JavaScript Interview Questions (Top 220+ Most Asked)



## ⚡ 9. Asynchronous JavaScript (166–190)

166. What is synchronous programming?
167. What is asynchronous programming?
168. What is the Event Loop?
169. What is a callback?
170. What is callback hell?
171. What are Promises?
172. What are Promise states?
173. What is Promise chaining?
174. What is Promise.all()?
175. What is Promise.race()?
176. What is Promise.any()?
177. What is Promise.allSettled()?
178. What is async/await?
179. How does async/await work internally?
180. What is a microtask queue?
181. What is a callback queue?
182. What is setTimeout()?
183. What is setInterval()?
184. What is requestAnimationFrame()?
185. What is fetch()?
186. What is AJAX?
187. What is XMLHttpRequest?
188. How do you handle API errors?
189. What is debouncing?
190. What is throttling?

---

## 🌐 10. DOM & Browser APIs (191–210)

191. What is the DOM?
192. How do you select elements in the DOM?
193. What is querySelector()?
194. What is querySelectorAll()?
195. What is getElementById()?
196. What is event bubbling?
197. What is event capturing?
198. What is event delegation?
199. What is preventDefault()?
200. What is stopPropagation()?
201. What is localStorage?
202. What is sessionStorage?
203. What are cookies?
204. What is the BOM?
205. What is window object?
206. What is document object?
207. What is navigator object?
208. What is location object?
209. What is history API?
210. What are Web APIs?

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

jaise modern interview topics bhi aa gaye hain. Ye 1–3 year MERN/Frontend candidates ke liye kaafi strong final JavaScript syllabus ban jata hai.


# ⚡ 9. Asynchronous JavaScript (166–190)


## 166. What is Synchronous Programming?

**Definition:**
Synchronous programming means code executes **line by line, one statement at a time**. Each operation must finish before the next one starts.

In simple words:
**“Wait until current task completes, then move to next task.”**

JavaScript is **single-threaded**, meaning it executes one task at a time in the main thread. By default, JavaScript follows synchronous behavior.

---

## How Synchronous Execution Works

JavaScript engine executes code in sequence:

1. Execute first statement
2. Wait until it completes
3. Execute second statement
4. Continue until program ends

Example:

```javascript
console.log("Start");

console.log("Processing...");

console.log("End");
```

Output:

```javascript
Start
Processing...
End
```

Execution flow:

* First line runs → prints Start
* Second line runs → prints Processing
* Third line runs → prints End

Everything happens in order.

---

## Real-Life Example

Imagine a single cashier in a shop.

* Customer 1 comes
* Cashier serves Customer 1 completely
* Only then Customer 2 gets served

This is synchronous.

---

## Blocking Nature

Synchronous code can be **blocking**.

Example:

```javascript
console.log("Start");

function heavyTask() {
    for (let i = 0; i < 10000000000; i++) {}
}

heavyTask();

console.log("End");
```

Output:

```javascript
Start
(wait...)
End
```

Why delay?

Because JavaScript waits for `heavyTask()` to finish.

Until that happens:

* No next code runs
* UI may freeze
* Application becomes slow

This is called **blocking behavior**.

---

## Advantages of Synchronous Programming

### 1. Easy to Understand

Execution order is straightforward.

### 2. Easier Debugging

You know exactly which line runs first.

### 3. Predictable Flow

Less complexity.

---

## Disadvantages of Synchronous Programming

### 1. Blocking

One slow task blocks everything.

### 2. Poor Performance for Heavy Tasks

Large operations freeze execution.

### 3. Bad for I/O Operations

Network calls, API calls, file reads can take time.

---

## Interview Answer

**Synchronous programming means tasks execute one after another in sequence. Each operation blocks the execution of the next operation until it completes. JavaScript executes code synchronously by default, which makes code easier to understand but can lead to blocking issues when performing heavy computations or I/O tasks.**

---

# 167. What is Asynchronous Programming?

**Definition:**
Asynchronous programming allows tasks to run **without blocking the main execution flow**.

In simple words:

**“Start a task, don’t wait for it to finish, continue executing next code.”**

This is extremely important in JavaScript because:

* API calls take time
* Database queries take time
* File operations take time
* Timers take time

Without async programming, everything would freeze.

---

## Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Task Completed");
}, 2000);

console.log("End");
```

Output:

```javascript
Start
End
Task Completed
```

Why?

* JavaScript executes `Start`
* `setTimeout` schedules task for later
* JavaScript doesn’t wait
* Executes `End`
* After 2 sec → callback runs

---

## Real-Life Example

Ordering food in a restaurant:

* You place order
* Kitchen starts cooking
* Meanwhile you continue talking with friends
* Food arrives later

You don’t stand in kitchen waiting.

That is asynchronous behavior.

---

## Why Async Programming is Needed

Suppose fetching data from server:

```javascript
let data = fetch("api/data");
```

This may take:

* 1 sec
* 5 sec
* 10 sec

Blocking entire application is bad.

Async programming prevents this.

---

## Common Ways to Handle Async in JavaScript

### 1. Callbacks

```javascript
setTimeout(() => {
   console.log("Done");
}, 1000);
```

---

### 2. Promises

```javascript
fetch(url)
   .then(response => response.json())
   .then(data => console.log(data));
```

---

### 3. Async/Await

```javascript
async function getData() {
   let response = await fetch(url);
   let data = await response.json();
   console.log(data);
}
```

---

## Advantages

### 1. Non-blocking

Main thread remains free.

### 2. Better Performance

Efficient for I/O operations.

### 3. Better User Experience

UI doesn’t freeze.

---

## Disadvantages

### 1. More Complex

Harder than synchronous code.

### 2. Debugging Can Be Hard

Execution order isn’t always obvious.

### 3. Callback Hell Risk

Nested callbacks become messy.

---

## Interview Answer

**Asynchronous programming allows tasks to execute without blocking the main thread. Long-running tasks like API calls, timers, and database operations are handled in the background while JavaScript continues executing other code. JavaScript supports asynchronous programming using callbacks, promises, and async/await.**

---

# 168. What is Event Loop?

This is one of the **most important JavaScript interview questions**.

If you explain Event Loop well, interviewer knows your JavaScript understanding is strong.

---

## Definition

The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations even though JavaScript is single-threaded.

It continuously checks:

* Is Call Stack empty?
* Are there pending callbacks in queue?

If yes → move callback to Call Stack.

---

## Core Components of Event Loop

You should know these 4 components:

1. Call Stack
2. Web APIs
3. Callback Queue
4. Event Loop

---

## 1. Call Stack

Call Stack keeps track of function execution.

Example:

```javascript
function one() {
   two();
}

function two() {
   console.log("Hello");
}

one();
```

Stack:

```javascript
one()
two()
console.log()
```

After execution, stack becomes empty.

---

## 2. Web APIs

Browser provides APIs for async tasks:

* setTimeout
* DOM events
* fetch
* geolocation

Example:

```javascript
setTimeout(() => {
   console.log("Done");
}, 2000);
```

Timer is handled by browser Web API.

JavaScript engine doesn’t handle timer directly.

---

## 3. Callback Queue

When async task completes, callback moves to queue.

Example callback:

```javascript
() => {
   console.log("Done");
}
```

It waits in queue.

---

## 4. Event Loop

Event Loop constantly checks:

* Is Call Stack empty?

If YES:

* Move callback from queue → stack

Then execute it.

---

# Full Flow Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);

console.log("End");
```

Output:

```javascript
Start
End
Inside Timeout
```

---

## Step-by-Step Execution

### Step 1

```javascript
console.log("Start");
```

Output:

```javascript
Start
```

---

### Step 2

`setTimeout()` enters Call Stack.

Browser starts timer in Web API.

Callback waits.

---

### Step 3

```javascript
console.log("End");
```

Output:

```javascript
End
```

---

### Step 4

After 2 sec:
Callback moves to Callback Queue.

---

### Step 5

Event Loop checks:
Is Call Stack empty?

Yes.

Moves callback to stack.

---

### Step 6

Callback executes:

```javascript
console.log("Inside Timeout");
```

Output:

```javascript
Inside Timeout
```

---

## Visual Flow

```text
Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack
```

---

## Why Event Loop is Important

Without Event Loop:

* Async operations wouldn’t work
* JavaScript couldn’t handle timers/events efficiently

It makes non-blocking behavior possible.

---

## Interview Answer

**The Event Loop is a mechanism in JavaScript that enables asynchronous behavior despite JavaScript being single-threaded. It continuously monitors the Call Stack and Callback Queue. When the Call Stack becomes empty, the Event Loop moves pending callbacks from the queue to the stack for execution.**

---

# 169. What is a Callback?

**Definition:**
A callback is a function passed as an argument to another function and executed later.

In simple words:

**“Function inside another function, called later.”**

---

## Basic Example

```javascript
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    let name = "Rishi";
    callback(name);
}

processUser(greet);
```

Output:

```javascript
Hello Rishi
```

---

## How It Works

* `greet` is a function
* Passed into `processUser`
* Later executed inside `processUser`

That function is callback.

---

## Anonymous Callback Example

```javascript
setTimeout(function () {
   console.log("Executed after 2 seconds");
}, 2000);
```

Here:

```javascript
function () {
   console.log("Executed after 2 seconds");
}
```

is callback.

---

## Arrow Function Callback

```javascript
setTimeout(() => {
   console.log("Hello");
}, 1000);
```

Callback = arrow function.

---

## Callback in Array Methods

Very common.

```javascript
let numbers = [1, 2, 3];

numbers.forEach(function(num) {
    console.log(num);
});
```

Output:

```javascript
1
2
3
```

Callback:

```javascript
function(num) {
   console.log(num);
}
```

---

## Why Use Callbacks?

Callbacks are useful for:

* Async programming
* Event handling
* Array methods
* Custom logic execution

Examples:

* `setTimeout`
* `addEventListener`
* `map`
* `filter`
* `forEach`

---

## Callback in Async Programming

Example:

```javascript
function fetchData(callback) {
    setTimeout(() => {
        let data = "Server Data";
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log(data);
});
```

Output after 2 sec:

```javascript
Server Data
```

---

## Callback Hell

Problem with too many nested callbacks.

Example:

```javascript
loginUser(user, function(user) {
    getProfile(user, function(profile) {
        getPosts(profile, function(posts) {
            console.log(posts);
        });
    });
});
```

Looks messy.

This is called:

**Callback Hell** or **Pyramid of Doom**

---

## Solution to Callback Hell

Modern JavaScript uses:

* Promises
* Async/Await

instead of deeply nested callbacks.

---

## Advantages of Callbacks

### 1. Flexible

Pass behavior dynamically.

### 2. Great for Async Tasks

Useful in timers/events.

### 3. Reusable Logic

Cleaner abstraction.

---

## Disadvantages of Callbacks

### 1. Nested Complexity

Hard to read.

### 2. Hard Debugging

Complex async flow.

### 3. Callback Hell

Big issue in older JS code.

---

## Interview Answer

**A callback is a function passed as an argument to another function and executed later after some operation completes. Callbacks are widely used in JavaScript for asynchronous operations, event handling, and array methods. Excessive nested callbacks can lead to callback hell, which is commonly solved using Promises and async/await.**

---

These four concepts are deeply connected:

* Synchronous Programming
* Asynchronous Programming
* Event Loop
* Callbacks

Master these before moving to:

* Promises
* Async/Await
* Microtask Queue
* Promise chaining
* Fetch API

These are highly asked in JavaScript interviews.


# 170. What is Callback Hell?

**Definition:**
Callback Hell is a situation where multiple callbacks are nested inside each other, making code difficult to read, maintain, and debug.

It usually happens in asynchronous JavaScript code when one async task depends on another.

In simple words:

**“Too many nested callbacks creating messy pyramid-shaped code.”**

Because of deep nesting, code starts moving toward the right side like a pyramid.

That’s why it is also called:

* Pyramid of Doom
* Callback Pyramid

---

## Why Callback Hell Happens

Suppose you need to perform operations in sequence:

1. Login user
2. Get user profile
3. Fetch posts
4. Fetch comments

Each depends on previous result.

Using callbacks:

```javascript
loginUser(username, password, function(user) {
    getUserProfile(user.id, function(profile) {
        getPosts(profile.id, function(posts) {
            getComments(posts[0].id, function(comments) {
                console.log(comments);
            });
        });
    });
});
```

See the problem?

* Too much nesting
* Hard to understand
* Hard to debug

---

## Real-Life Example

Imagine ordering food:

1. Place order
2. Wait for confirmation
3. Wait for preparation
4. Wait for delivery

If each step is written inside previous step’s callback, code becomes messy.

---

## Callback Hell Example

```javascript
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});
```

Output:

```javascript
Step 1 completed
Step 2 completed
Step 3 completed
All steps completed
```

Works fine, but readability is poor.

---

# Problems with Callback Hell

## 1. Hard to Read

Nested code becomes ugly.

---

## 2. Hard to Debug

Tracking errors becomes difficult.

---

## 3. Hard to Maintain

Changing logic becomes risky.

---

## 4. Error Handling Becomes Complex

Example:

```javascript
loginUser(user, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        getProfile(data, function(err, profile) {
            if (err) {
                console.log(err);
            }
        });
    }
});
```

Too much repeated error handling.

---

# How to Avoid Callback Hell

Modern JavaScript solves this using:

### 1. Promises

### 2. Async/Await

---

## Promise Version

```javascript
loginUser()
    .then(getProfile)
    .then(getPosts)
    .then(getComments)
    .then(comments => console.log(comments))
    .catch(err => console.log(err));
```

Cleaner.

---

## Async/Await Version

```javascript
async function fetchData() {
    try {
        const user = await loginUser();
        const profile = await getProfile(user);
        const posts = await getPosts(profile);
        const comments = await getComments(posts);

        console.log(comments);
    } catch (error) {
        console.log(error);
    }
}
```

Much cleaner.

---

## Interview Answer

**Callback Hell refers to deeply nested callbacks in asynchronous JavaScript code, making the code difficult to read, debug, and maintain. It commonly occurs when multiple async operations depend on each other. This problem is usually solved using Promises or async/await.**

---

# 171. What are Promises?

One of the most important JavaScript interview topics.

---

## Definition

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

In simple words:

**A Promise is a guarantee of future value.**

It says:

* Task may complete successfully
  OR
* Task may fail

But result will come in future.

---

## Real-Life Example

Food delivery app:

You order food.

Promise from restaurant:

* Food delivered → Success
* Order cancelled → Failure

Until then, order is pending.

Exactly same concept.

---

## Why Promises Were Introduced

Problem with callbacks:

* Callback Hell
* Difficult error handling
* Poor readability

Promises solve these issues.

---

## Syntax

```javascript
const promise = new Promise((resolve, reject) => {
    
});
```

Promise constructor takes a function with two arguments:

* resolve → success
* reject → failure

---

## Basic Example

```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed successfully");
    } else {
        reject("Task failed");
    }
});
```

---

## Consuming a Promise

We use:

* `.then()` → success
* `.catch()` → failure

Example:

```javascript
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```

Output:

```javascript
Task completed successfully
```

---

## Promise with setTimeout

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched");
    }, 2000);
});

promise.then(data => {
    console.log(data);
});
```

Output after 2 sec:

```javascript
Data fetched
```

---

## Promise Lifecycle

Promise starts in pending state.

Eventually:

* fulfilled
  OR
* rejected

---

## Advantages of Promises

### 1. Better Readability

Cleaner than callbacks.

### 2. Better Error Handling

Use `.catch()`.

### 3. Chaining Support

Multiple async tasks become easier.

---

## Interview Answer

**A Promise in JavaScript is an object that represents the eventual success or failure of an asynchronous operation. It helps manage asynchronous code more efficiently than callbacks and provides cleaner syntax using then(), catch(), and finally().**

---

# 172. What are Promise States?

Every Promise has a state.

There are **3 states**.

---

## 1. Pending

Initial state.

Task is still running.

Example:

```javascript
const promise = new Promise((resolve, reject) => {
   // operation in progress
});
```

State = Pending

---

## 2. Fulfilled (Resolved)

Operation completed successfully.

Example:

```javascript
resolve("Success");
```

State becomes fulfilled.

---

## 3. Rejected

Operation failed.

Example:

```javascript
reject("Failed");
```

State becomes rejected.

---

## Visual Flow

```text
Pending → Fulfilled
        OR
Pending → Rejected
```

Important:
Once promise changes state, it cannot change again.

Example:

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Success");
    reject("Failed");
});
```

Only first one counts.

Output:

```javascript
Success
```

Reject ignored.

---

## Example

```javascript
const promise = new Promise((resolve, reject) => {
    let success = false;

    setTimeout(() => {
        if (success) {
            resolve("Task successful");
        } else {
            reject("Task failed");
        }
    }, 2000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

Output:

```javascript
Task failed
```

---

## Interview Answer

**A Promise in JavaScript has three states: Pending, Fulfilled, and Rejected. Initially, every promise is in pending state. If the async operation succeeds, it becomes fulfilled; if it fails, it becomes rejected. Once a promise settles, its state cannot change.**

---

# 173. What is Promise Chaining?

**Definition:**
Promise chaining means connecting multiple `.then()` methods to execute asynchronous tasks sequentially.

In simple words:

**One async task completes → result passed to next task.**

---

## Why Use Promise Chaining?

Suppose you need to perform:

1. Fetch user
2. Fetch profile
3. Fetch posts

Each depends on previous result.

Promise chaining makes this clean.

---

## Basic Example

```javascript
fetchUser()
    .then(user => {
        return getProfile(user);
    })
    .then(profile => {
        return getPosts(profile);
    })
    .then(posts => {
        console.log(posts);
    })
    .catch(error => {
        console.log(error);
    });
```

Flow:

* Fetch user
* Get profile
* Get posts
* Handle errors

---

## Simple Math Example

```javascript
Promise.resolve(5)
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
    });
```

Output:

```javascript
5
10
20
```

Each `.then()` receives previous result.

---

## Important Rule

Each `.then()` returns a new Promise.

That allows chaining.

Example:

```javascript
promise.then().then().then()
```

---

## Promise Chaining with Async Tasks

```javascript
function step1() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1000);
    });
}

function step2(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value * 2), 1000);
    });
}

step1()
    .then(result => step2(result))
    .then(finalResult => console.log(finalResult));
```

Output:

```javascript
20
```

---

# Error Handling in Promise Chain

If any promise fails, control jumps to `.catch()`.

Example:

```javascript
Promise.resolve(10)
    .then(num => {
        throw new Error("Something went wrong");
    })
    .then(num => {
        console.log(num);
    })
    .catch(error => {
        console.log(error.message);
    });
```

Output:

```javascript
Something went wrong
```

---

## Benefits of Promise Chaining

### 1. Cleaner Code

Better than nested callbacks.

### 2. Better Readability

Sequential flow.

### 3. Centralized Error Handling

Single `.catch()`.

---

## Interview Answer

**Promise chaining is a technique in JavaScript where multiple then() methods are connected to execute asynchronous operations sequentially. Each then() receives the result of the previous promise and returns a new promise. It improves readability and avoids callback hell.**

---

These topics are extremely important because they form the foundation for:

* Async/Await
* Fetch API
* API Handling
* Modern JavaScript Async Programming

Next highly important topics:

* `async/await`
* `try/catch`
* `Promise.all()`
* `Promise.race()`
* Microtask Queue vs Callback Queue


# 174. What is `Promise.all()`?

`Promise.all()` is one of the most important Promise methods in JavaScript.

---

## Definition

`Promise.all()` takes multiple promises and returns **a single promise**.

It waits until:

✅ All promises are resolved
OR
❌ Any one promise gets rejected

In simple words:

**“Run all promises together and wait for all of them to finish successfully.”**

---

## Syntax

```javascript
Promise.all([promise1, promise2, promise3])
```

It accepts an array of promises.

---

## Real-Life Example

Imagine ordering 3 things online:

* Laptop
* Mouse
* Keyboard

You want to proceed only when **all 3 are delivered**.

If even one order fails → overall operation fails.

That’s exactly how `Promise.all()` works.

---

# Basic Example

```javascript
const p1 = Promise.resolve("Task 1 completed");
const p2 = Promise.resolve("Task 2 completed");
const p3 = Promise.resolve("Task 3 completed");

Promise.all([p1, p2, p3])
    .then(results => {
        console.log(results);
    });
```

Output:

```javascript
[
  "Task 1 completed",
  "Task 2 completed",
  "Task 3 completed"
]
```

---

## Important Point

Results are returned in the **same order as input promises**, not completion order.

Even if `p3` finishes first, output order remains:

```javascript
[p1Result, p2Result, p3Result]
```

---

# Async Example with setTimeout

```javascript
const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 3000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 1000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Third"), 2000);
});

Promise.all([p1, p2, p3])
    .then(results => console.log(results));
```

Output after 3 sec:

```javascript
["First", "Second", "Third"]
```

Notice:

* p2 finished first
* p3 finished second
* p1 finished last

Still output order stays same.

---

# Rejection Example

```javascript
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");
const p3 = Promise.resolve("Done");

Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(error => console.log(error));
```

Output:

```javascript
Failed
```

Why?

Because even one rejected promise causes immediate rejection.

This is called **Fail Fast Behavior**.

---

# When to Use `Promise.all()`

Use when:

* All tasks are independent
* Need all results
* One failure means overall failure

Examples:

* Multiple API calls
* Fetch products + users + orders
* Parallel database queries

---

# Advantages

### 1. Parallel Execution

Faster than sequential execution.

### 2. Efficient

Multiple async tasks together.

### 3. Clean Code

Simpler than manual handling.

---

# Disadvantages

### 1. Fail Fast

One failure rejects everything.

---

## Interview Answer

**`Promise.all()` takes an iterable of promises and returns a single promise. It resolves when all input promises are fulfilled and returns their results as an array. If any promise rejects, `Promise.all()` immediately rejects with that error. It is useful when all async tasks must complete successfully.**

---

# 175. What is `Promise.race()`?

---

## Definition

`Promise.race()` returns a promise that settles as soon as **the first promise settles**.

Settles means:

* Resolved
  OR
* Rejected

In simple words:

**“Whichever promise finishes first wins.”**

---

## Syntax

```javascript
Promise.race([promise1, promise2, promise3])
```

---

## Real-Life Example

Imagine a race between 3 runners.

Whoever reaches finish line first wins.

Exactly same concept.

---

# Basic Example

```javascript
const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 3000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 1000);
});

Promise.race([p1, p2])
    .then(result => console.log(result));
```

Output:

```javascript
Second
```

Because p2 finishes first.

---

# Rejection Example

```javascript
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Failed"), 1000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Success"), 2000);
});

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

Output:

```javascript
Failed
```

Because rejection happened first.

---

# Common Use Case: Timeout Handling

Very popular interview example.

```javascript
const apiCall = fetch("https://example.com");

const timeout = new Promise((_, reject) => {
    setTimeout(() => reject("Request Timeout"), 5000);
});

Promise.race([apiCall, timeout])
    .then(response => console.log(response))
    .catch(error => console.log(error));
```

If API takes more than 5 sec → timeout wins.

---

## When to Use `Promise.race()`

Use for:

* Timeout logic
* Fastest response selection
* Competing async tasks

---

## Interview Answer

**`Promise.race()` takes multiple promises and returns a promise that settles as soon as the first promise settles, whether resolved or rejected. It is useful when you need the fastest result or want to implement timeout behavior.**

---

# 176. What is `Promise.any()`?

---

## Definition

`Promise.any()` returns the **first fulfilled promise**.

Important difference from race:

* `Promise.race()` → first settled (resolve/reject)
* `Promise.any()` → first successful resolve only

In simple words:

**“Ignore failures, return first successful promise.”**

---

## Syntax

```javascript
Promise.any([promise1, promise2, promise3])
```

---

## Real-Life Example

Suppose 3 servers contain same data.

You request all 3.

Whichever server responds successfully first → use it.

Failed servers are ignored.

---

# Basic Example

```javascript
const p1 = Promise.reject("Server 1 failed");

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Server 2 success"), 2000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Server 3 success"), 1000);
});

Promise.any([p1, p2, p3])
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

Output:

```javascript
Server 3 success
```

---

# If All Promises Fail

Then it rejects with **AggregateError**.

Example:

```javascript
Promise.any([
    Promise.reject("Error 1"),
    Promise.reject("Error 2")
])
.catch(error => {
    console.log(error);
});
```

Output:

```javascript
AggregateError
```

---

# When to Use `Promise.any()`

Use when:

* Need first successful result
* Failures can be ignored
* Multiple fallback servers available

Examples:

* CDN fallback
* Multiple APIs
* Backup servers

---

## Interview Answer

**`Promise.any()` returns a promise that fulfills as soon as any one promise fulfills successfully. Rejected promises are ignored unless all promises reject, in which case it throws an AggregateError. It is useful when you need the first successful result.**

---

# 177. What is `Promise.allSettled()`?

---

## Definition

`Promise.allSettled()` waits for **all promises to settle**.

Settled means:

* Fulfilled
  OR
* Rejected

Unlike `Promise.all()`:

* It never fails because one promise failed
* It waits for all results

In simple words:

**“Wait for everything, whether success or failure.”**

---

## Syntax

```javascript
Promise.allSettled([promise1, promise2, promise3])
```

---

## Real-Life Example

Suppose you send:

* Email
* SMS
* Push notification

You want report of all:

* Which succeeded
* Which failed

Even if one fails, you still want complete result.

Perfect case for `Promise.allSettled()`.

---

# Basic Example

```javascript
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");
const p3 = Promise.resolve("Done");

Promise.allSettled([p1, p2, p3])
    .then(results => console.log(results));
```

Output:

```javascript
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Failed" },
  { status: "fulfilled", value: "Done" }
]
```

---

# Result Structure

Each result object contains:

For success:

```javascript
{
   status: "fulfilled",
   value: result
}
```

For failure:

```javascript
{
   status: "rejected",
   reason: error
}
```

---

# When to Use `Promise.allSettled()`

Use when:

* Need all results
* Success + failure both matter
* Don’t want fail-fast behavior

Examples:

* Notification systems
* Bulk uploads
* Reporting systems

---

## Interview Answer

**`Promise.allSettled()` takes multiple promises and waits until all promises settle, regardless of whether they resolve or reject. It returns an array containing the status and result of each promise. It is useful when you want complete information about all asynchronous operations.**

---

# Quick Comparison (Very Important for Interviews)

| Method               | Waits For       | Rejects When                               | Returns            |
| -------------------- | --------------- | ------------------------------------------ | ------------------ |
| Promise.all()        | All fulfilled   | First rejection                            | Array of results   |
| Promise.race()       | First settled   | First rejection if first settled is reject | First result/error |
| Promise.any()        | First fulfilled | All rejected                               | First success      |
| Promise.allSettled() | All settled     | Never rejects due to individual failure    | Status of all      |

---

# Easy Memory Trick

* **all** → Need everything
* **race** → First to finish
* **any** → First success
* **allSettled** → Need all results

These 4 methods are extremely important in modern JavaScript interviews.

Next highly important topics:

* `async/await`
* Microtask Queue
* Macrotask Queue
* Fetch API


# 178. What is async/await?

`async/await` is one of the most important features in modern JavaScript for handling asynchronous code.

It is built on top of **Promises** and makes async code look like synchronous code.

---

## Definition

* `async` makes a function return a Promise.
* `await` pauses execution inside an async function until a Promise resolves.

In simple words:

**async/await lets us write asynchronous code in a cleaner and more readable way.**

---

## Why async/await Was Introduced

Before async/await, JavaScript handled async operations using:

* Callbacks
* Promises

Callbacks caused:

* Callback Hell
* Difficult debugging

Promises improved things, but long `.then()` chains could still become hard to read.

Example with Promise chaining:

```javascript
fetchUser()
    .then(user => getProfile(user))
    .then(profile => getPosts(profile))
    .then(posts => console.log(posts))
    .catch(error => console.log(error));
```

Readable, but async/await is cleaner.

---

# async Keyword

When you add `async` before a function:

```javascript
async function greet() {

}
```

That function automatically returns a Promise.

Example:

```javascript
async function greet() {
    return "Hello";
}

greet().then(console.log);
```

Output:

```javascript
Hello
```

Even though we returned a string, JavaScript wraps it inside a Promise.

Equivalent to:

```javascript
function greet() {
    return Promise.resolve("Hello");
}
```

---

# await Keyword

`await` waits for Promise resolution.

Example:

```javascript
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}
```

Using Promise:

```javascript
fetchData().then(data => console.log(data));
```

Using async/await:

```javascript
async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData();
```

Output after 2 sec:

```javascript
Data Received
```

---

# Real-Life Example

Suppose you order food.

Without async/await:

* Order placed
* Wait through callbacks/promises

With async/await:

* Place order
* Wait for food
* Eat food

Readable sequence.

---

# Full Example

```javascript
function step1() {
    return Promise.resolve("Step 1 Complete");
}

function step2() {
    return Promise.resolve("Step 2 Complete");
}

async function processSteps() {
    const result1 = await step1();
    console.log(result1);

    const result2 = await step2();
    console.log(result2);
}

processSteps();
```

Output:

```javascript
Step 1 Complete
Step 2 Complete
```

---

# Error Handling with try/catch

Very important in interviews.

```javascript
function fetchData() {
    return Promise.reject("Something went wrong");
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();
```

Output:

```javascript
Something went wrong
```

---

# Advantages of async/await

### 1. Cleaner Syntax

Looks like synchronous code.

### 2. Better Readability

Easy to understand.

### 3. Better Error Handling

Use `try/catch`.

### 4. Easier Debugging

Less nesting.

---

# Disadvantages

### 1. Only works with Promises

### 2. Can become sequential if misused

Example:

```javascript
await task1();
await task2();
```

This runs sequentially.

Sometimes parallel execution is better using `Promise.all()`.

---

## Interview Answer

**async/await is a modern JavaScript feature used to handle asynchronous operations in a cleaner way. The async keyword makes a function return a Promise, and the await keyword pauses execution inside the async function until the Promise resolves or rejects. It improves readability and simplifies error handling using try/catch.**

---

# 179. How does async/await work internally?

This is a high-level interview question.

Interviewers ask this to test deep JavaScript understanding.

---

## Short Answer

Internally, async/await is built on top of:

* Promises
* Event Loop
* Microtask Queue

`await` does NOT block the entire JavaScript thread.

It only pauses execution of that async function.

This is very important.

---

## Internal Working Flow

When JavaScript sees:

```javascript
await somePromise;
```

It performs these steps:

1. Evaluate Promise
2. Pause async function execution
3. Return control to Event Loop
4. Continue running other code
5. When Promise resolves → resume function
6. Resume via Microtask Queue

---

## Example

```javascript
async function test() {
    console.log("Start");

    await Promise.resolve();

    console.log("End");
}

test();

console.log("Outside");
```

Output:

```javascript
Start
Outside
End
```

Many people expect:

```javascript
Start
End
Outside
```

But actual output differs.

---

# Step-by-Step Internal Execution

### Step 1

Call `test()`

Stack:

```text
test()
```

---

### Step 2

Execute:

```javascript
console.log("Start");
```

Output:

```javascript
Start
```

---

### Step 3

Encounter:

```javascript
await Promise.resolve();
```

JavaScript:

* Sees Promise
* Pauses function execution
* Removes remaining code temporarily

Remaining code:

```javascript
console.log("End");
```

Gets scheduled in Microtask Queue.

---

### Step 4

Control returns to main thread.

Execute:

```javascript
console.log("Outside");
```

Output:

```javascript
Outside
```

---

### Step 5

Call Stack becomes empty.

Event Loop checks Microtask Queue.

Pending task exists.

---

### Step 6

Resume async function.

Execute:

```javascript
console.log("End");
```

Output:

```javascript
End
```

---

## Important Point

`await` pauses only:

* Current async function

It does NOT block:

* Event Loop
* Main thread

That’s why JS remains non-blocking.

---

## Internally Similar to Promise.then()

This:

```javascript
async function demo() {
    await fetchData();
    console.log("Done");
}
```

Roughly behaves like:

```javascript
function demo() {
    return fetchData().then(() => {
        console.log("Done");
    });
}
```

---

## Interview Answer

**Internally, async/await is built on top of Promises. When JavaScript encounters await, it pauses execution of that async function and returns control to the Event Loop. Once the Promise resolves, the remaining function execution is placed in the Microtask Queue and resumes later. It does not block the main thread.**

---

# 180. What is a Microtask Queue?

Very important topic.

Interviewers often ask:

**Microtask Queue vs Callback Queue**

---

## Definition

Microtask Queue stores high-priority asynchronous tasks.

These tasks execute **before Callback Queue tasks**.

---

## Common Sources of Microtasks

* Promise `.then()`
* Promise `.catch()`
* Promise `.finally()`
* `await`
* `queueMicrotask()`
* MutationObserver

---

## Example

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output:

```javascript
Start
End
Promise
```

---

## Why?

Flow:

1. Start printed
2. Promise callback goes to Microtask Queue
3. End printed
4. Stack empty
5. Microtask executes

---

## Important Rule

Event Loop always processes:

1. Call Stack
2. All Microtasks
3. One Callback Queue task

This priority matters a lot.

---

# Example

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output:

```javascript
Start
End
Promise
Timeout
```

Why Promise first?

Because Microtask Queue has higher priority than Callback Queue.

---

## Interview Answer

**Microtask Queue is a queue that stores high-priority asynchronous tasks such as Promise callbacks and async/await continuations. The Event Loop processes all microtasks before moving to the Callback Queue, which is why Promise callbacks execute before setTimeout callbacks.**

---

# 181. What is a Callback Queue?

Also called:

* Task Queue
* Macrotask Queue

---

## Definition

Callback Queue stores asynchronous callbacks waiting for execution after Web APIs complete.

Examples:

* setTimeout
* setInterval
* DOM events
* I/O tasks

---

## Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 2000);

console.log("End");
```

Output:

```javascript
Start
End
Timeout
```

---

# Internal Flow

1. `setTimeout()` goes to Web API
2. Timer starts
3. After timer completes → callback enters Callback Queue
4. Event Loop waits for Call Stack empty
5. Callback moved to Call Stack

---

## Visual Flow

```text
Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack
```

---

# Example with Queue Priority

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output:

```javascript
Start
End
Promise
Timeout
```

Why?

Because:

* Promise → Microtask Queue
* setTimeout → Callback Queue

Microtasks run first.

---

# Microtask Queue vs Callback Queue

| Feature  | Microtask Queue | Callback Queue          |
| -------- | --------------- | ----------------------- |
| Priority | Higher          | Lower                   |
| Executes | First           | After microtasks        |
| Examples | Promise, await  | setTimeout, setInterval |

---

# Interview Answer

**Callback Queue is a queue that stores asynchronous callbacks such as setTimeout, setInterval, DOM events, and I/O operations. Once the Call Stack becomes empty, the Event Loop moves callbacks from this queue to the Call Stack for execution. Callback Queue has lower priority than the Microtask Queue.**

---

These topics are extremely important because they form the core of JavaScript async behavior:

* async/await
* Event Loop
* Microtask Queue
* Callback Queue

Master these and your async JavaScript foundation becomes very strong.


# 182. What is `setTimeout()`?

`setTimeout()` is one of the most commonly used JavaScript functions for asynchronous programming.

---

## Definition

`setTimeout()` executes a function **after a specified delay (in milliseconds)**.

In simple words:

**“Run this function later after some time.”**

---

## Syntax

```javascript
setTimeout(function, delay);
```

or

```javascript
setTimeout(callback, milliseconds);
```

---

## Parameters

### 1. Callback Function

Function to execute later.

### 2. Delay

Time in milliseconds.

Remember:

```javascript
1000 ms = 1 second
```

---

## Basic Example

```javascript
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);
```

Output after 2 sec:

```javascript
Hello after 2 seconds
```

---

# Real-Life Example

Suppose you set an alarm.

* Set alarm for 7 AM
* Wait
* Alarm rings later

Exactly same idea.

---

# Important Concept: Non-Blocking Nature

Many beginners think JavaScript stops for 2 seconds.

Wrong.

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);

console.log("End");
```

Output:

```javascript
Start
End
Inside Timeout
```

---

## Why?

Because:

1. `console.log("Start")` runs
2. `setTimeout()` registers timer in Web APIs
3. JS continues executing
4. `console.log("End")` runs
5. After 2 sec callback enters Callback Queue
6. Event Loop executes callback

---

# Internal Flow

```text
Call Stack → Web APIs → Callback Queue → Event Loop
```

---

# setTimeout with 0 Delay

Very famous interview question.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```javascript
Start
End
Timeout
```

Many expect timeout first because delay = 0.

Wrong.

Why?

`0` means:
**minimum delay**, not immediate execution.

Callback still goes to Callback Queue.

It executes only when:

* Call Stack empty
* Microtasks finished

---

# Clearing Timeout

Use `clearTimeout()`.

Example:

```javascript
const timer = setTimeout(() => {
    console.log("Will not execute");
}, 3000);

clearTimeout(timer);
```

Timer cancelled.

---

# Use Cases

* Delayed execution
* Notifications
* Debouncing
* Retry logic
* Auto logout

---

# Interview Answer

**`setTimeout()` is a JavaScript function used to execute a callback after a specified delay in milliseconds. It is asynchronous and does not block the main thread. Internally, it uses browser Web APIs and the Event Loop to schedule callback execution.**

---

# 183. What is `setInterval()`?

---

## Definition

`setInterval()` repeatedly executes a function after a fixed time interval.

In simple words:

**“Run this function again and again after every X milliseconds.”**

---

## Syntax

```javascript
setInterval(function, interval);
```

---

## Basic Example

```javascript
setInterval(() => {
    console.log("Hello");
}, 1000);
```

Output:

```javascript
Hello
Hello
Hello
...
```

Every 1 second.

---

# Real-Life Example

Think of a wall clock.

Every second:

* Tick
* Tick
* Tick

Continuous repeated execution.

---

# Example Counter

```javascript
let count = 0;

setInterval(() => {
    count++;
    console.log(count);
}, 1000);
```

Output:

```javascript
1
2
3
4
...
```

---

# Stop Interval

Use `clearInterval()`.

Example:

```javascript
let count = 0;

const interval = setInterval(() => {
    count++;
    console.log(count);

    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);
```

Output:

```javascript
1
2
3
4
5
```

Stops after 5.

---

# Internal Working

Like `setTimeout`, it uses:

* Web APIs
* Callback Queue
* Event Loop

Difference:

* `setTimeout` → once
* `setInterval` → repeatedly

---

# Use Cases

* Clocks
* Timers
* Polling API
* Realtime updates
* Live counters

---

# Problems with setInterval

If callback execution takes longer than interval:

```javascript
setInterval(() => {
   heavyTask();
}, 1000);
```

Issues:

* Overlapping execution
* Performance issues

Sometimes recursive `setTimeout()` is better.

Example:

```javascript
function repeat() {
    setTimeout(() => {
        console.log("Task done");
        repeat();
    }, 1000);
}

repeat();
```

---

# Interview Answer

**`setInterval()` is a JavaScript function used to repeatedly execute a callback function at fixed time intervals. It continues running until explicitly stopped using clearInterval(). It is useful for periodic tasks like timers, clocks, and polling.**

---

# 184. What is `requestAnimationFrame()`?

Very important for frontend interviews.

---

## Definition

`requestAnimationFrame()` tells the browser to execute a function before the next repaint.

In simple words:

**“Run animation code at the best time for smooth rendering.”**

---

## Why Needed?

Suppose you animate using `setInterval()`.

Example:

```javascript
setInterval(updateAnimation, 16);
```

Problems:

* Not optimized
* Can cause lag
* Wastes CPU

Browser has better knowledge about repaint timing.

That’s why `requestAnimationFrame()` exists.

---

# Syntax

```javascript
requestAnimationFrame(callback);
```

---

# Basic Example

```javascript
function animate() {
    console.log("Animating...");
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

This creates animation loop.

---

# Real-Life Example

Suppose moving a car in game.

Each frame:

* Update position
* Repaint screen

Browser handles this smoothly using `requestAnimationFrame()`.

---

# Example: Moving Box

```javascript
let position = 0;
const box = document.getElementById("box");

function move() {
    position += 2;
    box.style.left = position + "px";

    if (position < 300) {
        requestAnimationFrame(move);
    }
}

requestAnimationFrame(move);
```

This moves box smoothly.

---

# Why Better than setInterval?

### With `setInterval()`

* Fixed timer
* Not synced with browser repaint
* Less efficient

### With `requestAnimationFrame()`

* Synced with display refresh
* Better performance
* Smoother animations

---

# Browser Optimization

Most displays refresh at:

```text
60 FPS
```

Meaning:
~16.67 ms per frame

Browser schedules animation accordingly.

---

# Advantages

### 1. Smooth Animations

### 2. Better Performance

### 3. Efficient CPU Usage

### 4. Auto Pauses in Background Tabs

Very important advantage.

---

# Interview Answer

**`requestAnimationFrame()` is a browser API used for smooth animations. It schedules a callback to run before the next browser repaint, making animations more efficient and synchronized with the display refresh rate. It performs better than setInterval for UI animations.**

---

# 185. What is `fetch()`?

One of the most important JavaScript APIs.

---

## Definition

`fetch()` is a modern JavaScript API used to make HTTP requests.

It is commonly used for:

* API calls
* Fetching data from servers
* Sending data to backend

In simple words:

**“fetch() is used to communicate with servers.”**

---

# Syntax

```javascript
fetch(url, options)
```

Returns:

```javascript
Promise
```

Very important:
`fetch()` returns a Promise.

---

# Basic GET Request

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---

# Using async/await

Modern approach:

```javascript
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
```

---

# How fetch Works

Step-by-step:

1. Request sent to server
2. Server processes request
3. Response returned
4. Parse response
5. Use data

---

# POST Request Example

```javascript
fetch("https://example.com/api", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Rishi"
    })
})
.then(response => response.json())
.then(data => console.log(data));
```

---

# Common HTTP Methods

* GET → Retrieve data
* POST → Send data
* PUT → Update data
* DELETE → Remove data

---

# Response Object

Fetch returns Response object.

Common properties:

* response.status
* response.ok
* response.headers

Common methods:

* response.json()
* response.text()
* response.blob()

Example:

```javascript
fetch(url)
    .then(response => {
        console.log(response.status);
        return response.json();
    });
```

---

# Important Interview Point

`fetch()` rejects only for:

* Network errors
* CORS issues

It does NOT reject for:

* 404
* 500

Example:

```javascript
const response = await fetch(url);

if (!response.ok) {
    throw new Error("Request failed");
}
```

Very important.

---

# Advantages

### 1. Promise-based

### 2. Cleaner syntax

### 3. Modern API

### 4. Works well with async/await

---

# Interview Answer

**`fetch()` is a modern JavaScript API used to make HTTP requests to servers. It returns a Promise that resolves to a Response object. It is commonly used for API calls such as GET, POST, PUT, and DELETE requests. It integrates well with Promises and async/await for handling asynchronous operations.**

---

These concepts are highly important for frontend + MERN interviews:

* `setTimeout()`
* `setInterval()`
* `requestAnimationFrame()`
* `fetch()`

Especially `fetch()` is asked a lot in React and MERN interviews.


# 186. What is AJAX?

AJAX is one of the most important concepts in frontend and MERN interviews.

---

## Definition

AJAX stands for:

**Asynchronous JavaScript and XML**

It is a technique used to send and receive data from a server **without reloading the entire webpage**.

In simple words:

**AJAX allows web pages to update data dynamically in the background without refreshing the page.**

---

## Why AJAX Was Introduced

Before AJAX:

* User clicks button
* Browser sends request
* Entire page reloads
* New page loads

This was slow and poor for user experience.

Example:
Imagine searching on a website and page reloads every time you type a letter. Bad experience.

AJAX solved this.

---

# Real-Life Example

Suppose you use social media.

When you:

* Like a post
* Comment
* Refresh notifications

Page does NOT reload.

Still data updates.

That happens using AJAX.

---

# Why “Asynchronous”?

AJAX works asynchronously.

Meaning:

* Send request to server
* Don’t block UI
* Continue other work
* Response comes later

This makes apps fast and responsive.

---

# Technologies Used in AJAX

AJAX is not a single technology.

It combines:

* HTML
* CSS
* JavaScript
* DOM
* XMLHttpRequest / Fetch API
* JSON / XML

Originally XML was popular.

Today mostly we use JSON.

---

# AJAX Flow

Basic flow:

1. User action happens
2. JavaScript sends request
3. Server processes request
4. Server sends response
5. JavaScript updates UI

---

## Visual Flow

```text id="y6lsgl"
Browser → Request → Server
Browser ← Response ← Server
```

---

# Example Using fetch()

```javascript id="tmk2l2"
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

Here:

* Request sent in background
* Response received
* Page doesn’t reload

This is AJAX.

---

# Example: Search Suggestions

When user types:

```text id="6tl81w"
R
Ri
Ris
Rish
Rishi
```

AJAX sends requests in background and updates suggestions instantly.

---

# Advantages of AJAX

### 1. Better User Experience

No full page reload.

### 2. Faster Performance

Only data transfers.

### 3. Reduced Server Load

Less unnecessary rendering.

### 4. Dynamic UI Updates

Smooth applications.

---

# Disadvantages

### 1. More Complex Debugging

### 2. Network Dependency

### 3. Security Considerations

---

# Interview Answer

**AJAX stands for Asynchronous JavaScript and XML. It is a web development technique used to send and receive data from a server asynchronously without reloading the entire webpage. AJAX improves user experience by enabling faster and dynamic content updates. Modern applications usually use JSON with Fetch API or XMLHttpRequest for AJAX requests.**

---

# 187. What is XMLHttpRequest?

Before `fetch()`, JavaScript mainly used `XMLHttpRequest` for AJAX requests.

Very important interview topic.

---

## Definition

`XMLHttpRequest` (XHR) is a browser API used to send HTTP requests to servers and receive responses.

In simple words:

**XMLHttpRequest allows JavaScript to communicate with servers in the background.**

---

# Why Name Contains XML?

Because originally it was designed for XML data.

Today it is mostly used with:

* JSON
* Text
* XML

---

# Syntax

Basic steps:

1. Create XHR object
2. Open request
3. Send request
4. Handle response

---

# Basic Example (GET Request)

```javascript id="48mj6j"
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};

xhr.send();
```

---

# Step-by-Step

---

## Step 1: Create Object

```javascript id="njp8uq"
const xhr = new XMLHttpRequest();
```

Creates request object.

---

## Step 2: Open Request

```javascript id="2vfx67"
xhr.open("GET", url);
```

Parameters:

* HTTP method
* URL

Optional:

* async flag

---

## Step 3: Send Request

```javascript id="8s6zda"
xhr.send();
```

Request goes to server.

---

## Step 4: Handle Response

```javascript id="2tdln5"
xhr.onload = function () {
   console.log(xhr.responseText);
};
```

Runs after response received.

---

# Important Properties

### xhr.status

HTTP status code

Examples:

* 200
* 404
* 500

---

### xhr.responseText

Raw response data.

---

### xhr.readyState

Tracks request state.

Values:

* 0 → Request not initialized
* 1 → Connection established
* 2 → Request received
* 3 → Processing
* 4 → Completed

---

# Example with readyState

```javascript id="muqkhj"
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
```

---

# POST Request Example

```javascript id="mgyquy"
const xhr = new XMLHttpRequest();

xhr.open("POST", "https://example.com/api");

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function () {
    console.log(xhr.responseText);
};

xhr.send(JSON.stringify({
    name: "Rishi"
}));
```

---

# Problems with XMLHttpRequest

### 1. Verbose Syntax

Too much code.

### 2. Callback-Based

Can cause callback hell.

### 3. Less Readable

Compared to fetch.

---

# XHR vs fetch

| Feature         | XHR     | fetch   |
| --------------- | ------- | ------- |
| Syntax          | Complex | Cleaner |
| Promise Support | No      | Yes     |
| Readability     | Lower   | Higher  |

---

# Interview Answer

**XMLHttpRequest is a browser API used to send HTTP requests and receive responses asynchronously from servers. It was widely used for AJAX before the Fetch API became popular. It supports GET, POST, and other HTTP methods, but its syntax is more verbose compared to fetch().**

---

# 188. How do you handle API errors?

This is a very important practical interview question.

Interviewers ask this to check real-world coding knowledge.

---

## Definition

API error handling means properly managing failures when communicating with backend services.

Examples of failures:

* Network error
* Server error
* Timeout
* Invalid request
* Unauthorized access

---

# Common API Errors

### 1. Network Errors

No internet or connection issue.

Example:

```text id="efpw7q"
Failed to fetch
```

---

### 2. Client Errors (4xx)

Examples:

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found

---

### 3. Server Errors (5xx)

Examples:

* 500 Internal Server Error
* 503 Service Unavailable

---

### 4. Timeout Errors

Request takes too long.

---

# Error Handling with fetch()

Important point:

`fetch()` only rejects on:

* Network failure
* CORS issue

It does NOT reject for:

* 404
* 500

Very important interview point.

---

# Basic Example

```javascript id="8jp8rv"
async function getUsers() {
    try {
        const response = await fetch("https://api.example.com/users");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}
```

---

# Step-by-Step Error Handling

---

## 1. Use try/catch

```javascript id="a9o3na"
try {

} catch(error) {

}
```

Catches runtime/network errors.

---

## 2. Check response.ok

```javascript id="kvj7j7"
if (!response.ok) {
    throw new Error("API request failed");
}
```

Handles HTTP errors.

---

## 3. Show User-Friendly Messages

Bad:

```javascript id="hjlwmf"
Error
```

Better:

```javascript id="sj14bl"
Unable to load users. Please try again later.
```

---

## 4. Logging Errors

Useful for debugging.

```javascript id="d2ln1h"
console.error(error);
```

---

## 5. Retry Logic

Useful for temporary failures.

Example:

* Retry after 3 sec

---

# Example with Promise

```javascript id="31q42z"
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Request failed");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---

# Best Practices

### 1. Always handle errors

### 2. Use meaningful messages

### 3. Handle loading state

### 4. Retry critical requests

### 5. Log errors properly

---

# React Example

Very practical for MERN interviews.

```javascript id="k5pcma"
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

async function fetchUsers() {
    try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}
```

---

# Interview Answer

**API error handling means properly managing failures that occur during server communication, such as network issues, HTTP errors, timeouts, or server failures. In JavaScript, errors are commonly handled using try/catch with async/await or catch() with Promises. Good API error handling includes checking response status, showing user-friendly messages, logging errors, and implementing retry mechanisms.**

---

These topics are very important for real-world frontend and MERN interviews:

* AJAX
* XMLHttpRequest
* API Error Handling

Especially error handling is frequently asked in practical interviews.


## 189. What is Debouncing?

Debouncing is a programming technique used in JavaScript to **limit the number of times a function gets executed when it is triggered repeatedly in a short period of time**. It ensures that a function is only called **after a certain amount of time has passed since the last event**.

### Simple Meaning

If an event keeps firing again and again (like typing, resizing, scrolling), debouncing makes sure:
👉 “Wait until the user stops doing the action, then execute the function once.”

---

### Real-Life Analogy

Imagine you are ringing a doorbell continuously.

* If someone keeps pressing it again and again, you don’t go to open the door every time.
* You wait until the person stops pressing for a few seconds, then you open the door once.

That waiting period is **debouncing**.

---

### How Debouncing Works

* A timer is set every time the event fires.
* If the event fires again before the timer finishes, the previous timer is cleared.
* Only when the event stops firing for a certain delay, the function executes.

---

### Code Example (JavaScript Debouncing)

```javascript
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer); // cancel previous timer

    timer = setTimeout(() => {
      func.apply(this, args); // execute after delay
    }, delay);
  };
}

// Example function
function searchAPI(query) {
  console.log("Searching for:", query);
}

// Debounced version
const debouncedSearch = debounce(searchAPI, 500);

// Simulating typing event
document.getElementById("search").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
```

---

### Real-World Use Cases

Debouncing is widely used in frontend applications:

1. **Search bars (most common)**

   * API call only after user stops typing

2. **Window resize events**

   * Recalculate layout only after resizing stops

3. **Form validation**

   * Validate input after user finishes typing

4. **Auto-save in editors**

   * Save content after user stops typing

---

### Why Debouncing is Important

* Prevents unnecessary API calls
* Improves performance
* Reduces server load
* Avoids laggy UI behavior

---

## 190. What is Throttling?

Throttling is another optimization technique used in JavaScript to **control how often a function is executed over time**. Unlike debouncing, throttling ensures that a function is executed **at regular intervals, not continuously**.

---

### Simple Meaning

👉 “Execute the function at most once every X milliseconds, no matter how many times the event is triggered.”

---

### Real-Life Analogy

Think of a water tap:

* Even if you fully open it, water flows in a controlled amount.
* It doesn’t flood continuously; it maintains a fixed flow rate.

That controlled flow is **throttling**.

---

### How Throttling Works

* When the event fires, function executes immediately.
* After that, it ignores further calls for a fixed time interval.
* Once the interval is over, it can execute again.

---

### Code Example (JavaScript Throttling)

```javascript
function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example function
function handleScroll() {
  console.log("Scroll event triggered");
}

// Throttled version
const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);
```

---

### Real-World Use Cases

1. **Scroll events**

   * Load content while scrolling (infinite scroll)

2. **Button clicks**

   * Prevent multiple API calls on rapid clicks

3. **Mouse movement tracking**

   * Used in drawing apps or analytics tracking

4. **Game development**

   * Limit key press actions

---

### Why Throttling is Important

* Ensures consistent performance
* Prevents excessive function calls
* Useful for high-frequency events
* Improves responsiveness of UI

---

## 🔥 Difference Between Debouncing and Throttling (Very Important for Interviews)

| Feature             | Debouncing               | Throttling                 |
| ------------------- | ------------------------ | -------------------------- |
| Execution           | After event stops        | At regular intervals       |
| Behavior            | Delays execution         | Limits execution frequency |
| Best for            | Search input, resize end | Scroll, click, mouse move  |
| Function call style | Once after pause         | Multiple but controlled    |

---

### Easy Way to Remember

* **Debouncing → Wait until user stops**
* **Throttling → Execute every fixed interval**

---

## 🎯 Interview Summary (Say This in Interview)

“Debouncing is a technique where a function is executed only after a certain delay once the user stops triggering an event. It is useful in scenarios like search input to reduce API calls. Throttling, on the other hand, ensures a function is executed at most once in a fixed time interval, regardless of how many times the event occurs, making it useful for scroll and resize events. Both techniques are used to optimize performance and improve application efficiency.”

---

If you want, I can next give you:
✔ Debounce vs Throttle tricky interview questions
✔ Real coding machine round problems
✔ OR MCQs for revision
just tell 👍



# 🌐 10. DOM & Browser APIs (191–210)

Below are **interview-ready, in-depth answers** for each question. You can directly speak these in interviews (2–5 minutes each), with theory + examples + real-world usage.

---

# **191. What is the DOM (Document Object Model)?**

The **DOM (Document Object Model)** is a programming interface provided by browsers that represents an HTML or XML document as a **tree-like structure of objects**. It allows JavaScript to **access, modify, and manipulate web pages dynamically**.

### 🔹 Simple Definition

The DOM is a **structured representation of a web page**, where every HTML element becomes a **node (object)** that JavaScript can interact with.

---

### 🔹 How DOM Works (Tree Structure)

Example HTML:

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome to DOM</p>
  </body>
</html>
```

DOM representation:

```
Document
 └── html
      └── body
           ├── h1 ("Hello")
           └── p ("Welcome to DOM")
```

Each element becomes:

* **Document node**
* **Element nodes**
* **Text nodes**
* **Attribute nodes**

---

### 🔹 Why DOM is Important?

The DOM allows JavaScript to:

* Change HTML content dynamically
* Update styles (CSS)
* Add/remove elements
* Handle user events (click, input, submit)

Without DOM, webpages would be **static**.

---

### 🔹 Real-World Example

When you click a **“Like” button** on Instagram:

* JavaScript updates the DOM
* Like count increases instantly
* No page reload happens

This is DOM manipulation.

---

### 🔹 Example Code

```javascript
document.body.style.backgroundColor = "lightblue";
```

This changes the webpage background dynamically using DOM.

---

### 🔹 Key Points for Interview

* DOM = Document Object Model
* It represents HTML as a tree of objects
* It connects HTML + JavaScript
* It enables dynamic web pages (React, Angular also rely on it internally)

---

# **192. How do you select elements in the DOM?**

In JavaScript, we can select DOM elements using different methods provided by the **document object**. These methods help us access HTML elements so we can manipulate them.

---

## 🔹 1. getElementById()

Selects element by **ID**

```javascript
document.getElementById("header");
```

Example:

```html
<h1 id="header">Hello</h1>
```

```javascript
let title = document.getElementById("header");
title.style.color = "red";
```

✔ Fast and commonly used
✔ Returns single element

---

## 🔹 2. getElementsByClassName()

Selects elements by **class name**

```javascript
document.getElementsByClassName("box");
```

Example:

```html
<div class="box"></div>
<div class="box"></div>
```

```javascript
let boxes = document.getElementsByClassName("box");
boxes[0].style.background = "yellow";
```

✔ Returns HTMLCollection (array-like)
✔ Not a real array

---

## 🔹 3. getElementsByTagName()

Selects elements by **tag name**

```javascript
document.getElementsByTagName("p");
```

✔ Selects all `<p>` tags
✔ Returns HTMLCollection

---

## 🔹 4. querySelector() (Modern)

Selects **first matching element**

```javascript
document.querySelector(".box");
document.querySelector("#header");
```

✔ Works with CSS selectors
✔ Very powerful
✔ Returns only first match

---

## 🔹 5. querySelectorAll()

Selects **all matching elements**

```javascript
document.querySelectorAll(".box");
```

✔ Returns NodeList
✔ Can use forEach()

---

## 🔹 Real-World Example

Imagine an e-commerce site:

* You select “Add to Cart” buttons
* You update cart count dynamically

```javascript
document.querySelector(".cart-count").innerText = 5;
```

---

## 🔹 Interview Key Points

* Multiple ways to select DOM elements
* Modern JS prefers `querySelector` and `querySelectorAll`
* Older methods still used in legacy code
* querySelector uses CSS selectors

---

# **193. What is querySelector()?**

`querySelector()` is a modern JavaScript method used to **select the first DOM element that matches a CSS selector**.

---

## 🔹 Syntax

```javascript
document.querySelector("selector");
```

---

## 🔹 Examples

### 1. Select by ID

```javascript
document.querySelector("#header");
```

### 2. Select by class

```javascript
document.querySelector(".box");
```

### 3. Select nested elements

```javascript
document.querySelector("div p");
```

This selects first `<p>` inside a `<div>`.

---

## 🔹 Important Behavior

✔ Returns only **first match**
✔ If no element found → returns `null`
✔ Supports full CSS selector syntax

---

## 🔹 Real-World Example

```html
<button class="btn">Click me</button>
```

```javascript
document.querySelector(".btn").addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## 🔹 Why it is widely used?

* Cleaner and shorter code
* Supports CSS selectors
* Replaces multiple older methods

---

## 🔹 Interview Tip

You can say:

> querySelector is the most flexible DOM selection method because it allows CSS-style selection and always returns the first matching element.

---

# **194. What is querySelectorAll()?**

`querySelectorAll()` is used to **select all DOM elements that match a given CSS selector** and returns a **NodeList**.

---

## 🔹 Syntax

```javascript
document.querySelectorAll("selector");
```

---

## 🔹 Example

### HTML

```html
<p class="text">One</p>
<p class="text">Two</p>
<p class="text">Three</p>
```

### JavaScript

```javascript
let items = document.querySelectorAll(".text");
```

Now `items` contains all 3 `<p>` elements.

---

## 🔹 Looping Through Elements

```javascript
items.forEach((item) => {
  item.style.color = "blue";
});
```

✔ NodeList supports `forEach()`

---

## 🔹 Real-World Example

In a shopping website:

* Select all product cards
* Apply discount badge dynamically

```javascript
document.querySelectorAll(".product").forEach(product => {
  product.classList.add("discounted");
});
```

---

## 🔹 Difference from querySelector()

| Feature | querySelector  | querySelectorAll      |
| ------- | -------------- | --------------------- |
| Returns | First element  | All matching elements |
| Type    | Element        | NodeList              |
| Looping | Not needed     | Required              |
| Usage   | Single element | Multiple elements     |

---

## 🔹 Important Points for Interview

* Returns a **NodeList (not array)**
* Can use `forEach`, but not all array methods directly
* Supports CSS selectors
* Very useful in bulk DOM manipulation

---

# 🔥 FINAL INTERVIEW SUMMARY (SPEAK THIS)

* DOM is a tree-like representation of HTML used by JavaScript to manipulate web pages dynamically.
* DOM selection allows us to access elements using methods like getElementById, getElementsByClassName, querySelector, and querySelectorAll.
* querySelector returns the first matching element using CSS selectors.
* querySelectorAll returns all matching elements as a NodeList, useful for batch operations.

---

If you want, I can next give you:
👉 DOM Manipulation methods (append, remove, replace)
👉 Event Delegation (very important MERN interview topic)
👉 Real DOM vs Virtual DOM (React interview favorite)

Below are **interview-ready, detailed answers** with theory + examples + practical usage. You can explain each for **2–5 minutes confidently** in interviews.

---

# **195. What is getElementById()?**

`getElementById()` is a DOM method used to select an HTML element based on its **unique ID attribute**.

It is one of the most commonly used methods in JavaScript for accessing DOM elements.

---

## 🔹 Syntax

```javascript
document.getElementById("idName");
```

It takes the ID name as a string and returns the matching element.

---

## 🔹 Example

HTML:

```html
<h1 id="title">Hello World</h1>
```

JavaScript:

```javascript
let element = document.getElementById("title");
console.log(element);
```

Output:

```javascript
<h1 id="title">Hello World</h1>
```

---

## 🔹 How it Works

When browser loads HTML, every element becomes part of the DOM tree.

Example:

```html
<div id="box"></div>
```

JavaScript can directly access it:

```javascript
let box = document.getElementById("box");
```

Now `box` stores reference to that DOM element.

---

## 🔹 Manipulating Selected Element

Once selected, we can:

* Change text
* Change style
* Add events
* Modify attributes

Example:

```javascript
let title = document.getElementById("title");

title.innerText = "Welcome";
title.style.color = "blue";
```

---

## 🔹 Important Points

### 1. ID should be unique

Correct:

```html
<div id="header"></div>
```

Wrong:

```html
<div id="header"></div>
<div id="header"></div>
```

IDs should be unique in a page.

---

### 2. Returns single element

Since IDs are unique, it returns only one element.

---

### 3. Returns null if not found

```javascript
let x = document.getElementById("unknown");
console.log(x); // null
```

---

## 🔹 Real-World Example

Suppose login page:

```html
<input id="username">
<button id="loginBtn">Login</button>
```

JavaScript:

```javascript
document.getElementById("loginBtn").addEventListener("click", function() {
    let user = document.getElementById("username").value;
    console.log(user);
});
```

This fetches username when button is clicked.

---

## 🔹 Performance

`getElementById()` is very fast because browsers optimize ID lookup.

---

## 🔹 Interview Answer Summary

You can say:

> getElementById() is a DOM method used to select an HTML element using its unique ID. It returns the matching element object, which can then be used to manipulate content, styles, attributes, or events. It is fast and widely used for direct element selection.

---

# **196. What is Event Bubbling?**

Event bubbling is an event propagation mechanism in JavaScript where an event starts from the **target element** and bubbles upward through its parent elements.

In simple words:
Event travels from **child → parent → grandparent → document**.

---

## 🔹 Example

HTML:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

JavaScript:

```javascript
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Button clicked");
});
```

---

### If user clicks button:

Output:

```javascript
Button clicked
Parent clicked
```

Why?

Because event first happens on button, then bubbles upward to parent.

---

## 🔹 Event Flow

When click happens:

1. Button receives event
2. Parent receives event
3. Body receives event
4. Document receives event

Flow:

```text
Target → Parent → Ancestors
```

---

## 🔹 Why Event Bubbling Matters

Many JavaScript features rely on bubbling:

* Event delegation
* Parent-child interaction
* Efficient event handling

---

## 🔹 Stopping Bubbling

Use:

```javascript
event.stopPropagation();
```

Example:

```javascript
document.getElementById("child").addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Button clicked");
});
```

Now parent event won’t execute.

---

## 🔹 Real-World Example

Imagine:

* Card component clickable
* Inside card there’s delete button

Without stopping bubbling:

* Clicking delete button may also trigger card click

So we use:

```javascript
event.stopPropagation();
```

---

## 🔹 Interview Answer Summary

You can say:

> Event bubbling is the default event propagation behavior in JavaScript where an event starts from the target element and moves upward to parent elements. For example, clicking a button inside a div triggers the button’s event first, then the div’s event. This mechanism is important for event delegation and efficient event handling.

---

# **197. What is Event Capturing?**

Event capturing is the opposite of event bubbling.

In capturing, event travels from **top to bottom**.

Flow:

```text
Document → Parent → Child
```

---

## 🔹 Event Propagation Phases

There are 3 phases:

1. Capturing Phase
2. Target Phase
3. Bubbling Phase

---

## 🔹 Example

HTML:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

JavaScript:

```javascript
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
}, true);
```

Notice:

```javascript
true
```

This enables capturing mode.

---

### Clicking button gives:

```javascript
Parent clicked
Child clicked
```

Because event travels downward.

---

## 🔹 Bubbling vs Capturing

### Bubbling

```text
Child → Parent
```

### Capturing

```text
Parent → Child
```

---

## 🔹 Syntax

```javascript
element.addEventListener("click", handler, true);
```

or

```javascript
element.addEventListener("click", handler, { capture: true });
```

---

## 🔹 Real-World Use

Capturing is less commonly used, but useful when:

* Parent must intercept event first
* Security checks
* Global event tracking

Example:
Analytics system tracking clicks before child logic runs.

---

## 🔹 Interview Answer Summary

You can say:

> Event capturing is an event propagation mechanism where the event moves from parent elements down to the target element. It is opposite of bubbling. Capturing can be enabled using addEventListener with capture set to true. Though less common than bubbling, it is useful when parent-level control is needed before child execution.

---

# **198. What is Event Delegation?**

Event delegation is a technique where instead of attaching event listeners to multiple child elements, we attach a single event listener to their parent element.

It works because of **event bubbling**.

This is one of the most important JavaScript interview topics.

---

## 🔹 Problem Without Delegation

Example:

```html
<button>Button 1</button>
<button>Button 2</button>
<button>Button 3</button>
```

Without delegation:

```javascript
button1.addEventListener("click", handler);
button2.addEventListener("click", handler);
button3.addEventListener("click", handler);
```

Problem:

* More code
* More memory usage
* Hard to manage dynamic elements

---

## 🔹 Solution: Event Delegation

HTML:

```html
<div id="container">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
</div>
```

JavaScript:

```javascript
document.getElementById("container").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.innerText);
    }
});
```

---

## 🔹 How it Works

1. Button clicked
2. Event occurs on button
3. Event bubbles to parent container
4. Parent handles event

---

## 🔹 Why Use Event Delegation?

### 1. Better Performance

Fewer event listeners.

### 2. Less Memory Usage

One parent listener instead of many child listeners.

### 3. Handles Dynamic Elements

Works for newly added elements too.

---

## 🔹 Real-World Example

Suppose Todo App:

* Many delete buttons
* New todos added dynamically

Instead of attaching listeners to every delete button:
Attach one listener to todo list container.

Example:

```javascript
todoList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});
```

Very efficient.

---

## 🔹 Interview Answer Summary

You can say:

> Event delegation is a JavaScript technique where a single event listener is attached to a parent element instead of multiple child elements. It works using event bubbling. This improves performance, reduces memory usage, and makes handling dynamic elements easier. It is widely used in real-world applications like lists, tables, and dynamic UI components.

---

# 🔥 Final Quick Revision

* **getElementById()** → Select element by unique ID
* **Event Bubbling** → Event moves child → parent
* **Event Capturing** → Event moves parent → child
* **Event Delegation** → Parent handles child events using bubbling

These are extremely important for **JavaScript + React + MERN interviews**.
Especially **event delegation**, interviewers ask this very frequently.


Below are **interview-ready, detailed answers** with theory + examples + practical use cases. These are written so you can confidently explain each topic in **2–5 minutes**.

---

# **199. What is preventDefault()?**

`preventDefault()` is a JavaScript event method used to stop the browser’s default behavior for a particular event.

In simple words:
It tells the browser:

> “Do not perform the default action associated with this event.”

---

## 🔹 Syntax

```javascript
event.preventDefault();
```

---

## 🔹 Why Do We Need It?

Many HTML elements have default behaviors.

Examples:

* `<a>` → navigates to another page
* `<form>` → submits and reloads page
* Right click → opens context menu
* Checkbox → toggles checked state

Sometimes we want to stop these default actions.

That’s where `preventDefault()` is used.

---

## 🔹 Example 1: Prevent Link Navigation

HTML:

```html
<a href="https://google.com" id="link">Google</a>
```

JavaScript:

```javascript
document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Navigation stopped");
});
```

---

### What Happens?

Normally clicking the link opens Google.

After using:

```javascript
event.preventDefault();
```

The browser does not navigate.

---

## 🔹 Example 2: Prevent Form Submission

HTML:

```html
<form id="myForm">
   <input type="text">
   <button type="submit">Submit</button>
</form>
```

JavaScript:

```javascript
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submission prevented");
});
```

---

### Why Important?

By default, form submission reloads the page.

In modern apps (React/MERN), we often prevent this and submit data using AJAX or API calls.

Example:

```javascript
fetch("/api/login", {
   method: "POST"
});
```

No page reload needed.

---

## 🔹 Real-World Example

Login forms in MERN applications:

* User enters email/password
* Form submit happens
* JS prevents page reload
* Data sent via API

Example:

```javascript
event.preventDefault();
```

Then:

```javascript
axios.post("/login", formData);
```

---

## 🔹 Important Point

`preventDefault()` only stops default browser action.

It does **NOT stop event propagation**.

That means bubbling still happens unless you also use:

```javascript
event.stopPropagation();
```

---

## 🔹 Interview Answer Summary

You can say:

> preventDefault() is an event method in JavaScript used to stop the browser’s default behavior for an event. For example, preventing form submission or stopping a link from navigating. It is widely used in modern applications where actions are handled dynamically using JavaScript instead of default browser behavior.

---

# **200. What is stopPropagation()?**

`stopPropagation()` is a JavaScript event method used to stop event propagation in the DOM tree.

In simple words:
It prevents the event from moving to parent or child elements.

---

## 🔹 Syntax

```javascript
event.stopPropagation();
```

---

## 🔹 Why Do We Need It?

Events usually propagate through DOM in two phases:

1. Capturing
2. Bubbling

Sometimes we want an event to stay only on the current element.

That’s where `stopPropagation()` is useful.

---

## 🔹 Example

HTML:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

JavaScript:

```javascript
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Button clicked");
});
```

---

### Clicking button gives:

```javascript
Button clicked
```

Parent event won’t execute.

Without stopPropagation:

```javascript
Button clicked
Parent clicked
```

---

## 🔹 Real-World Example

Imagine:

* Product card is clickable
* Inside card there is delete button

Clicking delete button should only delete product.

It should not trigger card click event.

Example:

```javascript
deleteBtn.addEventListener("click", function(event) {
    event.stopPropagation();
});
```

---

## 🔹 preventDefault vs stopPropagation

| Feature                      | preventDefault | stopPropagation |
| ---------------------------- | -------------- | --------------- |
| Stops browser default action | Yes            | No              |
| Stops bubbling/capturing     | No             | Yes             |

Example:

* preventDefault → Stops form submission
* stopPropagation → Stops parent click event

---

## 🔹 Interview Answer Summary

You can say:

> stopPropagation() is a JavaScript event method used to stop an event from propagating through the DOM tree. It prevents the event from reaching parent or child elements during capturing or bubbling. It is useful when we want only a specific element to handle an event.

---

# **201. What is localStorage?**

`localStorage` is a Web Storage API that allows browsers to store data as key-value pairs locally in the user’s browser.

This data persists even after:

* Page refresh
* Browser restart
* System restart

It remains until explicitly deleted.

---

## 🔹 Syntax

Store data:

```javascript
localStorage.setItem("key", "value");
```

Get data:

```javascript
localStorage.getItem("key");
```

Remove data:

```javascript
localStorage.removeItem("key");
```

Clear all:

```javascript
localStorage.clear();
```

---

## 🔹 Example

Store username:

```javascript
localStorage.setItem("username", "Rishi");
```

Retrieve:

```javascript
console.log(localStorage.getItem("username"));
```

Output:

```javascript
Rishi
```

---

## 🔹 How It Stores Data

Everything is stored as strings.

Example:

```javascript
localStorage.setItem("age", 22);
```

Stored as:

```javascript
"22"
```

---

## 🔹 Storing Objects

Use JSON.

```javascript
let user = {
    name: "Rishi",
    age: 22
};

localStorage.setItem("user", JSON.stringify(user));
```

Retrieve:

```javascript
let data = JSON.parse(localStorage.getItem("user"));
console.log(data.name);
```

---

## 🔹 Real-World Use Cases

Common uses:

* Theme preference (dark/light mode)
* Cart items in e-commerce
* Remember user settings
* Save draft data

Example:
User chooses dark mode.

Store:

```javascript
localStorage.setItem("theme", "dark");
```

Next visit:
Website remembers theme.

---

## 🔹 Advantages

✔ Persistent storage
✔ Easy to use
✔ No server required

---

## 🔹 Limitations

* Only stores strings
* Limited storage (~5MB)
* Not secure for sensitive data

Never store:

* Passwords
* JWT secrets
* Sensitive user data

---

## 🔹 Interview Answer Summary

You can say:

> localStorage is a browser storage mechanism that stores data as key-value pairs. The data persists even after refreshing or closing the browser. It is commonly used for storing user preferences, themes, cart data, and non-sensitive information.

---

# **202. What is sessionStorage?**

`sessionStorage` is similar to localStorage, but data exists only for the current browser session.

When browser tab or window is closed, data is removed.

---

## 🔹 Syntax

Store:

```javascript
sessionStorage.setItem("key", "value");
```

Get:

```javascript
sessionStorage.getItem("key");
```

Remove:

```javascript
sessionStorage.removeItem("key");
```

Clear:

```javascript
sessionStorage.clear();
```

---

## 🔹 Example

```javascript
sessionStorage.setItem("username", "Rishi");
```

Retrieve:

```javascript
console.log(sessionStorage.getItem("username"));
```

---

## 🔹 Main Difference from localStorage

* localStorage → Permanent until deleted
* sessionStorage → Removed after session ends

---

## 🔹 Real-World Example

Suppose user fills multi-step form.

Step 1:

```javascript
sessionStorage.setItem("email", "abc@gmail.com");
```

If page refreshes:
Data remains.

If browser closes:
Data disappears.

Perfect for temporary data.

---

## 🔹 Common Uses

* Temporary form data
* OTP verification flow
* Multi-step forms
* Session-based tracking

---

## 🔹 localStorage vs sessionStorage

| Feature  | localStorage          | sessionStorage |
| -------- | --------------------- | -------------- |
| Expiry   | Never (until deleted) | Tab close      |
| Capacity | ~5MB                  | ~5MB           |
| Scope    | All tabs              | Single tab     |

---

## 🔹 Interview Answer Summary

You can say:

> sessionStorage is a browser storage API similar to localStorage, but the stored data exists only for the current browser session. The data remains available during page refresh but gets cleared when the browser tab or window is closed. It is useful for temporary data storage.

---

# 🔥 Final Quick Revision

* **preventDefault()** → Stops browser default behavior
* **stopPropagation()** → Stops event propagation
* **localStorage** → Persistent browser storage
* **sessionStorage** → Temporary storage for current session

These are very important in **JavaScript + React + MERN interviews**, especially storage-related questions.


Below are **interview-ready, detailed answers** with theory + examples + practical usage. These are designed so you can explain confidently for **2–5 minutes** in MERN/JavaScript interviews.

---

# **203. What are Cookies?**

Cookies are small pieces of data stored in the browser as **key-value pairs**. They are mainly used to store information about the user and maintain state between client and server.

In simple words:

> Cookies help websites remember user-related information.

---

## 🔹 Why Cookies Were Introduced?

HTTP is **stateless**, meaning each request is independent.

Example:

* User logs into website
* Browser sends request to server
* Next request has no memory of previous request

Problem:
How does server know user is logged in?

Solution:
Cookies.

---

## 🔹 How Cookies Work

1. User logs in
2. Server sends cookie to browser
3. Browser stores cookie
4. Browser sends cookie with future requests

Example:

```text
Set-Cookie: sessionId=abc123
```

Later requests:

```text
Cookie: sessionId=abc123
```

Now server recognizes user.

---

## 🔹 Creating Cookies in JavaScript

```javascript id="a1"
document.cookie = "username=Rishi";
```

Read cookies:

```javascript id="a2"
console.log(document.cookie);
```

Output:

```javascript id="a3"
username=Rishi
```

---

## 🔹 Cookie Properties

Cookies can have extra properties.

Example:

```javascript id="a4"
document.cookie = "username=Rishi; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/";
```

Common properties:

* expires
* max-age
* secure
* path
* domain
* HttpOnly

---

## 🔹 Types of Cookies

### 1. Session Cookies

Temporary cookies. Deleted when browser closes.

### 2. Persistent Cookies

Remain until expiry date.

### 3. Secure Cookies

Sent only over HTTPS.

### 4. HttpOnly Cookies

Cannot be accessed by JavaScript.

---

## 🔹 Real-World Use Cases

Cookies are used for:

* Authentication
* Session management
* Remember me functionality
* User preferences
* Tracking/analytics

Example:
E-commerce website remembers cart items.

---

## 🔹 Cookies vs localStorage

| Feature        | Cookies    | localStorage  |
| -------------- | ---------- | ------------- |
| Size           | ~4KB       | ~5MB          |
| Sent to server | Yes        | No            |
| Expiry         | Can expire | Until deleted |
| Storage        | Small      | Large         |

---

## 🔹 Security Concern

Sensitive cookies should use:

* HttpOnly
* Secure

Because cookies are vulnerable to:

* XSS
* CSRF

---

## 🔹 Interview Answer Summary

You can say:

> Cookies are small pieces of data stored in the browser as key-value pairs. They help maintain state between client and server, especially for authentication and session management. Cookies are automatically sent with HTTP requests and are widely used in login systems, tracking, and user preferences.

---

# **204. What is BOM (Browser Object Model)?**

BOM stands for **Browser Object Model**.

It provides JavaScript with access to browser-related objects and functionalities outside the webpage content.

In simple words:

> BOM allows JavaScript to interact with the browser itself.

---

## 🔹 Difference Between DOM and BOM

* DOM → Represents webpage content
* BOM → Represents browser environment

Example:

* DOM manipulates HTML elements
* BOM interacts with browser window, history, location, etc.

---

## 🔹 Main BOM Objects

Important BOM objects:

* window
* navigator
* screen
* location
* history

---

## 🔹 Examples

### Window Size

```javascript id="b1"
console.log(window.innerWidth);
```

---

### Browser Information

```javascript id="b2"
console.log(navigator.userAgent);
```

---

### Screen Info

```javascript id="b3"
console.log(screen.width);
```

---

### URL Information

```javascript id="b4"
console.log(location.href);
```

---

### Browser History

```javascript id="b5"
history.back();
```

---

## 🔹 Real-World Use Cases

BOM is used for:

* Redirecting pages
* Detecting browser type
* Opening popup windows
* Navigation control
* Accessing device screen size

Example:
Redirect after login:

```javascript id="b6"
window.location.href = "/dashboard";
```

---

## 🔹 Interview Answer Summary

You can say:

> BOM stands for Browser Object Model. It allows JavaScript to interact with browser-related functionalities such as window, location, history, navigator, and screen. Unlike DOM, which deals with webpage content, BOM focuses on browser environment interactions.

---

# **205. What is Window Object?**

The `window` object is the top-level object in the browser.

It represents the browser window or tab.

In JavaScript running inside browser:

> Everything exists under the window object.

---

## 🔹 Important Point

Global variables and functions automatically become part of `window`.

Example:

```javascript id="c1"
var name = "Rishi";
console.log(window.name);
```

Output:

```javascript id="c2"
Rishi
```

---

## 🔹 Example

```javascript id="c3"
console.log(window);
```

This prints the complete browser window object.

---

## 🔹 Common Methods of Window Object

### Alert

```javascript id="c4"
window.alert("Hello");
```

Usually written as:

```javascript id="c5"
alert("Hello");
```

Because `window` is implicit.

---

### setTimeout

```javascript id="c6"
window.setTimeout(() => {
   console.log("Executed");
}, 2000);
```

---

### open

```javascript id="c7"
window.open("https://google.com");
```

---

## 🔹 Common Properties

* window.innerHeight
* window.innerWidth
* window.location
* window.document

Example:

```javascript id="c8"
console.log(window.innerWidth);
```

---

## 🔹 Relationship with DOM

Important:

```text
Window contains document
```

Structure:

```text
window
 └── document
```

So:

```javascript id="c9"
window.document
```

represents webpage document.

---

## 🔹 Real-World Example

Popup:

```javascript id="c10"
window.open("payment.html", "_blank");
```

Redirect:

```javascript id="c11"
window.location.href = "/home";
```

---

## 🔹 Interview Answer Summary

You can say:

> The window object is the global object in the browser representing the browser window or tab. It contains all browser-related methods, properties, and objects such as document, location, history, and screen. In browser JavaScript, it acts as the root object.

---

# **206. What is Document Object?**

The `document` object represents the loaded webpage.

It is the entry point to the DOM.

In simple words:

> document allows JavaScript to access and manipulate webpage content.

---

## 🔹 Relationship

Structure:

```text
window
 └── document
```

So document is part of window object.

```javascript id="d1"
window.document
```

---

## 🔹 What Can We Do with Document?

Using document object we can:

* Select elements
* Change content
* Modify styles
* Add/remove elements
* Attach event listeners

---

## 🔹 Example

HTML:

```html id="d2"
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript id="d3"
document.getElementById("title").innerText = "Welcome";
```

Output:

```html id="d4"
<h1>Welcome</h1>
```

---

## 🔹 Common Methods

### Select by ID

```javascript id="d5"
document.getElementById("id");
```

### Select by Class

```javascript id="d6"
document.getElementsByClassName("box");
```

### querySelector

```javascript id="d7"
document.querySelector(".box");
```

### Create Element

```javascript id="d8"
document.createElement("div");
```

---

## 🔹 Common Properties

### Title

```javascript id="d9"
console.log(document.title);
```

### URL

```javascript id="d10"
console.log(document.URL);
```

### Body

```javascript id="d11"
console.log(document.body);
```

---

## 🔹 Real-World Example

In a Todo App:

* Select input
* Read value
* Create task
* Append to list

All of this happens using document object.

---

## 🔹 Interview Answer Summary

You can say:

> The document object represents the loaded HTML webpage and acts as the entry point to the DOM. It provides methods and properties to access, modify, create, and delete HTML elements dynamically. It is one of the most important objects in JavaScript for frontend development.

---

# 🔥 Final Quick Revision

* **Cookies** → Small browser storage sent to server
* **BOM** → Browser Object Model (browser interaction)
* **Window Object** → Top-level browser object
* **Document Object** → Represents webpage / DOM entry point

Very important for **JavaScript, Browser APIs, and MERN interviews**.


Below are **interview-ready, in-depth answers** with theory + examples + real-world usage. You can confidently explain each for **2–5 minutes** in MERN/JavaScript interviews.

---

# **207. What is Navigator Object?**

The `navigator` object is part of the **Browser Object Model (BOM)** and provides information about the browser and the user’s system.

In simple words:

> The navigator object tells us details about the browser, operating system, device, and capabilities.

---

## 🔹 Where It Exists?

It is available under the `window` object.

```javascript
window.navigator
```

Usually written as:

```javascript
navigator
```

---

## 🔹 Why Is It Useful?

Using navigator, JavaScript can detect:

* Browser name
* Browser version
* Operating system
* Internet status
* Language
* Device capabilities

---

## 🔹 Common Properties

### 1. userAgent

Returns browser and OS information.

```javascript
console.log(navigator.userAgent);
```

Example output:

```text
Mozilla/5.0 (Windows NT 10.0; Win64; x64)
```

---

### 2. language

Returns browser language.

```javascript
console.log(navigator.language);
```

Example:

```text
en-US
```

---

### 3. onLine

Checks internet connectivity.

```javascript
console.log(navigator.onLine);
```

Output:

```javascript
true
```

or

```javascript
false
```

---

### 4. geolocation

Provides location-related APIs.

```javascript
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
});
```

---

## 🔹 Real-World Use Cases

### Browser Detection

Some websites customize behavior based on browser.

Example:

* Safari specific fixes
* Mobile browser optimization

---

### Internet Status Detection

Example:

```javascript
if (!navigator.onLine) {
    alert("No Internet Connection");
}
```

Useful in offline-first apps.

---

### Location-Based Services

Used in:

* Food delivery apps
* Ride booking apps
* Maps

Example:
Uber needs geolocation.

---

## 🔹 Interview Answer Summary

You can say:

> The navigator object is part of the Browser Object Model and provides information about the browser and user environment, such as browser details, language, online status, and geolocation. It is commonly used for browser detection, connectivity checks, and location-based features.

---

# **208. What is Location Object?**

The `location` object is part of the BOM and contains information about the current webpage URL.

In simple words:

> location object allows JavaScript to read or change the current URL.

---

## 🔹 Where It Exists?

```javascript
window.location
```

Usually:

```javascript
location
```

---

## 🔹 Example URL

Suppose current URL is:

```text
https://example.com/products?id=100
```

---

## 🔹 Common Properties

### href

Full URL.

```javascript
console.log(location.href);
```

Output:

```text
https://example.com/products?id=100
```

---

### hostname

Domain name.

```javascript
console.log(location.hostname);
```

Output:

```text
example.com
```

---

### pathname

Path after domain.

```javascript
console.log(location.pathname);
```

Output:

```text
/products
```

---

### protocol

```javascript
console.log(location.protocol);
```

Output:

```text
https:
```

---

## 🔹 Common Methods

### Reload Page

```javascript
location.reload();
```

---

### Redirect to New Page

```javascript
location.assign("https://google.com");
```

---

### Replace Current URL

```javascript
location.replace("https://google.com");
```

Difference:

* assign → keeps history
* replace → removes current page from history

---

## 🔹 Real-World Use Cases

### Redirect After Login

```javascript
window.location.href = "/dashboard";
```

---

### Refresh Page After Action

```javascript
location.reload();
```

---

### Read Query Parameters

Example:

```text
/product?id=10
```

Useful for:

* Product pages
* Search filters
* Pagination

---

## 🔹 Interview Answer Summary

You can say:

> The location object is part of the Browser Object Model and contains information about the current webpage URL. It provides properties like href, hostname, pathname, and methods like reload, assign, and replace. It is commonly used for redirection and URL management.

---

# **209. What is History API?**

The History API allows JavaScript to interact with the browser’s session history.

In simple words:

> It lets JavaScript control browser navigation without full page reload.

This is extremely important in **Single Page Applications (SPA)** like React apps.

---

## 🔹 Why Needed?

Normally browser history works with:

* Back button
* Forward button

JavaScript can control this behavior using History API.

---

## 🔹 Where It Exists?

```javascript
window.history
```

or simply:

```javascript
history
```

---

## 🔹 Common Methods

### Back

```javascript
history.back();
```

Equivalent to browser back button.

---

### Forward

```javascript
history.forward();
```

Equivalent to forward button.

---

### Go

```javascript
history.go(-2);
```

Moves backward 2 pages.

---

## 🔹 Modern History API Methods

### pushState()

Adds new history entry without page reload.

```javascript
history.pushState({}, "", "/dashboard");
```

URL changes to:

```text
/dashboard
```

No page refresh.

---

### replaceState()

Replaces current history entry.

```javascript
history.replaceState({}, "", "/profile");
```

---

## 🔹 Real-World Example

React Router uses History API.

Example:
User clicks:

```text
/home → /products → /cart
```

Page changes instantly without reloading.

This happens using:

* pushState
* replaceState

---

## 🔹 Why Important in MERN?

In MERN apps:

* Frontend is React
* Backend is Node/Express

React often uses History API to switch routes without refreshing page.

Example:

* Login → Dashboard
* Product → Cart
* Cart → Checkout

Smooth navigation.

---

## 🔹 Interview Answer Summary

You can say:

> The History API allows JavaScript to manipulate browser session history. It provides methods like back, forward, go, pushState, and replaceState. It is essential for Single Page Applications because it enables URL changes and navigation without full page reloads.

---

# **210. What are Web APIs?**

Web APIs are browser-provided APIs that allow JavaScript to interact with browser features and external functionalities.

In simple words:

> Web APIs extend JavaScript by giving access to browser capabilities.

Important:
Web APIs are **not part of core JavaScript**.

They are provided by browsers.

---

## 🔹 Why Important?

JavaScript alone cannot do things like:

* Fetch data from server
* Access camera
* Use geolocation
* Set timers

Web APIs provide these capabilities.

---

## 🔹 Common Web APIs

---

### 1. Fetch API

Used for API calls.

```javascript
fetch("/api/users")
    .then(res => res.json())
    .then(data => console.log(data));
```

Used heavily in MERN.

---

### 2. Geolocation API

Get user location.

```javascript
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
});
```

---

### 3. Timer APIs

Examples:

* setTimeout
* setInterval

```javascript
setTimeout(() => {
   console.log("Hello");
}, 2000);
```

---

### 4. Local Storage API

```javascript
localStorage.setItem("theme", "dark");
```

---

### 5. DOM API

```javascript
document.getElementById("title");
```

---

### 6. Notification API

Show browser notifications.

---

### 7. Clipboard API

Copy text programmatically.

```javascript
navigator.clipboard.writeText("Hello");
```

---

## 🔹 How Web APIs Work with Event Loop

Important interview point.

Example:

```javascript
setTimeout(() => {
   console.log("Hello");
}, 2000);
```

Process:

1. JS engine executes code
2. Timer handled by Web API
3. After timer ends → callback goes to callback queue
4. Event loop sends callback to call stack

This is how async JS works.

---

## 🔹 Real-World Example in MERN

When frontend calls backend:

```javascript
fetch("/api/products")
```

This uses Fetch API (Web API).

Then React updates UI.

---

## 🔹 Interview Answer Summary

You can say:

> Web APIs are browser-provided interfaces that allow JavaScript to interact with browser features and external functionalities. Examples include Fetch API, DOM API, Geolocation API, Timer APIs, and Storage APIs. They are essential for asynchronous programming and modern web development.

---

# 🔥 Final Quick Revision

* **Navigator Object** → Browser & device information
* **Location Object** → URL information and redirection
* **History API** → Browser navigation control
* **Web APIs** → Browser-provided APIs for extra functionality

These are highly important for **JavaScript browser internals + MERN interviews**.


# 🚀 11. ES6+ Features (211–240)