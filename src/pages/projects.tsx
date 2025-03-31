import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Footer, ProjectSlider, CaseStudyShowcase } from "../components";
import { projects } from "../data/projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState("projects");
  
  return (
    <div className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>Projects | Kiarie Interior Design Portfolio</title>
        <meta name="description" content="Browse the collection of interior design projects" />
      </Head>

      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />
      
      <section className="pt-32 pb-20 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-12 md:mb-16">
            Explore my portfolio of carefully crafted interior spaces that embody my philosophy of 
            blending aesthetics with functionality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 justify-items-center">
            {projects.map((project, index) => {
              // Check if this is the last project (Freelance project)
              const isLastProject = index === projects.length - 1;
              
              return (
                <div 
                  key={project.id} 
                  className={`project-card ${isLastProject ? 'md:col-span-2' : ''}`}
                  style={{ 
                    maxWidth: '350px',
                    width: '100%'
                  }}
                >
                  {/* The project card container - make entire card clickable */}
                  <Link href={`/project/${project.slug}`} className="block cursor-pointer group">
                    {/* Slider with project images - fixed dimensions */}
                    <div className="relative overflow-hidden aspect-square">
                      <ProjectSlider project={project} disableHoverEffects={true} />
                    </div>
                    
                    {/* Project info with fixed height and text constraints */}
                    <div className="mt-4 h-[80px] flex justify-between items-start">
                      <div className="overflow-hidden">
                        <h3 className="block text-lg font-medium group-hover:text-amber-800 transition-colors truncate">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                      </div>
                      <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">{project.year}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      
      {/* Full-width Case Study Showcase */}
      <CaseStudyShowcase 
        id="lightly"
        title="Lightly"
        description=""
        imageUrl="/images/lightly.png"
      />
      
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mt-10 text-center">
            <h2 className="text-3xl font-light mb-8">Looking to start a project?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always eager to take on new challenges and bring your vision to life. 
              Contact us to discuss how we can transform your space.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
