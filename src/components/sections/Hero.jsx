import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <motion.span 
            className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Fullstack Developer
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building digital experiences that <span className="text-blue-600 dark:text-blue-400">matter</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            I'm a fullstack developer passionate about creating beautiful, functional, and user-centered digital experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button 
              icon={<FaArrowRight />} 
              onClick={() => document.getElementById('projects').scrollIntoView()}
            >
              See My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('contact').scrollIntoView()}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />
            
            <motion.img 
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Developer at work"
              className="rounded-3xl shadow-xl relative z-10"
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;