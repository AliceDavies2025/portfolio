import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CaseStudyShowcaseProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const CaseStudyShowcase: FC<CaseStudyShowcaseProps> = ({ id, title, description, imageUrl }) => {
  return (
    <section className="py-16 md:py-20 px-0 bg-white">
      <div className="max-w-[100vw] mx-auto">
        <div className="px-5 md:px-8 lg:px-24 mb-8">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Featured Case Study
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-6"
          >
            <Link 
              href={`/case-study/${id}`}
              className="text-2xl sm:text-3xl font-medium hover:text-amber-800 transition-colors"
            >
              {title}
            </Link>
            
            <Link 
              href={`/case-study/${id}`}
              className="inline-block border-2 border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium"
            >
              Explore Case Study
            </Link>
          </motion.div>
        </div>
        
        {/* Full-width image container */}
        <motion.div 
          className="w-full overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Link href={`/case-study/${id}`} className="block relative w-full aspect-[21/9] group">
            <Image 
              src={imageUrl} 
              alt={title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-8 py-4 rounded-full text-lg">
                View Full Case Study
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;
