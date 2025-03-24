import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: FC<LogoProps> = ({ withText = true, size = 'md', className = '' }) => {
  const sizes = {
    sm: {
      logoSize: 'text-2xl',
      textSize: 'text-xs',
      spacing: 'tracking-widest'
    },
    md: {
      logoSize: 'text-3xl',
      textSize: 'text-sm',
      spacing: 'tracking-widest'
    },
    lg: {
      logoSize: 'text-5xl',
      textSize: 'text-lg',
      spacing: 'tracking-widest'
    }
  };

  const { logoSize, textSize, spacing } = sizes[size];

  return (
    <Link href="/" passHref className={`group inline-flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative"
      >
        {/* Luxurious monogram container */}
        <div className={`
          ${logoSize} 
          font-serif
          bg-gradient-to-br from-amber-600 via-gold-500 to-amber-200
          dark:from-amber-700 dark:via-amber-500 dark:to-amber-300
          text-transparent bg-clip-text
          relative overflow-visible
        `}>
          <span className="block">IK</span>
          
          {/* Subtle shine effect */}
          <div className="
            absolute inset-0 
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            opacity-0 group-hover:opacity-30 
            transition-opacity duration-300
            -skew-x-12
          "/>
        </div>

        {/* Decorative underline */}
        <div className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          h-px w-1/3 
          bg-gradient-to-r from-transparent via-amber-500 to-transparent
          opacity-70
          group-hover:w-2/3
          transition-all duration-300
        "/>
      </motion.div>

      {withText && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`${textSize} ${spacing} font-sans font-light uppercase text-neutral-600 dark:text-amber-100/70`}
        >
          Irene Kiarie
          <span className="
            block text-[0.6em] mt-0.5
            font-normal tracking-normal
            text-neutral-400 dark:text-amber-100/50
          ">
            Interior Designer
          </span>
        </motion.span>
      )}
    </Link>
  );
};

export default Logo;