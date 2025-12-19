export interface Project {
  id: number;
  title: string;
  name?: string;
  image: string;
  images: string[];
  description: string;
  technologies: string[];
  link?: string;
  category?: string;
  year?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Airtable",
    name: "Airtable",
    image: "/airtable.png",
    images: ["/airtable.png"],
    description: "Plataforma colaborativa que combina bases de datos y hojas de cálculo. Perfecta para gestión de proyectos, CRM y organización de equipos.",
    technologies: ["Database", "Collaboration", "API", "Automation"],
    link: "https://www.airtable.com",
    category: "Platform",
    year: "2024",
    role: "Full Stack Development"
  },
  {
    id: 2,
    title: "Allbirds",
    name: "Allbirds",
    image: "/allbirds.png",
    images: ["/allbirds.png"],
    description: "Tienda online de calzado sustentable. E-commerce enfocado en productos ecológicos con diseño minimalista y moderno.",
    technologies: ["E-commerce", "Shopify", "React", "Sustainable"],
    link: "https://www.allbirds.com",
    category: "E-commerce",
    year: "2024",
    role: "Frontend Development"
  },
  {
    id: 3,
    title: "Bombas Socks",
    name: "Bombas Socks",
    image: "/bombas-socks.png",
    images: ["/bombas-socks.png"],
    description: "Marca de calcetines premium con misión social. Por cada compra, donan un par a personas necesitadas.",
    technologies: ["E-commerce", "Social Impact", "Retail", "Fashion"],
    link: "https://www.bombas.com",
    category: "E-commerce",
    year: "2024"
  },
  {
    id: 4,
    title: "Brooklinen",
    name: "Brooklinen",
    image: "/brooklinen.png",
    images: ["/brooklinen.png"],
    description: "Tienda de ropa de cama de lujo a precios accesibles. Diseño elegante y experiencia de compra fluida.",
    technologies: ["E-commerce", "Home Goods", "Luxury", "Retail"],
    link: "https://www.brooklinen.com",
    category: "E-commerce",
    year: "2023"
  },
  {
    id: 5,
    title: "Canny",
    name: "Canny",
    image: "/canny.png",
    images: ["/canny.png"],
    description: "Plataforma de gestión de feedback de usuarios. Centraliza solicitudes de características, prioriza ideas y mantiene informados a los clientes sobre el roadmap del producto.",
    technologies: ["SaaS", "Feedback", "Product Management", "Customer Insights"],
    link: "https://canny.io",
    category: "Platform",
    year: "2024"
  },
  {
    id: 6,
    title: "Chairish",
    name: "Chairish",
    image: "/chairish.png",
    images: ["/chairish.png"],
    description: "Marketplace de muebles vintage y decoración curada. Plataforma para comprar y vender piezas únicas de diseño.",
    technologies: ["Marketplace", "Furniture", "Vintage", "Design"],
    link: "https://www.chairish.com",
    category: "E-commerce",
    year: "2023"
  },
  {
    id: 7,
    title: "Chubbies Shorts",
    name: "Chubbies Shorts",
    image: "/chubbies-shorts.png",
    images: ["/chubbies-shorts.png"],
    description: "Marca de ropa casual masculina con personalidad. E-commerce enfocado en shorts y ropa de verano con diseño divertido.",
    technologies: ["E-commerce", "Fashion", "Apparel", "Lifestyle"],
    link: "https://www.chubbiesshorts.com",
    category: "E-commerce",
    year: "2024"
  },
  {
    id: 8,
    title: "ClickUp",
    name: "ClickUp",
    image: "/clickup.png",
    images: ["/clickup.png"],
    description: "Plataforma todo-en-uno de productividad. Gestión de proyectos, tareas, documentos y colaboración en equipo.",
    technologies: ["SaaS", "Project Management", "Productivity", "Collaboration"],
    link: "https://www.clickup.com",
    category: "Platform",
    year: "2024"
  },
  {
    id: 9,
    title: "Coda",
    name: "Coda",
    image: "/coda-saas.png",
    images: ["/coda-saas.png"],
    description: "Espacio de trabajo colaborativo que combina documentos, hojas de cálculo y aplicaciones. Flexible y potente.",
    technologies: ["SaaS", "Collaboration", "Documents", "Workspace"],
    link: "https://www.coda.io",
    category: "Platform",
    year: "2024"
  },
  {
    id: 10,
    title: "Kotn",
    name: "Kotn",
    image: "/kotn.png",
    images: ["/kotn.png"],
    description: "Marca de ropa básica sustentable. E-commerce de moda ética con transparencia en producción.",
    technologies: ["E-commerce", "Sustainable", "Fashion", "Ethical"],
    link: "https://www.kotn.com",
    category: "E-commerce",
    year: "2023"
  },
  {
    id: 11,
    title: "Linear",
    name: "Linear",
    image: "/linear-app.png",
    images: ["/linear-app.png"],
    description: "Herramienta de gestión de issues para equipos de desarrollo. Diseño minimalista y flujo de trabajo optimizado.",
    technologies: ["SaaS", "Issue Tracking", "Development", "Agile"],
    link: "https://www.linear.app",
    category: "Tool",
    year: "2024",
    role: "UI/UX Design"
  },
  {
    id: 12,
    title: "Loom",
    name: "Loom",
    image: "/loom.png",
    images: ["/loom.png"],
    description: "Plataforma de video mensajería y grabación de pantalla. Comunicación asíncrona para equipos remotos.",
    technologies: ["SaaS", "Video", "Communication", "Remote Work"],
    link: "https://www.loom.com",
    category: "Platform",
    year: "2024"
  },
  {
    id: 13,
    title: "Riverside",
    name: "Riverside",
    image: "/riverside.png",
    images: ["/riverside.png"],
    description: "Estudio de grabación virtual para podcasts y videos. Graba contenido de alta calidad con múltiples participantes remotos en 4K y audio sin comprimir.",
    technologies: ["SaaS", "Podcast", "Video Recording", "Remote Production"],
    link: "https://riverside.fm",
    category: "Platform",
    year: "2024"
  },
  {
    id: 14,
    title: "Openly Store",
    name: "Openly Store",
    image: "/openly-store.png",
    images: ["/openly-store.png"],
    description: "Tienda online con enfoque en transparencia y autenticidad. E-commerce moderno y directo.",
    technologies: ["E-commerce", "Retail", "Transparent", "Modern"],
    link: "https://www.openly.com",
    category: "E-commerce",
    year: "2024"
  },
  {
    id: 15,
    title: "Pitch",
    name: "Pitch",
    image: "/pitch.png",
    images: ["/pitch.png"],
    description: "Plataforma colaborativa para crear presentaciones. Diseño moderno y trabajo en equipo en tiempo real.",
    technologies: ["SaaS", "Presentations", "Collaboration", "Design"],
    link: "https://www.pitch.com",
    category: "Platform",
    year: "2024"
  },
  {
    id: 16,
    title: "Poshmark",
    name: "Poshmark",
    image: "/poshmark.png",
    images: ["/poshmark.png"],
    description: "Marketplace social de moda. Compra y vende ropa, zapatos y accesorios de segunda mano.",
    technologies: ["Marketplace", "Fashion", "Social", "Resale"],
    link: "https://www.poshmark.com",
    category: "E-commerce",
    year: "2023"
  },
  {
    id: 17,
    title: "Superhuman",
    name: "Superhuman",
    image: "/superhuman.png",
    images: ["/superhuman.png"],
    description: "Cliente de email ultra rápido. Experiencia de correo optimizada para productividad extrema.",
    technologies: ["SaaS", "Email", "Productivity", "Speed"],
    link: "https://www.superhuman.com",
    category: "Tool",
    year: "2024"
  },
  {
    id: 18,
    title: "Tentree",
    name: "Tentree",
    image: "/tentree.png",
    images: ["/tentree.png"],
    description: "Marca de ropa sustentable que planta 10 árboles por cada compra. E-commerce con impacto ambiental positivo.",
    technologies: ["E-commerce", "Sustainable", "Environmental", "Fashion"],
    link: "https://www.tentree.com",
    category: "E-commerce",
    year: "2024"
  },
  {
    id: 19,
    title: "Webflow",
    name: "Webflow",
    image: "/webflow.png",
    images: ["/webflow.png"],
    description: "Plataforma de diseño y desarrollo web sin código. Crea sitios web profesionales visualmente.",
    technologies: ["SaaS", "No-Code", "Web Design", "CMS"],
    link: "https://www.webflow.com",
    category: "Platform",
    year: "2024",
    role: "Web Design & Development"
  },
  {
    id: 20,
    title: "GatnivE",
    name: "GatnivE",
    image: "/gatnive.png",
    images: ["/gatnive.png"],
    description: "Tienda online de videojuegos y entretenimiento digital. Venta de tarjetas de regalo, suscripciones gaming y contenido para plataformas como Fortnite, Roblox, Spotify y PlayStation.",
    technologies: ["E-commerce", "Gaming", "Digital Store", "Gift Cards"],
    link: "https://gatnive.com",
    category: "E-commerce",
    year: "2024"
  }
];
