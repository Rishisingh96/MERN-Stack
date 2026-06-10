
// Normal
const greet3 = (name:string, id:number):string=>{
    return `Welcome , ${name} and your id is ${id}`
}

const emp = greet3("Rishi", 1);
// console.log(emp);

// Default para
const greet4 = (name:string, id:number=4):string=>{
    return `Welcome , ${name} and your id is ${id}`
}

const emp1 = greet4("Rishi");
// console.log(emp1);

//Optional 
const greet5 = (name:string, id?:number):string=>{
    return `Welcome , ${name} `
}

const emp2 = greet5("Rishi");
// console.log(emp2);


const greet6 = (name:string, id?:number):string=>{
    if(id){
        return `Welcome , ${name} and Your id is ${id}`
    }else{
        return `Welcome , ${name} `
    }
}

const emp4 = greet6("Rishi");
const emp5 = greet6("Rishi",5);
console.log(emp4);
console.log(emp5);

