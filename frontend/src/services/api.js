// // const API_BASE = import.meta.env.VITE_API_BASE;


// // export const loginAdmin = async (credentials) => {
// //   const res = await fetch(`${API_BASE}/admin/login`, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify(credentials),
// //   });

// //   return res.json();
// // };

// // export const updateAbout = async (bio, token) => {
// //   const res = await fetch(`${API_BASE}/about`, {
// //     method: "PUT",
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify({ bio }),
// //   });

// //   return res.json();
// // };


// // // -------- SKILLS --------

// // export const getSkills = async () => {
// //   const res = await fetch("http://localhost:5000/api/skills");
// //   return res.json();
// // };

// // export const addSkill = async (skill, token) => {
// //   const res = await fetch("http://localhost:5000/api/skills", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify(skill),
// //   });

// //   return res.json();
// // };

// // export const deleteSkill = async (id, token) => {
// //   const res = await fetch(`http://localhost:5000/api/skills/${id}`, {
// //     method: "DELETE",
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });

// //   return res.json();
// // };
// // // -------- PROJECTS --------

// // export const getProjects = async () => {
// //   const res = await fetch("http://localhost:5000/api/projects");
// //   return res.json();
// // };

// // export const addProject = async (project, token) => {
// //   const res = await fetch("http://localhost:5000/api/projects", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify(project),
// //   });

// //   return res.json();
// // };

// // export const deleteProject = async (id, token) => {
// //   const res = await fetch(
// //     `http://localhost:5000/api/projects/${id}`,
// //     {
// //       method: "DELETE",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     }
// //   );

// //   return res.json();
// // };
// // // -------- EXPERIENCE --------

// // export const getExperience = async () => {
// //   const res = await fetch("http://localhost:5000/api/experience");
// //   return res.json();
// // };

// // export const addExperience = async (data, token) => {
// //   const res = await fetch("http://localhost:5000/api/experience", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify(data),
// //   });

// //   return res.json();
// // };

// // export const deleteExperience = async (id, token) => {
// //   await fetch(`http://localhost:5000/api/experience/${id}`, {
// //     method: "DELETE",
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });
// // };

// // // -------- EDUCATION --------

// // export const getEducation = async () => {
// //   const res = await fetch("http://localhost:5000/api/education");
// //   return res.json();
// // };

// // export const addEducation = async (data, token) => {
// //   const res = await fetch("http://localhost:5000/api/education", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify(data),
// //   });

// //   return res.json();
// // };

// // export const deleteEducation = async (id, token) => {
// //   await fetch(`http://localhost:5000/api/education/${id}`, {
// //     method: "DELETE",
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });
// // };
// // // -------- GITHUB STATS --------

// // export const getGithubStats = async () => {
// //   const res = await fetch("http://localhost:5000/api/github");
// //   return res.json();
// // };
// // // -------- LEETCODE STATS --------

// // export const getLeetcodeStats = async () => {
// //   const res = await fetch("http://localhost:5000/api/leetcode");
// //   return res.json();
// // };
// // // -------- HERO --------

// // export const getHero = async () => {
// //   const res = await fetch("http://localhost:5000/api/hero");
// //   return res.json();
// // };

// // export const updateHero = async (hero, token) => {
// //   const res = await fetch("http://localhost:5000/api/hero", {
// //     method: "PUT",
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify(hero),
// //   });

// //   return res.json();
// // };


// // const API_BASE = import.meta.env.VITE_API_BASE;

// // // AUTH
// // export const loginAdmin = async (credentials) => {
// //   const res = await fetch(`${API_BASE}/admin/login`, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(credentials),
// //   });
// //   return res.json();
// // };

// // // ABOUT
// // export const getAbout = async () => {
// //   const res = await fetch(`${API_BASE}/about`);
// //   return res.json();
// // };

// // // SKILLS
// // export const getSkills = async () => {
// //   const res = await fetch(`${API_BASE}/skills`);
// //   return res.json();
// // };

