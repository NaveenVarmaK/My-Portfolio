import Header from "./components/Header";
import React from "react";
import Experience from "./components/Experience";
import Description from "./components/Description";
import Education from "./components/Education";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";

function App() {
  // Add smooth scrolling styles
  React.useEffect(() => {
    // Add smooth scrolling CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(80, 80, 129, 0.1);
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(80, 80, 129, 0.3);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(80, 80, 129, 0.5);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <div>
      <section id="home">
        <Header />
        <Description />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="certifications">
        <Certificates />
      </section>      
    </div>
    
  );
}

export default App;