import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
