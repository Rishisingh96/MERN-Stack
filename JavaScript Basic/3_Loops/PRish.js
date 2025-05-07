let nums = [2,3,4,5,6];
nums.forEach((num)=> {
    // console.log(num*num); // num**2
});

// second method
let calcSquare = (num)=>{
    // console.log(num*num);
};
// nums.forEach(calcSquare);
// num();
// nums();

let newarr = nums.map((val)=> {
    return val*2; // num**2
});
console.log(newarr);