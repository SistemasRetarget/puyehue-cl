import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // ── Colores reales puyehue.cl (extraídos del CSS de producción) ──
          ink:           "#585A59",   // texto principal (5x en CSS real)
          muted:         "#69727d",   // texto secundario (9x en CSS real)
          accent:        "#c8625a",   // CTA salmon/rojo — botón RESERVAR
          "accent-dark": "#a84f47",
          line:          "#e6e6e6",   // bordes (25x en CSS real)
          bg:            "#f4f8fa",   // fondo claro (14x en CSS real)
          dark:          "#33373d",   // footer / secciones oscuras
          // ── Neutros adicionales (compatibilidad con componentes) ──
          soft:          "#ede7dd",   // fondo suave cálido
          cream:         "#f4efe7",   // crema
          orange:        "#E8601C",   // naranja CTA alternativo
          "orange-dark": "#C54F13",
          // ── Verdes de producción puyehue.cl/daypass ──
          green:         "#2d9c6c",   // verde principal — bullets, tarjeta destacada
          "green-dark":  "#2d6a4f",   // verde oscuro — íconos SVG
          "green-light": "#e8f5f0",   // verde claro — fondo badge
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem,6vw,5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem,4.5vw,4rem)",    { lineHeight: "1.1",  letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem,3vw,2.5rem)",  { lineHeight: "1.2" }]
      },
      maxWidth: {
        prose: "65ch",
        container: "1440px"
      },
      spacing: {
        "section":    "clamp(4rem,10vw,9rem)",
        "section-sm": "clamp(3rem,6vw,6rem)"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};
export default config;
