# 🚀 PUYEHUE-CL: PERFORMANCE + ANALYTICS OPTIMIZATION

**Fecha:** 2026-05-06  
**Status:** PLANNING  
**Objetivo:** Core Web Vitals + Google Ads + Performance++

---

## 📊 ESTADO ACTUAL

### ✅ YA IMPLEMENTADO
| Componente | Estado | Detalles |
|-----------|--------|---------|
| **GTM (Google Tag Manager)** | ✅ | ID via `NEXT_PUBLIC_GTM_ID` |
| **GA4 (Google Analytics 4)** | ✅ | ID via `NEXT_PUBLIC_GA_ID` |
| **Meta Pixel** | ✅ | ID via `NEXT_PUBLIC_META_PIXEL_ID` |
| **Consent Mode v2** | ✅ | ConsentBanner + localStorage |
| **Event Tracking** | ✅ | `track()` utility + custom events |
| **Event Mapping** | ✅ | Custom → Meta Standard events |

### ❌ FALTA
| Componente | Crítico | Detalles |
|-----------|---------|---------|
| **Google Ads Conversion** | 🔴 CRÍTICA | Sin pixel de conversión |
| **Google Ads Remarketing** | 🟡 ALTA | Sin remarket list |
| **Core Web Vitals** | 🔴 CRÍTICA | Sin optimización |
| **Performance Monitoring** | 🔴 CRÍTICA | Sin observabilidad |
| **Image Optimization** | 🔴 CRÍTICA | JPG sin optimizar, ver VISUAL_AUDIT |

---

## 🎯 FASE 1: GOOGLE ADS INTEGRATION

### 1.1 Google Ads Conversion Tracking
```typescript
// Agregar a Analytics.tsx
const gAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

// In GTM tag:
gtag('config', 'AW-XXXXXXXXXX', {
  'allow_google_signals': true,
  'allow_ad_personalization_signals': true
});

// En tracking.ts:
export function trackConversion(value: number, currency = 'CLP') {
  gtag('event', 'purchase', {
    'transaction_id': generateId(),
    'value': value,
    'currency': currency,
    'send_to': 'AW-XXXXXXXXXX/xxx' // Google Ads ID
  });
}
```

### 1.2 Google Ads Remarketing Tag
```typescript
// Agregar Script en layout.tsx
<Script src="https://www.googleadservices.com/pagead/conversion.js" />

// Pixel image (noscript fallback)
<noscript>
  <img height="1" width="1" style={{display:'none'}}
    src="https://www.googleadservices.com/pagead/conversion/XXXXXXX/?label=XXXXX&guid=ON&script=0" />
</noscript>
```

### 1.3 Necesario
```
✅ Google Ads Account ID (AW-XXXXXXXXXX)
✅ Conversion ID
✅ Conversion Label
✅ GTM property con Google Ads tag configurado
```

---

## 🎯 FASE 2: CORE WEB VITALS OPTIMIZATION

### 2.1 Métricas Target
```
LCP (Largest Contentful Paint): < 2.5s ✅
FID (First Input Delay): < 100ms ✅
CLS (Cumulative Layout Shift): < 0.1 ✅
```

### 2.2 Problemas + Soluciones

#### A. Images (🔴 CRÍTICA - Ver VISUAL_AUDIT)
**Problema:** JPG 2.6-2.7MB sin optimizar
**Solución:**
```typescript
// Usar next/image correctamente
import Image from 'next/image';

export default function HeroImage() {
  return (
    <Image
      src="/hero.webp"
      alt="Puyehue"
      width={1920}
      height={1080}
      priority // Para hero
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 100vw"
      placeholder="blur"
      blurDataURL="data:image/webp;..." // SVG placeholder
      quality={80}
    />
  );
}
```

#### B. JavaScript Bundle Size
**Problema:** Payload CMS + Next.js = posible bloat
**Solución:**
```bash
# Auditar bundle
npm run build
# → Revisar .next/static/chunks/

# Code splitting: lazy load componentes heavy
const FAQSection = dynamic(() => import('@/components/FAQ'), {
  loading: () => <LoadingFallback />
});
```

#### C. Font Loading
**Problema:** Playfair Display + Inter pueden bloquear render
**Solución:**
```typescript
// Ya implementado: font optimization en layout.tsx
const fontSans = Inter({
  display: "swap", // ✅ Correcto
  preload: true,
  weight: ["300", "400", "500", "600"]
});
```

