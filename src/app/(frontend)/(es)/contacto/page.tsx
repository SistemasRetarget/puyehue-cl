import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contacto & Reservas | Hotel Termas de Puyehue",
  description: "Contacta al Hotel Termas de Puyehue para reservas, consultas y más información. Estamos en el Parque Nacional Puyehue, Región de Los Lagos.",
  keywords: "contacto Puyehue, reservas termas, Hotel Termas Puyehue contacto, reservar termas Puyehue",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto & Reservas | Hotel Termas de Puyehue",
    description: "Reserva tu estadía o visita diaria en el Hotel Termas de Puyehue.",
    type: "website",
    locale: "es_CL",
    url: "https://puyehue.cl/contacto",
  },
};

const CANALES = [
  {
    icon: "📞",
    titulo: "Teléfono",
    detalle: "+56 64 2 331 400",
    sub: "Lunes a Domingo, 9:00 — 20:00",
    href: "tel:+56642331400",
    accion: "Llamar ahora",
  },
  {
    icon: "💬",
    titulo: "WhatsApp",
    detalle: "+56 9 5000 0000",
    sub: "Respuesta en menos de 1 hora",
    href: "https://wa.me/56950000000",
    accion: "Escribir por WhatsApp",
  },
  {
    icon: "✉️",
    titulo: "Email",
    detalle: "reservas@puyehue.cl",
    sub: "Confirmación en 24 horas hábiles",
    href: "mailto:reservas@puyehue.cl",
    accion: "Enviar correo",
  },
];

export default async function Contacto({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string; error?: string }>;
}) {
  const sp = await searchParams;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden -mt-20 lg:-mt-24">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&h=900&fit=crop"
          alt="Hotel Termas de Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative h-full flex items-end pb-16 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">Estamos para ayudarte</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-light leading-tight">
              Contacto & Reservas
            </h1>
          </div>
        </div>
      </section>

      {/* CANALES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {CANALES.map((canal) => (
              <div
                key={canal.titulo}
                className="border border-brand-line p-8 text-center hover:border-brand-accent transition-colors"
              >
                <div className="text-4xl mb-4">{canal.icon}</div>
                <h3 className="font-serif text-xl font-light text-brand-ink mb-2">{canal.titulo}</h3>
                <p className="text-brand-orange font-medium mb-1">{canal.detalle}</p>
                <p className="text-xs text-brand-muted mb-6">{canal.sub}</p>
                <a
                  href={canal.href}
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-accent text-brand-accent text-sm uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-colors"
                >
                  {canal.accion}
                </a>
              </div>
            ))}
          </div>

          {/* FORMULARIO */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Formulario</p>
              <h2 className="font-serif text-4xl font-light text-brand-ink">
                Envíanos un mensaje
              </h2>
            </div>

            {sp.ok && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 mb-8 text-center">
                ✓ Mensaje enviado. Te contactamos en menos de 24 horas.
              </div>
            )}
            {sp.error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 mb-8 text-center">
                Hubo un error. Intenta nuevamente o escríbenos por WhatsApp.
              </div>
            )}

            <form action="/api/contact" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-brand-muted mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    className="w-full border border-brand-line px-4 py-3 text-brand-ink focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-brand-muted mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-brand-line px-4 py-3 text-brand-ink focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-brand-muted mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  className="w-full border border-brand-line px-4 py-3 text-brand-ink focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-brand-muted mb-2">
                  Tipo de consulta
                </label>
                <select
                  name="tipo"
                  className="w-full border border-brand-line px-4 py-3 text-brand-ink focus:outline-none focus:border-brand-accent transition-colors bg-white"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="estadía">Reserva estadía</option>
                  <option value="day-pass">Day pass / Ven por el día</option>
                  <option value="programa">Programa terapéutico</option>
                  <option value="grupo">Evento o grupo</option>
                  <option value="otro">Otra consulta</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-brand-muted mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full border border-brand-line px-4 py-3 text-brand-ink focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  placeholder="Cuéntanos qué necesitas: fechas, número de personas, consultas especiales..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-accent text-white font-medium text-sm uppercase tracking-widest hover:bg-brand-accent/90 transition-colors"
              >
                Enviar mensaje
              </button>

              <p className="text-xs text-brand-muted text-center">
                Respondemos todas las consultas dentro de las próximas 24 horas hábiles.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
