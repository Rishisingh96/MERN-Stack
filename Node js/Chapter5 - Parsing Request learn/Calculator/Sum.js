const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);

  const body = [];

  req.on("data", chunk => body.push(chunk));

  req.on("end", () => {
    const data = Object.fromEntries(
      new URLSearchParams(Buffer.concat(body).toString())
    );

    const result = Number(data.num1) + Number(data.num2);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h2>Result: ${result}</h2>
      <a href="/calculator">Go Back</a>
    `);
  });
};

module.exports = { sumRequestHandler };
