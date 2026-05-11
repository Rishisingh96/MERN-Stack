const { z } = require("zod");
const mongoose = require("mongoose");
const { Portfolio } = require("../models/Portfolio");
const { Project } = require("../models/Project");
const { Skill } = require("../models/Skill");
const { HttpError } = require("../utils/httpError");

const createPortfolioSchema = z.object({
  title: z.string().min(2).max(120),
  template: z.string().min(1).max(40).default("minimal"),
  bio: z.string().max(2000).optional().default(""),
  projects: z
    .array(
      z.object({
        title: z.string().min(2).max(120),
        description: z.string().max(2000).optional().default(""),
        technologies: z.array(z.string().max(40)).optional().default([]),
      })
    )
    .optional()
    .default([]),
  skills: z
    .array(
      z.object({
        name: z.string().min(1).max(60),
        level: z.string().min(1).max(40).optional().default("Intermediate"),
      })
    )
    .optional()
    .default([]),
});

const updatePortfolioSchema = createPortfolioSchema.partial().extend({
  id: z.string().min(1),
});

async function create(req, res, next) {
  const session = await mongoose.startSession();
  try {
    const body = createPortfolioSchema.parse(req.body);
    session.startTransaction();

    const portfolio = await Portfolio.create(
      [
        {
          userId: req.user._id,
          title: body.title,
          template: body.template,
          bio: body.bio,
        },
      ],
      { session }
    );

    const portfolioId = portfolio[0]._id;

    const createdProjects =
      body.projects.length > 0
        ? await Project.insertMany(
            body.projects.map((p) => ({
              portfolioId,
              title: p.title,
              description: p.description,
              technologies: p.technologies,
            })),
            { session }
          )
        : [];

    const createdSkills =
      body.skills.length > 0
        ? await Skill.insertMany(
            body.skills.map((s) => ({
              portfolioId,
              name: s.name,
              level: s.level,
            })),
            { session }
          )
        : [];

    await session.commitTransaction();
    res.status(201).json({
      portfolio: portfolio[0],
      projects: createdProjects,
      skills: createdSkills,
    });
  } catch (err) {
    await session.abortTransaction().catch(() => {});
    if (err instanceof z.ZodError) return next(new HttpError(400, "Validation error", err.flatten()));
    return next(err);
  } finally {
    session.endSession();
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) throw new HttpError(404, "Portfolio not found");
    if (String(portfolio.userId) !== String(req.user._id)) throw new HttpError(403, "Forbidden");

    const [projects, skills] = await Promise.all([
      Project.find({ portfolioId: portfolio._id }).sort({ createdAt: 1 }),
      Skill.find({ portfolioId: portfolio._id }).sort({ createdAt: 1 }),
    ]);

    res.json({ portfolio, projects, skills });
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  const session = await mongoose.startSession();
  try {
    const body = updatePortfolioSchema.parse(req.body);
    const portfolio = await Portfolio.findById(body.id);
    if (!portfolio) throw new HttpError(404, "Portfolio not found");
    if (String(portfolio.userId) !== String(req.user._id)) throw new HttpError(403, "Forbidden");

    session.startTransaction();

    if (body.title !== undefined) portfolio.title = body.title;
    if (body.template !== undefined) portfolio.template = body.template;
    if (body.bio !== undefined) portfolio.bio = body.bio;
    await portfolio.save({ session });

    if (body.projects) {
      await Project.deleteMany({ portfolioId: portfolio._id }, { session });
      if (body.projects.length > 0) {
        await Project.insertMany(
          body.projects.map((p) => ({
            portfolioId: portfolio._id,
            title: p.title,
            description: p.description,
            technologies: p.technologies ?? [],
          })),
          { session }
        );
      }
    }

    if (body.skills) {
      await Skill.deleteMany({ portfolioId: portfolio._id }, { session });
      if (body.skills.length > 0) {
        await Skill.insertMany(
          body.skills.map((s) => ({
            portfolioId: portfolio._id,
            name: s.name,
            level: s.level ?? "Intermediate",
          })),
          { session }
        );
      }
    }

    await session.commitTransaction();

    const [projects, skills] = await Promise.all([
      Project.find({ portfolioId: portfolio._id }).sort({ createdAt: 1 }),
      Skill.find({ portfolioId: portfolio._id }).sort({ createdAt: 1 }),
    ]);

    res.json({ portfolio, projects, skills });
  } catch (err) {
    await session.abortTransaction().catch(() => {});
    if (err instanceof z.ZodError) return next(new HttpError(400, "Validation error", err.flatten()));
    return next(err);
  } finally {
    session.endSession();
  }
}

async function remove(req, res, next) {
  const session = await mongoose.startSession();
  try {
    const id = req.body?.id ?? req.query?.id;
    if (!id) throw new HttpError(400, "Missing id");

    const portfolio = await Portfolio.findById(id);
    if (!portfolio) throw new HttpError(404, "Portfolio not found");
    if (String(portfolio.userId) !== String(req.user._id)) throw new HttpError(403, "Forbidden");

    session.startTransaction();
    await Promise.all([
      Project.deleteMany({ portfolioId: portfolio._id }, { session }),
      Skill.deleteMany({ portfolioId: portfolio._id }, { session }),
      Portfolio.deleteOne({ _id: portfolio._id }, { session }),
    ]);
    await session.commitTransaction();

    res.json({ ok: true });
  } catch (err) {
    await session.abortTransaction().catch(() => {});
    return next(err);
  } finally {
    session.endSession();
  }
}

module.exports = { create, getById, update, remove };

