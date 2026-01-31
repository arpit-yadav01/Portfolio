// // import { motion } from "framer-motion";
// // import { useState, useRef, useEffect } from "react";

// // /* ================= SKILLS DATA ================= */

// // const skills = [
// //   { id: 1, name: "Vercel", icon: "▲", color: "#000000", bgColor: "#e5e7eb" },
// //   { id: 2, name: "JavaScript", icon: "TS", color: "#ffffff", bgColor: "#3178c6" },
// //   { id: 3, name: "Next.js", icon: "N", color: "#ffffff", bgColor: "#000000" },
// //   { id: 4, name: "TypeScript", icon: "JS", color: "#000000", bgColor: "#f7df1e" },
 
// //   { id: 6, name: "React", icon: "⚛️", color: "#ffffff", bgColor: "#61dafb" },
// //   { id: 7, name: "Tailwind", icon: "🌊", color: "#ffffff", bgColor: "#06b6d4" },
// //   { id: 8, name: "PostgreSQL", icon: "🐘", color: "#ffffff", bgColor: "#336791" },
// //   { id: 9, name: "Next.js", icon: "▲▼", color: "#ffffff", bgColor: "#049ef4" },
 
// //   { id: 11, name: "Docker", icon: "🐳", color: "#ffffff", bgColor: "#2496ed" },
// //   { id: 12, name: "MongoDB", icon: "🍃", color: "#ffffff", bgColor: "#10aa50" },
// //   { id: 13, name: "Git", icon: "⎇", color: "#ffffff", bgColor: "#f05032" },
// //   { id: 14, name: "Express", icon: "ex", color: "#000000", bgColor: "#9ca3af" },
// //   { id: 15, name: "Node.js", icon: "◉", color: "#ffffff", bgColor: "#3c873a" },
// // ];

// // import { getSkills } from "../services/api";




// // /* ================= MAIN COMPONENT ================= */

// // export default function Skills() {
// //   const containerRef = useRef(null);
// //   const [positions, setPositions] = useState({});
// //   const [containerBounds, setContainerBounds] = useState(null);

// //   // Initialize random positions for all skills
// //   useEffect(() => {
// //     if (!containerRef.current) return;

// //     const container = containerRef.current.getBoundingClientRect();
// //     setContainerBounds({
// //       width: container.width,
// //       height: container.height,
// //     });

// //     const cardSize = 140;
// //     const padding = 20;
// //     const initialPositions = {};

// //     skills.forEach((skill) => {
// //       let attempts = 0;
// //       let validPosition = false;
// //       let x, y;

// //       // Try to find a non-overlapping position
// //       while (!validPosition && attempts < 100) {
// //         x = Math.random() * (container.width - cardSize - padding * 2) + padding;
// //         y = Math.random() * (container.height - cardSize - padding * 2) + padding;

// //         // Check if this position overlaps with any existing positions
// //         validPosition = true;
// //         for (const pos of Object.values(initialPositions)) {
// //           const distance = Math.sqrt(
// //             Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2)
// //           );
// //           if (distance < cardSize + 10) {
// //             validPosition = false;
// //             break;
// //           }
// //         }
// //         attempts++;
// //       }

// //       initialPositions[skill.id] = { x, y };
// //     });

// //     setPositions(initialPositions);
// //   }, []);

// //   return (
// //     <section id="skills" className="bg-black py-28 px-6">
// //       <motion.h2
// //         initial={{ opacity: 0, y: 40 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         className="text-5xl font-bold text-white text-center mb-4"
// //       >
// //         Skills
// //       </motion.h2>

// //       <motion.p
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         viewport={{ once: true }}
// //         transition={{ delay: 0.2 }}
// //         className="text-gray-400 text-center mb-14 text-lg"
// //       >
// //         Drag, throw, and watch them bounce. Nothing escapes!
// //       </motion.p>

