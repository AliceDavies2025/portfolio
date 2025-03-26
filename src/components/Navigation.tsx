import { FC, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    closeMobileMenu();
  };

  // Animation variants for menu items - refined for more elegance
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9] // Custom easing for smooth elegance
      }
    }),
    hover: { 
      y: -2,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    tap: { scale: 0.98 }
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  };

  // Animation variants for mobile menu items
  const mobileMenuItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.nav 
        className="fixed w-full px-6 md:px-8 py-4 md:py-6 flex justify-between items-center z-50 bg-white/90 backdrop-blur-md shadow-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 0.1
        }}
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Logo 
            size={mobileMenuOpen ? "sm" : "md"} 
            withText={!mobileMenuOpen}
          />
        </motion.div>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <motion.div 
          className="hidden md:flex gap-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {['home', 'projects', 'about', 'contact'].map((section, i) => (
            <motion.div
              key={section}
              custom={i}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="relative py-1"
            >
              <Link 
                href={section === 'home' ? '/' : `/${section}`}
                onClick={() => setActiveSection(section)}
                className={`${
                  activeSection === section 
                    ? "text-black font-normal" 
                    : "text-gray-500"
                } relative tracking-wide uppercase text-sm hover:text-black transition-all duration-300`}
              >
                <span className="capitalize block px-2">{section}</span>
                {activeSection === section && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"
                    layoutId="navIndicator"
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile menu button - Only visible on mobile */}
        <motion.button 
          className="md:hidden relative z-50 p-1"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 flex flex-col items-end justify-center gap-1.5">
            <motion.span 
              className="block h-0.5 bg-black rounded-full" 
              animate={{ 
                width: mobileMenuOpen ? "24px" : "24px",
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 6 : 0
              }}
              style={{ transformOrigin: "center" }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="block h-0.5 bg-black rounded-full"
              initial={{ width: "16px" }}
              animate={{ 
                width: mobileMenuOpen ? 0 : "16px",
                opacity: mobileMenuOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="block h-0.5 bg-black rounded-full"
              animate={{ 
                width: mobileMenuOpen ? "24px" : "20px",
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -6 : 0
              }}
              style={{ transformOrigin: "center" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center gap-10 text-xl">
              {['home', 'projects', 'about', 'contact'].map((section, i) => (
                <motion.div
                  key={section}
                  variants={mobileMenuItemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="overflow-hidden"
                >
                  <Link 
                    href={section === 'home' ? '/' : `/${section}`}
                    onClick={() => handleNavigation(section)}
                    className={`relative py-2 px-6 uppercase tracking-wider ${
                      activeSection === section 
                        ? "text-black after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-[1px] after:bg-black" 
                        : "text-gray-600"
                    } transition-all duration-300`}
                  >
                    <span className="capitalize block">{section}</span>
                  </Link>
                </motion.div>
              ))}
              <Link 
                href="/projects"
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-black/90 transition-colors shadow-md"
                onClick={closeMobileMenu}
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
