'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

export default function VideoBannerSection() {
  return (
    <section className="w-full">
      {/* Top Solid Orange Banner */}
      <div className="w-full bg-[#f97316] py-3.5 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-white">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-2.5">
            <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80"
                alt="Client"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80"
                alt="Client"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            Discover independence through the power of solar
          </span>
        </div>
      </div>

      {/* Embedded Full-Width Video with No Controls */}
      <div className="relative w-full h-[420px] sm:h-[550px] overflow-hidden bg-slate-900 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          {/* High-quality royalty-free video of wind turbines and solar clear blue sky */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-wind-turbines-in-a-field-under-a-clear-blue-sky-42418-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Center Translucent Play Icon */}
        <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
          <Play className="w-6 h-6 fill-white translate-x-0.5" />
        </div>
      </div>
    </section>
  );
}