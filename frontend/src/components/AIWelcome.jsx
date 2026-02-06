// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { useEffect, useState } from "react";

// // // // // const messages = [
// // // // //   "Hi 👋",
// // // // //   "I'm Arpit's AI assistant.",
// // // // //   "",
// // // // //   "You're about to explore a portfolio focused on",
// // // // //   "real-world projects, full-stack development,",
// // // // //   "and practical engineering experience.",
// // // // //   "",
// // // // //   "Loading the experience…",
// // // // // ];

// // // // // const AIWelcome = ({ onFinish }) => {
// // // // //   const [index, setIndex] = useState(0);
// // // // //   const [isSkipped, setIsSkipped] = useState(false);

// // // // //   useEffect(() => {
// // // // //     // Check if user has seen this before (session)
// // // // //     const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
// // // // //     if (hasSeenWelcome) {
// // // // //       onFinish();
// // // // //       return;
// // // // //     }

// // // // //     if (index < messages.length && !isSkipped) {
// // // // //       const timer = setTimeout(() => {
// // // // //         setIndex((i) => i + 1);
// // // // //       }, 650); // Slightly faster for better flow
// // // // //       return () => clearTimeout(timer);
// // // // //     } else if (index >= messages.length && !isSkipped) {
// // // // //       // Auto-finish after all messages
// // // // //       const exitTimer = setTimeout(() => {
// // // // //         handleFinish();
// // // // //       }, 1000);
// // // // //       return () => clearTimeout(exitTimer);
// // // // //     }
// // // // //   }, [index, onFinish, isSkipped]);

// // // // //   const handleFinish = () => {
// // // // //     // Remember that user has seen welcome
// // // // //     sessionStorage.setItem("hasSeenWelcome", "true");
// // // // //     onFinish();
// // // // //   };

// // // // //   const handleSkip = () => {
// // // // //     setIsSkipped(true);
// // // // //     handleFinish();
// // // // //   };

// // // // //   return (
// // // // //     <AnimatePresence>
// // // // //       <motion.div
// // // // //         className="fixed inset-0 bg-black text-white flex items-center justify-center z-[9999] overflow-hidden"
// // // // //         initial={{ opacity: 1 }}
// // // // //         exit={{ opacity: 0 }}
// // // // //         transition={{ duration: 0.8, ease: "easeInOut" }}
// // // // //       >
// // // // //         {/* Subtle animated background */}
// // // // //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // //           {/* Gradient orb */}
// // // // //           <motion.div
// // // // //             className="absolute rounded-full bg-blue-500/10 blur-3xl"
// // // // //             style={{ width: 600, height: 600, top: "20%", left: "10%" }}
// // // // //             animate={{
// // // // //               x: [0, 100, 0],
// // // // //               y: [0, -50, 0],
// // // // //               scale: [1, 1.2, 1],
// // // // //             }}
// // // // //             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// // // // //           />
          
// // // // //           {/* Grid pattern */}
// // // // //           <div 
// // // // //             className="absolute inset-0 opacity-5"
// // // // //             style={{
// // // // //               backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
// // // // //                                linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
// // // // //               backgroundSize: "50px 50px",
// // // // //             }}
// // // // //           />
// // // // //         </div>

// // // // //         {/* Content */}
// // // // //         <div className="relative z-10 max-w-2xl px-6 text-left">
// // // // //           {/* Messages with typing effect */}
// // // // //           <div className="space-y-2">
// // // // //             {messages.slice(0, index).map((line, i) => (
// // // // //               <motion.p
// // // // //                 key={i}
// // // // //                 initial={{ opacity: 0, y: 10 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ duration: 0.4, ease: "easeOut" }}
// // // // //                 className={`${
// // // // //                   line === "" ? "h-4" : "text-lg md:text-xl"
// // // // //                 } leading-relaxed text-gray-300`}
// // // // //               >
// // // // //                 {line}
// // // // //                 {/* Cursor blink on last message */}
// // // // //                 {i === index - 1 && index < messages.length && line !== "" && (
// // // // //                   <motion.span
// // // // //                     className="inline-block ml-1 w-0.5 h-5 bg-blue-400"
// // // // //                     animate={{ opacity: [1, 0, 1] }}
// // // // //                     transition={{ duration: 0.8, repeat: Infinity }}
// // // // //                   />
// // // // //                 )}
// // // // //               </motion.p>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Skip button - always visible */}
// // // // //           <motion.button
// // // // //             onClick={handleSkip}
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ delay: 1 }}
// // // // //             className="mt-8 text-sm text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
// // // // //           >
// // // // //             <span>Skip</span>
// // // // //             <motion.span
// // // // //               animate={{ x: [0, 5, 0] }}
// // // // //               transition={{ duration: 1.5, repeat: Infinity }}
// // // // //               className="group-hover:text-blue-400"
// // // // //             >
// // // // //               →
// // // // //             </motion.span>
// // // // //           </motion.button>

// // // // //           {/* Progress indicator */}
// // // // //           <div className="mt-6 flex gap-1.5">
// // // // //             {messages.map((_, i) => (
// // // // //               <motion.div
// // // // //                 key={i}
// // // // //                 className={`h-1 rounded-full transition-all duration-300 ${
// // // // //                   i < index ? "bg-blue-500 w-8" : "bg-gray-800 w-4"
// // // // //                 }`}
// // // // //                 initial={{ scaleX: 0 }}
// // // // //                 animate={{ scaleX: i < index ? 1 : 0.3 }}
// // // // //                 transition={{ duration: 0.3 }}
// // // // //               />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Bottom branding (subtle) */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 0.3 }}
// // // // //           transition={{ delay: 2 }}
// // // // //           className="absolute bottom-8 right-8 text-xs text-gray-600"
// // // // //         >
// // // // //           <span className="flex items-center gap-2">
// // // // //             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
// // // // //             AI-Powered Portfolio
// // // // //           </span>
// // // // //         </motion.div>
// // // // //       </motion.div>
// // // // //     </AnimatePresence>
// // // // //   );
// // // // // };

