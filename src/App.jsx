import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import AnimatedBackground from "./components/AnimatedBackground";

// import Contact from "./components/Contact";
import "./App.css";
import { ProjectsSection } from "./components/Projects";
import { ContactSection } from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-white">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
