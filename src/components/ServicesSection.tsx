'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Zap, BatteryCharging, Grid, SunMedium } from 'lucide-react';

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

const services = [
  {
    title: 'Fossil resources',
    desc: 'Since 1995 Reed pioneered cialist and recruitment',
    img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Zap,
  },
  {
    title: 'Hydropower plant',
    desc: 'Since 1995 Reed pioneered cialist and recruitment',
    img: 'https://images.pexels.com/photos/9875432/pexels-photo-9875432.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: BatteryCharging,
  },
  {
    title: 'Wind turbines',
    desc: 'Since 1995 Reed pioneered cialist and recruitment',
    img: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Grid,
  },
  {
    title: 'Powersun assistance',
    desc: 'Since 1995 Reed pioneered cialist and recruitment',
    img: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: SunMedium,
  },
];

export default function ServicesSection() {
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
                moduleExports.animate('.service-card-item', {
                  translateY: [40, 0],
                  opacity: [1, 1],
                  duration: 800,
                  ease: 'outQuart',
                });
                moduleExports.animate('.service-card-badge', {
                  scale: [0, 1],
                  opacity: [1, 1],
                  duration: 900,
                  delay: 250,
                  ease: 'outElastic(1, .6)',
                });
              } else if (typeof moduleExports.default === 'function') {
                const v3Fn = moduleExports.default as (options: AnimeV3Options) => unknown;
                const staggerFn = (moduleExports.default as { stagger?: (val: number, opts?: { start?: number }) => (el: Element, i: number) => number }).stagger;

                v3Fn({
                  targets: '.service-card-item',
                  translateY: [40, 0],
                  opacity: [0, 1],
                  duration: 800,
                  delay: staggerFn ? staggerFn(130) : 100,
                  easing: 'easeOutQuart',
                });
                v3Fn({
                  targets: '.service-card-badge',
                  scale: [0, 1],
                  opacity: [0, 1],
                  duration: 900,
                  delay: staggerFn ? staggerFn(130, { start: 250 }) : 250,
                  easing: 'easeOutElastic(1, .6)',
                });
              }
            })
            .catch(() => {
              document.querySelectorAll('.service-card-item, .service-card-badge').forEach((el) => {
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
    <section ref={sectionRef} className="w-full bg-[#dcfce7]/60 py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold text-[#1b8156] mb-3">
            Check our solar services
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Produce your own clean save <br />
            and the environment
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="service-card-item opacity-100 group bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Card Image */}
                <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content Area with Floating Center Badge */}
                <div className="relative pt-8 pb-7 px-5 text-center flex flex-col items-center flex-1">
                  <div className="service-card-badge opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-emerald-100 shadow-md flex items-center justify-center text-[#1b8156] group-hover:bg-[#1b8156] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5 group-hover:text-[#1b8156] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed max-w-[190px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}