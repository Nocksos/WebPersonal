# SPEC.md — Especificación Funcional del Portfolio
> Última actualización: 2024 · v1.0
> Leer este archivo SIEMPRE antes de tocar código. Si generas o modificas algo, actualiza la sección correspondiente.

---

## 1. Visión General

**Propósito:** Portfolio personal como carta de presentación profesional. Muestra proyectos con demos en vivo, stack técnico, experiencia y canal de contacto directo.

**Audiencia objetivo:** Reclutadores técnicos, CTOs, tech leads, potenciales clientes freelance.

**Stack del proyecto:**
- HTML5 + CSS3 vanilla + JavaScript ES6+
- Tailwind CSS (CDN, sin build step)
- Sin frameworks JS (vanilla DOM)
- Fuentes: Space Grotesk, JetBrains Mono, Geist (Google Fonts)
- Archivo único (`portfolio.html`) — sin bundler, sin dependencias npm

**Principio de diseño:** Ver `DESIGN.md`. El aesthetic es "IDE / hacker dashboard" — dark mode obligatorio, cyan como primario, lime como secundario.

---

## 2. Arquitectura del Archivo

```
src/                   ← Código fuente principal (estructura por capas)
  portfolio.html       ← Entrada UI (actualmente `src/portfolio.html`)
  ARCHITECTURE.md      ← Documentación de arquitectura (DDD + Clean Architecture)
  infrastructure/      ← Configuración y servicios (DownloadService, AppConfig)
  presentation/        ← Páginas, assets y componentes UI
docs/                  ← Specs y documentación legible para colaboradores
  SPEC.md
  COMPONENTS.md
  CHANGELOG.md
```

**Regla:** El portfolio original era un solo `.html`. Se mantiene compatibilidad, pero la base se está organizando en `src/` siguiendo DDD y Arquitectura Limpia para facilitar crecimiento y separación de responsabilidades.

---

## 3. Secciones — Estado Actual

### 3.1 NAV — `#nav`
**Estado:** ✅ Implementado

**Comportamiento:**
- Fija en la parte superior, `z-50`
- Glassmorphism: `backdrop-filter: blur(16px)` + `bg-surface/50`
- Al hacer scroll > 20px añade clase `bg-surface/80` (mayor opacidad)
- Logo: `DEV_CORE.IO` — enlaza a `#hero`
- Links de navegación: Proyectos, Sobre mí, Stack, Experiencia, Contacto — smooth scroll
- CTA derecha: botón `RESUME.PDF` con gradiente cyan→indigo — enlaza al PDF del CV
- **Mobile:** drawer lateral desde la derecha con overlay oscuro. Botón hamburguesa visible solo en mobile.

**Pendiente:**
- [x] Reemplazar `href` directos del botón Resume por botones JS que usan `DownloadService` (PDF por defecto)
- [ ] Marcar el link activo según sección visible (IntersectionObserver en nav)
- [ ] Añadir link a sección Blog cuando esté lista (nota: actualmente se reemplazó por sección CV/Descargable)

**Variables a personalizar:**
```
Logo text:        "DEV_CORE.IO"         → tu nombre/marca
Resume href:      "#"                   → "/assets/cv-tunombre.pdf"
Nav links:        textos en español     → ajustar si cambia idioma
```

---

### 3.2 HERO — `#hero`
**Estado:** ✅ Implementado

