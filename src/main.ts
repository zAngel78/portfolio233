import './style.css'

// Tipos para los proyectos
interface Project {
  id: number;
  title: string;
  image: string;
  images: string[]; // Galería de imágenes adicionales
  description: string;
  technologies: string[];
  link?: string;
}

// Datos de proyectos con capturas reales
const projects: Project[] = [
  {
    id: 1,
    title: "Airtable",
    image: "/airtable.png",
    images: ["/airtable.png"],
    description: "Plataforma colaborativa que combina bases de datos y hojas de cálculo. Perfecta para gestión de proyectos, CRM y organización de equipos.",
    technologies: ["Database", "Collaboration", "API", "Automation"],
    link: "https://www.airtable.com"
  },
  {
    id: 2,
    title: "Allbirds",
    image: "/allbirds.png",
    images: ["/allbirds.png"],
    description: "Tienda online de calzado sustentable. E-commerce enfocado en productos ecológicos con diseño minimalista y moderno.",
    technologies: ["E-commerce", "Shopify", "Sustainable", "Fashion"],
    link: "https://www.allbirds.com"
  },
  {
    id: 3,
    title: "Bombas Socks",
    image: "/bombas-socks.png",
    images: ["/bombas-socks.png"],
    description: "Marca de calcetines premium con misión social. Por cada compra, donan un par a personas necesitadas.",
    technologies: ["E-commerce", "Social Impact", "Retail", "Fashion"],
    link: "https://www.bombas.com"
  },
  {
    id: 4,
    title: "Brooklinen",
    image: "/brooklinen.png",
    images: ["/brooklinen.png"],
    description: "Tienda de ropa de cama de lujo a precios accesibles. Diseño elegante y experiencia de compra fluida.",
    technologies: ["E-commerce", "Home Goods", "Luxury", "Retail"],
    link: "https://www.brooklinen.com"
  },
  {
    id: 5,
    title: "Canny",
    image: "/canny.png",
    images: ["/canny.png"],
    description: "Plataforma de gestión de feedback de usuarios. Centraliza solicitudes de características, prioriza ideas y mantiene informados a los clientes sobre el roadmap del producto.",
    technologies: ["SaaS", "Feedback", "Product Management", "Customer Insights"],
    link: "https://canny.io"
  },
  {
    id: 6,
    title: "Chairish",
    image: "/chairish.png",
    images: ["/chairish.png"],
    description: "Marketplace de muebles vintage y decoración curada. Plataforma para comprar y vender piezas únicas de diseño.",
    technologies: ["Marketplace", "Furniture", "Vintage", "Design"],
    link: "https://www.chairish.com"
  },
  {
    id: 7,
    title: "Chubbies Shorts",
    image: "/chubbies-shorts.png",
    images: ["/chubbies-shorts.png"],
    description: "Marca de ropa casual masculina con personalidad. E-commerce enfocado en shorts y ropa de verano con diseño divertido.",
    technologies: ["E-commerce", "Fashion", "Apparel", "Lifestyle"],
    link: "https://www.chubbiesshorts.com"
  },
  {
    id: 8,
    title: "ClickUp",
    image: "/clickup.png",
    images: ["/clickup.png"],
    description: "Plataforma todo-en-uno de productividad. Gestión de proyectos, tareas, documentos y colaboración en equipo.",
    technologies: ["SaaS", "Project Management", "Productivity", "Collaboration"],
    link: "https://www.clickup.com"
  },
  {
    id: 9,
    title: "Coda",
    image: "/coda-saas.png",
    images: ["/coda-saas.png"],
    description: "Espacio de trabajo colaborativo que combina documentos, hojas de cálculo y aplicaciones. Flexible y potente.",
    technologies: ["SaaS", "Collaboration", "Documents", "Workspace"],
    link: "https://www.coda.io"
  },
  {
    id: 10,
    title: "Kotn",
    image: "/kotn.png",
    images: ["/kotn.png"],
    description: "Marca de ropa básica sustentable. E-commerce de moda ética con transparencia en producción.",
    technologies: ["E-commerce", "Sustainable", "Fashion", "Ethical"],
    link: "https://www.kotn.com"
  },
  {
    id: 11,
    title: "Linear",
    image: "/linear-app.png",
    images: ["/linear-app.png"],
    description: "Herramienta de gestión de issues para equipos de desarrollo. Diseño minimalista y flujo de trabajo optimizado.",
    technologies: ["SaaS", "Issue Tracking", "Development", "Agile"],
    link: "https://www.linear.app"
  },
  {
    id: 12,
    title: "Loom",
    image: "/loom.png",
    images: ["/loom.png"],
    description: "Plataforma de video mensajería y grabación de pantalla. Comunicación asíncrona para equipos remotos.",
    technologies: ["SaaS", "Video", "Communication", "Remote Work"],
    link: "https://www.loom.com"
  },
  {
    id: 13,
    title: "Riverside",
    image: "/riverside.png",
    images: ["/riverside.png"],
    description: "Estudio de grabación virtual para podcasts y videos. Graba contenido de alta calidad con múltiples participantes remotos en 4K y audio sin comprimir.",
    technologies: ["SaaS", "Podcast", "Video Recording", "Remote Production"],
    link: "https://riverside.fm"
  },
  {
    id: 14,
    title: "Openly Store",
    image: "/openly-store.png",
    images: ["/openly-store.png"],
    description: "Tienda online con enfoque en transparencia y autenticidad. E-commerce moderno y directo.",
    technologies: ["E-commerce", "Retail", "Transparent", "Modern"],
    link: "https://www.openly.com"
  },
  {
    id: 15,
    title: "Pitch",
    image: "/pitch.png",
    images: ["/pitch.png"],
    description: "Plataforma colaborativa para crear presentaciones. Diseño moderno y trabajo en equipo en tiempo real.",
    technologies: ["SaaS", "Presentations", "Collaboration", "Design"],
    link: "https://www.pitch.com"
  },
  {
    id: 16,
    title: "Poshmark",
    image: "/poshmark.png",
    images: ["/poshmark.png"],
    description: "Marketplace social de moda. Compra y vende ropa, zapatos y accesorios de segunda mano.",
    technologies: ["Marketplace", "Fashion", "Social", "Resale"],
    link: "https://www.poshmark.com"
  },
  {
    id: 17,
    title: "Superhuman",
    image: "/superhuman.png",
    images: ["/superhuman.png"],
    description: "Cliente de email ultra rápido. Experiencia de correo optimizada para productividad extrema.",
    technologies: ["SaaS", "Email", "Productivity", "Speed"],
    link: "https://www.superhuman.com"
  },
  {
    id: 18,
    title: "Tentree",
    image: "/tentree.png",
    images: ["/tentree.png"],
    description: "Marca de ropa sustentable que planta 10 árboles por cada compra. E-commerce con impacto ambiental positivo.",
    technologies: ["E-commerce", "Sustainable", "Environmental", "Fashion"],
    link: "https://www.tentree.com"
  },
  {
    id: 19,
    title: "Webflow",
    image: "/webflow.png",
    images: ["/webflow.png"],
    description: "Plataforma de diseño y desarrollo web sin código. Crea sitios web profesionales visualmente.",
    technologies: ["SaaS", "No-Code", "Web Design", "CMS"],
    link: "https://www.webflow.com"
  },
  {
    id: 20,
    title: "GatnivE",
    image: "/gatnive.png",
    images: ["/gatnive.png"],
    description: "Tienda online de videojuegos y entretenimiento digital. Venta de tarjetas de regalo, suscripciones gaming y contenido para plataformas como Fortnite, Roblox, Spotify y PlayStation.",
    technologies: ["E-commerce", "Gaming", "Digital Store", "Gift Cards"],
    link: "https://gatnive.com"
  }
];

