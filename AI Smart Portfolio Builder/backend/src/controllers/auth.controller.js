const bcrypt = require("bcryptjs");
const { z } = require("zod");
const { User } = require("../models/User");
const { HttpError } = require("../utils/httpError");
const { signAccessToken } = require("../utils/jwt");
const { normalizeUsername } = require("../utils/username");

const registerSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(255),
  password: z.string().min(8).max(200),
  username: z.string().min(3).max(32),
});

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(1),
});

async function register(req, res, next) {
  try {
    const body = registerSchema.parse(req.body);
    const username = normalizeUsername(body.username);
    if (!username) throw new HttpError(400, "Invalid username");

    const existing = await User.findOne({
      $or: [{ email: body.email.toLowerCase() }, { username }],
    });
    if (existing) throw new HttpError(409, "User already exists");

    const passwordHash = await bcrypt.hash(body.password, 12);
    const user = await User.create({
      name: body.name,
      email: body.email.toLowerCase(),
      username,
      passwordHash,
    });

    const token = signAccessToken(user._id);
    res.status(201).json({ user, token });
  } catch (err) {
    if (err instanceof z.ZodError) return next(new HttpError(400, "Validation error", err.flatten()));
    return next(err);
  }
}

async function login(req, res, next) {
  try {
    const body = loginSchema.parse(req.body);
    const user = await User.findOne({ email: body.email.toLowerCase() });
    if (!user) throw new HttpError(401, "Invalid email or password");

    const ok = await bcrypt.compare(body.password, user.passwordHash);
    if (!ok) throw new HttpError(401, "Invalid email or password");

    const token = signAccessToken(user._id);
    res.json({ user, token });
  } catch (err) {
    if (err instanceof z.ZodError) return next(new HttpError(400, "Validation error", err.flatten()));
    return next(err);
  }
}

module.exports = { register, login };

