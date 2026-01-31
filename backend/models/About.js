import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  bio: String,
});

export default mongoose.model("About", aboutSchema);
