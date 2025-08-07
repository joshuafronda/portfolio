import React, { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker, 
  FaDatabase, 
  FaServer 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiFirebase, 
  SiDjango, 
  SiNginx, 
  SiUbuntu, 
  SiWordpress,
  SiFlutter,
  SiPhp,
  SiHtml5,    
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiVite
} from 'react-icons/si';

const TechIcons = [
  // Frontend Technologies
  { 
    icon: SiHtml5, 
    name: 'HTML', 
    color: '#ffffff',
    category: 'frontend'
  },
  { 
    icon: SiCss3, 
    name: 'CSS', 
    color: '#ffffff',
    category: 'frontend'
  },
  { 
    icon: SiJavascript, 
    name: 'JavaScript', 
    color: '#ffffff',
    category: 'frontend'
  },
  { 
    icon: SiTypescript, 
    name: 'TypeScript', 
    color: '#ffffff',
    category: 'frontend'
  },
  { 
    icon: FaReact, 
    name: 'React', 
    color: '#ffffff',
    category: 'frontend'
  },
  { 
    icon: SiTailwindcss, 
    name: 'Tailwind CSS', 
    color: '#ffffff',
    category: 'frontend'
  },
  { 
    icon: SiFlutter, 
    name: 'Flutter', 
    color: '#ffffff',
    category: 'frontend'
  },
  { 
    icon: SiVite, 
    name: 'Vite', 
    color: '#ffffff',
    category: 'frontend'
  },

  // Backend Technologies
  { 
    icon: FaPython, 
    name: 'Python', 
    color: '#ffffff',
    category: 'backend'
  },
  { 
    icon: SiDjango, 
    name: 'Django', 
    color: '#ffffff',
    category: 'backend'
  },
  { 
    icon: SiPhp, 
    name: 'PHP', 
    color: '#ffffff',
    category: 'backend'
  },
  { 
    icon: SiWordpress, 
    name: 'WordPress', 
    color: '#ffffff',
    category: 'backend'
  },
  { 
    icon: SiNginx, 
    name: 'Nginx', 
    color: '#ffffff',
    category: 'backend'
  },

  // Database Technologies
  { 
    icon: SiMysql, 
    name: 'MySQL', 
    color: '#ffffff',
    category: 'database'
  },
  { 
    icon: SiPostgresql, 
    name: 'PostgreSQL', 
    color: '#ffffff',
    category: 'database'
  },
  { 
    icon: SiMongodb, 
    name: 'MongoDB', 
    color: '#ffffff',
    category: 'database'
  },

  // DevOps and Tools
  { 
    icon: FaGitAlt, 
    name: 'Git', 
    color: '#ffffff',
    category: 'devops'
  },
  { 
    icon: SiUbuntu, 
    name: 'Ubuntu', 
    color: '#ffffff',
    category: 'devops'
  },
  { 
    icon: SiFirebase, 
    name: 'Firebase', 
    color: '#ffffff',
    category: 'devops'
  }
];

const TechStack = ({ className = '' }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // For mobile devices, show a grid layout
  if (screenWidth < 640) {
    return (
      <div className={`grid grid-cols-4 gap-4 justify-center items-center px-4 ${className}`}>
        {TechIcons.map((tech, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center group"
            title={tech.name}
          >
            <tech.icon 
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 dark:text-white text-gray-800" 
              style={{ color: 'currentColor' }}
            />
            <span className="text-xs text-gray-600 dark:text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // For desktop, use the scrolling animation
  const scrollingIcons = [...TechIcons, ...TechIcons, ...TechIcons];

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="animate-scroll-tech flex items-center animate-fade-tech">
        {scrollingIcons.map((tech, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 flex flex-col items-center justify-center group mx-2 animate-fade-in-tech"
            title={tech.name}
          >
            <tech.icon 
              className="w-5 h-5 md:w-10 md:h-10 transition-transform duration-300 dark:text-white text-gray-800" 
              style={{ color: 'currentColor' }}
            />
            <span className="text-xs text-gray-600 dark:text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;