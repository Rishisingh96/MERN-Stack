const express = require('express');
const bodyParser = require('body-parser');
const { log } = require('console');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// home route
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to page.</h1>`);
});

// details route
app.get("/details", (req, res) => {
    console.log("hello coder..", req.url, req.method);
    res.send(`
        <h1>Enter Your Details:</h1>
        <form action="/submit-details" method="POST">
            <input type="text" name="username" placeholder="Enter your name."><br>
            <input type="submit" value="Submit"><br>
        </form>
    `);
});

app.post("/submit-details", (req, res) => {
    console.log("Your form is submit", req.url, req.method, req.body);
    res.redirect('/');
});

const PORT = 3006;
app.listen(PORT, () => {
    console.log(`your server is running at http://localhost:${PORT}`);
});
