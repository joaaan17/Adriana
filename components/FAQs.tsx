'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Se me caerá el pelo natural de las cejas?',
    answer:
      '¡No! La micropigmentación no hace que se caiga el pelo de las cejas. Trabajamos sobre la piel, no sobre el folículo, así que no afecta al crecimiento del vello. Puedes estar tranquila, tus pelitos seguirán ahí... ¡solo que con una forma más bonita!',
    isOpen: true,
  },
  {
    question: '¿Qué técnica me recomiendas?',
    answer: '',
    isOpen: false,
  },
  {
    question: '¿Cuando tarda en cicatrizar?',
    answer: '',
    isOpen: false,
  },
  {
    question: '¿Queda muy intenso el color al principio?',
    answer: '',
    isOpen: false,
  },
  {
    question: 'Con piel grasa, ¿me puedo hacer la micropigmentación?',
    answer: '',
    isOpen: false,
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="bg-[#e3dbc8] py-24 md:py-32 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-28">
          <p className="text-[#51483f] text-sm md:text-base font-light font-inter tracking-[0.64px] uppercase mb-4">
            FAQs
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-[64px] text-[#675b50] font-playfair italic leading-[1.2] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.68px]">
            Preguntas frecuentes
          </h2>
        </div>

        {/* FAQs List */}
        <div className="space-y-0 mb-12 md:mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-dashed border-[#675b50] ${
                index === faqs.length - 1 ? 'border-b-0' : ''
              }`}
            >
              {openIndex === index && faq.answer ? (
                // Expanded state
                <div className="flex items-start gap-8 md:gap-16 py-[18px] md:py-[19px]">
                  <div className="flex-1">
                    <h3 className="text-[#51483f] text-xl md:text-2xl font-playfair leading-[48px] tracking-[-0.4px] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[#675b50] text-base font-medium font-inter leading-6 tracking-[-0.16px]">
                      {faq.answer}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="border border-[#675b50] rounded-full w-[68px] h-[68px] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-white/30"
                  >
                    <svg
                      className="w-6 h-6 text-[#675b50]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                // Collapsed state
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-4 md:py-8 transition-all duration-300 hover:opacity-70"
                >
                  <h3 className="text-[#51483f] text-xl md:text-2xl font-playfair leading-[48px] tracking-[-0.4px] text-left">
                    {faq.question}
                  </h3>
                  <div className="border border-[#675b50] rounded-full w-[68px] h-[68px] flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 hover:bg-white/30">
                    <svg
                      className="w-6 h-6 text-[#675b50]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
              )}
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
              ¿Tienes alguna otra duda?
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

