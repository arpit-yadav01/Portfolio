import { BrowserRouter, Routes, Route } from "react-router-dom";

// public components
import Navbar from "./components/Navbar";
// import AdminHero from "./components/AdminHero";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// admin components
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";


function Portfolio() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 PUBLIC PORTFOLIO */}
        <Route path="/" element={<Portfolio />} />

        {/* 📄 PROJECT DETAIL PAGE */}
        <Route path="/projects/:id" element={<ProjectDetail />} />

        {/* 🔐 ADMIN LOGIN */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* 🔒 ADMIN DASHBOARD (PROTECTED) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
