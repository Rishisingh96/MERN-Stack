console.log("My name is Rishi singh. I am Start a Node js");

const fs = require("fs");

fs.writeFile("output.txt", "Writing File", (err) => {
  if (err) console.log("Error Occurred");
  else console.log("File Written Successfully");
});
