# 🚀 JavaScript Interview Questions (Top 220+ Most Asked)

## 📘 1. JavaScript Fundamentals (1–20)

1. What is JavaScript?
   
   **Answer:** JavaScript is a high-level, interpreted programming language primarily used for web development. It was created by Brendan Eich in 1995 while working at Netscape. JavaScript enables interactive web pages, dynamic content, and is an essential technology of the World Wide Web alongside HTML and CSS. It can run on both client-side (browsers) and server-side (Node.js). JavaScript is multi-paradigm, supporting object-oriented, imperative, and functional programming styles.

2. Why is JavaScript called a scripting language?
   **Answer:** JavaScript is called a scripting language because:
   - It was originally designed to be embedded in HTML and executed by web browsers
   - It's interpreted rather than compiled (though modern engines use JIT compilation)
   - It's used to automate tasks and control applications
   - Scripts are typically smaller programs that enhance existing applications
   - It doesn't require a separate compilation step before execution
   - It's often used for quick, dynamic functionality rather than standalone applications

3. What are the features of JavaScript?
   **Answer:** Key features of JavaScript include:
   - **Dynamic Typing:** Variables can hold any type of data
   - **Weak Typing:** Type coercion happens automatically
   - **First-class Functions:** Functions can be treated as values
   - **Prototype-based Inheritance:** Objects inherit directly from other objects
   - **Event-driven:** Responds to user actions and events
   - **Functional Programming:** Supports higher-order functions, closures
   - **Cross-platform:** Runs on browsers, servers, mobile devices
   - **Asynchronous:** Supports callbacks, promises, async/await
   - **Interpreted:** Code executes without compilation
   - **Lightweight:** Minimal resource requirements

4. What are the different versions of ECMAScript?
   **Answer:** Major ECMAScript versions:
   - **ES1 (1997):** First official standard
   - **ES2 (1998):** Editorial changes
   - **ES3 (1999):** Regular expressions, try/catch
   - **ES4 (Abandoned):** Never released due to disagreements
   - **ES5 (2009):** Strict mode, JSON, array methods
   - **ES6/ES2015:** Major update - classes, modules, arrow functions
   - **ES2016:** Array.prototype.includes, exponentiation operator
   - **ES2017:** Async/await, Object.values/entries
   - **ES2018:** Rest/spread properties, Promise.finally
   - **ES2019:** Array.flat/flatMap, Object.fromEntries
   - **ES2020:** Optional chaining, nullish coalescing, BigInt
   - **ES2021:** String.replaceAll, logical assignment operators
   - **ES2022:** Class fields, private methods, Array.at()
   - **ES2023:** Array toSorted(), toReversed(), toSpliced()
   - **ES2024:** Object.groupBy(), Map.groupBy()

5. What is the difference between JavaScript and ECMAScript?
   **Answer:** The key differences:
   - **ECMAScript** is the specification/standard that defines the language
   - **JavaScript** is the implementation of that specification
   - ECMAScript is maintained by ECMA International (TC39 committee)
   - JavaScript is the actual language used in browsers and Node.js
   - ECMAScript provides the rules and syntax
   - JavaScript includes additional features like DOM APIs
   - Other languages implement ECMAScript: JScript, ActionScript
   - Think of ECMAScript as the blueprint, JavaScript as the building

6. How does JavaScript work in a browser?
   **Answer:** JavaScript execution in browsers:
   1. **HTML Parsing:** Browser parses HTML and creates DOM
   2. **CSS Parsing:** CSS is parsed to create CSSOM
   3. **JavaScript Loading:** Script tags trigger JS loading
   4. **JavaScript Engine:** V8 (Chrome), SpiderMonkey (Firefox), JavaScriptCore (Safari)
   5. **Parsing:** Code is parsed into Abstract Syntax Tree (AST)
   6. **Compilation:** JIT compiler converts to machine code
   7. **Execution:** Code runs on the call stack
   8. **Event Loop:** Manages async operations
   9. **DOM Manipulation:** JS can modify the DOM
   10. **Rendering:** Browser repaints the page

7. What are JavaScript engines?
   **Answer:** JavaScript engines are programs that execute JavaScript code:
   - **V8:** Used by Chrome, Node.js, Edge (written in C++)
   - **SpiderMonkey:** Firefox (written in C++)
   - **JavaScriptCore (Nitro):** Safari (written in C++)
   - **Chakra:** Legacy Edge (written in C++)
   - **Hermes:** React Native (optimized for mobile)
   - **JerryScript:** IoT devices (lightweight)
   - Engines parse, compile, and execute JavaScript
   - They use Just-In-Time (JIT) compilation for performance
   - They include garbage collectors for memory management
   - They implement the ECMAScript specification

8. What is the V8 engine?
   **Answer:** V8 is Google's open-source JavaScript engine:
   - **Created by:** Google in 2008 for Chrome
   - **Written in:** C++
   - **Used in:** Chrome, Node.js, Edge, Electron, Deno
   - **Key Components:**
     - Parser: Converts JS to AST
     - Ignition: Interpreter (baseline compiler)
     - TurboFan: Optimizing compiler
     - Orinoco: Garbage collector
   - **Features:**
     - JIT compilation
     - Hidden classes for optimization
     - Inline caching
     - Optimizes hot code paths
     - Supports WebAssembly
   - **Performance:** One of the fastest JS engines

9. Is JavaScript compiled or interpreted?
   **Answer:** JavaScript is technically both:
   - **Traditionally:** Interpreted language (executed line by line)
   - **Modern Reality:** Uses JIT (Just-In-Time) compilation
   - **Process:**
     1. Code is parsed into AST
     2. Interpreter executes quickly (baseline)
     3. Hot code is identified
     4. Optimizing compiler compiles hot code to machine code
     5. Deoptimization occurs if assumptions fail
   - **V8 Example:** Ignition (interpreter) + TurboFan (compiler)
   - **Result:** Performance closer to compiled languages
   - **Hybrid Approach:** Best of both worlds

10. What are the data types in JavaScript?
    **Answer:** JavaScript has 8 data types:
    - **Primitive Types (7):**
      1. String: "Hello", 'World'
      2. Number: 42, 3.14, NaN, Infinity
      3. Boolean: true, false
      4. Undefined: undefined
      5. Null: null
      6. Symbol: Symbol('description')
      7. BigInt: 9007199254740991n
    - **Reference Type (1):**
      8. Object: Arrays, functions, dates, etc.

11. What is dynamic typing?
    **Answer:** Dynamic typing means:
    - Variables can hold values of any type
    - Type is determined at runtime, not compile time
    - Type can change during execution
    - No need to declare variable types
    - Example:
      ```javascript
      let x = 5;        // number
      x = "hello";      // string
      x = true;         // boolean
      ```
    - Provides flexibility but can lead to runtime errors
    - Contrast with static typing (TypeScript, Java)

12. What is weak typing?
    **Answer:** Weak typing means:
    - Type coercion happens automatically
    - Implicit type conversions occur
    - Operations can work across different types
    - Example:
      ```javascript
      5 + "5" = "55"    // number coerced to string
      "5" - 2 = 3       // string coerced to number
      [] == 0 = true    // array coerced to number
      ```
    - Can lead to unexpected behavior
    - Requires understanding coercion rules
    - Contrast with strong typing (Python, Java)

13. What are primitive data types?
    **Answer:** Primitive data types are:
    - **Immutable:** Cannot be changed once created
    - **Passed by value:** Copied when assigned
    - **Stored directly:** In the variable location
    - **The 7 Primitives:**
      1. String: Text data
      2. Number: Numeric data (integers, floats)
      3. Boolean: Logical values
      4. Undefined: Uninitialized variable
      5. Null: Intentional absence of value
      6. Symbol: Unique identifiers
      7. BigInt: Large integers
    - **Example:**
      ```javascript
      let a = 5;
      let b = a;  // a is copied to b
      a = 10;     // b still equals 5
      ```

14. What are reference data types?
    **Answer:** Reference data types are:
    - **Mutable:** Can be modified after creation
    - **Passed by reference:** Reference to memory location
    - **Stored in heap:** Variable holds a reference
    - **The Main Reference Type:**
      - Object (includes arrays, functions, dates, etc.)
    - **Example:**
      ```javascript
      let obj1 = { name: "John" };
      let obj2 = obj1;  // obj2 references same object
      obj1.name = "Jane";  // obj2.name is also "Jane"
      ```
    - **Reference Types Include:**
      - Objects, Arrays, Functions
      - Dates, RegExps, Maps, Sets
      - Classes (which are functions)

15. What is the typeof operator?
    **Answer:** The typeof operator returns the type of a value:
    - **Syntax:** typeof operand or typeof(operand)
    - **Returns:** String representing the type
    - **Results:**
      ```javascript
      typeof "hello"      // "string"
      typeof 42           // "number"
      typeof true         // "boolean"
      typeof undefined    // "undefined"
      typeof null         // "object" (historical bug)
      typeof Symbol()     // "symbol"
      typeof 42n          // "bigint"
      typeof {}           // "object"
      typeof []           // "object"
      typeof function(){} // "function"
      ```
    - **Note:** typeof null returns "object" (a known bug)
    - **Use for:** Type checking, validation

16. What is NaN?
    **Answer:** NaN (Not a Number) represents:
    - **Definition:** Invalid mathematical operation result
    - **Type:** typeof NaN === "number"
    - **Properties:**
      - NaN !== NaN (only value not equal to itself)
      - Any operation with NaN returns NaN
    - **Examples:**
      ```javascript
      0 / 0              // NaN
      Math.sqrt(-1)      // NaN
      parseInt("abc")    // NaN
      Number("hello")    // NaN
      ```
    - **Checking:** Use Number.isNaN() or isNaN()
      ```javascript
      Number.isNaN(NaN)  // true
      isNaN(NaN)         // true
      ```
    - **Use Cases:** Error handling, validation

17. What is the difference between null and undefined?
    **Answer:** Key differences:
    - **Undefined:**
      - Default value of uninitialized variables
      - Default return of functions without return
      - Missing object properties
      - Explicitly: undefined
    - **Null:**
      - Intentional absence of any object value
      - Must be assigned explicitly
      - Represents "no value"
      - typeof null === "object" (bug)
    - **Examples:**
      ```javascript
      let x;              // undefined
      let y = null;       // null
      function f() {}     // returns undefined
      let obj = {};       // obj.prop is undefined
      ```
    - **Checking:**
      ```javascript
      x === undefined    // true
      y === null         // true
      x == y             // true (loose equality)
      x === y            // false (strict equality)
      ```

18. What is strict mode?
    **Answer:** Strict mode is a JavaScript feature:
    - **Purpose:** Enforce stricter parsing and error handling
    - **Activation:** "use strict"; at script/function start
    - **Key Changes:**
      - Eliminates silent errors (throws exceptions)
      - Disallows certain syntax (with statement)
      - Fixes common mistakes (octal literals)
      - Makes eval() safer
      - Prevents accidental global variables
      - Disallows duplicate parameter names
      - Makes this undefined in functions (not window)
    - **Example:**
      ```javascript
      "use strict";
      x = 10;  // ReferenceError (not declared)
      delete Object.prototype;  // TypeError
      function f(a, a) {}  // SyntaxError
      ```
    - **Benefits:** Better error detection, optimization, security

19. What are JavaScript keywords?
    **Answer:** Keywords are reserved words with special meaning:
    - **Cannot be used as identifiers** (variable names, etc.)
    - **Control Flow:** if, else, for, while, do, switch, case, break, continue, return
    - **Declarations:** var, let, const, function, class
    - **Boolean:** true, false
    - **Other:** this, new, typeof, instanceof, in, of, void, delete
    - **Async:** async, await, yield
    - **Exception:** try, catch, finally, throw
    - **Module:** import, export, from, as, default
    - **Example:**
      ```javascript
      let if = 5;  // SyntaxError
      let return = "hello";  // SyntaxError
      ```

20. What are reserved words in JavaScript?
    **Answer:** Reserved words are:
    - **Current Keywords:** Words currently used in JavaScript
    - **Future Reserved:** Words reserved for future use
    - **Cannot be used as:** Variable names, function names, etc.
    - **Categories:**
      - **Keywords:** if, else, for, while, etc.
      - **Future Reserved:** enum, implements, interface, package, private, protected, public, static, super
      - **Literals:** true, false, null, NaN, Infinity
      - **Strict Mode Reserved:** arguments, eval, let (in non-strict)
    - **Context Matters:** Some words are only reserved in specific contexts
    - **Best Practice:** Avoid all reserved words as identifiers

---

## 🏷️ 2. Variables & Scope (21–40)

21. What is a variable?
    **Answer:** A variable is a named storage location in memory:
    - **Purpose:** Store data values for later use
    - **Declaration:** Using var, let, or const
    - **Naming Rules:**
      - Must start with letter, $, or _
      - Can contain letters, numbers, $, _
      - Case-sensitive
      - Cannot be reserved words
    - **Example:**
      ```javascript
      let name = "John";
      const age = 25;
      var isActive = true;
      ```
    - **Best Practice:** Use const by default, let when reassignment needed

22. What is the difference between var, let, and const?
    **Answer:** Key differences:
    - **var (ES5):**
      - Function-scoped
      - Hoisted with undefined
      - Can be redeclared
      - Can be reassigned
      - No TDZ
    - **let (ES6):**
      - Block-scoped
      - Hoisted but in TDZ
      - Cannot be redeclared
      - Can be reassigned
      - Has TDZ
    - **const (ES6):**
      - Block-scoped
      - Hoisted but in TDZ
      - Cannot be redeclared
      - Cannot be reassigned
      - Has TDZ
      - Must be initialized
    - **Example:**
      ```javascript
      var x = 1; let y = 2; const z = 3;
      var x = 10;  // OK
      let y = 20;  // Error
      y = 20;      // OK
      z = 30;      // Error
      ```

23. What is variable hoisting?
    **Answer:** Hoisting is JavaScript's behavior of moving declarations to the top:
    - **What happens:** Declarations are moved to the top of their scope
    - **var:** Hoisted with undefined value
    - **let/const:** Hoisted but remain in TDZ
    - **Functions:** Function declarations are fully hoisted
    - **Example:**
      ```javascript
      console.log(x);  // undefined (not error)
      var x = 5;

      console.log(y);  // ReferenceError (TDZ)
      let y = 10;

      hoisted();  // Works
      function hoisted() { console.log("I'm hoisted"); }
      ```
    - **Note:** Only declarations are hoisted, not assignments

24. What is scope in JavaScript?
    **Answer:** Scope determines the accessibility of variables:
    - **Definition:** The context where values and expressions are visible
    - **Types:** Global, Function, Block, Lexical
    - **Purpose:** Prevent naming conflicts, control access
    - **Nested Scopes:** Inner scopes can access outer scopes
    - **Example:**
      ```javascript
      let global = "global";
      function outer() {
        let outerVar = "outer";
        function inner() {
          let innerVar = "inner";
          console.log(global);  // accessible
          console.log(outerVar); // accessible
          console.log(innerVar); // accessible
        }
      }
      ```

25. What is global scope?
    **Answer:** Global scope is the outermost scope:
    - **Definition:** Variables declared outside any function
    - **Accessibility:** Available throughout the entire program
    - **Browser:** Global variables become properties of window
    - **Node.js:** Global variables are properties of global
    - **Example:**
      ```javascript
      let globalVar = "I'm global";
      function test() {
        console.log(globalVar);  // accessible
      }
      ```
    - **Caution:** Avoid global variables (pollution, conflicts)

26. What is local scope?
    **Answer:** Local scope is within a function or block:
    - **Definition:** Variables declared inside a function/block
    - **Accessibility:** Only within that function/block
    - **Types:** Function scope, Block scope
    - **Example:**
      ```javascript
      function localScope() {
        let localVar = "I'm local";
        console.log(localVar);  // accessible
      }
      console.log(localVar);  // ReferenceError
      ```
    - **Benefit:** Encapsulation, prevents conflicts

27. What is block scope?
    **Answer:** Block scope is within curly braces {}:
    - **Definition:** Variables limited to a block (if, for, while, etc.)
    - **let/const:** Block-scoped
    - **var:** NOT block-scoped (function-scoped)
    - **Example:**
      ```javascript
      if (true) {
        let blockLet = "block scoped";
        var blockVar = "function scoped";
      }
      console.log(blockLet);  // ReferenceError
      console.log(blockVar);   // accessible (bad)
      ```
    - **ES6 Feature:** Introduced with let and const

28. What is function scope?
    **Answer:** Function scope is within a function:
    - **Definition:** Variables limited to a function
    - **var:** Function-scoped
    - **let/const:** Block-scoped within function
    - **Example:**
      ```javascript
      function functionScope() {
        var funcVar = "function scoped";
        if (true) {
          var stillFuncVar = "still function scoped";
        }
        console.log(stillFuncVar);  // accessible
      }
      ```
    - **Note:** var ignores block boundaries

29. What is lexical scope?
    **Answer:** Lexical scope is determined by where functions are defined:
    - **Definition:** Scope is determined at function definition time
    - **Static Scoping:** Variables resolved based on location in source code
    - **Nested Functions:** Can access variables from outer functions
    - **Example:**
      ```javascript
      function outer() {
        let x = 10;
        function inner() {
          console.log(x);  // Accesses outer's x (lexical)
        }
        inner();
      }
      ```
    - **Contrast:** Dynamic scope (rare in JS)

30. What is temporal dead zone (TDZ)?
    **Answer:** TDZ is the time between hoisting and initialization:
    - **Definition:** Period where variables exist but cannot be accessed
    - **Applies to:** let, const, and class declarations
    - **Start:** At the beginning of the block
    - **End:** When the declaration is reached
    - **Example:**
      ```javascript
      console.log(x);  // ReferenceError (TDZ)
      let x = 10;
      ```
    - **Purpose:** Prevent using variables before declaration
    - **var:** No TDZ (initialized with undefined)

31. What is shadowing?
    **Answer:** Shadowing is when a variable in an inner scope has the same name as one in an outer scope:
    - **Definition:** Inner variable "shadows" the outer one
    - **Effect:** Outer variable is inaccessible in the inner scope
    - **Example:**
      ```javascript
      let x = 10;
      function shadow() {
        let x = 20;  // Shadows outer x
        console.log(x);  // 20
      }
      shadow();
      console.log(x);  // 10
      ```
    - **Caution:** Can cause confusion, avoid when possible

32. What is illegal shadowing?
    **Answer:** Illegal shadowing occurs when shadowing violates rules:
    - **Cannot shadow:** let with var in same block
    - **Cannot shadow:** const with var in same block
    - **Can shadow:** var with let (but bad practice)
    - **Example:**
      ```javascript
      let x = 10;
      {
        var x = 20;  // SyntaxError (illegal)
      }

      var y = 10;
      {
        let y = 20;  // OK (but confusing)
      }
      ```
    - **Rule:** Cannot redeclare in same scope

33. What is variable redeclaration?
    **Answer:** Redeclaration is declaring a variable multiple times:
    - **var:** Can be redeclared (same scope)
    - **let/const:** Cannot be redeclared (same scope)
    - **Example:**
      ```javascript
      var x = 10;
      var x = 20;  // OK (x = 20)

      let y = 10;
      let y = 20;  // SyntaxError
      ```
    - **Best Practice:** Avoid redeclaration entirely

34. What is variable reassignment?
    **Answer:** Reassignment is changing a variable's value:
    - **var:** Can be reassigned
    - **let:** Can be reassigned
    - **const:** Cannot be reassigned (but object properties can change)
    - **Example:**
      ```javascript
      let x = 10;
      x = 20;  // OK

      const y = 10;
      y = 20;  // TypeError

      const obj = { a: 1 };
      obj.a = 2;  // OK (object is mutable)
      ```
    - **Note:** const objects are not immutable

