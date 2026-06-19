# 🚀 JavaScript Interview Questions (Top 220+ Most Asked)
---

## ⏳ 7. Execution Context & Hoisting (136–150)

136. What is Execution Context?
137. What are the phases of Execution Context?
138. What is the Global Execution Context?
139. What is Function Execution Context?
140. What is the Call Stack?
141. What is Hoisting?
142. How does hoisting work with var?
143. How does hoisting work with let and const?
144. What is the Temporal Dead Zone?
145. What is Lexical Environment?
146. What is Scope Chain?
147. What is the creation phase?
148. What is the execution phase?
149. What is memory creation in JavaScript?
150. How does JavaScript execute code internally?

---

## 🔥 8. This, Call, Apply & Bind (151–165)

151. What is the this keyword?
152. How does this work in global scope?
153. How does this work in objects?
154. How does this work in arrow functions?
155. What is explicit binding?
156. What is implicit binding?
157. What is call()?
158. What is apply()?
159. What is bind()?
160. What is the difference between call, apply, and bind?
161. What is hard binding?
162. What is soft binding?
163. What is function borrowing?
164. What is event binding?
165. What are common this-related interview questions?

---

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

# ⏳ 7. Execution Context & Hoisting (136–150)

## 136. What is Execution Context?

**Execution Context** in JavaScript is the environment in which JavaScript code is executed.
It contains all the information needed to run code, such as:

* Variables
* Functions
* Scope
* `this` value
* Memory allocation
* Code execution order

Simple words mein:

> Execution Context = JavaScript engine ka working environment, jahan code run hota hai.

Jab JavaScript code execute hota hai, engine directly line by line execute nahi karta.
Pehle woh execution context create karta hai.

Interview mein aap bol sakte ho:

> “Execution Context is an internal environment created by JavaScript engine to execute code. It decides how variables, functions, and objects are stored in memory and how code is executed.”

---

### Example

```javascript
var a = 10;

function greet() {
    var message = "Hello";
    console.log(message);
}

greet();
```

Jab ye code run hota hai:

JavaScript engine 2 execution contexts create karega:

1. Global Execution Context
2. Function Execution Context (`greet`)

---

### Execution Context stores mainly 2 things

### 1. Memory Component (Variable Environment)

Yahan variables aur functions memory mein store hote hain.

Example:

```javascript
var a = 10;

function test() {}
```

Memory:

```javascript
a → undefined
test → function definition
```

---

### 2. Code Component (Thread of Execution)

Yahan code line by line execute hota hai.

Example:

```javascript
a = 10;
test();
```

---

### Real-world analogy

Execution Context ko office desk samjho.

Desk par:

* Files = Variables
* Instructions = Functions
* Employee = JavaScript Engine

Employee kaam start karne se pehle desk organize karta hai (memory allocation),
fir actual kaam karta hai (execution).

---

## Important Point

JavaScript is **single-threaded**.

Matlab:

* Ek hi call stack hota hai
* Ek time par ek hi execution context execute hota hai

---

---

# 137. What are the phases of Execution Context?

Execution Context 2 phases mein kaam karta hai:

1. Memory Creation Phase (Creation Phase)
2. Execution Phase

Ye interview ka bahut important concept hai.

---

# Phase 1: Memory Creation Phase

Is phase mein JavaScript engine:

* Variables ke liye memory allocate karta hai
* Functions ko memory mein store karta hai

Variables initially:

```javascript
undefined
```

Functions:

* Pure function definition ke saath memory mein store ho jaate hain

---

### Example

```javascript
var x = 5;

function square(n) {
    return n * n;
}
```

Memory Creation Phase:

```javascript
x → undefined
square → function code
```

Notice:
`x = 5` abhi assign nahi hua.

Sirf memory allocate hui hai.

---

# Phase 2: Execution Phase

Ab code line by line execute hoga.

Example:

```javascript
var x = 5;
```

Now:

```javascript
x → 5
```

Agar function call hua:

```javascript
square(4);
```

To new Function Execution Context create hoga.

---

### Full Example

```javascript
var x = 2;
var y = 4;

function add(a, b) {
    return a + b;
}

var result = add(x, y);
console.log(result);
```

---

### Memory Creation Phase

```javascript
x → undefined
y → undefined
add → function definition
result → undefined
```

---

### Execution Phase

Line 1:

```javascript
x = 2
```

Line 2:

```javascript
y = 4
```

Line 3:
Function already stored.

Line 4:

```javascript
result = add(2,4)
```

New function execution context created.

Return value:

```javascript
6
```

Final memory:

```javascript
x → 2
y → 4
result → 6
```

---

### Interview Definition

> Execution Context works in two phases: Creation Phase and Execution Phase. In creation phase memory is allocated for variables and functions. In execution phase code runs line by line and values are assigned.

---

---

# 138. What is the Global Execution Context?

Global Execution Context (GEC) is the default execution context created when JavaScript program starts.

Jab JavaScript file run hoti hai:

Sabse pehle GEC create hota hai.

Only one Global Execution Context exists for a program.

---

### GEC contains

* Global object
* `this`
* Variables
* Functions

Browser mein global object:

```javascript
window
```

Node.js mein:

```javascript
global
```

---

### Browser Example

```javascript
var x = 10;

console.log(this);
```

Browser output:

```javascript
window
```

Because global context mein:

```javascript
this === window
```

---

### Example

```javascript
var name = "Rishi";

function sayHi() {
    console.log("Hi");
}

console.log(name);
sayHi();
```

Execution starts in Global Execution Context.

Memory creation:

```javascript
name → undefined
sayHi → function definition
```

Execution:

```javascript
name = "Rishi"
console.log(name)
sayHi()
```

When `sayHi()` executes:
Function Execution Context create hoga.

---

### Important Features of GEC

### 1. Created first

Sabse pehle GEC create hota hai.

### 2. Exists until program ends

Program complete hone tak GEC stack mein rehta hai.

### 3. Contains global variables/functions

Global declarations yahan store hote hain.

---

### Call Stack Example

Initially:

```javascript
| Global Execution Context |
```

After function call:

```javascript
| sayHi() Function Context |
| Global Execution Context |
```

After function completes:

```javascript
| Global Execution Context |
```

---

### Interview Definition

> Global Execution Context is the default execution context created when JavaScript starts running. It contains global variables, functions, global object, and the value of `this`.

---

---

# 139. What is Function Execution Context?

Whenever a function is invoked, JavaScript creates a new execution context for that function.

This is called **Function Execution Context (FEC).**

Har function call ke liye new context create hota hai.

---

### Example

```javascript
function greet(name) {
    var message = "Hello " + name;
    console.log(message);
}

greet("Rishi");
```

When:

```javascript
greet("Rishi")
```

runs, JavaScript creates Function Execution Context.

---

### Function Context contains

* Function arguments
* Local variables
* Inner functions
* `this`

---

### Phases of Function Execution Context

Exactly same as global:

1. Memory Creation
2. Execution

---

### Step-by-step

```javascript
function multiply(a, b) {
    var result = a * b;
    return result;
}

multiply(3, 4);
```

---

### Memory Creation Phase

Parameters + local variables memory allocate:

```javascript
a → 3
b → 4
result → undefined
```

---

### Execution Phase

```javascript
result = 12
return 12
```

Function completes.

Execution context removed from call stack.

---

### Call Stack Flow

```javascript
function one() {
    two();
}

function two() {
    console.log("Inside two");
}

one();
```

Execution order:

Start:

```javascript
| Global |
```

Call `one()`:

```javascript
| one() |
| Global |
```

Inside `one`, call `two()`:

```javascript
| two() |
| one() |
| Global |
```

After `two` finishes:

```javascript
| one() |
| Global |
```

After `one` finishes:

```javascript
| Global |
```

---

### Important Point

Every function call creates a **new execution context**.

Example:

```javascript
function test() {
   console.log("Hello");
}

test();
test();
test();
```

3 calls = 3 separate Function Execution Contexts.

---

### Interview Definition

> Function Execution Context is created whenever a function is invoked. It contains function arguments, local variables, inner functions, and `this`. Each function call gets its own separate execution context.

