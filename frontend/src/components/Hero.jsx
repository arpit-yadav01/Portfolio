

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// // ✅ ALL RANDOM VALUES PRE-GENERATED — NEVER CHANGES
// const SHAPES = Array.from({ length: 15 }, (_, i) => ({
//   id: i,
//   left: (i * 6.67) % 100,
//   top: (i * 23 + 7) % 100,
//   xDrift: ((i * 41) % 200) - 100,
//   yDrift: ((i * 31) % 200) - 100,
//   duration: 15 + ((i * 7) % 10),
//   delay: (i * 0.33) % 5,
//   type: i % 3,
// }));

// const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
//   id: i,
//   size: 2 + ((i * 3) % 4),
//   left: (i * 2.5) % 100,
//   top: (i * 17 + 3) % 100,
//   yDrift: -300 - ((i * 13) % 200),
//   xDrift: ((i * 29) % 100) - 50,
//   duration: 8 + ((i * 5) % 8),
//   delay: (i * 0.25) % 5,
//   colorIndex: i % 3,
// }));

// const PARTICLE_COLORS = ["rgba(59, 130, 246, 0.8)", "rgba(147, 51, 234, 0.8)", "rgba(6, 182, 212, 0.8)"];

// const BINARY_COLUMNS = Array.from({ length: 20 }, (_, i) => ({
//   id: i,
//   left: i * 5,
//   duration: 8 + ((i * 3) % 4),
//   delay: (i * 0.25) % 5,
//   text: Array.from({ length: 20 }, (_, j) => ((i + j) % 2 === 0 ? "1" : "0")).join("\n"),
// }));

// const CODE_SYMBOLS = ["</>", "{ }", "[ ]", "( )", "=>", "&&", "||", "==="];

// function Hero() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [hero, setHero] = useState(null);
//   const [windowSize, setWindowSize] = useState({ w: 1280, h: 720 });

//   useEffect(() => {
//     const update = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: (e.clientY / window.innerHeight) * 2 - 1,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

//     fetch(`${API_BASE}/hero`)
//       .then((res) => res.json())
//       .then(setHero)
//       .catch(() => {
//         setHero({
//           name: "Arpit Yadav",
//           title: "Full Stack Developer • AI Enthusiast",
//           description: "I build scalable web applications and love working on backend systems, AI, and real-world products.",
//           resumeUrl: "https://drive.google.com/file/d/192gF3VbWq4pgcces-ZBsgWYLXf6VwlH5/view?usp=drivesdk",
//         });
//       });
//   }, []);

//   const getResumeUrl = () => {
//     if (!hero?.resumeUrl) return "#";
//     if (hero.resumeUrl.includes("drive.google.com")) {
//       const match = hero.resumeUrl.match(/\/d\/([^/]+)/);
//       if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
//     }
//     return hero.resumeUrl;
//   };

//   if (!hero) return null;

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden bg-black">
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Base Gradient */}
//         <motion.div
//           className="absolute inset-0"
//           animate={{
//             background: [
//               "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,1) 50%)",
//               "radial-gradient(circle at 80% 50%, rgba(147,51,234,0.15) 0%, rgba(0,0,0,1) 50%)",
//               "radial-gradient(circle at 50% 20%, rgba(6,182,212,0.15) 0%, rgba(0,0,0,1) 50%)",
//               "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,1) 50%)",
//             ],
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* Grid */}
//         <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
//             </pattern>
//           </defs>
//           <motion.rect
//             width="100%"
//             height="100%"
//             fill="url(#grid)"
//             initial={{ opacity: 0.1 }}
//             animate={{ opacity: [0.1, 0.3, 0.1] }}
//             transition={{ duration: 8, repeat: Infinity }}
//           />
//         </svg>

//         {/* Rotating Rings */}
//         {[0, 1, 2].map((i) => (
//           <motion.div
//             key={`ring-${i}`}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
//             style={{ width: 300 + i * 200, height: 300 + i * 200, willChange: "transform" }}
//             animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
//             transition={{
//               rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
//               scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//               opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//             }}
//           />
//         ))}

