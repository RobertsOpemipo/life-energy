'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Rooftop solar inspection',
    img: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Solar grid field view',
    img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Engineers on elevated structure',
    img: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Underside structural mount',
    img: 'https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Maintenance technicians on roof',
    img: 'https://images.pexels.com/photos/9875432/pexels-photo-9875432.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Hand drill panel installation',
    img: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft - 16,
          behavior: 'smooth',
        });
        setCurrentIndex(index);
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIdx);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollPos = container.scrollLeft;
      const cardWidth = container.clientWidth * 0.85;
      const newIndex = Math.round(scrollPos / cardWidth);
      if (newIndex >= 0 && newIndex < projects.length && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <section className="w-full bg-[#ecfdf5]/50 py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#1b8156] mb-3">
            CHECK OUR PORTFOLIO
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Latest project we have <br />
            done for you
          </h2>
        </div>

        {/* 1. MOBILE ONLY: Interactive Touch Carousel (< md) */}
        <div className="block md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex items-center gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4 -mx-4 px-4"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative min-w-[85vw] h-80 rounded-[24px] overflow-hidden bg-slate-100 shadow-md snap-center shrink-0"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Carousel Arrows & Indicator Dots */}
          <div className="flex items-center justify-between pt-4 px-2">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm active:scale-95 transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-[#1b8156]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm active:scale-95 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. TABLET & DESKTOP GRID (md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 sm:h-72 lg:h-80 w-full rounded-[24px] overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}