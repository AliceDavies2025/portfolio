import { FC } from 'react';
import { motion } from 'framer-motion';

const Contact: FC = () => {
  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-5 md:px-8 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Interested in working together? I'd love to hear from you.
              Let's create something exceptional for your space.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <motion.p 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="font-medium">Email:</span> 
                <a href="mailto:irene.kiarie4@gmail.com" className="hover:underline">irene.kiarie4@gmail.com</a>
              </motion.p>
              <motion.p 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="font-medium">Tel:</span> 
                <a href="tel:+4917672973037" className="hover:underline">+49 176 7297 3037</a>
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <form className="space-y-5 sm:space-y-6">
              <motion.div variants={inputVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50" 
                />
              </motion.div>
              
              <motion.div variants={inputVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50" 
                />
              </motion.div>
              
              <motion.div variants={inputVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50"
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
