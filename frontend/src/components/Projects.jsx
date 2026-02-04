





// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [projectIndex, setProjectIndex] = useState(0);
//   const [imageIndex, setImageIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

//     fetch(`${API_BASE}/projects`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProjects(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching projects:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <section className="bg-black min-h-screen flex items-center justify-center">
//         <motion.div
//           className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//         />
//       </section>
//     );
//   }

//   if (projects.length === 0) return null;

//   const project = projects[projectIndex];
//   const images = project.images || [];

//   const nextProject = () => {
//     setProjectIndex((i) => (i + 1) % projects.length);
//     setImageIndex(0);
//   };

//   const prevProject = () => {
//     setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
//     setImageIndex(0);
//   };

//   const nextImage = () => setImageIndex((i) => (i + 1) % images.length);
//   const prevImage = () => setImageIndex((i) => (i - 1 + images.length) % images.length);

//   return (
//     <section id="projects" className="relative bg-black text-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute rounded-full bg-blue-500/10 blur-3xl"
//           style={{ width: 600, height: 600, top: "10%", right: "10%", willChange: "transform" }}
//           animate={{ x: [0, 150, 0], y: [0, -100, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute rounded-full bg-purple-500/10 blur-3xl"
//           style={{ width: 600, height: 600, bottom: "10%", left: "10%", willChange: "transform" }}
//           animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute rounded-full bg-cyan-500/10 blur-3xl"
//           style={{ width: 400, height: 400, top: "50%", left: "50%", willChange: "transform" }}
//           animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <p className="text-gray-400 text-base md:text-lg">Showcasing my best work and innovations</p>
//           <motion.div
//             className="mt-4 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
//             style={{ width: 128 }}
//             initial={{ width: 0 }}
//             whileInView={{ width: 128 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           />
//         </motion.div>

//         {/* Project Counter */}
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
//           <span className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-xs md:text-sm font-medium">
//             <span className="text-blue-400 font-bold">{projectIndex + 1}</span>
//             <span className="text-gray-500">/</span>
//             <span className="text-gray-400">{projects.length}</span>
//           </span>
//         </motion.div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={projectIndex}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.5 }}
//             className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
//           >
//             {/* LEFT — IMAGE CAROUSEL */}
//             <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative group">
//               <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-gray-700/50 shadow-2xl shadow-blue-500/20">
//                 {/* ✅ Image Container with FIXED HEIGHT to prevent CLS */}
//                 <div className="relative overflow-hidden" style={{ height: 400 }}>
//                   <AnimatePresence mode="wait">
//                     <motion.img
//                       key={imageIndex}
//                       src={images[imageIndex]}
//                       alt={project.title}
//                       initial={{ opacity: 0, scale: 1.1 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.5 }}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                       width={800}
//                       height={400}
//                     />
//                   </AnimatePresence>

//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
//                 </div>

//                 {/* Image Navigation */}
//                 {images.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-gray-600/50 hover:border-blue-500/50 text-xl md:text-2xl text-white hover:text-blue-400 transition-all shadow-lg"
//                       aria-label="Previous image"
//                     >
//                       ‹
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-gray-600/50 hover:border-blue-500/50 text-xl md:text-2xl text-white hover:text-blue-400 transition-all shadow-lg"
//                       aria-label="Next image"
//                     >
//                       ›
//                     </button>

//                     {/* Image Indicators */}
//                     <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//                       {images.map((_, i) => (
//                         <button
//                           key={i}
//                           onClick={() => setImageIndex(i)}
//                           className={`h-2 rounded-full transition-all ${
//                             i === imageIndex ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500" : "w-2 bg-gray-500 hover:bg-gray-400"
//                           }`}
//                           aria-label={`Go to image ${i + 1}`}
//                         />
//                       ))}
//                     </div>
//                   </>
//                 )}

//                 {/* Decorative Corner */}
//                 <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
//               </div>
//             </motion.div>

//             {/* RIGHT — PROJECT INFO */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="space-y-4 md:space-y-6"
//             >
//               {/* Category Badge */}
//               {project.category && (
//                 <span className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs md:text-sm font-semibold text-blue-300">
//                   <span>🚀</span>
//                   {project.category}
//                 </span>
//               )}

//               {/* Title */}
//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//                 {project.title}
//               </h3>

//               {/* Date */}
//               <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
//                 <span>📅</span>
//                 <span>
//                   {project.startDate} → {project.endDate || "Present"}
//                 </span>
//               </div>

//               {/* Description */}
//               <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">{project.description}</p>

//               {/* Tech Stack */}
//               <div>
//                 <h4 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2">
//                   <span>⚡</span>
//                   <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
//                 </h4>
//                 <div className="flex flex-wrap gap-2 md:gap-3">
//                   {project.techStack?.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-xs md:text-sm font-medium text-gray-300 hover:border-blue-500/50 hover:text-blue-300 transition-all"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
//                 {project.liveLink && (
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all text-sm md:text-base"
//                   >
//                     🌐 Live Preview
//                   </a>
//                 )}