35. What are closures?
    **Answer:** Closures are functions that remember their lexical environment:
    - **Definition:** Function + its lexical environment
    - **Key Feature:** Inner function can access outer function's variables even after outer returns
    - **Example:**
      ```javascript
      function outer(x) {
        return function inner(y) {
          return x + y;  // inner remembers x
        };
      }
      const add5 = outer(5);
      console.log(add5(3));  // 8
      ```
    - **Memory:** Closures keep variables in memory
    - **Use:** Data hiding, factories, callbacks

36. Why are closures important?
    **Answer:** Closures are crucial because:
    - **Data Privacy:** Create private variables
    - **State Preservation:** Maintain state between calls
    - **Function Factories:** Create specialized functions
    - **Callbacks:** Pass data to async operations
    - **Module Pattern:** Encapsulate functionality
    - **Event Handlers:** Preserve context
    - **Example:**
      ```javascript
      function counter() {
        let count = 0;  // Private
        return {
          increment: () => ++count,
          decrement: () => --count,
          getCount: () => count
        };
      }
      ```
    - **Foundation:** Many JS patterns rely on closures

37. What are practical uses of closures?
    **Answer:** Practical closure use cases:
    - **Data Hiding/Encapsulation:**
      ```javascript
      function createBankAccount() {
        let balance = 0;
        return {
          deposit: (amount) => balance += amount,
          withdraw: (amount) => balance -= amount,
          getBalance: () => balance
        };
      }
      ```
    - **Function Factories:**
      ```javascript
      function multiplier(factor) {
        return (number) => number * factor;
      }
      const double = multiplier(2);
      ```
    - **Event Handlers:**
      ```javascript
      buttons.forEach((btn, index) => {
        btn.onclick = () => console.log(index);
      });
      ```
    - **Memoization:** Cache results
    - **Partial Application:** Pre-fill arguments
    - **Module Pattern:** Create private/public API

38. What is scope chaining?
    **Answer:** Scope chain is the hierarchy of scopes:
    - **Definition:** Chain of nested scopes
    - **Resolution:** JavaScript searches up the chain for variables
    - **Order:** Local → Parent → Global
    - **Example:**
      ```javascript
      let global = "global";
      function outer() {
        let outer = "outer";
        function inner() {
          let inner = "inner";
          // Scope chain: inner → outer → global
        }
      }
      ```
    - **Performance:** Deeper chains = slower lookups
    - **Closures:** Maintain reference to outer scopes

39. What is memory allocation?
    **Answer:** Memory allocation is reserving space for variables:
    - **Stack Memory:**
      - Primitive values
      - Function calls
      - Fixed size
      - Fast allocation/deallocation
    - **Heap Memory:**
      - Objects and reference types
      - Dynamic size
      - Slower allocation
      - Manual cleanup (garbage collection)
    - **Example:**
      ```javascript
      let a = 10;        // Stack
      let obj = {};      // Heap (reference on stack)
      ```
    - **Management:** JavaScript handles automatically

40. How does garbage collection work?
    **Answer:** Garbage collection (GC) automatically reclaims memory:
    - **Purpose:** Free memory from unused objects
    - **Algorithms:**
      - **Reference Counting:** Count references (problem with cycles)
      - **Mark-and-Sweep:** Mark reachable objects, sweep unreachable
    - **Process:**
      1. Identify root objects (global, current scope)
      2. Mark all reachable objects from roots
      3. Sweep (delete) unmarked objects
    - **Modern GC:** Generational (young vs old objects)
    - **Memory Leaks:** Unintentionally keeping references
    - **Example:**
      ```javascript
      let obj = { data: "value" };
      obj = null;  // Eligible for GC
      ```

---

## ⚙️ 3. Functions (41–65)

41. What is a function?
    **Answer:** A function is a reusable block of code:
    - **Purpose:** Perform specific tasks, avoid code duplication
    - **Definition:** Using function keyword or arrow syntax
    - **Invocation:** Using function name with parentheses
    - **Parameters:** Input values
    - **Return Value:** Output (undefined if no return)
    - **Example:**
      ```javascript
      function greet(name) {
        return `Hello, ${name}!`;
      }
      greet("John");  // "Hello, John!"
      ```
    - **First-class:** Can be assigned, passed, returned

42. What are function declarations?
    **Answer:** Function declarations are named functions:
    - **Syntax:** function name() { }
    - **Hoisting:** Fully hoisted (can call before declaration)
    - **Named:** Has a function name
    - **Example:**
      ```javascript
      declared();  // Works (hoisted)
      function declared() {
        console.log("I'm declared");
      }
      ```
    - **Scope:** Function-scoped or block-scoped (strict mode)
    - **Use:** When you need hoisting or named functions

43. What are function expressions?
    **Answer:** Function expressions assign functions to variables:
    - **Syntax:** const name = function() { }
    - **Hoisting:** NOT hoisted (must declare before use)
    - **Can be:** Named or anonymous
    - **Example:**
      ```javascript
      const expressed = function() {
        console.log("I'm expressed");
      };
      expressed();  // Works
      ```
    - **Use:** When hoisting not needed, for callbacks
    - **Arrow Functions:** Modern function expressions

44. What are arrow functions?
    **Answer:** Arrow functions are concise function syntax (ES6):
    - **Syntax:** () => { } or () => expression
    - **Features:**
      - Shorter syntax
      - No this binding (lexical this)
      - No arguments object
      - Cannot be used as constructors
      - No super, new.target
    - **Examples:**
      ```javascript
      const add = (a, b) => a + b;
      const greet = name => `Hello ${name}`;
      const log = () => console.log("Hi");
      ```
    - **Best for:** Callbacks, short functions

45. What is the difference between arrow functions and regular functions?
    **Answer:** Key differences:
    - **this Binding:**
      - Arrow: Lexical (inherited from surrounding scope)
      - Regular: Dynamic (determined by call site)
    - **arguments Object:**
      - Arrow: No arguments object
      - Regular: Has arguments object
    - **Constructor:**
      - Arrow: Cannot use with new
      - Regular: Can be constructors
    - **super/prototype:**
      - Arrow: No super, no prototype
      - Regular: Has super, has prototype
    - **Syntax:** Arrow is more concise
    - **Example:**
      ```javascript
      const obj = {
        regular: function() { console.log(this); },
        arrow: () => console.log(this)
      };
      obj.regular();  // obj
      obj.arrow();    // window/global
      ```

46. What are anonymous functions?
    **Answer:** Anonymous functions have no name:
    - **Definition:** Functions without identifiers
    - **Use Cases:**
      - Callbacks
      - IIFEs
      - Function expressions
    - **Example:**
      ```javascript
      setTimeout(function() {
        console.log("Anonymous");
      }, 1000);

      const fn = function() { return 42; };
      ```
    - **Debugging:** Harder (no name in stack traces)
    - **Named vs Anonymous:** Named functions are better for debugging

47. What are callback functions?
    **Answer:** Callbacks are functions passed as arguments:
    - **Definition:** Function passed to another function
    - **Purpose:** Execute after some operation completes
    - **Synchronous:** Executed immediately
    - **Asynchronous:** Executed later (events, timers)
    - **Example:**
      ```javascript
      function processData(data, callback) {
        // Process data
        callback(result);
      }

      processData([1, 2, 3], (result) => {
        console.log(result);
      });
      ```
    - **Use:** Events, async operations, array methods

48. What are higher-order functions?
    **Answer:** Higher-order functions operate on functions:
    - **Definition:** Function that takes or returns a function
    - **Takes Function:** map, filter, reduce, forEach
    - **Returns Function:** Function factories, currying
    - **Examples:**
      ```javascript
      // Takes function
      [1, 2, 3].map(x => x * 2);

      // Returns function
      function createMultiplier(factor) {
        return (number) => number * factor;
      }
      const double = createMultiplier(2);
      ```
    - **Foundation:** Functional programming in JS

49. What is recursion?
    **Answer:** Recursion is a function calling itself:
    - **Definition:** Function that calls itself to solve sub-problems
    - **Components:**
      - Base case: Stopping condition
      - Recursive case: Function calls itself
    - **Example:**
      ```javascript
      function factorial(n) {
        if (n <= 1) return 1;  // Base case
        return n * factorial(n - 1);  // Recursive case
      }
      factorial(5);  // 120
      ```
    - **Use:** Tree traversal, divide and conquer
    - **Risk:** Stack overflow if no base case

50. What is function currying?
    **Answer:** Currying transforms functions with multiple arguments:
    - **Definition:** Convert f(a, b, c) to f(a)(b)(c)
    - **Purpose:** Create specialized functions
    - **Example:**
      ```javascript
      function curry(fn) {
        return function curried(...args) {
          if (args.length >= fn.length) {
            return fn(...args);
          }
          return (...more) => curried(...args, ...more);
        };
      }

      const add = (a, b, c) => a + b + c;
      const curriedAdd = curry(add);
      curriedAdd(1)(2)(3);  // 6
      ```
    - **Use:** Partial application, function composition

51. What is partial application?
    **Answer:** Partial application fixes some arguments:
    - **Definition:** Create new function with some arguments pre-filled
    - **Difference from Currying:** Currying is all single-argument functions
    - **Example:**
      ```javascript
      function multiply(a, b) {
        return a * b;
      }

      const double = multiply.bind(null, 2);
      double(5);  // 10

      // Or with arrow
      const triple = (b) => multiply(3, b);
      triple(5);  // 15
      ```
    - **Use:** Create specialized functions

52. What are pure functions?
    **Answer:** Pure functions have no side effects:
    - **Characteristics:**
      - Same input always gives same output
      - No side effects (no external state modification)
      - No dependencies on external state
    - **Example:**
      ```javascript
      // Pure
      function add(a, b) {
        return a + b;
      }

      // Impure
      let count = 0;
      function increment() {
        count++;  // Side effect
        return count;
      }
      ```
    - **Benefits:** Predictable, testable, easy to debug

53. What are impure functions?
    **Answer:** Impure functions have side effects:
    - **Characteristics:**
      - May modify external state
      - May depend on external state
      - Same input can give different output
    - **Examples:**
      ```javascript
      // Modifies external state
      let global = 0;
      function addToGlobal(x) {
        global += x;  // Side effect
      }

      // Depends on external state
      function getRandom() {
        return Math.random();  // Different each time
      }

      // I/O operations
      console.log("Side effect");
      ```
    - **Use:** Necessary for I/O, state management

54. What is function composition?
    **Answer:** Function composition combines functions:
    - **Definition:** Combine functions where output of one is input to next
    - **Mathematical:** f(g(x)) = compose(f, g)(x)
    - **Example:**
      ```javascript
      const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

      const addOne = x => x + 1;
      const double = x => x * 2;
      const composed = compose(double, addOne);
      composed(3);  // 8 (addOne first, then double)
      ```
    - **Use:** Build complex operations from simple ones

55. What are IIFEs?
    **Answer:** IIFEs are Immediately Invoked Function Expressions:
    - **Definition:** Function that runs immediately after definition
    - **Syntax:** (function() { })() or (() => { })()
    - **Purpose:** Create private scope, avoid global pollution
    - **Example:**
      ```javascript
      (function() {
        let private = "I'm private";
        console.log(private);
      })();

      // With parameters
      (function(name) {
        console.log(`Hello ${name}`);
      })("John");
      ```
    - **Use:** Module pattern, initialization code

56. What are first-class functions?
    **Answer:** First-class functions are treated as values:
    - **Characteristics:**
      - Can be assigned to variables
      - Can be passed as arguments
      - Can be returned from functions
      - Can be stored in data structures
    - **Example:**
      ```javascript
      // Assign to variable
      const fn = function() { };

      // Pass as argument
      setTimeout(fn, 1000);

      // Return from function
      function createFunction() {
        return function() { };
      }

      // Store in array
      const functions = [fn, createFunction()];
      ```
    - **JavaScript:** Functions are first-class citizens

57. What is the arguments object?
    **Answer:** arguments is an array-like object:
    - **Definition:** Contains all arguments passed to function
    - **Available:** In regular functions (not arrow functions)
    - **Properties:**
      - length: Number of arguments
      - Array-like but not an array
      - Has indices
    - **Example:**
      ```javascript
      function sum() {
        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
          total += arguments[i];
        }
        return total;
      }
      sum(1, 2, 3, 4);  // 10
      ```
    - **Modern:** Use rest parameters instead

58. What are rest parameters?
    **Answer:** Rest parameters collect multiple arguments:
    - **Syntax:** ...args
    - **Purpose:** Collect remaining arguments into array
    - **Example:**
      ```javascript
      function sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
      }
      sum(1, 2, 3);  // 6

      function greet(greeting, ...names) {
        names.forEach(name => console.log(`${greeting}, ${name}`));
      }
      ```
    - **Benefits:** Real array, works with arrow functions
    - **Position:** Must be last parameter

59. What are default parameters?
    **Answer:** Default parameters provide fallback values:
    - **Syntax:** function(param = defaultValue)
    - **Purpose:** Use default value if argument is undefined
    - **Example:**
      ```javascript
      function greet(name = "Guest") {
        console.log(`Hello, ${name}`);
      }
      greet();        // "Hello, Guest"
      greet("John");   // "Hello, John"
      ```
    - **Features:**
      - Can use expressions
      - Can use previous parameters
      - Only triggered by undefined
    - **Example:**
      ```javascript
      function createUser(name = "Anonymous", age = 18) {
        return { name, age };
      }
      ```

60. What is a generator function?
    **Answer:** Generator functions can pause and resume:
    - **Syntax:** function* name() { }
    - **Yield:** Pause execution and return value
    - **Return:** Iterator object
    - **Example:**
      ```javascript
      function* generateSequence() {
        yield 1;
        yield 2;
        yield 3;
      }

      const gen = generateSequence();
      gen.next().value;  // 1
      gen.next().value;  // 2
      gen.next().value;  // 3
      ```
    - **Use:** Lazy evaluation, infinite sequences

61. What is yield?
    **Answer:** yield pauses generator execution:
    - **Purpose:** Return value and pause function
    - **Can be:** yield value, yield* (delegate to another generator)
    - **Example:**
      ```javascript
      function* generator() {
        yield 1;
        yield 2;
        yield* [3, 4];  // Delegate
      }

      for (const value of generator()) {
        console.log(value);  // 1, 2, 3, 4
      }
      ```
    - **Return:** Object with value and done properties

62. What are async functions?
    **Answer:** Async functions simplify async code:
    - **Syntax:** async function name() { }
    - **Returns:** Promise
    - **Await:** Pause until promise resolves
    - **Example:**
      ```javascript
      async function fetchData() {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
      }
      ```
    - **Benefits:** Cleaner than promise chains
    - **Error Handling:** try/catch blocks

63. What is function borrowing?
    **Answer:** Function borrowing uses methods from other objects:
    - **Definition:** Use a method from one object on another
    - **Techniques:** call(), apply(), bind()
    - **Example:**
      ```javascript
      const person = {
        name: "John",
        greet() {
          console.log(`Hello, I'm ${this.name}`);
        }
      };

      const anotherPerson = { name: "Jane" };
      person.greet.call(anotherPerson);  // "Hello, I'm Jane"
      ```
    - **Use:** Reuse methods across objects

64. What are factory functions?
    **Answer:** Factory functions create objects:
    - **Definition:** Function that returns an object
    - **No new:** Don't use new keyword
    - **Example:**
      ```javascript
      function createPerson(name, age) {
        return {
          name,
          age,
          greet() {
            console.log(`Hi, I'm ${this.name}`);
          }
        };
      }

      const john = createPerson("John", 25);
      ```
    - **Benefits:** No this confusion, easier composition
    - **Alternative:** To constructor functions

65. What are constructor functions?
    **Answer:** Constructor functions create object instances:
    - **Definition:** Function used with new keyword
    - **Convention:** Capitalized name
    - **this:** Refers to new instance
    - **Example:**
      ```javascript
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }

      Person.prototype.greet = function() {
        console.log(`Hi, I'm ${this.name}`);
      };

      const john = new Person("John", 25);
      ```
    - **Modern:** Classes are syntactic sugar over constructors

---

## 🎯 4. Objects & Prototypes (66–90)

66. What is an object in JavaScript?
    **Answer:** An object is a collection of key-value pairs:
    - **Definition:** Dynamic collection of properties and methods
    - **Structure:** Keys (strings/symbols) map to values (any type)
    - **Reference Type:** Stored by reference, not value
    - **Example:**
      ```javascript
      const person = {
        name: "John",
        age: 25,
        greet: function() {
          console.log(`Hello, ${this.name}`);
        }
      };
      ```
    - **Everything is Object:** Arrays, functions, dates are objects
    - **Mutable:** Properties can be added, modified, deleted

67. How do you create objects?
    **Answer:** Multiple ways to create objects:
    - **Object Literal:**
      ```javascript
      const obj = { key: "value" };
      ```
    - **Object.create():**
      ```javascript
      const obj = Object.create(proto);
      ```
    - **Constructor Function:**
      ```javascript
      function Person(name) {
        this.name = name;
      }
      const john = new Person("John");
      ```
    - **Class (ES6):**
      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
      }
      ```
    - **Factory Function:**
      ```javascript
      function createObj() {
        return { key: "value" };
      }
      ```

68. What are object literals?
    **Answer:** Object literals are a concise way to create objects:
    - **Syntax:** { key: value, key2: value2 }
    - **Features:**
      - Shorthand properties: { name, age }
      - Computed properties: { [key]: value }
      - Method shorthand: { method() { } }
    - **Example:**
      ```javascript
      const name = "John";
      const age = 25;
      const person = {
        name,  // Shorthand
        age,
        greet() {  // Method shorthand
          console.log(`Hi, ${this.name}`);
        },
        ["dynamic" + "Key"]: "value"  // Computed
      };
      ```
    - **Most Common:** Preferred way to create objects

69. What is object destructuring?
    **Answer:** Destructuring extracts properties from objects:
    - **Syntax:** const { prop1, prop2 } = object
    - **Features:**
      - Extract multiple properties at once
      - Rename properties: { prop: newName }
      - Default values: { prop = defaultValue }
      - Nested destructuring
    - **Example:**
      ```javascript
      const person = { name: "John", age: 25, city: "NYC" };
      const { name, age } = person;
      const { name: firstName, country = "USA" } = person;
      ```
    - **Use:** Function parameters, extracting data

70. What is object cloning?
    **Answer:** Cloning creates a copy of an object:
    - **Purpose:** Create independent copy without reference
    - **Types:** Shallow copy vs Deep copy
    - **Methods:**
      - Spread operator: { ...obj }
      - Object.assign(): Object.assign({}, obj)
      - JSON methods: JSON.parse(JSON.stringify(obj))
      - structuredClone(): structuredClone(obj)
    - **Example:**
      ```javascript
      const original = { a: 1, b: 2 };
      const clone = { ...original };
      clone.a = 10;  // original.a still 1
      ```
    - **Important:** Reference types need deep copy

71. What is shallow copy?
    **Answer:** Shallow copy copies only the top level:
    - **Definition:** Copies object properties by reference
    - **Nested Objects:** Still reference the same nested objects
    - **Methods:** Spread, Object.assign(), Object.create()
    - **Example:**
      ```javascript
      const original = {
        a: 1,
        nested: { b: 2 }
      };
      const shallow = { ...original };
      shallow.nested.b = 10;  // original.nested.b also 10
      ```
    - **Problem:** Nested objects are shared
    - **Use:** When object has no nested objects

