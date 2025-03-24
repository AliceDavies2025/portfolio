import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Footer, ProjectSlider } from "../components";
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
  const [filter, setFilter] = useState("all"); // For potential filtering

  return (
    <div className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>Projects | Kiarie Interior Design Portfolio</title>
        <meta name="description" content="Browse our collection of interior design projects" />
      </Head>

      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />
      
      <section className="pt-32 pb-20 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-12 md:mb-16">
            Explore our portfolio of carefully crafted interior spaces that embody our philosophy of 
            blending aesthetics with functionality.
          </p>

          {/* Optional Project Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "all" ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter("residential")}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "residential" ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Residential
            </button>
            <button 
              onClick={() => setFilter("commercial")}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "commercial" ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Commercial
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {projects
              .filter(project => filter === "all" || project.type?.toLowerCase() === filter)
              .map((project) => (
                <div key={project.id} className="project-card">
                  {/* The project card container */}
                  <div className="cursor-pointer">
                    {/* Slider with project images */}
                    <Link href={`/project/${project.slug}`}>
                      <ProjectSlider project={project} />
                    </Link>
                    
                    {/* Project info with clickable title */}
                    <div className="mt-4 flex justify-between items-start">
                      <div>
                        <Link 
                          href={`/project/${project.slug}`}
                          className="block text-xl md:text-2xl font-medium hover:underline"
                        >
                          {project.title}
                        </Link>
                        <p className="text-gray-600">{project.description}</p>
                        <p className="text-gray-500 text-sm mt-1">{project.type}</p>
                      </div>
                      <span className="text-sm text-gray-400">{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="mt-20 border-t pt-16">
            <h2 className="text-3xl font-light mb-8">Looking to start a project?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
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
