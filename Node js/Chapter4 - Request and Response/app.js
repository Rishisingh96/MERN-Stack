// 4.3 Understand Request and Response Objects
//Simple NodeJs server
const http = require("http");

const server = http.createServer((req, res) =>{
    // res.setHeader('Content-Type', 'json');

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Like, Share, and Subscribe!</h1></body>');
        res.write('</html>');
        res.end();
    }else if(req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body><h1>This is the about page</h1></body>');
        res.write('</html>');
        res.end();
    }
    // console.log(req.url, req.method, req.headers);
    }
);

const PORT = 3002;
server.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});

