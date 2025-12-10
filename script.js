// Video autoplay handler
const heroVideo = document.getElementById('heroVideo');
const heroFallback = document.getElementById('heroFallback');

if (heroVideo) {
  // Intentar reproducir el video
  heroVideo.play().catch(error => {
    console.log('Autoplay bloqueado, intentando reproducir con interacción del usuario');
    // Si el autoplay falla, intentar reproducir cuando el usuario interactúe
    document.addEventListener('click', () => {
      heroVideo.play().catch(err => {
        console.error('Error al reproducir video:', err);
        // Mostrar imagen de fallback si el video no puede reproducirse
        if (heroFallback) {
          heroVideo.style.display = 'none';
          heroFallback.style.display = 'block';
        }
      });
    }, { once: true });
  });
  
  // Manejar errores de carga del video
  heroVideo.addEventListener('error', (e) => {
    console.error('Error al cargar el video:', e);
    if (heroFallback) {
      heroVideo.style.display = 'none';
      heroFallback.style.display = 'block';
    }
  });
  
  // Asegurar que el video esté cargado
  heroVideo.addEventListener('loadeddata', () => {
    console.log('Video cargado correctamente');
  });
}

// Navbar scroll behavior
let lastScrollY = 0;
const navbar = document.getElementById('navbar');
const navbarContainer = document.getElementById('navbarContainer');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  // Mostrar/ocultar background según scroll
  if (currentScrollY > 0) {
    navbarContainer.classList.add('scrolled');
  } else {
    navbarContainer.classList.remove('scrolled');
  }
  
  // Comportamiento de mostrar/ocultar navbar
  if (currentScrollY < 50) {
    navbar.style.transform = 'translateY(0)';
  } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.style.transform = 'translateY(-100%)';
  } else if (currentScrollY < lastScrollY) {
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScrollY = currentScrollY;
}, { passive: true });

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

// Philosophy carousel navigation
const carousel = document.getElementById('philosophyCarousel');
let isDragging = false;
let startX = 0;
let scrollLeft = 0;
let touchStart = 0;
let touchScrollLeft = 0;

if (carousel) {
  // Touch events
  carousel.addEventListener('touchstart', (e) => {
    touchStart = e.touches[0].pageX;
    touchScrollLeft = carousel.scrollLeft;
    isDragging = true;
  });

  carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (x - touchStart) * 1.5;
    carousel.scrollLeft = touchScrollLeft - walk;
  });

  carousel.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Mouse events
  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  });

  carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
  });
}

// FAQs toggle - cada acordeon funciona de forma independiente
function toggleFAQ(index) {
  const faqContent = document.getElementById(`faq-content-${index}`);
  const faqIcon = document.getElementById(`faq-icon-${index}`);
  const faqContainer = document.getElementById(`faq-container-${index}`);
  
  if (!faqContent || !faqIcon || !faqContainer) return;
  
  // Toggle del contenido (mostrar/ocultar)
  const isHidden = faqContent.classList.contains('hidden');
  
  if (isHidden) {
    // Abrir: mostrar contenido, cambiar alineación a start y cambiar icono a flecha arriba
    faqContent.classList.remove('hidden');
    faqContainer.classList.remove('items-center');
    faqContainer.classList.add('items-start');
    faqIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>';
  } else {
    // Cerrar: ocultar contenido, cambiar alineación a center y cambiar icono a flecha abajo
    faqContent.classList.add('hidden');
    faqContainer.classList.remove('items-start');
    faqContainer.classList.add('items-center');
    faqIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';
  }
}

// Scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Observe process steps
document.querySelectorAll('.process-step').forEach((step) => {
  observer.observe(step);
});

// Observe service items
document.querySelectorAll('.service-item').forEach((item) => {
  observer.observe(item);
});

