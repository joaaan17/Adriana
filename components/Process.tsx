'use client';

import { useEffect, useRef, useState } from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Diseño personalizado',
    description:
      'Creo el diseño perfecto según tus facciones, aplicando la proporción áurea y técnicas de visagismo para un resultado armonioso.',
  },
  {
    number: '02',
    title: 'Procedimiento',
    description:
      'Con anestesia tópica para tu comodidad, realizo el tratamiento con precisión milimétrica y productos de máxima calidad.',
  },
  {
    number: '03',
    title: 'Cuidados posteriores',
    description:
      'Te proporciono todas las instrucciones y productos necesarios para una cicatrización óptima y resultados duraderos.',
  },
  {
    number: '04',
    title: 'Retoques incluidos',
    description:
      'A las 4-6 semanas realizamos un retoque de perfeccionamiento incluido en el precio para asegurar un resultado impecable.',
  },
];

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="bg-white py-24 md:py-32 px-4 md:px-0"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-32">
          <p className="text-[#51483f] text-sm md:text-base font-light font-inter tracking-[0.64px] uppercase mb-4">
            PROCESO
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-[64px] text-[#675b50] font-playfair leading-[1.2] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.68px]">
            <span className="italic">El proceso,</span>
            <br />
            <span className="not-italic">paso a paso</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 md:mb-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Number Circle */}
              <div className="border border-[#675b50] rounded-full w-[68px] h-[68px] flex items-center justify-center mb-6">
                <span className="text-[#675b50] text-[19px] font-italic font-serif">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[#51483f] text-2xl md:text-[32.3px] font-playfair italic leading-[40px] tracking-[-1.6px] mb-5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#675b50] text-base font-medium font-inter leading-6 tracking-[-0.16px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex justify-center">
          <a
            href="#contacto"
            className="border border-[#675b50] rounded-[90px] px-10 py-5.5 inline-flex items-center justify-center transition-all duration-300 hover:bg-white/30"
          >
            <span className="text-[#675b50] text-base font-semibold font-inter tracking-[-0.32px]">
              Contacta
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

