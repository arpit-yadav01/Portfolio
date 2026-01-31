import Project from "../models/Project.js";

// GET all projects (public)
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${projects.length} projects`);
    res.json(projects);
  } catch (error) {
    console.error("❌ GET PROJECTS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
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
    console.error("❌ GET PROJECT BY ID ERROR:", error);
    res.status(400).json({ message: "Invalid project ID" });
  }
};

// CREATE project (admin)
export const createProject = async (req, res) => {
  try {
    console.log("=== CREATE PROJECT DEBUG ===");
    console.log("📦 Body:", req.body);
    console.log("📸 Files:", req.files);
    
    // Check if files exist
    if (!req.files || req.files.length === 0) {
      console.log("⚠️ No files received");
    }

    // ✅ handle multiple images safely
    const imageUrls = Array.isArray(req.files)
      ? req.files.map((file) => {
          console.log("🖼️ Processing file:", {
            originalname: file.originalname,
            path: file.path,
            size: file.size
          });
          return file.path; // This should be the Cloudinary URL
        })
      : [];

    console.log("✅ Image URLs to save:", imageUrls);

    // ✅ convert techStack string → array
    const techStack =
      typeof req.body.techStack === "string"
        ? req.body.techStack.split(",").map((t) => t.trim())
        : Array.isArray(req.body.techStack) 
        ? req.body.techStack 
        : [];

    const projectData = {
      title: req.body.title,
      description: req.body.description,
      techStack,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      liveLink: req.body.liveLink,
      githubLink: req.body.githubLink,
      category: req.body.category,
      images: imageUrls,
    };

    console.log("💾 Data to save:", projectData);

    const project = await Project.create(projectData);

    console.log("🎉 Project created successfully:", project);
    console.log("=== END DEBUG ===");
    
    res.status(201).json(project);
  } catch (error) {
    console.error("❌ CREATE PROJECT ERROR:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({ 
      message: "Failed to create project",
      error: error.message 
    });
  }
};

// UPDATE project (admin)
export const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(updated);
  } catch (error) {
    console.error("❌ UPDATE PROJECT ERROR:", error);
    res.status(500).json({ message: "Failed to update project" });
  }
};

// DELETE project (admin)
export const deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted" });
  } catch (error) {
    console.error("❌ DELETE PROJECT ERROR:", error);
    res.status(500).json({ message: "Failed to delete project" });
  }
};