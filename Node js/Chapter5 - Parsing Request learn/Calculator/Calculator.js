const { sumRequestHandler } = require("../Calculator/Sum");

const Calculator = (req, res) => {
  console.log(req.url, req.method);

  // GET calculator page
  if (req.url === "/calculator" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>Calculator</h1>

          <form method="POST" action="/calculator/sum">
            <input type="number" name="num1" placeholder="Enter number 1" /><br/><br/>
            <input type="number" name="num2" placeholder="Enter number 2" /><br/><br/>
            <button type="submit">Add</button>
          </form>
        </body>
      </html>
    `);
    return;
  }

  // POST sum
  if (req.url === "/calculator/sum" && req.method === "POST") {
    sumRequestHandler(req, res);
    return;
  }
};

module.exports = { Calculator };
