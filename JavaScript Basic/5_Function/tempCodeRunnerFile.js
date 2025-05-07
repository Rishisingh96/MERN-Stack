// Example - apply()
const arr = [1, 2, 3, 4];
const newValues = ["x", "y", "z"];
arr.push.apply(arr, newValues);
console.log(arr); // (7) [1, 2, 3, 4, 'x', 'y', 'z']

// Function method - bind()

// all type of function

// In JavaScript, there are several types of functions, each with its own syntax and use cases.Here are some common types of functions in JavaScript along with examples:

// Function Declaration:

// javascript
// Copy code
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
// Function Expression:


const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // Output: 20
// Arrow Function:

const divide = (a, b) => a / b;
console.log(divide(10, 2)); // Output: 5

// IIFE(Immediately Invoked Function Expression):


    (function () {
        console.log("I am invoked immediately!");
    })();
// Generator Function:


function* countGenerator() {
    let count = 0;
    while (true) {
        yield count++;
    }
}
const counter = countGenerator();
console.log(counter.next().value); // Output: 0
console.log(counter.next().value); // Output: 1
// Callback Function:

function fetchData(callback) {
    // Simulating asynchronous operation
    setTimeout(() => {
        const data = "Hello, this is data!";
        callback(data);
    }, 1000);
}

fetchData((result) => {
    console.log(result); // Output: Hello, this is data!
});
// Higher - Order Function:


function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Output: 10
// These are just a few examples, and JavaScript offers a versatile set of functions to cater to different programming scenarios.The choice of function type depends on the use case and coding style preferences.