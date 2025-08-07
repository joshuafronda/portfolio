import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaLinkedin, FaGithub, FaCode, FaLink, FaChevronDown, FaChevronUp, FaTimes, FaHackerrank } from 'react-icons/fa';
import DecryptedText from '../ui/DecryptedText'
import ShinyText from '../ui/ShinyText'
import ProfileCard from '../ui/ProfileCard'
import TechStack from '../ui/TechStack'
import avatarImage from '../../assets/Me.png'

const Hero = () => {
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  
  // Define key projects as a const to make it easier to manage
  const keyProjects = [
    {
      name: "EASYtizen: An Integrated Web and Mobile Application for Document Requests and Data Analytics",
      technologies: ["ReactJS","React Native", "Tailwind CSS", "Firebase", "JavaScript"],
      description: "Experience the future of barangay management with our innovative digital platform",
      githubLink: "https://github.com/joshuafronda/portfolio",
      liveLink: "https://easytizen.vercel.app/"
    }
  ];

  const experienceDetails = {
    company: "Batangas State University TNEU - Main Campus",
    position: "Full Stack Developer Intern",
    period: "FEB — APR 2025",
    highlights: [
      "Developed web and mobile applications",
      "Built and maintained backend services",
      "Managed WordPress",
      "Deployed applications on Ubuntu servers and configured Nginx",
      "Collaborated in Agile teams, contributing to sprint planning, daily stand-ups, and retrospectives",
      "Tracked tasks and project progress using Trello",
      "Documented codebases, system architecture, and project requirements",
      "Used Git for version control and collaboration",
      "Applied communication, teamwork, and problem-solving",
    ]
  };

  const toggleProfileCard = useCallback((e) => {
    // Prevent default and stop propagation to avoid immediate closing
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Toggle the state
    setIsProfileCardVisible(prev => !prev);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative">
      <div className="container-custom grid md:grid-cols-2 gap-7 mb-10 items-center">
        {/* Left Side (Text Content) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <motion.span 
            className="inline-block px-3 py-1 mb-6 text-sm font-medium text-black dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ShinyText 
              text="Programmer & Data/Business Analyst" 
              speed={3} 
              className="text-current"
            />
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
            <DecryptedText 
              text="A dedicated and results-driven professional with experience in web and mobile development, data and business analytics, and backend systems. Skilled in server-side programming, API integration, database management, and version control."
              variant="neon"
              className="text-sm text-gray-800 dark:text-gray-200"
              parentClassName="block"
              animateOn="load"
              sequential={true}
              speed={100}
            />
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
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors relative group"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="absolute z-10 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-8 left-1/2 transform -translate-x-1/2">
                  LinkedIn
                </span>
              </a>
              <a 
                href="https://github.com/joshuafronda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors relative group"
              >
                <FaGithub className="w-6 h-6" />
                <span className="absolute z-10 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-8 left-1/2 transform -translate-x-1/2">
                  GitHub
                </span>
              </a>
              <a 
                href="#" 
                onClick={toggleProfileCard}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors relative group"
              >
                <FaEye className="w-6 h-6" />
                <span className="absolute z-10 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-8 left-1/2 transform -translate-x-1/2">
                  Preview
                </span>
              </a>
              <a 
                href="https://www.hackerrank.com/joshuafronda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors relative group"
              >
                <FaHackerrank className="w-6 h-6" />
                <span className="absolute z-10 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-8 left-1/2 transform -translate-x-1/2">
                  HackerRank
                </span>
              </a>
              <div className="gap-4 ml-4">
              <a
                href="https://drive.google.com/file/d/1kYlQkC7avxLrdnoxLs6zQYmK8ifIH5I5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm font-medium transition-colors relative group"
              >
                View Resume
              </a>
            </div>
            </motion.div>
          </motion.div>

          {/* Mobile-Friendly Experience Section */}
          <div className="mt-8 block md:hidden">
            <div 
              className="flex justify-between items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer"
              onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Experience
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {experienceDetails.position}
                </p>
              </div>
              {isExperienceExpanded ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>

            <AnimatePresence>
              {isExperienceExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-b-lg shadow-md overflow-hidden"
                >
                  <div className="p-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      {experienceDetails.company} | {experienceDetails.period}
                    </p>
                    <ul className="list-disc list-outside text-gray-700 dark:text-gray-200 text-sm space-y-2 pl-5">
                      {experienceDetails.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <a 
                      href="https://caist.batstateu.edu.ph/behind-the-code/select/joshua-b.-fronda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Internship Details →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Technologies Curved Loop for Mobile
          <div className="mt-8 block md:hidden text-xs sm:text-sm md:text-base lg:text-lg">
            <CurvedLoop 
              marqueeText="React ✦ React Native ✦ JavaScript ✦ TypeScript ✦ Tailwind CSS ✦ Firebase ✦ PHP ✦ Django ✦ Python ✦ Git ✦ Nginx ✦ Ubuntu ✦ WordPress ✦ Machine Learning ✦ Data Analysis ✦ Problem Solving ✦" 
              speed={2}
              curveAmount={10}
              interactive={true}
              className="text-blue-600 dark:text-blue-400 font-bold text-sm"
            />
          </div> */}

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

        {/* Right Side (Experience & Technologies) - Desktop View */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex flex-col justify-center w-full px-4 md:sticky md:top-20"
        >
          {/* Experience Section */}
          <div className="mt-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-widest mb-2 sm:mb-0">
                {experienceDetails.period} - {experienceDetails.company}
              </span>
            </div>
            <span className="font-semibold">{experienceDetails.position}</span>
            <ul className="flex flex-col list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-1 mt-4">
            <li>Developed web and mobile applications</li>
            <li>Built and maintained backend services</li>
            <li>Managed WordPress</li>
            <li>Deployed applications on Ubuntu servers and configured Nginx</li>
            <li>Collaborated in Agile teams, contributing to sprint planning, daily stand-ups, and retrospectives</li>
            <li>Tracked tasks and project progress using Trello</li>
            <li>Documented codebases, system architecture, and project requirements</li>
            <li>Used Git for version control and collaboration</li>
            <li>Applied communication, teamwork, and problem-solving</li>
            </ul>
            <p className="text-sm text-gray-300 mt-2">
              During my internship, these are the <a href="https://caist.batstateu.edu.ph/behind-the-code/select/joshua-b.-fronda" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline hover:text-blue-400 transition-colors">Website.</a>
            </p>
          </div>

          {/* Technology Icons */}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
          >
            <TechStack />
          </motion.div>
        </motion.div>
      </div>

      

      {/* Full Screen Modal for Profile Card */}
      {isProfileCardVisible && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={toggleProfileCard}
        >
          <div 
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >

            <ProfileCard 
              avatarUrl={avatarImage}
              handle="joshuafronda"
              status="Open to Work"
              contactText="Get in Touch"
              onContactClick={() => {
                console.log('Contact clicked');
                toggleProfileCard();
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;