// // // // // export default AIWelcome;




// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { useEffect, useState } from "react";

// // // // // Get time-based greeting
// // // // const getTimeBasedGreeting = () => {
// // // //   const hour = new Date().getHours();
// // // //   if (hour < 12) return "Good morning 🌅";
// // // //   if (hour < 18) return "Good afternoon ☀️";
// // // //   return "Good evening 🌙";
// // // // };

// // // // const getMessages = (timeGreeting) => [
// // // //   timeGreeting,
// // // //   "I'm Arpit's AI assistant.",
// // // //   "",
// // // //   "You're about to explore a portfolio focused on",
// // // //   "real-world projects, full-stack development,",
// // // //   "and practical engineering experience.",
// // // //   "",
// // // //   "Loading the experience…",
// // // // ];

// // // // const AIWelcome = ({ onFinish, enableSound = false }) => {
// // // //   const [index, setIndex] = useState(0);
// // // //   const [isSkipped, setIsSkipped] = useState(false);
// // // //   const [messages] = useState(() => getMessages(getTimeBasedGreeting()));

// // // //   // Optional: Typing sound effect
// // // //   const playTypingSound = () => {
// // // //     if (!enableSound) return;
    
// // // //     // Create a subtle click sound
// // // //     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// // // //     const oscillator = audioContext.createOscillator();
// // // //     const gainNode = audioContext.createGain();
    
// // // //     oscillator.connect(gainNode);
// // // //     gainNode.connect(audioContext.destination);
    
// // // //     oscillator.frequency.value = 800;
// // // //     oscillator.type = 'sine';
    
// // // //     gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
// // // //     gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
// // // //     oscillator.start(audioContext.currentTime);
// // // //     oscillator.stop(audioContext.currentTime + 0.05);
// // // //   };

// // // //   useEffect(() => {
// // // //     // Check if user has seen this before (session)
// // // //     const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
// // // //     if (hasSeenWelcome === "true") {
// // // //       onFinish();
// // // //       return;
// // // //     }

// // // //     if (index < messages.length && !isSkipped) {
// // // //       const timer = setTimeout(() => {
// // // //         setIndex((i) => i + 1);
// // // //         playTypingSound();
// // // //       }, 650);
// // // //       return () => clearTimeout(timer);
// // // //     } else if (index >= messages.length && !isSkipped) {
// // // //       const exitTimer = setTimeout(() => {
// // // //         handleFinish();
// // // //       }, 1000);
// // // //       return () => clearTimeout(exitTimer);
// // // //     }
// // // //   }, [index, onFinish, isSkipped, messages.length]);

// // // //   // ESC key to skip
// // // //   useEffect(() => {
// // // //     const handleKeyPress = (e) => {
// // // //       if (e.key === "Escape") {
// // // //         handleSkip();
// // // //       }
// // // //     };

// // // //     window.addEventListener("keydown", handleKeyPress);
// // // //     return () => window.removeEventListener("keydown", handleKeyPress);
// // // //   }, []);

// // // //   const handleFinish = () => {
// // // //     sessionStorage.setItem("hasSeenWelcome", "true");
// // // //     onFinish();
// // // //   };

// // // //   const handleSkip = () => {
// // // //     setIsSkipped(true);
// // // //     handleFinish();
// // // //   };

// // // //   return (
// // // //     <AnimatePresence>
// // // //       <motion.div
// // // //         className="fixed inset-0 bg-black text-white flex items-center justify-center z-[9999] overflow-hidden"
// // // //         initial={{ opacity: 1 }}
// // // //         exit={{ opacity: 0 }}
// // // //         transition={{ duration: 0.8, ease: "easeInOut" }}
// // // //       >
// // // //         {/* Subtle animated background */}
// // // //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // //           {/* Gradient orbs */}
// // // //           <motion.div
// // // //             className="absolute rounded-full bg-blue-500/10 blur-3xl"
// // // //             style={{ width: 600, height: 600, top: "20%", left: "10%" }}
// // // //             animate={{
// // // //               x: [0, 100, 0],
// // // //               y: [0, -50, 0],
// // // //               scale: [1, 1.2, 1],
// // // //             }}
// // // //             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// // // //           />
          
// // // //           <motion.div
// // // //             className="absolute rounded-full bg-purple-500/10 blur-3xl"
// // // //             style={{ width: 500, height: 500, bottom: "20%", right: "10%" }}
// // // //             animate={{
// // // //               x: [0, -80, 0],
// // // //               y: [0, 60, 0],
// // // //               scale: [1, 1.3, 1],
// // // //             }}
// // // //             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// // // //           />
          
// // // //           {/* Grid pattern */}
// // // //           <div 
// // // //             className="absolute inset-0 opacity-5"
// // // //             style={{
// // // //               backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
// // // //                                linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
// // // //               backgroundSize: "50px 50px",
// // // //             }}
// // // //           />

