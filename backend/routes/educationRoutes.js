import express from "express";
import {
  getEducation,
  addEducation,
  deleteEducation,
} from "../controllers/educationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEducation);
router.post("/", protect, addEducation);
router.delete("/:id", protect, deleteEducation);

export default router;
