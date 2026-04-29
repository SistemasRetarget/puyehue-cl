# Reconnaissance: Puyehue.cl → Replicación en App

**Fuente:** https://puyehue.cl  
**Fecha:** 29 Abril 2026, 03:30 UTC  
**Metodología:** MCP Reconnaissance Subagent

---

## 📋 Especificaciones Extraídas

### 1. Identidad de Marca
- **Nombre:** Hotel Termas de Puyehue
- **Tagline:** "Bienvenido a Puyehue – Tu Viaje Comienza Aquí"
- **Descripción:** Disfruta de unas vacaciones únicas en Hotel Termas de Puyehue. Descansa en las mejores termas con la belleza del Parque Nacional Puyehue.
- **Logo:** https://puyehue.cl/wp-content/uploads/2024/11/logo-hotel-termas-puyehue-gris.svg

### 2. Estructura de Páginas
- **Home** — Hero + Secciones principales
- **Servicios** — Termas, actividades, alojamiento
- **Ubicación** — Parque Nacional Puyehue
- **Contacto** — Reservas

### 3. Hero Section
- **Imagen Hero:** https://puyehue.cl/wp-content/uploads/2024/12/1_HOME-05.webp
- **Título:** "Bienvenido a Puyehue – Tu Viaje Comienza Aquí"
- **Subtítulo:** "Disfruta de unas vacaciones únicas en Hotel Termas de Puyehue"
- **Overlay:** Gradiente oscuro (black/20 a black/40)

### 4. Contenido Principal
**Tema Central:** Termas + Naturaleza + Parque Nacional

**Secciones Clave:**
1. **Termas** — Aguas termales naturales, relajación
2. **Naturaleza** — Parque Nacional Puyehue, volcán, lago
3. **Alojamiento** — Cabañas, habitaciones, suites
4. **Actividades** — Senderismo, observación de fauna, gastronomía
5. **Spa & Wellness** — Tratamientos, masajes

### 5. Colores
- **Primario:** Verde natural (termas, naturaleza)
- **Secundario:** Gris (logo, texto)
- **Acentos:** Azul (agua, lago)
- **Fondo:** Blanco, crema

### 6. Tipografía
- **Headings:** Serif (elegante, premium)
- **Body:** Sans-serif (legible, moderno)

### 7. Imágenes Principales
- Hero: Termas/Naturaleza
- Galería: Instalaciones, vistas, actividades
- Iconografía: Termas, montaña, agua

### 8. Llamadas a Acción
- "Reservar Ahora"
- "Conocer Más"
- "Ver Disponibilidad"
- "Contactar"

### 9. Idiomas
- Español (es)
- English (en)
- Español Argentina (arg)

### 10. SEO
- **Meta Title:** "Bienvenido a Puyehue – Tu Viaje Comienza Aquí"
- **Meta Description:** "Disfruta de unas vacaciones únicas en Hotel Termas de Puyehue. Descansa en las mejores termas con la belleza del Parque Nacional Puyehue."
- **Keywords:** Termas Puyehue, Hotel Puyehue, Parque Nacional, vacaciones naturaleza
- **Schema:** WebPage, Organization, ImageObject

---

## 🔄 Cambios Necesarios en la App

### Archivo: `src/app/(frontend)/(es)/page.tsx`

**Cambios:**
1. Actualizar metadata (title, description)
2. Cambiar hero image a termas
3. Actualizar hero text a "Bienvenido a Puyehue"
4. Cambiar narrativa de "refugios" a "termas + naturaleza"
5. Actualizar secciones de Features (de "Diseño, Calma, Montaña" a "Termas, Naturaleza, Bienestar")

### Archivo: `content-extracted/content.json`

**Cambios:**
1. Actualizar home.title → "Bienvenido a Puyehue"
2. Actualizar home.description → Sobre termas y naturaleza
3. Agregar secciones: Termas, Actividades, Alojamiento, Spa
4. Actualizar imágenes a URLs de puyehue.cl

### Archivo: `src/components/sections/Features.tsx`

**Cambios:**
1. Feature 1: "Termas Naturales" (en lugar de "Diseño")
2. Feature 2: "Parque Nacional" (en lugar de "Calma")
3. Feature 3: "Bienestar Integral" (en lugar de "Montaña")

---

## 📸 Imágenes a Descargar

```
https://puyehue.cl/wp-content/uploads/2024/12/1_HOME-05.webp → hero.webp
https://puyehue.cl/wp-content/uploads/2024/11/logo-hotel-termas-puyehue-gris.svg → logo.svg
```

---

## ✅ Checklist de Implementación

- [ ] Actualizar metadata en page.tsx
- [ ] Cambiar hero image y text
- [ ] Actualizar content.json con contenido de termas
- [ ] Actualizar Features component
- [ ] Descargar imágenes de puyehue.cl
- [ ] Actualizar colores (si es necesario)
- [ ] Test en local
- [ ] Deploy a Cloud Run
- [ ] Verificar en producción

---

**Fuente:** https://puyehue.cl  
**Backup:** Guardado en evidence/puyehue/reconnaissance/
