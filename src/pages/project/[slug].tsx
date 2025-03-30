import { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Footer } from "../../components";
import { getProjectBySlug, getAllProjectSlugs, Project, projects } from "../../data/projects";
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
  
  // Check if this is the freelance project (last one)
  const isFreelanceProject = project.id === projects.length;

  return (
    <div className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>{project.title} | Gallery</title>
        <meta name="description" content={`Gallery for ${project.title}`} />
      </Head>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Improved Lightbox for better image viewing */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto overflow-auto">
            <Image 
              src={selectedImage} 
              alt={project.title}
              width={1200}
              height={800}
              priority
              quality={100}
              style={{ 
                objectFit: "contain", 
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "85vh"
              }}
              onClick={(e) => e.stopPropagation()}
              unoptimized={true}
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

          {/* Image Gallery Grid - Adjust layout based on project type */}
          <motion.div 
            className={`grid grid-cols-1 ${
              isFreelanceProject ? 'sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12' : 'sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {uniqueImages.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`w-full overflow-hidden cursor-pointer ${
                  isFreelanceProject ? '' : '' // Removed aspect-[4/3] constraint
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full relative flex items-center justify-center">
                  <Image 
                    src={image} 
                    alt={`${project.title} - Gallery image ${index + 1}`}
                    width={800}
                    height={600}
                    style={{ 
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: "contain", 
                      margin: '0 auto' // Center horizontally
                    }}
                    sizes={isFreelanceProject 
                      ? "(max-width: 640px) 100vw, 50vw" 
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    quality={90}
                  />
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
