const express = require("express");
const { requireAuth } = require("../middleware/auth");
const { create, getById, update, remove } = require("../controllers/portfolio.controller");

const portfolioRouter = express.Router();

portfolioRouter.post("/create", requireAuth, create);
portfolioRouter.get("/:id", requireAuth, getById);
portfolioRouter.put("/update", requireAuth, update);
portfolioRouter.delete("/delete", requireAuth, remove);

module.exports = { portfolioRouter };

