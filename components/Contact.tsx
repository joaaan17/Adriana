'use client';

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#262624] py-24 md:py-32 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16">
          {/* Left Column - Text */}
          <div className="flex-1">
            <p className="text-white text-sm md:text-base font-light font-inter tracking-[0.64px] uppercase mb-4 sm:mb-6">
              contacta
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-[64px] text-white font-playfair italic leading-[1.2] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.68px] mb-4 sm:mb-6">
              ¿Hablamos?
            </h2>
            <p className="text-white text-base sm:text-lg md:text-2xl font-inter leading-[1.2] mb-6 sm:mb-8">
              Estoy aquí para guiarte y resolver tus dudas.
              <br />
              Analizaremos tu caso y veremos juntas qué necesitas.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white rounded-[90px] px-10 py-5.5 inline-flex items-center justify-center transition-all duration-300 hover:bg-white/30"
            >
              <span className="text-white text-base font-semibold font-inter tracking-[-0.32px]">
                ¡Contactar ahora!
              </span>
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 md:max-w-[536px]">
            <div className="aspect-[536/805] relative overflow-hidden rounded-lg">
              <img
                src="/contact-image.jpg"
                alt="Contacto"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://picsum.photos/536/805?random=contact';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

