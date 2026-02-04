


// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { getGithubStats, getLeetcodeStats } from "../services/api";

// // ✅ Pre-generated particle positions — NEVER changes
// const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
//   id: i,
//   left: (i * 5) % 100,
//   top: (i * 13.7) % 100,
//   xDrift: ((i * 37) % 100) - 50,
//   duration: 10 + ((i * 7) % 10),
//   delay: (i * 0.5) % 5,
// }));

// function About() {
//   const [bio, setBio] = useState("");
//   const [education, setEducation] = useState([]);
//   const [github, setGithub] = useState(null);
//   const [leetcode, setLeetcode] = useState(null);

//   useEffect(() => {
//     const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

//     Promise.all([
//       fetch(`${API_BASE}/about`).then((r) => r.json()),
//       fetch(`${API_BASE}/education`).then((r) => r.json()),
//       getGithubStats(),
//       getLeetcodeStats(),
//     ]).then(([about, edu, git, lc]) => {
//       setBio(about?.bio || "");
//       setEducation(edu || []);
//       setGithub(git);
//       setLeetcode(lc);
//     });
//   }, []);

//   return (
//     <section id="about" className="relative bg-black text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden">
//       {/* ANIMATED BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Gradient Orbs — fixed size, only transform animates */}
//         <div className="absolute rounded-full bg-blue-500/20 blur-3xl" style={{ width: 500, height: 500, top: "10%", left: "5%", willChange: "transform" }}>
//           <motion.div className="w-full h-full" animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
//         </div>

//         <div className="absolute rounded-full bg-cyan-500/15 blur-3xl" style={{ width: 600, height: 600, top: "50%", right: "5%", willChange: "transform" }}>
//           <motion.div className="w-full h-full" animate={{ x: [0, -80, 100, 0], y: [0, 100, -80, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
//         </div>

//         <div className="absolute rounded-full bg-purple-500/20 blur-3xl" style={{ width: 400, height: 400, bottom: "10%", left: "30%", willChange: "transform" }}>
//           <motion.div className="w-full h-full" animate={{ x: [0, 50, -100, 0], y: [0, -50, 100, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
//         </div>

//         <div className="absolute rounded-full bg-pink-500/15 blur-3xl" style={{ width: 450, height: 450, top: "30%", right: "20%", willChange: "transform" }}>
//           <motion.div className="w-full h-full" animate={{ x: [0, -120, 60, 0], y: [0, 80, -40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
//         </div>

//         {/* Floating Particles — FIXED positions */}
//         {PARTICLES.map((p) => (
//           <motion.div
//             key={p.id}
//             className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
//             style={{ left: `${p.left}%`, top: `${p.top}%`, willChange: "transform, opacity" }}
//             animate={{ y: [0, -300, 0], x: [0, p.xDrift, 0], opacity: [0, 1, 0] }}
//             transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
//           />
//         ))}

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* TITLE */}
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-20">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
//             About Me
//           </h2>
//           <motion.div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto rounded-full" style={{ width: 96 }} initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
//         </motion.div>

//         {/* GRID */}
//         <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">
//           {/* LEFT SIDE */}
//           <div className="space-y-10">
//             {/* BIO */}
//             <Card title="Who I Am" icon="👨‍💻">
//               <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{bio}</p>
//             </Card>

//             {/* EDUCATION */}
//             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
//               <h3 className="text-lg sm:text-xl font-semibold mb-8 sm:mb-10 flex items-center gap-2">
//                 <span>🎓</span> Education
//               </h3>

//               <div className="relative">
//                 <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />

//                 <div className="space-y-10 sm:space-y-14">
//                   {education.map((e, index) => {
//                     const isLeft = index % 2 === 0;
//                     return (
//                       <motion.div key={e._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`relative flex ${isLeft ? "justify-start pr-6 sm:pr-8" : "justify-end pl-6 sm:pl-8"}`}>
//                         <span className="absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

