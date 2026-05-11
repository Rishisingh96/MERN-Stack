require("dotenv").config();

const http = require("http");
const app = require("./app");
const { connectToMongo } = require("./utils/db");
const { env } = require("./utils/env");

async function start() {
  await connectToMongo(env.MONGODB_URI);

  const server = http.createServer(app);
  server.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Backend listening on port ${env.PORT}`);
  });
}

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("Failed to start server", err);
  process.exit(1);
});

