import { Suspense, lazy } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import PromcionesSection from "@/components/PromcionesSection";
import QueHacerSection from "@/components/QueHacerSection";

const ProgramasSection = lazy(() => import("@/components/ProgramasSection"));
const SostenibilidadSection = lazy(() => import("@/components/SostenibilidadSection"));

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

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* PROMOCIONES */}
      <PromcionesSection />

      {/* QUÉ HACER */}
      <QueHacerSection />

      {/* PROGRAMAS (lazy loaded) */}
      <Suspense fallback={<div className="h-96 bg-white" />}>
        <ProgramasSection />
      </Suspense>

      {/* QUOTE PARALLAX */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=2400&h=1350&fit=crop&q=80&fm=webp"
          alt="Termas Puyehue"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-white font-light leading-tight italic">
              &quot;Un lugar mágico donde las aguas termales abrazan el alma.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* SOSTENIBILIDAD (lazy loaded) */}
      <Suspense fallback={<div className="h-96 bg-brand-soft" />}>
        <SostenibilidadSection />
      </Suspense>

      {/* VEN POR EL DÍA */}
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
                sin necesidad de hospedarte.
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
