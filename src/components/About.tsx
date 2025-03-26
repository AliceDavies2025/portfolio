import Image from "next/image";
import { FC } from 'react';
import { motion } from 'framer-motion';

const About: FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-5 md:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
              With a strong foundation in interior design and a deep understanding of UX/UI 
              principles, I bring a unique perspective to my work.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
              I excel in client relations, project management, and creating functional, aesthetically 
              compelling spaces.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Now in UX/UI design, I apply the same user-centered approach, critical thinking, and 
              problem-solving to digital experiences. I blend research skills with a keen eye for design 
              to craft intuitive and visually engaging interfaces.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/images/about-studio.jpg" 
              alt="Design studio" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
