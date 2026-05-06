import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Hotel Termas de Puyehue Wellness & Spa Resort",
  description: "Vive tu experiencia termal en Hotel Termas de Puyehue. Wellness & Spa Resort en el Parque Nacional Puyehue. Reserva tu estadía y disfruta termas naturales, gastronomía y actividades.",
  keywords: "termas Puyehue, hotel termas, wellness, spa resort, Parque Nacional Puyehue, Osorno, vacaciones termas, experiencia termal",
  openGraph: {
    title: "Hotel Termas de Puyehue Wellness & Spa Resort",
    description: "Vive tu experiencia termal en el Parque Nacional Puyehue.",
    type: "website",
    locale: "es_CL",
    url: "https://puyehue.cl"
  }
};

const HERO_IMG = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop";

const PROMOCIONES = [
  {
    title: "Escapada Termal",
    subtitle: "2 noches desde",
    price: "$450.000",
    desc: "Alojamiento + desayuno + acceso ilimitado a piscinas termales.",
    img: "https://images.unsplash.com/photo-1544161515-81aae3ff8b47?w=600&h=400&fit=crop"
  },
  {
    title: "Wellness Premium",
    subtitle: "3 noches desde",
    price: "$680.000",
    desc: "Pensión completa + spa + masaje + circuito termal.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop"
  },
  {
    title: "Familia Puyehue",
    subtitle: "2 noches desde",
    price: "$520.000",
    desc: "Alojamiento + desayuno + actividades infantiles + termas.",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop"
  }
];

