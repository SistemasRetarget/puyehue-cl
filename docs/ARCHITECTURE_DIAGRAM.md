# 🏗️ PUYEHUE-CL: ARCHITECTURE DIAGRAM

## Component Hierarchy

```mermaid
graph TD
    A["🌐 Next.js 15 App"] --> B["📄 Root Layout<br/>Inter + Playfair Display"]
    B --> C["🎨 Global Styles<br/>Tailwind CSS"]
    C --> D["🔌 Provider Stack"]
    
    D --> E["📍 Header Component"]
    D --> F["🎯 Hero Section"]
    D --> G["🏨 Hotel Section"]
    D --> H["🎪 Events Section"]
    D --> I["💬 Testimonials"]
    D --> J["❓ FAQ"]
    D --> K["📱 Booking Form"]
    D --> L["📞 Floating WhatsApp"]
    D --> M["🔗 Footer"]
    
    E --> E1["Menu Items"]
    E --> E2["Language Selector"]
    E --> E3["Sticky On Scroll"]
    
    F --> F1["Hero Image 🔴 PIXELATED"]
    F --> F2["CTA Buttons"]
    F --> F3["Gradient Overlay"]
    
    K --> K1["Input Fields"]
    K --> K2["Date Picker"]
    K --> K3["Google Analytics Integration"]
    
    N["🗄️ Backend"] --> O["Payload CMS Admin"]
    N --> P["SQLite DB"]
    N --> Q["Content Collections"]
    
    R["☁️ Deployment"] --> S["Google Cloud Run"]
    R --> T["Cloud Build Pipeline"]
    R --> U["Artifact Registry"]
```

## Color System

```mermaid
graph LR
    A["Color Palette"] --> B["Brand Colors"]
    A --> C["Semantic Colors"]
    
    B --> B1["Background: #faf8f5<br/>🟫 Cream"]
    B --> B2["Ink: #1a1a1a<br/>🟫 Dark"]
    B --> B3["Accent: #8b7355<br/>🟫 Brown"]
    B --> B4["Orange: #E8601C<br/>🟧 Primary CTA"]
    B --> B5["Muted: #6b6b6b<br/>🟫 Secondary Text"]
    
    C --> C1["Success: Green"]
    C --> C2["Error: Red"]
    C --> C3["Warning: Amber"]
```

## Improvement Flow

```mermaid
graph LR
    A["CURRENT STATE<br/>puyehue-cl-796..."] -->|"ANALYSIS"| B["VISUAL AUDIT<br/>Colors, Images, Typography"]
    B -->|"COMPARISON"| C["ORIGINAL puyehue.cl<br/>Reference"]
    C -->|"OPTIMIZATION"| D["Image Compression 2x<br/>Color Calibration<br/>Typography Fine-tune"]
    D -->|"DEPLOYMENT"| E["UPDATED puyehue-cl<br/>Google Cloud Run"]
    E -->|"VALIDATION"| F["✅ PRODUCTION<br/>Visual Quality++"]
```

## Image Optimization Priority

```mermaid
graph TD
    IMG["Images in puyehue-cl"]
    IMG --> H["🔴 CRITICAL<br/>Hero Images"]
    IMG --> P["🟡 HIGH<br/>Product Gallery"]
    IMG --> T["🟡 HIGH<br/>Testimonial Avatars"]
    IMG --> F["🟢 OK<br/>Icons & Logos"]
    
    H --> H1["Current: JPG/PNG low-res<br/>Issue: Visible pixelation"]
    H --> H2["Solution: WebP 2x + srcset"]
    
    P --> P1["Current: Mixed formats<br/>Issue: Inconsistent quality"]
    P --> P2["Solution: next/Image + blur placeholder"]
    
    T --> T1["Current: Small + compressed<br/>Issue: Quality loss on zoom"]
    T --> T2["Solution: Avatar component + 2x resolution"]
```

## Tech Stack Details

### Frontend
- **Framework:** Next.js 15.4.11 (latest)
- **Language:** TypeScript 5.5.4
- **Styling:** Tailwind CSS 3.4.7
- **Fonts:** Inter (sans) + Playfair Display (serif) from Google Fonts
- **Image Optimization:** next/image (needs improvement)
- **Testing:** Playwright 1.59.1

### Backend & CMS
- **CMS:** Payload 3.83.0 (headless)
- **Database:** SQLite with better-sqlite3
- **Admin UI:** Payload UI 3.83.0

### DevOps
- **Container:** Docker (Node 20 Alpine)
- **Orchestration:** Google Cloud Run
- **CI/CD:** Cloud Build + GitHub webhooks
- **Registry:** Google Artifact Registry

---

*Last Updated: 2026-05-06*
