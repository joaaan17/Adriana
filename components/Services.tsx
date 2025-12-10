'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Cejas técnica Hairstroke (pelo a pelo)',
    description:
      'La técnica Hairstroke dibuja trazos ultrafinos que imitan los vellos naturales de la ceja, logrando un resultado muy realista y delicado. Es perfecta para quienes desean un aspecto natural, rellenar huecos o rediseñar la forma de sus cejas sin que parezca maquillaje.',
  },
  {
    title: 'Cejas técnica Shading (sombreado)',
    description:
      'La técnica Shading consiste en crear un efecto de sombreado suave y homogéneo que imita el uso del maquillaje en polvo. El resultado son cejas más definidas, con mayor densidad y un acabado pulido. Es ideal para quienes buscan un look más maquillado o tienen cejas muy claras o poco pobladas.',
  },
  {
    title: 'Labios',
    description:
      'La micropigmentación de labios realza el contorno y aporta color de forma sutil y equilibrada. Permite corregir asimetrías, definir el borde y proporcionar un tono más uniforme y luminoso. El resultado son labios más jugosos, simétricos y con un acabado natural.',
  },
  {
    title: 'Eyeliner',
    description:
      'La micropigmentación de eyeliner define la línea de las pestañas para intensificar la mirada. Puede realizarse en estilo natural (relleno entre pestañas), delineado clásico o delineado más marcado según la preferencia del cliente. Aporta profundidad a los ojos y evita la necesidad de usar delineador a diario.',
  },
];

export default function Services() {
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
      id="servicios"
      className="bg-[#f2f2e6] py-24 md:py-32 px-4 md:px-0"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 sm:gap-12 md:gap-16">
          {/* Left Column - Header */}
          <div className="flex-shrink-0 md:w-auto">
            <p className="text-[#51483f] text-sm md:text-base font-light font-inter tracking-[0.64px] uppercase mb-4 sm:mb-6">
              servicios
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-[64px] text-[#51483f] font-playfair leading-[1.2] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.68px] mb-4 sm:mb-6">
              <span className="not-italic">Natural, atemporal</span>
              <br />
              <span className="italic">y totalmente tú</span>
            </h2>
            <a
              href="#contacto"
              className="border border-[#51483f] rounded-[90px] px-10 py-5.5 inline-flex items-center justify-center transition-all duration-300 hover:bg-white/30 mt-6"
            >
              <span className="text-[#51483f] text-base font-semibold font-inter tracking-[-0.32px]">
                Consulta más información
              </span>
            </a>
          </div>

          {/* Right Column - Services List */}
          <div className="flex-1 md:max-w-[590px]">
            {services.map((service, index) => (
              <div
                key={index}
                className={`border-b border-dashed border-[#675b50] pb-[60px] md:pb-[61px] pt-[60px] md:pt-[60px] transition-all duration-700 ${
                  index === services.length - 1 ? 'border-b-0' : ''
                } ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-[#51483f] text-2xl md:text-[34.2px] font-playfair italic leading-[40px] tracking-[-0.8px] mb-6">
                  {service.title}
                </h3>
                <p className="text-[#675b50] text-base font-medium font-inter leading-6 tracking-[-0.16px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

