import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Cómo Llegar | Hotel Termas de Puyehue",
  description: "Hotel Termas de Puyehue ubicado en Ruta 215, km 76, Parque Nacional Puyehue, Región de Los Lagos. A 76 km de Osorno, accesible en auto, bus y avión.",
  keywords: "cómo llegar Hotel Termas Puyehue, ubicación, dirección, desde Osorno, Parque Nacional Puyehue",
  alternates: { canonical: "/ubicacion" },
  openGraph: {
    title: "Cómo Llegar | Hotel Termas de Puyehue",
    description: "A 76 km de Osorno, en el corazón del Parque Nacional Puyehue.",
    type: "website",
    locale: "es_CL",
    url: "https://puyehue.cl/ubicacion",
  },
};

const COMO_LLEGAR = [
  {
    icono: "🚗",
    titulo: "En auto",
    pasos: [
      "Desde Osorno, tomar Ruta 215 (dirección Puyehue)",
      "Continuar ~76 km hacia el este",
      "Seguir señalética hacia Hotel Termas de Puyehue",
      "El viaje dura aproximadamente 1 hora desde Osorno",
    ],
  },
  {
    icono: "✈️",
    titulo: "En avión",
    pasos: [
      "Volar a Aeropuerto de Osorno (OZA) o Puerto Montt (PMC)",
      "Desde Osorno: 1 hora en auto (76 km)",
      "Desde Puerto Montt: 2 horas en auto (~130 km)",
      "Coordinamos traslado privado previa reserva",
    ],
  },
  {
    icono: "🚌",
    titulo: "En bus",
    pasos: [
      "Buses desde Osorno hacia Aguas Calientes o Entre Lagos",
      "Bajarse en el desvío hacia Hotel Termas de Puyehue",
      "Servicio regular en temporada alta",
      "Consultar horarios con anterioridad",
    ],
  },
];

const DISTANCIAS = [
  { origen: "Osorno", distancia: "76 km", tiempo: "~1 hora" },
  { origen: "Puerto Montt", distancia: "130 km", tiempo: "~2 horas" },
  { origen: "Valdivia", distancia: "200 km", tiempo: "~2.5 horas" },
  { origen: "Santiago", distancia: "870 km", tiempo: "Vuelo + traslado" },
];

export default function Ubicacion() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden -mt-20 lg:-mt-24">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop"
          alt="Parque Nacional Puyehue — paisaje"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative h-full flex items-end pb-16 lg:pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">Cómo llegar</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-light leading-tight">
              Parque Nacional Puyehue,<br />Región de Los Lagos
            </h1>
          </div>
        </div>
      </section>

      {/* DIRECCIÓN */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-serif text-lg font-light text-brand-ink mb-2">Dirección</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Ruta 215, km 76<br />Parque Nacional Puyehue<br />Región de Los Lagos, Chile
              </p>
            </div>
            <div className="p-8 border-x border-brand-line">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="font-serif text-lg font-light text-brand-ink mb-2">Coordenadas</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                40°35′42″ S<br />72°10′24″ O
              </p>
            </div>
            <div className="p-8">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-serif text-lg font-light text-brand-ink mb-2">Teléfono</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                +56 64 2 331 400<br />
                <a href="mailto:reservas@puyehue.cl" className="text-brand-accent hover:underline">
                  reservas@puyehue.cl
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="py-0">
        <div className="w-full h-[450px] bg-brand-soft relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12234.567!2d-72.17!3d-40.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961b3b90f7c8f8b5%3A0x1234567890abcdef!2sHotel%20Termas%20de%20Puyehue!5e0!3m2!1ses!2scl!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0, filter: "grayscale(20%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Hotel Termas de Puyehue"
          />
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Accesos</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
              Cómo llegar
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {COMO_LLEGAR.map((opcion) => (
              <div key={opcion.titulo} className="border border-brand-line p-8">
                <div className="text-4xl mb-4">{opcion.icono}</div>
                <h3 className="font-serif text-xl font-light text-brand-ink mb-6">{opcion.titulo}</h3>
                <ol className="space-y-3">
                  {opcion.pasos.map((paso, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-muted leading-relaxed">
                      <span className="text-brand-accent font-medium shrink-0">{i + 1}.</span>
                      <span>{paso}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTANCIAS */}
      <section className="py-24 bg-brand-soft">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Referencia</p>
            <h2 className="font-serif text-4xl font-light text-brand-ink">
              Distancias desde ciudades
            </h2>
          </div>
          <div className="border border-brand-line bg-white">
            {DISTANCIAS.map((d, i) => (
              <div
                key={d.origen}
                className={`grid grid-cols-3 p-5 items-center ${i < DISTANCIAS.length - 1 ? "border-b border-brand-line" : ""}`}
              >
                <span className="font-serif text-lg text-brand-ink">{d.origen}</span>
                <span className="text-brand-muted text-center text-sm">{d.distancia}</span>
                <span className="text-brand-accent text-right text-sm font-medium">{d.tiempo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-ink text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">¿Listo para venir?</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
            Te esperamos en el parque
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Reserva tu estadía o visita diaria con anticipación. En temporada alta los cupos se agotan rápido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-10 py-4 bg-brand-accent text-white font-medium text-sm uppercase tracking-widest hover:bg-brand-accent/90 transition-colors"
            >
              Reservar ahora
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
