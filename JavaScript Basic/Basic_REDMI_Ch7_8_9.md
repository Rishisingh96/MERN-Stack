# JavaScript Basic Interview Preparation Notes
## Chapters 7-9: Strings, Math & Numbers

---

# CHAPTER 7: STRINGS

## 7.1 What is a String?

### Definition
A string is a sequence of characters used to represent text. In JavaScript, strings are immutable, meaning once created, they cannot be modified.

### Creating Strings
```javascript
// Single quotes
const str1 = 'Hello';

// Double quotes
const str2 = "World";

// Template literals (backticks)
const str3 = `Hello ${str2}`;

// String constructor (rarely used)
const str4 = new String("Hello");
```

**Note:** Single and double quotes work the same. Template literals allow interpolation and multi-line strings.

---

## 7.2 String Properties

### length Property
Returns the number of characters in a string (including spaces)
```javascript
const str = "Hello,    World!";
console.log(str.length);  // 16 (includes spaces)
```

---

## 7.3 Escape Characters

### Definition
The backslash `\` is used as an escape character to include special characters in strings.

### Common Escape Sequences
| Code | Result | Description |
|------|--------|-------------|
| `\'` | `'` | Single quote |
| `\"` | `"` | Double quote |
| `\\` | `\` | Backslash |
| `\n` | New line | Line break |
| `\t` | Tab | Horizontal tab |
| `\r` | Carriage return | |

### Example
```javascript
let text = "My name is 'Thapa Technical' & \\ I am a \"Full Stack\" Developer.";
console.log(text);
// Output: My name is 'Thapa Technical' & \ I am a "Full Stack" Developer.
```

---

## 7.4 String Search Methods

### 1. indexOf()
Returns the index of the first occurrence of a substring, or -1 if not found
```javascript
let text = "Vinod Thapa";
console.log(text.indexOf("Thapa"));  // 6
console.log(text.indexOf("thapa"));  // -1 (case sensitive)
```

**Syntax:**
```javascript
string.indexOf(searchString)
string.indexOf(searchString, position)  // Start search from position
```

### 2. lastIndexOf()
Returns the index of the last occurrence of a substring
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(text.lastIndexOf("JavaScript"));  // 42
console.log(text.lastIndexOf("JavaScript", 40));  // 6 (search before index 40)
```

### 3. search()
Searches for a string or regular expression, returns position of match
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(text.search(/Javascript/i));  // 6 (case insensitive)
```

**Important:** 
- `search()` cannot take a second start position argument
- `search()` accepts regular expressions
- `indexOf()` cannot take powerful search values (regex)

### 4. match()
Returns an array of matched values or null if no match
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";

// Without flags (first match only)
console.log(text.match("JavaScript"));
// ["JavaScript", index: 6, input: "...", groups: undefined]

// With global flag (all matches)
console.log(text.match(/JavaScript/g));
// ["JavaScript", "JavaScript"]

// With global and case-insensitive flags
console.log(text.match(/Javascript/gi));
// ["JavaScript", "JavaScript"]
```

### 5. matchAll()
Returns an iterator of all matches with detailed information
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let matchResult = text.matchAll(/JavaScript/gi);

for (let item of matchResult) {
    console.log(item[0]);     // Matched string
    console.log(item.index);  // Position
}
```

### 6. includes()
Returns true if string contains specified value
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(text.includes("JavaScript"));  // true
console.log(text.includes("Python"));     // false
```

**Note:** Case sensitive, ES6 feature

### 7. startsWith()
Returns true if string begins with specified value
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(text.startsWith("Hello"));     // true
console.log(text.startsWith("welcome"));  // false

// With start position
console.log(text.startsWith("welcome", 18));  // true
```

### 8. endsWith()
Returns true if string ends with specified value
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(text.endsWith("course"));   // true
console.log(text.endsWith("welcome"));  // false
```

---

## 7.5 Extracting String Parts

### 1. slice()
Extracts a portion of the string and returns it in a new string
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";

// From index to end
console.log(text.slice(6));  // "JavaScript, welcome to our world best JavaScript course"

// From start to end (end is exclusive)
console.log(text.slice(6, 15));  // "JavaScript"