// //       {/* DRAGGABLE CONTAINER */}
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.95 }}
// //         whileInView={{ opacity: 1, scale: 1 }}
// //         viewport={{ once: true }}
// //         transition={{ delay: 0.3 }}
// //         className="flex justify-center"
// //       >
// //         <div
// //           ref={containerRef}
// //           className="relative w-full max-w-7xl h-[600px] rounded-3xl border-2 border-cyan-500/30 bg-gradient-to-b from-cyan-500/5 via-blue-500/5 to-transparent overflow-hidden shadow-2xl shadow-cyan-500/20"
// //         >
// //           {skills.map((skill) =>
// //             positions[skill.id] ? (
// //               <SkillCard
// //                 key={skill.id}
// //                 skill={skill}
// //                 initialPosition={positions[skill.id]}
// //                 containerBounds={containerBounds}
// //                 allPositions={positions}
// //                 setPositions={setPositions}
// //               />
// //             ) : null
// //           )}
// //         </div>
// //       </motion.div>

// //       {/* INSTRUCTIONS */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ delay: 0.5 }}
// //         className="text-center mt-8 text-gray-500 text-sm"
// //       >
// //         💡 Click and drag any skill card • They won't overlap!
// //       </motion.div>
// //     </section>
// //   );
// // }

// // /* ================= SKILL CARD COMPONENT ================= */

