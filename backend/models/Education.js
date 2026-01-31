import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    degree: String,
    institute: String,
    startYear: String,
    endYear: String,
    score: String,
  },
  { timestamps: true }
);

export default mongoose.model("Education", educationSchema);
