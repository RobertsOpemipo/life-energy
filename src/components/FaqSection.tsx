'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PhoneCall, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Can i get free 3 month solar installations?',
    answer: 'Our promotional onboarding packages offer flexible deferred financing and zero upfront charges for qualifying properties.',
  },
  {
    question: 'Do i get all the demos and template with?',
    answer: 'Our tools are easy to use and affordable, so you can start improving your website\'s SEO today.',
  },
  {
    question: 'How do you find different criteria in your process?',
    answer: 'We analyze geographic irradiance patterns, seasonal roof shading, and your historic load demands using satellite mapping.',
  },
  {
    question: 'What do i need to apply for an account?',
    answer: 'A copy of your recent utility billing statement and property boundary documents is all that is required.',
  },
  {
    question: 'Can you explain your unlimited cleanup policy?',
    answer: 'Our standard care program includes biannual photovoltaic surface cleanings and automated micro-inverter dust prevention sweeps.',
  },
];

// Reusable exact partner brand items
function PartnerLogos() {
  return (
    <>
      {/* 1. Smile */}
      <div className="flex items-center shrink-0">
        <svg viewBox="0 0 90 36" className="h-6 md:h-7 w-auto fill-current">
          <text
            x="0"
            y="26"
            style={{
              fontFamily: 'cursive, "Brush Script MT", "Segoe Script", serif',
              fontSize: '27px',
              fontWeight: 'bold',
            }}
          >
            Smile
          </text>
        </svg>
      </div>

      {/* 2. natural mineral water */}
      <div className="flex flex-col items-center shrink-0">
        <span className="font-extrabold text-[15px] md:text-[17px] tracking-tight text-[#475569] lowercase font-sans leading-none">
          natural
        </span>
        <span className="text-[6.5px] md:text-[7px] tracking-[0.34em] uppercase text-[#64748b] font-medium font-sans mt-0.5">
          mineral water
        </span>
      </div>

      {/* 3. Mockup */}
      <div className="flex items-center shrink-0">
        <svg viewBox="0 0 110 36" className="h-6 md:h-7 w-auto fill-current">
          <text
            x="0"
            y="26"
            style={{
              fontFamily: '"Snell Roundhand", "Edwardian Script ITC", "Bickham Script Pro", cursive',
              fontSize: '28px',
              fontStyle: 'italic',
            }}
          >
            Mockup
          </text>
        </svg>
      </div>

      {/* 4. NATURAL BRAND */}
      <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
        <svg viewBox="0 0 36 36" className="w-6 h-6 md:w-7 md:h-7 stroke-current fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="15" />
          <path d="M18 6 v24" />
          <path d="M18 12 C13 12 11 16 11 19 C11 22 14 24 18 24" />
          <path d="M18 12 C23 12 25 16 25 19 C25 22 22 24 18 24" />
        </svg>
        <div className="flex flex-col justify-center leading-none">
          <span className="text-[8.5px] md:text-[9px] font-extrabold tracking-wider uppercase text-[#475569] font-sans">
            NATURAL
          </span>
          <span className="text-[7px] md:text-[7.5px] font-semibold tracking-widest uppercase text-[#64748b] font-sans mt-0.5">
            BRAND
          </span>
        </div>
      </div>

      {/* 5. natural mineral water */}
      <div className="flex flex-col items-center shrink-0">
        <span className="font-extrabold text-[15px] md:text-[17px] tracking-tight text-[#475569] lowercase font-sans leading-none">
          natural
        </span>
        <span className="text-[6.5px] md:text-[7px] tracking-[0.34em] uppercase text-[#64748b] font-medium font-sans mt-0.5">
          mineral water
        </span>
      </div>

      {/* 6. Coffee */}
      <div className="flex items-center shrink-0">
        <svg viewBox="0 0 95 36" className="h-6 md:h-7 w-auto fill-current">
          <text
            x="0"
            y="26"
            style={{
              fontFamily: '"Brush Script MT", "Caveat", "Pacifico", cursive',
              fontSize: '27px',
              fontWeight: '600',
            }}
          >
            Coffee
          </text>
        </svg>
      </div>
    </>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Upper Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading and Phone Badge */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1b8156]">
              OUR QUESTIONS AND ANSWERS
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Things You Need To <br />
              Know About Us
            </h2>

            {/* Overlapping Agent Avatar + Orange Call Badge */}
            <div className="flex items-center gap-4 pt-2 sm:pt-4">
              <div className="flex items-center -space-x-2 shrink-0">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
                    alt="Support agent"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-11 h-11 rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-md relative z-10">
                  <PhoneCall className="w-4 h-4 fill-white" />
                </div>
              </div>

              <div>
                <p className="text-[11px] text-slate-400 font-medium leading-tight">Call us at</p>
                <a
                  href="tel:+60276247296"
                  className="text-xs font-extrabold text-slate-900 hover:text-emerald-600 transition"
                >
                  +(602) 762 47296
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3 w-full">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-200 ${
                    isOpen
                      ? 'border-slate-100 bg-white shadow-lg shadow-slate-100/70 p-5 sm:p-6'
                      : 'border-slate-300 bg-white hover:border-slate-400 px-5 sm:px-6 py-4'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <span
                      className={`text-xs font-extrabold tracking-tight transition-colors ${
                        isOpen ? 'text-[#16a34a]' : 'text-slate-900'
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Circle Toggle Indicator */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#16a34a] text-white'
                          : 'border border-slate-300 text-slate-500'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <p className="text-[11px] text-slate-400 mt-3 leading-relaxed max-w-lg">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ================= EXACT PARTNER LOGOS BAR ================= */}
        <div className="pt-12 border-t border-slate-100 text-[#5c6b73] w-full">
          
          {/* 1. TABLET & DESKTOP: ALWAYS A SINGLE STRAIGHT ROW */}
          <div className="hidden sm:flex items-center justify-between flex-nowrap whitespace-nowrap gap-3 md:gap-6 lg:gap-8 max-w-4xl mx-auto px-2">
            <PartnerLogos />
          </div>

          {/* 2. MOBILE: SMOOTH INFINITE MARQUEE (NO DROPPING/WRAPPING) */}
          <div className="sm:hidden relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex items-center gap-10 w-max animate-marquee">
              <PartnerLogos />
              {/* Duplicate track for seamless infinite loop */}
              <PartnerLogos />
            </div>
          </div>

        </div>

      </div>

      {/* Marquee Keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 16s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}