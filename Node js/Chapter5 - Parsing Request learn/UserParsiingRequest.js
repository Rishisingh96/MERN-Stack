const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  // ================= USER2 HOME =================
  if (req.url === "/user2" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head>
          <title>User2 Page</title>
        </head>
        <body>
          <h1>My name is Rishi Singh</h1>

          <form method="POST" action="/user2/submit">
            <input type="text" name="username" placeholder="Enter your name" /><br/><br/>
            <input type="email" name="email" placeholder="Enter your email" /><br/><br/>
            <input type="password" name="password" placeholder="Enter your password" /><br/><br/>

            <label>Gender:</label>
            <select name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br/><br/>

            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return;
  }

  // ================= USER2 FORM SUBMIT =================
  if (req.url === "/user2/submit" && req.method === "POST") {
    const body = [];

    req.on("data", chunk => body.push(chunk));

    req.on("end", () => {
      const bodyObject = Object.fromEntries(
        new URLSearchParams(Buffer.concat(body).toString())
      );

      console.log(bodyObject);
      fs.writeFileSync("userData1.txt", JSON.stringify(bodyObject));

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <h2>User2 Form Submitted Successfully ✅</h2>
        <a href="/user2">Go Back</a>
      `);
    });
    return;
  }

  // ================= FALLBACK =================
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>User2 - Page Not Found</h1>");
};

module.exports = userRequestHandler;
