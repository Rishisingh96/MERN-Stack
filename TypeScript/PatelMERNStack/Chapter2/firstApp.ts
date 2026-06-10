// Object , Array, Tuple, Enum
console.log("Rishi singh.....");

//Object
// const person : {
//     firstName: string;
//     age:number;
//     xyz : {
//         address:string;
//     }
// } = {
//     firstName: "Rishi",
//     age:21,
//     xyz:{
//         address: "Basti"
//     }
// };

//Array
// const person : {
//     firstName: string;
//     age:number;
//     skills : string[]
// } = {
//     firstName: "Rishi",
//     age:21,
//     skills:["Java","Python", "Node js"]
// };


const person : {
    firstName: string;
    age:number;
    skills : string[]
} = {
    firstName: "Rishi",
    age:21,
    skills:["Java","Python", "Node js"]
};

// let firstlag : string;
// // firstlag = ["Rishi"]
// firstlag = "Rishi";

//Arrya
// let firstlag : string[];
// firstlag = ["Rishi"]
// firstlag = ["Rishi","Singh"];

// You want to put all type
let firstlag : any[]; // loose ts powerfull
firstlag = ["Rishi","Singh", 21, true];




console.log(person);
// console.log(person.age);
