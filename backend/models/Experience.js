import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    role: String,
    company: String,
    startDate: String,
    endDate: String,
    description: String,

    // ✅ ADD THIS (AUTHORITATIVE)
    technologiesUsed: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Experience", experienceSchema);
