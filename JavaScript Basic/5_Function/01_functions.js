
// Revisit Functions
// ● Function method - call()
// ● Function method - apply()
// ● Function method - bind()
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

 //sayMyName()
// Revisit Functions
// const newFunction = new Function();

// Function method - call() 
// func.call(thisValue, arg1, arg2, arg3, /* …, */ argN)

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)  // call upon 

//  console.log("Result: ", result);

// function loginUserMessage(username = "sam"){ or doing fixed sam
function loginUserMessage(username ){
    // if(username === undefined){ or
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rishi singh"))
// console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(val1, val2, ...num1){  // Rest Oprator val1 = 200, val2 = 400
function calculateCartPrice( ...num1){  // Rest Oprator
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

// function multiplyUsingOperator(num1, num2) {
//     return num1 * num2;
// }

// Example usage:
// console.log("Using Operator:", multiplyUsingOperator(5, 3));
