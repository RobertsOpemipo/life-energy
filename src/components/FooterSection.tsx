'use client';

import { 
  PhoneCall, 
  ArrowRight, 
  Mail, 
  MapPin 
} from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#d5f5e3]/60 pt-16 pb-10 px-6 sm:px-12 border-t border-emerald-100">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* ================= 1. FLOATING CTA BANNER ================= */}
        <div className="w-full bg-[#1b8156] rounded-2xl p-6 sm:px-10 sm:py-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-950/10">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center md:text-left tracking-tight">
            Let&apos;s talk about next solar challenge
          </h3>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <button className="bg-[#ff6f00] hover:bg-[#e66300] text-white text-xs font-bold px-7 py-3.5 rounded-xl shadow-md shadow-orange-950/20 transition active:scale-95">
              Get Started Now
            </button>

            <a
              href="tel:+9993265464968"
              className="flex items-center gap-2 text-white/90 hover:text-white text-xs font-bold transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>+999 3265 464968</span>
            </a>
          </div>
        </div>

        {/* ================= 2. FOUR COLUMN FOOTER NAVIGATION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start pt-2">
          
          {/* Col 1: Brand & Newsletter */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-orange-400 inline-block shadow-sm" />
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">LifeEnergy</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-xs font-medium">
              Our highly skilled development teams specialized in data analysis.
            </p>

            {/* Newsletter input pill */}
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full bg-[#e8fbf1] border border-slate-300/80 rounded-2xl py-3 pl-4 pr-12 text-xs text-slate-800 placeholder:text-slate-500 outline-none focus:border-[#1b8156]"
              />
              <button
                type="button"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-[#249662] hover:bg-[#1b8156] text-white flex items-center justify-center transition shadow-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Solub Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold text-slate-900 mb-4">Solub services</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><a href="#" className="hover:text-[#1b8156] transition">Wind turbines</a></li>
              <li><a href="#" className="hover:text-[#1b8156] transition">Charge controller</a></li>
              <li><a href="#" className="hover:text-[#1b8156] transition">Solar panel cover</a></li>
              <li><a href="#" className="hover:text-[#1b8156] transition">Fossil resources</a></li>
              <li><a href="#" className="hover:text-[#1b8156] transition">Battery materials</a></li>
            </ul>
          </div>

          {/* Col 3: Other Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-extrabold text-slate-900 mb-4">Other pages</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><a href="/about" className="hover:text-[#1b8156] transition">About</a></li>
              <li><a href="/service" className="hover:text-[#1b8156] transition">Services</a></li>
              <li><a href="#" className="hover:text-[#1b8156] transition">How It Works</a></li>
              <li><a href="#" className="hover:text-[#1b8156] transition">Pricing plan</a></li>
              <li><a href="/blog" className="hover:text-[#1b8156] transition">Blog</a></li>
              <li><a href="/contact" className="hover:text-[#1b8156] transition">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold text-slate-900 mb-4">Contact Us</h4>
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <a href="tel:+8783126464986" className="flex items-center gap-2.5 hover:text-[#1b8156] transition">
                <PhoneCall className="w-4 h-4 text-[#1b8156] shrink-0" />
                <span>+878 3126 464986</span>
              </a>

              <a href="mailto:Lifenergy@Info.Com" className="flex items-center gap-2.5 hover:text-[#1b8156] transition">
                <Mail className="w-4 h-4 text-[#1b8156] shrink-0" />
                <span>Lifenergy@Info.Com</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1b8156] shrink-0 mt-0.5" />
                <span>1234 Sydney Lake Street, 563 South Bend.</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 3. BOTTOM COPYRIGHT & EXACT SOCIAL TILES ================= */}
        <div className="pt-8 border-t border-slate-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            Copyright© 2024 <span className="font-bold text-[#1b8156]">Solub.</span> All Rights Reserved
          </p>

          <div className="flex items-center gap-2">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#1b8156] flex items-center justify-center hover:bg-[#1b8156] hover:text-white transition shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* X */}
            <a
              href="#"
              aria-label="X"
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#1b8156] flex items-center justify-center hover:bg-[#1b8156] hover:text-white transition shadow-sm font-sans font-bold text-xs"
            >
              X
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#1b8156] flex items-center justify-center hover:bg-[#1b8156] hover:text-white transition shadow-sm font-sans font-bold text-xs lowercase"
            >
              in
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#1b8156] flex items-center justify-center hover:bg-[#1b8156] hover:text-white transition shadow-sm font-sans font-bold text-xs lowercase"
            >
              fb
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}