//         {/* Geometric Shapes — FIXED positions */}
//         {SHAPES.map((s) => (
//           <motion.div
//             key={`shape-${s.id}`}
//             className="absolute"
//             style={{ left: `${s.left}%`, top: `${s.top}%`, willChange: "transform" }}
//             animate={{ x: [0, s.xDrift, 0], y: [0, s.yDrift, 0], rotate: [0, 360], opacity: [0.2, 0.6, 0.2] }}
//             transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
//           >
//             {s.type === 0 ? (
//               <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-cyan-400/30 rotate-45" />
//             ) : s.type === 1 ? (
//               <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-purple-400/30 rounded-full" />
//             ) : (
//               <div className="w-0 h-0 border-l-[16px] md:border-l-[24px] border-l-transparent border-r-[16px] md:border-r-[24px] border-r-transparent border-b-[28px] md:border-b-[40px] border-b-blue-400/30" />
//             )}
//           </motion.div>
//         ))}

//         {/* Particles — FIXED positions */}
//         {PARTICLES.map((p) => (
//           <motion.div
//             key={`particle-${p.id}`}
//             className="absolute rounded-full"
//             style={{
//               width: p.size,
//               height: p.size,
//               left: `${p.left}%`,
//               top: `${p.top}%`,
//               background: PARTICLE_COLORS[p.colorIndex],
//               willChange: "transform, opacity",
//             }}
//             animate={{ y: [0, p.yDrift], x: [0, p.xDrift], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
//             transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
//           />
//         ))}

//         {/* Scanning Lines */}
//         {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
//           <motion.div
//             key={`line-${i}`}
//             className="absolute h-px w-full"
//             style={{
//               top: `${i * 12.5}%`,
//               background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
//             }}
//             animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
//             transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
//           />
//         ))}

//         {/* Glowing Orbs */}
//         <motion.div
//           className="absolute rounded-full opacity-20 blur-3xl"
//           style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)", top: "20%", left: "15%", willChange: "transform" }}
//           animate={{ x: mousePosition.x * 100, y: mousePosition.y * 100, scale: [1, 1.3, 1] }}
//           transition={{ x: { type: "spring", stiffness: 50, damping: 30 }, y: { type: "spring", stiffness: 50, damping: 30 }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
//         />
//         <motion.div
//           className="absolute rounded-full opacity-20 blur-3xl"
//           style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(147,51,234,0.6) 0%, transparent 70%)", bottom: "20%", right: "15%", willChange: "transform" }}
//           animate={{ x: mousePosition.x * -80, y: mousePosition.y * -80, scale: [1, 1.4, 1] }}
//           transition={{ x: { type: "spring", stiffness: 50, damping: 30 }, y: { type: "spring", stiffness: 50, damping: 30 }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
//         />
//         <motion.div
//           className="absolute rounded-full opacity-15 blur-3xl"
//           style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)", top: "50%", left: "50%", willChange: "transform" }}
//           animate={{ x: mousePosition.x * 60, y: mousePosition.y * 60, scale: [1, 1.5, 1] }}
//           transition={{ x: { type: "spring", stiffness: 50, damping: 30 }, y: { type: "spring", stiffness: 50, damping: 30 }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
//         />

//         {/* Binary Rain — FIXED text */}
//         {BINARY_COLUMNS.map((col) => (
//           <motion.div
//             key={`binary-${col.id}`}
//             className="absolute font-mono text-xs text-cyan-400/20 whitespace-pre"
//             style={{ left: `${col.left}%`, top: "-20px" }}
//             animate={{ y: ["0vh", "120vh"], opacity: [0, 0.5, 0] }}
//             transition={{ duration: col.duration, repeat: Infinity, delay: col.delay, ease: "linear" }}
//           >
//             {col.text}
//           </motion.div>
//         ))}

//         {/* Hexagon Pattern */}
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='rgba(59,130,246,0.3)' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "60px 60px" }} />

//         {/* Cursor Follower */}
//         <motion.div
//           className="absolute rounded-full pointer-events-none"
//           style={{ width: 200, height: 200, background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }}
//           animate={{ x: mousePosition.x * windowSize.w / 2 + windowSize.w / 2 - 100, y: mousePosition.y * windowSize.h / 2 + windowSize.h / 2 - 100 }}
//           transition={{ type: "spring", stiffness: 100, damping: 30 }}
//         />

//         {/* Code Symbols */}
//         {CODE_SYMBOLS.map((symbol, i) => (
//           <motion.div
//             key={`symbol-${i}`}
//             className="absolute font-mono text-lg md:text-2xl font-bold"
//             style={{ left: `${10 + (i % 4) * 25}%`, top: `${20 + Math.floor(i / 4) * 40}%`, color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#9333ea" : "#06b6d4", opacity: 0.1 }}
//             animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1], rotate: [0, 10, -10, 0] }}
//             transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
//           >
//             {symbol}
//           </motion.div>
//         ))}
//       </div>

