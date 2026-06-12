type Person = {
    name:string;
    age:number;
    isStudent:boolean;
    class?:string;
    address:{city:string; country:string}
}

const person:Person = {
    name: 'Rishi singh',
    age:27,
    isStudent:true,
    address:{
        city:"Indore", 
        country:"India"
        
    }
}


const person1:Person = {
    name: 'Rishi singh',
    age:27,
    isStudent:true,
    address:{
        city:"Indore", 
        country:"India"
        
    }
}

console.log(person.address);