const QUE_HACER = [
  { tag: "Termas", title: "Circuito Termal Exterior", img: "https://images.unsplash.com/photo-1544161515-81aae3ff8b47?w=400&h=500&fit=crop" },
  { tag: "Spa", title: "Masajes Terapéuticos", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop" },
  { tag: "Naturaleza", title: "Senderismo en el Parque", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=500&fit=crop" },
  { tag: "Gastronomía", title: "Restaurante Los Maitenes", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop" }
];

const PROGRAMAS = [
  {
    title: "Programa Detox",
    duration: "3 días / 2 noches",
    desc: "Desintoxicación con baños termales, masajes y alimentación saludable.",
    img: "https://images.unsplash.com/photo-1544161515-81aae3ff8b47?w=600&h=400&fit=crop"
  },
  {
    title: "Programa Anti-Stress",
    duration: "4 días / 3 noches",
    desc: "Relajación profunda con tratamientos exclusivos y meditación.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop"
  },
  {
    title: "Programa Bienestar",
    duration: "5 días / 4 noches",
    desc: "Programa integral con yoga, spa, gastronomía wellness y termas.",
    img: "https://images.unsplash.com/photo-1559814047-e1c5cf4f9bb9?w=600&h=400&fit=crop"
  }
];

export default function Home() {
  return (
    <>
      {/* HERO con Booking Form */}
      <section className="relative h-screen min-h-[700px] overflow-hidden -mt-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="Hotel Termas de Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6 pt-20">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-90">
            Wellness & Spa Resort
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            Vive tu Experiencia Termal
          </h1>
          <p className="text-base md:text-lg max-w-2xl opacity-95 mb-8">
            En el corazón del Parque Nacional Puyehue
          </p>
          <Link
            href="#promociones"
            className="px-10 py-3 border-2 border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-brand-ink transition-colors"
          >
            Promociones
          </Link>
        </div>

        {/* Booking Form superpuesto */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <BookingForm />
        </div>
      </section>

      {/* PROMOCIONES */}
      <section id="promociones" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Ofertas Especiales</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">Promociones</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROMOCIONES.map((promo, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-brand-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={promo.img}
                    alt={promo.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-brand-muted mb-2">{promo.subtitle}</p>
                <h3 className="font-serif text-2xl text-brand-ink mb-2 font-light">{promo.title}</h3>
                <p className="text-3xl font-light text-brand-accent mb-3">{promo.price}</p>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">{promo.desc}</p>
                <button className="text-xs uppercase tracking-widest text-brand-ink border-b border-brand-ink pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINO */}
      <section className="py-24 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Destino</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink leading-tight mb-6">
                Parque Nacional Puyehue
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Ubicado en la Región de Los Lagos, a 76 km de Osorno, el Hotel Termas de Puyehue es un oasis
                  de bienestar rodeado por 107.000 hectáreas de parque nacional, bosques milenarios y el
                  imponente Volcán Puyehue.
                </p>
                <p>
                  Sus aguas termales naturales, ricas en minerales con propiedades terapéuticas, brotan a más
                  de 65°C de las profundidades de la tierra, ofreciendo una experiencia única de relajación.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <p className="font-serif text-3xl text-brand-ink font-light">76 km</p>
                  <p className="text-xs uppercase tracking-widest text-brand-muted mt-1">de Osorno</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-brand-ink font-light">107k</p>
                  <p className="text-xs uppercase tracking-widest text-brand-muted mt-1">hectáreas</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-brand-ink font-light">65°C</p>
                  <p className="text-xs uppercase tracking-widest text-brand-muted mt-1">aguas termales</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop"
                alt="Parque Nacional Puyehue"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOTEL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Nuestro Hotel</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink mb-6">
              Lujo, Confort y Naturaleza
            </h2>
            <p className="text-brand-muted leading-relaxed">
              130 habitaciones distribuidas entre el edificio principal y bungalows, todas con vistas
              al jardín o al bosque nativo. Diseño tradicional con todas las comodidades modernas.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-2">
            {[
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop",
              "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=500&fit=crop",
              "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=500&fit=crop",
              "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop"
            ].map((src, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden bg-brand-soft group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Hotel imagen ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUE HACER */}
      <section className="py-24 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Experiencias</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink mb-6">Qué Hacer</h2>
            <p className="text-brand-muted leading-relaxed">
              Una amplia variedad de actividades para todos los gustos y edades.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {QUE_HACER.map((act, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden group cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={act.img}
                  alt={act.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-widest text-white/80 mb-1">{act.tag}</p>
                  <p className="font-serif text-xl text-white font-light leading-tight">{act.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Wellness</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink mb-6">Programas</h2>
            <p className="text-brand-muted leading-relaxed">
              Programas especializados diseñados para tu bienestar integral.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAMAS.map((prog, i) => (
              <div key={i} className="bg-brand-soft overflow-hidden group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">{prog.duration}</p>
                  <h3 className="font-serif text-2xl text-brand-ink mb-3 font-light">{prog.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-5">{prog.desc}</p>
                  <button className="text-xs uppercase tracking-widest text-brand-ink border-b border-brand-ink pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
                    Más información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE PARALLAX */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&h=900&fit=crop"
          alt="Termas Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-white font-light leading-tight italic">
              &quot;Un lugar mágico donde las aguas termales abrazan el alma y la naturaleza renueva el espíritu.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* SOSTENIBILIDAD */}
      <section className="py-24 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1000&fit=crop"
                alt="Sostenibilidad"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Compromiso</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink leading-tight mb-6">
                Sostenibilidad
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Nuestro compromiso con el medio ambiente es parte fundamental de nuestra identidad.
                  Trabajamos cada día para reducir nuestro impacto ambiental.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent">→</span>
                    <span>Energía geotérmica para calefacción y climatización</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent">→</span>
                    <span>Programa de gestión integral de residuos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent">→</span>
                    <span>Reforestación y protección de bosques nativos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent">→</span>
                    <span>Productos locales y orgánicos en gastronomía</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VEN POR EL DIA */}
      <section className="py-24 bg-brand-ink text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-4">Visita Diaria</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Ven por el Día
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Disfruta del circuito termal, almuerzo en nuestros restaurantes y áreas de relajación
                sin necesidad de hospedarte. Una experiencia perfecta para una escapada de un día.
              </p>
            </div>
            <Link
              href="/ven-por-el-dia"
              className="inline-flex items-center justify-center px-10 py-4 bg-brand-accent text-white font-medium text-sm uppercase tracking-widest hover:bg-brand-accent/90 transition-colors whitespace-nowrap"
            >
              Reservar Día
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
