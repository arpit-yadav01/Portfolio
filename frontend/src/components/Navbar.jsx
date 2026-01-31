
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useState, useEffect } from "react";

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { scrollY } = useScroll();
  
//   // Transform scroll position to opacity and blur
//   const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
//   const navBlur = useTransform(scrollY, [0, 100], [8, 16]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80; // Account for navbar height
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       });
//     }
//   };

//   const navLinks = [
//     { 
//       name: "About", 
//       id: "about", 
//       hoverColor: "hover:text-cyan-400",
//       gradientClasses: "from-cyan-400 to-cyan-600"
//     },
//     { 
//       name: "Skills", 
//       id: "skills", 
//       hoverColor: "hover:text-purple-400",
//       gradientClasses: "from-purple-400 to-purple-600"
//     },
//     { 
//       name: "Experience", 
//       id: "experience", 
//       hoverColor: "hover:text-pink-400",
//       gradientClasses: "from-pink-400 to-pink-600"
//     },
//     { 
//       name: "Projects", 
//       id: "projects", 
//       hoverColor: "hover:text-blue-400",
//       gradientClasses: "from-blue-400 to-blue-600"
//     },
//     { 
//       name: "Contact", 
//       id: "contact", 
//       hoverColor: "hover:text-green-400",
//       gradientClasses: "from-green-400 to-green-600"
//     },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       style={{
//         backdropFilter: `blur(${navBlur}px)`,
//       }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-black/95 shadow-lg shadow-black/50 border-b border-gray-800"
//           : "bg-black/80 border-b border-gray-800/50"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo / Name */}
//         <motion.button
//           onClick={() => scrollToSection("home")}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="text-2xl font-bold text-white relative group cursor-pointer"
//         >
//           Arpit Yadav
//           <span className="text-blue-500 inline-block group-hover:rotate-180 transition-transform duration-500">
//             .
//           </span>
//           <motion.span
//             className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
//           ></motion.span>
//         </motion.button>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-8 text-gray-300">
//           {navLinks.map((link, index) => (
//             <motion.button
//               key={link.id}
//               onClick={() => scrollToSection(link.id)}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className={`group relative font-medium ${link.hoverColor} transition-colors duration-300 cursor-pointer`}
//             >
//               {link.name}
//               <motion.span
//                 className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${link.gradientClasses} group-hover:w-full transition-all duration-300`}
//               ></motion.span>
//             </motion.button>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <MobileMenu navLinks={navLinks} scrollToSection={scrollToSection} />
//       </div>

//       {/* Scroll Progress Bar */}
//       <motion.div
//         className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 origin-left"
//         style={{
//           scaleX: useTransform(
//             scrollY,
//             [0, document.documentElement.scrollHeight - window.innerHeight],
//             [0, 1]
//           ),
//         }}
//       />
//     </motion.nav>
//   );
// }

// // Mobile Menu Component
// function MobileMenu({ navLinks, scrollToSection }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="md:hidden">
//       {/* Hamburger Button */}
//       <motion.button
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="text-white focus:outline-none"
//         aria-label="Toggle menu"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           )}
//         </svg>
//       </motion.button>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl"
//         >
//           <div className="flex flex-col py-4 px-6 gap-4">
//             {navLinks.map((link, index) => (
//               <motion.button
//                 key={link.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 onClick={() => {
//                   scrollToSection(link.id);
//                   setIsOpen(false);
//                 }}
//                 className={`text-left text-gray-300 hover:text-white ${link.hoverColor} hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300`}
//               >
//                 {link.name}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default Navbar;


import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll position to opacity and blur
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { 
      name: "About", 
      id: "about", 
      hoverColor: "hover:text-cyan-400",
      gradientClasses: "from-cyan-400 to-cyan-600"
    },
    { 
      name: "Skills", 
      id: "skills", 
      hoverColor: "hover:text-purple-400",
      gradientClasses: "from-purple-400 to-purple-600"
    },
    { 
      name: "Experience", 
      id: "experience", 
      hoverColor: "hover:text-pink-400",
      gradientClasses: "from-pink-400 to-pink-600"
    },
    { 
      name: "Projects", 
      id: "projects", 
      hoverColor: "hover:text-blue-400",
      gradientClasses: "from-blue-400 to-blue-600"
    },
    { 
      name: "Contact", 
      id: "contact", 
      hoverColor: "hover:text-green-400",
      gradientClasses: "from-green-400 to-green-600"
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backdropFilter: `blur(${navBlur}px)`,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 shadow-lg shadow-black/50 border-b border-gray-800"
          : "bg-black/80 border-b border-gray-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <motion.button
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold text-white relative group cursor-pointer"
        >
          Arpit Yadav
          <span className="text-blue-500 inline-block group-hover:rotate-180 transition-transform duration-500">
            .
          </span>
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
          ></motion.span>
        </motion.button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-300">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative font-medium ${link.hoverColor} transition-colors duration-300 cursor-pointer`}
            >
              {link.name}
              <motion.span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${link.gradientClasses} group-hover:w-full transition-all duration-300`}
              ></motion.span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu navLinks={navLinks} scrollToSection={scrollToSection} />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 origin-left"
        style={{
          scaleX: useTransform(
            scrollY,
            [0, document.documentElement.scrollHeight - window.innerHeight],
            [0, 1]
          ),
        }}
      />
    </motion.nav>
  );
}

// Mobile Menu Component
function MobileMenu({ navLinks, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl"
        >
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className={`text-left text-gray-300 hover:text-white ${link.hoverColor} hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300`}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;