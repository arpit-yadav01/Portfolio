import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const askPortfolioAI = async (question, mode) => {
  const res = await axios.post(`${API_BASE}/ai-assistant`, {
    question,
    mode,
  });

  return res.data.answer;
};
