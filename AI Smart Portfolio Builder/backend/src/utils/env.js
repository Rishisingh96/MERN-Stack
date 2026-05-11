const { z } = require("zod");

const isTest = process.env.NODE_ENV === "test";

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  CLIENT_ORIGIN: z.string().default("http://localhost:5173"),

  MONGODB_URI: isTest ? z.string().min(1).default("mongodb://127.0.0.1:27017/aspb_test") : z.string().min(1),

  JWT_SECRET: isTest ? z.string().min(20).default("test_jwt_secret_must_be_long_enough") : z.string().min(20),
  JWT_EXPIRES_IN: z.string().default("7d"),

  OPENAI_API_KEY: z.string().optional(),
  OPENAI_MODEL: z.string().default("gpt-4.1-mini"),

  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(60_000),
  RATE_LIMIT_MAX: z.coerce.number().default(60),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  // eslint-disable-next-line no-console
  console.error("Invalid environment variables", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment variables");
}

const env = parsed.data;

module.exports = { env };

