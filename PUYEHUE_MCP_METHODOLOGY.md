# Puyehue — Metodología MCP Enterprise (Paso a Paso)

**Fecha:** 29 Abril 2026, 17:30 UTC  
**Objetivo:** Aplicar metodología MCP desde el inicio para replicación completa de puyehue.cl  
**Metodología:** Microservicios + Event-Driven + Feedback Loops + Context Caching

---

## 🎯 PASO 1: DEFINIR WORKFLOW COMPLETO

### Workflow: `clone-puyehue-complete`

```
ENTRADA:
- original_url: https://puyehue.cl
- qa_url: https://puyehue-web-rf3w6ybqeq-ew.a.run.app
- target_framework: nextjs
- target_locale: es

SALIDA:
- visual_diff: < 2% diferencia
- core_web_vitals: Good
- seo_score: 90+
- deployment_status: success
```

---

## 🔄 PASO 2: ASIGNAR SUBAGENTES (7 roles)

### 1. **Reconnaissance Agent** ✅ (COMPLETADO)
**Responsabilidad:** Analizar puyehue.cl y extraer especificaciones  
**Output:** `RECONNAISSANCE_PUYEHUE.md` + `VISUAL_STRUCTURE_ANALYSIS.md`  
**Status:** ✅ Completado

**Lecciones aprendidas:**
- Estructura: Navbar (8 items) + Hero (slider) + Booking form + Secciones
- Colores: Naranja #FF6B35, Verde #8B9E7F, Gris #333333
- Tipografía: Serif (Playfair) + Sans-serif (Roboto)

---

### 2. **Layout Builder Agent** 🔄 (EN PROGRESO)
**Responsabilidad:** Crear componentes React/Next.js con estructura exacta  
**Entrada:** Especificaciones de Reconnaissance  
**Output:** Componentes React (Header, Hero, Booking, Sections)

**Tareas (Fase 3-5):**
- [ ] Crear `Header.tsx` (logo + menú + idiomas)
- [ ] Crear `HeroSlider.tsx` (slider con flechas + dots)
- [ ] Crear `BookingForm.tsx` (formulario superpuesto)
- [ ] Crear `PromotionsSection.tsx` (grid 3 columnas)
- [ ] Crear `DestinationSection.tsx` (2 columnas)
- [ ] Crear `HotelSection.tsx` (galería 4 columnas)
- [ ] Crear `ActivitiesSection.tsx` (galería 4 columnas)
- [ ] Crear `ProgramsSection.tsx` (grid 3 columnas)
- [ ] Crear `EventsSection.tsx` (timeline)
- [ ] Crear `SustainabilitySection.tsx` (alternado)
- [ ] Crear `DayVisitSection.tsx` (hero pequeño)
- [ ] Crear `Footer.tsx` (4-5 columnas)

**Estimado:** 8-10 horas

---

### 3. **Content Loader Agent** ✅ (PARCIAL)
**Responsabilidad:** Cargar contenido, imágenes, datos  
**Entrada:** Especificaciones de Reconnaissance  
**Output:** Archivos de contenido (JSON, imágenes)

**Tareas completadas:**
- ✅ Metadata actualizado
- ✅ Hero content
- ✅ Narrativa
- ✅ Features
- ✅ Servicios

**Tareas pendientes:**
- [ ] Imágenes reales (no placeholders)
- [ ] Contenido de secciones (Promociones, Destino, Hotel, etc.)
- [ ] Datos de eventos
- [ ] Datos de programas

**Estimado:** 3-4 horas

---

### 4. **Style Engineer Agent** ⏳ (PENDIENTE)
**Responsabilidad:** Aplicar colores, tipografía, espaciado exactos  
**Entrada:** Paleta de colores + tipografía de Reconnaissance  
**Output:** Tailwind config + CSS custom properties

**Tareas:**
- [ ] Configurar colores en `tailwind.config.js`
- [ ] Importar fuentes (Playfair Display + Roboto)
- [ ] Crear CSS custom properties
- [ ] Aplicar espaciado consistente
- [ ] Crear hover states
- [ ] Crear transiciones suaves

**Estimado:** 2-3 horas

---

### 5. **QA Validator Agent** ⏳ (PENDIENTE)
**Responsabilidad:** Validar contra original, Core Web Vitals, SEO  
**Entrada:** QA app + original site  
**Output:** Visual diff report + metrics

**Tareas:**
- [ ] Visual diff (Playwright)
- [ ] Core Web Vitals (Lighthouse)
- [ ] SEO audit
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Accesibilidad (WCAG 2.1 AA)
- [ ] Performance (imágenes optimizadas)

**Estimado:** 3-4 horas

