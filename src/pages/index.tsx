import { useState } from "react";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Projects, About, Footer, HeroHeader, CaseStudyShowcase } from "../components";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");

  // Stagger the animation of content sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>Irene Kiarie | Interior Design Portfolio</title>
        <meta name="description" content="Interior design portfolio showcasing elegant, functional spaces" />
      </Head>

      {/* Navigation is now always visible */}
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Hero section that fills the screen */}
      <HeroHeader />
      
      {/* Main content below the hero - With staggered animations */}
      <motion.div 
        id="content" 
        className="pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Projects projects={projects} />
        </motion.div>
        
        {/* Add Case Study section */}
        <motion.div variants={itemVariants}>
          <CaseStudyShowcase 
            id="lightly"
            title="Lightly"
            description=""
            imageUrl="/images/lightly.png"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <About />
        </motion.div>
        
        
        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
}