// Negative indices (counts from end)
console.log(text.slice(-6));  // "course"
```

**Syntax:** `string.slice(start, end)` - end is exclusive

### 2. substring()
Similar to slice(), but treats negative indices as 0
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";

console.log(text.substring(6, 15));  // "JavaScript"
console.log(text.substring(-5));    // "Hello JavaScript..." (treated as 0)
```

**Difference from slice():**
- `substring()` treats negative values as 0
- `substring()` swaps start and end if start > end
- `slice()` supports negative indices

### 3. substr() - DEPRECATED ❌
```javascript
// DO NOT USE - Deprecated method
// Use slice() or substring() instead
```

---

## 7.6 Extracting String Characters

### 1. charAt()
Returns the character at a specified index
```javascript
let text = "Hello JavaScript";
console.log(text.charAt(6));   // "J"
console.log(text.charAt(-6));  // "" (empty string for negative)
```

### 2. charCodeAt()
Returns the UTF-16 code of the character at specified index
```javascript
let text = "Hello JavaScript";
console.log(text.charCodeAt(6));  // 74 (ASCII code for 'J')
```

### 3. at() - ES2022
Returns character at specified index, supports negative indices
```javascript
let text = "Hello JavaScript";
console.log(text.at(6));   // "J"
console.log(text.at(-6));  // "a" (6th from end)
```

**Advantage:** Can use negative indexes unlike `charAt()`

---

## 7.7 Replacing String Content

### 1. replace()
Replaces first occurrence of a value
```javascript
const str = "Hello, World!";
const newStr = str.replace("World", "JavaScript");
console.log(newStr);  // "Hello, JavaScript!"
```

### 2. Case-Insensitive Replacement
```javascript
let originalString = "Hello, World! How are you, World?";
let replacedString = originalString.replace(/world/gi, "Vinod");
console.log(replacedString);
// "Hello, Vinod! How are you, Vinod?"
```

### 3. replaceAll()
Replaces all occurrences (ES2021)
```javascript
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.replaceAll("JavaScript", "Vinod");
console.log(result);
// "Hello Vinod, welcome to our world best Vinod course"
```

---

## 7.8 String Case Conversion

### toUpperCase()
Converts string to uppercase
```javascript
const str = "JavaScript";
console.log(str.toUpperCase());  // "JAVASCRIPT"
```

### toLowerCase()
Converts string to lowercase
```javascript
const str = "JavaScript";
console.log(str.toLowerCase());  // "javascript"
```

---

## 7.9 String Trimming

### trim()
Removes whitespace from both ends
```javascript
const str = "   Hello, World!   ";
console.log(str.length);      // 18
console.log(str.trim());       // "Hello, World!"
console.log(str.trim().length); // 13
```

### trimStart()
Removes whitespace from start only
```javascript
const str = "   Hello, World!   ";
console.log(str.trimStart());  // "Hello, World!   "
```

### trimEnd()
Removes whitespace from end only
```javascript
const str = "   Hello, World!   ";
console.log(str.trimEnd());    // "   Hello, World!"
```

---

## 7.10 String Splitting and Joining

### split()
Splits string into array of substrings
```javascript
const str = "apple,orange,banana";
const arr = str.split(",");
console.log(arr);  // ["apple", "orange", "banana"]
```

### split() with reverse and join
```javascript
const str = "apple,orange,banana";
const reversed = str.split(",").reverse().join(",");
console.log(reversed);  // "banana,orange,apple"
```

---

## 7.11 String Padding

### padStart()
Pads string from start with specified characters
```javascript
const str = "5";
console.log(str.padStart(3, "0"));  // "005"
```

### padEnd()
Pads string from end with specified characters
```javascript
const str = "5";
console.log(str.padEnd(3, "0"));  // "500"
```

**Use Case:** Formatting numbers, IDs, dates

---

## 7.12 String Repetition

### repeat()
Returns string repeated specified number of times
```javascript
const str = "Hello ";
console.log(str.repeat(3));  // "Hello Hello Hello "
```

---

## 7.13 String Comparison

### localeCompare()
Compares strings in current locale
```javascript
const str1 = "apple";
const str2 = "banana";
console.log(str1.localeCompare(str2));  // -1 (str1 comes before str2)
console.log(str2.localeCompare(str1));  // 1 (str2 comes after str1)
console.log(str1.localeCompare(str1));  // 0 (equal)
```

