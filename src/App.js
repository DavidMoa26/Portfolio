import './App.css';
import About from './components/About/About';
import Description from './components/Description/Description';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import NavBar from './components/NavBar/Navbar';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Description />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </>
  );
}

export default App;
