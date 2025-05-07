for(let i=0; i<=10;i++){
    const element = i;
    if()
}

let myArray = ["flash","batman"]
for(let index = 0 ; index<myArray.length; index++){
    const element= myArray[index];
}
console.log(`value of myarrya${element}`)

let arr = 0;
while(arr<myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}

const arr1 = [1,2,3]
for(const num of arr1){
    console.log(num);
}
const greetings = "he"
for(const greet of greeting){
    console.log(`E`);
}
const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}
for(const[key, value] of myObject){
    console.log(key,':-',value);
}

const coding = ["js", "ruby", "java"]
// .forEach(()){}
coding.forEach(function(val)){

}

// coding.forEach(()=>{}) 
coding.forEach((item)=>{
    console.log(item);
})
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
coding.forEach((item, index, arr) =>{
    console.log(item, index, arr);
})
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})

const coding2 = ["d"]
const vlaue = coding.forEach((item)=>{})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let userBooks = books.filter((bk)=> bk.genre === 'History')