---

# Quick Revision Table

| Concept                    | Meaning                                   |
| -------------------------- | ----------------------------------------- |
| Execution Context          | Environment where JS code executes        |
| Creation Phase             | Memory allocation for variables/functions |
| Execution Phase            | Code executes line by line                |
| Global Execution Context   | Default context created first             |
| Function Execution Context | New context created on each function call |

---

### Short Interview Answer

Agar interviewer bole “Execution Context explain karo”

Aap bol sakte ho:

> JavaScript executes code inside Execution Context. It is an environment that manages variables, functions, scope, and execution flow. Every execution context has two phases: Memory Creation Phase and Execution Phase. JavaScript first creates Global Execution Context when program starts. Whenever a function is called, a new Function Execution Context is created and pushed into the call stack. Once function execution finishes, its context is removed from the stack.


# 140. What is the Call Stack?

**Call Stack** is a data structure used by JavaScript to keep track of function calls during program execution.

It follows **LIFO (Last In, First Out)** principle.

* Last function added → executes first
* Function complete → removed from stack

Simple words:

> Call Stack is the mechanism JavaScript uses to manage execution contexts.

Since JavaScript is **single-threaded**, it can execute only one task at a time.
Call Stack ensures which function should execute first and which should wait.

---

## Real-life Analogy

Plate stack imagine karo.

* Nayi plate top par rakhi jaati hai
* Top wali plate pehle niklegi

Same with Call Stack:

* New function call → top par push hota hai
* Function complete → pop ho jata hai

---

## Example 1

```javascript
function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();
```

Execution:

1. Global Execution Context enters stack
2. `first()` called → pushed
3. `first()` executed → removed
4. `second()` called → pushed
5. `second()` executed → removed

---

### Stack Flow

Start:

```javascript
| Global |
```

Call `first()`:

```javascript
| first() |
| Global  |
```

After execution:

```javascript
| Global |
```

Call `second()`:

```javascript
| second() |
| Global   |
```

After execution:

```javascript
| Global |
```

---

## Example 2 (Nested Functions)

```javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

---

### Step-by-Step Stack

Initially:

```javascript
| Global |
```

Call `one()`:

```javascript
| one()  |
| Global |
```

Inside `one()`, call `two()`:

```javascript
| two()  |
| one()  |
| Global |
```

Inside `two()`, call `three()`:

```javascript
| three() |
| two()   |
| one()   |
| Global  |
```

After `three()` completes:

```javascript
| two()  |
| one()  |
| Global |
```

After `two()`:

```javascript
| one()  |
| Global |
```

After `one()`:

```javascript
| Global |
```

---

## Stack Overflow

Agar stack limit exceed ho jaye → **Stack Overflow Error**

Example:

```javascript
function test() {
    test();
}

test();
```

Output:

```javascript
RangeError: Maximum call stack size exceeded
```

Because function continuously call ho rahi hai.

---

## Interview Definition

> Call Stack is a mechanism used by JavaScript engine to manage execution contexts and function calls. It follows LIFO order, where the most recently called function executes first.

---

---

# 141. What is Hoisting?

**Hoisting** is JavaScript’s default behavior of moving declarations to the top of their scope before execution.

Important word:

**Declarations are hoisted, not initializations.**

Simple words:

> Hoisting allows variables and functions to be used before they are declared in code.

JavaScript internally declaration ko top par le jata hai.

---

## Example

```javascript
console.log(x);
var x = 10;
```

Output:

```javascript
undefined
```

Not error.

Why?

Internally JS sees:

```javascript
var x;
console.log(x);
x = 10;
```

---

## Example with Function

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:

```javascript
Hello
```

Function declaration fully hoisted hoti hai.

---

## Why Hoisting Happens?

Because during **Execution Context Creation Phase**:

* Variables get memory
* Functions get memory

Hoisting isi creation phase ka result hai.

---

## Important Rule

Hoisting depends on declaration type:

* `var` → hoisted as undefined
* `let` → hoisted but in TDZ
* `const` → hoisted but in TDZ
* Function declarations → fully hoisted

---

## Interview Definition

> Hoisting is JavaScript behavior where variable and function declarations are moved to the top of their scope during the creation phase of execution context.

---

---

# 142. How does hoisting work with var?

Variables declared using `var` are hoisted and initialized with:

```javascript
undefined
```

This is why accessing before declaration gives `undefined`, not error.

---

## Example 1

```javascript
console.log(a);
var a = 50;
```

Output:

```javascript
undefined
```

---

Internally:

```javascript
var a;
console.log(a);
a = 50;
```

---

### Creation Phase

Memory:

```javascript
a → undefined
```

---

### Execution Phase

```javascript
console.log(a); // undefined
a = 50;
```

Final:

```javascript
a → 50
```

---

## Example 2

```javascript
console.log(name);

var name = "Rishi";

console.log(name);
```

Output:

```javascript
undefined
Rishi
```

---

## Function Scope with var

`var` is function scoped.

Example:

```javascript
function test() {
    console.log(a);
    var a = 10;
}

test();
```

Output:

```javascript
undefined
```

Internally:

```javascript
function test() {
    var a;
    console.log(a);
    a = 10;
}
```

---

## Important Characteristics of var Hoisting

### 1. Hoisted to top of scope

Yes

### 2. Initialized with undefined

Yes

### 3. Can access before declaration

Yes

### 4. Throws ReferenceError?

No

---

## Common Interview Confusion

```javascript
var x = 5;

function demo() {
    console.log(x);
    var x = 10;
}

demo();
```

Output?

```javascript
undefined
```

Not 5.

Because inside function:

```javascript
function demo() {
    var x;
    console.log(x);
    x = 10;
}
```

Local `x` shadows global `x`.

---

## Interview Definition

> Variables declared with var are hoisted to the top of their scope and initialized with undefined during memory creation phase.

---

---

# 143. How does hoisting work with let and const?

`let` and `const` are also hoisted.

This is where many people get confused.

Most people think:

> let and const are not hoisted

Wrong.

They ARE hoisted.

Difference is:

They are placed in **Temporal Dead Zone (TDZ)**.

---

# What is TDZ?

Temporal Dead Zone = Time between variable hoisting and initialization where variable cannot be accessed.

Simple words:

> Variable exists in memory but cannot be used yet.

---

## Example with let

```javascript
console.log(a);
let a = 10;
```

Output:

```javascript
ReferenceError
```

Why?

Because `a` is in TDZ.

---

Internally:

Creation Phase:

```javascript
a → uninitialized
```

Not:

```javascript
a → undefined
```

---

Execution:

```javascript
console.log(a); // Error
let a = 10;
```

After initialization:

```javascript
a → 10
```

---

## Example with const

```javascript
console.log(pi);
const pi = 3.14;
```

Output:

```javascript
ReferenceError
```

Same reason.

TDZ.

---

## Important Difference Between let and const

### let

Can declare first, assign later.

```javascript
let a;
a = 10;
```

Valid.

---

### const

Must initialize during declaration.

```javascript
const a = 10;
```

Valid.

```javascript
const a;
```

Invalid.

Output:

```javascript
SyntaxError
```

---

## Example of TDZ

```javascript
{
    console.log(x);
    let x = 5;
}
```

Error.

Because TDZ exists from block start till declaration line.

---

### Visual Representation

```javascript
{
   // TDZ starts
   // x exists but inaccessible

   let x = 5;

   // TDZ ends
}
```

---

## Comparison Table

| Feature                   | var       | let           | const         |
| ------------------------- | --------- | ------------- | ------------- |
| Hoisted                   | Yes       | Yes           | Yes           |
| Initial Value             | undefined | uninitialized | uninitialized |
| Access before declaration | Yes       | No            | No            |
| Scope                     | Function  | Block         | Block         |
| TDZ                       | No        | Yes           | Yes           |

---

## Deep Interview Point

Example:

```javascript
var a = 100;