// // // PROJECTS
// // export const getProjects = async () => {
// //   const res = await fetch(`${API_BASE}/projects`);
// //   return res.json();
// // };

// // // EXPERIENCE
// // export const getExperience = async () => {
// //   const res = await fetch(`${API_BASE}/experience`);
// //   return res.json();
// // };

// // // EDUCATION
// // export const getEducation = async () => {
// //   const res = await fetch(`${API_BASE}/education`);
// //   return res.json();
// // };

// // // STATS
// // export const getGithubStats = async () => {
// //   const res = await fetch(`${API_BASE}/github`);
// //   return res.json();
// // };

// // export const getLeetcodeStats = async () => {
// //   const res = await fetch(`${API_BASE}/leetcode`);
// //   return res.json();
// // };

// // // HERO
// // export const getHero = async () => {
// //   const res = await fetch(`${API_BASE}/hero`);
// //   return res.json();
// // };


// const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

// // ============================================
// // AUTH
// // ============================================
// export const loginAdmin = async (credentials) => {
//   const res = await fetch(`${API_BASE}/admin/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(credentials),
//   });
//   return res.json();
// };

// // ============================================
// // ABOUT
// // ============================================
// export const getAbout = async () => {
//   const res = await fetch(`${API_BASE}/about`);
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

// // ============================================
// // SKILLS
// // ============================================
// export const getSkills = async () => {
//   const res = await fetch(`${API_BASE}/skills`);
//   return res.json();
// };

// export const addSkill = async (skill, token) => {
//   const res = await fetch(`${API_BASE}/skills`, {
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
//   const res = await fetch(`${API_BASE}/skills/${id}`, {
//     method: "DELETE",
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.json();
// };

// // ============================================
// // PROJECTS
// // ============================================
// export const getProjects = async () => {
//   const res = await fetch(`${API_BASE}/projects`);
//   return res.json();
// };

// export const deleteProject = async (id, token) => {
//   const res = await fetch(`${API_BASE}/projects/${id}`, {
//     method: "DELETE",
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.json();
// };

// // ============================================
// // EXPERIENCE
// // ============================================
// export const getExperience = async () => {
//   const res = await fetch(`${API_BASE}/experience`);
//   return res.json();
// };

// export const addExperience = async (data, token) => {
//   const res = await fetch(`${API_BASE}/experience`, {
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
//   await fetch(`${API_BASE}/experience/${id}`, {
//     method: "DELETE",
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// // ============================================
// // EDUCATION
// // ============================================
// export const getEducation = async () => {
//   const res = await fetch(`${API_BASE}/education`);
//   return res.json();
// };

// export const addEducation = async (data, token) => {
//   const res = await fetch(`${API_BASE}/education`, {
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
//   await fetch(`${API_BASE}/education/${id}`, {
//     method: "DELETE",
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// // ============================================
// // STATS
// // ============================================
// export const getGithubStats = async () => {
//   const res = await fetch(`${API_BASE}/github`);
//   return res.json();
// };

// export const getLeetcodeStats = async () => {
//   const res = await fetch(`${API_BASE}/leetcode`);
//   return res.json();
// };

// // ============================================
// // HERO
// // ============================================
// export const getHero = async () => {
//   const res = await fetch(`${API_BASE}/hero`);
//   return res.json();
// };

// export const updateHero = async (hero, token) => {
//   const res = await fetch(`${API_BASE}/hero`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(hero),
//   });
//   return res.json();
// };


const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

// ============================================
// CACHE LAYER - Prevents redundant API calls
// ============================================
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCached(key) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

function setCache(key, data) {
  cache.set(key, { data, timestamp: Date.now() });
}