// // function SkillCard({
// //   skill,
// //   initialPosition,
// //   containerBounds,
// //   allPositions,
// //   setPositions,
// // }) {
// //   const cardSize = 140;
// //   const padding = 10;
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [velocity, setVelocity] = useState({
// //     x: (Math.random() - 0.5) * 0.5,
// //     y: (Math.random() - 0.5) * 0.5,
// //   });

// //   // Check collision with other cards
// //   const checkCollision = (newX, newY) => {
// //     for (const [id, pos] of Object.entries(allPositions)) {
// //       if (parseInt(id) === skill.id) continue;

// //       const distance = Math.sqrt(
// //         Math.pow(newX - pos.x, 2) + Math.pow(newY - pos.y, 2)
// //       );

// //       if (distance < cardSize + padding) {
// //         return true;
// //       }
// //     }
// //     return false;
// //   };

// //   // Automatic floating movement
// //   useEffect(() => {
// //     if (isDragging || !containerBounds) return;

// //     const interval = setInterval(() => {
// //       setPositions((prev) => {
// //         const currentPos = prev[skill.id];
// //         if (!currentPos) return prev;

// //         let newX = currentPos.x + velocity.x;
// //         let newY = currentPos.y + velocity.y;
// //         let newVelocityX = velocity.x;
// //         let newVelocityY = velocity.y;

// //         // Bounce off walls
// //         if (newX <= padding || newX >= containerBounds.width - cardSize - padding) {
// //           newVelocityX = -velocity.x;
// //           newX = Math.max(padding, Math.min(newX, containerBounds.width - cardSize - padding));
// //         }
// //         if (newY <= padding || newY >= containerBounds.height - cardSize - padding) {
// //           newVelocityY = -velocity.y;
// //           newY = Math.max(padding, Math.min(newY, containerBounds.height - cardSize - padding));
// //         }

// //         // Check collision with other cards
// //         if (checkCollision(newX, newY)) {
// //           // Reverse direction on collision
// //           newVelocityX = -velocity.x;
// //           newVelocityY = -velocity.y;
// //           newX = currentPos.x;
// //           newY = currentPos.y;
// //         }

// //         // Update velocity if it changed
// //         if (newVelocityX !== velocity.x || newVelocityY !== velocity.y) {
// //           setVelocity({ x: newVelocityX, y: newVelocityY });
// //         }

// //         return {
// //           ...prev,
// //           [skill.id]: { x: newX, y: newY },
// //         };
// //       });
// //     }, 16); // ~60fps

// //     return () => clearInterval(interval);
// //   }, [isDragging, velocity, containerBounds, skill.id, checkCollision]);

// //   // Handle drag end
// //   const handleDragEnd = (event, info) => {
// //     if (!containerBounds) return;

// //     let newX = initialPosition.x + info.offset.x;
// //     let newY = initialPosition.y + info.offset.y;

// //     // Keep within bounds
// //     newX = Math.max(padding, Math.min(newX, containerBounds.width - cardSize - padding));
// //     newY = Math.max(padding, Math.min(newY, containerBounds.height - cardSize - padding));

// //     // Update position only if no collision
// //     if (!checkCollision(newX, newY)) {
// //       setPositions((prev) => ({
// //         ...prev,
// //         [skill.id]: { x: newX, y: newY },
// //       }));
// //       // Give it a new random velocity after drag
// //       setVelocity({
// //         x: (Math.random() - 0.5) * 0.8,
// //         y: (Math.random() - 0.5) * 0.8,
// //       });
// //     }
// //     setIsDragging(false);
// //   };

// //   return (
// //     <motion.div
// //       drag
// //       dragMomentum={false}
// //       dragElastic={0}
// //       dragConstraints={{
// //         left: padding,
// //         right: containerBounds ? containerBounds.width - cardSize - padding : 0,
// //         top: padding,
// //         bottom: containerBounds ? containerBounds.height - cardSize - padding : 0,
// //       }}
// //       onDragStart={() => setIsDragging(true)}
// //       onDragEnd={handleDragEnd}
// //       initial={{
// //         x: initialPosition.x,
// //         y: initialPosition.y,
// //         scale: 0,
// //         opacity: 0,
// //       }}
// //       animate={{
// //         x: allPositions[skill.id]?.x || initialPosition.x,
// //         y: allPositions[skill.id]?.y || initialPosition.y,
// //         scale: 1,
// //         opacity: 1,
// //       }}
// //       whileHover={{
// //         scale: 1.05,
// //         boxShadow: `0 10px 30px ${skill.bgColor}40`,
// //       }}
// //       whileDrag={{
// //         scale: 1.1,
// //         boxShadow: `0 15px 40px ${skill.bgColor}60`,
// //         zIndex: 1000,
// //       }}
// //       transition={{
// //         x: { type: "spring", stiffness: 100, damping: 15 },
// //         y: { type: "spring", stiffness: 100, damping: 15 },
// //         scale: { type: "spring", stiffness: 300, damping: 25 },
// //       }}
// //       className="absolute cursor-grab active:cursor-grabbing rounded-2xl"
// //       style={{
// //         width: cardSize,
// //         height: cardSize,
// //         backgroundColor: skill.bgColor,
// //       }}
// //     >
// //       <div className="flex flex-col items-center justify-center h-full p-4 select-none">
// //         <div
// //           className="text-5xl mb-3"
// //           style={{
// //             color: skill.color,
// //             filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.3))`,
// //           }}
// //         >
// //           {skill.icon}
// //         </div>
// //         <div
// //           className="text-base font-bold text-center"
// //           style={{
// //             color: skill.color,
// //           }}
// //         >
// //           {skill.name}
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }


// import { motion } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import { getSkills } from "../services/api";

// /* ================= MAIN COMPONENT ================= */
// export default function Skills() {
//   const containerRef = useRef(null);
//   const [positions, setPositions] = useState({});
//   const [containerBounds, setContainerBounds] = useState(null);
//   const [skills, setSkills] = useState([]);

//   // Fetch skills from API
//   useEffect(() => {
//     getSkills().then(setSkills);
//   }, []);

//   // Initialize random positions for all skills
//   useEffect(() => {
//     if (!containerRef.current || skills.length === 0) return;

//     const container = containerRef.current.getBoundingClientRect();
//     setContainerBounds({
//       width: container.width,
//       height: container.height,
//     });

//     const cardSize = 140;
//     const padding = 20;
//     const initialPositions = {};

//     skills.forEach((skill) => {
//       let attempts = 0;
//       let validPosition = false;
//       let x, y;

//       // Try to find a non-overlapping position
//       while (!validPosition && attempts < 100) {
//         x = Math.random() * (container.width - cardSize - padding * 2) + padding;
//         y = Math.random() * (container.height - cardSize - padding * 2) + padding;

//         // Check if this position overlaps with any existing positions
//         validPosition = true;
//         for (const pos of Object.values(initialPositions)) {
//           const distance = Math.sqrt(
//             Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2)
//           );
//           if (distance < cardSize + 10) {
//             validPosition = false;
//             break;
//           }
//         }
//         attempts++;
//       }

//       initialPositions[skill._id] = { x, y };
//     });

//     setPositions(initialPositions);
//   }, [skills]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
//       {/* HEADER */}
//       <div className="max-w-6xl mx-auto mb-8">
//         <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//           Skills
//         </h1>
//         <p className="text-slate-300 text-lg">
//           Drag, throw, and watch them bounce. Nothing escapes!
//         </p>
//       </div>

//       {/* DRAGGABLE CONTAINER */}
//       <div
//         ref={containerRef}
//         className="relative w-full max-w-6xl mx-auto bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50"
//         style={{ height: "600px" }}
//       >
//         {skills.map((skill) =>
//           positions[skill._id] ? (
//             <SkillCard
//               key={skill._id}
//               skill={skill}
//               initialPosition={positions[skill._id]}
//               containerBounds={containerBounds}
//               allPositions={positions}
//               setPositions={setPositions}
//             />
//           ) : null
//         )}
//       </div>

//       {/* INSTRUCTIONS */}
//       <div className="max-w-6xl mx-auto mt-6 text-center text-slate-400 text-sm">
      
//       </div>
//     </div>
//   );
// }

// /* ================= SKILL CARD COMPONENT ================= */
// function SkillCard({
//   skill,
//   initialPosition,
//   containerBounds,
//   allPositions,
//   setPositions,
// }) {
//   const cardSize = 140;
//   const padding = 10;
//   const [isDragging, setIsDragging] = useState(false);
//   const [velocity, setVelocity] = useState({
//     x: (Math.random() - 0.5) * 0.5,
//     y: (Math.random() - 0.5) * 0.5,
//   });

//   // Check collision with other cards
//   const checkCollision = (newX, newY) => {
//     for (const [id, pos] of Object.entries(allPositions)) {
//       if (id === skill._id) continue;

//       const distance = Math.sqrt(
//         Math.pow(newX - pos.x, 2) + Math.pow(newY - pos.y, 2)
//       );
//       if (distance < cardSize + padding) {
//         return true;
//       }
//     }
//     return false;
//   };

//   // Automatic floating movement
//   useEffect(() => {
//     if (isDragging || !containerBounds) return;

//     const interval = setInterval(() => {
//       setPositions((prev) => {
//         const currentPos = prev[skill._id];
//         if (!currentPos) return prev;

//         let newX = currentPos.x + velocity.x;
//         let newY = currentPos.y + velocity.y;
//         let newVelocityX = velocity.x;
//         let newVelocityY = velocity.y;

//         // Bounce off walls
//         if (newX <= padding || newX >= containerBounds.width - cardSize - padding) {
//           newVelocityX = -velocity.x;
//           newX = Math.max(padding, Math.min(newX, containerBounds.width - cardSize - padding));
//         }
//         if (newY <= padding || newY >= containerBounds.height - cardSize - padding) {
//           newVelocityY = -velocity.y;
//           newY = Math.max(padding, Math.min(newY, containerBounds.height - cardSize - padding));
//         }

//         // Check collision with other cards
//         if (checkCollision(newX, newY)) {
//           // Reverse direction on collision
//           newVelocityX = -velocity.x;
//           newVelocityY = -velocity.y;
//           newX = currentPos.x;
//           newY = currentPos.y;
//         }

//         // Update velocity if it changed
//         if (newVelocityX !== velocity.x || newVelocityY !== velocity.y) {
//           setVelocity({ x: newVelocityX, y: newVelocityY });
//         }

//         return {
//           ...prev,
//           [skill._id]: { x: newX, y: newY },
//         };
//       });
//     }, 16); // ~60fps

//     return () => clearInterval(interval);
//   }, [isDragging, velocity, containerBounds, skill._id, checkCollision]);

//   // Handle drag end
//   const handleDragEnd = (event, info) => {
//     if (!containerBounds) return;

//     let newX = initialPosition.x + info.offset.x;
//     let newY = initialPosition.y + info.offset.y;

//     // Keep within bounds
//     newX = Math.max(padding, Math.min(newX, containerBounds.width - cardSize - padding));
//     newY = Math.max(padding, Math.min(newY, containerBounds.height - cardSize - padding));

//     // Update position only if no collision
//     if (!checkCollision(newX, newY)) {
//       setPositions((prev) => ({
//         ...prev,
//         [skill._id]: { x: newX, y: newY },
//       }));

//       // Give it a new random velocity after drag
//       setVelocity({
//         x: (Math.random() - 0.5) * 0.8,
//         y: (Math.random() - 0.5) * 0.8,
//       });
//     }

//     setIsDragging(false);
//   };

//   return (
//     <motion.div
//       drag
//       dragMomentum={false}
//       dragElastic={0}
//       onDragStart={() => setIsDragging(true)}
//       onDragEnd={handleDragEnd}
//       initial={{
//         x: initialPosition.x,
//         y: initialPosition.y,
//         scale: 0,
//         opacity: 0,
//       }}
//       animate={{
//         x: allPositions[skill._id]?.x || initialPosition.x,
//         y: allPositions[skill._id]?.y || initialPosition.y,
//         scale: 1,
//         opacity: 1,
//       }}
//       whileHover={{
//         scale: 1.05,
//         boxShadow: `0 10px 30px ${skill.bgColor}40`,
//       }}
//       whileDrag={{
//         scale: 1.1,
//         boxShadow: `0 15px 40px ${skill.bgColor}60`,
//         zIndex: 1000,
//       }}
//       transition={{
//         x: { type: "spring", stiffness: 100, damping: 15 },
//         y: { type: "spring", stiffness: 100, damping: 15 },
//         scale: { type: "spring", stiffness: 300, damping: 25 },
//       }}
//       className="absolute cursor-grab active:cursor-grabbing rounded-2xl"
//       style={{
//         width: cardSize,
//         height: cardSize,
//         backgroundColor: skill.bgColor,
//       }}
//     >
//       <div className="h-full w-full flex flex-col items-center justify-center p-4 select-none">
//         <div
//           className="text-5xl mb-3"
//           style={{ color: skill.color }}
//         >
//           {skill.icon}
//         </div>
//         <div
//           className="text-center font-semibold text-sm"
//           style={{ color: skill.color }}
//         >
//           {skill.name}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { getSkills } from "../services/api";

/* ================= MAIN COMPONENT ================= */
export default function Skills() {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({});
  const [containerBounds, setContainerBounds] = useState(null);
  const [skills, setSkills] = useState([]);

  // Fetch skills from API
  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  // Initialize random positions for all skills
  useEffect(() => {
    if (!containerRef.current || skills.length === 0) return;

    const container = containerRef.current.getBoundingClientRect();
    setContainerBounds({
      width: container.width,
      height: container.height,
    });

    const cardSize = 140;
    const padding = 20;
    const initialPositions = {};

    skills.forEach((skill) => {
      let attempts = 0;
      let validPosition = false;
      let x, y;

      // Try to find a non-overlapping position
      while (!validPosition && attempts < 100) {
        x = Math.random() * (container.width - cardSize - padding * 2) + padding;
        y = Math.random() * (container.height - cardSize - padding * 2) + padding;

        // Check if this position overlaps with any existing positions
        validPosition = true;
        for (const pos of Object.values(initialPositions)) {
          const distance = Math.sqrt(
            Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2)
          );
          if (distance < cardSize + 10) {
            validPosition = false;
            break;
          }
        }
        attempts++;
      }

      initialPositions[skill._id] = { x, y };
    });

    setPositions(initialPositions);
  }, [skills]);

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h1>
        <p className="text-slate-300 text-lg">
          Drag, throw, and watch them bounce. Nothing escapes!
        </p>
      </div>

      {/* DRAGGABLE CONTAINER */}
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50"
        style={{ height: "600px" }}
      >
        {skills.map((skill) =>
          positions[skill._id] ? (
            <SkillCard
              key={skill._id}
              skill={skill}
              initialPosition={positions[skill._id]}
              containerBounds={containerBounds}
              allPositions={positions}
              setPositions={setPositions}
            />
          ) : null
        )}
      </div>

      {/* INSTRUCTIONS */}
      <div className="max-w-6xl mx-auto mt-6 text-center text-slate-400 text-sm">
        💡 Click and drag any skill card • They won't overlap!
      </div>
    </div>
  );
}

