const jwt = require("jsonwebtoken");
const { env } = require("./env");

function signAccessToken(userId) {
  return jwt.sign({}, env.JWT_SECRET, {
    subject: String(userId),
    expiresIn: env.JWT_EXPIRES_IN,
  });
}

module.exports = { signAccessToken };

