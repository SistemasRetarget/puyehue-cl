export default function SostenibilidadSection() {
  return (
    <section className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
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
  );
}
