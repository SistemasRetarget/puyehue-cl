# Análisis Detallado de Estructura Visual — Puyehue.cl

**Fuente:** https://puyehue.cl  
**Fecha:** 29 Abril 2026, 04:20 UTC  
**Objetivo:** Replicar estructura visual exacta en QA app

---

## 🎨 Estructura General

### 1. Header/Navbar
**Ubicación:** Top sticky  
**Componentes:**
- Logo (izquierda): https://puyehue.cl/wp-content/uploads/2024/11/logo-hotel-termas-puyehue-gris.svg
- Navegación (centro): 8 items
  - Promociones
  - Destino
  - Hotel
  - Qué Hacer
  - Programas
  - Eventos
  - Sostenibilidad
  - Ven por el Día
- CTA Button (derecha): "RESERVAR" (naranja/orange)
- Idiomas: ES, EN, ARG (flags)

**Estilos:**
- Background: Blanco o transparente con scroll
- Altura: ~80px
- Sticky: Sí
- Shadow: Sutil

---

### 2. Hero Section
**Altura:** 100vh (full viewport)  
**Imagen:** https://puyehue.cl/wp-content/uploads/2024/12/1_HOME-05.webp  
**Overlay:** Gradiente oscuro (black/40 a black/60)

**Contenido:**
- Título: "VIVE TU EXPERIENCIA THERMAL" (grande, blanco, serif)
- Subtítulo: Pequeño, blanco, sans-serif
- Slider: Flechas izq/derecha para navegar imágenes

**Elementos Visuales:**
- Imagen de fondo: Personas en termas
- Overlay con gradiente
- Navegación de slider (< >)

---

### 3. Sección: Booking/Reserva
**Ubicación:** Superpuesta en hero (bottom)  
**Componentes:**
- Fecha de entrada: Input date
- Número de noches: Input number
- Adultos (+12 años): Input number
- Niños (5-11 años): Input number
- Infantes (0-4 años): Input number
- Botón: "RESERVAR" (verde/sage)

**Layout:** Grid horizontal (6 columnas)  
**Background:** Blanco/crema con transparencia

---

### 4. Sección: Promociones
**Título:** "PROMOCIONES"  
**Layout:** Grid 3 columnas  
**Cards:**
- Imagen (16:9)
- Título
- Descripción
- Botón "Ver más"

**Colores:**
- Fondo: Blanco
- Texto: Gris oscuro
- Botón: Naranja/orange

---

### 5. Sección: Destino
**Título:** "DESTINO"  
**Contenido:**
- Descripción narrativa
- Imagen grande (lado derecho)
- Datos: Ubicación, Altitud, Clima, etc.

**Layout:** 2 columnas (texto + imagen)

---

### 6. Sección: Hotel
**Título:** "HOTEL"  
**Contenido:**
- Descripción de instalaciones
- Galería de imágenes (4 columnas)
- Amenities (iconos + texto)

**Layout:** 
- Texto centrado (arriba)
- Galería 4 columnas (abajo)

---

### 7. Sección: Qué Hacer
**Título:** "QUÉ HACER"  
**Contenido:**
- Descripción de actividades
- Galería 4 columnas con overlay de texto
  - Senderismo
  - Cabalgatas
  - Kayak
  - Ascenso Volcán

**Layout:** 
- Descripción (arriba)
- Galería 4 columnas (abajo)

---

### 8. Sección: Programas
**Título:** "PROGRAMAS"  
**Contenido:**
- Cards con programas especiales
- Imagen, título, descripción, botón

**Layout:** Grid 3 columnas

---

### 9. Sección: Eventos
**Título:** "EVENTOS"  
**Contenido:**
- Lista de eventos próximos
- Fecha, título, descripción

**Layout:** Timeline o lista

---

### 10. Sección: Sostenibilidad
**Título:** "SOSTENIBILIDAD"  
**Contenido:**
- Iniciativas ambientales
- Imágenes + texto

**Layout:** Alternado (imagen izq/derecha)

---

### 11. Sección: Ven por el Día
**Título:** "VEN POR EL DÍA"  
**Contenido:**
- Descripción de visitas de día
- Galería
- Botón "Reservar"

**Layout:** Hero pequeño + contenido

---

### 12. Footer
**Componentes:**
- Logo
- Links rápidos
- Contacto (teléfono, email)
- Redes sociales (Facebook, Instagram, etc.)
- Copyright

**Layout:** 4-5 columnas  
**Background:** Gris oscuro o negro

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Primario (Naranja)** | #FF6B35 o similar | Botones CTA, acentos |
| **Secundario (Verde/Sage)** | #8B9E7F o similar | Botones secundarios |
| **Gris Oscuro** | #333333 | Texto principal |
| **Gris Claro** | #F5F5F5 | Fondos |
| **Blanco** | #FFFFFF | Fondos principales |
| **Azul (Agua)** | #4A90E2 | Acentos agua/termas |

---

## 🔤 Tipografía

