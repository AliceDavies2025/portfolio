import { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface AnimatedLayoutProps {
  children: ReactNode;
}

const AnimatedLayout: FC<AnimatedLayoutProps> = ({ children }) => {
  const router = useRouter();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLayout;
