import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

// import Contact from "./components/Contact";
import "./App.css";
import { ProjectsSection } from "./components/Projects";
import { ContactSection } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
