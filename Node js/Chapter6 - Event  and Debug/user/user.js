import fs from "fs";

const userRequestHandler = (req, res) => {

  // ===== HOME PAGE =====
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head>
          <title>My First Page</title>
        </head>
        <body>
          <h1>My name is Rishi Singh</h1>

          <form method="POST" action="/submit">
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

  // ===== FORM SUBMIT =====
  if (req.url === "/submit" && req.method === "POST") {

    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log("Raw Data:", fullBody);

      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log("Parsed Object:", bodyObject);

      fs.writeFile("user.txt", JSON.stringify(bodyObject, null, 2), (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          return res.end("<h1>File Write Error</h1>");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
          <h2>Form Submitted Successfully ✅</h2>
          <pre>${JSON.stringify(bodyObject, null, 2)}</pre>
          <a href="/">Go Back</a>
        `);
      });
    });

    return;
  }

  // ===== 404 =====
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 - Page Not Found</h1>");
};

export default userRequestHandler;
