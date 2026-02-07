// 4.3 Understand Request and Response Objects
//Simple NodeJs server
const http = require("http");

const server = http.createServer((req, res) =>{
    // res.setHeader('Content-Type', 'json');
    res.setHeader('Content-Type', 'text/html');
    req.write('<html>');
    req.write('<head><title>My First Page</title></head>');

    if(req.url === '/'){
       res.write('<body><h1>My name is Rishi singh.</h1></body>');
        res.end();
    }else if(req.url.toLocaleLowerCase === '/about'){
        req.write('<body><h1>This is the about page</h1></body>');
        res.end();
    }
    // console.log(req.url, req.method, req.headers);
    req.write('<body><h1>Like, Share, and Subscribe!</h1></body>');
    req.write('</html>');
    req.end();
}

);

const PORT = 3002;
server.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});

