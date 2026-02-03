import dotenv from "dotenv";
dotenv.config(); // MUST be first

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import projectRoutes from "./routes/projectRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import githubRoutes from "./routes/githubRoutes.js";
import leetcodeRoutes from "./routes/leetcodeRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import aiAssistantRoutes from "./routes/aiAssistantRoutes.js";



// connect database
connectDB();

const app = express();

// body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ✅ CORS CONFIG (FIXED)
// ✅ CORS CONFIG
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174", // in case you have multiple dev servers
  "https://portfolio-ten-woad-26.vercel.app",
  "https://portfolio-git-main-arpit-yadav01s-projects.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin) return callback(null, true);
      
      // Allow any Vercel deployment URL
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }
      
      // Allow specific origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/leetcode", leetcodeRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/ai-assistant", aiAssistantRoutes);
// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
