import BookingForm from "./BookingForm";

const HERO_IMG = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden -mt-20">
      <img
        src={HERO_IMG}
        alt="Termas Puyehue"
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative h-full flex items-end pb-12 px-6">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-0">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight">
                Hotel Termas de Puyehue
              </h1>
              <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
                Vive tu experiencia termal en el Parque Nacional Puyehue. Wellness, spa y naturaleza.
              </p>
            </div>
            <div className="lg:fixed lg:bottom-12 lg:right-6 lg:w-96 z-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
