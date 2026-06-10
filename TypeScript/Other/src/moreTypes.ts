let response: any = "42";

// force full type inserstion 
let numericLength:number = (response as string).length


type Book = {
    name: string
}

let bookString = '{"name":"who mored my chees"}';

// we can not get name ,
// let bookObject = JSON.parse(bookString);
// console.log(bookObject);

//Force fully say booString as a Book string
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject.name);


//input Element - type assertion
const inputElement = document.getElementById("username") as HTMLInputElement


//Difrence between Any and Unknown 

let value: any;

value = "chai";
value = [1,2,3];
value = 2.5;
value.toUpperCase();


let newValue: unknown;

newValue = "chai";
newValue = [1,2,3];
newValue = 2.5;
// newValue.toUpperCase(); //'newValue' is of type 

if(typeof newValue === 'string'){
    newValue.toUpperCase();
}

// try catch
try {
    
} catch (error) {
    // console.log(error.message); // show error
}

// GurdCheck use
try {
    
} catch (error) {
   if(error instanceof Error){
     console.log(error.message); 
   }

   console.log("Error", error);
}

const data:unknown = "Rishi singh boss"
const strData: string = data as string;



// Never data type -----
type Role = "admin" | "user" |"superadmin";

function redirectBasedOnRole(role:Role):void {
    if(role === 'admin'){
        console.log("Redirect to admin dashboard..");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return;
    }
    role; // if we not write superadmin show naver if we wrtie super admin show sueradmin
}

//naver 

function neverReturn ():never{
    while(true){
        
    }
}
