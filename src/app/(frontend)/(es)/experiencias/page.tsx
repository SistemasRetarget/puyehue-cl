import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Experiencias | Hotel Termas de Puyehue Wellness & Spa Resort",
  description: "Descubre todo lo que puedes vivir en el Hotel Termas de Puyehue: termas, trekking, spa, gastronomía, actividades en el Parque Nacional Puyehue.",
  keywords: "experiencias Puyehue, termas, trekking, spa, actividades Parque Nacional Puyehue, qué hacer Puyehue",
  alternates: { canonical: "/experiencias" },
  openGraph: {
    title: "Experiencias | Hotel Termas de Puyehue",
    description: "Termas, trekking, spa y más. Una experiencia única en el sur de Chile.",
    type: "website",
    locale: "es_CL",
    url: "https://puyehue.cl/experiencias",
  },
};

const CATEGORIAS = [
  {
    tag: "Bienestar",
    titulo: "Circuito Termal",
    desc: "Piscinas termales interiores y exteriores con aguas de origen volcánico. Temperaturas entre 36°C y 42°C, ricas en minerales naturales que relajan y regeneran.",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    items: ["Piscinas interiores a 38°C", "Piscinas exteriores a 36°C", "Jacuzzi termal", "Baños de vapor"],
  },
  {
    tag: "Spa",
    titulo: "Tratamientos & Masajes",
    desc: "Desde masajes de relajación hasta terapias de lodo volcánico. Tratamientos diseñados para restablecer el equilibrio y profundizar el efecto de las aguas termales.",
    img: "https://images.unsplash.com/photo-1544161515-81aae3ff8b47?w=800&h=600&fit=crop",
    items: ["Masaje relajante (60 min)", "Masaje con piedras volcánicas", "Envolturas de algas", "Exfoliación corporal"],
  },
  {
    tag: "Naturaleza",
    titulo: "Trekking & Aventura",
    desc: "El Parque Nacional Puyehue ofrece rutas de distintas dificultades entre bosques de araucaria, ríos y vistas al volcán. Guías certificados disponibles.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    items: ["Sendero Antillanca", "Trekking al volcán Puyehue", "Birdwatching guiado", "Cascadas Aguas Calientes"],
  },
  {
    tag: "Gastronomía",
    titulo: "Cocina del Sur",
    desc: "Restaurantes con vista al bosque y menú de temporada basado en ingredientes locales. Trucha del lago, cordero patagónico y repostería artesanal.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    items: ["Restaurante principal (vistas al parque)", "Terraza de verano", "Bar con cervezas artesanales", "Cenas temáticas"],
  },
  {
    tag: "Wellness",
    titulo: "Programas Terapéuticos",
    desc: "Programas de 3 a 5 noches diseñados para el detox, anti-estrés y bienestar integral. Médico y especialistas disponibles durante la estadía.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    items: ["Programa Detox (3 noches)", "Programa Anti-Stress (4 noches)", "Programa Bienestar (5 noches)", "Consulta médica incluida"],
  },
  {
    tag: "Invierno",
    titulo: "Ski & Deportes de Nieve",
    desc: "A 18 km del hotel, el Centro de Ski Antillanca ofrece pistas para todos los niveles con vista al Lago Rupanco y al Golfo de Ancud en días despejados.",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    items: ["Traslado gratuito al Centro Ski Antillanca", "Arriendo de equipos disponible", "Clases para principiantes", "Combinación ski + termas"],
  },
];

export default function Experiencias() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden -mt-20 lg:-mt-24">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=900&fit=crop"
          alt="Experiencias en Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative h-full flex items-end pb-16 lg:pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">Qué vivir</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight max-w-3xl">
              Experiencias que no se olvidan
            </h1>
            <p className="mt-6 text-white/90 text-lg max-w-2xl font-light">
              Termas, spa, naturaleza y gastronomía. Todo en un solo lugar, en el Parque Nacional Puyehue.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Descubre</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
              Todo lo que puedes vivir
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIAS.map((cat) => (
              <div
                key={cat.titulo}
                className="group border border-brand-line hover:border-brand-accent transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs uppercase tracking-[0.2em] bg-white/90 text-brand-accent px-3 py-1">
                      {cat.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-light text-brand-ink mb-3">{cat.titulo}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-5">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-brand-muted">
                        <span className="text-brand-accent mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop"
          alt="Volcán Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-light leading-tight italic">
              &quot;El Parque Nacional Puyehue es uno de los entornos naturales más
              espectaculares del sur de Chile. Nuestro trabajo es que lo disfrutes.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-soft">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Reserva</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink leading-tight mb-6">
            Elige tu experiencia
          </h2>
          <p className="text-brand-muted text-lg mb-10">
            Desde una visita de día hasta una estadía de bienestar completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-10 py-4 bg-brand-accent text-white font-medium text-sm uppercase tracking-widest hover:bg-brand-accent/90 transition-colors"
            >
              Reservar estadía
            </Link>
            <Link
              href="/ven-por-el-dia"
              className="inline-flex items-center justify-center px-10 py-4 bg-brand-ink text-white font-medium text-sm uppercase tracking-widest hover:bg-brand-accent transition-colors"
            >
              Day pass — Ven por el día
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
