const express = require('express');
const Middlewarelearn = require('./Middlewarelearn');

const app = express();

app.use(Middlewarelearn);

// sirf logging middleware
app.use((req, res, next)=>{
    console.log("First Dummy Middleware", req.url, req.method);  
    next();  
});

// proper route
app.get("/", (req, res)=>{
    res.send('<p>Welcome to first Code..</p>');
});

app.get("/second", (req, res)=>{
    console.log("Second Dummy Middleware", req.url, req.method);
    res.send('<p>Welcome to second Code..</p>');
});


app.post("/Submit-details", (req, res)=>{
    console.log("Second Dummy Middleware", req.url, req.method);
    res.send('<p>Welcome to submit..</p>');
});

const PORT = 3005;
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});
