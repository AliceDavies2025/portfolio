export interface Project {
  id: number;
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  year: string;
  location?: string;
  area?: string;
  type?: string;
  services?: string[];
  duration?: string;
  fullDescription?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Living Room",
    description: "A minimalist approach to comfort",
    slug: "modern-living-room",
    imageUrl: "/images/projects/living-room.jpg",
    year: "2023",
    location: "Nairobi, Kenya",
    area: "120 m²",
    type: "Residential",
    services: ["Interior Design", "Furniture Selection", "Lighting Design"],
    duration: "3 months",
    fullDescription: [
      "This modern living room project embodies our studio's approach to creating spaces that are both visually stunning and highly functional. We worked closely with the client to understand their needs and lifestyle, resulting in a design that perfectly complements how they use the space.",
      "Careful consideration was given to every element - from the selection of materials and finishes to the arrangement of furniture and lighting. The goal was to create a cohesive environment that feels both timeless and contemporary.",
      "Natural light was a key consideration, with large windows allowing sunlight to fill the space throughout the day. The neutral color palette is complemented by carefully selected accent pieces that add character and visual interest."
    ],
    gallery: [
      "/images/projects/details/living-room-1.jpg",
      "/images/projects/details/living-room-2.jpg",
      "/images/projects/details/living-room-3.jpg",
      "/images/projects/details/living-room-4.jpg"
    ]
  },
  {
    id: 2,
    title: "Urban Kitchen",
    description: "Functional elegance for daily life",
    slug: "urban-kitchen",
    imageUrl: "/images/projects/kitchen.jpg",
    year: "2022",
    location: "Mombasa, Kenya",
    area: "85 m²",
    type: "Residential",
    services: ["Kitchen Design", "Material Selection", "Custom Cabinetry"],
    duration: "4 months",
    fullDescription: [
      "This kitchen redesign transformed an outdated space into a modern cooking environment that combines functionality with sophisticated aesthetics. The client, an avid home chef, needed a kitchen that could accommodate serious cooking while also serving as a space for entertaining.",
      "We designed custom cabinetry to maximize storage and incorporated high-end appliances that blend seamlessly with the overall design. The large central island serves as both a prep area and casual dining space, creating a natural gathering point.",
      "The material palette features a combination of natural stone, wood, and matte finishes that create visual interest while maintaining a cohesive look. Careful lighting design ensures the space is well-lit for cooking tasks while also providing ambient options for entertaining."
    ],
    gallery: [
      "/images/projects/details/kitchen-1.jpg",
      "/images/projects/details/kitchen-2.jpg",
      "/images/projects/details/kitchen-3.jpg",
      "/images/projects/details/kitchen-4.jpg"
    ]
  },
  {
    id: 3,
    title: "Serene Bedroom",
    description: "Tranquil retreats for rest",
    slug: "serene-bedroom",
    imageUrl: "/images/projects/bedroom.jpg",
    year: "2023",
    location: "Nakuru, Kenya",
    area: "75 m²",
    type: "Residential",
    services: ["Interior Design", "Custom Furniture", "Textile Selection"],
    duration: "2.5 months",
    fullDescription: [
      "This bedroom project was conceived as a serene retreat from busy urban life. Our client sought a space that would promote relaxation and rest while still reflecting their personal aesthetic.",
      "The design emphasizes calm through a carefully selected color palette of soft neutrals with subtle texture variations. Custom-designed furniture pieces were created to perfectly fit the space and provide both functionality and visual harmony.",
      "Textiles play a crucial role in this design, with layered bedding, drapery, and accent pieces adding depth and comfort. Lighting was designed to be adjustable for different moods and activities, from reading to relaxation."
    ],
    gallery: [
      "/images/projects/details/bedroom-1.jpg",
      "/images/projects/details/bedroom-2.jpg",
      "/images/projects/details/bedroom-3.jpg",
      "/images/projects/details/bedroom-4.jpg"
    ]
  },
  {
    id: 4,
    title: "Work Space",
    description: "Productive environments with style",
    slug: "work-space",
    imageUrl: "/images/projects/workspace.jpg",
    year: "2021",
    location: "Nairobi, Kenya",
    area: "200 m²",
    type: "Commercial",
    services: ["Office Design", "Space Planning", "Furniture Selection", "Acoustic Solutions"],
    duration: "5 months",
    fullDescription: [
      "This workspace project for a creative agency required a balance between collaborative areas and focused work spaces. Our design approach centered on creating an environment that would foster creativity while supporting productivity.",
      "The open floor plan incorporates various work zones, from traditional desks to casual meeting areas and private phone booths. We selected furniture that supports proper ergonomics while maintaining a cohesive aesthetic throughout the space.",
      "Acoustic considerations were paramount, with sound-absorbing materials integrated into the design to manage noise levels. The color scheme combines neutral tones with strategic pops of color that reflect the client's brand identity."
    ],
    gallery: [
      "/images/projects/details/workspace-1.jpg",
      "/images/projects/details/workspace-2.jpg",
      "/images/projects/details/workspace-3.jpg",
      "/images/projects/details/workspace-4.jpg"
    ]
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug);
};
