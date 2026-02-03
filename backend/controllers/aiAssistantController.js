import Groq from "groq-sdk";
import { buildPortfolioContext } from "../utils/buildPortfolioContext.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const aiAssistant = async (req, res) => {
  try {
    const { question, mode } = req.body;

    if (!question || !mode) {
      return res.status(400).json({
        message: "Question and mode are required",
      });
    }

    // 🚫 HARD GUARD — BLOCK SKILLS + EXPERIENCE MIXING
    const lowerQuestion = question.toLowerCase();

    if (
      lowerQuestion.includes("skills") &&
      lowerQuestion.includes("experience")
    ) {
      return res.json({
        answer:
          "Arpit's work experience and skill proficiency are listed separately in his portfolio. Skill levels are shown in the skills section, while work experience describes roles and responsibilities.",
      });
    }

    const portfolioContext = await buildPortfolioContext();

    const systemPrompt = `
You are an AI assistant for Arpit Yadav's portfolio.

STRICT RULES (ABSOLUTE):
- Answer ONLY using the provided portfolio data.
- NEVER invent companies, internships, roles, or technology stacks.
- If information is missing, say: "I don't have information about that in Arpit Yadav's portfolio."
- Do NOT use general knowledge. Do NOT explain technologies.
- Keep answers recruiter-friendly.

FORMATTING RULES (MANDATORY):
Use this exact format for structured answers:

**For Projects:**
1. **Project Name**
- Brief description
- Technologies used: React.js, Node.js, MongoDB

**For Experience:**
**Role** at **Company**
Duration: Start - End
- Key responsibility 1
- Key responsibility 2
- Technologies used: Django, PostgreSQL, React

**For Skills:**
- **Skill Name** (Level)

**For Education:**
**Degree** from **Institute**
Duration | Score

SKILL PROFICIENCY RULE:
- Mention skill levels (Beginner / Intermediate) ONLY when the question is explicitly about skill proficiency.
- Do NOT mention skill levels when answering about projects or internship experience.
- For projects or experience, list technologies ONLY by name.

CURRENT MODE: ${mode}

PORTFOLIO DATA:
${JSON.stringify(portfolioContext)}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
      temperature: 0.1,
      max_tokens: 300,
    });

    res.json({
      answer:
        completion.choices[0]?.message?.content ||
        "No response generated",
    });
  } catch (error) {
    console.error("Groq AI Error:", error);
    res.status(500).json({
      message: "AI assistant failed",
    });
  }
};