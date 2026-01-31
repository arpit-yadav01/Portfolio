// import mongoose from "mongoose";

// const skillSchema = new mongoose.Schema({
//   name: String,
//   level: String, // Beginner / Intermediate / Advanced
// });

// export default mongoose.model("Skill", skillSchema);

import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true }, // Beginner / Intermediate / Advanced
  icon: { type: String, required: true }, // Emoji or symbol like "⚛️", "▲", "JS"
  color: { type: String, required: true }, // Text color like "#ffffff"
  bgColor: { type: String, required: true }, // Background color like "#61dafb"
});

export default mongoose.model("Skill", skillSchema);