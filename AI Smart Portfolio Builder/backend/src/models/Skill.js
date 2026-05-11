const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    portfolioId: { type: mongoose.Schema.Types.ObjectId, ref: "Portfolio", required: true, index: true },
    name: { type: String, required: true, trim: true },
    level: { type: String, required: true, trim: true, default: "Intermediate" },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

skillSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = { Skill };

