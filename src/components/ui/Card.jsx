import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '',
  hoverEffect = true,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden';
  const hoverClasses = hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;