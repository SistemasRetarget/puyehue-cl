const QUE_HACER = [
  { tag: "Termas", title: "Circuito Termal Exterior", img: "https://images.unsplash.com/photo-1544161515-81aae3ff8b47?w=400&h=500&fit=crop" },
  { tag: "Spa", title: "Masajes Terapéuticos", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop" },
  { tag: "Naturaleza", title: "Senderismo en el Parque", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=500&fit=crop" },
  { tag: "Gastronomía", title: "Restaurante Los Maitenes", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop" }
];

export default function QueHacerSection() {
  return (
    <section className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-accent mb-3">Experiencias</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-ink">
            Qué Hacer en Puyehue
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUE_HACER.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-medium mb-2">{item.tag}</p>
              <h3 className="font-serif text-xl font-light text-brand-ink group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
