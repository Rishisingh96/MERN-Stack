const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    title: { type: String, required: true, trim: true },
    template: { type: String, required: true, trim: true, default: "minimal" },
    bio: { type: String, trim: true, default: "" },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

portfolioSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = { Portfolio };

