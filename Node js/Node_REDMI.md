# Node.js Complete Revision Notes
## For Interview Preparation & Quick Reference

---

## Table of Contents
1. [Introduction to Node.js](#chapter-1-introduction-to-nodejs)
2. [Basic Node.js & Core Modules](#chapter-2-basic-nodejs--core-modules)
3. [Creating HTTP Servers](#chapter-3-creating-http-servers)
4. [Request and Response Objects](#chapter-4-request-and-response-objects)
5. [Parsing Requests & Routing](#chapter-5-parsing-requests--routing)
6. [Events & Debugging](#chapter-6-events--debugging)
7. [NPM Package Manager](#chapter-7-npm-package-manager)
8. [Error Handling & Debugging](#chapter-8-error-handling--debugging)
9. [Interview Questions & Quick Reference](#interview-questions--quick-reference)

---

## Chapter 1: Introduction to Node.js

### What is Node.js?
**Definition:** Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It's built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model.

**Key Features:**
- **Single-threaded:** Uses a single thread with event loop for non-blocking I/O
- **Asynchronous & Event-driven:** Operations don't block the execution
- **Cross-platform:** Runs on Windows, Linux, macOS
- **Fast execution:** Powered by V8 engine
- **NPM ecosystem:** Largest package registry

**Use Cases:**
- Building web servers and APIs
- Real-time applications (chat apps, gaming)
- Microservices architecture
- Streaming applications
- Command-line tools

**Interview Questions:**
- Q: What is Node.js?
- A: Node.js is a JavaScript runtime built on Chrome's V8 engine that allows running JavaScript on the server-side.

- Q: Why is Node.js single-threaded?
- A: Node.js uses a single-threaded event loop model for non-blocking I/O operations, making it efficient for I/O-bound tasks.

---

## Chapter 2: Basic Node.js & Core Modules

### Console Module
**Definition:** The console module provides a simple debugging console similar to JavaScript console in browsers.

**Methods:**
- `console.log()` - Prints to stdout
- `console.error()` - Prints to stderr
- `console.warn()` - Prints warning message

**Example:**
```javascript
console.log("My name is Rishi singh. I am Start a Node js");
console.error("This is an error");
console.warn("This is a warning");
```

**Use Case:** Debugging, logging application state, tracking execution flow.

---

### File System (fs) Module
**Definition:** The fs module provides an API for interacting with the file system in a manner modeled on standard POSIX functions.

**Key Methods:**
- `fs.writeFile()` - Asynchronously writes data to file
- `fs.readFileSync()` - Synchronously reads file
- `fs.appendFile()` - Appends data to file
- `fs.unlink()` - Deletes file

**Example:**
```javascript
const fs = require("fs");

// Write file asynchronously
fs.writeFile("output.txt", "Writing File", (err) => {
  if (err) console.log("Error Occurred");
  else console.log("File Written Successfully");
});

// Write file synchronously
fs.writeFileSync("output.txt", "Hello World");
```

**Use Cases:**
- Reading configuration files
- Logging data to files
- Storing user data
- File upload handling

**Interview Questions:**
- Q: What is the difference between fs.writeFile() and fs.writeFileSync()?
- A: writeFile() is asynchronous (non-blocking), while writeFileSync() is synchronous (blocking).

- Q: How do you handle errors in fs operations?
- A: Use callback with error parameter or try-catch for synchronous operations.

---

### Requiring Modules
**Definition:** Node.js uses CommonJS module system where `require()` is used to import modules.

**Example:**
```javascript
const fs = require("fs");
const http = require("http");
const myModule = require("./myModule");
```

**Use Case:** Importing built-in modules, local files, or npm packages.

---

## Chapter 3: Creating HTTP Servers

### HTTP Module
**Definition:** The http module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

**Key Methods:**
- `http.createServer()` - Creates an HTTP server
- `server.listen()` - Starts listening on specified port
- `requestListener` - Callback function to handle requests

**Example:**
```javascript
const http = require("http");

// Method 1: Using function expression
const server = http.createServer((req, res) => {
  console.log(req);
});

// Method 2: Using named function
function requestListener(req, res) {
  console.log(req);
}
const server2 = http.createServer(requestListener);

// Start server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

**Use Cases:**
- Building web servers
- Creating REST APIs
- Serving static files
- Proxy servers

**Interview Questions:**
- Q: How do you create an HTTP server in Node.js?
- A: Use http.createServer() with a callback function, then call server.listen() on a specific port.

- Q: What is the purpose of the callback in createServer()?
- A: The callback handles incoming HTTP requests and sends responses.

---

## Chapter 4: Request and Response Objects

### Request Object (req)
**Definition:** The request object represents the HTTP request and contains properties like URL, method, headers.

**Key Properties:**
- `req.url` - The path part of the URL
- `req.method` - HTTP method (GET, POST, PUT, DELETE)
- `req.headers` - HTTP headers
- `req.on()` - Event listener for data streams

### Response Object (res)
**Definition:** The response object is used to send data back to the client.

**Key Methods:**
- `res.writeHead()` - Writes HTTP status code and headers
- `res.write()` - Writes body content
- `res.end()` - Signals response completion
- `res.setHeader()` - Sets HTTP headers

**Example:**
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Like, Share, and Subscribe!</h1></body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>About Page</title></head>');
    res.write('<body><h1>This is the about page</h1></body>');
    res.write('</html>');
    res.end();
  }
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

**Use Cases:**
- Building multi-page websites
- API endpoints
- Dynamic content serving
- Form handling

**Interview Questions:**
- Q: What is the difference between res.write() and res.end()?
- A: res.write() sends chunks of data, res.end() signals the response is complete and must be called.

- Q: How do you set response headers?
- A: Use res.setHeader() before writing content or res.writeHead() to set status and headers together.

---

## Chapter 5: Parsing Requests & Routing

### Form Data Parsing
**Definition:** Parsing form data involves extracting data sent via HTTP POST requests from the request body.

**Key Concepts:**
- **Buffer:** Temporary storage for binary data
- **URLSearchParams:** API for parsing URL query strings
- **req.on('data'):** Event listener for incoming data chunks
- **req.on('end'):** Event listener when data transmission completes

**Example - Basic Parsing:**
```javascript
const body = [];

req.on("data", (chunk) => {
  body.push(chunk);
  console.log(chunk);
});

req.on("end", () => {
  const fullBody = Buffer.concat(body).toString();
  console.log(fullBody);
  // Save raw form data
  fs.writeFileSync("userData.txt", fullBody);
});
```

**Example - Advanced Parsing with URLSearchParams:**
```javascript
req.on("end", () => {
  const bodyObject = Object.fromEntries(
    new URLSearchParams(Buffer.concat(body).toString())
  );
  console.log(bodyObject);
  fs.writeFileSync("userData1.txt", JSON.stringify(bodyObject));
});
```

### Routing
**Definition:** Routing determines how an application responds to a client request to a particular endpoint.

**Example:**
```javascript
const userRequestHandler = (req, res) => {
  // Route: /user2 (GET)
  if (req.url === "/user2" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>User2 Page</h1>`);
    return;
  }

  // Route: /user2/submit (POST)
  if (req.url === "/user2/submit" && req.method === "POST") {
    // Handle form submission
    return;
  }

  // 404 Fallback
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Page Not Found</h1>");
};
```

**Use Cases:**
- User registration forms
- Login systems
- Data submission
- Search functionality
- API endpoints

**Interview Questions:**
- Q: How do you parse form data in Node.js?
- A: Collect data chunks using req.on('data'), then parse with Buffer.concat() and URLSearchParams.

- Q: What is routing in Node.js?
- A: Routing is the mechanism to determine which code should run based on the URL and HTTP method of the request.

---

## Chapter 6: Events & Debugging

### Events Module
**Definition:** The events module provides the EventEmitter class for handling events in Node.js.

**Key Concepts:**
- **EventEmitter:** Core class for event handling
- **on():** Registers event listener
- **emit():** Triggers an event
- **once():** Registers one-time event listener

**Example:**
```javascript
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Register event listener
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// Trigger event
myEmitter.emit('event');
```

**Use Cases:**
- Custom event handling
- Pub/sub patterns
- Asynchronous communication
- Real-time updates

### Debugging
**Definition:** Process of identifying and removing errors from code.

**Debugging Techniques:**
- **console.log():** Simple logging
- **debugger statement:** Pauses execution
- **Node.js debugger:** Built-in debugging
- **VS Code debugger:** IDE-based debugging

**Example:**
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  debugger; // Execution pauses here
  console.log(req.url, req.method);
  res.end('Hello');
});
```

**Use Cases:**
- Finding bugs
- Understanding code flow
- Performance optimization
- Testing logic

**Interview Questions:**
- Q: What is EventEmitter in Node.js?
- A: EventEmitter is a class that facilitates communication between objects using events, following the observer pattern.

- Q: How do you debug Node.js applications?
- A: Use console.log, debugger statements, Node.js built-in debugger, or IDE debuggers like VS Code.

---

## Chapter 7: NPM Package Manager

### What is NPM?
**Definition:** NPM (Node Package Manager) is the default package manager for Node.js JavaScript runtime.

**Key Commands:**
- `npm init` - Initialize a new project
- `npm install` - Install dependencies
- `npm install <package>` - Install specific package
- `npm install -g <package>` - Install globally
- `npm uninstall <package>` - Remove package
- `npm update` - Update packages
- `npm run <script>` - Run npm scripts

### package.json
**Definition:** Configuration file that contains metadata about the project and its dependencies.

**Key Fields:**
```json
{
  "name": "rishi",
  "version": "1.0.0",
  "description": "This is my First Node.js project",
  "license": "ISC",
  "author": "By Rishi singh",
  "type": "commonjs",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }
}
```

**Example with NPM:**
```javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello from ES Module');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

**Use Cases:**
- Managing project dependencies
- Running scripts
- Publishing packages
- Version control

**Interview Questions:**
- Q: What is package.json?
- A: package.json is a configuration file that contains project metadata, dependencies, and scripts.

- Q: What is the difference between dependencies and devDependencies?
- A: dependencies are required for production, devDependencies are only for development (testing, building).

---

## Chapter 8: Error Handling & Debugging

### Types of Errors
**1. Syntax Errors**
- Occur during code parsing
- Prevent code from running
- Example: Missing brackets, typos

```javascript
// syntax.js
console.log("Hello"  // Missing closing parenthesis
```

**2. Runtime Errors**
- Occur during execution
- Code starts but crashes
- Example: Calling undefined function

```javascript
// runtime.js
const x = undefined;
console.log(x.length); // Cannot read property 'length' of undefined
```

**3. Logical Errors**
- Code runs but produces wrong results
- Hardest to debug
- Example: Wrong algorithm

```javascript
// logical.js
function add(a, b) {
  return a - b; // Wrong logic
}
```

### Error Handling Techniques
**1. Try-Catch Block**
```javascript
try {
  const data = fs.readFileSync('nonexistent.txt');
} catch (error) {
  console.error('Error:', error.message);
}
```

**2. Error Callbacks**
```javascript
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
```

**3. Error Events**
```javascript
const server = http.createServer((req, res) => {
  // Handle errors
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
```

**Example - Complete Error Handling:**
```javascript
const http = require('http');
const fs = require('fs');

const userRequestHandler = (req, res) => {
  try {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html><body><h1>Enter Details:</h1>');
      res.write('<form action="/submit-details" method="POST">');
      res.write('<input type="text" name="username"><br>');
      res.write('<input type="submit" value="Submit">');
      res.write('</form></body></html>');
      return res.end();
    } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
      const body = [];
      req.on('data', chunk => body.push(chunk));
      req.on('end', () => {
        try {
          const fullBody = Buffer.concat(body).toString();
          const params = new URLSearchParams(fullBody);
          const bodyObject = Object.fromEntries(params);
          fs.writeFile('user.txt', JSON.stringify(bodyObject), error => {
            if (error) {
              console.error('Write error:', error);
              res.statusCode = 500;
              return res.end('Internal Server Error');
            }
            console.log('Data written successfully');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
        } catch (parseError) {
          console.error('Parse error:', parseError);
          res.statusCode = 400;
          return res.end('Bad Request');
        }
      });
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  } catch (error) {
    console.error('Handler error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};

module.exports = userRequestHandler;
```

**Use Cases:**
- File operations
- Network requests
- Database operations
- User input validation

**Interview Questions:**
- Q: What are the types of errors in Node.js?
- A: Syntax errors (parsing), Runtime errors (execution), Logical errors (wrong output).

- Q: How do you handle errors in Node.js?
- A: Use try-catch for synchronous code, error callbacks for async operations, and error events for streams.

---

## Interview Questions & Quick Reference

### Quick Reference Table

| Concept | Module/Method | Use Case |
|---------|--------------|----------|
| Console | console.log() | Debugging, logging |
| File System | fs.writeFile() | Writing files |
| HTTP Server | http.createServer() | Creating web servers |
| Request | req.url, req.method | Accessing request info |
| Response | res.end(), res.write() | Sending responses |
| Events | EventEmitter.on() | Event handling |
| NPM | npm install | Package management |
| Error Handling | try-catch | Error management |

### Top 20 Interview Questions

1. **What is Node.js?**
   - JavaScript runtime built on V8 engine
   - Runs server-side JavaScript
   - Non-blocking I/O model

2. **What is the difference between Node.js and JavaScript?**
   - JavaScript is a language, Node.js is a runtime
   - JavaScript runs in browsers, Node.js runs on servers

3. **What is the event loop in Node.js?**
   - Mechanism that handles asynchronous callbacks
   - Processes events in a single-threaded manner
   - Enables non-blocking I/O operations

4. **What are modules in Node.js?**
   - Reusable blocks of code
   - Can be built-in, local, or third-party
   - Use require() to import

5. **What is the difference between CommonJS and ES Modules?**
   - CommonJS: require/module.exports (Node.js default)
   - ES Modules: import/export (modern standard)

6. **How do you create an HTTP server?**
   ```javascript
   const http = require('http');
   const server = http.createServer((req, res) => {
     res.end('Hello');
   });
   server.listen(3000);
   ```

7. **What is the difference between res.send() and res.end()?**
   - res.send() is Express.js method
   - res.end() is Node.js core method
   - res.end() must be called to complete response

8. **How do you handle POST requests?**
   - Check req.method === 'POST'
   - Parse request body using req.on('data')
   - Process data in req.on('end')

9. **What is NPM?**
   - Node Package Manager
   - Manages dependencies
   - Largest JavaScript package registry

10. **What is package.json?**
    - Project configuration file
    - Contains metadata and dependencies
    - Defines scripts and project info

11. **How do you handle errors in Node.js?**
    - try-catch for synchronous code
    - Error callbacks for async operations
    - Error events for streams

12. **What is the difference between fs.readFile() and fs.readFileSync()?**
    - readFile() is asynchronous (non-blocking)
    - readFileSync() is synchronous (blocking)

13. **What is middleware in Node.js?**
    - Functions that have access to req, res, next
    - Can modify request/response
    - Used in Express.js

14. **What is EventEmitter?**
    - Class for handling events
    - Implements observer pattern
    - Core of Node.js async architecture

15. **How do you debug Node.js applications?**
    - console.log() statements
    - debugger keyword
    - Node.js built-in debugger
    - VS Code debugger

16. **What is Buffer in Node.js?**
    - Temporary storage for binary data
    - Used for stream operations
    - Fixed-size memory allocation

17. **What is the difference between process.nextTick() and setImmediate()?**
    - process.nextTick() runs before event loop
    - setImmediate() runs after event loop phase
    - nextTick has higher priority

18. **What are streams in Node.js?**
    - Objects for reading/writing data
    - Process data in chunks
    - Types: Readable, Writable, Duplex, Transform

19. **What is callback hell and how to avoid it?**
    - Nested callbacks making code hard to read
    - Avoid with Promises, async/await
    - Use modular code structure

20. **What is the difference between PUT and PATCH?**
    - PUT: Updates entire resource
    - PATCH: Partial update of resource
    - Both are HTTP methods

### Key Concepts to Remember

- **Single-threaded but event-driven:** Node.js uses one thread but handles many connections asynchronously
- **Non-blocking I/O:** Operations don't block the execution of other code
- **V8 Engine:** JavaScript engine that powers Node.js
- **REPL:** Read-Eval-Print Loop for interactive JavaScript
- **Global Objects:** Available everywhere (global, process, console, __dirname, __filename)
- **Module.exports vs exports:** Both export modules, but module.exports is the actual export object

### Common Commands

```bash
# Run Node.js file
node app.js

# Initialize project
npm init

# Install package
npm install express

# Install globally
npm install -g nodemon

# Run script
npm start

# Debug
node inspect app.js
```

---

## Summary Checklist for Interview

- [ ] Understand Node.js architecture
- [ ] Know core modules (fs, http, events, path)
- [ ] Understand asynchronous programming
- [ ] Know error handling patterns
- [ ] Understand NPM and package.json
- [ ] Know how to create HTTP servers
- [ ] Understand request/response cycle
- [ ] Know routing concepts
- [ ] Understand event-driven architecture
- [ ] Know debugging techniques

---

**Created by:** Rishi Singh  
**Purpose:** Interview Preparation & Quick Revision  
**Last Updated:** June 2026

---

*Happy Coding! 🚀*
