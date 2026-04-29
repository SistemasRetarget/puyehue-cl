'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const MENU_ITEMS = [
  { label: 'Promociones', href: '/promociones' },
  { label: 'Destino', href: '/destino' },
  { label: 'Hotel', href: '/hotel' },
  { label: 'Qué Hacer', href: '/que-hacer' },
  { label: 'Programas', href: '/programas' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Sostenibilidad', href: '/sostenibilidad' },
  { label: 'Ven por el Día', href: '/ven-por-el-dia' },
];

const LANGUAGES = [
  { code: 'es', label: 'ES', flag: '🇨🇱' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'ar', label: 'ARG', flag: '🇦🇷' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="text-2xl font-serif font-light text-brand-ink">
            PUYEHUE
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Languages + CTA */}
        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang.code)}
                className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                  currentLang === lang.code
                    ? 'text-brand-accent'
                    : 'text-brand-muted hover:text-brand-ink'
                }`}
                title={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:inline-flex px-6 py-2 rounded-full bg-brand-accent text-white font-medium text-sm uppercase tracking-widest hover:bg-brand-accent/90 transition-colors duration-200">
            Reservar
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-brand-soft rounded-lg transition-colors"
          >
            {isOpen ? (
              <svg className="w-6 h-6 text-brand-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-brand-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-brand-line">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-4 w-full px-6 py-2 rounded-full bg-brand-accent text-white font-medium text-sm uppercase tracking-widest hover:bg-brand-accent/90 transition-colors">
              Reservar
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
