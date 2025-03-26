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
    title: "4 Bedroom Family Home",
    description: "",
    slug: "4-bedroom-family-home",
    imageUrl: "/11/11.5.jpg",
    year: "",
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
      "/11/11.1.jpg",
      "/11/11.2.jpg",
      "/11/11.3.jpg",
      "/11/11.4.jpg",
      "/11/11.5.jpg",
      "/11/11.6.jpg"
    ]
  },
  {
    id: 2,
    title: "Sea-side Holiday Villa",
    description: "",
    slug: "sea-side-holiday-villa",
    imageUrl: "/12/12.6.jpg",
    year: "",
    location: "",
    area: "",
    type: "",
    services: [""],
    duration: "",
    fullDescription: [
      "This kitchen redesign transformed an outdated space into a modern cooking environment that combines functionality with sophisticated aesthetics. The client, an avid home chef, needed a kitchen that could accommodate serious cooking while also serving as a space for entertaining.",
      "We designed custom cabinetry to maximize storage and incorporated high-end appliances that blend seamlessly with the overall design. The large central island serves as both a prep area and casual dining space, creating a natural gathering point.",
      "The material palette features a combination of natural stone, wood, and matte finishes that create visual interest while maintaining a cohesive look. Careful lighting design ensures the space is well-lit for cooking tasks while also providing ambient options for entertaining."
    ],
    gallery: [
      "/12/12.1.jpg",
      "/12/12.2.jpg",
      "/12/12.3.jpg",
      "/12/12.4.jpg",
      "/12/12.5.jpg",
      "/12/12.6.jpg"
    ]
  },
  {
    id: 3,
    title: "Loft Design Concept",
    description: "",
    slug: "loft-design-concept",
    imageUrl: "/13/13.6.jpg",
    year: "",
    location: "",
    area: "",
    type: "",
    services: [""],
    duration: "",
    fullDescription: [
      "",
    ],
    gallery: [
      "/13/13.1.jpg",
      "/13/13.2.jpg",
      "/13/13.3.jpg",
      "/13/13.4.jpg",
      "/13/13.5.jpg",
      "/13/13.6.jpg"
    ]
  },
  {
    id: 4,
    title: "Modern-Contemporary Apartment",
    description: "",
    slug: "modern-contemporary-apartment",
    imageUrl: "/14/14.1.png",
    year: "",
    location: "",
    area: "",
    type: "",
    services: [""],
    duration: "",
    fullDescription: [
      "",
    ],
    gallery: [
      "/14/14.1.png",
      "/14/14.2.png",
      "/14/14.3.png",
      "/14/14.4.png",
      "/14/14.5.png",
      "/14/14.6.png",
      "/14/14.7.png",
      "/14/14.8.png",
    ]
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug);
};
