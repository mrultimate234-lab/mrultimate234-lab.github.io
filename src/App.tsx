import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Football from './components/Football';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Interests />
      <Skills />
      <Projects />
      <Football />
      <Goals />
      <Contact />
      <Footer />
    </div>
  );
}