// Estado de la aplicación
let showWelcome = true;
let selectedProject: Project | null = null;

// Crear pantalla de bienvenida
function createWelcomeScreen(): string {
  return `
    <div class="welcome-screen" id="welcomeScreen">
      <div class="welcome-content">
        <h1 class="welcome-text-en">Welcome to my portfolio</h1>
        <h2 class="welcome-text-es">Te presento mi portafolio</h2>
        <h3 class="welcome-name">Soy Angel Vergara</h3>
        <button class="welcome-btn" id="welcomeBtn">
          <span>VIEW MY WORK</span>
          <span>VER MI TRABAJO</span>
        </button>
      </div>
    </div>
  `;
}

// Crear tarjeta de proyecto
function createProjectCard(project: Project): string {
  return `
    <div class="project-card" data-project-id="${project.id}">
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <div class="project-overlay">
        <h3 class="project-title">${project.title}</h3>
      </div>
    </div>
  `;
}

// Crear galería de proyectos
function createProjectGallery(): string {
  return `
    <div class="gallery-container" id="galleryContainer">
      <div class="projects-grid">
        ${projects.map(project => createProjectCard(project)).join('')}
      </div>
    </div>
  `;
}

// Crear botón flotante de contacto (se muestra siempre)
function createContactButton(): string {
  return `
    <button class="contact-btn" id="contactBtn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </button>
  `;
}

