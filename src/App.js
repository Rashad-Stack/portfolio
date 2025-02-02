import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Scrollbar from "./components/Scrollbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import {
  works,
  skills,
  projects,
  partners,
  testimonials,
  main,
  about,
} from "./data/resumeData";

function App() {
  return (
    <>
      <Loader />
      <Nav {...main} />
      <div id="pagepiling">
        <Masthead {...main} />
        <About {...about} />
        <Experience works={works} />
        <Skills {...skills} />
        <Projects
          projects={projects}
          github="https://github.com/Rashad-Stack"
        />
        <Partners partners={partners} />
        <Testimonials testimonials={testimonials} />
        {/* <News /> */}
        <Contact {...main} />
      </div>
      <Scrollbar />
    </>
  );
}

export default App;
