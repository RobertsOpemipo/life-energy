'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, PhoneCall, Menu, X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-100 py-3 px-4 sm:px-8 lg:px-12 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <BrandLogo size="md" className="group-hover:scale-105 transition-transform" />
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
            LifeEnergy
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive ? 'text-[#1b8156]' : 'text-slate-800 hover:text-[#1b8156]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Search & Phone CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-100/90 rounded-full px-4 py-2 border border-slate-200/70 focus-within:border-[#1b8156] focus-within:bg-white transition-all">
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-xs text-slate-700 outline-none w-20 md:w-28 focus:w-36 transition-all placeholder:text-slate-400"
            />
          </div>

          <a
            href="tel:+9993265464968"
            className="flex items-center gap-2 bg-[#1b8156] hover:bg-[#156d48] text-white text-xs font-semibold px-4 py-2 rounded-full transition shadow-sm shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden md:inline">+999 3265 464968</span>
            <span className="md:hidden">Call</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pt-4 pb-6 px-2 border-t border-slate-100 mt-3 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-emerald-50 text-[#1b8156]' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 bg-slate-100/90 rounded-xl px-3.5 py-2.5 border border-slate-200">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-xs text-slate-700 outline-none w-full"
              />
            </div>

            <a
              href="tel:+9993265464968"
              className="flex items-center justify-center gap-2 bg-[#1b8156] text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+999 3265 464968</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}