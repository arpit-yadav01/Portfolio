import Skill from "../models/Skill.js";

export const getSkills = async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
};

// export const createSkill = async (req, res) => {
//   const skill = await Skill.create(req.body);
//   res.json(skill);
// };

export const deleteSkill = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Skill deleted" });
  
};
export const createSkill = async (req, res) => {
  const { name, icon, color, bgColor, level } = req.body;

  if (!name || !icon || !color || !bgColor) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const skill = await Skill.create({
    name,
    icon,
    color,
    bgColor,
    level,
  });

  res.json(skill);
};
