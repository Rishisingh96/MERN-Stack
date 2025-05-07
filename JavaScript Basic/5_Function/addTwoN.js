// Using the * Operator:
function multiplyUsingOperator(num1, num2) {
    return num1 * num2;
}

// Example usage:
console.log("Using Operator:", multiplyUsingOperator(5, 3));

// Using the Math Object:
// function multiplyUsingMath(num1, num2) {
//     return Math.multiply(num1, num2);
// }

// Example usage:
// console.log("Using Math Object:", multiplyUsingMath(5, 3));

// Using Bitwise Operator:
function multiplyUsingBitwise(num1, num2) {
    return num1 & num2;
}

// Example usage:
// console.log("Using Bitwise Operator:", multiplyUsingBitwise(5, 3));
function multiplyUsingBitwise(num1, num2) {
    return num1 & num2;
}

// Example usage:
console.log("Using Bitwise Operator:", multiplyUsingBitwise(5, 3));


// Using a Loop:
function multiplyUsingLoop(num1, num2) {
    let result = 0;
    for (let i = 0; i < num2; i++) {
        result += num1;
    }
    return result;
}

// Example usage:
// console.log("Using Loop:", multiplyUsingLoop(5, 3));
function multiplyUsingLoop(num1, num2) {
    let result = 0;
    for (let i = 0; i < num2; i++) {
        result += num1;
    }
    return result;
}

// Example usage:
console.log("Using Loop:", multiplyUsingLoop(5, 3));

// Using Recursion:
function multiplyUsingRecursion(num1, num2) {
    if (num2 === 0) {
        return 0;
    }
    return num1 + multiplyUsingRecursion(num1, num2 - 1);
}

// Example usage:
console.log("Using Recursion:", multiplyUsingRecursion(5, 3));
function multiplyUsingRecursion(num1, num2) {
    if (num2 === 0) {
        return 0;
    }
    return num1 + multiplyUsingRecursion(num1, num2 - 1);
}

// Example usage:
console.log("Using Recursion:", multiplyUsingRecursion(5, 3));
