import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Cormorant_Garamond, Fraunces } from "next/font/google";
import { Navigation, Footer } from "../components";
import { motion } from "framer-motion";
import Link from 'next/link';

// Elegant serif font for headings with a luxurious feel
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"] // Import all weights
});

// Sophisticated serif for body text 
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"]
});

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  
  // Track scroll position, viewport height and page height
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const updateDimensions = () => {
      setViewportHeight(window.innerHeight);
      setPageHeight(document.body.scrollHeight);
    };
    
    // Initial measurements
    updateDimensions();
    
    // Update on scroll and resize
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateDimensions);
    
    // Set up mutation observer to detect DOM changes that might affect page height
    const observer = new MutationObserver(updateDimensions);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  }, []);

  // Calculate when to start fading based on page position
  // This ensures complete fading before reaching the footer
  const footerPosition = pageHeight - viewportHeight - 200; // 200px before footer enters viewport
  const fadeOutStart = footerPosition - 400; // Start fading 400px before that
  
  // Calculate opacity based on scroll position
  const nameOpacity = () => {
    if (scrollY < fadeOutStart) {
      // Normal fade based on scroll (unrelated to footer)
      return Math.max(0.1, 1 - (scrollY / 500));
    } else if (scrollY >= footerPosition) {
      // Completely invisible at footer
      return 0;
    } else {
      // Progressive fade out approaching footer
      return Math.max(0, (footerPosition - scrollY) / 400);
    }
  };

  return (
    // Apply both font variables to the page wrapper
    <div className={`min-h-screen ${cormorant.variable} ${fraunces.variable} font-fraunces relative`}>
      <Head>
        <title>About Me | Irene Kiarie Portfolio</title>
        <meta name="description" content="Learn about Irene Kiarie's background in interior design and UX/UI" />
      </Head>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Single fixed background name with improved fading */}
      <div className="fixed inset-0 w-full h-full flex items-start pointer-events-none overflow-hidden z-0">
        <motion.h1 
          className="absolute text-left ml-5 md:ml-16 lg:ml-24 text-[20vw] sm:text-[18vw] md:text-[20vw] font-cormorant tracking-tighter font-black text-gray-100 select-none antialiased leading-[0.95] mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ 
            opacity: nameOpacity(),
            top: 0
          }}
        >
          <span className="block">IRENE</span>
          <span className="block">KIARIE</span>
        </motion.h1>
      </div>
      
      {/* Add padding to create space between nav and content */}
      <div className="h-[90vh]"></div>
      
      {/* Content section now positioned below the name space */}
      <section className="relative pb-20 px-5 sm:px-8 md:px-16 lg:px-24 z-10 bg-white/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto w-full">
          {/* Removed the grid with image and simplified to a single column layout */}
          <motion.div 
            className="space-y-8 lg:space-y-12 font-fraunces text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-6xl sm:text-7xl lg:text-8xl font-cormorant font-light tracking-tight antialiased"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              About <span className="font-medium italic">Me</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-2xl sm:text-3xl text-gray-800 leading-relaxed font-light antialiased">
                With a strong foundation in interior design and a deep understanding of UX/UI 
                principles, I bring a unique perspective to my work.
              </p>
              
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-extralight antialiased">
                I excel in client relations, project management, and creating functional, aesthetically 
                compelling spaces.
              </p>

              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-extralight antialiased">
                My background bridges the physical and digital design worlds, allowing me to create 
                holistic experiences that consider both aesthetic appeal and functional needs.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link 
                href="/contact"
                className="inline-block bg-black text-white px-8 py-4 text-lg font-light tracking-wide rounded-full hover:bg-gray-800 transition-colors"
              >
                Let's Work Together
              </Link>
              
              <motion.a
                href="/CV/Irene.W.Kiarie CV.pdf" 
                download
                className="inline-flex items-center gap-2 border-2 border-black px-8 py-4 text-lg font-light tracking-wide rounded-full hover:bg-black hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Ensure footer is completely visible with increased isolation */}
      <div className="relative z-20 bg-black">
        <div className="absolute inset-0 bg-black w-full h-full -z-10"></div>
        <Footer />
      </div>
    </div>
  );
}
