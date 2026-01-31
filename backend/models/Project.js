import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  images: [String],          // 👈 ARRAY (carousel)
  startDate: String,
  endDate: String,
  liveLink: String,
  githubLink: String,
  category: String,          // optional: Web App / AI / etc
},
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
