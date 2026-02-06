// import { DataProvider } from "./context/DataProvider";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// import { useSectionObserver } from "./ai/useSectionObserver";
// import AIAssistant from "./ai/AIAssistant";

// function Portfolio() {
//   const sectionIds = [
//     "hero",
//     "about",
//     "education",
//     "skills",
//     "projects",
//     "experience",
//     "contact",
//   ];

//   const activeSection = useSectionObserver(sectionIds);

//   return (
//     <DataProvider>
//       <Navbar />

//       <section id="hero"><Hero /></section>
//       <section id="about"><About /></section>
//       <section id="skills"><Skills /></section>
//       <section id="projects"><Projects /></section>
//       <section id="experience"><Experience /></section>
//       <section id="contact"><Contact /></section>

//       <Footer />
//       <AIAssistant activeSection={activeSection} />
//     </DataProvider>
//   );
// }

// export default Portfolio;



import { useState } from "react";
import { DataProvider } from "./context/DataProvider";
import AIWelcome from "./components/AIWelcome";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useSectionObserver } from "./ai/useSectionObserver";
import AIAssistant from "./ai/AIAssistant";

function Portfolio() {
  const [showWelcome, setShowWelcome] = useState(true);

  const sectionIds = [
    "hero",
    "about",
    "education",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  const activeSection = useSectionObserver(sectionIds);

  return (
    <>
      {/* AI Welcome Gate - shows first, hides API loading */}
      {showWelcome && <AIWelcome onFinish={() => setShowWelcome(false)} />}

      {/* Main Portfolio - wrapped in DataProvider for optimized loading */}
      <DataProvider>
        <Navbar />

        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>

        <Footer />
        <AIAssistant activeSection={activeSection} />
      </DataProvider>
    </>
  );
}

export default Portfolio;