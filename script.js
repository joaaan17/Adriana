// Font loading handler para evitar FOUT (Flash of Unstyled Text)
if ('fonts' in document) {
  Promise.all([
    document.fonts.load('400 64px Lora'),
    document.fonts.load('italic 400 64px Lora'),
    document.fonts.load('600 64px Lora')
  ]).then(() => {
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading) {
      heroHeading.classList.add('fonts-loaded');
      // Activar la animación de typing
      setTimeout(() => {
        heroHeading.classList.add('animate');
      }, 100);
    }
  }).catch(() => {
    // Fallback: mostrar el texto aunque las fuentes no se hayan cargado
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading) {
      heroHeading.classList.add('fonts-loaded');
      heroHeading.classList.add('animate');
    }
  });

  // Timeout de seguridad: mostrar el texto después de 1 segundo aunque las fuentes no se hayan cargado
  setTimeout(() => {
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading && !heroHeading.classList.contains('fonts-loaded')) {
      heroHeading.classList.add('fonts-loaded');
      heroHeading.classList.add('animate');
    }
  }, 1000);
} else {
  // Fallback para navegadores sin Font Loading API
  window.addEventListener('load', () => {
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading) {
      heroHeading.classList.add('fonts-loaded');
      heroHeading.classList.add('animate');
    }
  });
}

// Navbar scroll behavior
const navbarContainer = document.getElementById('navbarContainer');
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 0) {
    navbarContainer.classList.add('scrolled');
  } else {
    navbarContainer.classList.remove('scrolled');
  }

  // Hide/show navbar based on scroll direction
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        navbar.classList.add('navbar-hidden');
      } else {
        // Scrolling up
        navbar.classList.remove('navbar-hidden');
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    });
    
    ticking = true;
  }
}, { passive: true });

// Update active menu item on scroll
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.menu-link-wrapper');

function updateActiveMenu() {
  const scrollPosition = window.scrollY + 150;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      menuLinks.forEach(wrapper => {
        const link = wrapper.querySelector('.menu-link');
        const linkHref = link.getAttribute('href').substring(1);
        
        if (linkHref === sectionId) {
          wrapper.classList.add('active');
        } else {
          wrapper.classList.remove('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveMenu, { passive: true });
window.addEventListener('load', updateActiveMenu);

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

if (mobileMenuBtn && mobileMenu && menuIcon && closeIcon) {
  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
}

// FAQs toggle
function toggleFAQ(index) {
  const faqItem = document.getElementById(`faq-${index}`);
  const faqContent = document.getElementById(`faq-content-${index}`);
  const faqIcon = document.getElementById(`faq-icon-${index}`);
  
  if (!faqContent || !faqIcon || !faqItem) return;
  
  const isHidden = faqContent.classList.contains('hidden');
  
  if (isHidden) {
    // Abrir
    faqContent.classList.remove('hidden');
    faqItem.classList.add('expanded');
  } else {
    // Cerrar
    faqContent.classList.add('hidden');
    faqItem.classList.remove('expanded');
  }
}

// Event delegation: hacer todo el bloque FAQ clickeable
const faqsList = document.querySelector('.faqs-list');
if (faqsList) {
  faqsList.addEventListener('click', (e) => {
    // Buscar el faq-item padre más cercano
    const faqItem = e.target.closest('.faq-item');
    if (!faqItem) return;
    
    // Extraer el índice del ID del faq-item (ej: "faq-0" -> 0)
    const faqId = faqItem.getAttribute('id');
    if (!faqId || !faqId.startsWith('faq-')) return;
    
    const index = parseInt(faqId.replace('faq-', ''), 10);
    if (isNaN(index)) return;
    
    // Llamar a la función toggleFAQ
    toggleFAQ(index);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#contacto') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = navbarContainer ? navbarContainer.offsetHeight + 40 : 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-item, .process-step, .faq-item, .services-title-wrapper, .process-header, .faqs-header, .offer-banner').forEach((element) => {
  element.classList.add('animate-on-scroll');
  observer.observe(element);
});

// Añadir animación de aparición a las service cards con delay
document.querySelectorAll('.service-item').forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
});

// Añadir animación de aparición a los process steps con delay
document.querySelectorAll('.process-step').forEach((item, index) => {
  item.style.animationDelay = `${index * 0.15}s`;
});

// Offer video autoplay handler
const offerVideo = document.querySelector('.offer-video');

if (offerVideo) {
  // Intentar reproducir el video
  offerVideo.play().catch(error => {
    console.log('Autoplay del video de oferta bloqueado, intentando con interacción del usuario');
    // Si el autoplay falla, intentar reproducir cuando el usuario interactúe
    document.addEventListener('click', () => {
      offerVideo.play().catch(err => {
        console.error('Error al reproducir video de oferta:', err);
      });
    }, { once: true });
  });
  
  // Manejar errores de carga del video
  offerVideo.addEventListener('error', (e) => {
    console.error('Error al cargar el video de oferta:', e);
  });
  
  // Asegurar que el video esté cargado
  offerVideo.addEventListener('loadeddata', () => {
    console.log('Video de oferta cargado correctamente');
  });
}