{
    console.log(a);
    let a = 10;
}
```

Output?

```javascript
ReferenceError
```

Why not 100?

Because block scope creates separate `a`.

That local `a` shadows global `a`.

Before initialization local `a` is in TDZ.

So error.

---

## Interview Definition

> let and const are hoisted like var, but unlike var they are not initialized with undefined. Instead they remain in Temporal Dead Zone until declaration is reached. Accessing them before initialization throws ReferenceError.

---

# Quick Revision Table

| Concept            | Meaning                   |
| ------------------ | ------------------------- |
| Call Stack         | Tracks execution contexts |
| Hoisting           | Declarations moved to top |
| var Hoisting       | Hoisted with undefined    |
| let/const Hoisting | Hoisted but in TDZ        |

---

### Short Interview Answer

> JavaScript uses Call Stack to manage function execution. It follows LIFO order. Hoisting is JavaScript behavior where declarations are moved to the top during execution context creation. Variables declared with var are hoisted with undefined. Variables declared with let and const are also hoisted, but they remain in Temporal Dead Zone until initialization, so accessing them before declaration throws ReferenceError.


# 144. What is the Temporal Dead Zone (TDZ)?

**Temporal Dead Zone (TDZ)** is the time between entering a scope and the actual declaration/initialization of a `let` or `const` variable.

Simple words:

> TDZ is the period where a variable exists in memory but cannot be accessed.

This concept applies to:

* `let`
* `const`

Not to:

* `var`

---

## Why TDZ Exists?

TDZ was introduced in ES6 to avoid bugs caused by variable hoisting.

With `var`, variables are initialized with:

```javascript
undefined
```

This can cause unexpected behavior.

With `let` and `const`, JavaScript prevents access before initialization.

---

## Example 1

```javascript
console.log(a);
let a = 10;
```

Output:

```javascript
ReferenceError: Cannot access 'a' before initialization
```

---

### What happens internally?

During Creation Phase:

```javascript
a → uninitialized
```

Variable memory mein exist karti hai, but accessible nahi hoti.

Execution phase:

```javascript
console.log(a); // Error
let a = 10;
```

After declaration:

```javascript
a → 10
```

TDZ ends.

---

## Visual Representation

```javascript
{
   // TDZ starts here

   let x = 5;

   // TDZ ends here
}
```

---

## Example 2

```javascript
{
    console.log(city);
    let city = "Indore";
}
```

Output:

```javascript
ReferenceError
```

---

## Example with const

```javascript
console.log(pi);
const pi = 3.14;
```

Output:

```javascript
ReferenceError
```

Same reason.

---

## Important Interview Point

TDZ starts:

* From beginning of block scope

TDZ ends:

* At declaration line

---

## Example 3

```javascript
let x = 100;

{
    console.log(x);
    let x = 50;
}
```

Output?

```javascript
ReferenceError
```

Why?

Because block scope creates separate `x`.

Local `x` shadows global `x`.

Before initialization, local `x` is in TDZ.

---

## var vs let

```javascript
console.log(a);
var a = 10;
```

Output:

```javascript
undefined
```

---

```javascript
console.log(a);
let a = 10;
```

Output:

```javascript
ReferenceError
```

---

## Interview Definition

> Temporal Dead Zone is the period between entering a scope and initializing a let or const variable, during which the variable cannot be accessed.

---

---

# 145. What is Lexical Environment?

**Lexical Environment** is the internal structure JavaScript uses to store:

* Variables
* Functions
* Scope references

Simple words:

> Lexical Environment = Local memory + reference to parent environment.

Every execution context has a lexical environment.

---

## It contains 2 things

### 1. Environment Record

Stores variables and functions.

Example:

```javascript
let name = "Rishi";
```

Stored in environment record.

---

### 2. Reference to Outer Environment

Link to parent scope.

This enables nested functions to access outer variables.

---

## Example

```javascript
let a = 10;

function outer() {
    let b = 20;
}
```

Global lexical environment:

```javascript
a → 10
outer → function
```

---

## Example with Nested Functions

```javascript
function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();
```

---

### Lexical Environment Structure

Global:

```javascript
outer → function
```

Outer function:

```javascript
x → 10
inner → function
```

Inner function:

```javascript
(no local variable)
reference → outer lexical environment
```

When `inner()` executes:

```javascript
console.log(x);
```

JavaScript first checks local scope.

Not found.

Moves to outer lexical environment.

Finds:

```javascript
x = 10
```

---

## Why called “Lexical”?

Because scope depends on **where code is written**, not where it is called.

Lexical = physical placement in source code.

---

## Interview Definition

> Lexical Environment is the internal structure that stores variables, functions, and references to outer environments. It determines scope and variable accessibility.

---

---

# 146. What is Scope Chain?

**Scope Chain** is the chain of lexical environments JavaScript uses to resolve variables.

Simple words:

> Scope Chain is the process of searching variables from current scope to parent scopes until found.

---

## Example

```javascript
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
        console.log(a, b, c);
    }

    inner();
}

outer();
```

Output:

```javascript
10 20 30
```

---

## Variable Lookup Process

Inside `inner()`:

```javascript
console.log(a, b, c);
```

Search order:

### For c:

Check inner scope
Found.

---

### For b:

Check inner scope
Not found.

Move to outer scope
Found.

---

### For a:

Check inner scope
Not found.

Check outer scope
Not found.

Check global scope
Found.

---

This chain:

```javascript
inner → outer → global
```

is called Scope Chain.

---

## Visual Representation

```javascript
Global Scope
   ↑
Outer Scope
   ↑
Inner Scope
```

---

## Example 2

```javascript
let x = 100;

function test() {
    console.log(x);
}

test();
```

Output:

```javascript
100
```

Because JS searches:

* Local scope
* Global scope

Finds `x`.

---

## Important Rule

If variable not found anywhere:

```javascript
ReferenceError
```

Example:

```javascript
console.log(data);
```

Output:

```javascript
ReferenceError
```

---

## Interview Definition

> Scope Chain is the chain of lexical environments used by JavaScript to resolve variables by searching from current scope outward to parent scopes.

---

---

# 147. What is the Creation Phase?

**Creation Phase** is the first phase of Execution Context.

Every execution context has two phases:

1. Creation Phase
2. Execution Phase

---

## In Creation Phase JavaScript engine:

* Allocates memory for variables
* Stores function definitions
* Creates scope chain
* Determines `this`

Simple words:

> Creation Phase is where JavaScript prepares memory before actual execution starts.

---

## Example

```javascript
var x = 10;

function greet() {
    console.log("Hello");
}
```

---

## During Creation Phase

Memory allocation:

```javascript
x → undefined
greet → function definition
```

Notice:

```javascript
x = 10
```

still not assigned.

---

## During Execution Phase

Line-by-line execution:

```javascript
x = 10
```

Function available for call.

---

## Example with Function Context

```javascript
function add(a, b) {
    var result = a + b;
    return result;
}

add(2, 3);
```

When function called, new Function Execution Context created.

Creation phase:

```javascript
a → 2
b → 3
result → undefined
```

Scope chain created.
`this` assigned.

---

## What Happens Internally?

Creation phase mainly does:

### 1. Memory Allocation

Variables stored.

Example:

```javascript
var a;
let b;
```

---

### 2. Function Storage

Functions stored with complete code.

```javascript
function test() {}
```

---

### 3. Scope Chain Setup

Parent references created.

---

### 4. this Binding

Determines value of `this`.

Browser global context:

```javascript
window
```

---

## Interview Definition

> Creation Phase is the first phase of execution context where JavaScript allocates memory for variables and functions, creates scope chain, and sets the value of this before code execution starts.

---

# Quick Revision Table

| Concept             | Meaning                                 |
| ------------------- | --------------------------------------- |
| TDZ                 | Time where let/const cannot be accessed |
| Lexical Environment | Local memory + parent reference         |
| Scope Chain         | Variable lookup chain                   |
| Creation Phase      | Memory setup before execution           |

---

### Short Interview Answer

> TDZ is the time when let and const variables are hoisted but inaccessible until initialization. Lexical Environment stores variables and references to outer scopes. Scope Chain is the process JavaScript uses to find variables by searching current scope to parent scopes. Creation Phase is the first phase of execution context where memory allocation and setup happen before execution.


# 148. What is the Execution Phase?

**Execution Phase** is the second phase of JavaScript Execution Context.

Every execution context has two phases:

1. Creation Phase
2. Execution Phase

Creation phase mein memory prepare hoti hai.
Execution phase mein actual code line-by-line run hota hai.

Simple words:

> Execution Phase is the stage where JavaScript executes code, assigns values to variables, runs functions, and produces output.

---

## Real-life Analogy

Exam hall example:

* Creation Phase → Desk setup, answer sheet distribute
* Execution Phase → Student actual exam likhta hai

Same in JavaScript.

First preparation.
Then execution.

---

## Example 1

```javascript
var x = 10;
var y = 20;

