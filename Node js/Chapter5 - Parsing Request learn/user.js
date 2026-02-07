import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

  // ================= HOME PAGE =================
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

  // ================= FORM SUBMIT =================
  if (req.url === "/submit" && req.method === "POST") {

    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody)
      // save raw form data
      fs.writeFileSync("userData.txt", fullBody);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <h2>Form Submitted Successfully ✅</h2>
        <p>Data saved in <b>userData.txt</b></p>
        <a href="/">Go Back</a>
      `);
    });

    return;
  }

  // ================= 404 =================
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 - Page Not Found</h1>");
});

// ================= SERVER =================
const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
