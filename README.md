# Adriana Microblading - Sitio Web

Sitio web profesional para Adriana Tortosa, especialista en microblading. Desarrollado con Next.js, React y TailwindCSS.

## 🚀 Características

- **Navbar inteligente**: Se oculta al hacer scroll hacia abajo y aparece al hacer scroll hacia arriba con efecto de blur
- **Hero con video de fondo**: Video a pantalla completa con capa semitransparente
- **Carrusel de filosofía**: Carrusel horizontal con 6 fotos, desplazable con swipe en móvil
- **Diseño responsive**: Totalmente adaptado para móvil, tablet y escritorio
- **Animaciones suaves**: Transiciones modernas en todos los elementos
- **Botones interactivos**: Hover con efecto blanco al 30% de opacidad

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Añade las imágenes y videos necesarios:

   - Coloca un video en `public/hero-video.mp4` para el hero
   - Coloca las 6 imágenes del carrusel en `public/`:
     - `philosophy-1.jpg`
     - `philosophy-2.jpg`
     - `philosophy-3.jpg`
     - `philosophy-4.jpg`
     - `philosophy-5.jpg`
     - `philosophy-6.jpg`
   - Coloca `public/contact-image.jpg` para la sección de contacto

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css      # Estilos globales y animaciones
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── Navbar.tsx       # Barra de navegación con scroll
│   ├── Hero.tsx         # Sección hero con video
│   ├── Philosophy.tsx   # Sección filosofía con carrusel
│   ├── Process.tsx      # Sección proceso paso a paso
│   ├── Services.tsx     # Sección servicios
│   ├── FAQs.tsx         # Preguntas frecuentes
│   ├── Contact.tsx      # Sección contacto
│   └── Footer.tsx       # Pie de página
└── public/              # Archivos estáticos (imágenes, videos)
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en los componentes usando clases de Tailwind:
- Fondo oscuro: `#262624`
- Texto principal: `#51483f`, `#675b50`
- Fondo claro: `#f2f2e6`, `#e3dbc8`

### Fuentes

- **Playfair Display**: Para títulos y textos destacados
- **Inter**: Para textos generales

### Enlaces

Actualiza los enlaces en los componentes:
- Instagram: `components/Philosophy.tsx` y `components/Footer.tsx`
- WhatsApp: `components/Contact.tsx` y `components/Footer.tsx`

## 📱 Responsive

El sitio está completamente optimizado para:
- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Build para Producción

```bash
npm run build
npm start
```

## 📝 Notas

- El video del hero debe estar en formato MP4
- Las imágenes del carrusel se cargarán automáticamente con fallback si no existen
- El navbar tiene un efecto de blur cuando reaparece durante el scroll
- Todos los botones tienen transiciones suaves al hacer hover

## 📄 Licencia

© 2025 Adriana Tortosa. Todos los derechos reservados.

