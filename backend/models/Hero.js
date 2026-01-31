import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    description: String,
    resumeUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Hero", heroSchema);
