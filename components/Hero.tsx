'use client';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          onError={(e) => {
            const video = e.target as HTMLVideoElement;
            video.style.display = 'none';
            const img = video.nextElementSibling as HTMLImageElement;
            if (img) img.style.display = 'block';
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
        </video>
        {/* Fallback image if video doesn't load */}
        <img
          src="/hero-image.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover hidden"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'block';
          }}
        />
      </div>

      {/* Overlay semitransparente */}
      <div
        className="absolute inset-0 w-full h-full z-[1]"
        style={{ backgroundColor: 'rgba(38, 38, 38, 0.7)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 md:px-8 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-6 md:gap-6 items-center justify-center mb-6 md:mb-0">
            <h1 className="text-5xl sm:text-6xl md:text-[140px] text-white font-playfair leading-[1.2] tracking-[-2px] md:tracking-[-6.8px] animate-fade-in">
              <span className="italic font-playfair">Trazos</span>{' '}
              <span className="not-italic font-playfair">que</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-6 items-center justify-center animate-fade-in-delay">
            <h2 className="text-5xl sm:text-6xl md:text-[140px] text-white font-playfair leading-[1.2] tracking-[-2px] md:tracking-[-6.8px]">
              <span className="not-italic font-playfair">elevan</span>{' '}
              <span className="italic font-playfair">tu esencia</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

