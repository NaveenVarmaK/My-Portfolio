import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";
import SpeedDial from "./components/SpeedDial";
import Experience from "./components/Experience";
import Description from "./components/Description";
import Education from "./components/Education";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div>
      <BottomHeader />
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
      <SpeedDial />
      
    </div>
    
  );
}

export default App;