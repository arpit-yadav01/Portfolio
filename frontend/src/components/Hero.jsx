// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";

// // function Hero() {
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setMousePosition({
// //         x: (e.clientX / window.innerWidth) * 2 - 1,
// //         y: (e.clientY / window.innerHeight) * 2 - 1,
// //       });
// //     };
// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   // Generate floating particles
// //   const particles = Array.from({ length: 30 }, (_, i) => ({
// //     id: i,
// //     x: Math.random() * 100,
// //     y: Math.random() * 100,
// //     size: Math.random() * 4 + 2,
// //     duration: Math.random() * 20 + 15,
// //     delay: Math.random() * 5,
// //   }));

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
// //       {/* Animated Tech Background */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         {/* Gradient Background */}
// //         <motion.div
// //           className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
// //           animate={{
// //             background: [
// //               "linear-gradient(to bottom right, #020617, #172554, #020617)",
// //               "linear-gradient(to bottom right, #0c4a6e, #020617, #1e3a8a)",
// //               "linear-gradient(to bottom right, #020617, #172554, #020617)",
// //             ],
// //           }}
// //           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// //         />

// //         {/* Animated Grid */}
// //         <svg className="absolute inset-0 w-full h-full opacity-20">
// //           <defs>
// //             <pattern
// //               id="grid"
// //               width="50"
// //               height="50"
// //               patternUnits="userSpaceOnUse"
// //             >
// //               <motion.path
// //                 d="M 50 0 L 0 0 0 50"
// //                 fill="none"
// //                 stroke="rgb(59, 130, 246)"
// //                 strokeWidth="0.5"
// //                 initial={{ pathLength: 0 }}
// //                 animate={{ pathLength: 1 }}
// //                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
// //               />
// //             </pattern>
// //           </defs>
// //           <rect width="100%" height="100%" fill="url(#grid)" />
// //         </svg>

// //         {/* Floating Particles */}
// //         {particles.map((particle) => (
// //           <motion.div
// //             key={particle.id}
// //             className="absolute rounded-full bg-blue-400"
// //             style={{
// //               width: particle.size,
// //               height: particle.size,
// //               left: `${particle.x}%`,
// //               top: `${particle.y}%`,
// //               filter: "blur(1px)",
// //             }}
// //             animate={{
// //               y: [0, -30, 0],
// //               x: [0, Math.sin(particle.id) * 20, 0],
// //               opacity: [0.2, 0.8, 0.2],
// //               scale: [1, 1.5, 1],
// //             }}
// //             transition={{
// //               duration: particle.duration,
// //               repeat: Infinity,
// //               delay: particle.delay,
// //               ease: "easeInOut",
// //             }}
// //           />
// //         ))}

// //         {/* Glowing Orbs */}
// //         <motion.div
// //           className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl"
// //           style={{
// //             left: "20%",
// //             top: "30%",
// //           }}
// //           animate={{
// //             x: mousePosition.x * 50,
// //             y: mousePosition.y * 50,
// //             scale: [1, 1.2, 1],
// //           }}
// //           transition={{
// //             x: { type: "spring", stiffness: 50, damping: 30 },
// //             y: { type: "spring", stiffness: 50, damping: 30 },
// //             scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
// //           }}
// //         />

// //         <motion.div
// //           className="absolute w-96 h-96 rounded-full bg-cyan-600 opacity-15 blur-3xl"
// //           style={{
// //             right: "20%",
// //             bottom: "30%",
// //           }}
// //           animate={{
// //             x: mousePosition.x * -40,
// //             y: mousePosition.y * -40,
// //             scale: [1, 1.3, 1],
// //           }}
// //           transition={{
// //             x: { type: "spring", stiffness: 50, damping: 30 },
// //             y: { type: "spring", stiffness: 50, damping: 30 },
// //             scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
// //           }}
// //         />

// //         {/* Animated Scanning Lines */}
// //         {Array.from({ length: 5 }, (_, i) => (
// //           <motion.div
// //             key={i}
// //             className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
// //             style={{
// //               top: `${20 + i * 15}%`,
// //               width: "100%",
// //             }}
// //             initial={{ scaleX: 0, opacity: 0 }}
// //             animate={{
// //               scaleX: [0, 1, 0],
// //               opacity: [0, 0.5, 0],
// //             }}
// //             transition={{
// //               duration: 3,
// //               repeat: Infinity,
// //               delay: i * 0.5,
// //               ease: "easeInOut",
// //             }}
// //           />
// //         ))}

// //         {/* Code-like floating elements */}
// //         <motion.div
// //           className="absolute top-20 left-10 font-mono text-blue-400 text-xs opacity-30"
// //           animate={{
// //             y: [0, -10, 0],
// //             opacity: [0.3, 0.6, 0.3],
// //           }}
// //           transition={{ duration: 3, repeat: Infinity }}
// //         >
// //           {"</>"}
// //         </motion.div>

// //         <motion.div
// //           className="absolute bottom-32 right-20 font-mono text-cyan-400 text-xs opacity-30"
// //           animate={{
// //             y: [0, 10, 0],
// //             opacity: [0.3, 0.6, 0.3],
// //           }}
// //           transition={{ duration: 4, repeat: Infinity, delay: 1 }}
// //         >
// //           {"{ }"}
// //         </motion.div>

// //         <motion.div
// //           className="absolute top-1/3 right-1/4 font-mono text-blue-300 text-xs opacity-30"
// //           animate={{
// //             rotate: [0, 360],
// //             opacity: [0.3, 0.6, 0.3],
// //           }}
// //           transition={{ duration: 8, repeat: Infinity }}
// //         >
// //           {"[ ]"}
// //         </motion.div>
// //       </div>

// //       {/* Hero Content */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 60 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.9 }}
// //         className="relative z-10 max-w-3xl text-center"
// //       >
// //         <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
// //           Hi, I'm <span className="text-blue-500">Arpit Yadav</span>
// //         </h1>

// //         <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
// //           Full Stack Developer • AI Enthusiast
// //         </h2>

// //         <p className="text-gray-400 mb-8 leading-relaxed">
// //           I build scalable web applications and love working on backend systems,
// //           AI, and real-world products.
// //         </p>

// //         <div className="flex gap-4 justify-center">
// //           <a
// //             href="#contact"
// //             className="px-6 py-3 bg-blue-500 text-black font-semibold rounded hover:bg-blue-400 transition"
// //           >
// //             Contact Me
// //           </a>

// //           <a
// //             href="#projects"
// //             className="px-6 py-3 border border-gray-600 rounded hover:border-white transition"
// //           >
// //             View Projects
// //           </a>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // }

// // export default Hero;




// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// function Hero() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [hero, setHero] = useState(null);

//   /* ================= MOUSE EFFECT ================= */
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

//   /* ================= FETCH HERO DATA ================= */
//   useEffect(() => {
//     fetch("http://localhost:5000/api/hero")
//       .then((res) => res.json())
//       .then(setHero)
//       .catch(() => {
//         setHero({
//           name: "Arpit Yadav",
//           title: "Full Stack Developer • AI Enthusiast",
//           description:
//             "I build scalable web applications and love working on backend systems, AI, and real-world products.",
//           resumeUrl: "https://drive.google.com/file/d/192gF3VbWq4pgcces-ZBsgWYLXf6VwlH5/view?usp=drivesdk",
//         });
//       });
//   }, []);

//   if (!hero) return null;

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      
//       {/* ================= AMAZING ANIMATED BACKGROUND ================= */}
//       <div className="absolute inset-0 overflow-hidden">
        
//         {/* Base Gradient with Animation */}
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

//         {/* Animated Grid */}
//         <svg className="absolute inset-0 w-full h-full">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <motion.path
//                 d="M 40 0 L 0 0 0 40"
//                 fill="none"
//                 stroke="rgba(59, 130, 246, 0.3)"
//                 strokeWidth="0.5"
//               />
//             </pattern>
//             <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
//               <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" />
//               <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
//             </linearGradient>
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

//         {/* Massive Rotating Rings */}
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={`ring-${i}`}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
//             style={{
//               width: `${300 + i * 200}px`,
//               height: `${300 + i * 200}px`,
//             }}
//             animate={{
//               rotate: i % 2 === 0 ? 360 : -360,
//               scale: [1, 1.1, 1],
//               opacity: [0.2, 0.4, 0.2],
//             }}
//             transition={{
//               rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
//               scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//               opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//             }}
//           />
//         ))}

//         {/* Floating Geometric Shapes */}
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={`shape-${i}`}
//             className="absolute"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               x: [0, Math.random() * 200 - 100, 0],
//               y: [0, Math.random() * 200 - 100, 0],
//               rotate: [0, 360],
//               scale: [1, 1.5, 1],
//               opacity: [0.2, 0.6, 0.2],
//             }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut",
//             }}
//           >
//             {i % 3 === 0 ? (
//               <div className="w-12 h-12 border-2 border-cyan-400/30 rotate-45" />
//             ) : i % 3 === 1 ? (
//               <div className="w-12 h-12 border-2 border-purple-400/30 rounded-full" />
//             ) : (
//               <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[40px] border-b-blue-400/30" />
//             )}
//           </motion.div>
//         ))}

//         {/* Particle System */}
//         {[...Array(60)].map((_, i) => (
//           <motion.div
//             key={`particle-${i}`}
//             className="absolute rounded-full"
//             style={{
//               width: Math.random() * 4 + 2,
//               height: Math.random() * 4 + 2,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               background: i % 3 === 0 
//                 ? "rgba(59, 130, 246, 0.8)" 
//                 : i % 3 === 1 
//                 ? "rgba(147, 51, 234, 0.8)" 
//                 : "rgba(6, 182, 212, 0.8)",
//               boxShadow: "0 0 20px currentColor",
//             }}
//             animate={{
//               y: [0, -300 - Math.random() * 200],
//               x: [0, Math.random() * 100 - 50],
//               opacity: [0, 1, 0],
//               scale: [0, 1.5, 0],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 8,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeOut",
//             }}
//           />
//         ))}

//         {/* Scanning Lines */}
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={`line-${i}`}
//             className="absolute h-px w-full"
//             style={{
//               top: `${i * 12.5}%`,
//               background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
//             }}
//             animate={{
//               x: ["-100%", "100%"],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               delay: i * 0.5,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//         {/* Glowing Orbs with Mouse Interaction */}
//         <motion.div
//           className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
//           style={{
//             background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
//             top: "20%",
//             left: "15%",
//           }}
//           animate={{
//             x: mousePosition.x * 100,
//             y: mousePosition.y * 100,
//             scale: [1, 1.3, 1],
//           }}
//           transition={{
//             x: { type: "spring", stiffness: 50, damping: 30 },
//             y: { type: "spring", stiffness: 50, damping: 30 },
//             scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//           }}
//         />

//         <motion.div
//           className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
//           style={{
//             background: "radial-gradient(circle, rgba(147,51,234,0.6) 0%, transparent 70%)",
//             bottom: "20%",
//             right: "15%",
//           }}
//           animate={{
//             x: mousePosition.x * -80,
//             y: mousePosition.y * -80,
//             scale: [1, 1.4, 1],
//           }}
//           transition={{
//             x: { type: "spring", stiffness: 50, damping: 30 },
//             y: { type: "spring", stiffness: 50, damping: 30 },
//             scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//           }}
//         />

//         <motion.div
//           className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
//           style={{
//             background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
//             top: "50%",
//             left: "50%",
//           }}
//           animate={{
//             x: mousePosition.x * 60,
//             y: mousePosition.y * 60,
//             scale: [1, 1.5, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             x: { type: "spring", stiffness: 50, damping: 30 },
//             y: { type: "spring", stiffness: 50, damping: 30 },
//             scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
//             rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//           }}
//         />

//         {/* Binary Code Rain Effect */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={`binary-${i}`}
//             className="absolute font-mono text-xs text-cyan-400/20"
//             style={{
//               left: `${i * 5}%`,
//               top: "-20px",
//             }}
//             animate={{
//               y: ["0vh", "120vh"],
//               opacity: [0, 0.5, 0],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 4,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           >
//             {Array.from({ length: 20 }, () => Math.random() > 0.5 ? "1" : "0").join("\n")}
//           </motion.div>
//         ))}

//         {/* Hexagon Grid Pattern */}
//         <motion.div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `
//               url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='rgba(59,130,246,0.3)' stroke-width='0.5'/%3E%3C/svg%3E")
//             `,
//             backgroundSize: "60px 60px",
//           }}
//           animate={{
//             backgroundPosition: ["0px 0px", "60px 60px"],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Cursor Follower Effect */}
//         <motion.div
//           className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
//           style={{
//             background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
//             left: 0,
//             top: 0,
//           }}
//           animate={{
//             x: mousePosition.x * window.innerWidth / 2 + window.innerWidth / 2 - 100,
//             y: mousePosition.y * window.innerHeight / 2 + window.innerHeight / 2 - 100,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 30,
//           }}
//         />

//         {/* Pulsing Code Symbols */}
//         {["</>", "{ }", "[ ]", "( )", "=>", "&&", "||", "==="].map((symbol, i) => (
//           <motion.div
//             key={`symbol-${i}`}
//             className="absolute font-mono text-2xl font-bold opacity-10"
//             style={{
//               left: `${10 + (i % 4) * 25}%`,
//               top: `${20 + Math.floor(i / 4) * 40}%`,
//               color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#9333ea" : "#06b6d4",
//             }}
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.1, 0.3, 0.1],
//               rotate: [0, 10, -10, 0],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 2,
//               repeat: Infinity,
//               delay: i * 0.3,
//               ease: "easeInOut",
//             }}
//           >
//             {symbol}
//           </motion.div>
//         ))}
//       </div>

//       {/* ================= HERO CONTENT ================= */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="relative z-10 max-w-4xl text-center px-4"
//       >
//         {/* Greeting Badge */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//           className="inline-block mb-6"
//         >
//           <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-blue-500/50 rounded-full text-sm text-blue-400 font-medium backdrop-blur-sm shadow-lg shadow-blue-500/20">
//             👋 Welcome to my portfolio
//           </span>
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
//         >
//           <span className="text-white">Hi, I'm </span>
//           <motion.span
//             className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
//             animate={{
//               backgroundPosition: ["0%", "100%", "0%"],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             style={{
//               backgroundSize: "200% 200%",
//             }}
//           >
//             {hero.name}
//           </motion.span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-light"
//         >
//           {hero.title}
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
//         >
//           {hero.description}
//         </motion.p>

//         {/* Action Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="flex gap-4 justify-center flex-wrap"
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05, y: -5 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden group shadow-lg shadow-blue-500/50"
//           >
//             <motion.span
//               className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: "0%" }}
//               transition={{ duration: 0.3 }}
//             />
//             <span className="relative z-10">Contact Me</span>
//           </motion.a>

//           <motion.a
//             href="#projects"
//             whileHover={{ scale: 1.05, y: -5 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
//           >
//             View Projects
//           </motion.a>

//           <motion.a
//             href={hero.resumeUrl}
//             target="_blank"
//             rel="noreferrer"
//             whileHover={{ scale: 1.05, y: -5 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 backdrop-blur-sm"
//           >
//             📄 Resume
//           </motion.a>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="text-gray-500 text-sm flex flex-col items-center gap-2"
//           >
//             <span>Scroll Down</span>
//             <motion.svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               animate={{ y: [0, 5, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </motion.svg>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// export default Hero;


import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hero, setHero] = useState(null);

  /* ================= MOUSE EFFECT ================= */
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

  /* ================= FETCH HERO DATA ================= */
  useEffect(() => {
    fetch("http://localhost:5000/api/hero")
      .then((res) => res.json())
      .then(setHero)
      .catch(() => {
        setHero({
          name: "Arpit Yadav",
          title: "Full Stack Developer • AI Enthusiast",
          description:
            "I build scalable web applications and love working on backend systems, AI, and real-world products.",
          resumeUrl: "https://drive.google.com/file/d/192gF3VbWq4pgcces-ZBsgWYLXf6VwlH5/view?usp=drivesdk",
        });
      });
  }, []);

  // Convert Google Drive view link to preview link
  const getResumeUrl = () => {
    if (!hero?.resumeUrl) return "#";
    
    // If it's a Google Drive link, convert to preview format
    if (hero.resumeUrl.includes("drive.google.com")) {
      // Extract file ID from various Google Drive URL formats
      const fileIdMatch = hero.resumeUrl.match(/\/d\/([^\/]+)/);
      if (fileIdMatch) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      }
    }
    
    return hero.resumeUrl;
  };

  if (!hero) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      
      {/* ================= AMAZING ANIMATED BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Base Gradient with Animation */}
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

        {/* Animated Grid */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
            </linearGradient>
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

        {/* Massive Rotating Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-12 h-12 border-2 border-cyan-400/30 rotate-45" />
            ) : i % 3 === 1 ? (
              <div className="w-12 h-12 border-2 border-purple-400/30 rounded-full" />
            ) : (
              <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[40px] border-b-blue-400/30" />
            )}
          </motion.div>
        ))}

        {/* Particle System */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? "rgba(59, 130, 246, 0.8)" 
                : i % 3 === 1 
                ? "rgba(147, 51, 234, 0.8)" 
                : "rgba(6, 182, 212, 0.8)",
              boxShadow: "0 0 20px currentColor",
            }}
            animate={{
              y: [0, -300 - Math.random() * 200],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Scanning Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px w-full"
            style={{
              top: `${i * 12.5}%`,
              background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing Orbs with Mouse Interaction */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
            top: "20%",
            left: "15%",
          }}
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 100,
            scale: [1, 1.3, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(147,51,234,0.6) 0%, transparent 70%)",
            bottom: "20%",
            right: "15%",
          }}
          animate={{
            x: mousePosition.x * -80,
            y: mousePosition.y * -80,
            scale: [1, 1.4, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: mousePosition.x * 60,
            y: mousePosition.y * 60,
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Binary Code Rain Effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute font-mono text-xs text-cyan-400/20"
            style={{
              left: `${i * 5}%`,
              top: "-20px",
            }}
            animate={{
              y: ["0vh", "120vh"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? "1" : "0").join("\n")}
          </motion.div>
        ))}

        {/* Hexagon Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='rgba(59,130,246,0.3)' stroke-width='0.5'/%3E%3C/svg%3E")
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Cursor Follower Effect */}
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            left: 0,
            top: 0,
          }}
          animate={{
            x: mousePosition.x * window.innerWidth / 2 + window.innerWidth / 2 - 100,
            y: mousePosition.y * window.innerHeight / 2 + window.innerHeight / 2 - 100,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
        />

        {/* Pulsing Code Symbols */}
        {["</>", "{ }", "[ ]", "( )", "=>", "&&", "||", "==="].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute font-mono text-2xl font-bold opacity-10"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 40}%`,
              color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#9333ea" : "#06b6d4",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* ================= HERO CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl text-center px-4"
      >
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block mb-6"
        >
          <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-blue-500/50 rounded-full text-sm text-blue-400 font-medium backdrop-blur-sm shadow-lg shadow-blue-500/20">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <motion.span
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            {hero.name}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-light"
        >
          {hero.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          {hero.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden group shadow-lg shadow-blue-500/50"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Contact Me</span>
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
          >
            View Projects
          </motion.a>

          <motion.a
            href={getResumeUrl()}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            📄 Resume
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 text-sm flex flex-col items-center gap-2"
          >
            <span>Scroll Down</span>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;