import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="Here are some of my recent projects, showcasing my skills and expertise."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={project.id}
              className="h-full flex flex-col"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      aria-label="View live project"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </motion.div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;