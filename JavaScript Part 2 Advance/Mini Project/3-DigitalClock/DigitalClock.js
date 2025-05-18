const currentDate = new Date();
// console.log(currentDate);

// const time = currentDate.getHours();
// console.log(time);

function getCurrentTime() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
  const time = getCurrentTime();
  process.stdout.write(`\r${time}`);
}, 1000);

// setInterval(() => {
//   const time = getCurrentTime();
//   console.log(time);
// }, 1000);