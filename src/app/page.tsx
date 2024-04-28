import Navbar from "./Components/Navbar";
import About from "./page/About";
import Projects from "./page/Projects";
import Contact from "./page/Contact";

export default function Home() {
  return (
    <>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}
