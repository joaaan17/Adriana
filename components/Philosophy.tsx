'use client';

import { useState, useRef, useEffect } from 'react';

const philosophyImages = [
  '/philosophy-1.jpg',
  '/philosophy-2.jpg',
  '/philosophy-3.jpg',
  '/philosophy-4.jpg',
  '/philosophy-5.jpg',
  '/philosophy-6.jpg',
];

export default function Philosophy() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchScrollLeft, setTouchScrollLeft] = useState(0);

  // Touch handlers para móvil (swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollContainerRef.current) {
      setTouchStart(e.touches[0].pageX);
      setTouchScrollLeft(scrollContainerRef.current.scrollLeft);
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - touchStart) * 1.5; // Velocidad del swipe
    scrollContainerRef.current.scrollLeft = touchScrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse handlers para desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="filosofia" className="bg-[#262624] py-24 md:py-32 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-24">
          <p className="text-[#f2f2e6] text-sm md:text-base font-light font-inter tracking-[0.64px] uppercase mb-4 sm:mb-6">
            MI FILOSOFÍA
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-[88px] text-white font-playfair leading-[1.2] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.68px]">
              <span className="not-italic">Cada diseño</span>{' '}
              <span className="italic">es único</span>
            </h2>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white rounded-[90px] px-10 py-5.5 inline-flex items-center justify-center transition-all duration-300 hover:bg-white/30 self-start md:self-auto"
            >
              <span className="text-white text-base font-semibold font-inter tracking-[-0.32px]">
                Ver más en Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Carrusel */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex gap-4 md:gap-[43.747px] overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 md:pb-0 cursor-grab active:cursor-grabbing"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
          }}
        >
          {philosophyImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-[280px] sm:w-[320px] md:w-[400px] lg:w-[528.75px] aspect-[600/800] relative overflow-hidden"
            >
              <img
                src={image}
                alt={`Filosofía ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                draggable={false}
                onError={(e) => {
                  // Fallback si la imagen no existe
                  (e.target as HTMLImageElement).src = `https://picsum.photos/528/800?random=${index}`;
                }}
              />
            </div>
          ))}
        </div>

        {/* Texto inferior */}
        <div className="mt-12 sm:mt-16 md:mt-24 text-left sm:text-right">
          <h3 className="text-4xl sm:text-5xl md:text-[88px] text-white font-playfair leading-[1.2] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.68px] mb-4 sm:mb-6">
            <span className="not-italic">porque</span>{' '}
            <span className="italic">cada rostro</span>{' '}
            <span className="not-italic">lo es.</span>
          </h3>
          <p className="text-white text-base sm:text-lg md:text-2xl font-inter leading-[1.2] max-w-2xl sm:ml-auto">
            El diseño lo hacemos juntas, nada es al azar.
            <br />
            El objetivo es que te veas natural, favorecida y tú misma.
          </p>
        </div>
      </div>
    </section>
  );
}

