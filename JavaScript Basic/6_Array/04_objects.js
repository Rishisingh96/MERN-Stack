// By creating an instance of an Object directly
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
//  Creating an instance of an Object directly is not recommended due to the following reasons -
//  ● Lack of encapsulation
//  ● Limited Flexibility
//  ● Inconsistent object creation

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//  console.log(regularUser.fullname.userfullname.firstname); //
//console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 }
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "x@gmail.com"
    },
    {
        id: 3,
        email: "y@gmail.com"
    },
]

// users[1].email
// console.log(users[1].email)
// console.log(users[2].email)

//console.log(users[3].email)
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Rishi"
}

course.courseInstructor
console.log(course.courseInstructor)

// or
//const {courseInstructor : instructor} = course  // : name kam karne ke liye instructor use kiya

//   console.log(courseInstructor);
//  console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