// Crear modal de detalles
function createModal(project: Project): string {
  return `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal-content">
        <button class="modal-close" id="modalClose">&times;</button>
        
        <div class="modal-body">
          <div class="modal-image-container">
            <img src="${project.image}" alt="${project.title}" class="modal-image" />
          </div>
          
          <div class="modal-info">
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-description">${project.description}</p>
            
            <div class="modal-technologies">
              <h3 class="tech-title">Technologies Used</h3>
              <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag-large">${tech}</span>`).join('')}
              </div>
            </div>
            
            ${project.link ? `<a href="${project.link}" class="project-link" target="_blank">VIEW PROJECT</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Crear modal de contacto
function createContactModal(): string {
  return `
    <div class="modal-overlay" id="contactModalOverlay">
      <div class="modal-content contact-modal-content">
        <button class="modal-close" id="contactModalClose">&times;</button>
        
        <div class="contact-modal-body">
          <h2 class="contact-title">LET'S WORK TOGETHER</h2>
          <p class="contact-subtitle">¿Tienes un proyecto en mente? Contáctame</p>
          
          <div class="contact-info">
            <div class="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <span class="contact-label">Email</span>
                <a href="mailto:angel@example.com" class="contact-link">angel@example.com</a>
              </div>
            </div>
            
            <div class="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <div>
                <span class="contact-label">LinkedIn</span>
                <a href="https://linkedin.com/in/angelvergara" target="_blank" class="contact-link">linkedin.com/in/angelvergara</a>
              </div>
            </div>
            
            <div class="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <div>
                <span class="contact-label">GitHub</span>
                <a href="https://github.com/angelvergara" target="_blank" class="contact-link">github.com/angelvergara</a>
              </div>
            </div>
            
            <div class="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              <div>
                <span class="contact-label">Twitter/X</span>
                <a href="https://twitter.com/angelvergara" target="_blank" class="contact-link">@angelvergara</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Renderizar la aplicación
function render() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  if (showWelcome) {
    app.innerHTML = createWelcomeScreen() + createProjectGallery() + createContactButton();
    
    const welcomeScreen = document.getElementById('welcomeScreen');
    const galleryContainer = document.getElementById('galleryContainer');
    
    // Ocultar galería inicialmente
    if (galleryContainer) {
      galleryContainer.style.opacity = '0';
      galleryContainer.style.pointerEvents = 'none';
    }
    
    let scrollProgress = 0;
    const scrollThreshold = 300; // Píxeles para completar la transición
    
    // Manejar scroll con efecto 3D
    const handleScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
      
      let delta = 0;
      if (e instanceof WheelEvent) {
        delta = e.deltaY;
      } else if (e instanceof TouchEvent && e.touches.length > 0) {
        // Manejar touch para móviles
        const touch = e.touches[0];
        const prevTouch = (e.target as any).prevTouch || touch.clientY;
        delta = prevTouch - touch.clientY;
        (e.target as any).prevTouch = touch.clientY;
      }
      
      scrollProgress += delta * 0.5;
      scrollProgress = Math.max(0, Math.min(scrollThreshold, scrollProgress));
      
      const progress = scrollProgress / scrollThreshold;
      
      if (welcomeScreen && galleryContainer) {
        // Efecto 3D en la pantalla de bienvenida
        const rotateX = progress * 60; // Rotación en X
        const scale = 1 - progress * 0.3; // Escala
        const translateZ = -progress * 500; // Profundidad
        const opacity = 1 - progress;
        
        welcomeScreen.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          scale(${scale})
          translateZ(${translateZ}px)
        `;
        welcomeScreen.style.opacity = `${opacity}`;
        
        // Revelar el portfolio desde abajo
        galleryContainer.style.opacity = `${progress}`;
        galleryContainer.style.transform = `translateY(${(1 - progress) * 50}px)`;
        
        // Si llegamos al final, completar transición
        if (progress >= 1) {
          welcomeScreen.style.display = 'none';
          galleryContainer.style.pointerEvents = 'auto';
          showWelcome = false;
          
          // Remover listeners
          window.removeEventListener('wheel', handleScroll);
          window.removeEventListener('touchmove', handleScroll);
          
          // Agregar event listeners a las tarjetas
          const projectCards = document.querySelectorAll('.project-card');
          projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
              const projectId = parseInt((e.currentTarget as HTMLElement).dataset.projectId || '0');
              const project = projects.find(p => p.id === projectId);
              if (project) {
                selectedProject = project;
                showModal(project);
              }
            });
          });

          // Mostrar tip de onboarding
          showOnboardingTip();

        }
      }
    };
    
    // Event listener para el botón (alternativa rápida)
    const welcomeBtn = document.getElementById('welcomeBtn');
    welcomeBtn?.addEventListener('click', () => {
      // Animación rápida cuando se hace click en el botón
      let quickProgress = scrollProgress;
      const quickScroll = setInterval(() => {
        quickProgress += 15;
        scrollProgress = quickProgress;
        
        if (quickProgress >= scrollThreshold) {
          clearInterval(quickScroll);
        }
        
        handleScroll(new WheelEvent('wheel', { deltaY: 15 }));
      }, 16);
    });
    
    // Agregar event listeners para scroll
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });
    
    // Event listener para el botón de contacto
    const contactBtn = document.getElementById('contactBtn');
    contactBtn?.addEventListener('click', () => {
      showContactModal();
    });
    
  } else {
    app.innerHTML = createProjectGallery() + createContactButton();

    // Agregar event listeners a las tarjetas
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const projectId = parseInt((e.currentTarget as HTMLElement).dataset.projectId || '0');
        const project = projects.find(p => p.id === projectId);
        if (project) {
          selectedProject = project;
          showModal(project);
        }
      });
    });

    // Agregar event listener al botón de contacto
    const contactBtn = document.getElementById('contactBtn');
    contactBtn?.addEventListener('click', () => {
      showContactModal();
    });

    // Mostrar tip de onboarding
    showOnboardingTip();
  }
}

// Mostrar modal
function showModal(project: Project) {
  const modalHTML = createModal(project);
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  
  // Mostrar modal con animación
  setTimeout(() => {
    modalOverlay?.classList.add('active');
  }, 10);
  
  // Cerrar modal
  const closeModal = () => {
    modalOverlay?.classList.remove('active');
    setTimeout(() => {
      modalOverlay?.remove();
    }, 300);
  };
  
  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Cerrar con tecla Escape
  document.addEventListener('keydown', function handleKeyboard(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleKeyboard);
    }
  });
}

// Mostrar modal de contacto
function showContactModal() {
  const modalHTML = createContactModal();
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const modalOverlay = document.getElementById('contactModalOverlay');
  const modalClose = document.getElementById('contactModalClose');
  
  // Mostrar modal con animación
  setTimeout(() => {
    modalOverlay?.classList.add('active');
  }, 10);
  
  // Cerrar modal
  const closeModal = () => {
    modalOverlay?.classList.remove('active');
    setTimeout(() => {
      modalOverlay?.remove();
    }, 300);
  };
  
  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Cerrar con tecla Escape
  document.addEventListener('keydown', function handleKeyboard(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleKeyboard);
    }
  });
}

// Mostrar onboarding/tip para nuevos usuarios
function showOnboardingTip() {
  // Verificar si ya vio el onboarding
  const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
  if (hasSeenOnboarding === 'true') {
    return;
  }

  // Esperar un poco para que el usuario vea la galería
  setTimeout(() => {
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length === 0) return;

    // Seleccionar un proyecto al azar (o el tercero para que sea visible)
    const randomIndex = Math.min(2, projectCards.length - 1);
    const selectedCard = projectCards[randomIndex] as HTMLElement;

    // Agregar la clase highlighted
    selectedCard.classList.add('highlighted');
    selectedCard.style.position = 'relative';

    // Crear el tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'onboarding-tooltip';
    tooltip.textContent = '¿Ya viste este proyecto?';
    selectedCard.appendChild(tooltip);

    // Función para remover el onboarding
    const removeOnboarding = () => {
      selectedCard.classList.remove('highlighted');
      tooltip.remove();
      localStorage.setItem('hasSeenOnboarding', 'true');

      // Remover event listeners
      projectCards.forEach(card => {
        card.removeEventListener('click', removeOnboarding);
      });
    };

    // Remover después de 6 segundos
    const timeout = setTimeout(removeOnboarding, 6000);

    // Remover al hacer click en cualquier proyecto
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        clearTimeout(timeout);
        removeOnboarding();
      });
    });

  }, 1000);
}

// Iniciar la aplicación
render();