72. What is deep copy?
    **Answer:** Deep copy copies everything recursively:
    - **Definition:** Copies all nested objects and arrays
    - **Independent:** No shared references
    - **Methods:**
      - JSON: JSON.parse(JSON.stringify(obj))
      - structuredClone(): structuredClone(obj)
      - Lodash: _.cloneDeep(obj)
      - Manual: Recursive function
    - **Example:**
      ```javascript
      const original = {
        a: 1,
        nested: { b: 2 }
      };
      const deep = JSON.parse(JSON.stringify(original));
      deep.nested.b = 10;  // original.nested.b still 2
      ```
    - **Limitations:** JSON doesn't handle functions, undefined, symbols

73. What is Object.assign()?
    **Answer:** Object.assign() copies properties from source objects:
    - **Syntax:** Object.assign(target, ...sources)
    - **Purpose:** Merge objects, clone objects
    - **Shallow Copy:** Only copies by reference
    - **Example:**
      ```javascript
      const target = { a: 1 };
      const source = { b: 2 };
      Object.assign(target, source);
      // target = { a: 1, b: 2 }

      // Cloning
      const clone = Object.assign({}, original);
      ```
    - **Mutates:** Modifies the target object
    - **Order:** Later sources overwrite earlier ones

74. What is the spread operator?
    **Answer:** Spread operator expands iterables:
    - **Syntax:** ... (three dots)
    - **Objects:** { ...obj } - spreads properties
    - **Arrays:** [...arr] - spreads elements
    - **Example:**
      ```javascript
      // Objects
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      const merged = { ...obj1, ...obj2 };  // { a: 1, b: 2 }

      // Arrays
      const arr1 = [1, 2];
      const arr2 = [3, 4];
      const combined = [...arr1, ...arr2];  // [1, 2, 3, 4]
      ```
    - **Use:** Merging, cloning, function arguments

75. What are computed properties?
    **Answer:** Computed properties use expressions as keys:
    - **Syntax:** [expression]: value
    - **Dynamic:** Keys determined at runtime
    - **Example:**
      ```javascript
      const key = "dynamic";
      const obj = {
        [key]: "value",
        ["prop" + "Name"]: "computed"
      };
      // obj = { dynamic: "value", propName: "computed" }
      ```
    - **Use:** Dynamic property names, symbols

76. What is prototype?
    **Answer:** Prototype is the object from which other objects inherit:
    - **Definition:** Object that serves as template for other objects
    - **__proto__:** Link to prototype object
    - **prototype:** Property on constructor functions
    - **Chain:** Objects inherit from their prototype
    - **Example:**
      ```javascript
      const obj = {};
      obj.__proto__ === Object.prototype;  // true

      function Person() {}
      Person.prototype.greet = function() {};
      const john = new Person();
      john.greet();  // Inherited from prototype
      ```
    - **Core:** JavaScript's inheritance mechanism

77. What is prototype chaining?
    **Answer:** Prototype chain is the inheritance hierarchy:
    - **Definition:** Chain of objects linked by __proto__
    - **Lookup:** JavaScript searches up the chain for properties
    - **End:** Chain ends at Object.prototype, then null
    - **Example:**
      ```javascript
      const arr = [];
      arr.__proto__ === Array.prototype;
      arr.__proto__.__proto__ === Object.prototype;
      arr.__proto__.__proto__.__proto__ === null;
      ```
    - **Performance:** Deep chains can slow property access
    - **Inheritance:** How JavaScript implements inheritance

78. What is inheritance in JavaScript?
    **Answer:** Inheritance allows objects to acquire properties:
    - **Prototypal Inheritance:** Objects inherit from other objects
    - **Class Inheritance:** ES6 classes (syntactic sugar)
    - **Purpose:** Code reuse, hierarchical relationships
    - **Example:**
      ```javascript
      // Prototypal
      const parent = { greet() { console.log("Hi"); } };
      const child = Object.create(parent);
      child.greet();  // Inherited

      // Class
      class Animal {
        speak() { console.log("Sound"); }
      }
      class Dog extends Animal {
        speak() { console.log("Woof"); }
      }
      ```
    - **Benefits:** DRY principle, organized code

79. What is prototypal inheritance?
    **Answer:** Prototypal inheritance is JavaScript's inheritance model:
    - **Definition:** Objects inherit directly from other objects
    - **No Classes:** Traditional OOP uses classes, JS uses prototypes
    - **Mechanism:** __proto__ links objects to their prototype
    - **Example:**
      ```javascript
      const animal = {
        speak() { console.log("Sound"); }
      };
      const dog = Object.create(animal);
      dog.bark = function() { console.log("Woof"); };
      dog.speak();  // Inherited from animal
      ```
    - **Dynamic:** Can modify prototype at runtime
    - **Flexible:** More flexible than class-based inheritance

80. What is the **proto** property?
    **Answer:** __proto__ is the internal prototype link:
    - **Definition:** Property that points to object's prototype
    - **Deprecated:** Should use Object.getPrototypeOf() instead
    - **Example:**
      ```javascript
      const obj = {};
      obj.__proto__ === Object.prototype;  // true

      // Modern approach
      Object.getPrototypeOf(obj) === Object.prototype;  // true
      ```
    - **Chain:** Forms the prototype chain
    - **Note:** Not standard in all environments

81. What is Object.create()?
    **Answer:** Object.create() creates a new object with specified prototype:
    - **Syntax:** Object.create(proto, propertiesObject)
    - **Purpose:** Create object with specific prototype
    - **Example:**
      ```javascript
      const proto = { greet() { console.log("Hi"); } };
      const obj = Object.create(proto);
      obj.greet();  // Inherited from proto

      // With properties
      const person = Object.create(null, {
        name: { value: "John", enumerable: true }
      });
      ```
    - **Pure Prototypal:** Clean way to do prototypal inheritance
    - **Null Prototype:** Object.create(null) creates object with no prototype

82. What is Object.freeze()?
    **Answer:** Object.freeze() makes an object immutable:
    - **Effect:** Cannot add, delete, or modify properties
    - **Deep:** Only shallow freeze (nested objects still mutable)
    - **Example:**
      ```javascript
      const obj = { a: 1 };
      Object.freeze(obj);
      obj.a = 2;  // Fails silently (strict mode: TypeError)
      obj.b = 3;  // Fails
      delete obj.a;  // Fails
      ```
    - **Check:** Object.isFrozen(obj)
    - **Use:** Constants, configuration objects

83. What is Object.seal()?
    **Answer:** Object.seal() prevents adding/deleting properties:
    - **Effect:** Cannot add or delete properties
    - **Allows:** Can modify existing properties
    - **Example:**
      ```javascript
      const obj = { a: 1 };
      Object.seal(obj);
      obj.a = 2;  // Works
      obj.b = 3;  // Fails
      delete obj.a;  // Fails
      ```
    - **Check:** Object.isSealed(obj)
    - **Less Strict:** Than freeze

84. What is Object.keys()?
    **Answer:** Object.keys() returns enumerable property names:
    - **Syntax:** Object.keys(obj)
    - **Returns:** Array of strings (property names)
    - **Own Properties:** Only object's own properties (not inherited)
    - **Example:**
      ```javascript
      const obj = { a: 1, b: 2, c: 3 };
      Object.keys(obj);  // ["a", "b", "c"]
      ```
    - **Order:** Follows insertion order (for string keys)
    - **Use:** Iterating over object properties

85. What is Object.values()?
    **Answer:** Object.values() returns enumerable property values:
    - **Syntax:** Object.values(obj)
    - **Returns:** Array of values
    - **Own Properties:** Only object's own properties
    - **Example:**
      ```javascript
      const obj = { a: 1, b: 2, c: 3 };
      Object.values(obj);  // [1, 2, 3]
      ```
    - **Order:** Follows insertion order
    - **ES2017:** Introduced in ES2017

86. What is Object.entries()?
    **Answer:** Object.entries() returns key-value pairs:
    - **Syntax:** Object.entries(obj)
    - **Returns:** Array of [key, value] arrays
    - **Example:**
      ```javascript
      const obj = { a: 1, b: 2 };
      Object.entries(obj);  // [["a", 1], ["b", 2]]
      ```
    - **Use:** Convert object to Map, iterate
    - **ES2017:** Introduced in ES2017

87. What is the difference between freeze and seal?
    **Answer:** Key differences:
    - **Object.freeze():**
      - Cannot add properties
      - Cannot delete properties
      - Cannot modify properties
      - Makes object completely immutable
    - **Object.seal():**
      - Cannot add properties
      - Cannot delete properties
      - Can modify existing properties
      - Partial immutability
    - **Example:**
      ```javascript
      const frozen = { a: 1 };
      Object.freeze(frozen);
      frozen.a = 2;  // Fails

      const sealed = { a: 1 };
      Object.seal(sealed);
      sealed.a = 2;  // Works
      ```
    - **Use Case:** Freeze for constants, seal for fixed structure

88. What is the difference between == and ===?
    **Answer:** Equality comparison operators:
    - **== (Loose Equality):**
      - Type coercion before comparison
      - Can compare different types
      - Example: 5 == "5" → true
    - **=== (Strict Equality):**
      - No type coercion
      - Types must match
      - Example: 5 === "5" → false
    - **Examples:**
      ```javascript
      0 == false   // true
      0 === false  // false
      null == undefined  // true
      null === undefined // false
      [] == 0      // true
      [] === 0     // false
      ```
    - **Best Practice:** Always use ===

89. What is object mutability?
    **Answer:** Object mutability means objects can be changed:
    - **Definition:** Objects can be modified after creation
    - **Mutable:** Properties can be added, changed, deleted
    - **Reference:** Multiple variables can reference same object
    - **Example:**
      ```javascript
      const obj = { a: 1 };
      obj.a = 2;  // Modified
      obj.b = 3;  // Added
      delete obj.a;  // Deleted

      const ref = obj;
      ref.a = 10;  // obj.a also 10
      ```
    - **Immutability:** Can be achieved with freeze, const (reference only)
    - **Caution:** Unexpected mutations can cause bugs

90. What are property descriptors?
    **Answer:** Property descriptors define property behavior:
    - **Definition:** Object that describes a property's attributes
    - **Attributes:**
      - value: Property value
      - writable: Can value be changed?
      - enumerable: Shows in for...in, Object.keys()
      - configurable: Can property be deleted/modified?
      - get: Getter function
      - set: Setter function
    - **Example:**
      ```javascript
      const obj = {};
      Object.defineProperty(obj, 'name', {
        value: 'John',
        writable: false,
        enumerable: true,
        configurable: false
      });
      ```
    - **Methods:**
      - Object.defineProperty()
      - Object.defineProperties()
      - Object.getOwnPropertyDescriptor()

---

## 🏛️ 5. OOP in JavaScript (91–110)

91. What is Object-Oriented Programming?
    **Answer:** OOP is a programming paradigm based on objects:
    - **Definition:** Programming style using objects to design applications
    - **Core Concepts:**
      - Objects: Instances of classes/blueprints
      - Classes: Templates for creating objects
      - Encapsulation: Bundling data and methods
      - Inheritance: Acquiring properties from parent
      - Polymorphism: Same interface, different implementations
      - Abstraction: Hiding implementation details
    - **Benefits:** Code reuse, modularity, maintainability
    - **JavaScript:** Prototypal OOP (not classical like Java/C++)
    - **Example:**
      ```javascript
      class Car {
        constructor(brand) {
          this.brand = brand;
        }
        drive() {
          console.log(`${this.brand} is driving`);
        }
      }
      ```

92. What is encapsulation?
    **Answer:** Encapsulation bundles data and methods:
    - **Definition:** Hiding internal state and requiring interaction through methods
    - **Purpose:** Protect data, control access, reduce complexity
    - **JavaScript Implementation:**
      - Closures for private variables
      - Private fields (ES2022): #privateField
      - Getters/setters for controlled access
    - **Example:**
      ```javascript
      class BankAccount {
        #balance = 0;  // Private field

        deposit(amount) {
          if (amount > 0) this.#balance += amount;
        }

        getBalance() {
          return this.#balance;
        }
      }
      ```
    - **Benefits:** Data integrity, flexibility, easier maintenance

93. What is inheritance?
    **Answer:** Inheritance allows objects to acquire properties:
    - **Definition:** Child class inherits from parent class
    - **Purpose:** Code reuse, hierarchical relationships
    - **JavaScript:** Prototypal inheritance (extends keyword)
    - **Example:**
      ```javascript
      class Animal {
        speak() {
          console.log("Sound");
        }
      }

      class Dog extends Animal {
        speak() {
          console.log("Woof");
        }
      }

      const dog = new Dog();
      dog.speak();  // "Woof"
      ```
    - **Types:** Single inheritance (JS doesn't support multiple inheritance)
    - **Method:** Use extends keyword

94. What is polymorphism?
    **Answer:** Polymorphism allows same interface, different implementations:
    - **Definition:** Objects can take many forms
    - **Types:**
      - Method overriding: Child overrides parent method
      - Method overloading: Same name, different parameters (not native in JS)
    - **Example:**
      ```javascript
      class Shape {
        area() { return 0; }
      }

      class Circle extends Shape {
        constructor(radius) {
          super();
          this.radius = radius;
        }
        area() {
          return Math.PI * this.radius ** 2;
        }
      }

      class Square extends Shape {
        constructor(side) {
          super();
          this.side = side;
        }
        area() {
          return this.side ** 2;
        }
      }
      ```
    - **Benefit:** Flexible, extensible code

95. What is abstraction?
    **Answer:** Abstraction hides implementation details:
    - **Definition:** Showing only essential features, hiding complexity
    - **Purpose:** Reduce complexity, focus on what matters
    - **JavaScript Implementation:**
      - Classes with public interface
      - Private methods (ES2022: #privateMethod)
      - Abstract classes (using conventions)
    - **Example:**
      ```javascript
      class Database {
        #connect() {
          // Complex connection logic
        }

        query(sql) {
          this.#connect();
          // Execute query
        }
      }

      // User only sees query(), not #connect()
      ```
    - **Benefit:** Easier to use, maintain, and understand

96. What are classes in JavaScript?
    **Answer:** Classes are templates for creating objects:
    - **Definition:** Syntactic sugar over constructor functions
    - **Introduced:** ES6 (2015)
    - **Features:**
      - Constructor method
      - Instance methods
      - Static methods
      - Getters/setters
      - Inheritance (extends)
    - **Example:**
      ```javascript
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }

        greet() {
          console.log(`Hi, I'm ${this.name}`);
        }

        static createAnonymous() {
          return new Person("Anonymous", 0);
        }
      }
      ```
    - **Hoisting:** Not hoisted (unlike function declarations)

97. What are constructors?
    **Answer:** Constructors initialize object instances:
    - **Definition:** Special method called when creating object with new
    - **Purpose:** Initialize properties, set up object state
    - **Syntax:** constructor() in classes
    - **Example:**
      ```javascript
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      }

      const john = new Person("John", 25);
      ```
    - **Rules:**
      - One constructor per class
      - Can call parent constructor with super()
      - If not defined, default constructor is empty
    - **Old Way:** Constructor functions before ES6

98. What is the super keyword?
    **Answer:** super calls parent class methods/constructor:
    - **Purpose:** Access parent class functionality
    - **Uses:**
      - super() - call parent constructor
      - super.method() - call parent method
    - **Example:**
      ```javascript
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          console.log(`${this.name} makes a sound`);
        }
      }

      class Dog extends Animal {
        constructor(name, breed) {
          super(name);  // Call parent constructor
          this.breed = breed;
        }

        speak() {
          super.speak();  // Call parent method
          console.log("Woof!");
        }
      }
      ```
    - **Requirement:** Must call super() before using this in child constructor

99. What are static methods?
    **Answer:** Static methods belong to the class, not instances:
    - **Definition:** Methods called on class, not on instances
    - **Syntax:** static methodName() { }
    - **Purpose:** Utility functions, factory methods
    - **Example:**
      ```javascript
      class MathUtils {
        static add(a, b) {
          return a + b;
        }

        static multiply(a, b) {
          return a * b;
        }
      }

      MathUtils.add(5, 3);  // 8
      const utils = new MathUtils();
      utils.add(5, 3);  // TypeError
      ```
    - **Use Cases:** Helper functions, class-level operations

100. What are getters and setters?
    **Answer:** Getters/setters control property access:
    - **Definition:** Special methods for getting/setting property values
    - **Syntax:** get propertyName() { }, set propertyName(value) { }
    - **Purpose:** Validation, computed properties, side effects
    - **Example:**
      ```javascript
      class Person {
        constructor(name) {
          this._name = name;
        }

        get name() {
          return this._name.toUpperCase();
        }

        set name(value) {
          if (value.length > 0) {
            this._name = value;
          }
        }
      }

      const person = new Person("John");
      console.log(person.name);  // "JOHN"
      person.name = "Jane";
      ```
    - **Benefit:** Encapsulation, controlled access

101. What are private fields?
    **Answer:** Private fields are class properties only accessible within the class:
    - **Syntax:** #fieldName (hash prefix)
    - **Introduced:** ES2022
    - **Scope:** Only accessible within class body
    - **Example:**
      ```javascript
      class BankAccount {
        #balance = 0;

        deposit(amount) {
          if (amount > 0) {
            this.#balance += amount;
          }
        }

        getBalance() {
          return this.#balance;
        }
      }

      const account = new BankAccount();
      account.#balance = 100;  // SyntaxError (private)
      account.getBalance();  // Works
      ```
    - **Benefit:** True privacy, no external access

102. What is method overriding?
    **Answer:** Method overriding redefines parent method in child:
    - **Definition:** Child class provides its own implementation of parent method
    - **Purpose:** Customize behavior for specific subclass
    - **Example:**
      ```javascript
      class Animal {
        speak() {
          console.log("Animal sound");
        }
      }

      class Dog extends Animal {
        speak() {
          console.log("Woof");  // Overrides parent
        }
      }

      const dog = new Dog();
      dog.speak();  // "Woof"
      ```
    - **super:** Can still call parent method with super.speak()

103. What is method overloading?
    **Answer:** Method overloading allows same name with different parameters:
    - **Definition:** Multiple methods with same name but different parameters
    - **JavaScript:** Does NOT support native method overloading
    - **Workaround:** Use default parameters or check arguments
    - **Example:**
      ```javascript
      // Simulated overloading
      class Calculator {
        add(a, b = 0) {
          if (b === 0 && typeof a === 'object') {
            return a.reduce((sum, num) => sum + num, 0);
          }
          return a + b;
        }
      }

      const calc = new Calculator();
      calc.add(5, 3);      // 8
      calc.add([1, 2, 3]); // 6
      ```
    - **Note:** True overloading exists in Java, C++, not JavaScript

104. What is composition?
    **Answer:** Composition combines objects to create complex ones:
    - **Definition:** Building complex objects by combining simpler ones
    - **Principle:** "Has-a" relationship (vs inheritance "is-a")
    - **Benefits:** More flexible than inheritance, avoids deep hierarchies
    - **Example:**
      ```javascript
      class Engine {
        start() {
          console.log("Engine started");
        }
      }

      class Wheels {
        rotate() {
          console.log("Wheels rotating");
        }
      }

      class Car {
        constructor() {
          this.engine = new Engine();
          this.wheels = new Wheels();
        }

        drive() {
          this.engine.start();
          this.wheels.rotate();
        }
      }
      ```
    - **Quote:** "Composition over inheritance"

105. What is aggregation?
    **Answer:** Aggregation is a special type of composition:
    - **Definition:** "Has-a" relationship where child can exist independently
    - **Weak Relationship:** Parent doesn't own child completely
    - **Lifecycle:** Child can outlive parent
    - **Example:**
      ```javascript
      class Department {
        constructor(name) {
          this.name = name;
          this.employees = [];
        }

        addEmployee(employee) {
          this.employees.push(employee);
        }
      }

      class Employee {
        constructor(name) {
          this.name = name;
        }
      }

      const emp1 = new Employee("John");
      const dept = new Department("IT");
      dept.addEmployee(emp1);
      // emp1 can exist without dept
      ```
    - **Vs Composition:** Composition = strong ownership, Aggregation = weak ownership

106. What is association?
    **Answer:** Association is a relationship between objects:
    - **Definition:** Objects know about each other but don't own each other
    - **Types:** One-to-one, one-to-many, many-to-many
    - **Purpose:** Model relationships in domain
    - **Example:**
      ```javascript
      class Teacher {
        constructor(name) {
          this.name = name;
          this.students = [];
        }

        addStudent(student) {
          this.students.push(student);
          student.addTeacher(this);
        }
      }

      class Student {
        constructor(name) {
          this.name = name;
          this.teachers = [];
        }

        addTeacher(teacher) {
          this.teachers.push(teacher);
        }
      }
      ```
    - **Bidirectional:** Both objects know about each other

107. What are mixins?
    **Answer:** Mixins add functionality to classes:
    - **Definition:** Classes that provide methods to other classes
    - **Purpose:** Code reuse without inheritance
    - **JavaScript:** Multiple inheritance simulation
    - **Example:**
      ```javascript
      const Loggable = {
        log(message) {
          console.log(`[LOG] ${message}`);
        }
      };

      const Serializable = {
        serialize() {
          return JSON.stringify(this);
        }
      };

      class User {
        constructor(name) {
          this.name = name;
        }
      }

      Object.assign(User.prototype, Loggable, Serializable);

      const user = new User("John");
      user.log("User created");
      user.serialize();  // '{"name":"John"}'
      ```
    - **Benefit:** Add functionality from multiple sources

108. What is class inheritance?
    **Answer:** Class inheritance creates parent-child relationships:
    - **Definition:** Child class inherits properties and methods from parent
    - **Syntax:** class Child extends Parent { }
    - **Features:**
      - Inherits all parent methods
      - Can override methods
      - Can add new methods
      - Can call parent methods with super
    - **Example:**
      ```javascript
      class Vehicle {
        constructor(speed) {
          this.speed = speed;
        }

        move() {
          console.log(`Moving at ${this.speed} km/h`);
        }
      }

      class Car extends Vehicle {
        constructor(speed, brand) {
          super(speed);
          this.brand = brand;
        }

        honk() {
          console.log("Beep beep!");
        }
      }

      const car = new Car(60, "Toyota");
      car.move();  // Inherited
      car.honk();  // Own method
      ```
    - **Single Inheritance:** JavaScript only supports single inheritance

109. What are ES6 classes?
    **Answer:** ES6 classes are syntactic sugar for constructor functions:
    - **Introduced:** ES6 (2015)
    - **Under the Hood:** Still prototype-based
    - **Features:**
      - Class declaration: class Name { }
      - Constructor method
      - Instance methods
      - Static methods
      - Getters/setters
      - Inheritance with extends
      - super keyword
    - **Example:**
      ```javascript
      class Rectangle {
        constructor(width, height) {
          this.width = width;
          this.height = height;
        }

        get area() {
          return this.width * this.height;
        }

        static createSquare(size) {
          return new Rectangle(size, size);
        }
      }
      ```
    - **Benefits:** Cleaner syntax, familiar to OOP developers

110. What are OOP best practices?
    **Answer:** OOP best practices in JavaScript:
    - **Composition over Inheritance:** Prefer composition to avoid deep hierarchies
    - **Single Responsibility:** Each class should have one reason to change
    - **Encapsulation:** Use private fields, getters/setters
    - **DRY:** Don't Repeat Yourself - use inheritance/mixins
    - **SOLID Principles:**
      - S: Single Responsibility
      - O: Open/Closed (open for extension, closed for modification)
      - L: Liskov Substitution (subtypes must be substitutable)
      - I: Interface Segregation (small, specific interfaces)
      - D: Dependency Inversion (depend on abstractions)
    - **Naming:** Use clear, descriptive names
    - **Immutability:** Use const, Object.freeze() where appropriate
    - **Testing:** Write testable, loosely coupled code

---

## 🔄 6. Arrays & Array Methods (111–135)

111. What is an array?
    **Answer:** An array is an ordered collection of values:
    - **Definition:** Special object type for storing multiple values
    - **Indexed:** Elements accessed by numeric index (0-based)
    - **Dynamic:** Can grow and shrink dynamically
    - **Mixed Types:** Can hold different types of data
    - **Example:**
      ```javascript
      const arr = [1, "hello", true, { a: 1 }, [1, 2]];
      console.log(arr[0]);  // 1
      console.log(arr[1]);  // "hello"
      ```
    - **Methods:** map, filter, reduce, forEach, etc.
    - **Length:** arr.length property

112. How do you create arrays?
    **Answer:** Multiple ways to create arrays:
    - **Array Literal:**
      ```javascript
      const arr = [1, 2, 3];
      ```
    - **Array Constructor:**
      ```javascript
      const arr = new Array(1, 2, 3);
      const arr2 = new Array(3);  // [undefined, undefined, undefined]
      ```
    - **Array.from():**
      ```javascript
      const arr = Array.from("hello");  // ["h", "e", "l", "l", "o"]
      ```
    - **Array.of():**
      ```javascript
      const arr = Array.of(1, 2, 3);  // [1, 2, 3]
      ```
    - **Spread Operator:**
      ```javascript
      const arr = [...[1, 2, 3]];  // [1, 2, 3]
      ```

113. What is array destructuring?
    **Answer:** Destructuring extracts values from arrays:
    - **Syntax:** const [a, b] = array
    - **Features:**
      - Extract multiple values at once
      - Skip values: const [a, , b] = array
      - Default values: const [a = 1] = array
      - Rest operator: const [a, ...rest] = array
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3, 4, 5];
      const [first, second, ...rest] = numbers;
      console.log(first);   // 1
      console.log(second);  // 2
      console.log(rest);    // [3, 4, 5]
      ```
    - **Use:** Swapping variables, extracting data

