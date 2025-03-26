import Image from "next/image";
import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 px-5 md:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-light mb-6 md:mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Creating spaces <br className="hidden sm:block" />that inspire and comfort.
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Award-winning interior design studio focused on creating thoughtful, 
          timeless spaces that balance aesthetics with functionality.
        </motion.p>
        
        <motion.div 
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image 
            src="/images/hero-showcase.jpg" 
            alt="Interior design showcase"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
