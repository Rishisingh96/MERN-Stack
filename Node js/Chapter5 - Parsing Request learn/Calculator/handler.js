const http = require("http");
const userRequestHandler = require("../UserParsiingRequest");
const { Calculator } = require("../Calculator/Calculator");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Like, Share, and Subscribe!</h1>");
    return;
  }

  if (req.url.startsWith("/calculator")) {
    Calculator(req, res);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 - Page Not Found</h1>");
});

server.listen(3002, () => {
  console.log("Server running at http://localhost:3002");
});
