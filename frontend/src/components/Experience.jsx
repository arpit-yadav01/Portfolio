// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// function Experience() {
//   const [experience, setExperience] = useState([]);
//   const [loading, setLoading] = useState(true);

//  useEffect(() => {
//   const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";
  
//   fetch(`${API_BASE}/experience`)
//     .then((res) => res.json())
//     .then((data) => {
//       setExperience(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.error("Error fetching experience:", err);
//       setLoading(false);
//     });
// }, []);

//   return (
//     <section id="experience" className="relative bg-black text-white py-24 px-6 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -100, 0],
//             scale: [1, 1.3, 1],
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           style={{ top: "20%", left: "10%" }}
//         />
//         <motion.div
//           className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 100, 0],
//             scale: [1, 1.4, 1],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           style={{ bottom: "20%", right: "10%" }}
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Experience
//           </h2>
//           <p className="text-gray-400 text-lg">My professional journey so far</p>
//         </motion.div>

//         {/* Loading State */}
//         {loading && (
//           <div className="flex justify-center items-center py-20">
//             <motion.div
//               className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             />
//           </div>
//         )}

//         {/* Timeline Container */}
//         {!loading && experience.length > 0 && (
//           <div className="relative">
//             {/* Center Gradient Line */}
//             <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 overflow-hidden">
//               <motion.div
//                 className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
//                 initial={{ scaleY: 0 }}
//                 whileInView={{ scaleY: 1 }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//                 viewport={{ once: true }}
//                 style={{ transformOrigin: "top" }}
//               />
//             </div>

//             <div className="space-y-24">
//               {experience.map((item, index) => {
//                 const isRight = index % 2 === 0;

//                 return (
//                   <motion.div
//                     key={item._id}
//                     initial={{
//                       opacity: 0,
//                       x: isRight ? 80 : -80,
//                     }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.7, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
//                   >
//                     {/* LEFT EMPTY SPACE */}
//                     {!isRight && <div className="hidden md:block" />}

//                     {/* CARD */}
//                     <motion.div
//                       whileHover={{ scale: 1.03, y: -5 }}
//                       transition={{ duration: 0.3 }}
//                       className={`relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80
//                                 backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl p-8 max-w-xl
//                                 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300
//                                 group ${isRight ? "md:col-start-2" : "md:col-start-1"}`}
//                     >
//                       {/* Gradient Border Effect on Hover */}
//                       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

//                       {/* Date Badge */}
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         whileInView={{ scale: 1 }}
//                         transition={{ delay: 0.3, type: "spring" }}
//                         className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
//                                  border border-blue-500/30 rounded-full px-4 py-2 mb-4"
//                       >
//                         <span className="text-xl">📅</span>
//                         <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                           {item.startDate} → {item.endDate || "Present"}
//                         </span>
//                       </motion.div>

//                       {/* Role */}
//                       <h3 className="text-2xl font-bold mt-3 mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
//                         {item.role}
//                       </h3>

//                       {/* Company */}
//                       <div className="flex items-center gap-2 mb-4">
//                         <span className="text-xl">🏢</span>
//                         <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                           {item.company}
//                         </p>
//                       </div>

//                       {/* Description */}
//                       <p className="text-gray-300 leading-relaxed">
//                         {item.description}
//                       </p>

//                       {/* Skills/Technologies (if available) */}
//                       {item.technologies && item.technologies.length > 0 && (
//                         <div className="mt-6 flex flex-wrap gap-2">
//                           {item.technologies.map((tech, i) => (
//                             <motion.span
//                               key={i}
//                               initial={{ opacity: 0, scale: 0 }}
//                               whileInView={{ opacity: 1, scale: 1 }}
//                               transition={{ delay: 0.4 + i * 0.05 }}
//                               whileHover={{ scale: 1.1 }}
//                               className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium"
//                             >
//                               {tech}
//                             </motion.span>
//                           ))}
//                         </div>
//                       )}

//                       {/* Decorative Corner */}
//                       <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
//                     </motion.div>

//                     {/* RIGHT EMPTY SPACE */}
//                     {isRight && <div className="hidden md:block" />}

//                     {/* TIMELINE DOT */}
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                       viewport={{ once: true }}
//                       className="absolute left-1/2 top-8 -translate-x-1/2 z-10"
//                     >
//                       {/* Outer Ring */}
//                       <motion.div
//                         animate={{
//                           scale: [1, 1.3, 1],
//                           opacity: [0.5, 0, 0.5],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           ease: "easeInOut",
//                         }}
//                         className="absolute inset-0 w-8 h-8 rounded-full bg-blue-500/30 -translate-x-2 -translate-y-2"
//                       />
//                       {/* Inner Dot */}
//                       <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50">
//                         <div className="absolute inset-0 rounded-full bg-white/20" />
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && experience.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-20"
//           >
//             <p className="text-gray-400 text-lg">No experience data available yet.</p>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Experience;


import { useMemo, memo } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../context/DataProvider";
import { ExperienceSkeleton } from "./Skeletons";

function Experience() {
  const { data, loading } = usePortfolioData();

  const experience = useMemo(() => data?.experience || [], [data]);

  if (loading && !data) {
    return <ExperienceSkeleton />;
  }

  return (
    <section id="experience" className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey so far</p>
        </motion.div>

        {/* Timeline Container */}
        {experience.length > 0 ? (
          <div className="relative">
            {/* Center Gradient Line */}
            <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 overflow-hidden">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            <div className="space-y-24">
              {experience.map((item, index) => {
                const isRight = index % 2 === 0;

                return (
                  <motion.div
                    key={item._id}
                    initial={{
                      opacity: 0,
                      x: isRight ? 80 : -80,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                  >
                    {/* LEFT EMPTY SPACE */}
                    {!isRight && <div className="hidden md:block" />}

                    {/* CARD */}
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80
                                backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl p-8 max-w-xl
                                shadow-2xl hover:shadow-blue-500/20 transition-all duration-300
                                group ${isRight ? "md:col-start-2" : "md:col-start-1"}`}
                    >
                      {/* Gradient Border Effect on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                      {/* Date Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                 border border-blue-500/30 rounded-full px-4 py-2 mb-4"
                      >
                        <span className="text-xl">📅</span>
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {item.startDate} → {item.endDate || "Present"}
                        </span>
                      </motion.div>

                      {/* Role */}
                      <h3 className="text-2xl font-bold mt-3 mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">🏢</span>
                        <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {item.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skills/Technologies (if available) */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      )}

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
                    </motion.div>

                    {/* RIGHT EMPTY SPACE */}
                    {isRight && <div className="hidden md:block" />}

                    {/* TIMELINE DOT */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="absolute left-1/2 top-8 -translate-x-1/2 z-10"
                    >
                      {/* Outer Ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-8 h-8 rounded-full bg-blue-500/30 -translate-x-2 -translate-y-2"
                      />
                      {/* Inner Dot */}
                      <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50">
                        <div className="absolute inset-0 rounded-full bg-white/20" />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">No experience data available yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default memo(Experience);