---

### 6. **Deployment Agent** ⏳ (PENDIENTE)
**Responsabilidad:** Desplegar a producción  
**Entrada:** Código validado  
**Output:** Deploy exitoso + monitoring

**Tareas:**
- [ ] Merge a main
- [ ] Cloud Build trigger
- [ ] Cloud Run deployment
- [ ] Health checks
- [ ] Rollback plan

**Estimado:** 1-2 horas

---

### 7. **Doc Reporter Agent** ⏳ (PENDIENTE)
**Responsabilidad:** Documentar lecciones y mejoras  
**Entrada:** Resultados de cada fase  
**Output:** Documentación + lecciones aprendidas

**Tareas:**
- [ ] Documentar decisiones de diseño
- [ ] Guardar prompts efectivos
- [ ] Registrar errores y fixes
- [ ] Crear playbook para futuras replicas

**Estimado:** 2-3 horas

---

## 📊 PASO 3: CONTEXT CACHING INTELIGENTE

### Cache Compartido (TTL: 120 min)
```
METODOLOGIA:
- Workflow: clone-puyehue-complete
- Subagentes: 7
- Entrada/Salida contracts
- Feedback loops

ANTIPATTERNS:
- No copiar imágenes placeholder
- No usar colores genéricos
- No ignorar estructura visual
- No saltarse validación

LECCIONES:
- Puyehue tiene navbar sticky
- Hero tiene slider, no imagen estática
- Booking form superpuesto
- Galerías 4 columnas con overlay
```

### Cache por Subagente
```
Reconnaissance:
- Especificaciones de puyehue.cl
- Paleta de colores
- Tipografía

Layout Builder:
- Componentes React
- Props interfaces
- Responsive breakpoints

Content Loader:
- URLs de imágenes
- Contenido JSON
- Datos de eventos

Style Engineer:
- Tailwind config
- CSS custom properties
- Hover states

QA Validator:
- Métricas baseline
- Criterios de aceptación
- Test cases
```

---

## 🔄 PASO 4: CICLO DE VIDA CON FEEDBACK LOOPS

### Session Start
```
1. Cargar lecciones de sesiones anteriores
2. Cargar patches aprobados
3. Inicializar cache
4. Validar contratos
```

### Work (Silent Journaling)
```
Cada subagente registra:
- Qué hizo
- Qué encontró
- Qué falló
- Qué aprendió
- Tiempo invertido
- Tokens usados
```

### Session Close
```
1. Generar reporte de progreso
2. Documentar lecciones
3. Proponer mejoras
4. Crear patches (si aplica)
5. Guardar en KB
```

### Owner Review
```
1. Revisar reporte
2. Aprobar/rechazar patches
3. Priorizar próximas tareas
4. Feedback a subagentes
```

### Next Session
```
1. Aplicar patches aprobados
2. Continuar desde donde se dejó
3. Mejorar basado en feedback
```

---

## 📋 PASO 5: CONTRATOS DE ENTRADA/SALIDA

### Reconnaissance Agent
```json
INPUT:
{
  "original_url": "https://puyehue.cl",
  "analysis_depth": "detailed",
  "extract_colors": true,
  "extract_typography": true,
  "extract_components": true
}

OUTPUT:
{
  "structure": { "header": {...}, "hero": {...}, "sections": [...] },
  "colors": { "primary": "#FF6B35", "secondary": "#8B9E7F", ... },
  "typography": { "headings": "Playfair Display", "body": "Roboto", ... },
  "components": { "buttons": {...}, "cards": {...}, "sliders": {...} },
  "evidence": { "url": "...", "screenshot": "...", "backup": "..." }
}
```

### Layout Builder Agent
```json
INPUT:
{
  "component": "Header",
  "specifications": { ... },
  "framework": "nextjs",
  "locale": "es"
}

OUTPUT:
{
  "component_path": "src/components/Header.tsx",
  "props_interface": { ... },
  "responsive_breakpoints": { "mobile": "...", "tablet": "...", "desktop": "..." },
  "dependencies": ["next/image", "react-icons", ...],
  "estimated_time": "2h"
}
```

### QA Validator Agent
```json
INPUT:
{
  "original_url": "https://puyehue.cl",
  "qa_url": "https://puyehue-web-...",
  "validation_type": "visual_diff"
}

OUTPUT:
{
  "visual_diff_percent": 1.2,
  "core_web_vitals": { "LCP": "Good", "FID": "Good", "CLS": "Good" },
  "seo_score": 92,
  "accessibility_score": 95,
  "performance_score": 88,
  "status": "PASS"
}
```

---

## 🎯 PASO 6: DEFINIR CRITERIOS DE ACEPTACIÓN