//       {/* HERO CONTENT */}
//       <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="relative z-10 max-w-4xl w-full text-center px-2 md:px-4">
//         <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="inline-block mb-4 md:mb-6">
//           <span className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-blue-500/50 rounded-full text-xs md:text-sm text-blue-400 font-medium backdrop-blur-sm shadow-lg shadow-blue-500/20">
//             👋 Welcome to my portfolio
//           </span>
//         </motion.div>

//         <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
//           <span className="text-white">Hi, I'm </span>
//           <motion.span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent" animate={{ backgroundPosition: ["0%", "100%", "0%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ backgroundSize: "200% 200%" }}>
//             {hero.name}
//           </motion.span>
//         </motion.h1>

//         <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 font-light">
//           {hero.title}
//         </motion.h2>

//         <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-gray-400 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
//           {hero.description}
//         </motion.p>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3 md:gap-4 justify-center flex-wrap">
//           <motion.a href="#contact" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-blue-500/50 text-sm md:text-base">
//             <motion.span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500" initial={{ x: "-100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.3 }} />
//             <span className="relative z-10">Contact Me</span>
//           </motion.a>

//           <motion.a href="#projects" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-sm md:text-base">
//             View Projects
//           </motion.a>

//           <motion.a href={getResumeUrl()} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="px-6 md:px-8 py-3 md:py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm md:text-base">
//             📄 Resume
//           </motion.a>
//         </motion.div>

//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
//           <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-500 text-sm flex flex-col items-center gap-2">
//             <span>Scroll Down</span>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// export default Hero;



import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { usePortfolioData } from "../context/DataProvider";
import { HeroSkeleton } from "./Skeletons";

// ✅ ALL RANDOM VALUES PRE-GENERATED — NEVER CHANGES
const SHAPES = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: (i * 6.67) % 100,
  top: (i * 23 + 7) % 100,
  xDrift: ((i * 41) % 200) - 100,
  yDrift: ((i * 31) % 200) - 100,
  duration: 15 + ((i * 7) % 10),
  delay: (i * 0.33) % 5,
  type: i % 3,
}));

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: 2 + ((i * 3) % 4),
  left: (i * 2.5) % 100,
  top: (i * 17 + 3) % 100,
  yDrift: -300 - ((i * 13) % 200),
  xDrift: ((i * 29) % 100) - 50,
  duration: 8 + ((i * 5) % 8),
  delay: (i * 0.25) % 5,
  colorIndex: i % 3,
}));

const PARTICLE_COLORS = ["rgba(59, 130, 246, 0.8)", "rgba(147, 51, 234, 0.8)", "rgba(6, 182, 212, 0.8)"];

const BINARY_COLUMNS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: i * 5,
  duration: 8 + ((i * 3) % 4),
  delay: (i * 0.25) % 5,
  text: Array.from({ length: 20 }, (_, j) => ((i + j) % 2 === 0 ? "1" : "0")).join("\n"),
}));

const CODE_SYMBOLS = ["</>", "{ }", "[ ]", "( )", "=>", "&&", "||", "==="];

