'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import TrustedPartnerSection from '@/components/TrustedPartnerSection';
import ServicesSection from '@/components/ServicesSection';
import FaqSection from '@/components/FaqSection';
import PortfolioSection from '@/components/PortfolioSection';
import VideoBannerSection from '@/components/VideoBannerSection';
import WorkingStepsSection from '@/components/WorkingStepsSection';
import SolarLeadersSection from '@/components/SolarLeadersSection';
import BlogArticlesSection from '@/components/BlogArticlesSection';
import FooterSection from '@/components/FooterSection';

interface AnimeV3Options {
  targets: string | HTMLElement | NodeListOf<Element>;
  translateY?: [number, number];
  opacity?: [number, number];
  duration?: number;
  easing?: string;
  delay?: number | ((el: Element, i: number) => number);
}

interface AnimeV4Parameters {
  translateY?: [number, number];
  opacity?: [number, number];
  duration?: number;
  ease?: string;
  delay?: number;
}

interface AnimeModuleExports {
  default?: ((options: AnimeV3Options) => unknown) | unknown;
  animate?: (targets: string | HTMLElement, parameters: AnimeV4Parameters) => unknown;
}

export default function LandingPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('animejs')
      .then((importedModule: unknown) => {
        const moduleExports = importedModule as AnimeModuleExports;

        if (typeof moduleExports.animate === 'function') {
          moduleExports.animate('.landing-element', {
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 900,
            ease: 'outQuart',
          });
        } else if (typeof moduleExports.default === 'function') {
          const v3Fn = moduleExports.default as (options: AnimeV3Options) => unknown;
          v3Fn({
            targets: '.landing-element',
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 900,
            easing: 'easeOutQuart',
          });
        }
      })
      .catch(() => {
        document.querySelectorAll('.landing-element').forEach((el) => {
          (el as HTMLElement).style.opacity = '1';
        });
      });
  }, []);

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section - Tightened for Mobile & Tablet */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#6ee7b7] via-[#a7f3d0] to-[#ecfdf5] pt-5 pb-8 sm:pt-6 sm:pb-10 lg:py-10 flex flex-col justify-start gap-4 sm:gap-6 lg:gap-8">
        
        {/* Upper Content Header Bar */}
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative z-20"
        >
          {/* Left Heading */}
          <div className="landing-element max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] md:leading-[1.15]">
              Installation And Maintenance <br className="hidden sm:inline" />
              Of Solar Panels
            </h1>
          </div>

          {/* Right Happy Clients Badge */}
          <div className="landing-element flex items-center gap-2.5 sm:gap-3 self-start md:self-auto bg-white/60 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/70 shadow-sm shrink-0">
            <div className="flex -space-x-2">
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                <Image
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                <Image
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-slate-900 leading-none">3.5k</div>
              <div className="text-[9px] sm:text-[10px] text-slate-700 font-medium leading-tight">Happy clients we have</div>
            </div>
          </div>
        </div>

        {/* Main Solar Panels Perspective Card - Immediate tight flow */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[380px] md:h-[440px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/70">
            <Image
              src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Solar panels with windmills"
              fill
              className="object-cover object-bottom"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

            <div className="absolute inset-x-3 bottom-3 sm:bottom-6 sm:inset-x-6 lg:bottom-8 lg:inset-x-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 z-10">
              <button className="bg-[#ff6f00] hover:bg-[#e66300] text-white font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-lg shadow-orange-950/30 transition-transform active:scale-95 shrink-0">
                Get Started
              </button>

              <div className="flex items-center gap-3 sm:gap-4 bg-black/40 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white/20 text-white self-stretch sm:self-auto justify-between sm:justify-start">
                <div className="text-left sm:text-right">
                  <p className="text-[10px] sm:text-xs md:text-sm font-semibold leading-tight">Solar drives in the</p>
                  <p className="text-[10px] sm:text-xs md:text-sm font-semibold leading-tight">whole country</p>
                </div>

                <div className="relative w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/20"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-orange-500"
                      strokeDasharray="75, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[8.5px] sm:text-[10px] md:text-[11px] font-bold text-white tracking-tighter">
                    170k+
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted Partner & Sliders */}
      <TrustedPartnerSection />

      {/* 3. Solar Services */}
      <ServicesSection />

      {/* 4. FAQ & Client Logos */}
      <FaqSection />

      {/* 5. Latest Projects Portfolio */}
      <PortfolioSection />

      {/* 6. Embedded Video Banner */}
      <VideoBannerSection />

      {/* 7. Solar Leaders Partner Details */}
      <SolarLeadersSection />

      {/* 8. Blog & Articles */}
      <BlogArticlesSection />

      {/* 9. Working Steps & Statistics Pill */}
      <WorkingStepsSection />

      {/* 10. Call to Action Banner & 4-Column Footer */}
      <FooterSection />
    </div>
  );
}