// // // //           {/* Floating particles */}
// // // //           {[...Array(15)].map((_, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
// // // //               style={{
// // // //                 left: `${(i * 7) % 100}%`,
// // // //                 top: `${(i * 13) % 100}%`,
// // // //               }}
// // // //               animate={{
// // // //                 y: [0, -300, 0],
// // // //                 opacity: [0, 0.6, 0],
// // // //               }}
// // // //               transition={{
// // // //                 duration: 8 + (i % 5),
// // // //                 repeat: Infinity,
// // // //                 delay: i * 0.5,
// // // //                 ease: "easeInOut",
// // // //               }}
// // // //             />
// // // //           ))}
// // // //         </div>

// // // //         {/* Content */}
// // // //         <div className="relative z-10 max-w-2xl px-6 text-left">
// // // //           {/* AI Icon */}
// // // //           <motion.div
// // // //             initial={{ scale: 0, rotate: -180 }}
// // // //             animate={{ scale: 1, rotate: 0 }}
// // // //             transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
// // // //             className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
// // // //           >
// // // //             <span className="text-3xl">🤖</span>
// // // //           </motion.div>

// // // //           {/* Messages with typing effect */}
// // // //           <div className="space-y-2">
// // // //             {messages.slice(0, index).map((line, i) => (
// // // //               <motion.p
// // // //                 key={i}
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 0.9, ease: "easeOut" }}
// // // //                 className={`${
// // // //                   line === "" ? "h-4" : "text-lg md:text-xl"
// // // //                 } leading-relaxed ${
// // // //                   i === 0 ? "text-blue-400 font-semibold" : "text-gray-300"
// // // //                 }`}
// // // //               >
// // // //                 {line}
// // // //                 {/* Cursor blink on last message */}
// // // //                 {i === index - 1 && index < messages.length && line !== "" && (
// // // //                   <motion.span
// // // //                     className="inline-block ml-1 w-0.5 h-5 bg-blue-400"
// // // //                     animate={{ opacity: [1, 0, 1] }}
// // // //                     transition={{ duration: 0.8, repeat: Infinity }}
// // // //                   />
// // // //                 )}
// // // //               </motion.p>
// // // //             ))}
// // // //           </div>

// // // //           {/* Skip button with keyboard hint */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ delay: 1 }}
// // // //             className="mt-8 flex items-center gap-4"
// // // //           >
// // // //             <button
// // // //               onClick={handleSkip}
// // // //               className="text-sm text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
// // // //             >
// // // //               <span>Skip</span>
// // // //               <motion.span
// // // //                 animate={{ x: [0, 5, 0] }}
// // // //                 transition={{ duration: 1.5, repeat: Infinity }}
// // // //                 className="group-hover:text-blue-400"
// // // //               >
// // // //                 →
// // // //               </motion.span>
// // // //             </button>
            
// // // //             <span className="text-xs text-gray-700 flex items-center gap-1">
// // // //               or press <kbd className="px-2 py-0.5 bg-gray-800 rounded text-gray-400 text-[10px]">ESC</kbd>
// // // //             </span>
// // // //           </motion.div>

// // // //           {/* Progress indicator */}
// // // //           <div className="mt-6 flex gap-1.5">
// // // //             {messages.filter(m => m !== "").map((_, i) => (
// // // //               <motion.div
// // // //                 key={i}
// // // //                 className={`h-1 rounded-full transition-all duration-300 ${
// // // //                   i < index ? "bg-blue-500 w-8" : "bg-gray-800 w-4"
// // // //                 }`}
// // // //                 initial={{ scaleX: 0 }}
// // // //                 animate={{ scaleX: i < index ? 1 : 0.3 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Bottom branding */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 0.3 }}
// // // //           transition={{ delay: 2 }}
// // // //           className="absolute bottom-8 right-8 text-xs text-gray-600"
// // // //         >
// // // //           <span className="flex items-center gap-2">
// // // //             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
// // // //             AI-Powered Portfolio
// // // //           </span>
// // // //         </motion.div>
// // // //       </motion.div>
// // // //     </AnimatePresence>
// // // //   );
// // // // };

// // // // export default AIWelcome;

// // // import { motion } from "framer-motion";
// // // import { useEffect, useState } from "react";

// // // const AIWelcome = ({ onFinish }) => {
// // //   const [progress, setProgress] = useState(0);

// // //   useEffect(() => {
// // //     // Skip if seen before
// // //     const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
// // //     if (hasSeenWelcome === "true") {
// // //       onFinish();
// // //       return;
// // //     }

// // //     // Smooth progress bar over 4 seconds
// // //     const interval = setInterval(() => {
// // //       setProgress((prev) => {
// // //         if (prev >= 100) {
// // //           clearInterval(interval);
// // //           handleFinish();
// // //           return 100;
// // //         }
// // //         return prev + 1;
// // //       });
// // //     }, 40); // 100 steps * 40ms = 4 seconds

// // //     return () => clearInterval(interval);
// // //   }, [onFinish]);

// // //   const handleFinish = () => {
// // //     sessionStorage.setItem("hasSeenWelcome", "true");
// // //     onFinish();
// // //   };

