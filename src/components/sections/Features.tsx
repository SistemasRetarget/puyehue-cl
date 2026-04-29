import Image from "next/image";

type Feature = {
  title: string;
  text: string;
  img: string;
};

const FEATURES_ES: Feature[] = [
  {
    title: "Termas Naturales",
    text: "Aguas termales con propiedades terapéuticas para relajación y bienestar.",
    img: "https://images.unsplash.com/photo-1544161515-81aae3ff8b47?w=600&h=400&fit=crop"
  },
  {
    title: "Parque Nacional",
    text: "Ubicado en el corazón del Parque Nacional Puyehue con vistas al volcán.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
  },
  {
    title: "Bienestar Integral",
    text: "Spa, masajes, gastronomía y actividades para una experiencia completa.",
    img: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=600&h=400&fit=crop"
  }
];

const FEATURES_EN: Feature[] = [
  {
    title: "Natural Hot Springs",
    text: "Thermal waters with therapeutic properties for relaxation and wellness.",
    img: "https://images.unsplash.com/photo-1544161515-81aae3ff8b47?w=600&h=400&fit=crop"
  },
  {
    title: "National Park",
    text: "Located in the heart of Puyehue National Park with volcano views.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
  },
  {
    title: "Integral Wellness",
    text: "Spa, massages, gastronomy and activities for a complete experience.",
    img: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=600&h=400&fit=crop"
  }
];

type Props = { locale?: "es" | "en" };

export default function Features({ locale = "es" }: Props) {
  const items = locale === "en" ? FEATURES_EN : FEATURES_ES;
  return (
    <section className="w-full py-0 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
        {items.map((f) => (
          <div key={f.title} className="flex flex-col h-full">
            <div className="relative w-full h-[400px] overflow-hidden bg-brand-soft">
              <Image
                src={f.img}
                alt={f.title}
                fill
                sizes="(max-width:768px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 bg-white flex flex-col flex-1 justify-center">
              <h3 className="font-serif text-sm uppercase tracking-widest font-light mb-3 leading-tight">{f.title}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
