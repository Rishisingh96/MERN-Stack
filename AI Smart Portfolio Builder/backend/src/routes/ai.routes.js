const express = require("express");
const { requireAuth } = require("../middleware/auth");
const { aiLimiter } = require("../middleware/rateLimit");
const {
  generateBio,
  generateProjectDescription,
  suggestSkills,
} = require("../controllers/ai.controller");

const aiRouter = express.Router();

aiRouter.post("/generate-bio", requireAuth, aiLimiter, generateBio);
aiRouter.post("/generate-project-description", requireAuth, aiLimiter, generateProjectDescription);
aiRouter.post("/suggest-skills", requireAuth, aiLimiter, suggestSkills);

module.exports = { aiRouter };

