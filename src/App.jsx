import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
// import Skills from './components/sections/Skills';
// import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ThemeContext from './context/ThemeContext';

function App() {
  // Theme state management
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
      
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          {/* <Skills /> */}
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;