| Elemento | Fuente | Peso | Tamaño |
|----------|--------|------|--------|
| **H1 (Hero)** | Serif (Georgia, Playfair) | Light/Regular | 48-72px |
| **H2 (Secciones)** | Serif | Light | 36-48px |
| **H3 (Cards)** | Sans-serif | Medium | 18-24px |
| **Body** | Sans-serif (Roboto, Open Sans) | Regular | 14-16px |
| **Small** | Sans-serif | Regular | 12-14px |

---

## 📐 Espaciado

| Elemento | Padding | Margin |
|----------|---------|--------|
| **Secciones** | 60-80px (top/bottom) | 0 |
| **Cards** | 20-30px | 15-20px |
| **Hero** | 0 | 0 |
| **Contenedor** | 20-40px (sides) | 0 |

---

## 🖼️ Imágenes Principales

| Sección | URL | Dimensiones |
|---------|-----|-------------|
| **Hero** | https://puyehue.cl/wp-content/uploads/2024/12/1_HOME-05.webp | 1920x1080 |
| **Logo** | https://puyehue.cl/wp-content/uploads/2024/11/logo-hotel-termas-puyehue-gris.svg | 290x99 |
| **Promociones** | Varias | 800x600 |
| **Galería** | Varias | 400x500 |

---

## 🔧 Componentes Clave

### Botón CTA (Naranja)
```
Padding: 12-16px 32-40px
Border-radius: 25-30px
Background: #FF6B35
Color: Blanco
Font-weight: Bold
Hover: Darken 10%
```

### Card
```
Border-radius: 8-12px
Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
Padding: 20px
Background: Blanco
Hover: Lift (shadow increase)
```

### Galería (4 columnas)
```
Grid: 4 columnas
Gap: 20-30px
Responsive: 2 columnas (tablet), 1 columna (mobile)
Aspect-ratio: 3/4 o 4/5
```

### Hero Slider
```
Altura: 100vh
Flechas: Izq/Derecha
Indicadores: Puntos (dots)
Transición: Fade o slide
```

---

## 📱 Responsive Breakpoints

| Device | Width | Cambios |
|--------|-------|---------|
| **Desktop** | 1200px+ | 4 columnas, full nav |
| **Tablet** | 768-1199px | 2 columnas, hamburger menu |
| **Mobile** | <768px | 1 columna, hamburger menu |

---

## ⚠️ Diferencias Actuales (QA vs Original)

| Elemento | Original | QA | Status |
|----------|----------|-----|--------|
| **Navbar** | 8 items + logo + idiomas | No existe | ❌ Falta |
| **Hero** | Slider con flechas | Static image | ❌ Incompleto |
| **Booking Form** | Superpuesto en hero | No existe | ❌ Falta |
| **Promociones** | Grid 3 columnas | No existe | ❌ Falta |
| **Galería** | 4 columnas con overlay | No existe | ❌ Falta |
| **Footer** | 4-5 columnas | Básico | ⚠️ Incompleto |
| **Colores** | Naranja + Verde + Gris | Genéricos | ⚠️ Diferente |
| **Tipografía** | Serif + Sans-serif | Genérica | ⚠️ Diferente |

---

## 🎯 Plan de Replicación Completa

### Fase 3: Navigation & Header
- [ ] Crear componente Header/Navbar
- [ ] Agregar logo
- [ ] Replicar menú (8 items)
- [ ] Agregar selector de idiomas
- [ ] Botón "RESERVAR" (naranja)
- [ ] Sticky behavior

### Fase 4: Hero & Booking
- [ ] Mejorar hero (imagen de termas)
- [ ] Agregar slider (flechas + dots)
- [ ] Crear booking form superpuesto
- [ ] Validar responsive

### Fase 5: Secciones Principales
- [ ] Promociones (grid 3 columnas)
- [ ] Destino (2 columnas)
- [ ] Hotel (galería 4 columnas)
- [ ] Qué Hacer (galería 4 columnas)
- [ ] Programas (grid 3 columnas)
- [ ] Eventos (timeline)
- [ ] Sostenibilidad (alternado)
- [ ] Ven por el Día (hero pequeño)

### Fase 6: Estilos & Colores
- [ ] Aplicar paleta de colores exacta
- [ ] Tipografía (Serif + Sans-serif)
- [ ] Espaciado consistente
- [ ] Hover states
- [ ] Transiciones suaves

### Fase 7: QA & Optimización
- [ ] Visual diff vs original
- [ ] Core Web Vitals
- [ ] SEO
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Accesibilidad

---

## 📝 Notas Importantes

1. **Imágenes:** Las imágenes actuales son placeholders de Unsplash. Necesitan ser reemplazadas con imágenes reales de Puyehue.

2. **Colores:** Los colores deben ser extraídos exactamente de puyehue.cl usando DevTools.

3. **Tipografía:** Verificar qué fuentes usa puyehue.cl (probablemente Google Fonts).

4. **Slider:** El hero tiene un slider que necesita JavaScript o librería (Swiper, Slick, etc.).

5. **Booking Form:** Es un componente crítico que debe ser funcional.

6. **Performance:** Optimizar imágenes para Core Web Vitals.

---

**Desarrollado por Sistemas - Retarget ❤️**  
**Próximo paso:** Implementar Fase 3 (Navigation & Header)
