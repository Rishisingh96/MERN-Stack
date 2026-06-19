//? Union type allow you to specify 


const inputValue: (value:string|number) => void = (value:string | number) : void => {}

// inputValue(55)
inputValue("hello world")
// inputValue(true)


console.log(inputValue(55))
console.log(inputValue("hello world"))