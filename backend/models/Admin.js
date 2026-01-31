import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: String,
  password: String, // encrypted
});

export default mongoose.model("Admin", adminSchema);
