'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Receipt, ShieldCheck, Video, PhoneCall, Handshake, Globe2 } from 'lucide-react';

export default function TrustedPartnerSection() {
  const [windTurbines, setWindTurbines] = useState(90);
  const [solarEnergy, setSolarEnergy] = useState(70);

  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        
        {/* ================= TOP ROW: 3 COLUMNS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 items-start">
          
          {/* Column 1: Your Trusted Energy Partner */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              Your Trusted <br /> Energy Partner
            </h3>
            
            <div className="mt-4 sm:mt-5 flex items-center gap-3">
              <div className="flex -space-x-3 overflow-hidden shrink-0">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
                    alt="Client review"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
                    alt="Client review"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80"
                    alt="Client review"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-xs font-bold text-slate-800 leading-tight">
                1200+ Clients <br />
                <span className="text-slate-500 font-normal">Through Reviews</span>
              </div>
            </div>
          </div>

          {/* Column 2: Financial Savings */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Receipt className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            </div>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900">Financial Savings</h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              since 1985 reed has pioneered special recruitment and sourcing
            </p>
          </div>

          {/* Column 3: Well Experienced */}
          <div className="space-y-2.5 sm:space-y-3 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            </div>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900">Well Experianced</h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              since 1985 reed has pioneered special recruitment and sourcing
            </p>
          </div>
        </div>

        {/* ================= BOTTOM ROW: SPLIT IMAGE & METRICS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Image with Video Button Badge */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solar technician inspecting panels"
                fill
                className="object-cover"
              />

              <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-md py-2 px-3 sm:px-4 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-white transition">
                <Video className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 whitespace-nowrap">
                  How solub working
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text, Feature Badges & Interactive Range Sliders */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 w-full">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold text-emerald-600">
              WHY CHOOSE OUR SOLUB
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Solar leaders your <br className="hidden sm:inline" />ideal partner
            </h2>

            <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
              whether it&apos;s on a website, an app, a search engine,this simple can evoke a mix of emotions from confusion to exasper but fear not, for in these moments, there are
            </p>

            {/* Sub-features: Commitment & Global Expert */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1 w-full max-w-full lg:max-w-md">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Handshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Meet with our</div>
                  <div className="text-xs text-slate-500">commitment</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Our global</div>
                  <div className="text-xs text-slate-500">expert</div>
                </div>
              </div>
            </div>

            {/* Sliders Container: Full width across mobile & tablet, constrained only on desktop */}
            <div className="space-y-7 pt-2 w-full max-w-full lg:max-w-lg">
              
              {/* Slider 1: Wind Turbines */}
              <div className="w-full">
                <span className="text-xs font-bold text-slate-700 block mb-2 sm:mb-3">wind turbines</span>
                <div className="relative flex items-center h-8 w-full">
                  {/* Track container */}
                  <div className="w-full h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ff7a00] transition-[width] duration-75"
                      style={{ width: `${windTurbines}%` }}
                    />
                  </div>

                  {/* Asymmetric badge: centered vertically on track */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-[left] duration-75 flex items-center"
                    style={{ left: `calc(clamp(0%, ${windTurbines}%, 96%) - 2px)` }}
                  >
                    <div className="w-7 h-7 bg-white border-2 border-[#ff7a00] rounded-tl-none rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold text-slate-900 leading-none">
                        {windTurbines}
                      </span>
                    </div>
                  </div>

                  {/* Invisible Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={windTurbines}
                    onChange={(e) => setWindTurbines(Number(e.target.value))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer h-full z-10"
                  />
                </div>
              </div>

              {/* Slider 2: Solar Energy */}
              <div className="w-full">
                <span className="text-xs font-bold text-slate-700 block mb-2 sm:mb-3">solar energy</span>
                <div className="relative flex items-center h-8 w-full">
                  {/* Track container */}
                  <div className="w-full h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ff7a00] transition-[width] duration-75"
                      style={{ width: `${solarEnergy}%` }}
                    />
                  </div>

                  {/* Asymmetric badge: centered vertically on track */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-[left] duration-75 flex items-center"
                    style={{ left: `calc(clamp(0%, ${solarEnergy}%, 96%) - 2px)` }}
                  >
                    <div className="w-7 h-7 bg-white border-2 border-[#ff7a00] rounded-tl-none rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold text-slate-900 leading-none">
                        {solarEnergy}
                      </span>
                    </div>
                  </div>

                  {/* Invisible Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={solarEnergy}
                    onChange={(e) => setSolarEnergy(Number(e.target.value))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer h-full z-10"
                  />
                </div>
              </div>

            </div>

            {/* Action Row: Calculate Cost & Call Info */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-3 w-full">
              <button className="bg-[#249662] hover:bg-[#1d7e52] text-white text-xs font-bold px-6 py-3.5 rounded-full transition shadow-sm text-center">
                Calculate cost
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Call us at</p>
                  <a href="tel:+6421248653" className="text-xs font-extrabold text-slate-900 hover:text-emerald-600 transition">
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