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

export default function ProgramasSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Programas Wellness</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
            Programas Terapéuticos
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMAS.map((p, i) => (
            <div
              key={i}
              className="group border border-brand-line hover:border-brand-accent transition-colors p-8"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-medium mb-3">
                {p.duration}
              </p>
              <h3 className="font-serif text-2xl font-light text-brand-ink mb-3">{p.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
