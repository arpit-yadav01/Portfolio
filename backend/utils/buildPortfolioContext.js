import About from "../models/About.js";
import Skill from "../models/Skill.js";
import Experience from "../models/Experience.js";
import Education from "../models/Education.js";
import Hero from "../models/Hero.js";
import Project from "../models/Project.js";

/**
 * Builds a clean, AI-safe portfolio context.
 * Used ONLY by the AI assistant.
 * No inference, no guessing.
 */
export const buildPortfolioContext = async () => {
  const heroDoc = await Hero.findOne().lean();
  const aboutDoc = await About.findOne().lean();
  const skillsDocs = await Skill.find().lean();
  const experienceDocs = await Experience.find().lean();
  const educationDocs = await Education.find().lean();
  const projectDocs = await Project.find().lean();

  // -------------------------------
  // HERO
  // -------------------------------
  const hero = heroDoc
    ? {
        name: heroDoc.name,
        role: heroDoc.title,
        tagline: heroDoc.subtitle,
        resumeAvailable: Boolean(heroDoc.resumeUrl),
      }
    : null;

  // -------------------------------
  // ABOUT
  // -------------------------------
  const about = aboutDoc
    ? {
        summary: aboutDoc.description,
        focusAreas: aboutDoc.highlights || [],
      }
    : null;

  // -------------------------------
  // SKILLS (PROFICIENCY ONLY)
  // -------------------------------
  const skills = skillsDocs.map((s) => ({
    name: s.name,
    level: s.level,
  }));

  // -------------------------------
  // EXPERIENCE (ROLES ONLY — NO SKILLS)
  // -------------------------------
  const experience = experienceDocs.map((e) => ({
    role: e.role,
    company: e.company,
    duration: `${e.startDate} – ${e.endDate}`,
    work: e.description ? [e.description] : [],
  }));

  // -------------------------------
  // EDUCATION
  // -------------------------------
  const education = educationDocs.map((e) => ({
    degree: e.degree,
    institute: e.institute,
    duration: `${e.startYear} – ${e.endYear}`,
    score: e.score,
    status: "Completed",
  }));

  // -------------------------------
  // PROJECTS
  // -------------------------------
  const projects = projectDocs.map((p) => ({
    title: p.title,
    description: p.description,
    technologies: p.techStack || [],
    duration: p.duration,
  }));

  return {
    hero,
    about,
    skills,
    experience,
    education,
    projects,
  };
};
