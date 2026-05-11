const jwt = require("jsonwebtoken");
const { env } = require("../utils/env");
const { HttpError } = require("../utils/httpError");
const { User } = require("../models/User");

async function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice("Bearer ".length) : null;
    if (!token) throw new HttpError(401, "Missing Authorization token");

    const decoded = jwt.verify(token, env.JWT_SECRET);
    const user = await User.findById(decoded.sub);
    if (!user) throw new HttpError(401, "Invalid token");

    req.user = user;
    return next();
  } catch (err) {
    if (err instanceof HttpError) return next(err);
    return next(new HttpError(401, "Invalid token"));
  }
}

module.exports = { requireAuth };

