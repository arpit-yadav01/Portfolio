import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [index, setIndex] = useState(0);

 useEffect(() => {
  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";
  
  fetch(`${API_BASE}/projects/${id}`)
    .then((res) => res.json())
    .then((data) => setProject(data));
}, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const images = project.images || [];

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT — IMAGE CAROUSEL */}
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full h-[420px] object-cover"
            />
          </AnimatePresence>

          {/* Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2
                           bg-black/60 px-3 py-2 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2
                           bg-black/60 px-3 py-2 rounded-full"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* RIGHT — PROJECT INFO */}
        <div>
          <Link
            to="/"
            className="text-gray-400 text-sm hover:text-white"
          >
            ← Back
          </Link>

          {/* Category */}
          {project.category && (
            <span className="inline-block mt-4 mb-3 px-4 py-1
                             rounded-full bg-gray-800 text-sm">
              {project.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold mb-3">
            {project.title}
          </h1>

          {/* Dates */}
          <p className="text-gray-500 mb-6">
            {project.startDate} → {project.endDate || "Present"}
          </p>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Tech Stack */}
          <h3 className="font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full
                           bg-gray-800 border border-gray-700 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                className="bg-blue-500 px-6 py-3 rounded-full
                           text-black font-semibold"
              >
                Live Preview
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                className="border border-gray-700 px-6 py-3 rounded-full"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
