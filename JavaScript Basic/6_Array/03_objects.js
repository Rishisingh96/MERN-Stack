// There are majorly 3 ways to create an object in javascript:
// 1. By object literal
// 2. By creating an instance of Object directly (using new keyword)
// 3. By using an object constructor (using new keyword)
// singleton
// Object.create

// object literals
// Syntax
// let object = {name1: value1, name2:value2..... nameN: valueN



const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // [mySym]: "mykey1",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // we can not direct JsUser.full name

// By creating an instance of an Object directly
 //console.log(JsUser[mySym]);

//JsUser.email = "hitesh@chatgpt.com"
 //Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
 //console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
     console.log(`Hello JS user, ${this.name}`);
}

 //console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());