// // //   return (
// // //     <motion.div
// // //       className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-[9999]"
// // //       initial={{ opacity: 1 }}
// // //       exit={{ opacity: 0 }}
// // //       transition={{ duration: 0.5 }}
// // //     >
// // //       {/* Subtle animated background */}
// // //       <div className="absolute inset-0 opacity-30">
// // //         <motion.div
// // //           className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
// // //           animate={{
// // //             x: [0, 100, 0],
// // //             y: [0, 50, 0],
// // //           }}
// // //           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
// // //           animate={{
// // //             x: [0, -100, 0],
// // //             y: [0, -50, 0],
// // //           }}
// // //           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       {/* Main content */}
// // //       <div className="relative z-10 text-center space-y-8 px-6 max-w-2xl">
// // //         {/* Logo/Icon */}
// // //         <motion.div
// // //           initial={{ scale: 0.5, opacity: 0 }}
// // //           animate={{ scale: 1, opacity: 1 }}
// // //           transition={{ duration: 0.5 }}
// // //           className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl"
// // //         >
// // //           <span className="text-4xl">🤖</span>
// // //         </motion.div>

// // //         {/* Title */}
// // //         <motion.div
// // //           initial={{ y: 20, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ delay: 0.2, duration: 0.5 }}
// // //           className="space-y-3"
// // //         >
// // //           <h1 className="text-5xl md:text-6xl font-bold text-white">
// // //             Welcome
// // //           </h1>
// // //           <p className="text-lg text-gray-400">
// // //             I'm Arpit's AI Assistant
// // //           </p>
// // //         </motion.div>

// // //         {/* Feature highlights */}
// // //         <motion.div
// // //           initial={{ y: 20, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ delay: 0.4, duration: 0.5 }}
// // //           className="flex justify-center gap-6 text-sm text-gray-500"
// // //         >
// // //           <span>💼 Projects</span>
// // //           <span>⚡ Skills</span>
// // //           <span>🚀 Experience</span>
// // //         </motion.div>

// // //         {/* Progress bar */}
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ delay: 0.6, duration: 0.5 }}
// // //           className="space-y-2"
// // //         >
// // //           <div className="w-64 h-1.5 mx-auto bg-gray-800 rounded-full overflow-hidden">
// // //             <motion.div
// // //               className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
// // //               style={{ width: `${progress}%` }}
// // //               transition={{ duration: 0.1 }}
// // //             />
// // //           </div>
// // //           <p className="text-xs text-gray-600">Loading portfolio...</p>
// // //         </motion.div>

// // //         {/* Skip button */}
// // //         <motion.button
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ delay: 0.8 }}
// // //           onClick={handleFinish}
// // //           className="text-sm text-gray-500 hover:text-white transition-colors"
// // //         >
// // //           Skip
// // //         </motion.button>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // export default AIWelcome;


// // import { motion, AnimatePresence } from "framer-motion";
// // import { useEffect, useState } from "react";

// // const getTimeBasedGreeting = () => {
// //   const hour = new Date().getHours();
// //   if (hour < 12) return "Good morning";
// //   if (hour < 18) return "Good afternoon";
// //   return "Good evening";
// // };

// // const conversation = [
// //   {
// //     speaker: "ai",
// //     text: "Hello there! 👋",
// //     delay: 500,
// //   },
// //   {
// //     speaker: "ai", 
// //     text: `${getTimeBasedGreeting()}! I'm Claude, Arpit's AI assistant.`,
// //     delay: 1200,
// //   },
// //   {
// //     speaker: "ai",
// //     text: "I see you're interested in learning about Arpit...",
// //     delay: 1500,
// //   },
// //   {
// //     speaker: "ai",
// //     text: "He's a Full-Stack Developer who builds production-ready applications.",
// //     delay: 1800,
// //   },
// //   {
// //     speaker: "ai",
// //     text: "Specializes in React, Node.js, AI integration, and scalable systems.",
// //     delay: 1800,
// //   },
// //   {
// //     speaker: "ai",
// //     text: "Ready to explore his portfolio? Let me show you around! ✨",
// //     delay: 1600,
// //   },
// // ];

// // const AIWelcome = ({ onFinish }) => {
// //   const [messages, setMessages] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isTyping, setIsTyping] = useState(false);
// //   const [dots, setDots] = useState("");

// //   // Typing dots animation
// //   useEffect(() => {
// //     if (!isTyping) return;
    
// //     const interval = setInterval(() => {
// //       setDots(prev => prev.length >= 3 ? "" : prev + ".");
// //     }, 300);
    
// //     return () => clearInterval(interval);
// //   }, [isTyping]);

// //   useEffect(() => {
// //     const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
// //     if (hasSeenWelcome === "true") {
// //       onFinish();
// //       return;
// //     }

// //     if (currentIndex < conversation.length) {
// //       setIsTyping(true);
      
// //       const timer = setTimeout(() => {
// //         setMessages(prev => [...prev, conversation[currentIndex]]);
// //         setIsTyping(false);
// //         setCurrentIndex(prev => prev + 1);
// //       }, conversation[currentIndex].delay);
      
// //       return () => clearTimeout(timer);
// //     } else {
// //       const exitTimer = setTimeout(() => {
// //         handleFinish();
// //       }, 1500);
// //       return () => clearTimeout(exitTimer);
// //     }
// //   }, [currentIndex, onFinish]);

// //   const handleFinish = () => {
// //     sessionStorage.setItem("hasSeenWelcome", "true");
// //     onFinish();
// //   };

// //   const handleSkip = () => {
// //     handleFinish();
// //   };

// //   return (
// //     <AnimatePresence>
// //       <motion.div
// //         className="fixed inset-0 z-[9999] overflow-hidden"
// //         initial={{ opacity: 1 }}
// //         exit={{ opacity: 0, scale: 1.05 }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         {/* Animated Gradient Background */}
// //         <motion.div
// //           className="absolute inset-0"
// //           animate={{
// //             background: [
// //               "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //               "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
// //               "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
// //               "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
// //               "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //             ],
// //           }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //         />