//                         <motion.div whileHover={{ scale: 1.03, y: -3 }} transition={{ type: "spring", stiffness: 300 }} className="w-full sm:w-[46%] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
//                           <p className="text-xs text-cyan-400 font-semibold">
//                             {e.startYear} – {e.endYear}
//                           </p>
//                           <h4 className="font-semibold mt-1 text-white text-sm sm:text-base">{e.degree}</h4>
//                           <p className="text-gray-400 text-xs sm:text-sm">{e.institute}</p>
//                           {e.score && <p className="text-purple-400 text-xs sm:text-sm mt-1 font-medium">{e.score}</p>}
//                         </motion.div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-10">
//             {/* LEETCODE */}
//             <Card title="LeetCode" icon="💻">
//               {!leetcode ? (
//                 <div className="flex items-center justify-center py-8">
//                   <motion.div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
//                 </div>
//               ) : (
//                 <>
//                   <CircleStat value={leetcode.total} label="Problems Solved" />
//                   <Progress label="Easy" value={leetcode.easy} total={leetcode.total} color="bg-green-500" />
//                   <Progress label="Medium" value={leetcode.medium} total={leetcode.total} color="bg-yellow-500" />
//                   <Progress label="Hard" value={leetcode.hard} total={leetcode.total} color="bg-red-500" />
//                 </>
//               )}
//             </Card>

//             {/* GITHUB */}
//             <Card title="GitHub" icon="⭐">
//               {!github ? (
//                 <div className="flex items-center justify-center py-8">
//                   <motion.div className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
//                 </div>
//               ) : github.error ? (
//                 <div className="text-center py-8 text-gray-400">
//                   <p className="text-sm">Unable to load GitHub stats</p>
//                   <p className="text-xs mt-2 text-gray-500">{github.error}</p>
//                 </div>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
//                     <MiniStat label="Repos" value={github.repos || 0} />
//                     <MiniStat label="Followers" value={github.followers || 0} />
//                     <MiniStat label="Following" value={github.following || 0} />
//                     <MiniStat label="Stars" value={github.stars || 0} />
//                   </div>
//                 </>
//               )}
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= UI COMPONENTS ================= */

// function Card({ title, icon, children }) {
//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ y: -3 }} className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-cyan-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20">
//       <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
//         <span>{icon}</span> {title}
//       </h3>
//       {children}
//     </motion.div>
//   );
// }

// function CircleStat({ value, label }) {
//   return (
//     <div className="flex items-center gap-4 mb-6">
//       <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg shadow-cyan-400/30">
//         {value}
//       </div>
//       <p className="text-gray-400 font-medium text-sm sm:text-base">{label}</p>
//     </div>
//   );
// }

// function Progress({ label, value, total, color }) {
//   const percent = total ? Math.round((value / total) * 100) : 0;
//   return (
//     <div className="mb-4">
//       <div className="flex justify-between text-xs mb-2 text-gray-400">
//         <span className="font-medium">{label}</span>
//         <span className="font-semibold">{value}</span>
//       </div>
//       <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
//         <motion.div className={`${color} h-2.5 rounded-full`} initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} />
//       </div>
//     </div>
//   );
// }

// function MiniStat({ label, value }) {
//   return (
//     <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300">
//       <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{value}</p>
//       <p className="text-xs text-gray-400 mt-1">{label}</p>
//     </div>
//   );
// }

// export default About;


import { motion } from "framer-motion";
import { useMemo, memo } from "react";
import { usePortfolioData } from "../context/DataProvider";
import { AboutSkeleton } from "./Skeletons";

// ✅ Pre-generated particle positions
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: (i * 5) % 100,
  top: (i * 13.7) % 100,
  xDrift: ((i * 37) % 100) - 50,
  duration: 10 + ((i * 7) % 10),
  delay: (i * 0.5) % 5,
}));

