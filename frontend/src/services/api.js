// const API_BASE = import.meta.env.VITE_API_BASE;


// export const loginAdmin = async (credentials) => {
//   const res = await fetch(`${API_BASE}/admin/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   });

//   return res.json();
// };

// export const updateAbout = async (bio, token) => {
//   const res = await fetch(`${API_BASE}/about`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ bio }),
//   });

//   return res.json();
// };


// // -------- SKILLS --------

// export const getSkills = async () => {
//   const res = await fetch("http://localhost:5000/api/skills");
//   return res.json();
// };

// export const addSkill = async (skill, token) => {
//   const res = await fetch("http://localhost:5000/api/skills", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(skill),
//   });

//   return res.json();
// };

// export const deleteSkill = async (id, token) => {
//   const res = await fetch(`http://localhost:5000/api/skills/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return res.json();
// };
// // -------- PROJECTS --------

// export const getProjects = async () => {
//   const res = await fetch("http://localhost:5000/api/projects");
//   return res.json();
// };

// export const addProject = async (project, token) => {
//   const res = await fetch("http://localhost:5000/api/projects", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(project),
//   });

//   return res.json();
// };

// export const deleteProject = async (id, token) => {
//   const res = await fetch(
//     `http://localhost:5000/api/projects/${id}`,
//     {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return res.json();
// };
// // -------- EXPERIENCE --------

// export const getExperience = async () => {
//   const res = await fetch("http://localhost:5000/api/experience");
//   return res.json();
// };

// export const addExperience = async (data, token) => {
//   const res = await fetch("http://localhost:5000/api/experience", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

// export const deleteExperience = async (id, token) => {
//   await fetch(`http://localhost:5000/api/experience/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// // -------- EDUCATION --------

// export const getEducation = async () => {
//   const res = await fetch("http://localhost:5000/api/education");
//   return res.json();
// };

// export const addEducation = async (data, token) => {
//   const res = await fetch("http://localhost:5000/api/education", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

// export const deleteEducation = async (id, token) => {
//   await fetch(`http://localhost:5000/api/education/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
// // -------- GITHUB STATS --------

// export const getGithubStats = async () => {
//   const res = await fetch("http://localhost:5000/api/github");
//   return res.json();
// };
// // -------- LEETCODE STATS --------

// export const getLeetcodeStats = async () => {
//   const res = await fetch("http://localhost:5000/api/leetcode");
//   return res.json();
// };
// // -------- HERO --------

// export const getHero = async () => {
//   const res = await fetch("http://localhost:5000/api/hero");
//   return res.json();
// };

// export const updateHero = async (hero, token) => {
//   const res = await fetch("http://localhost:5000/api/hero", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(hero),
//   });

//   return res.json();
// };


const API_BASE = import.meta.env.VITE_API_BASE;

// AUTH
export const loginAdmin = async (credentials) => {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

// ABOUT
export const getAbout = async () => {
  const res = await fetch(`${API_BASE}/about`);
  return res.json();
};

// SKILLS
export const getSkills = async () => {
  const res = await fetch(`${API_BASE}/skills`);
  return res.json();
};

// PROJECTS
export const getProjects = async () => {
  const res = await fetch(`${API_BASE}/projects`);
  return res.json();
};

// EXPERIENCE
export const getExperience = async () => {
  const res = await fetch(`${API_BASE}/experience`);
  return res.json();
};

// EDUCATION
export const getEducation = async () => {
  const res = await fetch(`${API_BASE}/education`);
  return res.json();
};

// STATS
export const getGithubStats = async () => {
  const res = await fetch(`${API_BASE}/github`);
  return res.json();
};

export const getLeetcodeStats = async () => {
  const res = await fetch(`${API_BASE}/leetcode`);
  return res.json();
};

// HERO
export const getHero = async () => {
  const res = await fetch(`${API_BASE}/hero`);
  return res.json();
};