// //         {/* Mesh Gradient Overlay */}
// //         <div 
// //           className="absolute inset-0 opacity-30"
// //           style={{
// //             backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
// //                              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
// //           }}
// //         />

// //         {/* Floating Orbs */}
// //         {[...Array(5)].map((_, i) => (
// //           <motion.div
// //             key={i}
// //             className="absolute rounded-full blur-3xl"
// //             style={{
// //               width: 300 + i * 50,
// //               height: 300 + i * 50,
// //               background: `rgba(255, 255, 255, ${0.05 + i * 0.02})`,
// //               left: `${20 + i * 15}%`,
// //               top: `${10 + i * 15}%`,
// //             }}
// //             animate={{
// //               x: [0, 50, 0],
// //               y: [0, -30, 0],
// //               scale: [1, 1.1, 1],
// //             }}
// //             transition={{
// //               duration: 8 + i * 2,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //             }}
// //           />
// //         ))}

// //         {/* Main Chat Interface */}
// //         <div className="absolute inset-0 flex items-center justify-center px-4">
// //           <div className="w-full max-w-3xl">
// //             {/* AI Avatar */}
// //             <motion.div
// //               initial={{ scale: 0, rotate: -180 }}
// //               animate={{ scale: 1, rotate: 0 }}
// //               transition={{ type: "spring", stiffness: 200, damping: 15 }}
// //               className="flex justify-center mb-8"
// //             >
// //               <div className="relative">
// //                 {/* Glow effect */}
// //                 <motion.div
// //                   className="absolute inset-0 rounded-full bg-white/30 blur-2xl"
// //                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
// //                   transition={{ duration: 2, repeat: Infinity }}
// //                 />
                
// //                 {/* Avatar */}
// //                 <motion.div
// //                   className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl"
// //                   animate={{ y: [0, -10, 0] }}
// //                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// //                 >
// //                   <span className="text-5xl">🤖</span>
// //                 </motion.div>

// //                 {/* Status indicator */}
// //                 <motion.div
// //                   className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg"
// //                   animate={{ scale: [1, 1.2, 1] }}
// //                   transition={{ duration: 2, repeat: Infinity }}
// //                 />
// //               </div>
// //             </motion.div>

// //             {/* Chat Messages */}
// //             <div className="space-y-4 mb-8">
// //               <AnimatePresence>
// //                 {messages.map((msg, i) => (
// //                   <motion.div
// //                     key={i}
// //                     initial={{ x: -50, opacity: 0 }}
// //                     animate={{ x: 0, opacity: 1 }}
// //                     transition={{ type: "spring", stiffness: 150, damping: 20 }}
// //                     className="flex items-start gap-3"
// //                   >
// //                     {/* Message bubble */}
// //                     <motion.div
// //                       initial={{ scale: 0.8 }}
// //                       animate={{ scale: 1 }}
// //                       className="bg-white/95 backdrop-blur-lg rounded-3xl rounded-tl-sm px-6 py-4 shadow-xl max-w-2xl"
// //                     >
// //                       <p className="text-gray-800 text-lg leading-relaxed">
// //                         {msg.text}
// //                       </p>
// //                     </motion.div>
// //                   </motion.div>
// //                 ))}

// //                 {/* Typing indicator */}
// //                 {isTyping && (
// //                   <motion.div
// //                     initial={{ x: -50, opacity: 0 }}
// //                     animate={{ x: 0, opacity: 1 }}
// //                     exit={{ opacity: 0 }}
// //                     className="flex items-start gap-3"
// //                   >
// //                     <div className="bg-white/95 backdrop-blur-lg rounded-3xl rounded-tl-sm px-6 py-4 shadow-xl">
// //                       <div className="flex gap-2">
// //                         <motion.div
// //                           className="w-3 h-3 bg-gray-400 rounded-full"
// //                           animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
// //                           transition={{ duration: 1, repeat: Infinity, delay: 0 }}
// //                         />
// //                         <motion.div
// //                           className="w-3 h-3 bg-gray-400 rounded-full"
// //                           animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
// //                           transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
// //                         />
// //                         <motion.div
// //                           className="w-3 h-3 bg-gray-400 rounded-full"
// //                           animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
// //                           transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
// //                         />
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>

// //             {/* Action button (appears at the end) */}
// //             {currentIndex >= conversation.length && (
// //               <motion.div
// //                 initial={{ y: 20, opacity: 0 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 className="flex justify-center"
// //               >
// //                 <motion.button
// //                   onClick={handleSkip}
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   className="px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center gap-2"
// //                 >
// //                   <span>Let's Go!</span>
// //                   <motion.span
// //                     animate={{ x: [0, 5, 0] }}
// //                     transition={{ duration: 1, repeat: Infinity }}
// //                   >
// //                     →
// //                   </motion.span>
// //                 </motion.button>
// //               </motion.div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Skip button */}
// //         <motion.button
// //           onClick={handleSkip}
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 0.7 }}
// //           whileHover={{ opacity: 1, scale: 1.05 }}
// //           className="absolute top-6 right-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium hover:bg-white/30 transition-all"
// //         >
// //           Skip intro
// //         </motion.button>