114. What is map()?
    **Answer:** map() transforms each element:
    - **Syntax:** array.map(callback)
    - **Purpose:** Create new array by transforming each element
    - **Returns:** New array (same length)
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3, 4];
      const doubled = numbers.map(x => x * 2);
      console.log(doubled);  // [2, 4, 6, 8]
      ```
    - **Callback:** Receives element, index, array
    - **Immutable:** Doesn't modify original array

115. What is filter()?
    **Answer:** filter() selects elements that pass a test:
    - **Syntax:** array.filter(callback)
    - **Purpose:** Create new array with elements that pass condition
    - **Returns:** New array (possibly smaller)
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3, 4, 5, 6];
      const evens = numbers.filter(x => x % 2 === 0);
      console.log(evens);  // [2, 4, 6]
      ```
    - **Callback:** Return true to include, false to exclude
    - **Immutable:** Doesn't modify original array

116. What is reduce()?
    **Answer:** reduce() accumulates array values:
    - **Syntax:** array.reduce(callback, initialValue)
    - **Purpose:** Reduce array to single value
    - **Returns:** Single value (any type)
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3, 4];
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      console.log(sum);  // 10

      const product = numbers.reduce((acc, curr) => acc * curr, 1);
      console.log(product);  // 24
      ```
    - **Callback:** accumulator, current, index, array
    - **Versatile:** Sum, product, object transformation, etc.

117. What is forEach()?
    **Answer:** forEach() executes function for each element:
    - **Syntax:** array.forEach(callback)
    - **Purpose:** Iterate over array (side effects)
    - **Returns:** undefined
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3];
      numbers.forEach(x => console.log(x));
      // Output: 1, 2, 3
      ```
    - **Vs map:** forEach for side effects, map for transformation
    - **Cannot:** Break or skip (use for...of for that)

118. What is find()?
    **Answer:** find() returns first element that passes test:
    - **Syntax:** array.find(callback)
    - **Purpose:** Find first element matching condition
    - **Returns:** First matching element or undefined
    - **Example:**
      ```javascript
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" }
      ];
      const user = users.find(u => u.id === 2);
      console.log(user);  // { id: 2, name: "Jane" }
      ```
    - **Vs filter:** find returns one element, filter returns array
    - **Stops:** After finding first match

119. What is findIndex()?
    **Answer:** findIndex() returns index of first matching element:
    - **Syntax:** array.findIndex(callback)
    - **Purpose:** Find index of first element matching condition
    - **Returns:** Index or -1 if not found
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3, 4, 5];
      const index = numbers.findIndex(x => x > 3);
      console.log(index);  // 3
      ```
    - **Use:** When you need the index, not the value
    - **Similar to:** indexOf but with callback

120. What is some()?
    **Answer:** some() checks if any element passes test:
    - **Syntax:** array.some(callback)
    - **Purpose:** Check if at least one element passes condition
    - **Returns:** true or false
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3, 4, 5];
      const hasEven = numbers.some(x => x % 2 === 0);
      console.log(hasEven);  // true
      ```
    - **Short-circuits:** Stops after finding first true
    - **Vs every:** some = at least one, every = all

121. What is every()?
    **Answer:** every() checks if all elements pass test:
    - **Syntax:** array.every(callback)
    - **Purpose:** Check if all elements pass condition
    - **Returns:** true or false
    - **Example:**
      ```javascript
      const numbers = [2, 4, 6, 8];
      const allEven = numbers.every(x => x % 2 === 0);
      console.log(allEven);  // true
      ```
    - **Short-circuits:** Stops after finding first false
    - **Empty Array:** Returns true (vacuously true)

122. What is includes()?
    **Answer:** includes() checks if array contains value:
    - **Syntax:** array.includes(value, fromIndex)
    - **Purpose:** Check if value exists in array
    - **Returns:** true or false
    - **Example:**
      ```javascript
      const fruits = ["apple", "banana", "orange"];
      console.log(fruits.includes("banana"));  // true
      console.log(fruits.includes("grape"));   // false
      ```
    - **Uses SameValueZero:** Similar to === but handles NaN
    - **ES2016:** Introduced in ES2016

123. What is sort()?
    **Answer:** sort() sorts array elements:
    - **Syntax:** array.sort(compareFunction)
    - **Purpose:** Sort array in place
    - **Default:** Converts to strings and sorts alphabetically
    - **Example:**
      ```javascript
      const numbers = [3, 1, 4, 1, 5, 9];
      numbers.sort((a, b) => a - b);  // Ascending
      console.log(numbers);  // [1, 1, 3, 4, 5, 9]

      numbers.sort((a, b) => b - a);  // Descending
      ```
    - **Compare Function:**
      - Negative: a comes before b
      - Positive: b comes before a
      - Zero: no change
    - **Mutates:** Original array

124. What is reverse()?
    **Answer:** reverse() reverses array order:
    - **Syntax:** array.reverse()
    - **Purpose:** Reverse array in place
    - **Returns:** Reference to same array
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3, 4, 5];
      numbers.reverse();
      console.log(numbers);  // [5, 4, 3, 2, 1]
      ```
    - **Mutates:** Original array
    - **Immutable Version:** Use toReversed() (ES2023)

125. What is splice()?
    **Answer:** splice() adds/removes elements:
    - **Syntax:** array.splice(start, deleteCount, ...items)
    - **Purpose:** Add/remove elements from array
    - **Returns:** Array of removed elements
    - **Example:**
      ```javascript
      const arr = [1, 2, 3, 4, 5];
      arr.splice(2, 1);  // Remove 1 element at index 2
      console.log(arr);  // [1, 2, 4, 5]

      arr.splice(2, 0, 3);  // Insert 3 at index 2
      console.log(arr);  // [1, 2, 3, 4, 5]
      ```
    - **Mutates:** Original array
    - **Versatile:** Can add, remove, or replace

126. What is slice()?
    **Answer:** slice() extracts portion of array:
    - **Syntax:** array.slice(start, end)
    - **Purpose:** Create new array from portion of original
    - **Returns:** New array (shallow copy)
    - **Example:**
      ```javascript
      const arr = [1, 2, 3, 4, 5];
      const sliced = arr.slice(1, 4);
      console.log(sliced);  // [2, 3, 4]
      console.log(arr);     // [1, 2, 3, 4, 5] (unchanged)
      ```
    - **End Exclusive:** Doesn't include end index
    - **Immutable:** Doesn't modify original array

127. What is concat()?
    **Answer:** concat() merges arrays:
    - **Syntax:** array.concat(...arrays)
    - **Purpose:** Combine arrays into new array
    - **Returns:** New array
    - **Example:**
      ```javascript
      const arr1 = [1, 2];
      const arr2 = [3, 4];
      const merged = arr1.concat(arr2);
      console.log(merged);  // [1, 2, 3, 4]
      ```
    - **Also Accepts:** Values to add
    - **Immutable:** Doesn't modify original arrays
    - **Modern:** Use spread operator [...arr1, ...arr2]

128. What is flat()?
    **Answer:** flat() flattens nested arrays:
    - **Syntax:** array.flat(depth)
    - **Purpose:** Flatten nested arrays into single array
    - **Default Depth:** 1
    - **Example:**
      ```javascript
      const nested = [1, [2, [3, [4]]]];
      const flat1 = nested.flat();     // [1, 2, [3, [4]]]
      const flat2 = nested.flat(2);    // [1, 2, 3, [4]]
      const flatAll = nested.flat(Infinity);  // [1, 2, 3, 4]
      ```
    - **ES2019:** Introduced in ES2019
    - **Use:** Working with nested data structures

129. What is flatMap()?
    **Answer:** flatMap() maps then flattens:
    - **Syntax:** array.flatMap(callback)
    - **Purpose:** Map each element, then flatten result
    - **Equivalent:** array.map().flat(1)
    - **Example:**
      ```javascript
      const sentences = ["Hello world", "JavaScript is great"];
      const words = sentences.flatMap(s => s.split(" "));
      console.log(words);  // ["Hello", "world", "JavaScript", "is", "great"]
      ```
    - **Efficient:** More efficient than map + flat
    - **ES2019:** Introduced in ES2019

130. What is Array.from()?
    **Answer:** Array.from() creates array from iterable:
    - **Syntax:** Array.from(iterable, mapFn)
    - **Purpose:** Convert array-like objects to arrays
    - **Example:**
      ```javascript
      const str = "hello";
      const arr = Array.from(str);  // ["h", "e", "l", "l", "o"]

      const nodeList = document.querySelectorAll("div");
      const arr2 = Array.from(nodeList);

      const set = new Set([1, 2, 3]);
      const arr3 = Array.from(set);  // [1, 2, 3]
      ```
    - **Map Function:** Optional second parameter
    - **Array-like:** Arguments, NodeList, etc.

131. What is Array.of()?
    **Answer:** Array.of() creates array from arguments:
    - **Syntax:** Array.of(...elements)
    - **Purpose:** Create array from variable number of arguments
    - **Vs Constructor:** Handles single number differently
    - **Example:**
      ```javascript
      Array.of(1, 2, 3);  // [1, 2, 3]
      Array.of(3);        // [3]
      new Array(3);       // [undefined, undefined, undefined]
      ```
    - **ES2015:** Introduced in ES2015
    - **Consistent:** Always creates array with given elements

132. What is the difference between slice and splice?
    **Answer:** Key differences:
    - **slice():**
      - Extracts portion of array
      - Returns new array
      - Doesn't modify original
      - Syntax: slice(start, end)
    - **splice():**
      - Adds/removes elements
      - Returns removed elements
      - Modifies original array
      - Syntax: splice(start, deleteCount, ...items)
    - **Example:**
      ```javascript
      const arr = [1, 2, 3, 4, 5];
      const sliced = arr.slice(1, 3);  // [2, 3], arr unchanged
      const spliced = arr.splice(1, 2); // [2, 3], arr = [1, 4, 5]
      ```

133. What is the difference between map and forEach?
    **Answer:** Key differences:
    - **map():**
      - Transforms each element
      - Returns new array
      - Chainable
      - Use when you need transformed array
    - **forEach():**
      - Executes function for each element
      - Returns undefined
      - Not chainable
      - Use for side effects
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3];
      const doubled = numbers.map(x => x * 2);  // [2, 4, 6]
      numbers.forEach(x => console.log(x));      // logs each, returns undefined
      ```

134. What is the difference between filter and find?
    **Answer:** Key differences:
    - **filter():**
      - Returns all matching elements
      - Returns array
      - Returns empty array if no match
    - **find():**
      - Returns first matching element
      - Returns single element
      - Returns undefined if no match
    - **Example:**
      ```javascript
      const numbers = [1, 2, 3, 4, 5];
      const evens = numbers.filter(x => x % 2 === 0);  // [2, 4]
      const firstEven = numbers.find(x => x % 2 === 0); // 2
      ```

135. How do you remove duplicates from an array?
    **Answer:** Multiple ways to remove duplicates:
    - **Using Set:**
      ```javascript
      const arr = [1, 2, 2, 3, 3, 4];
      const unique = [...new Set(arr)];  // [1, 2, 3, 4]
      ```
    - **Using filter():**
      ```javascript
      const unique = arr.filter((item, index) => arr.indexOf(item) === index);
      ```
    - **Using reduce():**
      ```javascript
      const unique = arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
      }, []);
      ```
    - **Using forEach():**
      ```javascript
      const unique = [];
      arr.forEach(item => {
        if (!unique.includes(item)) unique.push(item);
      });
      ```
    - **Best Practice:** Use Set for simplicity and performance

---

## ⏳ 7. Execution Context & Hoisting (136–150)

136. What is Execution Context?
    **Answer:** Execution Context is the environment where code is executed:
    - **Definition:** Abstract concept that holds information about code execution
    - **Contains:**
      - Variable Environment (variables, functions, arguments)
      - Scope Chain (access to outer scopes)
      - this binding (reference to current object)
    - **Types:**
      - Global Execution Context
      - Function Execution Context
      - Eval Execution Context (rarely used)
    - **Lifecycle:** Created when code enters a scope, destroyed when it exits
    - **Example:**
      ```javascript
      // Global Execution Context
      var globalVar = "global";

      function myFunction() {
        // Function Execution Context
        var localVar = "local";
      }
      ```

137. What are the phases of Execution Context?
    **Answer:** Execution Context has two phases:
    - **Creation Phase:**
      - Create Variable Object (VO)
      - Create Scope Chain
      - Determine this value
      - Hoist variables and functions
    - **Execution Phase:**
      - Execute code line by line
      - Assign values to variables
      - Execute function calls
    - **Example:**
      ```javascript
      function example() {
        console.log(x);  // undefined (hoisted)
        var x = 10;
        console.log(x);  // 10
      }
      ```
    - **Order:** Creation always happens before execution

138. What is the Global Execution Context?
    **Answer:** Global Execution Context is the default context:
    - **Definition:** Context created when JavaScript starts running
    - **Created:** Before any code executes
    - **Contains:**
      - Global object (window in browsers, global in Node.js)
      - this points to global object
      - Global variables and functions
    - **Properties:**
      - Only one global context per program
      - Created at the start
      - Destroyed when program ends
    - **Example:**
      ```javascript
      // In Global Execution Context
      var x = 10;
      function foo() { }
      console.log(this === window);  // true (browser)
      ```

