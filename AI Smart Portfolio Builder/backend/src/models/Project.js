const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    portfolioId: { type: mongoose.Schema.Types.ObjectId, ref: "Portfolio", required: true, index: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: "" },
    technologies: { type: [String], default: [] },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

projectSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };

