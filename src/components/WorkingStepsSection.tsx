'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface AnimeV3Options {
  targets: string | HTMLElement | NodeListOf<Element>;
  translateY?: [number, number];
  scale?: [number, number];
  opacity?: [number, number];
  duration?: number;
  easing?: string;
  delay?: number | ((el: Element, i: number) => number);
}

interface AnimeV4Parameters {
  translateY?: [number, number];
  scale?: [number, number];
  opacity?: [number, number];
  duration?: number;
  ease?: string;
  delay?: number;
}

interface AnimeModuleExports {
  default?: ((options: AnimeV3Options) => unknown) | { stagger?: (val: number, opts?: { start?: number }) => (el: Element, i: number) => number };
  animate?: (targets: string | HTMLElement, parameters: AnimeV4Parameters) => unknown;
  stagger?: (val: number, opts?: { start?: number }) => (el: Element, i: number) => number;
}

const steps = [
  {
    step: '01',
    title: 'Initial consultation',
    desc: 'Since 1995 Reed pioneered cialist and recruitment',
    img: 'https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    step: '02',
    title: 'System design',
    desc: 'Since 1995 Reed pioneered cialist and recruitment',
    img: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    step: '03',
    title: 'Install & active',
    desc: 'Since 1995 Reed pioneered cialist and recruitment',
    img: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    step: '04',
    title: 'System Monitoring',
    desc: 'Since 1995 Reed pioneered cialist and recruitment',
    img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function WorkingStepsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          import('animejs')
            .then((importedModule: unknown) => {
              const moduleExports = importedModule as AnimeModuleExports;

              if (typeof moduleExports.animate === 'function') {
                moduleExports.animate('.step-item-card', {
                  translateY: [35, 0],
                  opacity: [1, 1],
                  duration: 800,
                  ease: 'outQuart',
                });
                moduleExports.animate('.step-number-pin', {
                  scale: [0, 1],
                  translateY: [-10, 0],
                  opacity: [1, 1],
                  duration: 900,
                  delay: 250,
                  ease: 'outElastic(1, .6)',
                });
                moduleExports.animate('.step-connector-arrow', {
                  opacity: [0, 1],
                  scale: [0.7, 1],
                  duration: 700,
                  delay: 400,
                  ease: 'outCubic',
                });
                moduleExports.animate('.stats-pill-container', {
                  translateY: [30, 0],
                  opacity: [1, 1],
                  duration: 900,
                  delay: 600,
                  ease: 'outQuart',
                });
              } else if (typeof moduleExports.default === 'function') {
                const v3Fn = moduleExports.default as (options: AnimeV3Options) => unknown;
                const staggerFn = (moduleExports.default as { stagger?: (val: number, opts?: { start?: number }) => (el: Element, i: number) => number }).stagger;

                v3Fn({
                  targets: '.step-item-card',
                  translateY: [35, 0],
                  opacity: [0, 1],
                  duration: 800,
                  delay: staggerFn ? staggerFn(150) : 100,
                  easing: 'easeOutQuart',
                });
                v3Fn({
                  targets: '.step-number-pin',
                  scale: [0, 1],
                  translateY: [-10, 0],
                  opacity: [0, 1],
                  duration: 900,
                  delay: staggerFn ? staggerFn(150, { start: 250 }) : 250,
                  easing: 'easeOutElastic(1, .6)',
                });
                v3Fn({
                  targets: '.step-connector-arrow',
                  opacity: [0, 1],
                  scale: [0.7, 1],
                  duration: 700,
                  delay: staggerFn ? staggerFn(150, { start: 400 }) : 400,
                  easing: 'easeOutCubic',
                });
                v3Fn({
                  targets: '.stats-pill-container',
                  translateY: [30, 0],
                  opacity: [0, 1],
                  duration: 900,
                  delay: 600,
                  easing: 'easeOutQuart',
                });
              }
            })
            .catch(() => {
              document.querySelectorAll('.step-item-card, .step-number-pin, .step-connector-arrow, .stats-pill-container').forEach((el) => {
                (el as HTMLElement).style.opacity = '1';
              });
            });

          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-24">
        
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#1b8156] mb-3">
            OUR 4 WORKING STEPS
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our working steps
          </h2>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="step-item-card opacity-100 flex flex-col items-center text-center relative group"
            >
              <div className="relative w-28 h-28 mb-5">
                <div className="w-full h-full rounded-full p-1.5 bg-[#e6f9f0] border border-emerald-200 group-hover:border-[#1b8156] group-hover:scale-105 transition-all duration-300 shadow-sm">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                <div className="step-number-pin opacity-100 absolute -top-2 left-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-sm rounded-full px-2.5 py-0.5 text-[10px] font-extrabold text-slate-800">
                  {item.step}
                </div>
              </div>

              <h3 className="text-sm font-extrabold text-slate-900 mb-1.5 group-hover:text-[#1b8156] transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed max-w-[190px]">
                {item.desc}
              </p>

              {index < steps.length - 1 && (
                <div className="step-connector-arrow opacity-100 hidden lg:block absolute -right-6 top-10 pointer-events-none text-slate-700">
                  <svg width="38" height="20" viewBox="0 0 38 20" fill="none" className="overflow-visible">
                    <path
                      d="M2 15 C14 0, 24 0, 34 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      className="animate-pulse"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28 15 H35 V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-bounce"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Pill Statistics Box */}
        <div className="stats-pill-container opacity-100 bg-white border border-slate-200/90 rounded-3xl sm:rounded-full py-8 sm:py-9 px-6 sm:px-16 flex items-center justify-around flex-wrap gap-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl font-black text-[#1b8156] tracking-tight">
              20+
            </span>
            <span className="text-xs font-bold text-slate-800 leading-snug">
              Winning awards <br />
              on solar
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl font-black text-[#1b8156] tracking-tight">
              35k
            </span>
            <span className="text-xs font-bold text-slate-800 leading-snug">
              We have completed <br />
              projects
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl font-black text-[#1b8156] tracking-tight">
              93%
            </span>
            <span className="text-xs font-bold text-slate-800 leading-snug">
              Genuine positive <br />
              feedback
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}