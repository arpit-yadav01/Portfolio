import express from "express";
import {
  getExperience,
  addExperience,
  deleteExperience,
} from "../controllers/experienceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getExperience);
router.post("/", protect, addExperience);
router.delete("/:id", protect, deleteExperience);

export default router;
