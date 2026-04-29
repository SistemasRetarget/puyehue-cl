import Header from "@/components/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="pt-20">{children}</main>
      <Footer locale="es" />
      <FloatingWhatsApp locale="es" />
    </>
  );
}
