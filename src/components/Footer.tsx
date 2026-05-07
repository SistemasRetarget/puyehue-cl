'use client';

import Link from 'next/link';

const FOOTER_COLS = [
  {
    titulo: 'Experiencias',
    links: [
      { label: 'Circuito Termal', href: '/experiencias' },
      { label: 'Spa & Tratamientos', href: '/experiencias' },
      { label: 'Trekking & Naturaleza', href: '/experiencias' },
      { label: 'Ven por el Día', href: '/ven-por-el-dia' },
    ],
  },
  {
    titulo: 'Programas',
    links: [
      { label: 'Programa Detox', href: '/experiencias' },
      { label: 'Programa Anti-Stress', href: '/experiencias' },
      { label: 'Programa Bienestar', href: '/experiencias' },
      { label: 'Ski Antillanca', href: '/experiencias' },
    ],
  },
  {
    titulo: 'Hotel',
    links: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Cómo Llegar', href: '/ubicacion' },
      { label: 'Contacto & Reservas', href: '/contacto' },
      { label: 'Aviso Legal', href: '/legal' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">

      {/* Newsletter */}
      <div className="border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">
              Suscríbete a nuestras novedades
            </h3>
            <p className="text-white/60 text-sm">
              Ofertas exclusivas, temporadas y promociones especiales.
            </p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-brand-accent text-sm"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brand-accent text-white text-xs uppercase tracking-widest font-medium hover:bg-brand-accent/90 transition-colors"
            >
              Suscribir
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo + desc */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-xl font-light tracking-widest inline-block mb-4">
              PUYEHUE
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Hotel Termas de Puyehue<br />
              Wellness & Spa Resort<br />
              Parque Nacional Puyehue,<br />
              Región de Los Lagos.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.titulo}>
              <h4 className="text-xs uppercase tracking-widest text-brand-accent mb-5">{col.titulo}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contacto directo */}
      <div className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm text-white/60">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Reservas</p>
            <a href="tel:+56642331400" className="block hover:text-white transition-colors">
              +56 64 2 331 400
            </a>
            <a href="mailto:reservas@puyehue.cl" className="block hover:text-white transition-colors">
              reservas@puyehue.cl
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Ubicación</p>
            <p>Ruta 215, km 76</p>
            <p>Parque Nacional Puyehue</p>
            <p>Región de Los Lagos, Chile</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Síguenos</p>
            <div className="flex gap-5">
              <a
                href="https://instagram.com/hoteltermaspuyehue"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/hoteltermaspuyehue"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Hotel Termas de Puyehue. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-white/70 transition-colors">
              Aviso Legal
            </Link>
            <Link href="/legal" className="hover:text-white/70 transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
