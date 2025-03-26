import { useState } from "react";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Footer } from "../components";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState("contact");

  return (
    <div className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>Contact | Irene Kiarie Interior Design</title>
        <meta name="description" content="Get in touch to discuss your interior design project" />
      </Head>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section className="pt-32 pb-20 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Let's Create Something<br />Exceptional Together
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-2xl sm:text-3xl text-gray-600 mb-10 leading-relaxed">
                I'm always interested in discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-8 mb-10">
                <div>
                  <h2 className="text-3xl mb-4 font-light">Email</h2>
                  <a 
                    href="mailto:irene.kiarie4@gmail.com" 
                    className="text-2xl text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    irene.kiarie4@gmail.com
                  </a>
                </div>
                
                <div>
                  <h2 className="text-3xl mb-4 font-light">Phone</h2>
                  <a 
                    href="tel:+4917672973037" 
                    className="text-2xl text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    +49 176 7297 3037
                  </a>
                </div>
                
                <div>
                  <h2 className="text-3xl mb-4 font-light">Follow</h2>
                  <div className="flex gap-6">
                    <a href="#" className="text-xl hover:text-amber-600 transition-colors">Instagram</a>
                    <a href="#" className="text-xl hover:text-amber-600 transition-colors">LinkedIn</a>
                    <a href="#" className="text-xl hover:text-amber-600 transition-colors">Pinterest</a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-2xl mb-3">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-2xl mb-3">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20" 
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-2xl mb-3">Project Details</label>
                  <textarea 
                    id="project" 
                    rows={6} 
                    className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="bg-black text-white text-xl px-10 py-4 rounded-full hover:bg-gray-800 transition-colors"
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
      
      <Footer />
    </div>
  );
}
