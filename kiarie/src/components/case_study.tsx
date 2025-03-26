import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Navigation, Footer } from '.'; // Import Navigation and Footer

interface CaseStudyProps {
  imageUrl: string;
  title: string;
  altText?: string;
}

const CaseStudy: FC<CaseStudyProps> = ({ imageUrl, title, altText = 'Case study' }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [activeSection, setActiveSection] = useState("projects");
  const [containerHeight, setContainerHeight] = useState<string>('auto');
  
  // Handle window resize to ensure proper sizing
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      // Calculate height based on aspect ratio (32768/1793)
      setContainerHeight(`${width * (32768/1793)}px`);
    };
    
    // Set initial dimensions
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      <Head>
        <title>{title} | Case Study</title>
        <meta name="description" content={`Case study for ${title}`} />
      </Head>
      
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <div className="flex-1 pt-20">
        <motion.div 
          className="fixed top-24 left-6 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/projects" 
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:bg-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back</span>
          </Link>
        </motion.div>

        <div className="w-full overflow-x-hidden">
          {/* Fixed className issue - now applying height via style prop */}
          <div 
            className="relative w-full"
            style={{ height: containerHeight }}
          >
            {windowWidth > 0 && (
              <Image
                src={imageUrl}
                alt={altText}
                fill
                style={{ objectFit: 'contain' }}
                priority
                sizes="100vw"
                quality={90}
              />
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
