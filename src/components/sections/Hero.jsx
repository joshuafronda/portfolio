import { motion } from 'framer-motion';
import { FaEye, FaLinkedin, FaGithub, FaCode, FaLink } from 'react-icons/fa';
import Button from '../ui/Button';
import ScrollVelocity from '../ui/ScrollVelocity';
import { useState } from 'react';


const Hero = () => {
  const [velocity] = useState(100);
  
  // Define key projects as a const to make it easier to manage
  const keyProjects = [
    {
      name: "EASYtizen: An Integrated Web and Mobile Application for Document Requests and Data Analytics",
      technologies: ["ReactJS","React Native", "Tailwind CSS", "Firebase", "JavaScript"],
      description: "A responsive and animated personal portfolio showcasing my skills and projects.",
      githubLink: "https://github.com/joshuafronda/portfolio",
      liveLink: "https://easytizen.vercel.app/"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom grid md:grid-cols-2 gap-7 mb-10 items-center">
        {/* Left Side (Text Content) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <motion.span 
            className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Programmer / Developer
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Joshua <span className="text-blue-600 dark:text-blue-400">Fronda</span>
          </motion.h1>
          
          {/* Classic About Me Section */}
          <div className="mb-6 px-2 py-2 border border-gray-300 rounded bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm">
            <p className="text-sm text-gray-800 dark:text-gray-200">
            A dedicated and results-driven aspiring programmer/developer with a strong foundation in web and mobile development, server-side programming, API integration, and database management.
            </p>
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            
            {/* Social Links */}
            <motion.div 
              className="flex gap-4 ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <a 
                href="https://www.linkedin.com/in/joshuafronda/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/joshuafronda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/joshuafronda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FaEye className="w-6 h-6" />
              </a>
              <div className="gap-4 ml-4">
              <a
                href="https://drive.google.com/file/d/1B3OBfNcR-cNtmix8ZZUNlGiGx-ZqoP4X/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                View Resume
              </a>
            </div>
            </motion.div>
          </motion.div>

          {/* Projects Preview */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Featured Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyProjects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + (index * 0.2), duration: 0.5 }}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{project.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.githubLink !== "#" && (
                      <a 
                        href="https://drs-mncpltysp-easytizen.org/developer" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                      >
                        <FaLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side (Experience & Technologies) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center w-full px-4 md:sticky md:top-20"
        >
          {/* Experience Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-widest mb-2 sm:mb-0">FEB — APR 2025 - Batangas State University TNEU - Main Campus </span>
            </div><span className="font-semibold">Full Stack Developer Intern</span>
            <ul className="flex flex-col list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-1 mt-4">
              <li>Developed web and mobile applications using React.js, Flutter, and WordPress.</li>
              <li>Built and maintained backend services with PHP and Django REST Framework.</li>
              <li>Managed WordPress backend using PHP and MariaDB for dynamic content and performance.</li>
              <li>Deployed applications on Ubuntu servers and configured Nginx for routing and optimization.</li>
              <li>Collaborated in Agile teams, contributing to sprint planning, daily stand-ups, and retrospectives.</li>
              <li>Tracked tasks and project progress using Trello to ensure timely delivery.</li>
              <li>Documented codebases, system architecture, and project requirements for maintainability.</li>
              <li>Used Git for version control and collaboration across development teams.</li>
              <li>Applied strong communication, teamwork, and problem-solving skills to deliver quality results on time.</li>
            </ul>
            <p className="text-sm text-gray-300 mt-2">
              During my internship, these are the <a href="https://caist.batstateu.edu.ph/behind-the-code/select/joshua-b.-fronda" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline hover:text-blue-400 transition-colors">Website.</a>
            </p>
          </div>
          {/* Technologies Section */}
          <div>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Technologies</h3>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">React</li>
                <li className="bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">Node.js</li>
                <li className="bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">Tailwind CSS</li>
                <li className="bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">MongoDB</li>
                {/* Add more technologies as needed */}
              </ul>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;