// import express from "express";
// import {
//   getProjects,
//   getProjectById,
//   createProject,
//   updateProject,
//   deleteProject,
// } from "../controllers/projectController.js";
// import { protect } from "../middleware/authMiddleware.js";
// import upload from "../middleware/upload.js";



// const router = express.Router();

// // 🌍 PUBLIC
// router.get("/", getProjects);
// router.get("/:id", getProjectById);

// // 🔐 ADMIN (JWT protected)
// router.post("/", protect, createProject);
// router.put("/:id", protect, updateProject);
// router.delete("/:id", protect, deleteProject);
// router.post(
//   "/",
//   protect,              // admin auth
//   upload.single("image"),
//   createProject
// );
// export default router;


import express from "express";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// 🌍 PUBLIC
router.get("/", getProjects);
router.get("/:id", getProjectById);

// 🔐 ADMIN (JWT protected)
router.post(
  "/",
  protect,
  upload.array("images", 5), // 👈 MULTIPLE IMAGES
  createProject
);

router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);

export default router;

