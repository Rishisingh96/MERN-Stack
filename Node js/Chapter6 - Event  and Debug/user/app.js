import http from "http";
import userRequestHandler from "./user.js";

const server = http.createServer(userRequestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
