const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res) => {
    res.send(`
        <h1>Enter Your Details:</h1>
        <form action="/host/add-home" method="POST">
            <input type="text" name="username" placeholder="Enter your name."><br>
            <input type="submit" value="Submit"><br>
        </form>
    `);
});

hostRouter.post("/add-home", (req, res) => {
    res.send(`<h1>Register successfully..</h1>
        <a href="/">Go to Home</a>`);
});

module.exports = hostRouter;