139. What is Function Execution Context?
    **Answer:** Function Execution Context is created for each function call:
    - **Definition:** Context created when a function is called
    - **Created:** Every time a function is invoked
    - **Contains:**
      - Arguments object
      - Local variables
      - this binding
      - Scope chain (access to outer scopes)
    - **Properties:**
      - New context for each function call
      - Created when function is called
      - Destroyed when function returns
    - **Example:**
      ```javascript
      function outer() {
        var x = 10;
        function inner() {
          var y = 20;  // New Function Execution Context
        }
        inner();
      }
      outer();
      ```

140. What is the Call Stack?
    **Answer:** Call Stack manages execution contexts:
    - **Definition:** Stack data structure that tracks function execution
    - **Purpose:** Manage order of function execution
    - **LIFO:** Last In, First Out
    - **Process:**
      1. Push context when function is called
      2. Pop context when function returns
    - **Example:**
      ```javascript
      function first() {
        second();
      }
      function second() {
        third();
      }
      function third() {
        console.log("Stack trace");
      }
      first();
      // Stack: [global, first, second, third]
      ```
    - **Stack Overflow:** When stack exceeds memory limit

141. What is Hoisting?
    **Answer:** Hoisting moves declarations to the top:
    - **Definition:** JavaScript moves declarations to top of their scope
    - **What's Hoisted:**
      - var declarations (initialized with undefined)
      - Function declarations (fully hoisted)
      - let/const (hoisted but in TDZ)
    - **What's NOT Hoisted:**
      - Function expressions
      - Arrow functions
      - Variable assignments
    - **Example:**
      ```javascript
      console.log(x);  // undefined (hoisted)
      var x = 10;

      hoisted();  // Works (fully hoisted)
      function hoisted() { console.log("I'm hoisted"); }
      ```
    - **Note:** Only declarations are hoisted, not assignments

142. How does hoisting work with var?
    **Answer:** var hoisting initializes with undefined:
    - **Behavior:** Declaration moved to top, initialized with undefined
    - **Result:** Can access variable before declaration (but value is undefined)
    - **Example:**
      ```javascript
      console.log(x);  // undefined (not error)
      var x = 10;
      console.log(x);  // 10
      ```
    - **Equivalent to:**
      ```javascript
      var x;  // Hoisted
      console.log(x);  // undefined
      x = 10;
      console.log(x);  // 10
      ```
    - **Problem:** Can lead to unexpected behavior

143. How does hoisting work with let and const?
    **Answer:** let/const hoisting places variables in TDZ:
    - **Behavior:** Declaration moved to top, but not initialized
    - **TDZ:** Temporal Dead Zone - cannot access before declaration
    - **Result:** ReferenceError if accessed before declaration
    - **Example:**
      ```javascript
      console.log(x);  // ReferenceError (TDZ)
      let x = 10;
      console.log(x);  // 10
      ```
    - **Benefit:** Prevents using variables before declaration
    - **Safer:** Than var hoisting

144. What is the Temporal Dead Zone?
    **Answer:** TDZ is the period between hoisting and initialization:
    - **Definition:** Time from hoisting to actual declaration
    - **Applies to:** let, const, and class declarations
    - **Behavior:** Variables exist but cannot be accessed
    - **Example:**
      ```javascript
      {
        // TDZ starts
        console.log(x);  // ReferenceError
        let x = 10;  // TDZ ends
        console.log(x);  // 10
      }
      ```
    - **Purpose:** Prevent using variables before declaration
    - **var:** No TDZ (initialized with undefined)

145. What is Lexical Environment?
    **Answer:** Lexical Environment defines the scope:
    - **Definition:** Internal data structure that tracks variable bindings
    - **Components:**
      - Environment Record (variables, functions)
      - Reference to outer Lexical Environment (parent scope)
    - **Created:** When code enters a scope
    - **Example:**
      ```javascript
      function outer() {
        let x = 10;
        function inner() {
          // Inner has access to outer's Lexical Environment
          console.log(x);
        }
      }
      ```
    - **Static:** Determined at code writing time (lexical scoping)
    - **Closures:** Maintain reference to outer Lexical Environment

146. What is Scope Chain?
    **Answer:** Scope Chain is the hierarchy of scopes:
    - **Definition:** Chain of Lexical Environments
    - **Purpose:** Resolve variable references
    - **Process:**
      1. Search current scope
      2. If not found, search parent scope
      3. Continue up to global scope
    - **Example:**
      ```javascript
      let global = "global";
      function outer() {
        let outer = "outer";
        function inner() {
          let inner = "inner";
          // Scope chain: inner → outer → global
        }
      }
      ```
    - **Performance:** Deeper chains = slower lookups

147. What is the creation phase?
    **Answer:** Creation phase prepares execution context:
    - **Definition:** First phase of execution context creation
    - **Steps:**
      1. Create Variable Object (VO)
      2. Create Scope Chain
      3. Determine this value
    - **Hoisting:** Happens during creation phase
    - **Example:**
      ```javascript
      function example(a, b) {
        // Creation phase:
        // - VO: { a: 10, b: 20, c: undefined }
        // - Scope chain created
        // - this determined
        var c;
        c = a + b;
      }
      example(10, 20);
      ```
    - **Before Execution:** No code runs yet

148. What is the execution phase?
    **Answer:** Execution phase runs the code:
    - **Definition:** Second phase of execution context
    - **Steps:**
      1. Execute code line by line
      2. Assign values to variables
      3. Execute function calls
      4. Create new execution contexts for functions
    - **Example:**
      ```javascript
      function example() {
        var x;
        // Execution phase:
        x = 10;  // Assignment
        console.log(x);  // Execution
      }
      ```
    - **After Creation:** All setup is done
    - **Dynamic:** Happens at runtime

149. What is memory creation in JavaScript?
    **Answer:** Memory creation allocates space for variables:
    - **Stack Memory:**
      - Primitive values
      - Function calls (execution contexts)
      - Fixed size, fast allocation
    - **Heap Memory:**
      - Objects and reference types
      - Dynamic size, slower allocation
    - **Process:**
      1. Variable declared → memory allocated
      2. Value assigned → memory filled
      3. Variable out of scope → memory freed (GC)
    - **Example:**
      ```javascript
      let a = 10;        // Stack
      let obj = {};      // Heap (reference on stack)
      function fn() {    // Stack (execution context)
        let b = 20;
      }
      ```
    - **Automatic:** JavaScript handles memory management

150. How does JavaScript execute code internally?
    **Answer:** JavaScript execution process:
    1. **Parsing:**
       - Code parsed into AST (Abstract Syntax Tree)
       - Syntax errors caught here
    2. **Compilation:**
       - JIT compilation to machine code
       - Optimization of hot code paths
    3. **Execution:**
       - Global Execution Context created
       - Code executed line by line
       - Function calls create new contexts
    4. **Event Loop:**
       - Manages async operations
       - Processes callback queue
    - **Example Flow:**
      ```javascript
      console.log("1");
      setTimeout(() => console.log("2"), 0);
      console.log("3");
      // Output: 1, 3, 2
      ```
    - **Single-threaded:** JavaScript runs on one thread

---

## 🔥 8. This, Call, Apply & Bind (151–165)

151. What is the this keyword?
    **Answer:** this refers to the execution context:
    - **Definition:** Special keyword that references the current execution context
    - **Dynamic:** Value determined by how function is called
    - **Binding Rules:**
      1. Default binding: global object (undefined in strict mode)
      2. Implicit binding: object before the dot
      3. Explicit binding: call, apply, bind
      4. new binding: newly created object
      5. Arrow functions: lexical this
    - **Example:**
      ```javascript
      function showThis() {
        console.log(this);
      }
      showThis();  // window/global (or undefined in strict mode)
      ```
    - **Context:** Changes based on call site

152. How does this work in global scope?
    **Answer:** In global scope, this refers to global object:
    - **Browser:** this = window
    - **Node.js:** this = global
    - **Strict Mode:** this = undefined
    - **Example:**
      ```javascript
      // Non-strict mode
      console.log(this);  // window (browser) or global (Node.js)

      // Strict mode
      "use strict";
      console.log(this);  // undefined
      ```
    - **Global Functions:** this also refers to global object
    - **Important:** Different behavior in strict mode

153. How does this work in objects?
    **Answer:** In object methods, this refers to the object:
    - **Implicit Binding:** this points to object before the dot
    - **Example:**
      ```javascript
      const person = {
        name: "John",
        greet() {
          console.log(this.name);  // "John"
        }
      };
      person.greet();
      ```
    - **Nested Objects:** this refers to immediate parent
    - **Method as Callback:** Loses this binding
    - **Example:**
      ```javascript
      const person = {
        name: "John",
        greet() {
          console.log(this.name);
        }
      };
      const greet = person.greet;
      greet();  // undefined (this lost)
      ```

154. How does this work in arrow functions?
    **Answer:** Arrow functions have lexical this:
    - **Definition:** this is inherited from surrounding scope
    - **No Dynamic Binding:** call, apply, bind don't affect arrow functions
    - **Example:**
      ```javascript
      const obj = {
        name: "John",
        regular: function() {
          console.log(this.name);  // "John"
        },
        arrow: () => {
          console.log(this.name);  // undefined (lexical)
        }
      };
      obj.regular();  // "John"
      obj.arrow();    // undefined
      ```
    - **Use Case:** Preserve this in callbacks
    - **Cannot:** Use as constructors

155. What is explicit binding?
    **Answer:** Explicit binding manually sets this:
    - **Definition:** Using call, apply, or bind to set this
    - **Methods:** call(), apply(), bind()
    - **Example:**
      ```javascript
      function greet() {
        console.log(`Hello, ${this.name}`);
      }

      const person = { name: "John" };
      greet.call(person);  // "Hello, John"
      greet.apply(person); // "Hello, John"
      const bound = greet.bind(person);
      bound();  // "Hello, John"
      ```
    - **Purpose:** Override default this binding
    - **Use Cases:** Function borrowing, method sharing

156. What is implicit binding?
    **Answer:** Implicit binding sets this via object context:
    - **Definition:** this determined by object before the dot
    - **Rule:** When function called as object method
    - **Example:**
      ```javascript
      const person = {
        name: "John",
        greet() {
          console.log(`Hello, ${this.name}`);
        }
      };
      person.greet();  // this = person
      ```
    - **Lost When:**
      - Function assigned to variable
      - Passed as callback
      - Called without object context
    - **Fix:** Use bind or arrow functions

157. What is call()?
    **Answer:** call() invokes function with specified this:
    - **Syntax:** function.call(thisArg, arg1, arg2, ...)
    - **Purpose:** Call function with specific this and arguments
    - **Example:**
      ```javascript
      function greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
      }

      const person = { name: "John" };
      greet.call(person, "Hello", "!");  // "Hello, John!"
      ```
    - **Immediate Execution:** Function called immediately
    - **Arguments:** Passed individually

158. What is apply()?
    **Answer:** apply() invokes function with this and array of arguments:
    - **Syntax:** function.apply(thisArg, [arg1, arg2, ...])
    - **Purpose:** Call function with specific this and array of arguments
    - **Example:**
      ```javascript
      function greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
      }

      const person = { name: "John" };
      greet.apply(person, ["Hello", "!"]);  // "Hello, John!"
      ```
    - **Immediate Execution:** Function called immediately
    - **Arguments:** Passed as array
    - **Use Case:** When arguments are in array