// //         {/* Progress indicator */}
// //         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
// //           <motion.div
// //             className="w-2 h-2 rounded-full bg-white/60"
// //             animate={{ scale: [1, 1.3, 1] }}
// //             transition={{ duration: 1.5, repeat: Infinity }}
// //           />
// //           <span className="text-white/60 text-sm font-medium">
// //             {currentIndex}/{conversation.length}
// //           </span>
// //         </div>

// //         {/* AI Badge */}
// //         <motion.div
// //           initial={{ y: 20, opacity: 0 }}
// //           animate={{ y: 0, opacity: 0.5 }}
// //           className="absolute bottom-6 right-6 text-white/50 text-xs flex items-center gap-2"
// //         >
// //           <motion.div
// //             className="w-2 h-2 bg-green-400 rounded-full"
// //             animate={{ opacity: [0.5, 1, 0.5] }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           />
// //           <span>AI Assistant Active</span>
// //         </motion.div>
// //       </motion.div>
// //     </AnimatePresence>
// //   );
// // };

// // export default AIWelcome;






// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const getTimeBasedGreeting = () => {
//   const hour = new Date().getHours();
//   if (hour < 12) return "Good morning";
//   if (hour < 18) return "Good afternoon";
//   return "Good evening";
// };

// const conversation = [
//   {
//     speaker: "ai",
//     text: "Hello there! 👋",
//     delay: 500,
//   },
//   {
//     speaker: "ai", 
//     text: `${getTimeBasedGreeting()}! I'm Claude, Arpit's AI assistant.`,
//     delay: 1200,
//   },
//   {
//     speaker: "ai",
//     text: "I see you're interested in learning about Arpit...",
//     delay: 1500,
//   },
//   {
//     speaker: "ai",
//     text: "He's a Full-Stack Developer who builds production-ready applications.",
//     delay: 1800,
//   },
//   {
//     speaker: "ai",
//     text: "Specializes in React, Node.js, AI integration, and scalable systems.",
//     delay: 1800,
//   },
//   {
//     speaker: "ai",
//     text: "Ready to explore his portfolio? Let me show you around! ✨",
//     delay: 1600,
//   },
// ];

// const AIWelcome = ({ onFinish }) => {
//   const [messages, setMessages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(false);

//   useEffect(() => {
//     const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
//     if (hasSeenWelcome === "true") {
//       onFinish();
//       return;
//     }

//     if (currentIndex < conversation.length) {
//       setIsTyping(true);
      
//       const timer = setTimeout(() => {
//         setMessages(prev => [...prev, conversation[currentIndex]]);
//         setIsTyping(false);
//         setCurrentIndex(prev => prev + 1);
//       }, conversation[currentIndex].delay);
      
//       return () => clearTimeout(timer);
//     } else {
//       const exitTimer = setTimeout(() => {
//         handleFinish();
//       }, 1500);
//       return () => clearTimeout(exitTimer);
//     }
//   }, [currentIndex, onFinish]);

//   const handleFinish = () => {
//     sessionStorage.setItem("hasSeenWelcome", "true");
//     onFinish();
//   };

//   const handleSkip = () => {
//     handleFinish();
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-[9999] overflow-hidden bg-[#0a0a0f]"
//         initial={{ opacity: 1 }}
//         exit={{ opacity: 0, scale: 1.05 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Tech Grid Background */}
//         <div className="absolute inset-0 opacity-20">
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: '50px 50px',
//             }}
//           />
//         </div>

//         {/* Binary/Code Rain Effect */}
//         <div className="absolute inset-0 overflow-hidden opacity-10">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-emerald-400 font-mono text-xs"
//               style={{
//                 left: `${i * 5}%`,
//                 top: -20,
//               }}
//               animate={{
//                 y: [0, window.innerHeight + 100],
//               }}
//               transition={{
//                 duration: 10 + Math.random() * 10,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//                 ease: "linear",
//               }}
//             >
//               {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
//             </motion.div>
//           ))}
//         </div>

//         {/* Gradient Orbs */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
//           style={{
//             background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
//           }}
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
        
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
//           style={{
//             background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
//           }}
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{ duration: 8, repeat: Infinity, delay: 1 }}
//         />

//         {/* Tech Icons/Symbols Floating */}
//         <div className="absolute inset-0 overflow-hidden opacity-5">
//           {['<>', '{...}', '()=>', 'AI', 'API', 'DB', 'UI/UX', 'CODE'].map((symbol, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-white font-mono text-2xl font-bold"
//               style={{
//                 left: `${10 + i * 12}%`,
//                 top: `${20 + (i % 3) * 20}%`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 opacity: [0.3, 0.6, 0.3],
//                 rotate: [0, 10, 0],
//               }}
//               transition={{
//                 duration: 6 + i,
//                 repeat: Infinity,
//                 delay: i * 0.5,
//               }}
//             >
//               {symbol}
//             </motion.div>
//           ))}
//         </div>

//         {/* Main Chat Interface */}
//         <div className="absolute inset-0 flex items-center justify-center px-4">
//           <div className="w-full max-w-4xl">
//             {/* AI Avatar with Tech Look */}
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ type: "spring", stiffness: 200, damping: 15 }}
//               className="flex justify-center mb-12"
//             >
//               <div className="relative">
//                 {/* Outer Ring */}
//                 <motion.div
//                   className="absolute -inset-4 rounded-full border-2 border-indigo-500/30"
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 />
                
//                 {/* Glow effect */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl"
//                   animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
                
//                 {/* Avatar Container */}
//                 <motion.div
//                   className="relative w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-2xl border-4 border-indigo-400/30"
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <span className="text-6xl">🤖</span>
//                 </motion.div>

