import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import GridMotion from '../ui/GridMotion';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  // Only get image URLs from projects data
  const gridItems = projectsData.map(project => project.image);

  return (
    <section id="projects" className="h-screen w-full bg-gray-900">
      <div className="h-full w-full">
        <div className="h-full relative">
          <GridMotion 
            items={gridItems} 
            gradientColor="rgba(17, 24, 39, 0.8)" // dark gray with opacity
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;