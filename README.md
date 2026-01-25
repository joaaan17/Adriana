# Adriana Micropigmentación - Landing Page

Landing page estática para Adriana Tortosa, especialista en micropigmentación. Desarrollada con HTML, CSS y JavaScript vanilla.

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

El sitio está completamente optimizado para:
- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📝 Notas

- El video del hero debe estar en formato MP4
- Las imágenes del carrusel se cargarán automáticamente con fallback si no existen
- El navbar tiene un efecto de blur cuando reaparece durante el scroll
- Todos los botones tienen transiciones suaves al hacer hover

## 📄 Licencia

© 2025 Adriana Tortosa. Todos los derechos reservados.
