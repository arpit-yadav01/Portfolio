import Project from "../models/Project.js";

// GET all projects (public)
export const getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

// GET single project by ID (public)
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({ message: "Invalid project ID" });
  }
};

// CREATE project (admin)
export const createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
};

// UPDATE project (admin)
export const updateProject = async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

// DELETE project (admin)
export const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
};