console.log(x + y);
```

---

## Creation Phase

Memory allocation:

```javascript
x → undefined
y → undefined
```

---

## Execution Phase

Line 1:

```javascript
x = 10
```

Memory:

```javascript
x → 10
y → undefined
```

---

Line 2:

```javascript
y = 20
```

Memory:

```javascript
x → 10
y → 20
```

---

Line 3:

```javascript
console.log(x + y)
```

Output:

```javascript
30
```

---

## What happens during Execution Phase?

JavaScript engine performs:

* Executes code line by line
* Assigns values to variables
* Calls functions
* Evaluates expressions
* Produces output
* Creates new execution contexts for function calls

---

## Example 2 (Function Call)

```javascript
function add(a, b) {
    return a + b;
}

var result = add(5, 3);
console.log(result);
```

---

### Global Creation Phase

```javascript
add → function definition
result → undefined
```

---

### Global Execution Phase

Function call:

```javascript
add(5, 3)
```

This creates new Function Execution Context.

---

### Function Creation Phase

```javascript
a → 5
b → 3
```

---

### Function Execution Phase

```javascript
return 8
```

Function returns.

Back to Global Context:

```javascript
result = 8
```

Output:

```javascript
8
```

---

## Interview Definition

> Execution Phase is the second phase of execution context where JavaScript executes code line by line, assigns values, evaluates expressions, and runs functions.

---

---

# 149. What is Memory Creation in JavaScript?

**Memory Creation** refers to the process where JavaScript allocates memory for variables and functions during Creation Phase.

Simple words:

> Before executing code, JavaScript reserves memory for variables and functions.

This happens in:

* Global Execution Context
* Function Execution Context

---

## Why is Memory Creation needed?

Because JavaScript must know:

* Which variables exist
* Which functions exist
* What memory needs allocation

before actual execution.

---

## Example

```javascript
var a = 10;

function greet() {
    console.log("Hello");
}
```

Before execution, JavaScript allocates memory.

---

## Memory Allocation

```javascript
a → undefined
greet → function definition
```

Notice:

```javascript
a = 10
```

Not assigned yet.

Only memory allocated.

---

## Variables in Memory Creation

### var

Stored as:

```javascript
undefined
```

Example:

```javascript
var x;
```

Memory:

```javascript
x → undefined
```

---

### let and const

Memory allocated, but uninitialized.

Example:

```javascript
let y = 20;
const z = 30;
```

Memory exists but inaccessible until initialization.

This causes TDZ.

---

## Functions in Memory Creation

Function declarations stored with complete code.

Example:

```javascript
function test() {
    console.log("Hi");
}
```

Memory:

```javascript
test → full function definition
```

That’s why function declarations are hoisted completely.

---

## Example

```javascript
console.log(a);

var a = 10;

function show() {
    console.log("Hello");
}
```

Creation phase:

```javascript
a → undefined
show → function definition
```

Execution phase:

```javascript
console.log(a) → undefined
a = 10
```

---

## Interview Definition

> Memory Creation is the process during the creation phase where JavaScript allocates memory for variables and stores function definitions before code execution begins.

---

---

# 150. How does JavaScript execute code internally?

This is one of the most important JavaScript interview questions.

To answer deeply, you should explain the full internal flow.

---

# Step-by-Step Internal Execution Flow

JavaScript executes code in these stages:

1. Code Loading
2. Global Execution Context Creation
3. Creation Phase
4. Execution Phase
5. Function Execution Context Creation
6. Call Stack Management
7. Program Completion

---

# Step 1: Code Loads into JavaScript Engine

Example:

```javascript
var x = 10;

function square(n) {
    return n * n;
}

var result = square(x);
console.log(result);
```

Code JavaScript engine ke paas aata hai.

---

# Step 2: Global Execution Context Created

JavaScript creates:

* Global Object
* `this`
* Memory Component
* Code Component

Browser:

```javascript
this === window
```

---

# Step 3: Creation Phase Starts

Memory allocation happens.

Variables:

```javascript
x → undefined
result → undefined
```

Functions:

```javascript
square → function definition
```

---

## Memory State

```javascript
x → undefined
square → function
result → undefined
```

---

# Step 4: Execution Phase Starts

Code line by line execute hota hai.

Line 1:

```javascript
x = 10
```

Memory:

```javascript
x → 10
```

---

Line 2:

Function already stored.

---

Line 3:

```javascript
result = square(x)
```

Function call detected.

---

# Step 5: Function Execution Context Created

New execution context for:

```javascript
square(10)
```

Created and pushed to Call Stack.

---

## Call Stack

```javascript
| square() |
| Global   |
```

---

# Function Creation Phase

Parameter memory:

```javascript
n → 10
```

---

# Function Execution Phase

```javascript
return n * n
```

Output:

```javascript
100
```

Function context removed from stack.

---

## Stack after function completion

```javascript
| Global |
```

---

# Step 6: Return to Global Context

Now:

```javascript
result = 100
```

Memory:

```javascript
x → 10
result → 100
```

---

Line 4:

```javascript
console.log(result)
```

Output:

```javascript
100
```

---

# Step 7: Program Ends

Global Execution Context removed.

Call Stack empty.

---

# Visual Flow

```text
Code → GEC Created → Creation Phase → Execution Phase
                    ↓
              Function Call
                    ↓
          Function Context Created
                    ↓
              Added to Call Stack
                    ↓
           Function Executes & Returns
                    ↓
         Removed from Call Stack
```

---

# Key Components Used Internally

JavaScript execution depends on:

* Execution Context
* Memory Creation
* Execution Phase
* Call Stack
* Lexical Environment
* Scope Chain
* Hoisting

All these concepts work together.

---

## Important Interview Answer

If interviewer asks:

**How JavaScript executes code internally?**

You can answer:

> JavaScript first creates a Global Execution Context. Each execution context has two phases: Creation Phase and Execution Phase. During creation phase, memory is allocated for variables and functions. During execution phase, code runs line by line. If a function is called, JavaScript creates a new Function Execution Context and pushes it to the Call Stack. After execution, that context is removed. This process continues until the program finishes.

---

# Quick Revision Table

| Concept           | Role                           |
| ----------------- | ------------------------------ |
| Execution Phase   | Runs code line by line         |
| Memory Creation   | Allocates memory               |
| Execution Context | Environment for code execution |
| Call Stack        | Tracks function execution      |
| Hoisting          | Declaration handling           |
| Scope Chain       | Variable lookup                |

---

### Short Interview Answer

> Execution phase is where JavaScript runs code line by line after memory setup. Memory creation is the process of allocating memory for variables and functions during creation phase. Internally, JavaScript executes code by creating execution contexts, managing call stack, handling hoisting, and executing code in phases.



# 🔥 8. This, Call, Apply & Bind (151–165)


Here are in-depth interview-ready answers for **JavaScript Questions 151–154**. I’ll cover **definition + internal working + theory + examples + interview points**, so you’ll have enough content to explain confidently in interviews.

---

# 151. What is the `this` keyword?

The `this` keyword in JavaScript refers to the **object that is currently executing the function**.

In simple words:

* `this` tells us **who is calling the function**
* Its value is determined at **runtime**, not when the function is written

This makes JavaScript different from many OOP languages like Java or C++, where `this` always refers to the current class instance.

---

## Important Rule

The value of `this` depends on **how a function is called**, not where it is written.

That is the most important rule.

Example:

```javascript
function show() {
    console.log(this);
}

