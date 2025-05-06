import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = false, className = '' }) => {
  const alignment = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;