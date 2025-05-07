// Using call()
function addUsingCall(a, b) {
    return  a + b;
}

const resultUsingCall = addUsingCall.call(5, 10);
console.log("Using call():", resultUsingCall); // Output: 18

// Using apply()
function addUsingApply(a, b) {
    return this + a + b;
}

const resultUsingApply = addUsingApply.apply(10, [5, 3]);
// console.log("Using apply():", resultUsingApply); // Output: 18

// Using bind()
function addUsingBind(a, b) {
    return this + a + b;
}

const boundFunction = addUsingBind.bind(10);
const resultUsingBind = boundFunction(5, 3);
// console.log("Using bind():", resultUsingBind); // Output: 18



const sides = {
 a:10,
 b:12
}
function area(shapeName) {
//  console.log(`Area of ${shapeName} is ${this.a*this.b}`);  // is output NaN 
 console.log(`Area of is ${shapeName.a*shapeName.b}`);
}
// func.area.call(sides, "rectangle") 

// function area(a,b) {
//     console.log(`Area of is ${this.a*this.b}`)
//     return  
// }

area(sides)