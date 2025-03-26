import { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Footer } from "../../components";
import { getProjectBySlug, getAllProjectSlugs, Project } from "../../data/projects";
import { motion } from 'framer-motion';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const [activeSection, setActiveSection] = useState("projects");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  // Collect all images and remove duplicates
  const allImages = [project.imageUrl, ...(project.gallery || [])];
  const uniqueImages = [...new Set(allImages)];

  return (
    <div className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>{project.title} | Gallery</title>
        <meta name="description" content={`Gallery for ${project.title}`} />
      </Head>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Lightbox for enlarged image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="relative w-full max-w-5xl max-h-[80vh]">
            <Image 
              src={selectedImage} 
              alt={project.title}
              fill
              style={{ objectFit: "contain" }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      
      <section className="pt-32 pb-20 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to all projects
            </Link>
            
            <h1 className="text-2xl md:text-3xl font-light">{project.title}</h1>
          </motion.div>

          {/* Image Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {uniqueImages.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image 
                  src={image} 
                  alt={`${project.title} - Gallery image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllProjectSlugs();
  const paths = slugs.map(slug => ({ params: { slug } }));
  
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);
  
  // If project not found, return 404
  if (!project) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      project
    }
  };
};
