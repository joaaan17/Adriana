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
    }
  }).catch(() => {
    // Fallback: mostrar el texto aunque las fuentes no se hayan cargado
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading) {
      heroHeading.classList.add('fonts-loaded');
    }
  });

  // Timeout de seguridad: mostrar el texto después de 1 segundo aunque las fuentes no se hayan cargado
  setTimeout(() => {
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading && !heroHeading.classList.contains('fonts-loaded')) {
      heroHeading.classList.add('fonts-loaded');
    }
  }, 1000);
} else {
  // Fallback para navegadores sin Font Loading API
  window.addEventListener('load', () => {
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading) {
      heroHeading.classList.add('fonts-loaded');
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
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      // Prevent body scroll when menu is open on mobile
      if (window.innerWidth < 1024) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });

  // Handle resize event
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 1024) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }, 250);
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#contacto') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = navbarContainer ? navbarContainer.offsetHeight + 40 : 80;
      // Ajuste adicional para móviles
      const mobileOffset = window.innerWidth < 768 ? 20 : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - mobileOffset;
      
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

// Observer específico para la animación de escritura
const typingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
      entry.target.classList.add('animate');
      typingObserver.unobserve(entry.target); // Solo animar una vez
    }
  });
}, {
  threshold: 0.5,
  rootMargin: '0px'
});

// Observe elements for animation
document.querySelectorAll('.service-item, .process-step, .faq-item, .services-title-wrapper, .process-header, .faqs-header, .offer-banner').forEach((element) => {
  element.classList.add('animate-on-scroll');
  observer.observe(element);
});

// Observe typing animation
const typingElements = document.querySelectorAll('.typing-animation');
typingElements.forEach(element => {
  // Para el hero, iniciar inmediatamente
  if (element.classList.contains('hero-heading')) {
    // Esperar a que las fuentes carguen y luego animar
    setTimeout(() => {
      element.classList.add('animate');
    }, 500);
  } else {
    // Para otros elementos, usar intersection observer
    typingObserver.observe(element);
  }
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