// ============================================
// OPTIMIZED FETCH WITH ERROR HANDLING
// ============================================
async function fetchWithCache(url, key) {
  const cached = getCached(key);
  if (cached) return cached;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    setCache(key, data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${key}:`, error);
    return null;
  }
}

// ============================================
// PARALLEL DATA LOADER - Load everything at once!
// ============================================
export async function loadAllData() {
  const [hero, about, skills, projects, experience, education, github, leetcode] = await Promise.allSettled([
    fetchWithCache(`${API_BASE}/hero`, "hero"),
    fetchWithCache(`${API_BASE}/about`, "about"),
    fetchWithCache(`${API_BASE}/skills`, "skills"),
    fetchWithCache(`${API_BASE}/projects`, "projects"),
    fetchWithCache(`${API_BASE}/experience`, "experience"),
    fetchWithCache(`${API_BASE}/education`, "education"),
    fetchWithCache(`${API_BASE}/github`, "github"),
    fetchWithCache(`${API_BASE}/leetcode`, "leetcode"),
  ]);

  return {
    hero: hero.status === "fulfilled" ? hero.value : getHeroFallback(),
    about: about.status === "fulfilled" ? about.value : null,
    skills: skills.status === "fulfilled" ? skills.value : [],
    projects: projects.status === "fulfilled" ? projects.value : [],
    experience: experience.status === "fulfilled" ? experience.value : [],
    education: education.status === "fulfilled" ? education.value : [],
    github: github.status === "fulfilled" ? github.value : null,
    leetcode: leetcode.status === "fulfilled" ? leetcode.value : null,
  };
}

// ============================================
// INDIVIDUAL GETTERS (with cache)
// ============================================
export const getHero = () => fetchWithCache(`${API_BASE}/hero`, "hero");
export const getAbout = () => fetchWithCache(`${API_BASE}/about`, "about");
export const getSkills = () => fetchWithCache(`${API_BASE}/skills`, "skills");
export const getProjects = () => fetchWithCache(`${API_BASE}/projects`, "projects");
export const getExperience = () => fetchWithCache(`${API_BASE}/experience`, "experience");
export const getEducation = () => fetchWithCache(`${API_BASE}/education`, "education");
export const getGithubStats = () => fetchWithCache(`${API_BASE}/github`, "github");
export const getLeetcodeStats = () => fetchWithCache(`${API_BASE}/leetcode`, "leetcode");

// ============================================
// FALLBACK DATA
// ============================================
function getHeroFallback() {
  return {
    name: "Your Name",
    title: "Full Stack Developer",
    description: "Building amazing web experiences",
    resumeUrl: "#",
  };
}

// ============================================
// AUTH (unchanged)
// ============================================
export const loginAdmin = async (credentials) => {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

// ============================================
// UPDATE OPERATIONS (unchanged)
// ============================================
export const updateAbout = async (bio, token) => {
  const res = await fetch(`${API_BASE}/about`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ bio }),
  });
  cache.delete("about");
  return res.json();
};

export const updateHero = async (hero, token) => {
  const res = await fetch(`${API_BASE}/hero`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(hero),
  });
  cache.delete("hero");
  return res.json();
};

export const addSkill = async (skill, token) => {
  const res = await fetch(`${API_BASE}/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(skill),
  });
  cache.delete("skills");
  return res.json();
};

export const deleteSkill = async (id, token) => {
  const res = await fetch(`${API_BASE}/skills/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  cache.delete("skills");
  return res.json();
};

export const deleteProject = async (id, token) => {
  const res = await fetch(`${API_BASE}/projects/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  cache.delete("projects");
  return res.json();
};

export const addExperience = async (data, token) => {
  const res = await fetch(`${API_BASE}/experience`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  cache.delete("experience");
  return res.json();
};

export const deleteExperience = async (id, token) => {
  await fetch(`${API_BASE}/experience/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  cache.delete("experience");
};

export const addEducation = async (data, token) => {
  const res = await fetch(`${API_BASE}/education`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  cache.delete("education");
  return res.json();
};

export const deleteEducation = async (id, token) => {
  await fetch(`${API_BASE}/education/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  cache.delete("education");
};