**Comportamiento:**
- Grid 12 columnas: texto ocupa col-span-7, terminal col-span-5
- Badge de estado con punto pulsante (lime)
- H1 con texto estático + `<span class="grad-text">` en la palabra clave
- Dos CTAs: primario (VIEW_PROJECTS → #projects) y secundario (CONTACTAR → #contact)
- **Stat counters:** 3 números animados con conteo progresivo al cargar. Trigger: IntersectionObserver en `#hero`
- **Terminal component:** simula bash con contenido estático (whoami, cat skills.json). Cursor parpadeante con CSS.
- Decoración: grid de puntos SVG, glow circles con blur

**Pendiente:**
- [ ] Rellenar nombre real en terminal `whoami`
- [ ] Actualizar `skills.json` en terminal con stack real
- [ ] Ajustar números de stats (años, proyectos, tecnologías)
- [ ] Añadir typing animation real al terminal (secuencia de comandos)
- [ ] Considerar foto/avatar en lugar del terminal en mobile

**Variables a personalizar:**
```
H1 texto:          "Construyendo arquitecturas digitales..."  → tu tagline
H1 grad-text:      "arquitecturas"                           → palabra clave
Párrafo body:      descripción genérica                      → tu descripción real
Stat targets:      5 / 24 / 12                               → tus números reales
Terminal whoami:   "DEV_CORE.IO"                             → tu nombre
Terminal skills:   React, Node.js, etc.                      → tu stack real
```

---

### 3.3 PROJECTS (Carrusel) — `#projects`
**Estado:** ✅ Implementado

**Comportamiento del carrusel:**
- Track horizontal con `transform: translateX` animado (CSS transition 0.45s cubic-bezier)
- Visible cards según breakpoint: 3 (≥1024px) / 2 (≥640px) / 1 (<640px)
- Navegación: flechas prev/next (desktop y mobile), dots indicadores clicables
- Touch swipe: detecta `touchstart` / `touchend`, umbral 50px
- Resize: recalcula posición con `window.resize`

**Estructura de cada Project Card:**
```
[imagen/placeholder]     → aspect-video, overflow hidden, hover scale-105
  [badge número]         → "01", "02"... top-left, font-mono
  [badge estado]         → "LIVE DEMO" / "EN PROCESO" / "PRIVADO" top-right
[contenido p-6]
  [título h3]            → hover:text-primary
  [descripción p]        → 2 líneas max, line-clamp-2
  [tech badges]          → skill-badge cyan
  [divider]
  [links: DEMO + CÓDIGO] → iconos SVG inline
**Política para proyectos empresariales:**
- Para proyectos que pertenecen a clientes/empresas (casos de estudio reales) **no** se publican demos ni repositorios públicos. En su lugar:
  - Mostrar badge `CASO DE ESTUDIO` en la card.
  - Reemplazar botones DEMO/CÓDIGO por texto `Proyecto empresarial · Sin código disponible` o por un link que invite a contactar para más información.
  - Usar el modal de detalle (cuando se cree) para compartir información técnica sin publicar artefactos sensibles.
```

**Cards actuales:**
| # | Nombre | Estado | Tecnologías |
|---|--------|--------|-------------|
| 01 | Quantum Ledger | LIVE DEMO | GOLANG, REDIS, K8S |
| 02 | Neural Canvas | LIVE DEMO | PYTHON, PYTORCH, NEXT.JS |
| 03 | Apex Firewall | EN PROCESO | RUST, WASM, REACT |
| 04 | Placeholder | — | — |

**Pendiente:**
- [ ] Reemplazar placeholders visuales con screenshots reales de cada proyecto
- [ ] Añadir hrefs reales a botones DEMO y CÓDIGO
- [ ] Reemplazar proyectos de ejemplo con proyectos reales
- [ ] Considerar filtro por categoría (Frontend / Backend / Full-Stack / IA)
- [ ] Modal de detalle al hacer click en la card (descripción extendida, galería)

**Cómo añadir un proyecto nuevo:**
Copiar el bloque `<!-- CARD 0X -->` completo dentro de `#carousel-track`, actualizar número, nombre, descripción, badges y hrefs. El carrusel lo detecta automáticamente.

---

### 3.4 ABOUT — `#about`
**Estado:** ✅ Implementado

**Layout:** Grid 12col. Terminal bio (col-span-5) + texto y soft skills cards (col-span-7)

**Terminal bio contiene:**
- Nombre, rol
- Localización, disponibilidad, idiomas, GitHub, LinkedIn

**Soft skills cards (4):** Rendimiento, Escalabilidad, Clean Code, Trabajo en equipo — iconos SVG, colores alternos (cyan, lime, indigo)

**Pendiente:**
- [ ] Rellenar todos los campos reales (nombre, rol, ciudad, links)
- [ ] Cambiar "OPEN_TO_WORK" por estado real o eliminar si no aplica
- [ ] Personalizar los 3 párrafos de texto con historia real
- [ ] Ajustar/cambiar soft skills según perfil real
- [ ] Añadir foto de perfil (opción: dentro del terminal como "avatar.png")

**Variables a personalizar:**
```
Nombre:          "Tu Nombre Aquí"         → nombre real
Rol:             "Full-Stack Developer"   → rol real
Localización:    "Madrid, España"         → ciudad real
Disponibilidad:  "OPEN_TO_WORK"           → "EMPLOYED" / "FREELANCE" / eliminar
Idiomas:         "ES / EN"                → tus idiomas
GitHub:          "github.com/tuusuario"   → tu URL
LinkedIn:        "linkedin.com/in/tu..."  → tu URL
```

---

### 3.5 STACK — `#stack`
**Estado:** ✅ Implementado

**Layout:** 3 columnas: Frontend, Backend, DevOps/Cloud

**Frontend y Backend:** barras de progreso animadas. Trigger: IntersectionObserver en `#stack`. Animación: `width` de 0 a valor `data-width` en 1.2s ease.

**DevOps/Cloud:** grid de skill badges sin barra de progreso.

**Pendiente:**
- [ ] Actualizar tecnologías y porcentajes con stack real
- [ ] Considerar añadir 4ª columna: Herramientas (Figma, Git, Postman...)
- [ ] Considerar iconos SVG de cada tecnología (devicons)

**Skills actuales:**
| Categoría | Skills |
|-----------|--------|
| Frontend | React/Next.js 95%, TypeScript 90%, Three.js/WebGL 70%, Tailwind 98% |
| Backend | Node.js/Express 92%, Go 80%, PostgreSQL/Redis 88%, GraphQL 75% |
| DevOps | AWS, Docker, Kubernetes, Terraform, CI/CD, GitHub Actions, Nginx, Linux, Vercel, Prometheus |

---

### 3.6 EXPERIENCE — `#experience`
**Estado:** ✅ Implementado

**Layout:** Grid 12col. Intro texto (col-span-4) + Timeline con tabs (col-span-8)

**Tabs:** TRABAJO / EDUCACIÓN — toggle con JavaScript, oculta/muestra `#tab-work` y `#tab-edu`

**Timeline:** cada entrada tiene dot, línea vertical, título, empresa+fecha, descripción, skill badges. Opacidad decremental en entradas más antiguas (1.0, 0.6, 0.4).

**Entradas actuales (placeholder):**
- Senior Full-Stack Developer · Empresa Increíble · 2022–Presente
- Full-Stack Developer · Otra Empresa · 2020–2022
- Junior Developer · Primera Empresa · 2018–2020
- Educación: Grado Ingeniería Informática + Certificaciones

**Pendiente:**
- [ ] Rellenar con experiencia real
- [ ] Añadir logos de empresas (16x16 o 20x20 px, opcional)
- [ ] Certificaciones reales con badges

---

### 3.7 BLOG — `#blog`
**Estado:** ✅ Implementado (estructura estática)

**Layout:** Grid 12col. Intro+CTA (col-span-4) + lista de posts (col-span-8)

**Cada post:** fecha monospace + título + icono flecha diagonal. Hover: título cambia a cyan + underline.

**Posts actuales (placeholder):**
- 24.05.2024 · Escalando arquitecturas WebSocket...
- 12.04.2024 · La transición de TypeScript a Rust...
- 05.03.2024 · Bento Grids...

**Pendiente:**
- [ ] Conectar con fuente real de posts (Notion API, MDX, Hashnode, Dev.to...)
- [ ] Añadir tags/categorías por post
- [ ] Añadir tiempo estimado de lectura
- [ ] Definir si el blog vive en este dominio o es externo (redirigir)
- [ ] Si no hay blog activo, considerar eliminar sección o reemplazar con "Notas técnicas" de Twitter/X

---

### 3.8 CONTACT — `#contact`
**Estado:** ✅ Implementado (formulario estático, sin backend)

**Layout:** Grid 12col. Info+links (col-span-5) + formulario (col-span-7)

**Formulario campos:** Nombre, Email, Asunto, Mensaje, botón Enviar

**Pendiente:**
- [ ] Conectar formulario a backend: opciones recomendadas:
  - **Formspree** (más fácil, 0 backend): `action="https://formspree.io/f/XXXXXX"`
  - **EmailJS**: JS puro, sin servidor
  - **Netlify Forms**: si se despliega en Netlify, solo añadir `netlify` al form
- [ ] Añadir validación de campos (required, email format)
- [ ] Añadir estado de envío: loading spinner + mensaje de éxito/error
- [ ] Rellenar email y links reales

---

### 3.9 FOOTER
**Estado:** ✅ Implementado

**Pendiente:**
- [ ] Links reales a GitHub, LinkedIn, Resume
- [ ] Actualizar año del copyright si procede

---

## 4. Comportamientos Globales

| Comportamiento | Estado | Notas |
|----------------|--------|-------|
| Scroll suave (CSS `scroll-behavior: smooth`) | ✅ | En `<html>` |
| Fade-up on scroll (IntersectionObserver) | ✅ | Clase `.fade-up` + `.visible` |
| Scrollbar personalizada (cyan) | ✅ | `::-webkit-scrollbar` |
| Scanlines sutil (CSS repeating-gradient) | ✅ | Clase `.scanlines` en `<body>` |
| Nav highlight al scroll | ❌ | Pendiente |
| Modo claro | ❌ | No previsto (dark only) |
| SEO meta tags | ❌ | Pendiente añadir |
| Open Graph tags | ❌ | Pendiente añadir |
| Analytics | ❌ | Pendiente decidir herramienta |
| Accesibilidad ARIA | ⚠️ | Básica. Mejorar en siguiente iteración |

---

## 5. Responsive Breakpoints

| Breakpoint | Comportamiento |
|-----------|----------------|
| < 640px (mobile) | Single column, margin 20px, nav drawer, carrusel 1 card |
| 640–1024px (tablet) | 2 columnas en algunos grids, carrusel 2 cards |
| ≥ 1024px (desktop) | Layout completo 12col, carrusel 3 cards, margin 64px |

---

## 6. Assets Pendientes (actualizado)

| Asset | Descripción | Prioridad |
|-------|-------------|-----------|
| `src/presentation/assets/Alvaro_Hernandez_Gil_CV_ES.pdf` | CV descargable — ya movido a `presentation/assets` y referenciado en `AppConfig.cv.pdf` | ✅ Ya disponible |
| `presentation/pages/cv-alvaro-hernandez.html` | Versión HTML del CV para web (pendiente crear) | 🔴 Alta |
| `og-image.png` | 1200×630px para Open Graph/Twitter Card | 🟡 Media |
| Screenshots proyectos | 1280×720px, cada proyecto | 🔴 Alta |
| Avatar/foto | Para sección About (opcional) | 🟢 Baja |

---

## 7. Pendientes Globales (Backlog)

- [ ] Dominio propio + deploy (Netlify / Vercel / GitHub Pages)
- [ ] HTTPS y headers de seguridad
- [ ] Lighthouse score > 90 en todas las categorías
- [ ] Añadir sección "Uses" (setup de trabajo, herramientas)
- [ ] Cursor personalizado (opcional, ver DESIGN.md)
- [ ] Easter egg en consola del navegador (`console.log` estilizado)
- [ ] Añadir animación de entrada al terminal del hero (typing secuencial)
- [ ] Considerar partículas o canvas en el hero background