show();
```

Output in browser:

```javascript
window
```

Why?

Because the function is called in global context.

---

# Why do we need `this`?

Suppose we have multiple objects and each object has properties.

Without `this`, accessing the current object's properties becomes difficult.

Example:

```javascript
const user = {
    name: "Rishi",
    greet: function () {
        console.log("Hello " + this.name);
    }
};

user.greet();
```

Output:

```javascript
Hello Rishi
```

Here:

```javascript
this.name
```

means:

```javascript
user.name
```

---

# `this` in JavaScript depends on 4 major rules

JavaScript determines `this` using these rules:

1. Global Scope
2. Object Method
3. Function Call
4. Explicit Binding (`call`, `apply`, `bind`)
5. Arrow Functions (special case)

---

# 1. Global Binding

When `this` is used in global scope:

Browser:

```javascript
console.log(this);
```

Output:

```javascript
window
```

Because global object in browser = `window`

---

In Node.js:

```javascript
console.log(this);
```

Output may be:

```javascript
{}
```

or module object.

---

# 2. Object Binding

When a function is called as an object method:

```javascript
const person = {
    name: "Rishi",
    show: function () {
        console.log(this.name);
    }
};

person.show();
```

Output:

```javascript
Rishi
```

Here `this = person`

---

# 3. Function Binding

Regular function:

```javascript
function test() {
    console.log(this);
}

test();
```

Non-strict mode:

```javascript
window
```

Strict mode:

```javascript
undefined
```

---

# 4. Explicit Binding

Using:

* `call()`
* `apply()`
* `bind()`

Example:

```javascript
function greet() {
    console.log(this.name);
}

const user = { name: "Rishi" };

greet.call(user);
```

Output:

```javascript
Rishi
```

Here we manually set `this`.

---

# 5. Arrow Function Binding

Arrow functions do not have their own `this`.

They inherit `this` from surrounding scope.

Example:

```javascript
const obj = {
    name: "Rishi",
    show: () => {
        console.log(this.name);
    }
};

obj.show();
```

Output:

```javascript
undefined
```

Because arrow function takes `this` from outer scope.

---

# Interview Definition

You can say:

> The `this` keyword in JavaScript refers to the object executing the current function. Its value is determined at runtime based on how the function is called, not where it is defined.

---

---

# 152. How does `this` work in global scope?

In global scope, `this` refers to the **global object**.

The global object depends on environment.

* Browser → `window`
* Node.js → global/module object

---

# In Browser

Example:

```javascript
console.log(this);
```

Output:

```javascript
window
```

Example:

```javascript
console.log(this === window);
```

Output:

```javascript
true
```

---

# Global Variables attach to window

Example:

```javascript
var name = "Rishi";

console.log(window.name);
```

Output:

```javascript
Rishi
```

Because:

```javascript
var
```

declared global variables become properties of `window`.

---

Example:

```javascript
console.log(this.name);
```

Output:

```javascript
Rishi
```

---

# Important with let and const

`let` and `const` do NOT attach to `window`.

Example:

```javascript
let age = 22;
const city = "Indore";

console.log(window.age);
console.log(window.city);
```

Output:

```javascript
undefined
undefined
```

---

# Global Function Call

Example:

```javascript
function show() {
    console.log(this);
}

show();
```

Non-strict mode:

```javascript
window
```

---

Strict mode:

```javascript
"use strict";

function show() {
    console.log(this);
}

show();
```

Output:

```javascript
undefined
```

---

# Why strict mode changes behavior?

Strict mode prevents accidental global access.

This helps avoid bugs.

---

# Interview Answer

You can say:

> In global scope, `this` refers to the global object. In browsers, it is the window object. In Node.js, it may refer to module scope or global object. In strict mode, regular function calls make `this` undefined.

---

---

# 153. How does `this` work in objects?

Inside objects, `this` refers to the object that calls the method.

Important:

`this` refers to the object **before dot notation**.

Example:

```javascript
const person = {
    name: "Rishi",
    age: 22,
    intro: function () {
        console.log(this.name);
        console.log(this.age);
    }
};

person.intro();
```

Output:

```javascript
Rishi
22
```

Here:

```javascript
this = person
```

---

# Why use `this` in objects?

Without `this`:

```javascript
const person = {
    name: "Rishi",
    greet: function () {
        console.log(person.name);
    }
};
```

Works.

But problem:

If object reference changes:

```javascript
const user = person;
person = null;
```

Now code breaks.

Using `this` avoids this issue.

---

# Dynamic Nature of `this`

Example:

```javascript
function greet() {
    console.log(this.name);
}

const user1 = {
    name: "Rishi",
    greet
};

const user2 = {
    name: "Aman",
    greet
};

user1.greet();
user2.greet();
```

Output:

```javascript
Rishi
Aman
```

Same function, different `this`.

---

# Nested Objects

Example:

```javascript
const obj = {
    name: "Outer",
    inner: {
        name: "Inner",
        show() {
            console.log(this.name);
        }
    }
};

obj.inner.show();
```

Output:

```javascript
Inner
```

Because caller is:

```javascript
obj.inner
```

---

# Problem with Inner Function

Example:

```javascript
const person = {
    name: "Rishi",
    show: function () {
        function inner() {
            console.log(this.name);
        }
        inner();
    }
};

