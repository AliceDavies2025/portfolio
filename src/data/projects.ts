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

    ],
    gallery: [
      "/11/11.1.jpg",
      "/11/11.21.jpg",
      "/11/11.3.jpg",
      "/11/11.4.jpg",
      "/11/11.51.jpg",
      "/11/11.6.jpg"
    ]
  },
  {
    id: 2,
    title: "Sea-side Holiday Villa",
    description: "",
    slug: "sea-side-holiday-villa",
    imageUrl: "/12/1.2.png",
    year: "",
    location: "",
    area: "",
    type: "",
    services: [""],
    duration: "",
    fullDescription: [

    ],
    gallery: [
      "/12/12.1.jpg",
      "/12/12.21.jpg",
      "/12/12.3.jpg",
      "/12/1.1.png",
      "/12/12.51.jpg",
      "/12/1.2.png"
    ]
  },
  {
    id: 3,
    title: "Hotel Renovation",
    description: "",
    slug: "hotel-renovation",
    imageUrl: "/13/DSC_5770.jpg",
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
      "/13/DSC_5192 (1).jpg",
      "/13/DSC_5616.jpg",
      "/13/DSC_5657-2.jpg",
      "/13/DSC_5770.jpg",
      "/13/room 24 (1).png",
      "/13/DSC_5664.jpg"

    ]
  },
  {
    id: 4,
    title: "Modern-Contemporary Apartment",
    description: "",
    slug: "modern-contemporary-apartment",
    imageUrl: "/14/2.1.png",
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
      "/14/2.1.png",
      "/14/2.2.png",
      "/14/2.3.png",
      "/14/2.4.png"
 
    ]
  },
  {
    id: 5,
    title: "Freelance Project",
    description: "",
    slug: "freelance-project",
    imageUrl: "/15/15.png",
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
      "/15/11 (1).png",
      "/15/12 (1).png",
      "/15/13 (1).png",
      "/15/14 (1).png",
      "/15/15.png",

    ]
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug);
};
