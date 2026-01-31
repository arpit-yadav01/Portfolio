import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";
  
  fetch(`${API_BASE}/projects`)
    .then((res) => res.json())
    .then((data) => {
      setProjects(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching projects:", err);
      setLoading(false);
    });
}, []);

  if (loading) {
    return (
      <section className="bg-black min-h-screen flex items-center justify-center">
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </section>
    );
  }

  if (projects.length === 0) return null;

  const project = projects[projectIndex];
  const images = project.images || [];

  const nextProject = () => {
    setProjectIndex((i) => (i + 1) % projects.length);
    setImageIndex(0);
  };

  const prevProject = () => {
    setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
    setImageIndex(0);
  };

  const nextImage = () => setImageIndex((i) => (i + 1) % images.length);
  const prevImage = () => setImageIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", right: "10%" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "50%", left: "50%" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing my best work and innovations
          </p>
          <motion.div
            className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-sm font-medium">
            <span className="text-blue-400 font-bold">{projectIndex + 1}</span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">{projects.length}</span>
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={projectIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* LEFT — IMAGE CAROUSEL */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden border-2 border-gray-700/50 shadow-2xl shadow-blue-500/20">
                {/* Image Container */}
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIndex}
                      src={images[imageIndex]}
                      alt={project.title}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm
                               w-12 h-12 rounded-full flex items-center justify-center
                               border border-gray-600/50 hover:border-blue-500/50
                               text-2xl text-white hover:text-blue-400 transition-all shadow-lg"
                    >
                      ‹
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm
                               w-12 h-12 rounded-full flex items-center justify-center
                               border border-gray-600/50 hover:border-blue-500/50
                               text-2xl text-white hover:text-blue-400 transition-all shadow-lg"
                    >
                      ›
                    </motion.button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, i) => (
                        <motion.button
                          key={i}
                          onClick={() => setImageIndex(i)}
                          whileHover={{ scale: 1.2 }}
                          className={`h-2 rounded-full transition-all ${
                            i === imageIndex
                              ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                              : "w-2 bg-gray-500 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Decorative Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
              </div>
            </motion.div>

            {/* RIGHT — PROJECT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Category Badge */}
              {project.category && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                           bg-gradient-to-r from-blue-500/20 to-purple-500/20
                           border border-blue-500/30 text-sm font-semibold
                           text-blue-300"
                >
                  <span>🚀</span>
                  {project.category}
                </motion.span>
              )}

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                {project.title}
              </motion.h3>

              {/* Date */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <span>📅</span>
                <span>
                  {project.startDate} → {project.endDate || "Present"}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 leading-relaxed text-lg"
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>⚡</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Tech Stack
                  </span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.techStack?.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900
                               border border-gray-700 text-sm font-medium text-gray-300
                               hover:border-blue-500/50 hover:text-blue-300
                               transition-all shadow-lg hover:shadow-blue-500/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden
                             bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30
                             hover:shadow-xl hover:shadow-blue-500/50 transition-all"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative flex items-center gap-2">
                      🌐 Live Preview
                    </span>
                  </motion.a>
                )}

                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl font-bold border-2 border-gray-600
                             hover:border-blue-500 hover:text-blue-400 transition-all
                             flex items-center gap-2 shadow-lg hover:shadow-blue-500/20"
                  >
                    <span>⚡</span>
                    View Code
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* PROJECT NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-16"
        >
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 rounded-full border-2 border-gray-600 hover:border-blue-500
                     font-semibold transition-all flex items-center gap-2
                     hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="text-xl group-hover:text-blue-400 transition-colors">←</span>
            <span className="group-hover:text-blue-400 transition-colors">Previous</span>
          </motion.button>

          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 rounded-full border-2 border-gray-600 hover:border-purple-500
                     font-semibold transition-all flex items-center gap-2
                     hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="group-hover:text-purple-400 transition-colors">Next</span>
            <span className="text-xl group-hover:text-purple-400 transition-colors">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;