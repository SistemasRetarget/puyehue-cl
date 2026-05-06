'use client';

import Link from 'next/link';

const FOOTER_LINKS = {
  destino: [
    { label: 'Parque Nacional', href: '/destino' },
    { label: 'Cómo Llegar', href: '/destino#como-llegar' },
    { label: 'Clima', href: '/destino#clima' },
  ],
  hotel: [
    { label: 'Habitaciones', href: '/hotel' },
    { label: 'Bungalows', href: '/hotel#bungalows' },
    { label: 'Restaurantes', href: '/hotel#restaurantes' },
    { label: 'Spa', href: '/hotel#spa' },
  ],
  experiencias: [
    { label: 'Termas', href: '/que-hacer' },
    { label: 'Programas', href: '/programas' },
    { label: 'Eventos', href: '/eventos' },
    { label: 'Ven por el Día', href: '/ven-por-el-dia' },
  ],
  empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Sostenibilidad', href: '/sostenibilidad' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Trabaja con Nosotros', href: '/empleos' },
  ],
};

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
            <p className="text-white/70 text-sm">
              Recibe ofertas exclusivas, novedades y promociones especiales.
            </p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-brand-accent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brand-accent text-white text-sm uppercase tracking-widest font-medium hover:bg-brand-accent/90 transition-colors"
            >
              Suscribir
            </button>
          </form>
        </div>
      </div>

      {/* Links principales */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo + descripción */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-light mb-4 inline-block">
              PUYEHUE
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Hotel Termas de Puyehue Wellness & Spa Resort.
              Tu destino de bienestar en el sur de Chile.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-accent mb-4">Destino</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.destino.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-accent mb-4">Hotel</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.hotel.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-accent mb-4">Experiencias</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.experiencias.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-accent mb-4">Empresa</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm text-white/70">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Reservas</p>
            <p>+56 2 2293 6000</p>
            <p>reservas@puyehue.cl</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Ubicación</p>
            <p>Ruta 215, km 76, Puyehue</p>
            <p>Región de Los Lagos, Chile</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Síguenos</p>
            <div className="flex gap-4">
              <a href="https://instagram.com/hoteltermaspuyehue" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/hoteltermaspuyehue" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Hotel Termas de Puyehue. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/politica-privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos-condiciones" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
