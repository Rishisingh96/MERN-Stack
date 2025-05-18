const currentTime = () => {
  let curTime = new Date().toLocaleTimeString();
  document.getElementById("clock").innerText = curTime;
};
currentTime();

const intervalId = setInterval(() => {
  currentTime();
}, 1000);

// I want to stop the clock after 5 seconds
//setTimeout(() => clearInterval(intervalId), 5000);
