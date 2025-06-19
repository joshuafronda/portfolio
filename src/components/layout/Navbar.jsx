import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMoon, FaSun } from 'react-icons/fa';
import ThemeContext from '../../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' }
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <FaCode className="h-7 w-7" /> */}
          <span className="text-xl font-bold">Devjoshuafronda</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
          </motion.button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;