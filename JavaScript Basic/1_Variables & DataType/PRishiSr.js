const student = {
    fullName: 'Rishi singh',
    age : 20,
    cgpa: 4.3,
    isPass: true,
};

// const name = "Rahul"
// name = "mohit"   error

// let ko update kar sakte hai
// const ko update nahi kar sakte hai
// const object - > key ko update kar sakte hai 

// student["age"] = student["age"]+1;
student["name"] = "Rahul Sharma" ;
console.log(student["name"]);
console.log(student["fullName"]);

// Qs1. Create a const object called “product” to store information shown in the picture
const product = {
    title: "Ball pen",
    ratting:4,
    offer:5 ,
    price : 340,
}
console.log(product);

// Qs2. Create a const object called “profile” to store information shown in the picture.
const product2={
    username : "shradhakhapra",
    isfollow: false,
    post:194,
    follower: 232,
    following:4,


}
console.log(product2);
console.log(typeof product2);
console.log(typeof product2["username"]);