import Link from "next/link";
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Project } from "../data/projects";
import ProjectSlider from "./ProjectSlider";

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 md:py-20 px-5 md:px-8 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-item" // Removed 'group' class that might trigger hover effects
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={`/project/${project.slug}`} className="block overflow-hidden">
                <ProjectSlider project={project} disableHoverEffects={true} />
              </Link>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <Link 
                    href={`/project/${project.slug}`}
                    className="block text-lg sm:text-xl font-medium hover:underline"
                  >
                    {project.title}
                  </Link>
                  <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
                </div>
                <span className="text-xs sm:text-sm text-gray-400">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-10 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            href="/projects"
            className="border border-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-black hover:text-white transition-colors inline-block text-sm sm:text-base"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
