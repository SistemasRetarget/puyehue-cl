# 📊 PUYEHUE-CL: VISUAL AUDIT & IMPROVEMENT PLAN

**Fecha:** 2026-05-06  
**Estado:** EN PROGRESO  
**Objetivo:** Clonar estructura exacta + mejorar calidad visual

---

## 🎨 ANÁLISIS ACTUAL

### Arquitectura Visual
```
┌─ Layout
│  ├─ Font: Inter (sans) + Playfair Display (serif)
│  ├─ Color Palette:
│  │  ├─ bg: #faf8f5 (cream)
│  │  ├─ ink: #1a1a1a (dark)
│  │  ├─ accent: #8b7355 (brown)
│  │  ├─ orange: #E8601C
│  │  └─ line: #e8e1d6 (divider)
│  └─ Spacing: clamp-based (responsive)
│
├─ Header
│  ├─ Fixed positioning
│  ├─ Sticky bg-white + shadow on scroll
│  ├─ Bilingual menu (ES/EN/ARG)
│  └─ Mobile hamburger toggle
│
├─ Components
│  ├─ BookingForm
│  ├─ Testimonials
│  ├─ FAQ
│  ├─ FloatingWhatsApp
│  └─ Footer
│
└─ Infrastructure
   ├─ Next.js 15.4 + TypeScript
   ├─ Payload CMS (admin)
   ├─ Tailwind CSS
   ├─ SQLite DB
   └─ Google Cloud Run (deploy)
```

### Componentes Principales
| Componente | Estado | Prioridad |
|-----------|--------|-----------|
| Header | ⚠️ Mejorar | ALTA |
| Hero | ❓ Analizar | ALTA |
| Images | 🔴 PIXELADAS | CRÍTICA |
| Testimonials | ⚠️ Mejorar | MEDIA |
| Footer | ⚠️ Mejorar | MEDIA |
| Forms | ✅ Ok | BAJA |

---

## 🔴 PROBLEMAS CRÍTICOS IDENTIFICADOS

### 1. **Imágenes Pixeladas**
- Causa probable: compresión/escala incorrecta
- Impacto: visual, percepto calidad
- Solución: re-exportar con resolución 2x + lazy loading

### 2. **Responsividad Colores**
- Algunos colores pueden no coincidir exactamente con puyehue.cl original
- Necesario: captura exacta de RGB/HSL de sitio original

### 3. **Tipografía**
- Inter/Playfair Display correctas
- Verificar: tamaños, weights, line-height exactos

---

## 📋 CHECKLIST DE MEJORAS

### FASE 1: Análisis Comparativo (HOY)
- [ ] Screenshot puyehue.cl original
- [ ] Extraer colores exactos (eyedropper)
- [ ] Medir tamaños de elementos clave
- [ ] Analizar estructura de imágenes

### FASE 2: Optimización de Imágenes (CRÍTICA)
- [ ] Revisar `/public/images/` resolución
- [ ] Re-exportar en 2x @ webp
- [ ] Implementar `next/image` con sizes
- [ ] Lazy loading + placeholder blur

### FASE 3: Alineación de Colores
- [ ] Actualizar `tailwind.config.ts` con valores exactos
- [ ] Verificar contraste (WCAG AA)
- [ ] Aplicar en todos componentes

### FASE 4: Responsividad
- [ ] Test en móvil (iPhone 12/14)
- [ ] Test en tablet
- [ ] Test en desktop (1440px)

### FASE 5: Deploy & Validación
- [ ] Push a puyehue-cl repo
- [ ] Build en Google Cloud
- [ ] Visual regression testing
- [ ] QA final

---

## 🎯 SIGUIENTE PASO

**Necesito:**
1. ✅ URL puyehue.cl original para análisis visual
2. ✅ Access a `/public/images/` del proyecto
3. ✅ Aprob de cambios visuales

**Voy a:**
1. Comparar pixel by pixel
2. Generar diagrama de mejoras
3. Preparar PR con todos los cambios

---

*Generado automáticamente por COMPASS.*
