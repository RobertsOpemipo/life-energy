'use client';

import Image from 'next/image';
import { PhoneCall, CheckCircle2, SolarPanel, Globe } from 'lucide-react';

export default function SolarLeadersSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-10 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Dual Images */}
          <div className="md:col-span-5 relative flex items-center justify-center md:justify-start w-full">
            {/* Primary Large Image */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[290px] lg:w-[320px] h-[360px] sm:h-[400px] md:h-[380px] lg:h-[400px] rounded-3xl overflow-hidden shadow-md shrink-0">
              <Image
                src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solar technician on roof"
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary Overlapping Image */}
            <div className="absolute right-4 sm:right-10 md:-right-2 lg:-right-4 bottom-8 sm:bottom-10 md:bottom-10 w-[150px] sm:w-[175px] md:w-[165px] lg:w-[180px] h-[190px] sm:h-[220px] md:h-[205px] lg:h-[220px] rounded-2xl overflow-hidden border-4 border-white shadow-xl shrink-0">
              <Image
                src="https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Technician wiring solar modules"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content & Actions */}
          <div className="md:col-span-7 space-y-5 md:space-y-6 w-full">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold text-[#1b8156]">
              WHY CHOOSE OUR SOLUB
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Solar leaders your <br className="hidden sm:inline" />
              ideal partner
            </h2>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
              whether it&apos;s on a website, an app, a search engine,this simple can evoke a mix of emotions from confusion to exasper but fear not, for in these moments, there are
            </p>

            {/* 2 Orange Metrics Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-5 pt-1 w-full max-w-md md:max-w-none lg:max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f97316] flex items-center justify-center shrink-0">
                  <SolarPanel className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900">1400+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Installed Capacity</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f97316] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900">65%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Save The World</div>
                </div>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#16a34a] fill-[#16a34a]/10 shrink-0" />
                <span>Redefining energy with solar technology</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#16a34a] fill-[#16a34a]/10 shrink-0" />
                <span>Solar solutions for a brighter tomorrow</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-row items-stretch sm:items-center md:items-center gap-4 sm:gap-6 md:gap-6 pt-3">
              <button className="bg-[#249662] hover:bg-[#1d7e52] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition shadow-sm text-center">
                Calculate cost
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#1b8156] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Call us at</p>
                  <a href="tel:+6421248653" className="text-xs font-extrabold text-slate-900 hover:text-emerald-600 transition whitespace-nowrap">
                    +(642) 124 8653
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}