//                 {project.githubLink && (
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold border-2 border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all flex items-center gap-2 text-sm md:text-base"
//                   >
//                     <span>⚡</span>
//                     View Code
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         {/* PROJECT NAVIGATION */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//           className="flex justify-center gap-4 md:gap-6 mt-12 md:mt-16"
//         >
//           <button
//             onClick={prevProject}
//             className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-gray-600 hover:border-blue-500 font-semibold transition-all flex items-center gap-2 text-sm md:text-base"
//           >
//             <span className="text-lg md:text-xl">←</span>
//             <span className="hidden sm:inline">Previous</span>
//           </button>

//           <button
//             onClick={nextProject}
//             className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-gray-600 hover:border-purple-500 font-semibold transition-all flex items-center gap-2 text-sm md:text-base"
//           >
//             <span className="hidden sm:inline">Next</span>
//             <span className="text-lg md:text-xl">→</span>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Projects;


import { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioData } from "../context/DataProvider";
import { ProjectsSkeleton } from "./Skeletons";

// ✅ Memoized image component with lazy loading
const ProjectImage = memo(({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Placeholder while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800/50 animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        decoding="async"
        width={800}
        height={400}
      />
    </>
  );
});

ProjectImage.displayName = "ProjectImage";

function Projects() {
  const { data, loading } = usePortfolioData();
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Memoize projects to prevent re-renders
  const projects = useMemo(() => data?.projects || [], [data]);

  if (loading && !data) {
    return <ProjectsSkeleton />;
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="relative bg-black text-white py-16 md:py-24 px-4 md:px-6">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects Coming Soon
          </h2>
          <p className="text-gray-400">Check back later for exciting projects!</p>
        </div>
      </section>
    );
  }

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
    <section id="projects" className="relative bg-black text-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full bg-blue-500/10 blur-3xl"
          style={{ width: 600, height: 600, top: "10%", right: "10%", willChange: "transform" }}
          animate={{ x: [0, 150, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-purple-500/10 blur-3xl"
          style={{ width: 600, height: 600, bottom: "10%", left: "10%", willChange: "transform" }}
          animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-cyan-500/10 blur-3xl"
          style={{ width: 400, height: 400, top: "50%", left: "50%", willChange: "transform" }}
          animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base md:text-lg">Showcasing my best work and innovations</p>
          <motion.div
            className="mt-4 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            style={{ width: 128 }}
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Project Counter */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-xs md:text-sm font-medium">
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
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* LEFT — IMAGE CAROUSEL */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative group">
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-gray-700/50 shadow-2xl shadow-blue-500/20">
                {/* ✅ Image Container with FIXED HEIGHT to prevent CLS */}
                <div className="relative overflow-hidden" style={{ height: 400 }}>
                  {images.length > 0 ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={imageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <ProjectImage src={images[imageIndex]} alt={project.title} />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800/50 text-gray-500">
                      No preview available
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-gray-600/50 hover:border-blue-500/50 text-xl md:text-2xl text-white hover:text-blue-400 transition-all shadow-lg"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-gray-600/50 hover:border-blue-500/50 text-xl md:text-2xl text-white hover:text-blue-400 transition-all shadow-lg"
                      aria-label="Next image"
                    >
                      ›
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImageIndex(i)}
                          className={`h-2 rounded-full transition-all ${
                            i === imageIndex ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500" : "w-2 bg-gray-500 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
              </div>
            </motion.div>

            {/* RIGHT — PROJECT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              {/* Category Badge */}
              {project.category && (
                <span className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs md:text-sm font-semibold text-blue-300">
                  <span>🚀</span>
                  {project.category}
                </span>
              )}

              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {project.title}
              </h3>

              {/* Date */}
              {(project.startDate || project.endDate) && (
                <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                  <span>📅</span>
                  <span>
                    {project.startDate || "Start"} → {project.endDate || "Present"}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">{project.description}</p>

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2">
                    <span>⚡</span>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-xs md:text-sm font-medium text-gray-300 hover:border-blue-500/50 hover:text-blue-300 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all text-sm md:text-base"
                  >
                    🌐 Live Preview
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold border-2 border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all flex items-center gap-2 text-sm md:text-base"
                  >
                    <span>⚡</span>
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* PROJECT NAVIGATION */}
        {projects.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 md:gap-6 mt-12 md:mt-16"
          >
            <button
              onClick={prevProject}
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-gray-600 hover:border-blue-500 font-semibold transition-all flex items-center gap-2 text-sm md:text-base"
            >
              <span className="text-lg md:text-xl">←</span>
              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              onClick={nextProject}
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-gray-600 hover:border-purple-500 font-semibold transition-all flex items-center gap-2 text-sm md:text-base"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="text-lg md:text-xl">→</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default memo(Projects);