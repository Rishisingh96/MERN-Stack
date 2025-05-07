//Qs. Create a function using the “function” keyword that takes a String as an argument &
//returns the number of vowels in the string.
function coutnVowels(str) {
    // "Rishisingh" coutn = 0 incres i =2 , 
    // vawels = a,e,i,o,u;
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
         {
            count++;
        }
    }
    console.log(count);
}

// coutnVowels("Rishisingh");

// Qs. Create an arrow function to perform the same task.

const coutnVowel = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
         {
            count++;
        }
    }
    console.log(count);
}
coutnVowel("Rishisingh");
//Qs. For a given array of numbers, print the square of each value using the forEach loop.
// const myNewArray = [200, 400, 100, 600]
// myNewArray.forEach(()=>{

// })