function About() {
  const { data, loading } = usePortfolioData();

  const bio = useMemo(() => data?.about?.bio || "", [data]);
  const education = useMemo(() => data?.education || [], [data]);
  const github = useMemo(() => data?.github, [data]);
  const leetcode = useMemo(() => data?.leetcode, [data]);

  if (loading && !data) {
    return <AboutSkeleton />;
  }

  return (
    <section id="about" className="relative bg-black text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs — fixed size, only transform animates */}
        <div className="absolute rounded-full bg-blue-500/20 blur-3xl" style={{ width: 500, height: 500, top: "10%", left: "5%", willChange: "transform" }}>
          <motion.div className="w-full h-full" animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <div className="absolute rounded-full bg-cyan-500/15 blur-3xl" style={{ width: 600, height: 600, top: "50%", right: "5%", willChange: "transform" }}>
          <motion.div className="w-full h-full" animate={{ x: [0, -80, 100, 0], y: [0, 100, -80, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <div className="absolute rounded-full bg-purple-500/20 blur-3xl" style={{ width: 400, height: 400, bottom: "10%", left: "30%", willChange: "transform" }}>
          <motion.div className="w-full h-full" animate={{ x: [0, 50, -100, 0], y: [0, -50, 100, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <div className="absolute rounded-full bg-pink-500/15 blur-3xl" style={{ width: 450, height: 450, top: "30%", right: "20%", willChange: "transform" }}>
          <motion.div className="w-full h-full" animate={{ x: [0, -120, 60, 0], y: [0, 80, -40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Floating Particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{ left: `${p.left}%`, top: `${p.top}%`, willChange: "transform, opacity" }}
            animate={{ y: [0, -300, 0], x: [0, p.xDrift, 0], opacity: [0, 1, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TITLE */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <motion.div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto rounded-full" style={{ width: 96 }} initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {/* BIO */}
            <Card title="Who I Am" icon="👨‍💻">
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{bio || "Loading bio..."}</p>
            </Card>

            {/* EDUCATION */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-8 sm:mb-10 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>

              {education.length > 0 ? (
                <div className="relative">
                  <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />

                  <div className="space-y-10 sm:space-y-14">
                    {education.map((e, index) => {
                      const isLeft = index % 2 === 0;
                      return (
                        <motion.div key={e._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`relative flex ${isLeft ? "justify-start pr-6 sm:pr-8" : "justify-end pl-6 sm:pl-8"}`}>
                          <span className="absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                          <motion.div whileHover={{ scale: 1.03, y: -3 }} transition={{ type: "spring", stiffness: 300 }} className="w-full sm:w-[46%] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                            <p className="text-xs text-cyan-400 font-semibold">
                              {e.startYear} – {e.endYear}
                            </p>
                            <h4 className="font-semibold mt-1 text-white text-sm sm:text-base">{e.degree}</h4>
                            <p className="text-gray-400 text-xs sm:text-sm">{e.institute}</p>
                            {e.score && <p className="text-purple-400 text-xs sm:text-sm mt-1 font-medium">{e.score}</p>}
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No education data available</p>
              )}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {/* LEETCODE */}
            <Card title="LeetCode" icon="💻">
              {!leetcode ? (
                <div className="flex items-center justify-center py-8">
                  <motion.div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                </div>
              ) : (
                <>
                  <CircleStat value={leetcode.total || 0} label="Problems Solved" />
                  <Progress label="Easy" value={leetcode.easy || 0} total={leetcode.total || 1} color="bg-green-500" />
                  <Progress label="Medium" value={leetcode.medium || 0} total={leetcode.total || 1} color="bg-yellow-500" />
                  <Progress label="Hard" value={leetcode.hard || 0} total={leetcode.total || 1} color="bg-red-500" />
                </>
              )}
            </Card>

            {/* GITHUB */}
            <Card title="GitHub" icon="⭐">
              {!github ? (
                <div className="flex items-center justify-center py-8">
                  <motion.div className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                </div>
              ) : github.error ? (
                <div className="text-center py-8 text-gray-400">
                  <p className="text-sm">Unable to load GitHub stats</p>
                  <p className="text-xs mt-2 text-gray-500">{github.error}</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <MiniStat label="Repos" value={github.repos || 0} />
                  <MiniStat label="Followers" value={github.followers || 0} />
                  <MiniStat label="Following" value={github.following || 0} />
                  <MiniStat label="Stars" value={github.stars || 0} />
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= UI COMPONENTS ================= */

const Card = memo(({ title, icon, children }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ y: -3 }} className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-cyan-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

function CircleStat({ value, label }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg shadow-cyan-400/30">
        {value}
      </div>
      <p className="text-gray-400 font-medium text-sm sm:text-base">{label}</p>
    </div>
  );
}

function Progress({ label, value, total, color }) {
  const percent = total ? Math.round((value / total) * 100) : 0;
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs mb-2 text-gray-400">
        <span className="font-medium">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
      <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div className={`${color} h-2.5 rounded-full`} initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} />
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300">
      <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{label}</p>
    </div>
  );
}

export default memo(About);