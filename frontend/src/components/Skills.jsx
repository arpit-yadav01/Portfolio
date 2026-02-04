


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
//     <div id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
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
//         className="relative w-full max-w-8xl mx-auto bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50"
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

  // Initialize random positions for all skills AND handle responsive resize
  useEffect(() => {
    if (!containerRef.current || skills.length === 0) return;

    const updateBounds = () => {
      const container = containerRef.current.getBoundingClientRect();
      setContainerBounds({
        width: container.width,
        height: container.height,
      });

      // Recalculate positions on resize to keep cards in bounds
      setPositions((prev) => {
        const cardSize = getResponsiveCardSize();
        const padding = 20;
        const updated = {};

        skills.forEach((skill) => {
          const oldPos = prev[skill._id];
          if (oldPos) {
            // Keep existing positions but constrain to new bounds
            updated[skill._id] = {
              x: Math.min(oldPos.x, container.width - cardSize - padding * 2),
              y: Math.min(oldPos.y, container.height - cardSize - padding * 2),
            };
          } else {
            // Initialize new positions
            let attempts = 0;
            let validPosition = false;
            let x, y;

            while (!validPosition && attempts < 100) {
              x = Math.random() * (container.width - cardSize - padding * 2) + padding;
              y = Math.random() * (container.height - cardSize - padding * 2) + padding;

              validPosition = true;
              for (const pos of Object.values(updated)) {
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

            updated[skill._id] = { x, y };
          }
        });

        return updated;
      });
    };

    updateBounds();

    // Add resize listener for responsiveness
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [skills]);

  // Responsive card size helper
  const getResponsiveCardSize = () => {
    if (typeof window === "undefined") return 140;
    if (window.innerWidth < 640) return 100; // Mobile
    if (window.innerWidth < 1024) return 120; // Tablet
    return 140; // Desktop
  };

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4 sm:p-6 lg:p-8">
      {/* HEADER */}
      <div className="max-w-10xl mx-auto mb-6 sm:mb-8 ">
        <h1 className="text-3xl flex:center sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h1>
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
          Drag, throw, and watch them bounce. Nothing escapes!
        </p>
      </div>

      {/* DRAGGABLE CONTAINER */}
      <div
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto bg-slate-800/50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50"
        style={{ 
          height: "600px", // Mobile
          minHeight: "400px"
        }}
      >
        <style jsx>{`
          @media (min-width: 640px) {
            div[ref] {
              height: 400px;
            }
          }
          @media (min-width: 1024px) {
            div[ref] {
              height: 400px;
            }
          }
        `}</style>
        
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
      <div className="max-w-4xl mx-auto mt-4 sm:mt-6 text-center text-slate-400 text-xs sm:text-sm">
        {/* Add any instructions here */}
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
  // Responsive card size
  const getCardSize = () => {
    if (typeof window === "undefined") return 140;
    if (window.innerWidth < 640) return 100;
    if (window.innerWidth < 1024) return 120;
    return 140;
  };

  const [cardSize, setCardSize] = useState(getCardSize());
  const padding = 10;
  const [isDragging, setIsDragging] = useState(false);
  
  // INCREASED VELOCITY for more movement (doubled from 0.5 to 1.0-1.5)
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 1.5, // Increased from 0.5
    y: (Math.random() - 0.5) * 1.5, // Increased from 0.5
  });

  // Update card size on resize
  useEffect(() => {
    const handleResize = () => {
      setCardSize(getCardSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Automatic floating movement with INCREASED SPEED
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

        // Bounce off walls with slight randomness for variety
        if (newX <= padding || newX >= containerBounds.width - cardSize - padding) {
          newVelocityX = -velocity.x * (0.95 + Math.random() * 0.1); // Add slight variation
          newX = Math.max(padding, Math.min(newX, containerBounds.width - cardSize - padding));
        }
        if (newY <= padding || newY >= containerBounds.height - cardSize - padding) {
          newVelocityY = -velocity.y * (0.95 + Math.random() * 0.1); // Add slight variation
          newY = Math.max(padding, Math.min(newY, containerBounds.height - cardSize - padding));
        }

        // Check collision with other cards
        if (checkCollision(newX, newY)) {
          // Reverse direction on collision with slight angle change
          newVelocityX = -velocity.x + (Math.random() - 0.5) * 0.2;
          newVelocityY = -velocity.y + (Math.random() - 0.5) * 0.2;
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
  }, [isDragging, velocity, containerBounds, skill._id, cardSize]);

  // Handle drag end with STRONGER throw velocity
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

      // INCREASED throw velocity (from 0.8 to 2.0)
      setVelocity({
        x: (Math.random() - 0.5) * 2.0,
        y: (Math.random() - 0.5) * 2.0,
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
      className="absolute cursor-grab active:cursor-grabbing rounded-xl sm:rounded-2xl"
      style={{
        width: cardSize,
        height: cardSize,
        backgroundColor: skill.bgColor,
        // FIX CLS: Use transform instead of position changes
        willChange: 'transform',
      }}
    >
      <div className="h-full w-full flex flex-col items-center justify-center p-2 sm:p-3 lg:p-4 select-none">
        <div
          className="text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2 lg:mb-3"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
        <div
          className="text-center font-semibold text-xs sm:text-sm"
          style={{ color: skill.color }}
        >
          {skill.name}
        </div>
      </div>
    </motion.div>
  );
}