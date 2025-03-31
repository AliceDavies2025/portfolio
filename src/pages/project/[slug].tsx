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

  // Determine grid layout based on number of images
  const getGridClass = () => {
    // For small screens - always 1 column
    let gridClass = 'grid-cols-1 ';
    
    // For medium screens
    if (uniqueImages.length === 4 || uniqueImages.length === 5) {
      gridClass += 'sm:grid-cols-2 ';
    } else {
      gridClass += 'sm:grid-cols-2 ';
    }
    
    // For large screens
    if (uniqueImages.length === 4) {
      gridClass += 'lg:grid-cols-2';
    } else if (uniqueImages.length === 6) { 
      gridClass += 'lg:grid-cols-3';
    } else if (uniqueImages.length === 5) {
      gridClass += 'lg:grid-cols-3'; // 3 columns for 5 images
    } else if (isFreelanceProject) {
      gridClass += 'lg:grid-cols-2';
    } else {
      gridClass += 'lg:grid-cols-3';
    }
    
    return gridClass;
  };

  // Generate custom grid styling for different image counts
  const gridStyle = () => {
    const baseStyle = {
      margin: '0 auto',
      maxWidth: isFreelanceProject ? '1100px' : '1300px', // Increased container width to accommodate larger images
    } as const;
    
    // For 5 images: use flex layout (3 in first row, 2 centered in second row)
    if (uniqueImages.length === 5) {
      return {
        ...baseStyle,
        display: 'flex' as const,
        flexWrap: 'wrap' as const,
        justifyContent: 'center' as const,
        gap: '2rem',
      };
    }
    
    // For even number of images: use grid with evenly distributed rows
    return {
      ...baseStyle,
      display: 'grid' as const,
      gridTemplateColumns: uniqueImages.length === 4 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: '2.5rem', // Increased gap between larger images
      justifyItems: 'center' as const,
      justifyContent: 'center' as const,
    };
  };

  // Helper to position items in the grid/flex layout
  const getImageStyle = (index: number) => {
    // Increase size for galleries with 4 or 5 images
    const cardSize = uniqueImages.length === 4 || uniqueImages.length === 5 
      ? { maxWidth: '450px', maxHeight: '450px' } 
      : { maxWidth: '350px', maxHeight: '350px' };
    
    // Base style for all images
    const baseStyle = {
      width: '100%',
      ...cardSize,
    };
    
    // Only apply special styling for the 5-image case
    if (uniqueImages.length === 5) {
      // Add margins for flex layout
      return {
        ...baseStyle,
        margin: '1rem',
        // Special styling for second row items
        ...(index >= 3 && {
          margin: index === 3 ? '1rem 0.5rem 1rem 0' : '1rem 0 1rem 0.5rem',
        }),
      };
    }
    
    // For grid layout, no special margins needed
    return baseStyle;
  };

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

          {/* Centered container for the image gallery */}
          <div className="flex justify-center w-full">
            <motion.div 
              className="w-full"
              style={gridStyle()}
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
                  className="aspect-square overflow-hidden cursor-pointer bg-gray-50"
                  style={getImageStyle(index)}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="w-full h-full">
                    <div className="relative w-full h-full">
                      <Image 
                        src={image} 
                        alt={`${project.title} - Gallery image ${index + 1}`}
                        fill
                        style={{ 
                          objectFit: "cover",
                        }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                        quality={90}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