---

## 7.14 Practical Examples

### Example 1: Print Alphabet a-z
```javascript
for (let char = 97; char <= 122; char++) {
    console.log(String.fromCharCode(char));
}
// Output: a, b, c, ..., z
```

### Example 2: Count Vowels in String
```javascript
const countVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

console.log(countVowels("Hello a i o u world"));  // 5
```

### Example 3: Check if All Vowels Present
```javascript
const checkAllVowelPresentOrNot = (str) => {
    const vowels = "aeiou";
    for (let char of vowels) {
        if (!str.toLowerCase().includes(char)) {
            return false;
        }
    }
    return true;
};

console.log(checkAllVowelPresentOrNot("education"));  // true
console.log(checkAllVowelPresentOrNot("hello"));      // false
```

### Example 4: Pangram Checker
```javascript
const pangramChecker = (str) => {
    let inputArr = str.toLowerCase().split("");
    const values = inputArr.filter(
        (curElem) =>
            curElem.charCodeAt() >= "a".charCodeAt() &&
            curElem.charCodeAt() <= "z".charCodeAt()
    );
    return new Set(values).size === 26;
};

console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));  // true
```

**Pangram:** Sentence containing every letter of the alphabet

### Example 5: Reverse a String
```javascript
const reverseString = (str) => {
    return str.split("").reverse().join("");
};

console.log(reverseString("Hello"));  // "olleH"
```

### Example 6: Check Palindrome
```javascript
const isPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return str.toLowerCase() === reversed.toLowerCase();
};

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
```

### Example 7: Capitalize First Letter
```javascript
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalize("hello"));  // "Hello"
```

### Example 8: Title Case
```javascript
const titleCase = (str) => {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

console.log(titleCase("hello world"));  // "Hello World"
```

---

## 7.15 Interview Questions - Chapter 7

### Q1: Difference between slice() and substring()?
**Answer:**
- `slice()`: Supports negative indices, more flexible
- `substring()`: Treats negative indices as 0, swaps start/end if start > end

### Q2: Difference between indexOf() and search()?
**Answer:**
- `indexOf()`: Takes second start position, doesn't accept regex
- `search()`: Accepts regex, no second start position

### Q3: Difference between match() and matchAll()?
**Answer:**
- `match()`: Returns array of matches (first match without 'g' flag)
- `matchAll()`: Returns iterator with detailed match information

### Q4: How to check if a string is a palindrome?
**Answer:** Reverse the string and compare with original (case-insensitive)

### Q5: What is a pangram?
**Answer:** A sentence containing every letter of the alphabet at least once.

### Q6: Difference between charAt() and at()?
**Answer:**
- `charAt()`: Doesn't support negative indices
- `at()`: Supports negative indices (ES2022)

---

# CHAPTER 8: MATH

## 8.1 What is the Math Object?

### Definition
The Math object is a built-in JavaScript object that provides properties and methods for mathematical constants and functions. It's not a constructor, so all methods are static.

**Important:** Math works with Number type, not BigInt.

---

## 8.2 Math Constants

### Math.PI
Returns the value of Pi (π)
```javascript
console.log(Math.PI);  // 3.141592653589793
```

### Math.E
Returns Euler's number (e)
```javascript
console.log(Math.E);  // 2.718281828459045
```

### Math.LN2
Returns natural logarithm of 2
```javascript
console.log(Math.LN2);  // 0.6931471805599453
```

### Math.LN10
Returns natural logarithm of 10
```javascript
console.log(Math.LN10);  // 2.302585092994046
```

### Math.LOG2E
Returns base 2 logarithm of E
```javascript
console.log(Math.LOG2E);  // 1.4426950408889634
```

### Math.LOG10E
Returns base 10 logarithm of E
```javascript
console.log(Math.LOG10E);  // 0.4342944819032518
```

### Math.SQRT2
Returns square root of 2
```javascript
console.log(Math.SQRT2);  // 1.4142135623730951
```

### Math.SQRT1_2
Returns square root of 1/2
```javascript
console.log(Math.SQRT1_2);  // 0.7071067811865476
```

---

## 8.3 Basic Math Operations

### Math.abs()
Returns absolute value (distance from 0, always positive)
```javascript
console.log(Math.abs(5));     // 5
console.log(Math.abs(-115));  // 115
console.log(Math.abs(-3.7));  // 3.7
```