person.show();
```

Output:

```javascript
undefined
```

or window value.

Why?

Because inner function is regular function.

It loses object context.

---

Solution 1: Store `this`

```javascript
const person = {
    name: "Rishi",
    show: function () {
        const self = this;

        function inner() {
            console.log(self.name);
        }

        inner();
    }
};
```

---

Solution 2: Arrow Function

```javascript
const person = {
    name: "Rishi",
    show: function () {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

person.show();
```

Output:

```javascript
Rishi
```

---

# Interview Answer

You can say:

> In objects, `this` refers to the object that invokes the method. It usually points to the object before the dot operator. Since JavaScript uses dynamic binding, the same function can have different `this` values depending on the caller.

---

---

# 154. How does `this` work in arrow functions?

Arrow functions behave differently from regular functions.

They do NOT have:

* their own `this`
* their own `arguments`
* their own `super`

Instead, they inherit `this` from surrounding lexical scope.

This is called **lexical binding**.

---

# Regular Function vs Arrow Function

Regular function:

```javascript
function show() {
    console.log(this);
}
```

`this` depends on caller.

---

Arrow function:

```javascript
const show = () => {
    console.log(this);
};
```

`this` comes from parent scope.

---

# Example 1

```javascript
const obj = {
    name: "Rishi",
    show: () => {
        console.log(this.name);
    }
};

obj.show();
```

Output:

```javascript
undefined
```

Why?

Because arrow function doesn’t bind `this` to `obj`.

It takes `this` from outer scope.

---

# Example 2

```javascript
function outer() {
    const arrow = () => {
        console.log(this);
    };

    arrow();
}

outer();
```

Non-strict mode:

```javascript
window
```

Because arrow inherits from `outer`.

---

# Best Use Case of Arrow Function

Very useful inside callbacks.

Example using regular function:

```javascript
const person = {
    name: "Rishi",
    show: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
};

person.show();
```

Output:

```javascript
undefined
```

Because callback has its own `this`.

---

Using arrow function:

```javascript
const person = {
    name: "Rishi",
    show: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

person.show();
```

Output:

```javascript
Rishi
```

Arrow inherits `this` from `show()`.

---

# Can we change `this` in arrow function?

No.

Methods like:

* `call()`
* `apply()`
* `bind()`

do not change arrow function’s `this`.

Example:

```javascript
const show = () => {
    console.log(this.name);
};

show.call({ name: "Rishi" });
```

Still uses outer scope `this`.

---

# When should we use arrow functions?

Use arrow functions for:

✔ callbacks
✔ closures
✔ nested functions

Avoid for:

✘ object methods
✘ constructors
✘ prototype methods

---

# Interview Answer

You can say:

> Arrow functions do not have their own `this`. Instead, they inherit `this` from the surrounding lexical scope. Unlike regular functions, their `this` cannot be changed using call, apply, or bind. This makes them useful for callbacks and nested functions where preserving outer context is important.

---

# Quick Summary Table

| Scenario               | Value of `this`    |
| ---------------------- | ------------------ |
| Global scope (browser) | window             |
| Regular function       | window / undefined |
| Object method          | Calling object     |
| call/apply/bind        | Explicit object    |
| Arrow function         | Parent scope       |

---

This topic is very important in JavaScript interviews because `this`, closures, and execution context are deeply connected. Interviewers often ask tricky examples based on `this`.


Here are detailed interview-ready answers for **155–158**. These topics are extremely important because they directly relate to **how JavaScript controls `this`**. Interviewers often ask tricky scenarios around `call`, `apply`, and binding.

---

# 155. What is Explicit Binding?

Explicit binding means **manually setting the value of `this` for a function**.

Normally JavaScript decides `this` automatically based on how the function is called.

But sometimes we want full control over `this`.

For that, JavaScript provides:

* `call()`
* `apply()`
* `bind()`

These methods allow us to explicitly decide what `this` should refer to.

---

# Why is explicit binding needed?

Suppose we have a function:

```javascript
function greet() {
    console.log("Hello " + this.name);
}
```

Now two objects:

```javascript
const user1 = { name: "Rishi" };
const user2 = { name: "Aman" };
```

Without explicit binding:

```javascript
greet();
```

Output:

```javascript
Hello undefined
```

because no object is calling the function.

---

Using explicit binding:

```javascript
greet.call(user1);
greet.call(user2);
```

Output:

```javascript
Hello Rishi
Hello Aman
```

Now we manually control `this`.

---

# Internal Working

When you do:

```javascript
greet.call(user1);
```

JavaScript internally behaves like:

* Take function `greet`
* Temporarily attach it to `user1`
* Execute function with `this = user1`

Conceptually:

```javascript
user1.temp = greet;
user1.temp();
delete user1.temp;
```

---

# Methods used for Explicit Binding

## 1. call()

Pass arguments individually.

```javascript
fn.call(obj, arg1, arg2)
```

---

## 2. apply()

Pass arguments as array.

```javascript
fn.apply(obj, [arg1, arg2])
```

---

## 3. bind()

Returns new function with fixed `this`.

```javascript
const newFn = fn.bind(obj);
```

---

# Example with multiple arguments

```javascript
function introduce(city, country) {
    console.log(this.name + " from " + city + ", " + country);
}

const person = { name: "Rishi" };

introduce.call(person, "Indore", "India");
```

Output:

```javascript
Rishi from Indore, India
```

---

# Interview Answer

You can say:

> Explicit binding in JavaScript means manually assigning the value of `this` to a function using methods like call, apply, or bind. It gives developers full control over execution context.

---

---

# 156. What is Implicit Binding?

Implicit binding happens when JavaScript automatically assigns `this` based on the object calling the function.

This usually happens in object methods.

---

# Rule of Implicit Binding

`this` refers to the object before the dot (`.`)

Example:

```javascript
const person = {
    name: "Rishi",
    greet: function () {
        console.log(this.name);
    }
};

person.greet();
```

Output:

```javascript
Rishi
```

Here:

```javascript
this = person
```

because person is calling `greet()`.

---

# Why called implicit?

Because JavaScript automatically binds `this`.

We did not manually set it.

---

# Example 2

```javascript
const user1 = {
    name: "Rishi",
    show() {
        console.log(this.name);
    }
};

const user2 = {
    name: "Aman",
    show() {
        console.log(this.name);
    }
};

user1.show();
user2.show();
```

Output:

```javascript
Rishi
Aman
```

---

# Important Concept: Caller matters

Example:

```javascript
function greet() {
    console.log(this.name);
}

const person = {
    name: "Rishi",
    greet
};

person.greet();
```

Output:

```javascript
Rishi
```

Because caller is `person`.

---

# Losing Implicit Binding

Example:

```javascript
const person = {
    name: "Rishi",
    greet() {
        console.log(this.name);
    }
};

const fn = person.greet;
fn();
```

Output:

```javascript
undefined
```

Why?

Because function is no longer called through object.

Implicit binding is lost.

---

# Interview Answer

You can say:

> Implicit binding occurs when JavaScript automatically binds `this` to the object that invokes the method. Usually, `this` points to the object before the dot operator.

---

---

# 157. What is `call()`?

`call()` is a built-in JavaScript function method used to invoke a function immediately while explicitly setting `this`.

Syntax:

```javascript
functionName.call(thisArg, arg1, arg2, ...)
```

* First parameter → object for `this`
* Remaining parameters → function arguments

---

# Basic Example

```javascript
function greet() {
    console.log(this.name);
}

const user = {
    name: "Rishi"
};

greet.call(user);
```

Output:

```javascript
Rishi
```

---

# Example with arguments

```javascript
function intro(city, country) {
    console.log(this.name + " from " + city + ", " + country);
}

const person = {
    name: "Rishi"
};

intro.call(person, "Indore", "India");
```

Output:

```javascript
Rishi from Indore, India
```

---

# Borrowing Methods using call()

Very popular interview concept.

Example:

```javascript
const person1 = {
    name: "Rishi",
    greet() {
        console.log("Hello " + this.name);
    }
};

const person2 = {
    name: "Aman"
};

person1.greet.call(person2);
```

Output:

```javascript
Hello Aman
```

Here person2 borrows person1’s method.

This is called **function borrowing**.

---

# Constructor Chaining using call()

Example:

```javascript
function Person(name) {
    this.name = name;
}

function Student(name, course) {
    Person.call(this, name);
    this.course = course;
}

const s1 = new Student("Rishi", "MCA");

console.log(s1);
```

Output:

```javascript
Student { name: 'Rishi', course: 'MCA' }
```

---

# Important

`call()` executes immediately.

```javascript
greet.call(user);
```

Function runs instantly.

---

# Interview Answer

You can say:

> The call() method invokes a function immediately and allows us to explicitly set the value of `this`. Arguments are passed individually after the this object.

---

---

# 158. What is `apply()`?

`apply()` is similar to `call()`.

Difference:

* `call()` → arguments passed individually
* `apply()` → arguments passed as array

Syntax:

```javascript
functionName.apply(thisArg, [argsArray])
```

---

# Basic Example

```javascript
function greet() {
    console.log(this.name);
}

const user = {
    name: "Rishi"
};

greet.apply(user);
```

Output:

```javascript
Rishi
```

---

# Example with arguments

```javascript
function intro(city, country) {
    console.log(this.name + " from " + city + ", " + country);
}

const person = {
    name: "Rishi"
};

intro.apply(person, ["Indore", "India"]);
```

Output:

```javascript
Rishi from Indore, India
```

---

# Difference Between call() and apply()

Using call:

```javascript
intro.call(person, "Indore", "India");
```

Using apply:

```javascript
intro.apply(person, ["Indore", "India"]);
```

Same result.

Only argument passing differs.

---

# Common Use Case of apply()

Earlier, apply was commonly used with Math functions.

Example:

```javascript
const numbers = [10, 20, 5, 100];

console.log(Math.max.apply(null, numbers));
```

Output:

```javascript
100
```

---

Modern JavaScript prefers spread operator:

```javascript
console.log(Math.max(...numbers));
```

---

# Interview Answer

You can say:

> The apply() method works like call(), but instead of passing arguments individually, it accepts arguments as an array. It is useful when arguments are already available in array form.

---

# call() vs apply()

| Feature      | call()     | apply()   |
| ------------ | ---------- | --------- |
| Execution    | Immediate  | Immediate |
| this Binding | Explicit   | Explicit  |
| Arguments    | Individual | Array     |

---

# Quick Summary

| Binding Type     | Meaning                               |
| ---------------- | ------------------------------------- |
| Implicit Binding | JS automatically sets `this`          |
| Explicit Binding | Developer manually sets `this`        |
| call()           | Immediate execution + individual args |
| apply()          | Immediate execution + array args      |

---

Very common interview follow-up question after this:

* What is `bind()`?
* Difference between `call`, `apply`, and `bind`

That is usually asked next.


Here are in-depth interview-ready answers for **159–162**. These concepts are advanced `this` binding topics and are frequently asked in JavaScript interviews, especially to test deep understanding of execution context.

---

# 159. What is `bind()`?

`bind()` is a built-in JavaScript function method used to create a **new function** with a permanently bound `this` value.

Unlike:

* `call()` → executes immediately
* `apply()` → executes immediately

`bind()` does **not execute immediately**.

Instead, it returns a new function that can be called later.

---

# Syntax

```javascript
functionName.bind(thisArg, arg1, arg2, ...)
```

* First parameter → object to bind as `this`
* Remaining parameters → optional pre-filled arguments

---

# Basic Example

```javascript
function greet() {
    console.log(this.name);
}

const user = {
    name: "Rishi"
};

const boundFunction = greet.bind(user);

boundFunction();
```

Output:

```javascript
Rishi
```

---

# Internal Working

When you write:

```javascript
const boundFn = greet.bind(user);
```

JavaScript creates a new wrapper function.

Conceptually:

```javascript
function boundFn() {
    greet.call(user);
}
```

So later whenever `boundFn()` runs:

```javascript
this = user
```

always.

---

# Why use bind()?

Very useful when:

* Passing methods as callbacks
* Event handlers
* Timers
* Preserving object context

---

# Problem Without bind()

```javascript
const person = {
    name: "Rishi",
    greet() {
        console.log(this.name);
    }
};

setTimeout(person.greet, 1000);
```

Output:

```javascript
undefined
```

Why?

Because method loses object context.

---

# Fix Using bind()

```javascript
const person = {
    name: "Rishi",
    greet() {
        console.log(this.name);
    }
};

setTimeout(person.greet.bind(person), 1000);
```

Output:

```javascript
Rishi
```

Now `this` remains bound to person.

---

# bind() with Arguments

```javascript
function intro(city, country) {
    console.log(this.name + " from " + city + ", " + country);
}

const person = {
    name: "Rishi"
};

const boundIntro = intro.bind(person, "Indore");

boundIntro("India");
```

Output:

```javascript
Rishi from Indore, India
```

---

# Partial Application

`bind()` supports partial argument passing.

Example:

```javascript
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(5));
```

Output:

```javascript
10
```

This is called **partial application**.

---

# Interview Answer

You can say:

> bind() creates a new function with a permanently fixed `this` value. Unlike call() and apply(), it does not execute immediately. It is commonly used to preserve object context in callbacks and event handlers.

---

---

# 160. What is the difference between `call`, `apply`, and `bind`?

All three are used for **explicit binding**.

They allow us to control `this`.

Main difference is in:

* execution timing
* argument passing

---

# call()

* Executes immediately
* Arguments passed individually

Example:

```javascript
fn.call(obj, arg1, arg2);
```

---

# apply()

* Executes immediately
* Arguments passed as array

Example:

```javascript
fn.apply(obj, [arg1, arg2]);
```

---

# bind()

* Does NOT execute immediately
* Returns new function
* Can execute later

Example:

```javascript
const newFn = fn.bind(obj);
newFn();
```

---

# Example

```javascript
function greet(city) {
    console.log(this.name + " from " + city);
}

const person = {
    name: "Rishi"
};
```

---

Using call:

```javascript
greet.call(person, "Indore");
```

Output:

```javascript
Rishi from Indore
```

---

Using apply:

```javascript
greet.apply(person, ["Indore"]);
```

Output:

```javascript
Rishi from Indore
```

---

Using bind:

```javascript
const newFn = greet.bind(person, "Indore");
newFn();
```

Output:

```javascript
Rishi from Indore
```

---

# Comparison Table

| Feature              | call()     | apply() | bind()               |
| -------------------- | ---------- | ------- | -------------------- |
| Executes Immediately | Yes        | Yes     | No                   |
| Returns Function     | No         | No      | Yes                  |
| Arguments            | Individual | Array   | Individual / Partial |
| Changes `this`       | Yes        | Yes     | Yes                  |

---

# Interview Answer

You can say:

> call(), apply(), and bind() are used for explicit binding in JavaScript. call() and apply() invoke the function immediately, while bind() returns a new function for later execution. call() accepts arguments individually, whereas apply() accepts arguments as an array.

---

---

# 161. What is Hard Binding?

Hard binding means permanently binding a function’s `this` to a specific object.

Once hard bound, `this` cannot easily be changed.

Usually done using:

* `bind()`
* wrapper functions

---

# Example

```javascript
function greet() {
    console.log(this.name);
}

const user = {
    name: "Rishi"
};

const boundGreet = greet.bind(user);

boundGreet();
```

Output:

```javascript
Rishi
```

This is hard binding.

---

Even if we try to change `this`:

```javascript
boundGreet.call({ name: "Aman" });
```

Output:

```javascript
Rishi
```

Still:

```javascript
Rishi
```

Why?

Because `bind()` permanently fixed `this`.

---

# Manual Hard Binding

Example:

```javascript
function greet() {
    console.log(this.name);
}

const user = { name: "Rishi" };

function wrapper() {
    greet.call(user);
}

wrapper();
```

Output:

```javascript
Rishi
```

This also behaves like hard binding.

---

# Why use hard binding?

Useful when:

* Context must never change
* Event handlers
* Timers
* Async callbacks

---

# Interview Answer

You can say:

> Hard binding means permanently fixing the value of `this` to a specific object. Once hard bound, the function always uses that object as its context, regardless of how it is later called.

---

---

# 162. What is Soft Binding?

Soft binding is a flexible version of binding.

It provides a **default `this` object**, but allows override if another object explicitly calls the function.

Unlike hard binding, soft binding is not permanent.

JavaScript does not provide built-in soft binding directly.

It is usually implemented manually.

---

# Why needed?

Suppose we want:

* Default object if no context exists
* But allow override later

Hard binding does not allow override.

Soft binding does.

---

# Example Implementation

```javascript
function softBind(fn, obj) {
    return function (...args) {
        if (!this || this === window) {
            return fn.apply(obj, args);
        }
        return fn.apply(this, args);
    };
}
```

---

# Example Usage

```javascript
function greet() {
    console.log(this.name);
}

const user1 = { name: "Rishi" };
const user2 = { name: "Aman" };

const softBound = softBind(greet, user1);
```

---

Normal call:

```javascript
softBound();
```

Output:

```javascript
Rishi
```

Uses default object.

---

Explicit override:

```javascript
softBound.call(user2);
```

Output:

```javascript
Aman
```

Override works.

---

# Hard Binding vs Soft Binding

| Feature          | Hard Binding | Soft Binding |
| ---------------- | ------------ | ------------ |
| Permanent        | Yes          | No           |
| Override Allowed | No           | Yes          |
| Uses bind()      | Usually      | Custom logic |

---

# Interview Answer

You can say:

> Soft binding provides a default value for `this` when no context is supplied, but still allows explicit or implicit binding to override it. Unlike hard binding, it is flexible and typically implemented using custom wrapper logic.

---

# Quick Summary

| Concept      | Meaning                                |
| ------------ | -------------------------------------- |
| bind()       | Returns new function with fixed `this` |
| call()       | Immediate execution + individual args  |
| apply()      | Immediate execution + array args       |
| Hard Binding | Permanent `this` binding               |
| Soft Binding | Default `this`, override allowed       |

---

This completes the full **JavaScript `this` binding section**:

* implicit binding
* explicit binding
* call
* apply
* bind
* hard binding
* soft binding

These are highly important for interviews because many tricky output questions come from here.


Here are detailed interview-ready answers for **163–165**. These are important because they connect **`this`, objects, DOM events, callbacks, and real-world JavaScript behavior**.

---

# 163. What is Function Borrowing?

Function borrowing means using a method/function from one object inside another object.

Instead of writing the same method again, we reuse an existing function using:

* `call()`
* `apply()`
* `bind()`

This is possible because JavaScript functions are first-class objects.

---

# Why use function borrowing?

Suppose two objects need similar behavior.

Without function borrowing:

```javascript id="v8oqz5"
const user1 = {
    name: "Rishi",
    greet() {
        console.log("Hello " + this.name);
    }
};

const user2 = {
    name: "Aman",
    greet() {
        console.log("Hello " + this.name);
    }
};
```

Problem:

* Duplicate code
* Hard to maintain

---

# Using Function Borrowing

```javascript id="v9zv4t"
const user1 = {
    name: "Rishi",
    greet() {
        console.log("Hello " + this.name);
    }
};

const user2 = {
    name: "Aman"
};

user1.greet.call(user2);
```

Output:

```javascript id="hhz4l4"
Hello Aman
```

Here:

* `user2` borrows `greet()` from `user1`

This is function borrowing.

---

# Borrowing with call()

Example:

```javascript id="y7jk4x"
const person1 = {
    firstName: "Rishi",
    lastName: "Singh",
    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }
};

const person2 = {
    firstName: "Aman",
    lastName: "Sharma"
};

person1.fullName.call(person2);
```

Output:

```javascript id="5s5t7z"
Aman Sharma
```

---

# Borrowing with apply()

```javascript id="nx7i08"
function introduce(city, country) {
    console.log(this.name + " from " + city + ", " + country);
}

const user = {
    name: "Rishi"
};

introduce.apply(user, ["Indore", "India"]);
```

Output:

```javascript id="f7sk4u"
Rishi from Indore, India
```

---

# Borrowing with bind()

```javascript id="6dzp2r"
function greet() {
    console.log("Hello " + this.name);
}

const user = { name: "Rishi" };

const borrowed = greet.bind(user);

borrowed();
```

Output:

```javascript id="zj9zzj"
Hello Rishi
```

---

# Real-world Example

Array methods can be borrowed.

Example:

```javascript id="u24e74"
function test() {
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);
}

