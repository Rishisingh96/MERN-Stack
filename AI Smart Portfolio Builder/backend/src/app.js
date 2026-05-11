const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { env } = require("./utils/env");
const { notFound } = require("./middleware/notFound");
const { errorHandler } = require("./middleware/errorHandler");

const { authRouter } = require("./routes/auth.routes");
const { portfolioRouter } = require("./routes/portfolio.routes");
const { aiRouter } = require("./routes/ai.routes");
const { getPublicPortfolioByUsername } = require("./controllers/public.controller");
const { standardLimiter } = require("./middleware/rateLimit");

const app = express();

app.use(
  cors({
    origin: env.CLIENT_ORIGIN,
    credentials: false,
  })
);
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(standardLimiter);

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Public sharing endpoint consumed by frontend /portfolio/:username
app.get("/api/public/portfolio/:username", getPublicPortfolioByUsername);

app.use("/api/auth", authRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/ai", aiRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

