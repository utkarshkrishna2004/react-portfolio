import { FaBars } from "react-icons/fa";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Projects from "./components/Project";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <TechStack />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