159. What is bind()?
    **Answer:** bind() creates new function with bound this:
    - **Syntax:** function.bind(thisArg, arg1, arg2, ...)
    - **Purpose:** Create new function with permanent this binding
    - **Returns:** New function (doesn't execute immediately)
    - **Example:**
      ```javascript
      function greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
      }

      const person = { name: "John" };
      const boundGreet = greet.bind(person, "Hello", "!");
      boundGreet();  // "Hello, John!"
      ```
    - **Permanent:** this cannot be changed
    - **Partial Application:** Can pre-fill arguments

160. What is the difference between call, apply, and bind?
    **Answer:** Key differences:
    - **call():**
      - Executes immediately
      - Arguments passed individually
      - Syntax: fn.call(this, arg1, arg2)
    - **apply():**
      - Executes immediately
      - Arguments passed as array
      - Syntax: fn.apply(this, [arg1, arg2])
    - **bind():**
      - Returns new function
      - Doesn't execute immediately
      - Arguments can be pre-filled
      - Syntax: const bound = fn.bind(this, arg1)
    - **Example:**
      ```javascript
      function add(a, b) { return a + b + this.c; }
      const obj = { c: 10 };

      add.call(obj, 5, 3);      // 18 (immediate)
      add.apply(obj, [5, 3]);   // 18 (immediate)
      const bound = add.bind(obj, 5);
      bound(3);                  // 18 (later)
      ```

161. What is hard binding?
    **Answer:** Hard binding permanently sets this:
    - **Definition:** Using bind() to create permanent this binding
    - **Cannot Be Changed:** Even with call or apply
    - **Example:**
      ```javascript
      function greet() {
        console.log(this.name);
      }

      const person1 = { name: "John" };
      const person2 = { name: "Jane" };

      const hardBound = greet.bind(person1);
      hardBound();  // "John"
      hardBound.call(person2);  // Still "John" (hard bound)
      ```
    - **Use Case:** Preserve this in callbacks
    - **Strong:** Overrides all other binding rules

162. What is soft binding?
    **Answer:** Soft binding allows this to be overridden:
    - **Definition:** Custom binding that can be overridden by explicit binding
    - **Not Built-in:** Must implement manually
    - **Example:**
      ```javascript
      if (!Function.prototype.softBind) {
        Function.prototype.softBind = function(obj) {
          const fn = this;
          const bound = function(...args) {
            return fn.apply((!this || this === window) ? obj : this, args);
          };
          bound.prototype = Object.create(fn.prototype);
          return bound;
        };
      }
      ```
    - **Vs Hard Binding:** Can still be overridden
    - **Use Case:** Default this with override option

163. What is function borrowing?
    **Answer:** Function borrowing uses methods from other objects:
    - **Definition:** Using a method from one object on another
    - **Techniques:** call(), apply(), bind()
    - **Example:**
      ```javascript
      const person = {
        name: "John",
        greet() {
          console.log(`Hello, ${this.name}`);
        }
      };

      const anotherPerson = { name: "Jane" };
      person.greet.call(anotherPerson);  // "Hello, Jane"
      ```
    - **Use Case:** Reuse methods without inheritance
    - **Benefit:** Code reuse, flexibility

164. What is event binding?
    **Answer:** Event binding attaches this to event handlers:
    - **Definition:** Ensuring this refers to correct object in event handlers
    - **Problem:** this in event handlers refers to element, not object
    - **Solutions:**
      - bind()
      - Arrow functions
      - Self pattern
    - **Example:**
      ```javascript
      class Button {
        constructor() {
          this.count = 0;
          this.button = document.querySelector("button");
          this.button.addEventListener("click", this.handleClick.bind(this));
          // or
          this.button.addEventListener("click", () => this.handleClick());
        }

        handleClick() {
          this.count++;
          console.log(this.count);
        }
      }
      ```
    - **Important:** Common source of bugs

165. What are common this-related interview questions?
    **Answer:** Common this interview questions:
    - **What does this refer to in different contexts?**
      - Global, object, function, arrow function, constructor
    - **How to fix this in callbacks?**
      - Use bind(), arrow functions, or self pattern
    - **What's the difference between call, apply, and bind?**
      - call/apply execute immediately, bind returns function
    - **How does this work in arrow functions?**
      - Lexical scoping, no dynamic binding
    - **What is the new binding?**
      - this refers to newly created object
    - **Example Question:**
      ```javascript
      const obj = {
        value: 10,
        getValue: function() {
          return this.value;
        },
        getArrow: () => this.value
      };
      console.log(obj.getValue());  // 10
      console.log(obj.getArrow());  // undefined
      ```

---

## ⚡ 9. Asynchronous JavaScript (166–190)

166. What is synchronous programming?
    **Answer:** Synchronous programming executes code sequentially:
    - **Definition:** Code executes line by line, blocking until complete
    - **Behavior:** Each operation waits for previous to finish
    - **Example:**
      ```javascript
      console.log("1");
      console.log("2");
      console.log("3");
      // Output: 1, 2, 3 (in order)
      ```
    - **Blocking:** Long operations block entire program
    - **Simple:** Easier to understand and debug
    - **Problem:** Not suitable for I/O operations

167. What is asynchronous programming?
    **Answer:** Asynchronous programming allows non-blocking execution:
    - **Definition:** Code can start operations and continue without waiting
    - **Behavior:** Operations run in background, callbacks handle results
    - **Example:**
      ```javascript
      console.log("1");
      setTimeout(() => console.log("2"), 1000);
      console.log("3");
      // Output: 1, 3, 2
      ```
    - **Non-blocking:** Program continues while operations complete
    - **Use Cases:** API calls, file operations, timers
    - **Complex:** Harder to debug with callbacks

168. What is the Event Loop?
    **Answer:** Event Loop manages async operations:
    - **Definition:** Mechanism that handles async callbacks
    - **Components:**
      - Call Stack: Synchronous code execution
      - Callback Queue: Async callbacks waiting
      - Microtask Queue: Promise callbacks
      - Web APIs: Browser async operations
    - **Process:**
      1. Execute synchronous code (Call Stack)
      2. When stack empty, check Microtask Queue
      3. Process all microtasks
      4. Check Callback Queue
      5. Execute one callback
      6. Repeat
    - **Example:**
      ```javascript
      console.log("1");
      setTimeout(() => console.log("2"), 0);
      Promise.resolve().then(() => console.log("3"));
      console.log("4");
      // Output: 1, 4, 3, 2
      ```

169. What is a callback?
    **Answer:** Callback is a function passed as argument:
    - **Definition:** Function to be executed after another function completes
    - **Purpose:** Handle async operations
    - **Example:**
      ```javascript
      function fetchData(callback) {
        setTimeout(() => {
          callback("Data received");
        }, 1000);
      }

      fetchData((data) => {
        console.log(data);
      });
      ```
    - **Types:** Synchronous and asynchronous callbacks
    - **Problem:** Callback hell with nested callbacks

170. What is callback hell?
    **Answer:** Callback hell is deeply nested callbacks:
    - **Definition:** Multiple nested callbacks making code hard to read
    - **Problem:** Difficult to maintain, debug, and error handle
    - **Example:**
      ```javascript
      getData((a) => {
        getMoreData(a, (b) => {
          getMoreData(b, (c) => {
            getMoreData(c, (d) => {
              // Deeply nested
            });
          });
        });
      });
      ```
    - **Solutions:**
      - Promises
      - async/await
      - Named functions
      - Modularization

171. What are Promises?
    **Answer:** Promises represent async operation results:
    - **Definition:** Object representing eventual completion/failure of async operation
    - **States:**
      - Pending: Initial state
      - Fulfilled: Operation completed successfully
      - Rejected: Operation failed
    - **Example:**
      ```javascript
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Success!");
        }, 1000);
      });

      promise.then(result => console.log(result));
      ```
    - **Chaining:** Can chain multiple then/catch
    - **Immutable:** Once settled, cannot change

172. What are Promise states?
    **Answer:** Promises have three states:
    - **Pending:**
      - Initial state
      - Neither fulfilled nor rejected
      - Can transition to fulfilled or rejected
    - **Fulfilled:**
      - Operation completed successfully
      - Has a value
      - Cannot change state
    - **Rejected:**
      - Operation failed
      - Has a reason
      - Cannot change state
    - **Settled:** Either fulfilled or rejected
    - **Example:**
      ```javascript
      const pending = new Promise(() => {});
      const fulfilled = Promise.resolve("Success");
      const rejected = Promise.reject("Error");
      ```

173. What is Promise chaining?
    **Answer:** Promise chaining sequences async operations:
    - **Definition:** Linking multiple then() calls
    - **Purpose:** Execute async operations sequentially
    - **Example:**
      ```javascript
      fetchUser(1)
        .then(user => fetchPosts(user.id))
        .then(posts => fetchComments(posts[0].id))
        .then(comments => console.log(comments))
        .catch(error => console.error(error));
      ```
    - **Value Passing:** Each then receives previous result
    - **Error Handling:** Single catch for entire chain
    - **Return:** Must return promise for chaining

174. What is Promise.all()?
    **Answer:** Promise.all() waits for all promises to resolve:
    - **Syntax:** Promise.all([promise1, promise2, ...])
    - **Purpose:** Execute multiple promises in parallel
    - **Returns:** Promise that resolves when all promises resolve
    - **Example:**
      ```javascript
      const promise1 = fetch('/api/users');
      const promise2 = fetch('/api/posts');
      const promise3 = fetch('/api/comments');

      Promise.all([promise1, promise2, promise3])
        .then(responses => console.log(responses))
        .catch(error => console.error(error));
      ```
    - **Rejects:** If any promise rejects
    - **Order:** Results in same order as input

175. What is Promise.race()?
    **Answer:** Promise.race() resolves/rejects with first settled promise:
    - **Syntax:** Promise.race([promise1, promise2, ...])
    - **Purpose:** Get result of fastest promise
    - **Example:**
      ```javascript
      const promise1 = fetch('/api/fast');
      const promise2 = fetch('/api/slow');

      Promise.race([promise1, promise2])
        .then(result => console.log(result))
        .catch(error => console.error(error));
      ```
    - **First Settled:** Resolves or rejects with first to settle
    - **Use Case:** Timeout, fallback APIs

176. What is Promise.any()?
    **Answer:** Promise.any() resolves with first fulfilled promise:
    - **Syntax:** Promise.any([promise1, promise2, ...])
    - **Purpose:** Get first successful result
    - **Example:**
      ```javascript
      const promise1 = Promise.reject("Error 1");
      const promise2 = Promise.resolve("Success");
      const promise3 = Promise.reject("Error 2");

      Promise.any([promise1, promise2, promise3])
        .then(result => console.log(result))  // "Success"
        .catch(error => console.error(error));
      ```
    - **Ignores Rejections:** Only cares about first success
    - **AggregateError:** Rejects if all promises reject
    - **ES2021:** Introduced in ES2021

177. What is Promise.allSettled()?
    **Answer:** Promise.allSettled() waits for all promises to settle:
    - **Syntax:** Promise.allSettled([promise1, promise2, ...])
    - **Purpose:** Get results of all promises regardless of success/failure
    - **Example:**
      ```javascript
      const promise1 = Promise.resolve("Success");
      const promise2 = Promise.reject("Error");

      Promise.allSettled([promise1, promise2])
        .then(results => console.log(results));
      // Output: [{status: "fulfilled", value: "Success"}, {status: "rejected", reason: "Error"}]
      ```
    - **Never Rejects:** Always resolves with array of results
    - **ES2020:** Introduced in ES2020

178. What is async/await?
    **Answer:** async/await simplifies async code:
    - **Definition:** Syntactic sugar over Promises
    - **async:** Marks function as async, returns Promise
    - **await:** Pauses execution until Promise resolves
    - **Example:**
      ```javascript
      async function fetchData() {
        try {
          const response = await fetch('/api/data');
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
        }
      }
      ```
    - **Benefits:** Cleaner than promise chains, looks synchronous
    - **ES2017:** Introduced in ES2017

179. How does async/await work internally?
    **Answer:** async/await transforms to Promises:
    - **async Function:** Returns Promise automatically
    - **await:** Pauses function, yields control, resumes when Promise settles
    - **Transformation:** Compiler transforms to generator + Promise
    - **Example:**
      ```javascript
      // async/await
      async function example() {
        const result = await Promise.resolve(42);
        return result;
      }

      // Equivalent to
      function example() {
        return Promise.resolve(42);
      }
      ```
    - **Error Handling:** try/catch converts to .catch()
    - **Non-blocking:** Other code can run during await

180. What is a microtask queue?
    **Answer:** Microtask queue holds high-priority callbacks:
    - **Definition:** Queue for Promise callbacks and queueMicrotask()
    - **Priority:** Higher than callback queue
    - **Processed:** After each task in call stack, before callback queue
    - **Sources:**
      - Promise.then/catch/finally
      - queueMicrotask()
      - MutationObserver
    - **Example:**
      ```javascript
      console.log("1");
      Promise.resolve().then(() => console.log("2"));
      setTimeout(() => console.log("3"), 0);
      console.log("4");
      // Output: 1, 4, 2, 3
      ```
    - **Starvation:** Too many microtasks can block callback queue

181. What is a callback queue?
    **Answer:** Callback queue holds async callbacks:
    - **Definition:** Queue for setTimeout, setInterval, I/O callbacks
    - **Priority:** Lower than microtask queue
    - **Processed:** After microtask queue is empty
    - **Sources:**
      - setTimeout
      - setInterval
      - I/O operations
      - Event handlers
    - **Example:**
      ```javascript
      setTimeout(() => console.log("callback"), 0);
      ```
    - **FIFO:** First In, First Out
    - **Task Queue:** Also called Task Queue

182. What is setTimeout()?
    **Answer:** setTimeout() executes function after delay:
    - **Syntax:** setTimeout(callback, delay, ...args)
    - **Purpose:** Execute code after specified time
    - **Example:**
      ```javascript
      setTimeout(() => {
        console.log("Delayed execution");
      }, 1000);

      // With arguments
      setTimeout((name) => {
        console.log(`Hello ${name}`);
      }, 1000, "John");
      ```
    - **Returns:** Timeout ID (can cancel with clearTimeout)
    - **Minimum Delay:** Browser minimum ~4ms
    - **Not Guaranteed:** Exact timing not guaranteed

183. What is setInterval()?
    **Answer:** setInterval() executes function repeatedly:
    - **Syntax:** setInterval(callback, delay, ...args)
    - **Purpose:** Execute code at regular intervals
    - **Example:**
      ```javascript
      const intervalId = setInterval(() => {
        console.log("Repeated execution");
      }, 1000);

      // Stop after 5 seconds
      setTimeout(() => clearInterval(intervalId), 5000);
      ```
    - **Returns:** Interval ID (can cancel with clearInterval)
    - **Drift:** Can drift over time
    - **Use Case:** Polling, animations

184. What is requestAnimationFrame()?
    **Answer:** requestAnimationFrame() schedules animation frame:
    - **Syntax:** requestAnimationFrame(callback)
    - **Purpose:** Optimize animations for performance
    - **Example:**
      ```javascript
      function animate() {
        // Update animation
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
      ```
    - **Benefits:**
      - Syncs with display refresh rate (usually 60fps)
      - Pauses when tab inactive
      - Better performance than setInterval
    - **Returns:** Request ID (can cancel with cancelAnimationFrame)

185. What is fetch()?
    **Answer:** fetch() makes HTTP requests:
    - **Syntax:** fetch(url, options)
    - **Purpose:** Make network requests
    - **Returns:** Promise that resolves to Response object
    - **Example:**
      ```javascript
      fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      ```
    - **Modern:** Replacement for XMLHttpRequest
    - **Features:** Streams, CORS, same-origin policy
    - **ES2015:** Introduced in ES2015

186. What is AJAX?
    **Answer:** AJAX is asynchronous JavaScript and XML:
    - **Definition:** Technique for async web requests
    - **Purpose:** Update web page without reloading
    - **Components:**
      - XMLHttpRequest (traditional)
      - Fetch API (modern)
      - JSON (data format)
    - **Example:**
      ```javascript
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/api/data');
      xhr.send();
      xhr.onload = () => console.log(xhr.responseText);
      ```
    - **Use Cases:** Dynamic content, form submission, real-time updates
    - **History:** Coined in 2005

187. What is XMLHttpRequest?
    **Answer:** XMLHttpRequest is traditional AJAX API:
    - **Definition:** API for making HTTP requests
    - **Old Way:** Before fetch API
    - **Example:**
      ```javascript
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/api/data', true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
      xhr.onerror = function() {
        console.error(xhr.statusText);
      };
      xhr.send();
      ```
    - **Verbose:** More complex than fetch
    - **Legacy:** Still used for some features (progress, abort)

188. How do you handle API errors?
    **Answer:** Multiple ways to handle API errors:
    - **Try/Catch with async/await:**
      ```javascript
      async function fetchData() {
        try {
          const response = await fetch('/api/data');
          if (!response.ok) throw new Error('Network error');
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
        }
      }
      ```
    - **Promise.catch():**
      ```javascript
      fetch('/api/data')
        .then(response => response.json())
        .catch(error => console.error(error));
      ```
    - **Response.ok:**
      ```javascript
      fetch('/api/data')
        .then(response => {
          if (!response.ok) throw new Error('HTTP error');
          return response.json();
        });
      ```
    - **Status Codes:** Check response.status for specific errors

189. What is debouncing?
    **Answer:** Debouncing delays function execution:
    - **Definition:** Wait until pause in events before executing
    - **Purpose:** Limit function calls on rapid events
    - **Example:**
      ```javascript
      function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
      }

      const debouncedSearch = debounce(search, 300);
      input.addEventListener('input', debouncedSearch);
      ```
    - **Use Cases:** Search inputs, resize events
    - **Implementation:** Can use lodash debounce

190. What is throttling?
    **Answer:** Throttling limits function execution rate:
    - **Definition:** Execute function at most once per time period
    - **Purpose:** Limit function calls over time
    - **Example:**
      ```javascript
      function throttle(func, delay) {
        let lastCall = 0;
        return function(...args) {
          const now = new Date().getTime();
          if (now - lastCall < delay) return;
          lastCall = now;
          return func.apply(this, args);
        };
      }

      const throttledScroll = throttle(handleScroll, 100);
      window.addEventListener('scroll', throttledScroll);
      ```
    - **Use Cases:** Scroll events, button clicks
    - **Vs Debouncing:** Throttling = regular intervals, Debouncing = after pause

---

## 🌐 10. DOM & Browser APIs (191–210)

191. What is the DOM?
    **Answer:** DOM is the Document Object Model:
    - **Definition:** Programming interface for HTML/XML documents
    - **Structure:** Tree-like representation of document
    - **Purpose:** Allow JavaScript to access and modify document
    - **Components:**
      - Nodes: Elements, text, comments
      - Elements: HTML tags (div, p, span)
      - Attributes: Element properties
    - **Example:**
      ```javascript
      document.getElementById('myElement').textContent = 'Hello';
      ```
    - **Browser:** Built into browsers
    - **W3C Standard:** Maintained by W3C

192. How do you select elements in the DOM?
    **Answer:** Multiple ways to select DOM elements:
    - **getElementById():** Select by ID
      ```javascript
      const element = document.getElementById('myId');
      ```
    - **querySelector():** Select first matching element
      ```javascript
      const element = document.querySelector('.myClass');
      ```
    - **querySelectorAll():** Select all matching elements
      ```javascript
      const elements = document.querySelectorAll('div');
      ```
    - **getElementsByClassName():** Select by class name
      ```javascript
      const elements = document.getElementsByClassName('myClass');
      ```
    - **getElementsByTagName():** Select by tag name
      ```javascript
      const elements = document.getElementsByTagName('div');
      ```

193. What is querySelector()?
    **Answer:** querySelector() selects first matching element:
    - **Syntax:** document.querySelector(selector)
    - **Purpose:** Select first element matching CSS selector
    - **Returns:** Element or null if not found
    - **Example:**
      ```javascript
      const element = document.querySelector('#myId');
      const element2 = document.querySelector('.myClass');
      const element3 = document.querySelector('div > p');
      ```
    - **CSS Selectors:** Supports all CSS selectors
    - **Modern:** Preferred over older methods

194. What is querySelectorAll()?
    **Answer:** querySelectorAll() selects all matching elements:
    - **Syntax:** document.querySelectorAll(selector)
    - **Purpose:** Select all elements matching CSS selector
    - **Returns:** NodeList (not live, static)
    - **Example:**
      ```javascript
      const elements = document.querySelectorAll('.myClass');
      elements.forEach(el => console.log(el));
      ```
    - **Static:** Doesn't update when DOM changes
    - **ForEach:** NodeList has forEach in modern browsers

195. What is getElementById()?
    **Answer:** getElementById() selects element by ID:
    - **Syntax:** document.getElementById(id)
    - **Purpose:** Select element with specific ID
    - **Returns:** Element or null if not found
    - **Example:**
      ```javascript
      const element = document.getElementById('myId');
      if (element) {
        element.textContent = 'Hello';
      }
      ```
    - **Fast:** Fastest selection method
    - **Unique:** IDs should be unique in document
    - **Legacy:** Older method but still useful

196. What is event bubbling?
    **Answer:** Event bubbling propagates events upward:
    - **Definition:** Event starts at target, bubbles up through ancestors
    - **Order:** Target → Parent → Grandparent → ... → Document
    - **Example:**
      ```javascript
      <div onclick="console.log('div')">
        <button onclick="console.log('button')">Click</button>
      </div>
      // Click button: button → div
      ```
    - **Default Behavior:** Most events bubble
    - **Stop:** event.stopPropagation()

197. What is event capturing?
    **Answer:** Event capturing propagates events downward:
    - **Definition:** Event starts at root, captures down to target
    - **Order:** Document → ... → Grandparent → Parent → Target
    - **Example:**
      ```javascript
      element.addEventListener('click', handler, true);  // true = capture phase
      ```
    - **Rarely Used:** Bubbling is more common
    - **Phase:** Happens before bubbling phase

198. What is event delegation?
    **Answer:** Event delegation uses single handler for multiple elements:
    - **Definition:** Attach event to parent, handle events from children
    - **Purpose:** Reduce event listeners, handle dynamically added elements
    - **Example:**
      ```javascript
      document.getElementById('parent').addEventListener('click', (e) => {
        if (e.target.matches('.button')) {
          console.log('Button clicked');
        }
      });
      ```
    - **Benefits:** Performance, dynamic elements, less memory
    - **Uses:** event.target to identify actual element

199. What is preventDefault()?
    **Answer:** preventDefault() cancels default event behavior:
    - **Syntax:** event.preventDefault()
    - **Purpose:** Stop default action of event
    - **Example:**
      ```javascript
      document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();  // Prevent form submission
        // Custom validation
      });

      document.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();  // Prevent link navigation
      });
      ```
    - **Use Cases:** Form validation, link handling
    - **Not Stop:** Doesn't stop propagation

200. What is stopPropagation()?
    **Answer:** stopPropagation() stops event propagation:
    - **Syntax:** event.stopPropagation()
    - **Purpose:** Stop event from bubbling/capturing
    - **Example:**
      ```javascript
      child.addEventListener('click', (e) => {
        e.stopPropagation();  // Stop bubbling
        console.log('Child clicked');
      });
      ```
    - **Stop Immediate:** stopImmediatePropagation() stops other listeners
    - **Use Case:** Prevent parent handlers from firing

201. What is localStorage?
    **Answer:** localStorage stores data in browser:
    - **Definition:** Web API for storing key-value pairs
    - **Persistence:** Data persists after browser close
    - **Size:** ~5-10MB per domain
    - **Example:**
      ```javascript
      localStorage.setItem('key', 'value');
      const value = localStorage.getItem('key');
      localStorage.removeItem('key');
      localStorage.clear();
      ```
    - **String Only:** Only stores strings (use JSON for objects)
    - **Same Origin:** Only accessible from same domain

202. What is sessionStorage?
    **Answer:** sessionStorage stores data for session:
    - **Definition:** Web API for storing key-value pairs
    - **Persistence:** Data cleared when tab/window closes
    - **Size:** ~5-10MB per domain
    - **Example:**
      ```javascript
      sessionStorage.setItem('key', 'value');
      const value = sessionStorage.getItem('key');
      sessionStorage.removeItem('key');
      sessionStorage.clear();
      ```
    - **Tab Specific:** Each tab has separate storage
    - **String Only:** Only stores strings

203. What are cookies?
    **Answer:** Cookies are small pieces of data stored in browser:
    - **Definition:** Text files stored by browser
    - **Purpose:** State management, tracking, authentication
    - **Size:** ~4KB per cookie
    - **Example:**
      ```javascript
      document.cookie = 'name=John; expires=Fri, 31 Dec 2024 23:59:59 GMT';
      const cookies = document.cookie;
      ```
    - **Sent to Server:** Included in HTTP requests
    - **Attributes:** expires, path, domain, secure, HttpOnly

204. What is the BOM?
    **Answer:** BOM is the Browser Object Model:
    - **Definition:** Objects that allow JavaScript to interact with browser
    - **Components:**
      - window: Global object
      - navigator: Browser information
      - screen: Screen information
      - history: Browser history
      - location: URL information
    - **Not Standard:** No W3C standard (de facto standard)
    - **Example:**
      ```javascript
      window.innerWidth;
      navigator.userAgent;
      screen.width;
      history.back();
      location.href;
      ```

205. What is window object?
    **Answer:** window is the global browser object:
    - **Definition:** Global object in browser JavaScript
    - **Contains:**
      - DOM (document)
      - BOM (navigator, screen, history, location)
      - JavaScript core functions
      - Global variables
    - **Example:**
      ```javascript
      window.alert('Hello');
      window.setTimeout(() => {}, 1000);
      window.innerWidth;
      ```
    - **Global Scope:** All global variables are properties of window
    - **this:** In global scope, this = window

206. What is document object?
    **Answer:** document represents the HTML document:
    - **Definition:** Entry point to DOM
    - **Properties:**
      - document.body
      - document.head
      - document.title
      - document.URL
    - **Methods:**
      - getElementById()
      - querySelector()
      - createElement()
      - addEventListener()
    - **Example:**
      ```javascript
      document.title = 'New Title';
      const element = document.createElement('div');
      document.body.appendChild(element);
      ```
    - **Part of:** window.document

207. What is navigator object?
    **Answer:** navigator provides browser information:
    - **Definition:** Information about browser and user agent
    - **Properties:**
      - navigator.userAgent
      - navigator.platform
      - navigator.language
      - navigator.cookieEnabled
    - **Example:**
      ```javascript
      console.log(navigator.userAgent);
      console.log(navigator.platform);
      console.log(navigator.language);
      ```
    - **User Agent:** Can be spoofed
    - **Feature Detection:** Use feature detection, not user agent

208. What is location object?
    **Answer:** location provides URL information:
    - **Definition:** Information about current URL
    - **Properties:**
      - location.href: Full URL
      - location.protocol: Protocol (http:, https:)
      - location.hostname: Domain name
      - location.pathname: Path
      - location.search: Query string
      - location.hash: Fragment identifier
    - **Methods:**
      - location.assign(): Navigate to URL
      - location.reload(): Reload page
      - location.replace(): Replace current URL
    - **Example:**
      ```javascript
      console.log(location.href);
      location.href = 'https://example.com';
      location.reload();
      ```

209. What is history API?
    **Answer:** history API manages browser history:
    - **Definition:** Interface for manipulating session history
    - **Methods:**
      - history.back(): Go back
      - history.forward(): Go forward
      - history.go(): Go to specific page
      - history.pushState(): Add history entry
      - history.replaceState(): Replace history entry
    - **Properties:**
      - history.length: Number of history entries
    - **Example:**
      ```javascript
      history.back();
      history.forward();
      history.pushState({page: 1}, '', '?page=1');
      ```
    - **SPA:** Used in single-page applications

210. What are Web APIs?
    **Answer:** Web APIs are browser-provided APIs:
    - **Definition:** Interfaces that allow JavaScript to interact with browser features
    - **Categories:**
      - DOM API: Document manipulation
      - Fetch API: Network requests
      - Storage API: localStorage, sessionStorage
      - Geolocation API: Location information
      - Canvas API: Graphics
      - Web Audio API: Audio processing
      - WebSockets API: Real-time communication
    - **Example:**
      ```javascript
      // DOM API
      document.getElementById('id');

      // Fetch API
      fetch('/api/data');

      // Storage API
      localStorage.setItem('key', 'value');
      ```
    - **Not JavaScript:** Part of browser environment

---

## 🚀 11. ES6+ Features (211–240)

211. What are template literals?
    **Answer:** Template literals are string literals allowing embedded expressions:
    - **Syntax:** Backticks (`) instead of quotes
    - **Features:**
      - String interpolation: ${expression}
      - Multi-line strings
      - Tagged templates
    - **Example:**
      ```javascript
      const name = "John";
      const age = 25;
      const message = `Hello ${name}, you are ${age} years old`;

      const multiLine = `
        This is a
        multi-line
        string
      `;
      ```
    - **ES2015:** Introduced in ES6
    - **Use Case:** Dynamic strings, HTML templates

212. What is destructuring?
    **Answer:** Destructuring extracts values from arrays/objects:
    - **Array Destructuring:**
      ```javascript
      const [a, b, c] = [1, 2, 3];
      const [first, ...rest] = [1, 2, 3, 4];
      ```
    - **Object Destructuring:**
      ```javascript
      const { name, age } = person;
      const { name: firstName } = person;
      ```
    - **Benefits:** Cleaner code, less verbose
    - **ES2015:** Introduced in ES6

213. What is the spread operator?
    **Answer:** Spread operator expands iterables:
    - **Syntax:** ... (three dots)
    - **Arrays:** [...arr] - spreads elements
    - **Objects:** {...obj} - spreads properties
    - **Example:**
      ```javascript
      const arr1 = [1, 2];
      const arr2 = [...arr1, 3, 4];  // [1, 2, 3, 4]

      const obj1 = { a: 1 };
      const obj2 = { ...obj1, b: 2 };  // { a: 1, b: 2 }
      ```
    - **ES2015:** Introduced in ES6 (arrays), ES2018 (objects)

214. What is the rest operator?
    **Answer:** Rest operator collects multiple elements:
    - **Syntax:** ... (three dots)
    - **Purpose:** Collect remaining elements/properties
    - **Example:**
      ```javascript
      function sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
      }

      const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
      ```
    - **Position:** Must be last parameter
    - **ES2015:** Introduced in ES6

215. What are modules?
    **Answer:** Modules organize code into separate files:
    - **Definition:** Self-contained units of code
    - **Features:**
      - Private scope (not global)
      - Explicit imports/exports
      - Can be loaded asynchronously
    - **ES6 Modules:** Native JavaScript modules
    - **Example:**
      ```javascript
      // math.js
      export const add = (a, b) => a + b;

      // main.js
      import { add } from './math.js';
      ```
    - **Benefits:** Code organization, reusability, tree shaking

216. What is import/export?
    **Answer:** import/export manage module dependencies:
    - **export:** Exports functions, variables, classes
    - **import:** Imports from other modules
    - **Example:**
      ```javascript
      // Export
      export const PI = 3.14;
      export function add(a, b) { return a + b; }
      export default class Calculator { }

      // Import
      import { PI, add } from './math.js';
      import Calculator from './calculator.js';
      import * as math from './math.js';
      ```
    - **ES2015:** Introduced in ES6

217. What are default exports?
    **Answer:** Default exports export a single value:
    - **Syntax:** export default value
    - **Import:** import name from './module.js'
    - **Example:**
      ```javascript
      // Export
      export default function greet() {
        console.log("Hello");
      }

      // Import
      import greet from './greet.js';
      import myGreet from './greet.js';  // Can rename
      ```
    - **One Per Module:** Only one default export per module

218. What are named exports?
    **Answer:** Named exports export multiple values:
    - **Syntax:** export { name1, name2 }
    - **Import:** import { name1, name2 } from './module.js'
    - **Example:**
      ```javascript
      // Export
      export const PI = 3.14;
      export function add(a, b) { return a + b; }

      // Import
      import { PI, add } from './math.js';
      import { PI as pi, add as sum } from './math.js';  // Rename
      ```
    - **Multiple:** Can have many named exports

219. What are Sets?
    **Answer:** Sets store unique values:
    - **Definition:** Collection of unique values
    - **Example:**
      ```javascript
      const set = new Set([1, 2, 2, 3, 3]);
      console.log(set);  // Set {1, 2, 3}

      set.add(4);
      set.has(2);  // true
      set.delete(1);
      ```
    - **Methods:** add, has, delete, clear, forEach
    - **Use Case:** Remove duplicates, unique collections
    - **ES2015:** Introduced in ES6

220. What are Maps?
    **Answer:** Maps store key-value pairs:
    - **Definition:** Collection of keyed data items
    - **Features:**
      - Keys can be any type (including objects)
      - Maintains insertion order
      - Has size property
    - **Example:**
      ```javascript
      const map = new Map();
      map.set('name', 'John');
      map.set(1, 'one');
      map.set({}, 'object');

      map.get('name');  // 'John'
      map.has('name');  // true
      ```
    - **Vs Object:** Maps are more flexible for keys
    - **ES2015:** Introduced in ES6

221. What are WeakSets?
    **Answer:** WeakSets store weak references to objects:
    - **Definition:** Set of objects with weak references
    - **Features:**
      - Only stores objects (not primitives)
      - Weak references (garbage collected when not used elsewhere)
      - Not iterable
    - **Example:**
      ```javascript
      const weakSet = new WeakSet();
      const obj1 = {};
      const obj2 = {};
      weakSet.add(obj1);
      weakSet.add(obj2);
      weakSet.has(obj1);  // true
      ```
    - **Use Case:** Memory management, tracking objects
    - **ES2015:** Introduced in ES6

222. What are WeakMaps?
    **Answer:** WeakMaps store weak key-value pairs:
    - **Definition:** Map with weak references to keys
    - **Features:**
      - Keys must be objects
      - Weak references (garbage collected when not used elsewhere)
      - Not iterable
    - **Example:**
      ```javascript
      const weakMap = new WeakMap();
      const key = {};
      weakMap.set(key, 'value');
      weakMap.get(key);  // 'value'
      ```
    - **Use Case:** Private data, memory management
    - **ES2015:** Introduced in ES6

223. What are Symbols?
    **Answer:** Symbols are unique identifiers:
    - **Definition:** Primitive type for unique property keys
    - **Features:**
      - Always unique
      - Used as object property keys
      - Not enumerable in for...in
    - **Example:**
      ```javascript
      const sym1 = Symbol('description');
      const sym2 = Symbol('description');
      sym1 === sym2;  // false

      const obj = {
        [sym1]: 'value1',
        [sym2]: 'value2'
      };
      ```
    - **Use Case:** Private properties, unique keys
    - **ES2015:** Introduced in ES6

224. What is optional chaining (?.)?
    **Answer:** Optional chaining safely accesses nested properties:
    - **Syntax:** obj?.prop or obj?.[prop] or obj?.method()
    - **Purpose:** Safe property access, returns undefined if null/undefined
    - **Example:**
      ```javascript
      const user = { address: { city: 'NYC' } };
      user?.address?.city;  // 'NYC'
      user?.address?.zip;  // undefined
      user?.profile?.name;  // undefined (no error)
      ```
    - **ES2020:** Introduced in ES2020
    - **Benefit:** Cleaner than manual null checks

225. What is nullish coalescing (??)?
    **Answer:** Nullish coalescing provides fallback for null/undefined:
    - **Syntax:** left ?? right
    - **Purpose:** Return right if left is null or undefined
    - **Example:**
      ```javascript
      null ?? 'default';  // 'default'
      undefined ?? 'default';  // 'default'
      0 ?? 'default';  // 0
      '' ?? 'default';  // ''
      false ?? 'default';  // false
      ```
    - **Vs ||:** Only null/undefined trigger fallback (not falsy values)
    - **ES2020:** Introduced in ES2020

226. What is BigInt?
    **Answer:** BigInt represents large integers:
    - **Syntax:** 9007199254740991n or BigInt(9007199254740991)
    - **Purpose:** Handle integers larger than Number.MAX_SAFE_INTEGER
    - **Example:**
      ```javascript
      const bigInt = 9007199254740991n;
      const bigInt2 = BigInt(9007199254740991);
      bigInt + 1n;  // 9007199254740992n
      ```
    - **Cannot Mix:** Cannot mix with regular numbers
    - **ES2020:** Introduced in ES2020

227. What is dynamic import()?
    **Answer:** Dynamic import() loads modules on demand:
    - **Syntax:** import('./module.js')
    - **Purpose:** Load modules asynchronously when needed
    - **Returns:** Promise that resolves to module object
    - **Example:**
      ```javascript
      button.addEventListener('click', async () => {
        const module = await import('./heavyModule.js');
        module.doSomething();
      });
      ```
    - **Use Case:** Code splitting, lazy loading
    - **ES2020:** Introduced in ES2020

228. What are iterators?
    **Answer:** Iterators define iteration protocol:
    - **Definition:** Objects with next() method
    - **Protocol:**
      - next() returns { value, done }
      - done: true when iteration complete
    - **Example:**
      ```javascript
      const iterator = {
        data: [1, 2, 3],
        index: 0,
        next() {
          if (this.index < this.data.length) {
            return { value: this.data[this.index++], done: false };
          }
          return { value: undefined, done: true };
        }
      };
      ```
    - **Use Case:** Custom iteration behavior
    - **ES2015:** Introduced in ES6

229. What are generators?
    **Answer:** Generators can pause and resume execution:
    - **Syntax:** function* name() { }
    - **Yield:** Pause execution and return value
    - **Example:**
      ```javascript
      function* generator() {
        yield 1;
        yield 2;
        yield 3;
      }

      const gen = generator();
      gen.next().value;  // 1
      gen.next().value;  // 2
      ```
    - **Use Case:** Lazy evaluation, infinite sequences
    - **ES2015:** Introduced in ES6

230. What are modern JavaScript features?
    **Answer:** Modern JavaScript features include:
    - **ES2015 (ES6):** let/const, arrow functions, classes, modules, promises
    - **ES2016:** Array.prototype.includes, exponentiation operator
    - **ES2017:** async/await, Object.values/entries, string padding
    - **ES2018:** Rest/spread properties, Promise.finally
    - **ES2019:** Array.flat/flatMap, Object.fromEntries
    - **ES2020:** Optional chaining, nullish coalescing, BigInt
    - **ES2021:** String.replaceAll, logical assignment, private fields
    - **ES2022:** Class fields, private methods, Array.at()
    - **ES2023:** Array toSorted(), toReversed(), toSpliced()
    - **ES2024:** Object.groupBy(), Map.groupBy()

231. What is Top-Level Await?
    **Answer:** Top-level await allows await at module level:
    - **Definition:** Use await without async function in modules
    - **Purpose:** Wait for async operations before module execution
    - **Example:**
      ```javascript
      // module.js
      const data = await fetch('/api/data');
      export default data;
      ```
    - **ES2022:** Introduced in ES2022
    - **Modules Only:** Only works in ES modules, not scripts

232. What is Array.prototype.at()?
    **Answer:** at() accesses array elements by index:
    - **Syntax:** array.at(index)
    - **Features:**
      - Supports negative indices (from end)
      - Returns undefined if out of bounds
    - **Example:**
      ```javascript
      const arr = [1, 2, 3, 4, 5];
      arr.at(0);   // 1
      arr.at(-1);  // 5 (last element)
      arr.at(-2);  // 4
      ```
    - **ES2022:** Introduced in ES2022
    - **Vs []:** Cleaner than arr[arr.length - 1]

233. What is Array.prototype.toSorted()?
    **Answer:** toSorted() returns sorted copy:
    - **Syntax:** array.toSorted(compareFn)
    - **Purpose:** Sort array without modifying original
    - **Example:**
      ```javascript
      const arr = [3, 1, 4, 1, 5];
      const sorted = arr.toSorted();
      console.log(arr);     // [3, 1, 4, 1, 5] (unchanged)
      console.log(sorted);  // [1, 1, 3, 4, 5]
      ```
    - **ES2023:** Introduced in ES2023
    - **Immutable:** Doesn't modify original array

234. What is Array.prototype.toReversed()?
    **Answer:** toReversed() returns reversed copy:
    - **Syntax:** array.toReversed()
    - **Purpose:** Reverse array without modifying original
    - **Example:**
      ```javascript
      const arr = [1, 2, 3, 4, 5];
      const reversed = arr.toReversed();
      console.log(arr);       // [1, 2, 3, 4, 5] (unchanged)
      console.log(reversed);  // [5, 4, 3, 2, 1]
      ```
    - **ES2023:** Introduced in ES2023
    - **Immutable:** Doesn't modify original array

235. What is Array.prototype.toSpliced()?
    **Answer:** toSpliced() returns spliced copy:
    - **Syntax:** array.toSpliced(start, deleteCount, ...items)
    - **Purpose:** Add/remove elements without modifying original
    - **Example:**
      ```javascript
      const arr = [1, 2, 3, 4, 5];
      const spliced = arr.toSpliced(2, 1, 10);
      console.log(arr);      // [1, 2, 3, 4, 5] (unchanged)
      console.log(spliced); // [1, 2, 10, 4, 5]
      ```
    - **ES2023:** Introduced in ES2023
    - **Immutable:** Doesn't modify original array

236. What is Object.hasOwn()?
    **Answer:** Object.hasOwn() checks for own properties:
    - **Syntax:** Object.hasOwn(obj, prop)
    - **Purpose:** Check if property is own (not inherited)
    - **Example:**
      ```javascript
      const obj = { a: 1 };
      Object.hasOwn(obj, 'a');  // true
      Object.hasOwn(obj, 'toString');  // false (inherited)
      ```
    - **ES2022:** Introduced in ES2022
    - **Vs hasOwnProperty:** Safer, works with objects created with Object.create(null)

237. What is structuredClone()?
    **Answer:** structuredClone() deep clones objects:
    - **Syntax:** structuredClone(value)
    - **Purpose:** Deep clone objects with circular references
    - **Example:**
      ```javascript
      const original = { a: 1, nested: { b: 2 } };
      const clone = structuredClone(original);
      clone.nested.b = 10;
      console.log(original.nested.b);  // 2 (unchanged)
      ```
    - **Features:** Handles circular references, supports many types
    - **ES2021:** Introduced in ES2021

238. Difference between CommonJS and ES Modules.
    **Answer:** Key differences:
    - **CommonJS:**
      - Node.js default (before ES modules)
      - require() for imports
      - module.exports for exports
      - Synchronous loading
      - Single value export
    - **ES Modules:**
      - Modern standard
      - import/export syntax
      - Asynchronous loading
      - Named and default exports
      - Tree shaking support
    - **Example:**
      ```javascript
      // CommonJS
      const math = require('./math');
      module.exports = { add };

      // ES Modules
      import { add } from './math.js';
      export { add };
      ```

239. What is Tree Shaking?
    **Answer:** Tree shaking removes unused code:
    - **Definition:** Eliminate dead code from bundle
    - **Purpose:** Reduce bundle size
    - **Works With:** ES modules (named exports)
    - **Example:**
      ```javascript
      // utils.js
      export function used() { }
      export function unused() { }

      // main.js
      import { used } from './utils.js';
      // unused() is removed from bundle
      ```
    - **Tools:** Webpack, Rollup, Vite
    - **Benefit:** Smaller bundles, faster load times

240. What is Code Splitting?
    **Answer:** Code splitting divides code into chunks:
    - **Definition:** Split code into separate bundles
    - **Purpose:** Load code on demand
    - **Types:**
      - Entry points: Multiple entry files
      - Dynamic imports: import() on demand
      - Vendor splitting: Separate third-party code
    - **Example:**
      ```javascript
      // Dynamic import
      button.addEventListener('click', async () => {
        const module = await import('./heavyModule.js');
      });
      ```
    - **Benefits:** Faster initial load, better caching

---

## 🧪 12. Testing (241–250)

241. What is testing in JavaScript?
    **Answer:** Testing verifies code correctness:
    - **Definition:** Process of evaluating code to ensure it works as expected
    - **Purpose:** Find bugs, prevent regressions, document behavior
    - **Types:**
      - Unit testing: Test individual functions/components
      - Integration testing: Test how components work together
      - E2E testing: Test entire application flow
    - **Benefits:** Confidence, maintainability, documentation
    - **Example:**
      ```javascript
      test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
      });
      ```

242. What is unit testing?
    **Answer:** Unit testing tests individual units:
    - **Definition:** Testing smallest testable parts of code
    - **Scope:** Functions, classes, components in isolation
    - **Characteristics:**
      - Fast execution
      - No external dependencies (mocked)
      - Independent of other tests
    - **Example:**
      ```javascript
      function add(a, b) {
        return a + b;
      }

      test('add function', () => {
        expect(add(2, 3)).toBe(5);
      });
      ```
    - **Tools:** Jest, Mocha, Jasmine

243. What is integration testing?
    **Answer:** Integration testing tests component interactions:
    - **Definition:** Testing how multiple units work together
    - **Scope:** Modules, services, database interactions
    - **Characteristics:**
      - Tests real interactions
      - Slower than unit tests
      - May use real dependencies
    - **Example:**
      ```javascript
      test('user service with database', async () => {
        const user = await userService.createUser({ name: 'John' });
        const found = await userService.getUser(user.id);
        expect(found.name).toBe('John');
      });
      ```
    - **Tools:** Jest, Mocha, Supertest

244. What is end-to-end (E2E) testing?
    **Answer:** E2E testing tests entire application flow:
    - **Definition:** Testing application from user perspective
    - **Scope:** Complete user workflows
    - **Characteristics:**
      - Tests real browser interactions
      - Slowest but most realistic
      - Tests entire stack
    - **Example:**
      ```javascript
      it('should login and navigate to dashboard', () => {
        cy.visit('/login');
        cy.get('#email').type('user@example.com');
        cy.get('#password').type('password');
        cy.get('#submit').click();
        cy.url().should('include', '/dashboard');
      });
      ```
    - **Tools:** Cypress, Playwright, Selenium

245. What is Jest?
    **Answer:** Jest is a JavaScript testing framework:
    - **Definition:** Complete testing solution by Facebook
    - **Features:**
      - Zero configuration
      - Built-in assertions
      - Mocking support
      - Code coverage
      - Snapshot testing
    - **Example:**
      ```javascript
      describe('Calculator', () => {
        test('adds numbers', () => {
          expect(add(1, 2)).toBe(3);
        });
      });
      ```
    - **Popular:** Most popular JavaScript testing framework
    - **Use Case:** React, Node.js, general JavaScript

246. What is Mocha?
    **Answer:** Mocha is a JavaScript test framework:
    - **Definition:** Feature-rich test framework for Node.js and browser
    - **Features:**
      - Flexible assertion library (Chai, etc.)
      - Async support
      - Reporter plugins
      - Browser and Node.js support
    - **Example:**
      ```javascript
      describe('Array', () => {
        it('should return -1 when value not present', () => {
          assert.equal([1, 2, 3].indexOf(4), -1);
        });
      });
      ```
    - **Flexible:** Requires configuration and additional libraries
    - **Use Case:** Node.js, browser testing

247. What is Chai?
    **Answer:** Chai is an assertion library:
    - **Definition:** BDD/TDD assertion library for Node.js and browser
    - **Styles:**
      - expect: expect(x).to.be.true
      - should: x.should.be.true
      - assert: assert.equal(x, y)
    - **Example:**
      ```javascript
      const expect = require('chai').expect;

      expect(foo).to.be.a('string');
      expect(foo).to.equal('bar');
      expect(foo).to.have.lengthOf(3);
      ```
    - **Pairs With:** Mocha, Jest (as alternative to built-in assertions)
    - **Flexible:** Multiple assertion styles

248. What is Cypress?
    **Answer:** Cypress is an E2E testing framework:
    - **Definition:** Fast, easy E2E testing for web applications
    - **Features:**
      - Real browser testing
      - Time travel debugging
      - Automatic waiting
      - Network control
      - Screenshots/videos
    - **Example:**
      ```javascript
      describe('Login', () => {
        it('logs in successfully', () => {
          cy.visit('/login');
          cy.get('#email').type('user@example.com');
          cy.get('#password').type('password123');
          cy.get('button[type="submit"]').click();
          cy.url().should('include', '/dashboard');
        });
      });
      ```
    - **Modern:** Alternative to Selenium
    - **Use Case:** E2E testing

249. How do you mock functions in JavaScript?
    **Answer:** Mocking replaces functions with test doubles:
    - **Definition:** Create fake functions for testing
    - **Jest Mocks:**
      ```javascript
      const mockFn = jest.fn();
      mockFn.mockReturnValue(10);
      mockFn('arg');
      expect(mockFn).toHaveBeenCalledWith('arg');
      expect(mockFn).toHaveReturnedWith(10);
      ```
    - **SpyOn:**
      ```javascript
      const spy = jest.spyOn(object, 'method');
      spy.mockReturnValue('value');
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
      ```
    - **Purpose:** Isolate code, control dependencies, test edge cases

250. What are testing best practices?
    **Answer:** Testing best practices include:
    - **Arrange-Act-Assert:** Structure tests clearly
      ```javascript
      test('example', () => {
        // Arrange
        const input = 5;
        // Act
        const result = add(input, 3);
        // Assert
        expect(result).toBe(8);
      });
      ```
    - **Test One Thing:** Each test should verify one behavior
    - **Descriptive Names:** Test names should describe what they test
    - **Independent Tests:** Tests should not depend on each other
    - **Mock External Dependencies:** Isolate code under test
    - **Test Edge Cases:** Boundary conditions, null, undefined
    - **Keep Tests Fast:** Unit tests should be fast
    - **High Coverage:** Aim for high code coverage
    - **CI/CD Integration:** Run tests automatically
    - **Refactor Tests:** Keep tests maintainable

---

## 💼 13. Advanced & Real Interview Questions (251–280)

251. What is currying with practical examples?
    **Answer:** Currying transforms function with multiple arguments:
    - **Definition:** Convert f(a, b, c) to f(a)(b)(c)
    - **Purpose:** Create specialized functions, partial application
    - **Example:**
      ```javascript
      function multiply(a, b, c) {
        return a * b * c;
      }

      function curriedMultiply(a) {
        return function(b) {
          return function(c) {
            return a * b * c;
          };
        };
      }

      curriedMultiply(2)(3)(4);  // 24

      const multiplyBy2 = curriedMultiply(2);
      multiplyBy2(3)(4);  // 24
      ```
    - **Use Case:** Function composition, specialized functions

252. What is memoization?
    **Answer:** Memoization caches function results:
    - **Definition:** Store results of expensive function calls
    - **Purpose:** Optimize performance by avoiding redundant calculations
    - **Example:**
      ```javascript
      function memoize(fn) {
        const cache = {};
        return function(...args) {
          const key = JSON.stringify(args);
          if (cache[key]) return cache[key];
          const result = fn.apply(this, args);
          cache[key] = result;
          return result;
        };
      }

      const expensiveFunction = (n) => {
        console.log('Calculating...');
        return n * n;
      };

      const memoized = memoize(expensiveFunction);
      memoized(5);  // Calculates
      memoized(5);  // Returns cached
      ```
    - **Use Case:** Expensive calculations, recursive functions (Fibonacci)

253. What is event delegation with examples?
    **Answer:** Event delegation uses single handler for multiple elements:
    - **Definition:** Attach event to parent, handle events from children
    - **Purpose:** Performance, handle dynamically added elements
    - **Example:**
      ```javascript
      // Instead of adding listener to each button
      document.querySelectorAll('.button').forEach(btn => {
        btn.addEventListener('click', handleClick);
      });

      // Use event delegation
      document.getElementById('container').addEventListener('click', (e) => {
        if (e.target.matches('.button')) {
          handleClick(e);
        }
      });
      ```
    - **Benefits:** Fewer listeners, dynamic elements, better performance

254. What is deep cloning?
    **Answer:** Deep cloning creates independent copy of nested objects:
    - **Definition:** Copy object and all nested objects recursively
    - **Methods:**
      - JSON.parse/stringify (limited)
      - structuredClone (modern)
      - Lodash _.cloneDeep
      - Custom recursive function
    - **Example:**
      ```javascript
      const original = { a: 1, nested: { b: 2 } };

      // JSON method
      const clone1 = JSON.parse(JSON.stringify(original));

      // Modern method
      const clone2 = structuredClone(original);

      // Custom
      function deepClone(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        const clone = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
          clone[key] = deepClone(obj[key]);
        }
        return clone;
      }
      ```
    - **Vs Shallow Clone:** Shallow only copies top level

255. What is a polyfill?
    **Answer:** Polyfill provides modern features in older browsers:
    - **Definition:** Code that implements a feature not supported by browser
    - **Purpose:** Use modern JavaScript in older browsers
    - **Example:**
      ```javascript
      // Array.prototype.includes polyfill
      if (!Array.prototype.includes) {
        Array.prototype.includes = function(searchElement) {
          return this.indexOf(searchElement) !== -1;
        };
      }
      ```
    - **Use Case:** Backward compatibility
    - **Tools:** Babel, core-js

256. What is a shim?
    **Answer:** Shim intercepts API calls and redirects:
    - **Definition:** Code that intercepts and modifies existing API
    - **Vs Polyfill:** Shim modifies behavior, polyfill adds missing feature
    - **Example:**
      ```javascript
      // Shim to modify console.log
      const originalLog = console.log;
      console.log = function(...args) {
        originalLog.apply(console, ['[LOG]', ...args]);
      };
      ```
    - **Use Case:** Debugging, API modification

257. What is the difference between polyfill and shim?
    **Answer:** Key differences:
    - **Polyfill:**
      - Adds missing feature
      - Implements standard API
      - Transparent to user code
    - **Shim:**
      - Modifies existing behavior
      - May not follow standard
      - Can change API behavior
    - **Example:**
      ```javascript
      // Polyfill: Add missing feature
      if (!Array.prototype.includes) {
        Array.prototype.includes = function() { /* ... */ };
      }

      // Shim: Modify existing behavior
      const originalFetch = window.fetch;
      window.fetch = function() { /* modified behavior */ };
      ```

258. What is a transpiler?
    **Answer:** Transpiler converts modern JavaScript to older JavaScript:
    - **Definition:** Compiler that translates source code to target code
    - **Purpose:** Use modern features in older environments
    - **Example:** Babel converts ES6+ to ES5
    - **Vs Compiler:** Source and target are same language (different versions)
    - **Tools:** Babel, TypeScript compiler

259. What is the difference between compiler and transpiler?
    **Answer:** Key differences:
    - **Compiler:**
      - Converts one language to another
      - Example: C to machine code, TypeScript to JavaScript
    - **Transpiler:**
      - Converts source to same language (different version)
      - Example: ES6 to ES5, JSX to JavaScript
    - **Use Case:** Compiler for different languages, transpiler for same language

260. What is the difference between null and undefined?
    **Answer:** Key differences:
    - **undefined:**
      - Variable declared but not assigned
      - Missing property
      - Function without return value
      - Default function parameter value
    - **null:**
      - Explicit absence of value
      - Intentional "no value"
      - Must be assigned
    - **Example:**
      ```javascript
      let x;  // undefined
      const obj = {}; obj.prop;  // undefined
      function() {}  // returns undefined
      let y = null;  // null (explicit)
      ```
    - **Type:** typeof null === 'object', typeof undefined === 'undefined'

261. What is the difference between == and ===?
    **Answer:** Key differences:
    - **== (Loose Equality):**
      - Type coercion before comparison
      - 0 == false, '' == 0, null == undefined
    - **=== (Strict Equality):**
      - No type coercion
      - Both value and type must match
    - **Example:**
      ```javascript
      0 == false;   // true
      0 === false;  // false
      '' == 0;      // true
      '' === 0;     // false
      null == undefined;  // true
      null === undefined; // false
      ```
    - **Best Practice:** Always use ===

262. What is the difference between var, let, and const?
    **Answer:** Key differences:
    - **var:**
      - Function scoped
      - Hoisted with undefined
      - Can be redeclared
      - No TDZ
    - **let:**
      - Block scoped
      - Hoisted but in TDZ
      - Cannot be redeclared
      - Can be reassigned
    - **const:**
      - Block scoped
      - Hoisted but in TDZ
      - Cannot be redeclared
      - Cannot be reassigned (but object properties can change)
    - **Best Practice:** Use const by default, let when needed

263. What is the difference between function declaration and expression?
    **Answer:** Key differences:
    - **Function Declaration:**
      - Hoisted (can call before declaration)
      - Named function
      - Syntax: function name() { }
    - **Function Expression:**
      - Not hoisted (cannot call before declaration)
      - Can be anonymous or named
      - Syntax: const name = function() { }
    - **Example:**
      ```javascript
      // Declaration
      hoisted();  // Works
      function hoisted() { }

      // Expression
      notHoisted();  // Error
      const notHoisted = function() { };
      ```

264. What is the difference between arrow function and regular function?
    **Answer:** Key differences:
    - **Arrow Function:**
      - Lexical this (inherited from surrounding scope)
      - No arguments object
      - Cannot be used as constructor
      - Shorter syntax
    - **Regular Function:**
      - Dynamic this
      - Has arguments object
      - Can be used as constructor
      - Longer syntax
    - **Example:**
      ```javascript
      const arrow = () => { console.log(this); };  // Lexical this
      const regular = function() { console.log(this); };  // Dynamic this
      ```

265. What is the difference between map and forEach?
    **Answer:** Key differences:
    - **map:**
      - Returns new array
      - Transforms each element
      - Chainable
      - Use when you need transformed array
    - **forEach:**
      - Returns undefined
      - Executes function for each element
      - Not chainable
      - Use for side effects
    - **Example:**
      ```javascript
      const doubled = [1, 2, 3].map(x => x * 2);  // [2, 4, 6]
      [1, 2, 3].forEach(x => console.log(x));  // logs each
      ```

266. What is the difference between filter and find?
    **Answer:** Key differences:
    - **filter:**
      - Returns all matching elements
      - Returns array
      - Returns empty array if no match
    - **find:**
      - Returns first matching element
      - Returns single element
      - Returns undefined if no match
    - **Example:**
      ```javascript
      const evens = [1, 2, 3, 4].filter(x => x % 2 === 0);  // [2, 4]
      const firstEven = [1, 2, 3, 4].find(x => x % 2 === 0);  // 2
      ```

267. What is the difference between slice and splice?
    **Answer:** Key differences:
    - **slice:**
      - Extracts portion of array
      - Returns new array
      - Doesn't modify original
      - Syntax: slice(start, end)
    - **splice:**
      - Adds/removes elements
      - Returns removed elements
      - Modifies original array
      - Syntax: splice(start, deleteCount, ...items)
    - **Example:**
      ```javascript
      const arr = [1, 2, 3, 4, 5];
      arr.slice(1, 3);  // [2, 3], arr unchanged
      arr.splice(1, 2); // [2, 3], arr = [1, 4, 5]
      ```

268. What is the difference between call, apply, and bind?
    **Answer:** Key differences:
    - **call:**
      - Executes immediately
      - Arguments passed individually
      - Syntax: fn.call(this, arg1, arg2)
    - **apply:**
      - Executes immediately
      - Arguments passed as array
      - Syntax: fn.apply(this, [arg1, arg2])
    - **bind:**
      - Returns new function
      - Doesn't execute immediately
      - Arguments can be pre-filled
      - Syntax: const bound = fn.bind(this, arg1)

269. What is the difference between setTimeout and setInterval?
    **Answer:** Key differences:
    - **setTimeout:**
      - Executes once after delay
      - Returns timeout ID
      - Cancel with clearTimeout
    - **setInterval:**
      - Executes repeatedly at intervals
      - Returns interval ID
      - Cancel with clearInterval
    - **Example:**
      ```javascript
      setTimeout(() => console.log('once'), 1000);
      setInterval(() => console.log('repeated'), 1000);
      ```

270. What is the difference between Promise.all and Promise.race?
    **Answer:** Key differences:
    - **Promise.all:**
      - Waits for all promises to resolve
      - Returns array of all results
      - Rejects if any promise rejects
    - **Promise.race:**
      - Resolves/rejects with first settled promise
      - Returns first result (success or failure)
      - Doesn't wait for all promises
    - **Example:**
      ```javascript
      Promise.all([p1, p2, p3]);  // All must resolve
      Promise.race([p1, p2, p3]);  // First to settle
      ```

271. What is the difference between localStorage and sessionStorage?
    **Answer:** Key differences:
    - **localStorage:**
      - Persists after browser close
      - Same domain shares storage
      - ~5-10MB limit
    - **sessionStorage:**
      - Cleared when tab/window closes
      - Each tab has separate storage
      - ~5-10MB limit
    - **Example:**
      ```javascript
      localStorage.setItem('key', 'value');  // Persists
      sessionStorage.setItem('key', 'value');  // Cleared on tab close
      ```

272. What is the difference between cookies and localStorage?
    **Answer:** Key differences:
    - **Cookies:**
      - Sent to server with HTTP requests
      - ~4KB limit per cookie
      - Can set expiration
      - Can be HttpOnly, Secure
    - **localStorage:**
      - Not sent to server
      - ~5-10MB limit
      - No expiration (manual delete)
      - Client-side only
    - **Use Case:** Cookies for authentication, localStorage for client data

273. What is the difference between synchronous and asynchronous?
    **Answer:** Key differences:
    - **Synchronous:**
      - Code executes line by line
      - Blocks until complete
      - Simpler to understand
    - **Asynchronous:**
      - Code doesn't block
      - Operations run in background
      - Uses callbacks, promises, async/await
    - **Example:**
      ```javascript
      // Synchronous
      console.log('1');
      console.log('2');  // Output: 1, 2

      // Asynchronous
      console.log('1');
      setTimeout(() => console.log('2'), 0);
      console.log('3');  // Output: 1, 3, 2
      ```

274. What is the difference between process.nextTick and setImmediate in Node.js?
    **Answer:** Key differences:
    - **process.nextTick:**
      - Executes after current operation
      - Higher priority than microtasks
      - Can cause I/O starvation if overused
    - **setImmediate:**
      - Executes in next event loop iteration
      - Lower priority
      - Safer for recursive calls
    - **Example:**
      ```javascript
      process.nextTick(() => console.log('nextTick'));
      setImmediate(() => console.log('immediate'));
      // Output: nextTick, immediate
      ```

275. What is the difference between CommonJS and ES Modules?
    **Answer:** Key differences:
    - **CommonJS:**
      - Node.js default
      - require() for imports
      - module.exports for exports
      - Synchronous loading
      - Single value export
    - **ES Modules:**
      - Modern standard
      - import/export syntax
      - Asynchronous loading
      - Named and default exports
      - Tree shaking support
    - **Example:**
      ```javascript
      // CommonJS
      const math = require('./math');
      module.exports = { add };

      // ES Modules
      import { add } from './math.js';
      export { add };
      ```

276. What is the difference between shallow copy and deep copy?
    **Answer:** Key differences:
    - **Shallow Copy:**
      - Copies top-level properties
      - Nested objects are references
      - Faster, less memory
      - Methods: Object.assign, spread operator
    - **Deep Copy:**
      - Copies all nested objects
      - Completely independent
      - Slower, more memory
      - Methods: JSON.parse/stringify, structuredClone
    - **Example:**
      ```javascript
      const original = { a: 1, nested: { b: 2 } };

      const shallow = { ...original };
      shallow.nested.b = 10;
      console.log(original.nested.b);  // 10 (changed)

      const deep = structuredClone(original);
      deep.nested.b = 10;
      console.log(original.nested.b);  // 2 (unchanged)
      ```

277. What is the difference between debouncing and throttling?
    **Answer:** Key differences:
    - **Debouncing:**
      - Executes after pause in events
      - Waits for inactivity
      - Use Case: Search inputs, resize
    - **Throttling:**
      - Executes at regular intervals
      - Limits execution rate
      - Use Case: Scroll events, button clicks
    - **Example:**
      ```javascript
      // Debouncing: Wait 300ms after last event
      const debounced = debounce(handler, 300);

      // Throttling: Execute at most once per 100ms
      const throttled = throttle(handler, 100);
      ```

278. What is the difference between value types and reference types?
    **Answer:** Key differences:
    - **Value Types (Primitives):**
      - Stored in stack
      - Copied by value
      - Immutable
      - Types: string, number, boolean, null, undefined, symbol, bigint
    - **Reference Types (Objects):**
      - Stored in heap
      - Copied by reference
      - Mutable
      - Types: objects, arrays, functions, dates, etc.
    - **Example:**
      ```javascript
      // Value type
      let a = 10;
      let b = a;
      b = 20;
      console.log(a);  // 10 (unchanged)

      // Reference type
      let obj1 = { x: 1 };
      let obj2 = obj1;
      obj2.x = 2;
      console.log(obj1.x);  // 2 (changed)
      ```

279. What is the difference between map and object?
    **Answer:** Key differences:
    - **Map:**
      - Keys can be any type
      - Maintains insertion order
      - Has size property
      - Built-in methods (get, set, has, delete)
      - Not JSON serializable
    - **Object:**
      - Keys are strings/symbols
      - No guaranteed order (before ES2015)
      - No size property
      - Manual property access
      - JSON serializable
    - **Use Case:** Map for dynamic keys, Object for structured data

280. What is the difference between Set and Array?
    **Answer:** Key differences:
    - **Set:**
      - Only unique values
      - No index-based access
      - Has methods (add, has, delete)
      - Faster for membership testing
    - **Array:**
      - Can have duplicates
      - Index-based access
      - Array methods (push, pop, map, filter)
      - Slower for membership testing
    - **Use Case:** Set for unique collections, Array for ordered data
    - **Example:**
      ```javascript
      const set = new Set([1, 2, 2, 3]);  // Set {1, 2, 3}
      const arr = [1, 2, 2, 3];           // [1, 2, 2, 3]
      set.has(2);  // true (O(1))
      arr.includes(2);  // true (O(n))
      ```

---

## 🎉 Conclusion

Congratulations! You've completed all 280 JavaScript interview questions with in-depth answers. This comprehensive guide covers:

- **JavaScript Fundamentals**
- **Variables & Scope**
- **Functions**
- **Objects & Prototypes**
- **OOP in JavaScript**
- **Arrays & Array Methods**
- **Execution Context & Hoisting**
- **This, Call, Apply & Bind**
- **Asynchronous JavaScript**
- **DOM & Browser APIs**
- **ES6+ Features**
- **Testing**
- **Advanced & Real Interview Questions**

Keep practicing and reviewing these concepts to ace your JavaScript interviews!
