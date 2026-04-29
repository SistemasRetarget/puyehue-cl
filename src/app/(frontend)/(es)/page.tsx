import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPage, listHouses, imageForPage, extractParagraphs } from "@/lib/content";
import Features from "@/components/sections/Features";
// import Testimonials from "@/components/Testimonials";
// import FAQ from "@/components/FAQ";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Puyehue | Refugios de Montaña en Puyehue, Región de Los Lagos",
  description: "Descubre refugios rodeados de naturaleza en Puyehue. Diseño, calma y montaña en el corazón de la Región de Los Lagos. Conoce nuestras propiedades exclusivas.",
  keywords: "refugios Puyehue, cabañas Los Lagos, turismo naturaleza, montaña Puyehue, arriendo cabañas",
  openGraph: {
    title: "Puyehue | Refugios de Montaña en Puyehue",
    description: "Refugios rodeados de naturaleza, diseño y calma en Puyehue.",
    type: "website",
    locale: "es_CL",
    url: "https://puyehue.cl"
  },
  twitter: {
    card: "summary_large_image",
    title: "Puyehue | Refugios de Montaña en Puyehue",
    description: "Refugios rodeados de naturaleza, diseño y calma en Puyehue."
  }
};

export default function Home() {
  const home = getPage("es", "home");
  const houses = listHouses("es");
  const heroImg = home ? imageForPage("es__home", "/media//media/placeholder.svg") : "/media//media/placeholder.svg";
  const intro = home ? extractParagraphs(home, 2)[0] : "";

  return (
    <>
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden -mt-20 lg:-mt-24">
        <img
          src={heroImg}
          alt="Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            Tu refugio en la montaña
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl opacity-95">
            Refugios amoblados inmersos en la naturaleza con vistas al volcán Puyehue y al lago Puyehue.
          </p>
        </div>
      </section>

      {/* SECTION 2: Rich text — narrativa de marca (matches prod section 3) */}
      <section className="py-section bg-brand-soft">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-ink leading-tight">
            Puyehue nace de la idea de volver a lo esencial.
          </h2>
          <p className="mt-6 text-brand-muted leading-relaxed text-lg">
            Un lugar donde la naturaleza, el diseño y la calma se cruzan para crear un nuevo sentido de habitar la montaña. Aquí cada refugio se piensa como un espacio integrado al entorno, con el volcán como horizonte y el ritmo del lago como telón de fondo.
          </p>
        </div>
      </section>

      {/* SECTION 3: Tres Pilares (Features) — matches prod section 4 */}
      <Features locale="es" />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light">Un lugar para quedarte el tiempo que necesites</h2>
            <div className="space-y-5 text-brand-muted leading-relaxed text-lg">
              <p>
                Arriendo de refugios amoblados integrados al paisaje, con luz natural y vistas al volcán Puyehue.
              </p>
              <p>
                Como en todo refugio de montaña, hay un punto de encuentro: La Cabaña, un espacio para un café, algo rico para comer, para trabajar con calma o simplemente cruzarse con otros de manera natural.
              </p>
              <p>
                Con un equipo atento, arriendo flexible y una ubicación privilegiada —cerca del parque nacional, envuelto en el bosque— Puyehue propone una forma de vivir simple, conectada y tranquila desde el primer día.
              </p>
            </div>
          </div>
          <div className="relative h-[480px] overflow-hidden bg-brand-soft hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
              alt="Vista panorámica del lago Puyehue"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Espacios para quedarse — 4 columnas horizontales matching prod */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl mb-4 font-light">Refugios para tu aventura</h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Cada refugio ofrece una experiencia única, conectada con la naturaleza y las aventuras del Parque Nacional Puyehue.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              slug: "refugio-bosque",
              name: "Refugio Bosque",
              specs: "2 HABITACIONES / 2 BAÑOS",
              desc: "Integrado al bosque nativo, ideal para quienes buscan conexión directa con la naturaleza.",
              img: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=500&fit=crop",
            },
            {
              slug: "refugio-lago",
              name: "Refugio Lago",
              specs: "2 HABITACIONES / 2 BAÑOS",
              desc: "Con vistas al lago Puyehue, perfecto para disfrutar de atardeceres inolvidables.",
              img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
            },
            {
              slug: "refugio-volcan",
              name: "Refugio Volcán",
              specs: "2 HABITACIONES / 2 BAÑOS",
              desc: "Vistas panorámicas al volcán Puyehue, con acceso directo a senderos de montaña.",
              img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
            },
            {
              slug: "refugio-suite",
              name: "Refugio Suite",
              specs: "1 HABITACIÓN / 1,5 BAÑOS",
              desc: "Espacio íntimo y acogedor, diseñado para parejas que buscan tranquilidad y confort.",
              img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=500&fit=crop",
            },
          ].map((refugio) => (
            <Link
              key={refugio.slug}
              href={`/refugios/${refugio.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-soft mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={refugio.img}
                  alt={refugio.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl font-light text-brand-ink mb-2">
                {refugio.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-3">
                {refugio.specs}
              </p>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                {refugio.desc}
              </p>
              <span className="inline-flex items-center text-sm text-brand-ink group-hover:text-brand-accent transition-colors">
                ver más →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 6: Promo bar Estadías flexibles — matches prod section 8 */}
      <section className="py-section bg-brand-ink text-white">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">Aventuras todo el año</h2>
              <p className="mt-3 text-white/80 text-lg max-w-2xl">
                Disfruta de nuestras actividades de turismo de aventura en cualquier estación.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/actividades" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-accent text-white font-medium hover:bg-brand-accent/90 transition-colors">
                Reservar
              </Link>
              <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-colors">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Actividades que le dan vida a Puyehue — header + carousel */}
      <section className="bg-brand-soft py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-ink leading-tight mb-6">
                Actividades que le dan vida a Puyehue
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed">
                Descubre las aventuras que te esperan en Puyehue: desde senderos en el Parque Nacional,
                cabalgatas al atardecer, kayak en el lago, hasta caminatas con raquetas de nieve y ascensos al volcán.
              </p>
            </div>
            <Link
              href="/actividades"
              className="hidden lg:inline-flex items-center gap-3 text-sm uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors whitespace-nowrap"
            >
              Ver todas <span className="text-2xl">→</span>
            </Link>
          </div>

          {/* Carousel grid - 4 cards visibles, match PROD actividades gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=500&fit=crop", tag: "Senderismo", title: "Sendero El Puye" },
              { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=500&fit=crop", tag: "Cabalgatas", title: "Cabalgatas al atardecer" },
              { src: "https://images.unsplash.com/photo-1540202404-1b927e27fa86?w=400&h=500&fit=crop", tag: "Kayak", title: "Kayak en el lago" },
              { src: "https://images.unsplash.com/photo-1518671019055-9a4b857cbb2d?w=400&h=500&fit=crop", tag: "Montaña", title: "Ascenso Volcán Puyehue" },
            ].map((actividad, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden bg-brand-soft group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={actividad.src}
                  alt={actividad.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs uppercase tracking-widest text-white/80 mb-1">{actividad.tag}</p>
                  <p className="font-serif text-lg text-white font-light leading-tight">{actividad.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 text-center lg:hidden">
            <Link
              href="/actividades"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors"
            >
              Ver todas las actividades <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: Quote parallax full-width — matches prod */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
          alt="Volcán Puyehue con vista al lago"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="relative h-full flex items-center px-6 lg:px-16">
          <div className="max-w-2xl">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight">
              La aventura en la naturaleza que hoy buscamos, con montaña y lago, en el corazón de Los Lagos
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8.5: Vida en Puyehue — 3-photo grid match PROD */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Vida en Puyehue</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Espacios pensados para conectar con la naturaleza, integrados al paisaje del Parque Nacional.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop", alt: "Bosque nativo" },
              { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=500&fit=crop", alt: "Vista al volcán" },
              { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop", alt: "Sendero en el bosque" },
              { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop", alt: "Lago Puyehue" },
            ].map((img, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden bg-brand-soft group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Inline contact form — matches prod section 11 */}
      <section className="py-section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">Estamos aquí para ayudarte</h2>
            <p className="mt-3 text-brand-muted leading-relaxed">
              Si quieres conocer más detalles o coordinar una visita, escríbenos.
            </p>
          </div>
          <form action="/api/contact" method="POST" className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" required placeholder="Nombre" className="w-full px-4 py-3 border border-brand-line rounded-md focus:outline-none focus:ring-1 focus:ring-brand-accent" />
              <input name="email" type="email" required placeholder="Correo electrónico" className="w-full px-4 py-3 border border-brand-line rounded-md focus:outline-none focus:ring-1 focus:ring-brand-accent" />
            </div>
            <input name="phone" type="tel" placeholder="Teléfono" className="w-full px-4 py-3 border border-brand-line rounded-md focus:outline-none focus:ring-1 focus:ring-brand-accent" />
            <textarea name="message" required rows={4} placeholder="Mensaje" className="w-full px-4 py-3 border border-brand-line rounded-md focus:outline-none focus:ring-1 focus:ring-brand-accent" />
            <button type="submit" className="justify-self-start px-8 py-4 rounded-full bg-brand-accent text-white font-medium hover:bg-brand-accent/90 transition-colors">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 10: Feature bar — matches prod section 12 */}
      <section className="py-section-sm border-t border-brand-line bg-brand-bg">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <li>
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Temporada</p>
              <p className="font-serif text-lg text-brand-ink">Aventuras todo el año</p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Entorno</p>
              <p className="font-serif text-lg text-brand-ink">Parque Nacional</p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Paisaje</p>
              <p className="font-serif text-lg text-brand-ink">Volcán y lago</p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Experiencia</p>
              <p className="font-serif text-lg text-brand-ink">Turismo aventura</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
