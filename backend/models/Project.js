import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    tech: [String],
    github: String,
    live: String,
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
