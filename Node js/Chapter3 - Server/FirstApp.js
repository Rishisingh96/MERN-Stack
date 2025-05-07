// const http = require("http");

//1st Way to Write Function
// function requestListener(req, res){
//     console.log(req);
// }

// http.createServer( function requestListener(req, res){
//     console.log(req);
// });

// or

// http.createServer( function(req, res){
//     console.log(req);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

// server.listen(3000);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