//                 {/* Status indicator */}
//                 <motion.div
//                   className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-400 rounded-full border-4 border-[#0a0a0f] shadow-lg flex items-center justify-center"
//                   animate={{ scale: [1, 1.15, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <div className="w-2 h-2 bg-white rounded-full" />
//                 </motion.div>

//                 {/* Orbiting Particles */}
//                 {[...Array(3)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute w-2 h-2 bg-indigo-400 rounded-full"
//                     style={{
//                       top: '50%',
//                       left: '50%',
//                     }}
//                     animate={{
//                       rotate: 360,
//                       x: [40, 40],
//                       y: [0, 0],
//                     }}
//                     transition={{
//                       rotate: { duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 },
//                     }}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//             {/* Chat Messages */}
//             <div className="space-y-5 mb-10 max-h-[400px] overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-transparent">
//               <AnimatePresence>
//                 {messages.map((msg, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ x: -50, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ type: "spring", stiffness: 120, damping: 20 }}
//                     className="flex items-start gap-4"
//                   >
//                     {/* Message bubble with improved styling */}
//                     <motion.div
//                       initial={{ scale: 0.9 }}
//                       animate={{ scale: 1 }}
//                       className="bg-gradient-to-br from-indigo-950/90 to-purple-950/90 backdrop-blur-xl rounded-2xl rounded-tl-sm px-7 py-5 shadow-2xl max-w-3xl border border-indigo-500/20"
//                     >
//                       <p className="text-gray-100 text-xl leading-relaxed font-light tracking-wide">
//                         {msg.text}
//                       </p>
//                     </motion.div>
//                   </motion.div>
//                 ))}

//                 {/* Typing indicator */}
//                 {isTyping && (
//                   <motion.div
//                     initial={{ x: -50, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="flex items-start gap-4"
//                   >
//                     <div className="bg-gradient-to-br from-indigo-950/90 to-purple-950/90 backdrop-blur-xl rounded-2xl rounded-tl-sm px-7 py-5 shadow-2xl border border-indigo-500/20">
//                       <div className="flex gap-2">
//                         <motion.div
//                           className="w-3 h-3 bg-indigo-400 rounded-full"
//                           animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
//                           transition={{ duration: 1, repeat: Infinity, delay: 0 }}
//                         />
//                         <motion.div
//                           className="w-3 h-3 bg-indigo-400 rounded-full"
//                           animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
//                           transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
//                         />
//                         <motion.div
//                           className="w-3 h-3 bg-indigo-400 rounded-full"
//                           animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
//                           transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Action button (appears at the end) */}
//             {currentIndex >= conversation.length && (
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 className="flex justify-center"
//               >
//                 <motion.button
//                   onClick={handleSkip}
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-indigo-500/50 transition-all flex items-center gap-3 border border-indigo-400/30"
//                 >
//                   <span>Let's Go!</span>
//                   <motion.span
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1, repeat: Infinity }}
//                     className="text-2xl"
//                   >
//                     →
//                   </motion.span>
//                 </motion.button>
//               </motion.div>
//             )}
//           </div>
//         </div>

//         {/* Skip button - Enhanced */}
//         <motion.button
//           onClick={handleSkip}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
//           className="absolute top-8 right-8 px-6 py-3 rounded-xl bg-indigo-950/50 backdrop-blur-md border border-indigo-500/30 text-gray-200 font-semibold hover:bg-indigo-900/50 transition-all text-base"
//         >
//           Skip intro
//         </motion.button>

//         {/* Progress indicator - Enhanced */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-indigo-950/50 backdrop-blur-md px-6 py-3 rounded-full border border-indigo-500/30">
//           <motion.div
//             className="w-2.5 h-2.5 rounded-full bg-emerald-400"
//             animate={{ scale: [1, 1.3, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           />
//           <span className="text-gray-300 text-base font-medium">
//             {currentIndex}/{conversation.length}
//           </span>
//         </div>

//         {/* AI Badge - Enhanced */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="absolute bottom-8 right-8 text-gray-400 text-sm flex items-center gap-2 bg-indigo-950/50 backdrop-blur-md px-5 py-3 rounded-full border border-indigo-500/30"
//         >
//           <motion.div
//             className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//           <span className="font-medium">AI Assistant Active</span>
//         </motion.div>

//         {/* Tech Corner Decorations */}
//         <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-indigo-500/20 rounded-tl-lg" />
//         <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-indigo-500/20 rounded-tr-lg" />
//         <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-indigo-500/20 rounded-bl-lg" />
//         <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-indigo-500/20 rounded-br-lg" />
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default AIWelcome;



