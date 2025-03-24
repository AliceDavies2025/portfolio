import { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import { Project } from '../data/projects';

interface ProjectSliderProps {
  project: Project;
  autoSlideInterval?: number;
}

const ProjectSlider: FC<ProjectSliderProps> = ({ project, autoSlideInterval = 4000 }) => {
  const images = project.gallery || [project.imageUrl];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);
    
    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg group">
      {/* Image container with transition effect */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image 
              src={image} 
              alt={`${project.title} - Image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToSlide(index);
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-white w-4'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
