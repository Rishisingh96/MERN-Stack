// Import the built-in http module
import http from "http";
import fs from "fs";
import path from "path";

// Create the server
const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}, Method: ${req.method}`);
    console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
    // Handling different routes for navigation links
    if (req.url === '/home' || req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Myntra Navigation Bar</title>
        <style>
            /* Reset default styles */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
            }

            body {
                background-color: #f4f4f4;
                color: #333;
            }

            nav {
                background-color: #ff3f6c; /* Myntra pink-ish color */
                padding: 15px 30px;
                display: flex;
                justify-content: center;
                gap: 20px;
                border-radius: 0 0 10px 10px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }

            nav a {
                color: white;
                text-decoration: none;
                font-weight: bold;
                padding: 8px 15px;
                border-radius: 5px;
                transition: background-color 0.3s, transform 0.2s;
            }

            nav a:hover {
                background-color: #ff1f50;
                transform: scale(1.05);
            }

            h1 {
                text-align: center;
                margin-top: 50px;
                font-size: 2.5rem;
            }

            /* Footer style for practice */
            footer {
                margin-top: 50px;
                text-align: center;
                padding: 20px;
                background-color: #ff3f6c;
                color: white;
                border-radius: 10px 10px 0 0;
            }
        </style>
    </head>
    <body>

        <!-- Navigation Bar -->
        <nav>
            <a href="/home">Home</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/cart">Cart</a>
        </nav>


        <!-- Main Content -->
        <h1>Welcome to Myntra!</h1>

        <!-- Footer -->
        <footer>
            &copy; 2026 Myntra Clone. All rights reserved.
        </footer>
    </body>
    </html>
    `);
        return res.end();
    } else if (req.url === '/men') {
        res.write('<h1>This is the Men Page</h1>');
        return res.end();
    } else if (req.url === '/women') {
        res.write('<h1>This is the Women Page</h1>');
        return res.end();
    } else if (req.url === '/kids') {
        res.write('<h1>This is the Kids Page</h1>');
        return res.end();
    } else if (req.url === '/cart') {
        res.write('<h1>This is the Cart Page</h1>');
        return res.end();
    }
});


// Server listening on port 3001
server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001');
});
