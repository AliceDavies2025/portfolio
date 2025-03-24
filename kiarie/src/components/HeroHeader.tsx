import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroHeader: FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events to track position for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate transforms based on scroll position
  const yTransform = scrollY * 0.2; // Parallax effect
  
  return (
    <motion.section 
      className="relative min-h-screen flex items-center px-5 sm:px-8 md:px-16 lg:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto w-full pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Profile Image - positioned at top left on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2 relative flex justify-start md:justify-center"
            style={{ transform: `translateY(${yTransform * 0.5}px)` }}
          >
            <div className="relative aspect-square w-[150px] sm:w-[180px] md:max-w-sm overflow-hidden rounded-2xl">
              <Image 
                src="/profile.png" 
                alt="Irene Kiarie"
                fill
                sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 350px"
                priority
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <motion.div 
                className="absolute inset-0 border-4 border-black/5 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </div>
            
            {/* Decorative element */}
            <motion.div 
              className="absolute -z-10 w-full h-full top-4 left-4 bg-amber-50/50 rounded-2xl hidden md:block"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 md:order-1 md:pr-8 text-right md:text-left"
            style={{ transform: `translateY(${-yTransform}px)` }}
          >
            <h1 className="text-7xl sm:text-8xl md:text-8xl xl:text-9xl font-light tracking-tight mb-4 sm:mb-6">
              Irene Kiarie
            </h1>
            <p className="text-2xl sm:text-3xl md:text-3xl font-light text-gray-600 mb-6 sm:mb-8">
              Interior Designer
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 ml-auto md:ml-0 max-w-md">
              Creating beautiful, functional spaces that inspire and enhance life's everyday moments.
            </p>
            <div className="flex justify-end md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  View My Work
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="text-sm text-gray-400 mb-2">Scroll to explore</div>
          <motion.div 
            className="w-5 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroHeader;
