import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Poppins } from 'next/font/google'; // Import Poppins font

// Configure Poppins font with desired weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

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
      className={`relative min-h-screen flex items-center px-5 sm:px-8 md:px-16 lg:px-24 ${poppins.variable}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto w-full pt-12 sm:pt-16 md:pt-24 pb-8"> {/* Reduced padding-top from pt-24 to pt-12 on mobile */}
        {/* Increased spacing between grid items with gap-12 (was gap-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Quote section with position higher on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-2 md:order-2 relative pt-2 -mt-16 sm:-mt-12 md:mt-0 md:pt-0 md:pl-8 lg:pl-16" 
            /* Adjusted negative margin from -mt-12 sm:-mt-16 to -mt-16 */
            style={{ transform: `translateY(${yTransform * 0.5}px)` }}
          >
            <div className="space-y-4 text-center md:text-left p-8 border-l-4 border-amber-50 bg-gray-50/30">
              <p className="text-2xl md:text-3xl text-gray-700 italic font-light leading-relaxed">
                "Design is thinking made visual."
              </p>
              <p className="text-xl text-gray-500">— Saul Bass</p>
            </div>
          </motion.div>
          
          {/* Text Content section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 md:order-1 md:pr-8 text-right md:text-left" 
            style={{ transform: `translateY(${-yTransform}px)` }}
          >
            <h1 className="text-bold text-7xl sm:text-8xl md:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-black tracking-tight mb-4 sm:mb-6 leading-[0.9] font-poppins">
              Irene Kiarie
            </h1>
            {/* Updated title to include both roles */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-600 mb-6 sm:mb-8">
              Interior Designer | UX/UI Designer
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
                <Link 
                  href="/projects"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors inline-block"
                >
                  View My Work
                </Link>
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