/* ================= SKILL CARD COMPONENT ================= */
function SkillCard({
  skill,
  initialPosition,
  containerBounds,
  allPositions,
  setPositions,
}) {
  const cardSize = 140;
  const padding = 10;
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 0.5,
    y: (Math.random() - 0.5) * 0.5,
  });

  // Check collision with other cards
  const checkCollision = (newX, newY) => {
    for (const [id, pos] of Object.entries(allPositions)) {
      if (id === skill._id) continue;

      const distance = Math.sqrt(
        Math.pow(newX - pos.x, 2) + Math.pow(newY - pos.y, 2)
      );
      if (distance < cardSize + padding) {
        return true;
      }
    }
    return false;
  };

  // Automatic floating movement
  useEffect(() => {
    if (isDragging || !containerBounds) return;

    const interval = setInterval(() => {
      setPositions((prev) => {
        const currentPos = prev[skill._id];
        if (!currentPos) return prev;

        let newX = currentPos.x + velocity.x;
        let newY = currentPos.y + velocity.y;
        let newVelocityX = velocity.x;
        let newVelocityY = velocity.y;

        // Bounce off walls
        if (newX <= padding || newX >= containerBounds.width - cardSize - padding) {
          newVelocityX = -velocity.x;
          newX = Math.max(padding, Math.min(newX, containerBounds.width - cardSize - padding));
        }
        if (newY <= padding || newY >= containerBounds.height - cardSize - padding) {
          newVelocityY = -velocity.y;
          newY = Math.max(padding, Math.min(newY, containerBounds.height - cardSize - padding));
        }

        // Check collision with other cards
        if (checkCollision(newX, newY)) {
          // Reverse direction on collision
          newVelocityX = -velocity.x;
          newVelocityY = -velocity.y;
          newX = currentPos.x;
          newY = currentPos.y;
        }

        // Update velocity if it changed
        if (newVelocityX !== velocity.x || newVelocityY !== velocity.y) {
          setVelocity({ x: newVelocityX, y: newVelocityY });
        }

        return {
          ...prev,
          [skill._id]: { x: newX, y: newY },
        };
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isDragging, velocity, containerBounds, skill._id, checkCollision]);

  // Handle drag end
  const handleDragEnd = (event, info) => {
    if (!containerBounds) return;

    let newX = initialPosition.x + info.offset.x;
    let newY = initialPosition.y + info.offset.y;

    // Keep within bounds
    newX = Math.max(padding, Math.min(newX, containerBounds.width - cardSize - padding));
    newY = Math.max(padding, Math.min(newY, containerBounds.height - cardSize - padding));

    // Update position only if no collision
    if (!checkCollision(newX, newY)) {
      setPositions((prev) => ({
        ...prev,
        [skill._id]: { x: newX, y: newY },
      }));

      // Give it a new random velocity after drag
      setVelocity({
        x: (Math.random() - 0.5) * 0.8,
        y: (Math.random() - 0.5) * 0.8,
      });
    }

    setIsDragging(false);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      initial={{
        x: initialPosition.x,
        y: initialPosition.y,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        x: allPositions[skill._id]?.x || initialPosition.x,
        y: allPositions[skill._id]?.y || initialPosition.y,
        scale: 1,
        opacity: 1,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 30px ${skill.bgColor}40`,
      }}
      whileDrag={{
        scale: 1.1,
        boxShadow: `0 15px 40px ${skill.bgColor}60`,
        zIndex: 1000,
      }}
      transition={{
        x: { type: "spring", stiffness: 100, damping: 15 },
        y: { type: "spring", stiffness: 100, damping: 15 },
        scale: { type: "spring", stiffness: 300, damping: 25 },
      }}
      className="absolute cursor-grab active:cursor-grabbing rounded-2xl"
      style={{
        width: cardSize,
        height: cardSize,
        backgroundColor: skill.bgColor,
      }}
    >
      <div className="h-full w-full flex flex-col items-center justify-center p-4 select-none">
        <div
          className="text-5xl mb-3"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
        <div
          className="text-center font-semibold text-sm"
          style={{ color: skill.color }}
        >
          {skill.name}
        </div>
      </div>
    </motion.div>
  );
}