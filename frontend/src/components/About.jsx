import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getGithubStats, getLeetcodeStats } from "../services/api";

function About() {
  const [bio, setBio] = useState("");
  const [education, setEducation] = useState([]);
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/api/about").then(r => r.json()),
      fetch("http://localhost:5000/api/education").then(r => r.json()),
      getGithubStats(),
      getLeetcodeStats(),
    ]).then(([about, edu, git, lc]) => {
      setBio(about?.bio || "");
      setEducation(edu || []);
      setGithub(git);
      setLeetcode(lc);
    });
  }, []);

  return (
    <section id="about" className="relative bg-black text-white py-28 px-6 overflow-hidden">
      
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "5%" }}
        />
        
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-3xl"
          animate={{
            x: [0, -80, 100, 0],
            y: [0, 100, -80, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "50%", right: "5%" }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, 50, -100, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.4, 1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", left: "30%" }}
        />

        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full bg-pink-500/15 blur-3xl"
          animate={{
            x: [0, -120, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "30%", right: "20%" }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -300, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* BIO */}
            <Card title="Who I Am" icon="👨‍💻">
              <p className="text-gray-400 leading-relaxed">{bio}</p>
            </Card>

            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-10 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>

              <div className="relative">
                {/* CENTER LINE */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />

                <div className="space-y-14">
                  {education.map((e, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                      <motion.div
                        key={e._id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex ${
                          isLeft ? "justify-start pr-8" : "justify-end pl-8"
                        }`}
                      >
                        {/* DOT */}
                        <motion.span 
                          className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />

                        {/* CARD */}
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`w-full sm:w-[46%] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700
                                    rounded-xl p-5 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20`}
                        >
                          <p className="text-xs text-cyan-400 font-semibold">
                            {e.startYear} – {e.endYear}
                          </p>

                          <h4 className="font-semibold mt-1 text-white">
                            {e.degree}
                          </h4>

                          <p className="text-gray-400 text-sm">
                            {e.institute}
                          </p>

                          {e.score && (
                            <p className="text-purple-400 text-sm mt-2 font-medium">
                              {e.score}
                            </p>
                          )}
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">

            {/* LEETCODE */}
            <Card title="LeetCode" icon="💻">
              {!leetcode ? (
                <div className="flex items-center justify-center py-8">
                  <motion.div
                    className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              ) : (
                <>
                  <CircleStat value={leetcode.total} label="Problems Solved" />

                  <Progress label="Easy" value={leetcode.easy} total={leetcode.total} color="bg-green-500" />
                  <Progress label="Medium" value={leetcode.medium} total={leetcode.total} color="bg-yellow-500" />
                  <Progress label="Hard" value={leetcode.hard} total={leetcode.total} color="bg-red-500" />

                  {/* STATS */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                   
                  </div>
                </>
              )}
            </Card>

            {/* GITHUB */}
            <Card title="GitHub" icon="⭐">
              {!github ? (
                <div className="flex items-center justify-center py-8">
                  <motion.div
                    className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <MiniStat label="Repos" value={github.repos} />
                    <MiniStat label="Followers" value={github.followers} />
                    <MiniStat label="Following" value={github.following} />
                    <MiniStat label="Stars" value="18" />
                  </div>

                  {/* <div className="space-y-3 text-sm">
                    <p className="text-gray-400 font-semibold mb-3">Top Languages</p>
                    <Lang name="Python" percent={56.48} color="bg-blue-500" />
                    <Lang name="Jupyter Notebook" percent={30.51} color="bg-orange-500" />
                    <Lang name="HTML" percent={1.68} color="bg-red-500" />
                    <Lang name="JavaScript" percent={1.6} color="bg-yellow-500" />
                  </div> */}
                </>
              )}
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= UI COMPONENTS ================= */

function Card({ title, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6
                 hover:border-cyan-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      {children}
    </motion.div>
  );
}

function CircleStat({ value, label }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <motion.div 
        className="relative w-24 h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center text-2xl font-bold shadow-lg shadow-cyan-400/30"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}
        </motion.span>
      </motion.div>
      <p className="text-gray-400 font-medium">{label}</p>
    </div>
  );
}

function Progress({ label, value, total, color }) {
  const percent = Math.round((value / total) * 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs mb-2 text-gray-400">
        <span className="font-medium">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
      <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className={`${color} h-2.5 rounded-full shadow-lg`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.p 
        className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {value}
      </motion.p>
      <p className="text-xs text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
}

function Lang({ name, percent, color }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5 text-gray-400">
        <span className="font-medium">{name}</span>
        <span className="font-semibold">{percent}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className={`${color} h-2 rounded-full shadow-lg`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default About;