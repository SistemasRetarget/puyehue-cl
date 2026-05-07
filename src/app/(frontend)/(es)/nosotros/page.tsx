import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Nosotros | Hotel Termas de Puyehue Wellness & Spa Resort",
  description: "Conoce la historia del Hotel Termas de Puyehue. Más de 60 años de hospitalidad en el Parque Nacional Puyehue, Región de Los Lagos, Chile.",
  keywords: "historia Hotel Termas Puyehue, nosotros, Parque Nacional Puyehue, resort termas Chile",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | Hotel Termas de Puyehue",
    description: "Más de 60 años acogiendo a quienes buscan bienestar y naturaleza.",
    type: "website",
    locale: "es_CL",
    url: "https://puyehue.cl/nosotros",
  },
};

const VALORES = [
  {
    titulo: "Bienestar Integral",
    desc: "Cada espacio y servicio está diseñado para favorecer el equilibrio entre cuerpo, mente y espíritu.",
  },
  {
    titulo: "Sostenibilidad",
    desc: "Operamos en armonía con el Parque Nacional Puyehue, minimizando nuestro impacto y protegiendo el entorno natural.",
  },
  {
    titulo: "Hospitalidad Auténtica",
    desc: "Un equipo comprometido con que cada visitante se sienta bienvenido, cuidado y en casa.",
  },
  {
    titulo: "Calidad sin Excepción",
    desc: "Desde la gastronomía hasta los tratamientos, mantenemos estándares de excelencia en cada detalle.",
  },
];

const HITOS = [
  { año: "1960", texto: "Apertura del hotel, los primeros huéspedes llegan a las aguas termales del volcán Puyehue." },
  { año: "1985", texto: "Ampliación del circuito termal, incorporando piscinas exteriores y áreas de relajación." },
  { año: "2002", texto: "Renovación completa del spa y apertura del centro de bienestar terapéutico." },
  { año: "2011", texto: "Erupción del volcán Puyehue-Cordón Caulle. El hotel cierra temporalmente y se reconstruye." },
  { año: "2013", texto: "Reapertura con nueva infraestructura, manteniendo la esencia de un lugar único." },
  { año: "Hoy", texto: "Más de 60 años de historia, miles de huéspedes y un compromiso renovado con el bienestar." },
];

export default function Nosotros() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden -mt-20 lg:-mt-24">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=900&fit=crop"
          alt="Parque Nacional Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative h-full flex items-end pb-16 lg:pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">Nuestra historia</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight max-w-3xl">
              Más de 60 años<br />en el corazón<br />del volcán
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Quiénes somos</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink leading-tight mb-6">
                Un lugar donde la naturaleza sana
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  El Hotel Termas de Puyehue nació en 1960 como un refugio para quienes buscaban las
                  propiedades terapéuticas de las aguas termales del volcán Puyehue, en la Región de Los
                  Lagos, al sur de Chile.
                </p>
                <p>
                  Hoy somos un Wellness & Spa Resort de primer nivel, que combina la potencia sanadora de
                  las termas naturales con programas terapéuticos, gastronomía de autor y un entorno
                  natural de bosque nativo e imponentes volcanes.
                </p>
                <p>
                  Estamos ubicados dentro del Parque Nacional Puyehue, a 76 km de Osorno, un entorno
                  que nos impone una responsabilidad: cuidar el lugar que nos da razón de ser.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1000&fit=crop"
                alt="Hotel Termas de Puyehue"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Lo que nos guía</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
              Nuestros valores
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALORES.map((v) => (
              <div key={v.titulo} className="bg-white p-8 border border-brand-line">
                <h3 className="font-serif text-xl font-light text-brand-ink mb-4">{v.titulo}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Historia</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
              Nuestra trayectoria
            </h2>
          </div>
          <div className="space-y-0">
            {HITOS.map((hito, i) => (
              <div key={hito.año} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border border-brand-accent flex items-center justify-center shrink-0">
                    <span className="text-brand-accent font-light text-xs">{hito.año}</span>
                  </div>
                  {i < HITOS.length - 1 && (
                    <div className="w-px h-16 bg-brand-line mt-0" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-brand-muted leading-relaxed text-sm pt-3">{hito.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-ink text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Ven a conocernos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
            La historia la escribimos juntos
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Cada visita es una nueva página. Reserva tu estadía o ven a pasar el día.
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
              className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-medium text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Ven por el día
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