import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const AIWelcome = ({ onFinish }) => {
  const [phase, setPhase] = useState("boot"); // boot -> greeting -> skills -> ready
  const [bootProgress, setBootProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [skillsRevealed, setSkillsRevealed] = useState([]);
  const [interactionCount, setInteractionCount] = useState(0);
  
  const greeting = `${getTimeBasedGreeting()}! I'm Fury, Arpit's AI assistant , I am here to help you throughout the Portfolio `;
  const skills = [
    { icon: "⚛️", name: "React.js", color: "from-cyan-500 to-blue-500" },
    { icon: "🟢", name: "Node.js", color: "from-green-500 to-emerald-500" },
    { icon: "🤖", name: "AI Integration", color: "from-purple-500 to-pink-500" },
    { icon: "⚡", name: "Performance", color: "from-yellow-500 to-orange-500" },
    { icon: "🎨", name: "UI/UX Design", color: "from-indigo-500 to-purple-500" },
    { icon: "🔒", name: "Security", color: "from-red-500 to-rose-500" },
  ];

  // Boot sequence (0-3s)
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    if (hasSeenWelcome === "true") {
      onFinish();
      return;
    }

    if (phase === "boot") {
      const interval = setInterval(() => {
        setBootProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase("greeting"), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase, onFinish]);

  // Typing animation (3-7s)
  useEffect(() => {
    if (phase === "greeting" && typedText.length < greeting.length) {
      const timeout = setTimeout(() => {
        setTypedText(greeting.slice(0, typedText.length + 1));
      }, 10);
      return () => clearTimeout(timeout);
    } else if (phase === "greeting" && typedText.length === greeting.length) {
      setTimeout(() => setPhase("skills"), 200);
    }
  }, [phase, typedText, greeting]);

  // Skills reveal animation (7-12s)
  useEffect(() => {
    if (phase === "skills" && skillsRevealed.length < skills.length) {
      const timeout = setTimeout(() => {
        setSkillsRevealed(prev => [...prev, skills[prev.length]]);
      }, 600);
      return () => clearTimeout(timeout);
    } else if (phase === "skills" && skillsRevealed.length === skills.length) {
      setTimeout(() => setPhase("ready"), 1000);
    }
  }, [phase, skillsRevealed, skills]);

  // Ready phase - auto advance after 2s or user interaction
  useEffect(() => {
    if (phase === "ready") {
      const timer = setTimeout(() => {
        handleFinish();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleFinish = () => {
    sessionStorage.setItem("hasSeenWelcome", "true");
    onFinish();
  };

  const handleInteraction = () => {
    setInteractionCount(prev => prev + 1);
    if (phase === "ready") {
      handleFinish();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        onClick={handleInteraction}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="w-full max-w-4xl">
            
            {/* PHASE 1: Boot Sequence */}
            {phase === "boot" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center gap-8"
              >
                {/* Central Loading Circle */}
                <div className="relative">
                  <svg className="w-48 h-48 -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 552" }}
                      animate={{ strokeDasharray: `${bootProgress * 5.52} 552` }}
                      transition={{ duration: 0.3 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center Icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-6xl">🤖</span>
                  </motion.div>

                  {/* Orbiting dots */}
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.3,
                      }}
                    >
                      <div 
                        className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-60px)`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Loading Text */}
                <div className="text-center space-y-2">
                  <motion.div
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Initializing AI System
                  </motion.div>
                  <div className="text-cyan-300 text-lg font-mono">
                    {bootProgress}%
                  </div>
                </div>

                {/* System Messages */}
                <div className="font-mono text-xs text-gray-400 space-y-1 max-w-md">
                  {bootProgress > 20 && (
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                      ✓ Neural networks loaded
                    </motion.div>
                  )}
                  {bootProgress > 40 && (
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                      ✓ Connecting to knowledge base
                    </motion.div>
                  )}
                  {bootProgress > 60 && (
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                      ✓ Calibrating response system
                    </motion.div>
                  )}
                  {bootProgress > 80 && (
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                      ✓ Ready to assist
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* PHASE 2: Greeting */}
            {phase === "greeting" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-8"
              >
                {/* Avatar with glow */}
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50" />
                  <div className="relative w-32 h-32 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center border-4 border-white/20">
                    <span className="text-7xl">👋</span>
                  </div>
                </motion.div>

                {/* Typing text */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl px-10 py-6 border border-white/20 max-w-2xl">
                  <p className="text-white text-2xl font-light text-center">
                    {typedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
                    />
                  </p>
                </div>
              </motion.div>
            )}

            {/* PHASE 3: Skills Grid */}
            {phase === "skills" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-8"
              >
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                >
                  Full-Stack Developer
                </motion.h2>

                {/* Interactive Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
                  {skillsRevealed.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className={`relative group cursor-pointer`}
                      onClick={handleInteraction}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-5xl">{skill.icon}</span>
                          <span className="text-white font-semibold text-center">{skill.name}</span>
                        </div>
                        
                        {/* Sparkle effect on hover */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-4 h-4"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1, rotate: 180 }}
                        >
                          ✨
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {skillsRevealed.length === skills.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-400 text-sm"
                  >
                    Click any skill to continue
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* PHASE 4: Ready to Launch */}
            {phase === "ready" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="flex flex-col items-center gap-8"
              >
                {/* Pulsing Circle */}
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center relative overflow-hidden">
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-200, 400] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <div className="text-white text-6xl mb-4">🚀</div>
                      <div className="text-white text-3xl font-bold">Let's Go!</div>
                    </div>
                  </div>

                  {/* Expanding rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border-4 border-cyan-400"
                      animate={{
                        scale: [1, 2],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-300 text-xl"
                >
                  Click anywhere to explore the portfolio
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Skip Button */}
        <motion.button
          onClick={handleFinish}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          className="absolute top-6 right-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all z-10"
        >
          Skip intro →
        </motion.button>

        {/* Progress Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {["boot", "greeting", "skills", "ready"].map((p, i) => (
              <motion.div
                key={p}
                className={`h-2 rounded-full transition-all ${
                  phase === p ? "w-8 bg-cyan-400" : "w-2 bg-white/30"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* Interaction hint */}
        {interactionCount > 0 && phase !== "ready" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-cyan-300 text-sm"
          >
            ✨ You found an easter egg! (+{interactionCount})
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AIWelcome;