// setTimeout() is a function that allows you to execute a function after a specified delay.
// It takes two arguments: the function to execute and the delay in milliseconds.
function delayedFunction(x) {
  console.log("This function was delayed by 2 second", x);
}

// setTimeout(delayedFunction, 2000);
// setTimeout(() => delayedFunction(5), 2000);

//2. setInterval() is a function that allows you to execute a function repeatedly at specified intervals.
// It takes two arguments: the function to execute and the interval in milliseconds.

function repeatefunction(x) {
  console.log("This function was delayed by 1 second", x);
}
// setInterval(() => repeatefunction(10), 1000);

//3. clearTimeout() is a function that allows you to cancel a timeout that was previously set with setTimeout().
// It takes one argument: the timeout ID returned by setTimeout().
// let timeoutId = setTimeout(() => delayedFunction(5), 2000);
// clearTimeout(timeoutId);

//4. clearInterval() is a function that allows you to cancel an interval that was previously set with setInterval().
// It takes one argument: the interval ID returned by setInterval().

//Question : I want to ofter 5 seconds to stop the interval
// let intervalId = setInterval(() => repeatefunction(10), 1000);

// repeatefunction(10);
// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

let count = 1;

let intervalId = setInterval(() => {
  console.log("This function was delayed by 1 second", count);
  count++;

  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000);