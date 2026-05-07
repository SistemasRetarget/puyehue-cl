import Image from "next/image";

const PROMOCIONES = [
  {
    title: "Escapada Termal",
    subtitle: "2 noches desde",
    price: "$450.000",
    desc: "Alojamiento + desayuno + acceso ilimitado a piscinas termales.",
    img: "https://images.unsplash.com/photo-1544161515-81aae3ff8b47?w=1200&h=800&fit=crop&q=80&fm=webp"
  },
  {
    title: "Wellness Premium",
    subtitle: "3 noches desde",
    price: "$680.000",
    desc: "Pensión completa + spa + masaje + circuito termal.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=80&fm=webp"
  },
  {
    title: "Familia Puyehue",
    subtitle: "2 noches desde",
    price: "$520.000",
    desc: "Alojamiento + desayuno + actividades infantiles + termas.",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop&q=80&fm=webp"
  }
];

export default function PromcionesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Ofertas</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
            Nuestras Promociones
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PROMOCIONES.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[3/2] overflow-hidden mb-6">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                />
              </div>
              <h3 className="font-serif text-2xl font-light text-brand-ink mb-2">{p.title}</h3>
              <p className="text-brand-accent text-sm font-medium mb-3">{p.subtitle}</p>
              <p className="font-serif text-3xl text-brand-orange mb-4">{p.price}</p>
              <p className="text-brand-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
