'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const articles = [
  {
    title: 'Solar panels installed on homes to reduce electricity',
    img: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Energy', 'Solar'],
  },
  {
    title: 'This is the process converting the sunlight into electricity',
    img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Energy', 'Solar'],
  },
  {
    title: 'Geography affects solar energy potential greenhouse',
    img: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Energy', 'Solar'],
  },
];

export default function BlogArticlesSection() {
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
    const nextIdx = currentIndex === 0 ? articles.length - 1 : currentIndex - 1;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === articles.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIdx);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollPos = container.scrollLeft;
      const cardWidth = container.clientWidth * 0.85;
      const newIndex = Math.round(scrollPos / cardWidth);
      if (newIndex >= 0 && newIndex < articles.length && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-10 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#1b8156] mb-3">
            Our Latest Blog Post
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our interesting articles
          </h2>
        </div>

        {/* 1. MOBILE ONLY: Carousel (< md) */}
        <div className="block md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4 -mx-4 px-4"
          >
            {articles.map((item, index) => (
              <div
                key={index}
                className="min-w-[85vw] bg-white rounded-[24px] border border-slate-100 p-3 shadow-sm flex flex-col items-center text-center snap-center shrink-0"
              >
                {/* Image */}
                <div className="relative w-full h-64 rounded-[20px] overflow-hidden bg-slate-100 shadow-sm">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-white/95 backdrop-blur-sm border border-slate-200/60 text-slate-800 text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-extrabold text-slate-900 leading-snug mt-4 mb-4 px-2 min-h-[40px] flex items-center justify-center">
                  {item.title}
                </h3>

                {/* Read more */}
                <button className="w-full mt-auto py-3 rounded-xl bg-[#e6f9f0] active:bg-[#1b8156] text-[#1b8156] active:text-white font-bold text-xs transition duration-150">
                  Read more
                </button>
              </div>
            ))}
          </div>

          {/* Carousel Arrows & Indicator Dots */}
          <div className="flex items-center justify-between pt-3 px-2">
            <button
              onClick={handlePrev}
              aria-label="Previous article"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm active:scale-95 transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {articles.map((_, idx) => (
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
              aria-label="Next article"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm active:scale-95 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. TABLET & DESKTOP: Refined 3-Column Grid (md and up) */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-8">
          {articles.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[24px] overflow-hidden flex flex-col items-center text-center"
            >
              {/* Card Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-96 rounded-[24px] overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Floating Category Pills */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 lg:gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white/95 backdrop-blur-sm border border-slate-200/60 text-slate-800 text-[9px] lg:text-[10px] font-medium px-2.5 lg:px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm lg:text-base font-extrabold text-slate-900 leading-snug mt-4 lg:mt-5 mb-4 lg:mb-5 px-1 min-h-[40px] lg:min-h-[44px] group-hover:text-[#1b8156] transition-colors">
                {item.title}
              </h3>

              {/* Mint Green Read More Button */}
              <button className="w-full py-2.5 lg:py-3 rounded-2xl bg-[#e6f9f0] hover:bg-[#1b8156] text-[#1b8156] hover:text-white font-bold text-xs transition duration-200 shadow-sm mt-auto">
                Read more
              </button>
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