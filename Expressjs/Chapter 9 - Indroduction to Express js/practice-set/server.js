const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log(`First Dummy Middleware `,req.url, req.method);
    next();
});

// app.use((req, res, next)=>{
//     console.log(`Second Dummy Middleware `,req.url,  req.method);
//     next();
// });

// app.use((req, res, next)=>{
//     console.log(`Third Dummy Middleware `);
//     res.send("<h1>Welcome to first page Rishi..</h1>");
// });

app.get("/",(req, res, next)=>{
    console.log(`Third Dummy Middleware `,req.url,  req.method);
    res.send("<h1>Welcome to first page Rishi..</h1>");
});

//4 - contact-us
app.get("/contact-us",(req, res, next)=>{
    console.log(`Handle contact-us page`,req.url,  req.method);
    res.send(`
   
          <h1>My name is Rishi Singh</h1>

          <form method="POST" action="/contact-us">
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
        
    `);
});


// handle submit form 

app.post("/contact-us",(req, res, next)=>{
    console.log(`Handle /contact-us form use POST..`, req.url,  req.method);
    res.send("<h1>Your form is submit successfull...</h1>");
});
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on address http:/localhost:${PORT}`);
})