#### D. Third-party Scripts (GTM, GA, Meta, Google Ads)
**Problema:** Pueden bloquear main thread
**Solución:**
```typescript
// Ya implementado: strategy="afterInteractive"
<Script src="..." strategy="afterInteractive" />

// Agregar también para Google Ads:
<Script id="google-ads" strategy="lazyOnload" />
```

---

## 🎯 FASE 3: PERFORMANCE MONITORING

### 3.1 Web Vitals Reporting
```typescript
// Crear lib/web-vitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function initWebVitals() {
  getCLS(console.log);
  getFID(console.log);
  getFCP(console.log);
  getLCP(console.log);
  getTTFB(console.log);
  
  // Enviar a GA4
  onCLS((metric) => gtag('event', 'CLS', { value: metric.value }));
  onFID((metric) => gtag('event', 'FID', { value: metric.value }));
  // etc.
}
```

### 3.2 Lighthouse CI
```yaml
# lighthouse-ci.json
{
  "upload": {
    "target": "temporary-public-storage"
  },
  "assert": {
    "preset": "lighthouse:recommended",
    "assertions": {
      "categories:performance": ["error", { "minScore": 0.9 }],
      "categories:accessibility": ["error", { "minScore": 0.95 }]
    }
  }
}
```

### 3.3 Google Search Console Integration
- Enlazar en Google Search Console
- Monitorear Core Web Vitals reales
- Alertas automáticas si degradation

---

## 🔥 CHECKLIST DE IMPLEMENTACIÓN

### SEMANA 1: Google Ads
- [ ] Obtener Google Ads ID + Conversion ID
- [ ] Crear Google Ads tag en GTM
- [ ] Configurar conversion tracking en Analytics.tsx
- [ ] Implementar trackConversion() en booking form
- [ ] Test en sandbox
- [ ] Deploy a staging
- [ ] Validar pixel en Google Ads UI

### SEMANA 2: Core Web Vitals
- [ ] Auditar LCP (probablemente images)
- [ ] Optimizar hero images (2x WebP)
- [ ] Implementar next/Image en todos lados
- [ ] Lazy load below-the-fold components
- [ ] Test en mobile (throttled 4G)
- [ ] Lighthouse score > 90

### SEMANA 3: Monitoring
- [ ] Implementar web-vitals tracking
- [ ] Configurar Lighthouse CI en Cloud Build
- [ ] Enlazar Google Search Console
- [ ] Setup alertas en GA4 si Core Web Vitals degrada

---

## 📈 EVENTOS A TRACKEAR

### Actualmente Implementados ✅
```
✅ click_reserva → InitiateCheckout
✅ click_contacto → Contact
✅ click_whatsapp → Contact
✅ form_submit_contacto → Lead
✅ view_casa → ViewContent
✅ newsletter_subscribe → Subscribe
```

### A Agregar ❌
```
❌ click_buy → Purchase (Google Ads)
❌ add_to_cart → AddToCart (Shopify integration si aplica)
❌ phone_call_click → Contact (tracking llamadas)
❌ email_click → Contact
❌ scroll_depth → Engagement
❌ video_play → Engagement (si hay videos)
❌ form_error → Issue (para debugging)
```

---

## 🎖️ SUCCESS CRITERIA

**Fase 1 (Google Ads):**
- ✅ Pixel visible en Google Ads UI
- ✅ Conversiones reportando en GA4 + Google Ads
- ✅ Remarketing list poblándose

**Fase 2 (Core Web Vitals):**
- ✅ LCP < 2.5s
- ✅ FID < 100ms (o INP < 200ms)
- ✅ CLS < 0.1
- ✅ Lighthouse score > 90

**Fase 3 (Monitoring):**
- ✅ Web Vitals en GA4
- ✅ Alertas configuradas
- ✅ Lighthouse CI pasando en cada PR

---

## 📋 RECURSOS NECESARIOS

```
✅ Google Ads Account ID (AW-XXXXXXXXXX)
✅ Google Ads Conversion ID
✅ Google Ads Conversion Label
✅ GTM container version con Google Ads tag
✅ Acceso a Google Search Console
✅ Acceso a Google Analytics 4
```

---

*Generado automáticamente por COMPASS.*
