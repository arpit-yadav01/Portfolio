import express from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import { loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

// 🔴 TEMP: create admin (use once only)
router.post("/create", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const admin = await Admin.create({
    username: req.body.username,
    password: hashedPassword,
  });

  res.json(admin);
});

// login
router.post("/login", loginAdmin);

export default router;
