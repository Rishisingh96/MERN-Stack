const OpenAI = require("openai");
const { env } = require("./env");

function getOpenAIClient() {
  if (!env.OPENAI_API_KEY) return null;
  return new OpenAI({ apiKey: env.OPENAI_API_KEY });
}

module.exports = { getOpenAIClient };

