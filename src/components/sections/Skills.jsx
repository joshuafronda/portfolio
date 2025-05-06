import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { skillsData } from '../../data/skillsData.jsx';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionHeading
          title="My Skills"
          subtitle="Here are the technologies and tools I specialize in."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-3">
                  {category.icon}
                </span>
                {category.title}
              </h3>
              
              <ul className="space-y-5">
                {category.skills.map((skill) => (
                  <motion.li key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;