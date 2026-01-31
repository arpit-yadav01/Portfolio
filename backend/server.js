import dotenv from "dotenv";
dotenv.config(); // 👈 MUST BE FIRST, BEFORE EVERYTHING

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



// load env variables


// connect database FIRST
connectDB();

// create app AFTER imports
const app = express();

// middlewares
app.use(express.json());
import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "https://portfolio-ten-woad-26.vercel.app", // your Vercel prod domain
  "https://portfolio-git-main-arpit-yadav01s-projects.vercel.app", // preview
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


// routes (ONLY AFTER app is created)
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/leetcode", leetcodeRoutes);
app.use("/api/hero", heroRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
