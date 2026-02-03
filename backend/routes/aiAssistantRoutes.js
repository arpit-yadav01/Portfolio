import express from "express";
import { aiAssistant } from "../controllers/aiAssistantController.js";

const router = express.Router();

router.post("/", aiAssistant);

export default router;
