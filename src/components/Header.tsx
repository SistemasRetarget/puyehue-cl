'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { label: 'Experiencias', href: '/experiencias' },
  { label: 'Ven por el Día', href: '/ven-por-el-dia' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Ubicación', href: '/ubicacion' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // En home: transparente hasta que scrollea. En otras páginas: siempre blanco.
  const headerBg = isHome
    ? scrolled
      ? 'bg-white shadow-sm'
      : 'bg-transparent'
    : 'bg-white shadow-sm';

  const textColor = isHome && !scrolled ? 'text-white' : 'text-brand-ink';
  const hoverColor = isHome && !scrolled ? 'hover:text-white/70' : 'hover:text-brand-accent';
  const logoColor = isHome && !scrolled ? 'text-white' : 'text-brand-ink';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className={`font-serif text-xl font-light tracking-widest transition-colors duration-300 ${logoColor}`}>
            PUYEHUE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-200 ${textColor} ${hoverColor} ${
                pathname === item.href ? 'opacity-100 border-b border-current pb-0.5' : 'opacity-80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Reservar */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className={`hidden md:inline-flex px-7 py-2.5 text-xs font-medium uppercase tracking-widest transition-all duration-200 ${
              isHome && !scrolled
                ? 'bg-white text-brand-ink hover:bg-white/90'
                : 'bg-brand-accent text-white hover:bg-brand-accent/90'
            }`}
          >
            Reservar
          </Link>

          {/* Hamburger mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
            className={`lg:hidden p-2 transition-colors ${textColor}`}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-brand-line`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-[0.15em] py-3 border-b border-brand-line/50 transition-colors ${
                pathname === item.href
                  ? 'text-brand-accent font-medium'
                  : 'text-brand-ink hover:text-brand-accent'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full py-3 bg-brand-accent text-white text-center text-xs font-medium uppercase tracking-widest hover:bg-brand-accent/90 transition-colors"
          >
            Reservar
          </Link>
        </nav>
      </div>
    </header>
  );
}
