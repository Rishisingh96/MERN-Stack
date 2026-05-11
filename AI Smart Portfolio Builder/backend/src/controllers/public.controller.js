const { User } = require("../models/User");
const { Portfolio } = require("../models/Portfolio");
const { Project } = require("../models/Project");
const { Skill } = require("../models/Skill");
const { HttpError } = require("../utils/httpError");

async function getPublicPortfolioByUsername(req, res, next) {
  try {
    const username = String(req.params.username || "").toLowerCase();
    const user = await User.findOne({ username });
    if (!user) throw new HttpError(404, "User not found");

    const portfolio = await Portfolio.findOne({ userId: user._id }).sort({ createdAt: -1 });
    if (!portfolio) throw new HttpError(404, "Portfolio not found");

    const [projects, skills] = await Promise.all([
      Project.find({ portfolioId: portfolio._id }).sort({ createdAt: 1 }),
      Skill.find({ portfolioId: portfolio._id }).sort({ createdAt: 1 }),
    ]);

    res.json({
      user: { name: user.name, username: user.username },
      portfolio,
      projects,
      skills,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = { getPublicPortfolioByUsername };

