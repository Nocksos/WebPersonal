# COMPONENTS.md — Inventario de Componentes
> Leer este archivo antes de crear cualquier componente nuevo.
> Si un componente ya existe aquí, REUTILIZARLO y no reinventarlo.
> Si creas uno nuevo, añadirlo a este inventario al terminar.

---

## Convenciones

- Todos los estilos usan las CSS variables del DESIGN.md (colores como `bg-primary`, `text-on-surface`, etc.)
- Clases de utilidad Tailwind configuradas en `tailwind.config` dentro del HTML
- Clases CSS custom definidas en el bloque `<style>` del HTML
- Nunca hardcodear colores hexadecimales en componentes nuevos — usar siempre las variables del sistema

---

## C-01 · NAV BAR

**Clase/ID:** `#nav`, `header`
**Archivo:** `portfolio.html` → sección `<!-- NAV -->`

**Variantes:** ninguna (única instancia)

**Clases clave:**
```css
.nav-blur          → backdrop-filter: blur(16px)
fixed top-0 z-50   → posicionamiento
bg-surface/50      → fondo semitransparente base
bg-surface/80      → fondo al hacer scroll (JS añade esta clase)
border-b border-outline-variant
```

- **Subcomponentes:**
- Logo: `font-grotesk font-bold text-primary`
- Nav links: `font-geist text-sm text-on-surface-variant hover:text-primary`
- CTA Resume: ahora implementado como botón JS que llama a `DownloadService` (ver C-05 Button Primary)
- Hamburguesa mobile: SVG inline 20×20

**Comportamiento JS:**
```javascript
// Scroll → opacidad
window.addEventListener('scroll', () => {
  nav.classList.toggle('bg-surface/80', window.scrollY > 20);
});
```

---

## C-02 · TERMINAL COMPONENT