### Math.round()
Rounds to the nearest integer
```javascript
console.log(Math.round(3.7));  // 4
console.log(Math.round(3.2));  // 3
console.log(Math.round(3.5));  // 4 (rounds up at .5)
```

### Math.ceil()
Rounds UP to the nearest integer
```javascript
console.log(Math.ceil(3.1));  // 4
console.log(Math.ceil(3.9));  // 4
console.log(Math.ceil(-3.1)); // -3
```

### Math.floor()
Rounds DOWN to the nearest integer
```javascript
console.log(Math.floor(3.9));  // 3
console.log(Math.floor(3.1));  // 3
console.log(Math.floor(-3.1)); // -4
```

### Math.trunc()
Returns integer part (removes decimal)
```javascript
console.log(Math.trunc(3.7));   // 3
console.log(Math.trunc(-3.7));  // -3
console.log(Math.trunc(3.1));   // 3
```

**Difference:**
- `trunc()`: Simply removes decimal part
- `floor()`: Rounds down (towards negative infinity)
- `ceil()`: Rounds up (towards positive infinity)

### Comparison Table
| Number | Math.round() | Math.floor() | Math.ceil() | Math.trunc() |
|--------|--------------|--------------|-------------|--------------|
| 3.7    | 4            | 3            | 4           | 3            |
| 3.2    | 3            | 3            | 4           | 3            |
| -3.7   | -4           | -4           | -3          | -3           |
| -3.2   | -3           | -4           | -3          | -3           |

---

## 8.4 Exponential and Logarithmic Functions

### Math.pow(x, y)
Returns x to the power of y
```javascript
console.log(Math.pow(2, 5));  // 32
console.log(2 ** 5);          // 32 (same result using exponent operator)
```

### Math.sqrt()
Returns square root of x
```javascript
console.log(Math.sqrt(25));  // 5
console.log(Math.sqrt(16));  // 4
console.log(Math.sqrt(-1));  // NaN (cannot calculate negative)
```

### Math.cbrt()
Returns cube root of x
```javascript
console.log(Math.cbrt(27));  // 3
console.log(Math.cbrt(-8));  // -2
```

