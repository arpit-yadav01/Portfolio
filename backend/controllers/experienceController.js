import Experience from "../models/Experience.js";

export const getExperience = async (req, res) => {
  const data = await Experience.find().sort({ createdAt: -1 });
  res.json(data);
};

export const addExperience = async (req, res) => {
  const exp = await Experience.create(req.body);
  res.json(exp);
};

export const deleteExperience = async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.json({ message: "Experience deleted" });
};
