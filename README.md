# Adriana Microblading - Landing Page

Landing page estática para Adriana Tortosa, especialista en microblading. Desarrollada con HTML, CSS y JavaScript vanilla.

## 🚀 Características

- **Navbar inteligente**: Se oculta al hacer scroll hacia abajo y aparece al hacer scroll hacia arriba con efecto de blur
- **Hero con video de fondo**: Video a pantalla completa con capa semitransparente
- **Carrusel de filosofía**: Carrusel horizontal con 6 fotos, desplazable con swipe en móvil
- **Diseño responsive**: Totalmente adaptado para móvil, tablet y escritorio
- **Animaciones suaves**: Transiciones modernas en todos los elementos
- **Botones interactivos**: Hover con efecto blanco al 30% de opacidad

## 📋 Requisitos

No se requieren dependencias. Solo necesitas un navegador web moderno.

## 🛠️ Uso

1. Añade las imágenes y videos necesarios:
   - Coloca un video en `hero-video.mp4` para el hero
   - Coloca las 6 imágenes del carrusel:
     - `philosophy-1.jpg`
     - `philosophy-2.jpg`
     - `philosophy-3.jpg`
     - `philosophy-4.jpg`
     - `philosophy-5.jpg`
     - `philosophy-6.jpg`
   - Coloca `contact-image.JPG` para la sección de contacto

2. Abre `index.html` en tu navegador o sirve los archivos con un servidor web local.

## 📁 Estructura del Proyecto

```
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript vanilla
├── hero-video.mp4      # Video de fondo del hero
├── philosophy-*.jpg    # Imágenes del carrusel (6 imágenes)
└── contact-image.JPG   # Imagen de contacto
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `styles.css`:
- Fondo oscuro: `#262624`
- Texto principal: `#51483f`, `#675b50`
- Fondo claro: `#f2f2e6`, `#DCD2C7`

### Fuentes

- **Playfair Display**: Para títulos y textos destacados
- **Inter Display**: Para textos generales

### Enlaces

Actualiza los enlaces en `index.html`:
- Instagram: Sección filosofía y footer
- WhatsApp: Sección contacto y footer

## 📱 Responsive

El sitio está completamente optimizado con diseño responsive avanzado para todos los dispositivos:

### Breakpoints
- **Desktop XL**: > 1400px
- **Desktop**: 1200px - 1400px
- **Tablet Landscape**: 992px - 1200px
- **Tablet Portrait**: 768px - 992px
- **Mobile Large**: 576px - 768px
- **Mobile Medium**: 480px - 576px
- **Mobile Small**: 380px - 480px
- **Mobile XS**: < 380px

### Optimizaciones Responsive

#### Navegación
- Menú hamburguesa para dispositivos móviles (<1024px)
- Menú desplegable animado con blur effect
- Logo adaptable según tamaño de pantalla
- Navbar con scroll inteligente (oculta/muestra según dirección)

#### Hero Section
- Layout adaptable: grid de 2 columnas en desktop, 1 columna en móvil
- Tipografía fluida: desde 64px en desktop hasta 24px en móviles pequeños
- Imágenes optimizadas con object-position adaptativo
- Espaciado y padding ajustados por breakpoint

#### Servicios
- Grid de 4 columnas en desktop
- Grid de 2 columnas en tablet
- Grid de 1 columna en móvil
- Imágenes con efecto hover y lazy loading
- Textos escalables manteniendo legibilidad

#### Proceso
- Layout de 4 columnas en desktop, 2 en tablet, 1 en móvil
- Números de pasos con tamaños adaptables
- Altura automática en móviles
- Espaciado optimizado por breakpoint

#### FAQs
- Botones de toggle con tamaño mínimo táctil (44px)
- Tipografía ajustada para mejor legibilidad
- Espaciado entre items optimizado

#### Oferta
- Banner central responsive con escala adaptable
- Video de fondo con posicionamiento ajustado
- Botones con padding optimizado para touch

#### Footer
- Layout de 2 columnas en desktop
- Layout de 1 columna en móvil
- Iconos sociales con tamaño adaptable
- Textos escalables

### Características Técnicas
- **Touch Optimizations**: Áreas táctiles mínimas de 44px
- **Tap Highlight**: Eliminado para mejor experiencia
- **Smooth Scroll**: Con fallback para motion reducido
- **iOS Optimizations**: -webkit-overflow-scrolling y text-size-adjust
- **Performance**: Lazy loading de imágenes
- **Accessibility**: Support para prefers-reduced-motion
- **Overflow**: Control de scroll del body en menú móvil abierto

## 📝 Notas

- El video del hero debe estar en formato MP4
- Las imágenes del carrusel se cargarán automáticamente con fallback si no existen
- El navbar tiene un efecto de blur cuando reaparece durante el scroll
- Todos los botones tienen transiciones suaves al hacer hover

## 📄 Licencia

© 2025 Adriana Tortosa. Todos los derechos reservados.