### Fase 3: Navigation & Header
```
✅ Logo visible y clickeable
✅ Menú con 8 items (Promociones, Destino, Hotel, Qué Hacer, Programas, Eventos, Sostenibilidad, Ven por el Día)
✅ Selector de idiomas (ES, EN, ARG)
✅ Botón "RESERVAR" (naranja, sticky)
✅ Sticky en scroll
✅ Responsive (hamburger en mobile)
✅ Hover states en items
✅ Transiciones suaves
```

### Fase 4: Hero Slider & Booking
```
✅ Slider con flechas (< >)
✅ Slider con dots (indicadores)
✅ Transición smooth (fade o slide)
✅ Booking form superpuesto
✅ Inputs: fecha, noches, adultos, niños, infantes
✅ Botón "RESERVAR" (verde/sage)
✅ Validación de inputs
✅ Responsive
```

### Fase 5: Secciones
```
✅ 8 secciones replicadas
✅ Galerías 4 columnas
✅ Overlays de texto
✅ Responsive (2 columnas tablet, 1 mobile)
✅ Lazy loading de imágenes
```

### Fase 6: Estilos
```
✅ Colores exactos (#FF6B35, #8B9E7F, #333333, #FFFFFF)
✅ Tipografía (Playfair + Roboto)
✅ Espaciado consistente
✅ Hover states
✅ Transiciones
```

### Fase 7: QA
```
✅ Visual diff < 2%
✅ Core Web Vitals: Good
✅ SEO score: 90+
✅ Responsive: Todas las resoluciones
✅ Accesibilidad: WCAG 2.1 AA
```

---

## 📊 PASO 7: TRACKING DE PROGRESO

### Tabla de Progreso
```
Fase | Subagente | Status | % | Tiempo | Criterios
-----|-----------|--------|---|--------|----------
1    | Recon     | ✅     | 100% | 2h | Specs extraídas
2    | Content   | ✅     | 60% | 3h | Metadata + Hero
3    | Layout    | ⏳     | 0% | 2-3h | Header + Nav
4    | Layout    | ⏳     | 0% | 3-4h | Hero Slider + Booking
5    | Layout    | ⏳     | 0% | 4-5h | Secciones
6    | Style     | ⏳     | 0% | 2-3h | Colores + Tipografía
7    | QA        | ⏳     | 0% | 3-4h | Validación
8    | Deploy    | ⏳     | 0% | 1-2h | Production
9    | Doc       | ⏳     | 0% | 2-3h | Lecciones

TOTAL: 22-28 horas
```

---

## 🚨 PASO 8: ERROR HANDLING & ROLLBACK

### Si algo falla en Fase 3 (Header)
```
1. Registrar error en lessons-kb
2. Crear patch (fix)
3. Revertir a versión anterior
4. Esperar aprobación
5. Aplicar patch
6. Continuar
```

### Si visual diff > 2%
```
1. Identificar diferencias
2. Crear lista de ajustes
3. Aplicar ajustes
4. Revalidar
5. Iterar hasta < 2%
```

---

## 📝 PASO 9: DOCUMENTACIÓN OBLIGATORIA

### Por cada fase:
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

## 🎯 RESUMEN: CÓMO VAMOS

### ✅ Completado (Fases 1-2)
- Reconnaissance: Especificaciones extraídas
- Content: Metadata, hero, narrativa, features, servicios

### 🔄 En Progreso (Fases 3-7)
- Layout Builder: Crear componentes (8-10h)
- Content Loader: Cargar contenido completo (3-4h)
- Style Engineer: Aplicar estilos (2-3h)
- QA Validator: Validar (3-4h)
- Deployment: Deploy (1-2h)
- Doc Reporter: Documentar (2-3h)

### ⏳ Pendiente (Fase 8)
- Production deployment

### 📊 Estimado Total
- **22-28 horas** para replicación completa
- **Tiempo real:** Depende de complejidad de componentes

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

### HOY (Paso a paso)
1. **Iniciar Fase 3: Layout Builder**
   - Crear `Header.tsx` con logo + menú + idiomas
   - Botón "RESERVAR" sticky
   - Responsive hamburger
   - Estimado: 2-3 horas

2. **Documentar en tiempo real**
   - Qué se hizo
   - Qué falló
   - Cómo se fijó
   - Lecciones

3. **Guardar en lessons-kb**
   - Prompts efectivos
   - Errores comunes
   - Soluciones

---

**Desarrollado por Sistemas - Retarget ❤️**  
**Metodología:** MCP Enterprise (Microservicios + Event-Driven + Feedback Loops)  
**Status:** Fase 3 lista para comenzar
