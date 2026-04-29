# Puyehue — Plan de Iteración hasta 100% de Igualdad

**Fecha:** 29 Abril 2026, 17:55 UTC  
**Objetivo:** Lograr 100% de igualdad visual con puyehue.cl + Sitemap completo  
**Metodología:** MCP Enterprise (Ciclos de feedback iterativos)

---

## 🎯 DEFINICIÓN DE "100% DE IGUALDAD"

### Visual
- ✅ Visual diff < 0.5% (casi imperceptible)
- ✅ Todos los componentes replicados
- ✅ Colores exactos (#FF6B35, #8B9E7F, #333333)
- ✅ Tipografía exacta (Playfair + Roboto)
- ✅ Espaciado consistente
- ✅ Responsive en todas las resoluciones

### Funcional
- ✅ Todas las rutas funcionan
- ✅ Formularios validados
- ✅ Interacciones suaves
- ✅ Lazy loading de imágenes
- ✅ Animaciones exactas

### Performance
- ✅ Core Web Vitals: Good
- ✅ SEO Score: 95+
- ✅ Lighthouse: 90+
- ✅ Accesibilidad: WCAG 2.1 AA

### Contenido
- ✅ Todas las secciones presentes
- ✅ Contenido exacto
- ✅ Imágenes reales (no placeholders)
- ✅ Datos actualizados

---

## 📋 SITEMAP DE PUYEHUE.CL

### Estructura de rutas:
```
/                           → Home
/promociones                → Promociones
/destino                    → Destino
/hotel                      → Hotel
/que-hacer                  → Qué Hacer
/programas                  → Programas
/eventos                    → Eventos
/sostenibilidad             → Sostenibilidad
/ven-por-el-dia             → Ven por el Día
/contacto                   → Contacto
/politica-privacidad        → Política de Privacidad
/terminos-condiciones       → Términos y Condiciones
/mapa-sitio                 → Mapa del Sitio
```

### Sitemap XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/promociones</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/destino</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/hotel</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/que-hacer</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/programas</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/eventos</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/sostenibilidad</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/ven-por-el-dia</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/contacto</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/politica-privacidad</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://puyehue-web-rf3w6ybqeq-ew.a.run.app/terminos-condiciones</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## 🔄 CICLOS DE ITERACIÓN (MCP Enterprise)

### Ciclo 1: Fase 3 (Header) — COMPLETADO ✅
- ✅ Header con 8 items
- ✅ Selector idiomas
- ✅ Botón Reservar sticky
- ✅ Responsive hamburger
- **Status:** Deploy exitoso

### Ciclo 2: Fase 4 (Hero Slider & Booking) — EN PROGRESO 🔄
**Tareas:**
- [ ] Crear `HeroSlider.tsx`
  - Slider con flechas (< >)
  - Dots (indicadores)
  - Transición smooth (fade)
  - Auto-play (5 segundos)
  - Responsive
- [ ] Crear `BookingForm.tsx`
  - Inputs: fecha, noches, adultos, niños, infantes
  - Validación
  - Botón "Reservar" (verde/sage)
  - Responsive
- [ ] Integrar en `page.tsx`
- [ ] Deploy y verificación

**Estimado:** 3-4 horas

### Ciclo 3: Fase 5 (Secciones) — PENDIENTE ⏳
**Tareas:**
- [ ] `PromotionsSection.tsx` (grid 3 columnas)
- [ ] `DestinationSection.tsx` (2 columnas)
- [ ] `HotelSection.tsx` (galería 4 columnas)
- [ ] `ActivitiesSection.tsx` (galería 4 columnas)
- [ ] `ProgramsSection.tsx` (grid 3 columnas)
- [ ] `EventsSection.tsx` (timeline)
- [ ] `SustainabilitySection.tsx` (alternado)
- [ ] `DayVisitSection.tsx` (hero pequeño)

**Estimado:** 6-8 horas

### Ciclo 4: Fase 6 (Estilos) — PENDIENTE ⏳
**Tareas:**
- [ ] Configurar colores en `tailwind.config.js`
- [ ] Importar fuentes (Playfair Display + Roboto)
- [ ] CSS custom properties
- [ ] Espaciado consistente
- [ ] Hover states
- [ ] Transiciones suaves

**Estimado:** 2-3 horas

### Ciclo 5: Fase 7 (Rutas & Sitemap) — PENDIENTE ⏳
**Tareas:**
- [ ] Crear rutas:
  - `/promociones`
  - `/destino`
  - `/hotel`
  - `/que-hacer`
  - `/programas`
  - `/eventos`
  - `/sostenibilidad`
  - `/ven-por-el-dia`
  - `/contacto`
  - `/politica-privacidad`
  - `/terminos-condiciones`
- [ ] Crear `sitemap.xml`
- [ ] Crear `robots.txt`
- [ ] Crear páginas de contenido

**Estimado:** 4-5 horas

### Ciclo 6: Fase 8 (QA & Validación) — PENDIENTE ⏳
**Tareas:**
- [ ] Visual diff (Playwright)
- [ ] Core Web Vitals (Lighthouse)
- [ ] SEO audit
- [ ] Responsive testing
- [ ] Accesibilidad (WCAG 2.1 AA)
- [ ] Performance
- [ ] Iteración basada en resultados

**Estimado:** 3-4 horas

### Ciclo 7: Fase 9 (Production Deploy) — PENDIENTE ⏳
**Tareas:**
- [ ] Merge a main
- [ ] Cloud Build trigger
- [ ] Cloud Run deployment
- [ ] Health checks
- [ ] Monitoreo

**Estimado:** 1-2 horas

---

## 📊 TABLA DE ITERACIÓN

| Ciclo | Fase | Componentes | Tiempo | Status |
|-------|------|-------------|--------|--------|
| 1 | 3 | Header | 1.5h | ✅ |
| 2 | 4 | Hero + Booking | 3-4h | 🔄 |
| 3 | 5 | Secciones (8) | 6-8h | ⏳ |
| 4 | 6 | Estilos | 2-3h | ⏳ |
| 5 | 7 | Rutas + Sitemap | 4-5h | ⏳ |
| 6 | 8 | QA & Validación | 3-4h | ⏳ |
| 7 | 9 | Production Deploy | 1-2h | ⏳ |
| | | **TOTAL** | **21-29h** | |

---

## 🔄 FEEDBACK LOOP (MCP Enterprise)

### Después de cada ciclo:
1. **Documentar:**
   - Qué se hizo
   - Qué se encontró
   - Qué falló
   - Cómo se fijó

2. **Validar:**
   - Visual diff
   - Core Web Vitals
   - SEO score
   - Responsive

3. **Iterar:**
   - Si visual diff < 2% → siguiente ciclo
   - Si visual diff > 2% → ajustes
   - Si error → fix + retry

4. **Guardar lecciones:**
   - Prompts efectivos
   - Errores comunes
   - Soluciones rápidas

---

## 🎯 CRITERIOS DE ACEPTACIÓN (100% Igualdad)

### Visual
- [ ] Visual diff < 0.5%
- [ ] Colores exactos
- [ ] Tipografía exacta
- [ ] Espaciado consistente
- [ ] Responsive (mobile, tablet, desktop)

### Funcional
- [ ] Todas las rutas funcionan
- [ ] Formularios validados
- [ ] Interacciones suaves
- [ ] Lazy loading
- [ ] Animaciones exactas

### Performance
- [ ] Core Web Vitals: Good
- [ ] SEO Score: 95+
- [ ] Lighthouse: 90+
- [ ] Accesibilidad: WCAG 2.1 AA

### Contenido
- [ ] Todas las secciones presentes
- [ ] Contenido exacto
- [ ] Imágenes reales
- [ ] Datos actualizados

### Sitemap
- [ ] 12 rutas principales
- [ ] sitemap.xml generado
- [ ] robots.txt configurado
- [ ] Metadata correcta

---

## 📝 DOCUMENTACIÓN OBLIGATORIA

### Por cada ciclo:
- ✅ Qué se hizo
- ✅ Qué se encontró
- ✅ Qué falló
- ✅ Cómo se fijó
- ✅ Tiempo invertido
- ✅ Tokens usados
- ✅ Lecciones aprendidas

### Al final:
- ✅ Playbook para futuras replicas
- ✅ Prompts efectivos
- ✅ Antipatterns a evitar
- ✅ Mejoras sugeridas

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

### Ciclo 2: Hero Slider & Booking (3-4 horas)
1. Crear `HeroSlider.tsx`
2. Crear `BookingForm.tsx`
3. Integrar en `page.tsx`
4. Deploy y verificación
5. Documentar progreso

### Ciclo 3: Secciones (6-8 horas)
1. Crear 8 componentes de secciones
2. Integrar en `page.tsx`
3. Deploy y verificación
4. Documentar progreso

### Ciclo 4: Estilos (2-3 horas)
1. Configurar colores exactos
2. Importar tipografía
3. Aplicar espaciado
4. Deploy y verificación

### Ciclo 5: Rutas & Sitemap (4-5 horas)
1. Crear rutas
2. Generar sitemap.xml
3. Crear robots.txt
4. Deploy y verificación

### Ciclo 6: QA & Validación (3-4 horas)
1. Visual diff
2. Core Web Vitals
3. SEO audit
4. Iteración basada en resultados

### Ciclo 7: Production Deploy (1-2 horas)
1. Merge a main
2. Cloud Build
3. Cloud Run deployment
4. Monitoreo

---

## 📊 PROGRESO ESPERADO

```
Ciclo 1: Header             ████████████████████ 100% ✅
Ciclo 2: Hero + Booking     ░░░░░░░░░░░░░░░░░░░░   0% ⏳
Ciclo 3: Secciones          ░░░░░░░░░░░░░░░░░░░░   0% ⏳
Ciclo 4: Estilos            ░░░░░░░░░░░░░░░░░░░░   0% ⏳
Ciclo 5: Rutas + Sitemap    ░░░░░░░░░░░░░░░░░░░░   0% ⏳
Ciclo 6: QA & Validación    ░░░░░░░░░░░░░░░░░░░░   0% ⏳
Ciclo 7: Production         ░░░░░░░░░░░░░░░░░░░░   0% ⏳

TOTAL: 100% (21-29 horas)
```

---

**Desarrollado por Sistemas - Retarget ❤️**  
**Metodología:** MCP Enterprise (Ciclos de feedback iterativos)  
**Objetivo:** 100% de igualdad visual + Sitemap completo
