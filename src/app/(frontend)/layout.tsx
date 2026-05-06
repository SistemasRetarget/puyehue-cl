import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import MetaPixel from "@/components/MetaPixel";
import ConsentBanner from "@/components/ConsentBanner";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://puyehue.cl";

export const metadata: Metadata = {
  title: {
    default: "Hotel Termas de Puyehue Wellness & Spa Resort",
    template: "%s | Hotel Termas de Puyehue"
  },
  description:
    "Vive tu experiencia termal en Hotel Termas de Puyehue. Wellness & Spa Resort en el Parque Nacional Puyehue.",
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
      en: "/en",
      "x-default": "/"
    }
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Hotel Termas de Puyehue",
    title: "Hotel Termas de Puyehue Wellness & Spa Resort",
    description:
      "Vive tu experiencia termal en el Parque Nacional Puyehue.",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Termas de Puyehue"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Termas de Puyehue Wellness & Spa Resort",
    description:
      "Vive tu experiencia termal en el Parque Nacional Puyehue.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

/**
 * Layout común a ES y EN. Incluye tracking y consent.
 * El Header/Footer se monta en cada sub-layout de idioma.
 */
export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Analytics />
      <MetaPixel />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      {children}
      <ConsentBanner />
    </>
  );
}