### Math.exp()
Returns e^x (Euler's number to the power of x)
```javascript
console.log(Math.exp(1));  // 2.718281828459045 (e^1)
console.log(Math.exp(2));  // 7.38905609893065 (e^2)
```

### Math.log()
Returns natural logarithm (base e) of x
```javascript
console.log(Math.log(1));   // 0
console.log(Math.log(2));   // 0.6931471805599453
console.log(Math.log(10));  // 2.302585092994046
```

### Math.log10()
Returns base 10 logarithm of x
```javascript
console.log(Math.log10(10));  // 1
console.log(Math.log10(100)); // 2
console.log(Math.log10(1000)); // 3
```

### Math.log2()
Returns base 2 logarithm of x
```javascript
console.log(Math.log2(2));   // 1
console.log(Math.log2(8));   // 3
console.log(Math.log2(16));  // 4
```

---

## 8.5 Trigonometric Functions

### Math.sin()
Returns sine of angle (in radians)
```javascript
console.log(Math.sin(0));           // 0
console.log(Math.sin(Math.PI / 2));  // 1
```

### Math.cos()
Returns cosine of angle (in radians)
```javascript
console.log(Math.cos(0));           // 1
console.log(Math.cos(Math.PI));      // -1
```

### Math.tan()
Returns tangent of angle (in radians)
```javascript
console.log(Math.tan(0));           // 0
console.log(Math.tan(Math.PI / 4));  // 1
```

### Converting Degrees to Radians
```javascript
const toRadians = (degrees) => degrees * (Math.PI / 180);
console.log(toRadians(90));  // 1.5707963267948966 (π/2)
```

### Converting Radians to Degrees
```javascript
const toDegrees = (radians) => radians * (180 / Math.PI);
console.log(toDegrees(Math.PI));  // 180
```

---

## 8.6 Maximum and Minimum

### Math.max()
Returns the largest of zero or more numbers
```javascript
console.log(Math.max(1, 3, 2));           // 3
console.log(Math.max(-1, -3, -2));        // -1
console.log(Math.max(1, 3, 2, 5, 4));     // 5
```

### Finding max in array
```javascript
const numbers = [1, 3, 2, 5, 4];
console.log(Math.max(...numbers));  // 5 (using spread operator)
```

### Math.min()
Returns the smallest of zero or more numbers
```javascript
console.log(Math.min(1, 3, 2));           // 1
console.log(Math.min(-1, -3, -2));        // -3
console.log(Math.min(1, 3, 2, 5, 4));     // 1
```

### Finding min in array
```javascript
const numbers = [1, 3, 2, 5, 4];
console.log(Math.min(...numbers));  // 1
```

---

## 8.7 Random Numbers

### Math.random()
Returns random number between 0 (inclusive) and 1 (exclusive)
```javascript
console.log(Math.random());  // 0.123456789... (different each time)
```

### Random Integer in Range
```javascript
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(1, 10));  // Random integer between 1 and 10
```

### Random Number with Decimals
```javascript
const randomFloat = (min, max, decimals = 2) => {
    return (Math.random() * (max - min) + min).toFixed(decimals);
};

console.log(randomFloat(1, 10, 3));  // Random float like 5.123
```

### Random Item from Array
```javascript
const randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const colors = ["red", "green", "blue"];
console.log(randomItem(colors));  // Random color
```

### Random Boolean
```javascript
const randomBool = () => Math.random() < 0.5;
console.log(randomBool());  // true or false
```

---

## 8.8 Other Useful Math Methods

### Math.sign()
Returns sign of a number (1, -1, 0, -0, NaN)
```javascript
console.log(Math.sign(10));   // 1
console.log(Math.sign(-10));  // -1
console.log(Math.sign(0));    // 0
console.log(Math.sign(-0));   // -0
console.log(Math.sign(NaN));  // NaN
```

### Math.clz32()
Returns number of leading zero bits in 32-bit representation
```javascript
console.log(Math.clz32(1));   // 31
console.log(Math.clz32(1000)); // 22
```

### Math.imul()
Returns 32-bit integer multiplication
```javascript
console.log(Math.imul(2, 4));   // 8
console.log(Math.imul(0x7fffffff, 0x7fffffff)); // 1
```

---

## 8.9 Practical Examples

### Example 1: Generate Random Color
```javascript
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

console.log(randomColor());  // "rgb(123, 45, 67)"
```

### Example 2: Generate Random Hex Color
```javascript
const randomHexColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};

console.log(randomHexColor());  // "#3a7b2c"
```

### Example 3: Calculate Distance Between Two Points
```javascript
const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

console.log(distance(0, 0, 3, 4));  // 5
```

### Example 4: Calculate Area of Circle
```javascript
const circleArea = (radius) => {
    return Math.PI * Math.pow(radius, 2);
};

console.log(circleArea(5));  // 78.53981633974483
```

### Example 5: Convert Celsius to Fahrenheit
```javascript
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212
```

### Example 6: Calculate Hypotenuse
```javascript
const hypotenuse = (a, b) => {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

console.log(hypotenuse(3, 4));  // 5
```

### Example 7: Round to Nearest Multiple
```javascript
const roundToMultiple = (number, multiple) => {
    return Math.round(number / multiple) * multiple;
};

console.log(roundToMultiple(17, 5));  // 15
console.log(roundToMultiple(18, 5));  // 20
```

### Example 8: Generate Random ID
```javascript
const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};

console.log(generateId());  // "x7k2m9p1q"
```

---

## 8.10 Interview Questions - Chapter 8

### Q1: Difference between Math.floor(), Math.ceil(), and Math.round()?
**Answer:**
- `floor()`: Always rounds down
- `ceil()`: Always rounds up
- `round()`: Rounds to nearest (up at .5)

### Q2: How to generate random integer between min and max?
**Answer:** `Math.floor(Math.random() * (max - min + 1)) + min`

### Q3: What does Math.random() return?
**Answer:** Random number between 0 (inclusive) and 1 (exclusive)

### Q4: Difference between Math.trunc() and Math.floor()?
**Answer:**
- `trunc()`: Simply removes decimal part
- `floor()`: Rounds towards negative infinity

### Q5: How to find max/min in an array?
**Answer:** `Math.max(...arr)` or `Math.min(...arr)` using spread operator

---

# CHAPTER 9: NUMBERS

## 9.1 What is a Number?

### Definition
Numbers in JavaScript are represented as 64-bit floating-point values (IEEE 754 standard). This means all numbers are technically floating-point, even integers.

### Number Types
```javascript
let integer = 42;
let float = 3.14;
let negative = -10;
let scientific = 1.5e10;  // 15000000000
```

### Number Limits
```javascript
console.log(Number.MAX_VALUE);        // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);        // 5e-324
console.log.Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 (-(2^53 - 1))
```

---

## 9.2 Number Methods

### 1. Number.isInteger()
Checks if value is integer
```javascript
console.log(Number.isInteger(42));     // true
console.log(Number.isInteger(3.14));   // false
console.log(Number.isInteger("42"));   // false
```

### 2. Number.isFinite()
Checks if value is finite number
```javascript
console.log(Number.isFinite(42));      // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));     // false
```

### 3. Number.isNaN()
Checks if value is NaN (more reliable than global isNaN())
```javascript
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN(42));        // false
console.log(Number.isNaN("42"));      // false
console.log(isNaN("42"));             // true (global isNaN converts)
```

### 4. Number.isSafeInteger()
Checks if value is safe integer (within 2^53 - 1)
```javascript
console.log(Number.isSafeInteger(42));              // true
console.log(Number.isSafeInteger(9007199254740992)); // false (exceeds safe integer)
```

### 5. Number.parseFloat()
Parses string to floating-point number
```javascript
console.log(Number.parseFloat("3.14"));    // 3.14
console.log(Number.parseFloat("42"));     // 42
console.log(Number.parseFloat("42abc"));   // 42
console.log(Number.parseFloat("abc42"));   // NaN
```

### 6. Number.parseInt()
Parses string to integer
```javascript
console.log(Number.parseInt("42"));      // 42
console.log(Number.parseInt("3.14"));    // 3
console.log(Number.parseInt("42abc"));   // 42
console.log(Number.parseInt("abc42"));   // NaN
```

---

## 9.3 Number Prototype Methods

### 1. toFixed()
Returns string with specified decimal places
```javascript
const num = 3.14159;
console.log(num.toFixed(2));  // "3.14"
console.log(num.toFixed(0));  // "3"
console.log(num.toFixed(4));  // "3.1416"
```

### 2. toPrecision()
Returns string with specified significant digits
```javascript
const num = 123.456;
console.log(num.toPrecision(4));  // "123.5"
console.log(num.toPrecision(2));  // "1.2e+2"
```

### 3. toString()
Converts number to string
```javascript
const num = 42;
console.log(num.toString());     // "42"
console.log(num.toString(2));    // "101010" (binary)
console.log(num.toString(8));    // "52" (octal)
console.log(num.toString(16));   // "2a" (hexadecimal)
```

### 4. toExponential()
Returns string in exponential notation
```javascript
const num = 123456;
console.log(num.toExponential());    // "1.23456e+5"
console.log(num.toExponential(2));   // "1.23e+5"
```

### 5. toLocaleString()
Returns string with locale-specific formatting
```javascript
const num = 1234567.89;
console.log(num.toLocaleString());  // "1,234,567.89" (US locale)
console.log(num.toLocaleString('de-DE'));  // "1.234.567,89" (German)
```

### 6. valueOf()
Returns primitive value of Number object
```javascript
const numObj = new Number(42);
console.log(numObj.valueOf());  // 42
```

---

## 9.4 Special Number Values

### Infinity
Represents positive infinity
```javascript
console.log(1 / 0);           // Infinity
console.log(Number.POSITIVE_INFINITY);  // Infinity
```

### -Infinity
Represents negative infinity
```javascript
console.log(-1 / 0);          // -Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
```

### NaN (Not a Number)
Represents invalid number operation
```javascript
console.log(0 / 0);          // NaN
console.log(Number("abc"));   // NaN
console.log(Math.sqrt(-1));   // NaN
```

**Important:** NaN is not equal to itself
```javascript
console.log(NaN === NaN);    // false
console.log(Number.isNaN(NaN)); // true (correct way to check)
```

---

## 9.5 Number Formatting

### Currency Formatting
```javascript
const price = 1234.56;
console.log(price.toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD' 
}));
// "$1,234.56"

console.log(price.toLocaleString('en-IN', { 
    style: 'currency', 
    currency: 'INR' 
}));
// "₹1,234.56"
```

### Percentage Formatting
```javascript
const value = 0.75;
console.log(value.toLocaleString('en-US', { 
    style: 'percent' 
}));
// "75%"
```

### Unit Formatting
```javascript
const distance = 1500;
console.log(distance.toLocaleString('en-US', { 
    style: 'unit', 
    unit: 'kilometer' 
}));
// "1,500 km"
```

---

## 9.6 Number Parsing

### parseInt()
Parses string to integer
```javascript
console.log(parseInt("42"));        // 42
console.log(parseInt("42px"));      // 42
console.log(parseInt("px42"));      // NaN
console.log(parseInt("101", 2));    // 5 (binary)
console.log(parseInt("FF", 16));    // 255 (hexadecimal)
```

### parseFloat()
Parses string to float
```javascript
console.log(parseFloat("3.14"));    // 3.14
console.log(parseFloat("3.14px"));   // 3.14
console.log(parseFloat("px3.14"));  // NaN
```

### Number() Constructor
Converts value to number
```javascript
console.log(Number("42"));         // 42
console.log(Number("3.14"));       // 3.14
console.log(Number("true"));       // NaN
console.log(Number(true));         // 1
console.log(Number(null));         // 0
console.log(Number(undefined));    // NaN
```

---

## 9.7 Number Arithmetic

### Addition
```javascript
console.log(5 + 3);    // 8
console.log("5" + 3);  // "53" (string concatenation)
```

### Subtraction
```javascript
console.log(5 - 3);    // 2
console.log("5" - 3);  // 2 (string converted to number)
```

### Multiplication
```javascript
console.log(5 * 3);    // 15
console.log("5" * 3);  // 15 (string converted to number)
```

### Division
```javascript
console.log(6 / 3);    // 2
console.log(5 / 0);    // Infinity
console.log(0 / 0);    // NaN
```

### Modulus (Remainder)
```javascript
console.log(10 % 3);   // 1
console.log(11 % 3);   // 2
console.log(12 % 3);   // 0
```

### Exponentiation
```javascript
console.log(2 ** 3);   // 8
console.log(Math.pow(2, 3));  // 8 (same result)
```

### Increment/Decrement
```javascript
let x = 5;
x++;  // 6 (post-increment)
++x;  // 7 (pre-increment)
x--;  // 6 (post-decrement)
--x;  // 5 (pre-decrement)
```

---

## 9.8 Practical Examples

### Example 1: Format Number with Commas
```javascript
const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

console.log(formatNumber(1234567));  // "1,234,567"
```

### Example 2: Generate Random Number in Range
```javascript
const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInRange(1, 100));  // Random between 1-100
```

### Example 3: Check if Number is Even or Odd
```javascript
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

console.log(isEven(4));  // true
console.log(isOdd(4));   // false
```

### Example 4: Calculate Factorial
```javascript
const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

console.log(factorial(5));  // 120
```

### Example 5: Check if Number is Prime
```javascript
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
```

### Example 6: Calculate Fibonacci
```javascript
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10));  // 55
```

### Example 7: Round to Decimal Places
```javascript
const roundToDecimals = (num, decimals) => {
    return Number(num.toFixed(decimals));
};

console.log(roundToDecimals(3.14159, 2));  // 3.14
```

### Example 8: Calculate Average
```javascript
const average = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
};

console.log(average(1, 2, 3, 4, 5));  // 3
```

### Example 9: Find Greatest Common Divisor (GCD)
```javascript
const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

console.log(gcd(48, 18));  // 6
```

### Example 10: Convert Bytes to Human Readable Format
```javascript
const bytesToHuman = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
};

console.log(bytesToHuman(1024));      // "1 KB"
console.log(bytesToHuman(1048576));   // "1 MB"
console.log(bytesToHuman(1073741824)); // "1 GB"
```

---

## 9.9 Interview Questions - Chapter 9

### Q1: What is the difference between Number.isNaN() and global isNaN()?
**Answer:**
- `Number.isNaN()`: Only returns true for actual NaN
- `isNaN()`: Converts value to number first, then checks

### Q2: What is a safe integer in JavaScript?
**Answer:** Integer within -(2^53 - 1) to (2^53 - 1). Beyond this, precision is lost.

### Q3: Difference between toFixed() and toPrecision()?
**Answer:**
- `toFixed()`: Specifies decimal places
- `toPrecision()`: Specifies significant digits

### Q4: Why is 0.1 + 0.2 !== 0.3 in JavaScript?
**Answer:** Floating-point precision issue. Use `Number.EPSILON` or toFixed() for comparison.

### Q5: How to check if a value is a number?
**Answer:** `typeof value === 'number' && !isNaN(value)` or `Number.isFinite(value)`

### Q6: What is BigInt and when to use it?
**Answer:** For integers larger than 2^53 - 1. Created by appending 'n' to number.

---

# QUICK REFERENCE

## String Methods
```javascript
// Search
str.indexOf("text")       // First occurrence index
str.lastIndexOf("text")   // Last occurrence index
str.includes("text")      // Check if contains
str.startsWith("text")    // Check if starts with
str.endsWith("text")      // Check if ends with

// Extract
str.slice(start, end)     // Extract portion
str.substring(start, end) // Extract (no negative)
str.charAt(index)         // Character at index
str.at(index)             // Character (supports negative)

// Modify
str.replace("old", "new")  // Replace first
str.replaceAll("old", "new") // Replace all
str.toUpperCase()          // To uppercase
str.toLowerCase()          // To lowercase
str.trim()                 // Remove whitespace
str.split(",")             // Split to array
str.repeat(3)              // Repeat string
```

## Math Methods
```javascript
// Constants
Math.PI                    // 3.14159...
Math.E                     // 2.71828...

// Rounding
Math.round(3.7)            // 4
Math.floor(3.7)            // 3
Math.ceil(3.7)             // 4
Math.trunc(3.7)            // 3

// Operations
Math.abs(-5)               // 5
Math.pow(2, 3)             // 8
Math.sqrt(25)              // 5
Math.max(1, 2, 3)          // 3
Math.min(1, 2, 3)          // 1

// Random
Math.random()              // 0-1
```

## Number Methods
```javascript
// Checks
Number.isInteger(42)       // true
Number.isFinite(42)        // true
Number.isNaN(NaN)          // true
Number.isSafeInteger(42)   // true

// Conversion
Number("42")               // 42
parseInt("42")             // 42
parseFloat("3.14")         // 3.14

// Formatting
num.toFixed(2)             // "3.14"
num.toPrecision(4)         // "3.142"
num.toString()             // "42"
num.toLocaleString()       // "1,234"
```

---

# BEST PRACTICES

## Strings
1. Use template literals for string interpolation
2. Use `includes()` instead of `indexOf() !== -1`
3. Use `trim()` for user input validation
4. Use `slice()` for extraction (supports negative indices)
5. Be aware of case sensitivity in string methods

## Math
1. Use `Math.floor()` for random integer generation
2. Use spread operator with Math.max/min for arrays
3. Use `Math.abs()` for distance calculations
4. Remember Math methods are static (no 'new' needed)
5. Use radians for trigonometric functions

## Numbers
1. Use `Number.isNaN()` instead of global `isNaN()`
2. Use `toFixed()` for currency display
3. Be aware of floating-point precision issues
4. Use `toLocaleString()` for user-friendly formatting
5. Check for safe integers when dealing with large numbers

---

# COMMON MISTAKES TO AVOID

## Strings
1. Confusing `slice()` and `substring()` with negative indices
2. Forgetting that strings are immutable
3. Not handling case sensitivity in search methods
4. Using `substr()` (deprecated)
5. Forgetting that `replace()` only replaces first occurrence

## Math
1. Forgetting that `Math.random()` returns 0-1 (not including 1)
2. Using degrees instead of radians for trig functions
3. Not handling NaN results from invalid operations
4. Forgetting that Math methods are static
5. Not using spread operator with Math.max/min for arrays

## Numbers
1. Confusing `Number()` constructor with `new Number()`
2. Not handling floating-point precision issues
3. Using `isNaN()` instead of `Number.isNaN()`
4. Forgetting about safe integer limits
5. Not validating user input before number operations

---

**End of Chapter 7-9 Notes**
**Good luck with your interview preparation! 🚀**
