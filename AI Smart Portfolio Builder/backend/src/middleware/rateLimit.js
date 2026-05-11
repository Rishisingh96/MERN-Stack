const rateLimit = require("express-rate-limit");
const { env } = require("../utils/env");

const standardLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  limit: env.RATE_LIMIT_MAX,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

const aiLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  limit: Math.max(5, Math.floor(env.RATE_LIMIT_MAX / 4)),
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

module.exports = { standardLimiter, aiLimiter };