**Clase/ID:** `bg-surface-container rounded-lg border border-outline-variant overflow-hidden`
**Aparece en:** Hero (#hero), About (#about)

**Estructura HTML:**
```html
<div class="bg-surface-container rounded-lg border border-outline-variant overflow-hidden glow-cyan">
  <!-- Top bar -->
  <div class="bg-surface-container-high px-4 py-3 flex items-center gap-2 border-b border-outline-variant">
    <div class="terminal-dot bg-[#FF5F56]"></div>
    <div class="terminal-dot bg-[#FFBD2E]"></div>
    <div class="terminal-dot bg-[#27C93F]"></div>
    <span class="font-mono text-[11px] text-on-surface-variant ml-2">nombre-archivo.ext</span>
  </div>
  <!-- Content -->
  <div class="p-5 font-mono text-[13px] leading-7">
    <!-- contenido variable -->
  </div>
</div>
```

**Clases CSS custom requeridas:**
```css
.terminal-dot { width: 12px; height: 12px; border-radius: 50%; }
.cursor-blink { border-right: 2px solid #94de2d; animation: blink 1s step-end infinite; }
.glow-cyan    { box-shadow: 0 0 24px rgba(76,215,246,0.18); }
```

**Colores de sintaxis (usar dentro del terminal):**
```
Prompt/comando:  text-primary-fixed-dim  (#4cd7f6)
Output normal:   text-on-surface         (#dae2fd)
Output success:  text-secondary          (#94de2d)
Strings:         text-secondary          (#94de2d)
Keys/props:      text-tertiary           (#c0c1ff)
Comentarios:     text-on-surface-variant (#bcc9cd)
Punctuation:     text-outline            (#869397)
```

**Variantes:**
- `glow-cyan`: para terminal prominente (hero)
- Sin glow: para terminales secundarias (about)

---

## C-03 · PROJECT CARD

**Clase/ID:** `.carousel-card .group`
**Aparece en:** #projects (carrusel)

**Estructura completa:**
```html
<div class="carousel-card group">
  <div class="bg-surface-container border border-outline-variant rounded-sm overflow-hidden
              transition-all duration-300 hover:border-primary hover:glow-cyan h-full flex flex-col">

    <!-- Thumbnail -->
    <div class="aspect-video overflow-hidden relative bg-surface-container-high flex items-center justify-center">
      <!-- OPCIÓN A: imagen real -->
      <img src="path/to/screenshot.png" alt="Nombre proyecto"
           class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
      <!-- OPCIÓN B: placeholder con gradiente (usar hasta tener imagen) -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-tertiary/10"></div>
      <div class="font-mono text-5xl font-bold text-primary/20 select-none">01</div>

      <!-- Badges sobre imagen -->
      <div class="absolute top-3 left-3 font-mono text-[10px] bg-surface-container-lowest/80
                  backdrop-blur-md px-2 py-1 border border-outline-variant text-on-surface">01</div>
      <div class="absolute top-3 right-3"><span class="demo-badge">LIVE DEMO</span></div>
    </div>

    <!-- Body -->
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="font-grotesk font-semibold text-xl text-on-surface mb-2
                 group-hover:text-primary transition-colors">Nombre Proyecto</h3>
      <p class="font-geist text-sm text-on-surface-variant mb-5 flex-grow leading-relaxed">
        Descripción corta del proyecto. Máximo 2 líneas.
      </p>
      <!-- Tech badges -->
      <div class="flex flex-wrap gap-2 mb-5">
        <span class="skill-badge bg-primary/10 text-primary border-primary/20">TECH</span>
      </div>
      <!-- Links -->
      <div class="flex items-center gap-3 pt-4 border-t border-outline-variant">
        <a href="#" class="flex items-center gap-1.5 font-mono text-xs text-primary hover:brightness-125">
          <!-- SVG external link --> DEMO
        </a>
        <a href="#" class="flex items-center gap-1.5 font-mono text-xs text-on-surface-variant hover:text-primary">
          <!-- SVG github --> CÓDIGO
        </a>
      </div>
    </div>
  </div>
</div>
```

**Estados del badge de estado:**
```
"LIVE DEMO"   → demo-badge (lime)
"EN PROCESO"  → demo-badge (lime, mismo estilo)
"PRIVADO"     → font-mono text-[9px] bg-outline-variant/20 text-on-surface-variant border-outline-variant
"CASO ESTUDIO"→ font-mono text-[9px] bg-tertiary/12 text-tertiary border-tertiary/20
```

**CSS custom requerida:**
```css
.demo-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 3px 8px; border-radius: 2px;
  background: rgba(148,222,45,0.12); color: #94de2d;
  border: 1px solid rgba(148,222,45,0.25);
}
.carousel-card { flex: 0 0 calc(33.333% - 16px); min-width: 300px; }
```

---

## C-04 · SKILL BADGE

**Clase:** `.skill-badge`
**Aparece en:** Project cards, Stack section, Experience timeline

**CSS base:**
```css
.skill-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
  padding: 4px 10px; border-radius: 2px; border: 1px solid;
}
```

**Variantes de color:**
```html
<!-- Cyan (frontend, tecnologías generales) -->
<span class="skill-badge bg-primary/10 text-primary border-primary/20">REACT</span>

<!-- Lime (backend, herramientas) -->
<span class="skill-badge bg-secondary/10 text-secondary border-secondary/20">NODE.JS</span>

<!-- Indigo (cloud, infra) -->
<span class="skill-badge bg-tertiary/10 text-tertiary border-tertiary/20">AWS</span>

<!-- Neutral (estado, badges de texto) -->
<span class="skill-badge bg-surface-container-high text-on-surface-variant border-outline-variant">MISC</span>
```

---

## C-05 · BUTTON

**Aparece en:** Nav, Hero, Projects, Blog, Contact

### Variante Primary (gradiente)
```html
<button class="grad-btn text-on-primary px-7 py-3.5 font-mono text-xs font-bold
               rounded-sm glow-btn hover:brightness-110 transition-all">
  LABEL_ACCIÓN
</button>
```
```css
.grad-btn { background: linear-gradient(135deg, #06b6d4, #9a9dff); }
.glow-btn { box-shadow: 0 0 16px rgba(6,182,212,0.35); }
```

### Variante Ghost (borde cyan)
```html
<button class="border border-primary text-primary px-7 py-3.5 font-mono text-xs
               font-bold rounded-sm hover:bg-primary/8 transition-all">
  LABEL_ACCIÓN
</button>
```

### Variante Icon (solo icono, nav)
```html
<button class="w-10 h-10 border border-outline-variant rounded-sm flex items-center
               justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
  <!-- SVG 16×16 -->
</button>
```

### Variante Text Link (con flecha)
```html
<a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-primary
                   hover:brightness-125 transition-all">
  VER_TODOS →
</a>
```

**Regla de uso:**
- Una sola acción primaria por sección (grad-btn)
- Acciones secundarias: ghost o text link
- Nunca dos grad-btn juntos sin separación visual

### Nota: Botón `RESUME` / Descargas CV

El CTA `RESUME.PDF` evolucionó a un patrón donde el botón en el `header` y en el `mobile drawer` actúan como disparadores JS que descargan el PDF por defecto. En la sección `#cv` y en el `hero` se añadió un selector de formato (PDF / HTML) que usa `DownloadService`.

Implementación recomendada:
- `#resume-btn-desktop` → llama a `DownloadService.downloadPDF()`
- `#resume-btn-mobile`  → llama a `DownloadService.downloadPDF()`
- `#cv-format-toggle` + menu con `button[data-format="pdf"]` / `button[data-format="html"]` → llama a `downloadPDF()` / `downloadHTML()` respectivamente

Esto evita `href` directos al archivo y centraliza rutas en `src/infrastructure/config/app-config.js`.

---

## C-06 · SECTION HEADER

**Aparece en:** Todas las secciones

**Estructura estándar:**
```html
<div>
  <span class="font-mono text-xs text-secondary block mb-2 tracking-widest">// IDENTIFICADOR</span>
  <h2 class="font-grotesk font-semibold text-3xl md:text-4xl text-on-surface">Título Sección</h2>
</div>
```

**Regla:** El identificador `// TEXTO` siempre en `text-secondary` (lime), siempre en `font-mono`, siempre en mayúsculas con guiones bajos. El H2 siempre en `font-grotesk`.

---

## C-07 · TIMELINE ENTRY

**Aparece en:** #experience

**Estructura:**
```html
<div class="flex gap-5 relative">
  <!-- Indicador vertical -->
  <div class="flex flex-col items-center">
    <div class="timeline-dot mt-1"></div>          <!-- punto cyan -->
    <div class="w-px flex-grow bg-outline-variant mt-2"></div>  <!-- línea (omitir en último) -->
  </div>
  <!-- Contenido -->
  <div class="pb-8">
    <div class="flex flex-wrap items-center gap-3 mb-1">
      <h3 class="font-grotesk font-semibold text-lg text-on-surface">Cargo</h3>
      <!-- Badge opcional: ACTUAL / FREELANCE / etc -->
      <span class="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5">ACTUAL</span>
    </div>
    <div class="font-mono text-xs text-on-surface-variant mb-3">Empresa · Año–Año · Ciudad</div>
    <p class="font-geist text-sm text-on-surface-variant leading-relaxed">Descripción del rol.</p>
    <!-- Skill badges opcionales -->
    <div class="flex flex-wrap gap-2 mt-3">
      <span class="skill-badge bg-primary/10 text-primary border-primary/20">TECH</span>
    </div>
  </div>
</div>
```

```css
.timeline-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #4cd7f6; border: 2px solid #0b1326;
  outline: 1px solid #4cd7f6; flex-shrink: 0;
}
```

**Opacidad por antigüedad:** entrada actual `opacity-100`, anterior `opacity-60`, más antigua `opacity-40`.

---

## C-08 · PROGRESS BAR

**Aparece en:** #stack

**Estructura:**
```html
<div>
  <div class="flex justify-between mb-1">
    <span class="font-geist text-sm text-on-surface">Nombre Skill</span>
    <span class="font-mono text-xs text-primary">85%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" data-width="85"></div>
  </div>
</div>
```

```css
.progress-bar  { height: 2px; background: #131b2e; border-radius: 1px; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg, #4cd7f6, #c0c1ff);
                 border-radius: 1px; width: 0; transition: width 1.2s ease; }
```

**Para color secundario (lime → cyan):**
```html
<div class="progress-fill" data-width="85" style="background: linear-gradient(90deg, #94de2d, #4cd7f6)"></div>
```

**JS trigger:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.progress-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  });
}, { threshold: 0.3 });
observer.observe(document.querySelector('#stack'));
```

---

## C-09 · FADE-UP ANIMATION

**Clase:** `.fade-up`
**Aparece en:** Prácticamente todos los elementos de sección

**CSS:**
```css
.fade-up         { opacity: 0; transform: translateY(28px);
                   transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-up.visible { opacity: 1; transform: translateY(0); }
.fade-up-d1      { transition-delay: 0.1s; }
.fade-up-d2      { transition-delay: 0.2s; }
.fade-up-d3      { transition-delay: 0.3s; }
.fade-up-d4      { transition-delay: 0.4s; }
.fade-up-d5      { transition-delay: 0.5s; }
```

**JS:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
```

**Regla de uso:** El elemento "ancla" de una sección lleva solo `.fade-up`. Los hijos con delay usan `.fade-up.fade-up-d1`, `.fade-up.fade-up-d2`, etc. Nunca más de d5 (0.5s de delay máximo).

---

## C-10 · BLOG POST ROW

**Aparece en:** #blog

**Estructura:**
```html
<a href="/blog/slug" class="group flex items-start justify-between py-5
                             border-b border-outline-variant hover:border-primary/40 transition-colors gap-4">
  <div class="flex gap-5 items-start">
    <span class="font-mono text-[11px] text-on-surface-variant whitespace-nowrap mt-0.5">DD.MM.YYYY</span>
    <h4 class="font-grotesk font-medium text-lg text-on-surface
               group-hover:text-primary group-hover:underline underline-offset-4 decoration-2 transition-all">
      Título del post
    </h4>
  </div>
  <!-- Flecha diagonal -->
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       class="text-on-surface-variant group-hover:text-primary flex-shrink-0 mt-1 transition-colors">
    <path d="M7 17L17 7M7 7h10v10"/>
  </svg>
</a>
```

**Regla:** El último item de la lista NO lleva `border-b`.

---

## C-11 · FORM INPUT

**Aparece en:** #contact

**CSS:**
```css
.form-input {
  background: #131b2e; border: none;
  border-bottom: 1px solid #3d494c;
  color: #dae2fd; font-family: 'JetBrains Mono', monospace;
  font-size: 13px; padding: 12px 0; width: 100%;
  outline: none; transition: border-color 0.2s;
}
.form-input:focus   { border-color: #4cd7f6; }
.form-input::placeholder { color: rgba(188,201,205,0.4); }
```

**Estructura con label:**
```html
<div>
  <label class="font-mono text-[10px] text-on-surface-variant tracking-widest block mb-2">
    NOMBRE_CAMPO
  </label>
  <input type="text" class="form-input" placeholder="placeholder...">
</div>
```

**Para textarea:**
```html
<textarea rows="4" class="form-input resize-none" placeholder="..."></textarea>
```

---

## C-12 · GLOW EFFECTS (utilidades)

```css
.glow-cyan { box-shadow: 0 0 24px rgba(76,215,246,0.18); }   /* Cards, terminal */
.glow-lime { box-shadow: 0 0 24px rgba(148,222,45,0.18); }   /* Elementos lime */
.glow-btn  { box-shadow: 0 0 16px rgba(6,182,212,0.35); }    /* Botones primary */
```

**Uso:** Añadir a elementos cuando están en hover o son el foco principal de la sección. No saturar — máximo 2-3 glows visibles simultáneamente en la pantalla.

---

## C-13 · GRADIENT TEXT

```css
.grad-text {
  background: linear-gradient(135deg, #4cd7f6 0%, #c0c1ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Uso:** Exclusivamente en palabras clave del H1 hero y en números de stats. No usar en textos de párrafo ni en elementos pequeños — pierde impacto.

---

## Componentes Pendientes de Crear

| ID | Nombre | Descripción | Prioridad |
|----|--------|-------------|-----------|
| C-14 | Modal de Proyecto | Overlay con detalle extendido, galería, métricas | 🟡 Media |
| C-15 | Toast/Notification | Feedback de envío de formulario | 🟡 Media |
| C-16 | Category Filter | Tabs/pills para filtrar proyectos por categoría | 🟢 Baja |
| C-17 | Avatar | Foto de perfil con borde gradient y status dot | 🟢 Baja |
| C-18 | Code Block | Bloque de código con syntax highlight para blog | 🟢 Baja |
| C-19 | Easter Egg Console | `console.log` estilizado al abrir DevTools | 🟢 Baja |