function Hero() {
  const { data, loading } = usePortfolioData();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ w: 1280, h: 720 });

  useEffect(() => {
    const update = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Memoized hero data with fallback
  const hero = useMemo(() => {
    return data?.hero || {
      name: "Loading...",
      title: "Full Stack Developer",
      description: "Building amazing experiences",
      resumeUrl: "#",
    };
  }, [data]);

  const getResumeUrl = () => {
    if (!hero?.resumeUrl || hero.resumeUrl === "#") return "#";
    if (hero.resumeUrl.includes("drive.google.com")) {
      const match = hero.resumeUrl.match(/\/d\/([^/]+)/);
      if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return hero.resumeUrl;
  };

  // Show skeleton only for initial load, not for missing data
  if (loading && !data) return <HeroSkeleton />;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,1) 50%)",
              "radial-gradient(circle at 80% 50%, rgba(147,51,234,0.15) 0%, rgba(0,0,0,1) 50%)",
              "radial-gradient(circle at 50% 20%, rgba(6,182,212,0.15) 0%, rgba(0,0,0,1) 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,1) 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </svg>

        {/* Rotating Rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
            style={{ width: 300 + i * 200, height: 300 + i * 200, willChange: "transform" }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}

        {/* Geometric Shapes — FIXED positions */}
        {SHAPES.map((s) => (
          <motion.div
            key={`shape-${s.id}`}
            className="absolute"
            style={{ left: `${s.left}%`, top: `${s.top}%`, willChange: "transform" }}
            animate={{ x: [0, s.xDrift, 0], y: [0, s.yDrift, 0], rotate: [0, 360], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          >
            {s.type === 0 ? (
              <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-cyan-400/30 rotate-45" />
            ) : s.type === 1 ? (
              <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-purple-400/30 rounded-full" />
            ) : (
              <div className="w-0 h-0 border-l-[16px] md:border-l-[24px] border-l-transparent border-r-[16px] md:border-r-[24px] border-r-transparent border-b-[28px] md:border-b-[40px] border-b-blue-400/30" />
            )}
          </motion.div>
        ))}

        {/* Particles — FIXED positions */}
        {PARTICLES.map((p) => (
          <motion.div
            key={`particle-${p.id}`}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              background: PARTICLE_COLORS[p.colorIndex],
              willChange: "transform, opacity",
            }}
            animate={{ y: [0, p.yDrift], x: [0, p.xDrift], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
          />
        ))}

        {/* Scanning Lines */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px w-full"
            style={{
              top: `${i * 12.5}%`,
              background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
            }}
            animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)", top: "20%", left: "15%", willChange: "transform" }}
          animate={{ x: mousePosition.x * 100, y: mousePosition.y * 100, scale: [1, 1.3, 1] }}
          transition={{ x: { type: "spring", stiffness: 50, damping: 30 }, y: { type: "spring", stiffness: 50, damping: 30 }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(147,51,234,0.6) 0%, transparent 70%)", bottom: "20%", right: "15%", willChange: "transform" }}
          animate={{ x: mousePosition.x * -80, y: mousePosition.y * -80, scale: [1, 1.4, 1] }}
          transition={{ x: { type: "spring", stiffness: 50, damping: 30 }, y: { type: "spring", stiffness: 50, damping: 30 }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute rounded-full opacity-15 blur-3xl"
          style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)", top: "50%", left: "50%", willChange: "transform" }}
          animate={{ x: mousePosition.x * 60, y: mousePosition.y * 60, scale: [1, 1.5, 1] }}
          transition={{ x: { type: "spring", stiffness: 50, damping: 30 }, y: { type: "spring", stiffness: 50, damping: 30 }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
        />

        {/* Binary Rain — FIXED text */}
        {BINARY_COLUMNS.map((col) => (
          <motion.div
            key={`binary-${col.id}`}
            className="absolute font-mono text-xs text-cyan-400/20 whitespace-pre"
            style={{ left: `${col.left}%`, top: "-20px" }}
            animate={{ y: ["0vh", "120vh"], opacity: [0, 0.5, 0] }}
            transition={{ duration: col.duration, repeat: Infinity, delay: col.delay, ease: "linear" }}
          >
            {col.text}
          </motion.div>
        ))}

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='rgba(59,130,246,0.3)' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "60px 60px" }} />

        {/* Cursor Follower */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 200, height: 200, background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }}
          animate={{ x: mousePosition.x * windowSize.w / 2 + windowSize.w / 2 - 100, y: mousePosition.y * windowSize.h / 2 + windowSize.h / 2 - 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />

        {/* Code Symbols */}
        {CODE_SYMBOLS.map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute font-mono text-lg md:text-2xl font-bold"
            style={{ left: `${10 + (i % 4) * 25}%`, top: `${20 + Math.floor(i / 4) * 40}%`, color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#9333ea" : "#06b6d4", opacity: 0.1 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* HERO CONTENT */}
      <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="relative z-10 max-w-4xl w-full text-center px-2 md:px-4">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="inline-block mb-4 md:mb-6">
          <span className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-blue-500/50 rounded-full text-xs md:text-sm text-blue-400 font-medium backdrop-blur-sm shadow-lg shadow-blue-500/20">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
          <span className="text-white">Hi, I'm </span>
          <motion.span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent" animate={{ backgroundPosition: ["0%", "100%", "0%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ backgroundSize: "200% 200%" }}>
            {hero.name}
          </motion.span>
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 font-light">
          {hero.title}
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-gray-400 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
          {hero.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3 md:gap-4 justify-center flex-wrap">
          <motion.a href="#contact" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-blue-500/50 text-sm md:text-base">
            <motion.span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500" initial={{ x: "-100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.3 }} />
            <span className="relative z-10">Contact Me</span>
          </motion.a>

          <motion.a href="#projects" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-sm md:text-base">
            View Projects
          </motion.a>

          <motion.a href={getResumeUrl()} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="px-6 md:px-8 py-3 md:py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm md:text-base">
            📄 Resume
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-500 text-sm flex flex-col items-center gap-2">
            <span>Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;