test(1, 2, 3);
```

Output:

```javascript id="uzclqz"
[1, 2, 3]
```

Here `slice()` is borrowed from Array.

---

# Interview Answer

You can say:

> Function borrowing is a JavaScript technique where one object uses a function belonging to another object. It avoids code duplication and is commonly achieved using call(), apply(), or bind().

---

---

# 164. What is Event Binding?

Event binding means attaching an event handler function to an HTML element so that some code executes when a specific event occurs.

Examples of events:

* click
* submit
* keydown
* mouseover
* change

---

# Example

HTML:

```html id="jlwmrw"
<button id="btn">Click Me</button>
```

JavaScript:

```javascript id="8yl3dl"
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log("Button clicked");
});
```

When button is clicked:

Output:

```javascript id="f0jj7x"
Button clicked
```

This process is event binding.

---

# Why Event Binding is Important?

Modern web applications are event-driven.

User actions trigger events.

Examples:

* Button click
* Form submit
* Input typing

Without event binding, pages cannot interact with users.

---

# Methods of Event Binding

---

# 1. Inline Event Binding

```html id="ddw2u0"
<button onclick="show()">Click</button>
```

JavaScript:

```javascript id="g7m6t0"
function show() {
    console.log("Clicked");
}
```

Not recommended.

Why?

* Mixes HTML + JS
* Hard to maintain

---

# 2. Traditional DOM Binding

```javascript id="szjt39"
button.onclick = function () {
    console.log("Clicked");
};
```

Problem:

Only one handler allowed.

---

# 3. addEventListener()

Best approach.

```javascript id="d8z0kc"
button.addEventListener("click", function () {
    console.log("Clicked");
});
```

Advantages:

* Multiple listeners allowed
* More flexible
* Cleaner code

---

# `this` in Event Binding

Very common interview topic.

Example:

```javascript id="w2vggl"
button.addEventListener("click", function () {
    console.log(this);
});
```

Here:

```javascript id="b4f6ti"
this = button element
```

---

Example:

```javascript id="dgq2b5"
button.addEventListener("click", function () {
    console.log(this.innerText);
});
```

Works because `this` points to clicked element.

---

# Problem with Arrow Functions

```javascript id="aj8k3j"
button.addEventListener("click", () => {
    console.log(this);
});
```

Arrow function does not bind its own `this`.

It inherits from parent scope.

So `this` may not point to button.

This is a very common mistake.

---

# Event Object

Example:

```javascript id="tcb6o5"
button.addEventListener("click", function (event) {
    console.log(event.target);
});
```

`event.target` gives clicked element.

---

# Interview Answer

You can say:

> Event binding is the process of attaching event listeners to DOM elements so specific code executes when an event occurs. Common examples include click, submit, and keyboard events. The preferred method is addEventListener().

---

---

# 165. What are common `this`-related interview questions?

This is one of the most important JavaScript interview areas.

Interviewers often test:

* understanding of `this`
* execution context
* function invocation patterns
* arrow functions

Most questions are output-based.

---

# Common Question 1

```javascript id="avjmm8"
const user = {
    name: "Rishi",
    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output?

Answer:

```javascript id="zb7h13"
Rishi
```

Because caller = user.

---

# Common Question 2

```javascript id="6k41e6"
const user = {
    name: "Rishi",
    greet() {
        console.log(this.name);
    }
};

const fn = user.greet;
fn();
```

Output?

Answer:

```javascript id="u0f9pv"
undefined
```

Implicit binding lost.

---

# Common Question 3

```javascript id="x3u0w5"
function show() {
    console.log(this);
}

show();
```

Output?

Non-strict mode:

```javascript id="djlwmw"
window
```

Strict mode:

```javascript id="ljqddk"
undefined
```

---

# Common Question 4

```javascript id="24v1md"
const user = {
    name: "Rishi",
    greet: () => {
        console.log(this.name);
    }
};

user.greet();
```

Output?

```javascript id="0vljlm"
undefined
```

Arrow function doesn’t bind `this`.

---

# Common Question 5

```javascript id="s6l0zn"
const user = {
    name: "Rishi",
    greet() {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
};

user.greet();
```

Output?

```javascript id="79s0l0"
undefined
```

Regular callback loses object context.

---

Solution:

```javascript id="mjlwm9"
setTimeout(() => {
    console.log(this.name);
}, 1000);
```

---

# Common Question 6

```javascript id="znw65z"
function greet() {
    console.log(this.name);
}

const user = {
    name: "Rishi"
};

greet.call(user);
```

Output:

```javascript id="h00gza"
Rishi
```

Explicit binding.

---

# Common Question 7

Difference between:

* regular function
* arrow function

Interview expectation:

| Feature        | Regular Function | Arrow Function |
| -------------- | ---------------- | -------------- |
| Own `this`     | Yes              | No             |
| `this` binding | Dynamic          | Lexical        |

---

# Common Question 8

Difference between:

* call
* apply
* bind

Very common.

---

# Common Question 9

What happens when using `bind()` multiple times?

Example:

```javascript id="1izv4w"
function greet() {
    console.log(this.name);
}

const fn = greet.bind({ name: "Rishi" });
const fn2 = fn.bind({ name: "Aman" });

fn2();
```

Output:

```javascript id="s22vje"
Rishi
```

First bind wins.

---

# Common Question 10

Event handler `this`

```javascript id="hkc8ye"
button.addEventListener("click", function () {
    console.log(this);
});
```

Answer:

`this` = clicked element

---

# Golden Rule for `this`

Whenever interviewer asks output-based question:

Ask yourself:

### 1. How is function called?

* Regular function?
* Object method?
* Constructor?
* call/apply/bind?

### 2. Is it arrow function?

### 3. Is strict mode enabled?

If you check these 3, you can solve almost every `this` question.

---

# Final Interview Summary

Remember these rules:

| Scenario         | `this` value       |
| ---------------- | ------------------ |
| Global scope     | window/global      |
| Regular function | window / undefined |
| Object method    | Calling object     |
| Arrow function   | Lexical scope      |
| call/apply/bind  | Explicit object    |
| Event handler    | DOM element        |

---

This completes the **entire `this` keyword chapter**, which is one of the most important JavaScript interview topics. Next usually comes **Closures, Callbacks, Promises, Event Loop, and Async JavaScript**.


# ⚡ 9. Asynchronous JavaScript (166–190)

