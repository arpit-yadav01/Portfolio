import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-90 to-black border-t border-gray-800 py-10 z-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "0%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "0%", right: "10%" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Section - Name & Tagline */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
          >
            Arpit Yadav
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </motion.p>
        </div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="group relative text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base font-medium"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="group relative text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-base font-medium"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="group relative text-gray-400 hover:text-purple-400 transition-colors duration-300 text-base font-medium"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="group relative text-gray-400 hover:text-pink-400 transition-colors duration-300 text-base font-medium"
          >
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative text-gray-400 hover:text-green-400 transition-colors duration-300 text-base font-medium"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        </motion.nav>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://www.linkedin.com/in/arpit-yadav01/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:text-blue-400 text-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://leetcode.com/u/buffer_stack/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:text-yellow-400 text-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </motion.a>

          <motion.a
            href="https://github.com/arpit-yadav01"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:text-white text-2xl border border-gray-700 hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-white/30"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-gray-600">✦</span>
          </div>
        </div>

        {/* Bottom Section - Copyright & Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-3"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Arpit Yadav. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;