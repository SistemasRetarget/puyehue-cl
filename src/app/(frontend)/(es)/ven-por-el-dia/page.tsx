import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Ven por el Día — Circuito Termal y Day Spa",
  description:
    "Disfruta del circuito termal, almuerzo en nuestros restaurantes y áreas de relajación sin necesidad de hospedarte. Day pass en Hotel Termas de Puyehue.",
  alternates: { canonical: "/ven-por-el-dia" },
  openGraph: {
    title: "Ven por el Día | Hotel Termas de Puyehue",
    description:
      "Circuito termal, gastronomía y relajación en una sola visita.",
    type: "website",
    locale: "es_CL",
    url: "/ven-por-el-dia",
  },
};

const INCLUYE = [
  {
    icon: "♨️",
    title: "Circuito Termal Completo",
    desc: "Acceso a piscinas termales interiores y exteriores, jacuzzi y áreas de descanso.",
  },
  {
    icon: "🍽️",
    title: "Almuerzo en Restaurantes",
    desc: "Gastronomía con productos locales en nuestros restaurantes principales.",
  },
  {
    icon: "🧖",
    title: "Áreas de Relajación",
    desc: "Salas de descanso, zonas tranquilas y espacios al aire libre con vista al parque.",
  },
  {
    icon: "🅿️",
    title: "Estacionamiento",
    desc: "Estacionamiento incluido en el predio del hotel sin costo adicional.",
  },
];

const HORARIOS = [
  { dia: "Lunes a Viernes", horario: "10:00 — 19:00" },
  { dia: "Sábados, Domingos y Festivos", horario: "09:00 — 20:00" },
];

const PLANES = [
  {
    nombre: "Day Pass Termal",
    precio: "$45.000",
    detalle: "Por persona adulta",
    incluye: [
      "Circuito termal completo",
      "Acceso por el día",
      "Áreas de relajación",
      "Estacionamiento",
    ],
    destacado: false,
  },
  {
    nombre: "Day Pass + Almuerzo",
    precio: "$78.000",
    detalle: "Por persona adulta",
    incluye: [
      "Circuito termal completo",
      "Almuerzo en restaurante principal",
      "Áreas de relajación",
      "Estacionamiento",
      "Toalla y bata",
    ],
    destacado: true,
  },
  {
    nombre: "Day Pass Familiar",
    precio: "$140.000",
    detalle: "2 adultos + 2 niños",
    incluye: [
      "Circuito termal para toda la familia",
      "Almuerzo familiar",
      "Áreas recreativas",
      "Estacionamiento",
    ],
    destacado: false,
  },
];

export default function VenPorElDia() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden -mt-20 lg:-mt-24">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&h=900&fit=crop"
          alt="Circuito termal Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative h-full flex items-end pb-16 lg:pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4">Visita Diaria</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight max-w-3xl">
              Ven por el Día
            </h1>
            <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl font-light">
              Circuito termal, gastronomía y relajación en una sola visita. Sin necesidad de hospedarte.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Tu Día Termal</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
              Qué incluye tu visita
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INCLUYE.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-light text-brand-ink mb-3">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="py-24 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Tarifas</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
              Elige tu plan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PLANES.map((plan) => (
              <div
                key={plan.nombre}
                className={`p-8 border transition-all ${
                  plan.destacado
                    ? "bg-white border-brand-orange shadow-lg scale-105"
                    : "bg-white border-brand-line hover:border-brand-accent"
                }`}
              >
                {plan.destacado && (
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-medium mb-3">
                    Más solicitado
                  </p>
                )}
                <h3 className="font-serif text-2xl font-light text-brand-ink mb-2">{plan.nombre}</h3>
                <p className="text-3xl font-light text-brand-orange mb-1">{plan.precio}</p>
                <p className="text-xs text-brand-muted mb-6">{plan.detalle}</p>
                <ul className="space-y-3 mb-8">
                  {plan.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-muted">
                      <span className="text-brand-accent mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#reservar"
                  className={`block text-center py-3 px-6 font-medium text-sm uppercase tracking-widest transition-colors ${
                    plan.destacado
                      ? "bg-brand-orange text-white hover:bg-brand-orange/90"
                      : "bg-brand-ink text-white hover:bg-brand-accent"
                  }`}
                >
                  Reservar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Horarios</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
              Cuándo visitarnos
            </h2>
          </div>
          <div className="border border-brand-line">
            {HORARIOS.map((h, i) => (
              <div
                key={h.dia}
                className={`flex items-center justify-between p-6 ${
                  i < HORARIOS.length - 1 ? "border-b border-brand-line" : ""
                }`}
              >
                <span className="font-serif text-lg text-brand-ink">{h.dia}</span>
                <span className="text-brand-muted">{h.horario}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-muted mt-6 text-center">
            Te recomendamos reservar con anticipación, especialmente en temporada alta y fines de semana.
          </p>
        </div>
      </section>

      {/* CTA RESERVA */}
      <section id="reservar" className="py-24 bg-brand-ink text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Reserva tu Día</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Listos para recibirte
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Asegura tu cupo en el circuito termal. Te confirmamos tu reserva por correo dentro de las próximas horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-10 py-4 bg-brand-orange text-white font-medium text-sm uppercase tracking-widest hover:bg-brand-orange/90 transition-colors"
            >
              Reservar ahora
            </Link>
            <a
              href="tel:+56600600"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-medium text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Llamar al hotel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
