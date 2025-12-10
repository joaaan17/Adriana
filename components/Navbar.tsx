'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si estamos en la parte superior, siempre mostrar
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - ocultar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - mostrar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className="w-full px-5 md:px-20 py-2.5 md:py-4 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(38, 38, 38, 0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-white text-lg sm:text-xl md:text-2xl font-extrabold font-inter transition-opacity hover:opacity-80"
          >
            ADRIANA TORTOSA
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-14">
            <Link
              href="#inicio"
              className="text-white text-base font-medium font-inter tracking-[-0.2px] transition-opacity hover:opacity-70"
            >
              Inicio
            </Link>
            <Link
              href="#filosofia"
              className="text-white text-base font-medium font-inter tracking-[-0.2px] transition-opacity hover:opacity-70"
            >
              Filosofía
            </Link>
            <Link
              href="#servicios"
              className="text-white text-base font-medium font-inter tracking-[-0.2px] transition-opacity hover:opacity-70"
            >
              Servicios
            </Link>
            <Link
              href="#proceso"
              className="text-white text-base font-medium font-inter tracking-[-0.2px] transition-opacity hover:opacity-70"
            >
              Proceso
            </Link>
            <Link
              href="#faqs"
              className="text-white text-base font-medium font-inter tracking-[-0.2px] transition-opacity hover:opacity-70"
            >
              FAQs
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50 p-2 transition-opacity hover:opacity-70"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Contact Button */}
          <Link
            href="#contacto"
            className="hidden lg:flex items-center justify-center border border-white rounded-[90px] px-8 xl:px-10 py-4 xl:py-5.5 transition-all duration-300 hover:bg-white/30"
          >
            <span className="text-white text-base font-semibold font-inter tracking-[-0.2px]">
              Contacta
            </span>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden absolute top-full left-0 right-0 bg-[#262624] bg-opacity-95 backdrop-blur-md border-t border-white border-opacity-20 animate-fade-in"
            style={{
              backgroundColor: 'rgba(38, 38, 38, 0.95)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <div className="flex flex-col px-5 py-4 gap-4">
              <Link
                href="#inicio"
                className="text-white text-base font-medium font-inter tracking-[-0.2px] py-2 transition-opacity hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="#filosofia"
                className="text-white text-base font-medium font-inter tracking-[-0.2px] py-2 transition-opacity hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Filosofía
              </Link>
              <Link
                href="#servicios"
                className="text-white text-base font-medium font-inter tracking-[-0.2px] py-2 transition-opacity hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#proceso"
                className="text-white text-base font-medium font-inter tracking-[-0.2px] py-2 transition-opacity hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proceso
              </Link>
              <Link
                href="#faqs"
                className="text-white text-base font-medium font-inter tracking-[-0.2px] py-2 transition-opacity hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                href="#contacto"
                className="border border-white rounded-[90px] px-10 py-5.5 inline-flex items-center justify-center transition-all duration-300 hover:bg-white/30 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-white text-base font-semibold font-inter tracking-[-0.2px]">
                  Contacta
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

