import Education from "../models/Education.js";

export const getEducation = async (req, res) => {
  const data = await Education.find().sort({ startYear: -1 });
  res.json(data);
};

export const addEducation = async (req, res) => {
  const edu = await Education.create(req.body);
  res.json(edu);
};

export const deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: "Education deleted" });
};
