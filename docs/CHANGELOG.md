# CHANGELOG.md — Registro de Decisiones y Cambios
> Añadir una entrada SIEMPRE que se haga un cambio significativo, se tome una decisión de diseño/técnica, o se resuelva un problema no obvio.
> Formato: fecha · versión · descripción · motivo.

---

## Cómo añadir una entrada

```
### [YYYY-MM-DD] — vX.X · Título breve del cambio

**Tipo:** Feature / Fix / Refactor / Decision / Revert
**Sección afectada:** nombre de la sección o "Global"
**Autor/Sesión:** (opcional, útil si trabajas en equipo)

**Qué se hizo:**
Descripción técnica concreta de qué cambió en el código.

**Por qué:**
El motivo de la decisión. Esto es lo más importante — dentro de 6 meses no recordarás por qué elegiste X sobre Y.

**Alternativas consideradas:**
Qué otras opciones se evaluaron y por qué se descartaron.

**Impacto:**
Qué otros componentes/secciones pueden verse afectados.
```

---

## v1.0 · Estado Inicial

### [2024-01-01] — v1.0 · Creación del portfolio base

**Tipo:** Feature  
**Sección afectada:** Global

**Qué se hizo:**
Creación del archivo `portfolio.html` completo con todas las secciones base:
Nav, Hero, Projects (carrusel), About, Stack, Experience, Blog, Contact, Footer.

**Decisiones de arquitectura:**
- **Single HTML file:** Se eligió un único archivo `.html` sin bundler ni framework para maximizar portabilidad y simplicidad de deploy. El portfolio puede abrirse con doble click o servirse desde cualquier CDN/hosting estático sin configuración.
- **Tailwind CDN:** Se usa Tailwind via CDN (sin build step) por la misma razón. Trade-off: no tree-shaking, pero el tamaño es aceptable para un portfolio personal.
- **Sin JavaScript framework:** Vanilla JS puro para todos los comportamientos (carrusel, scroll animations, tabs). Justificación: menos complejidad, sin dependencias que desactualizar, carga más rápida.

**Decisiones de diseño:**
- **Dark mode obligatorio:** La audiencia es técnica. El dark mode reduce fatiga visual en sesiones largas de evaluación. No se implementa toggle claro/oscuro — la identidad visual requiere el fondo oscuro para que los glows y gradientes funcionen correctamente.
- **Tipografía triple:** Space Grotesk (display), Geist (body), JetBrains Mono (código/labels). Cada una tiene un rol semántico claro y refuerza la jerarquía visual.
- **Cyan como primario, Lima como secundario:** El cyan (#4cd7f6) es el color de acción e interactividad. El lima (#94de2d) es el color de éxito, estado y elementos "vivos" (cursor, status dot). Nunca intercambiar estos roles.
- **Border radius mínimo (2-4px):** Intencionalmente técnico. Los radios grandes dan sensación consumer/app. Los radios pequeños refuerzan la estética de herramienta/IDE.

**Componentes creados en esta versión:**
C-01 Nav, C-02 Terminal, C-03 Project Card, C-04 Skill Badge, C-05 Button (3 variantes), C-06 Section Header, C-07 Timeline Entry, C-08 Progress Bar, C-09 Fade-up Animation, C-10 Blog Row, C-11 Form Input, C-12 Glow Effects, C-13 Gradient Text.

**Pendientes identificados:**
Ver SPEC.md sección "Pendientes" de cada sección y sección 7 Backlog Global.

---

## Plantilla para próximas entradas

```
### [YYYY-MM-DD] — vX.X · 

**Tipo:** 
**Sección afectada:** 

**Qué se hizo:**


**Por qué:**


**Alternativas consideradas:**


**Impacto:**

```

---

## Decisiones Técnicas de Referencia Rápida

> Esta sección resume las decisiones "no obvias" que se han tomado y deben mantenerse consistentes.

| Decisión | Elección | Motivo | Alternativa descartada |
|----------|----------|--------|------------------------|
| Arquitectura | Single HTML file | Portabilidad máxima | React/Next.js — innecesario para portfolio estático |
| CSS Framework | Tailwind CDN | Sin build step | Tailwind CLI — añade complejidad sin beneficio real aquí |
| JS | Vanilla ES6+ | Sin dependencias | Vue/Alpine.js — overhead innecesario |
| Dark mode | Solo dark | Identidad visual requiere dark para glows | Toggle claro/oscuro — rompe la estética |
| Fuentes | Space Grotesk + Geist + JetBrains Mono | Cada una con rol semántico | Inter/Roboto — demasiado genéricas |
| Border radius | 2-4px (sm/DEFAULT) | Estética técnica/IDE | 8-12px — demasiado consumer |
| Sombras | Glow con blur (no drop-shadow) | Coherente con aesthetic | box-shadow clásico — visual anticuado |
| Carrusel | Vanilla JS (transform translateX) | Sin librerías externas | Swiper.js — dependencia innecesaria |
| Formulario | Sin backend inicial | Simplifica v1.0 | Formspree/EmailJS — añadir en v1.1 |
| Idioma UI | Español | Audiencia target española | Inglés — considerar versión dual en el futuro |

### [2026-05-12] — v1.1 · Reorganización DDD + Descargas CV

**Tipo:** Refactor / Feature
**Sección afectada:** Estructura global, CV, Infraestructura, Projects

**Qué se hizo:**
- Reorganización inicial hacia DDD / Clean Architecture bajo `src/` y creación de `src/ARCHITECTURE.md`.
- Añadido `src/infrastructure/config/app-config.js` para centralizar rutas (incluye `AppConfig.cv`).
- Añadido `src/infrastructure/download/download-service.js` (`DownloadService`) con métodos `downloadPDF`, `downloadHTML`, `openCVInNewTab` y `getCVUrl`.
- Movido `Alvaro_Hernandez_Gil_CV_ES.pdf` a `src/presentation/assets/` y actualizado `AppConfig.cv.pdf`.
- Actualizado `src/portfolio.html` para importar `AppConfig` y `DownloadService` como ES modules; botones CTA usan ahora las funciones de descarga en lugar de `href` directos.
- Cambiada la política de proyectos: proyectos empresariales se muestran como `CASO DE ESTUDIO` y no exponen demos ni código público.

**Por qué:**
- Mejor separación de responsabilidades y mantenibilidad. Centralizar rutas evita roturas al mover assets.
- Protege IP de proyectos empresariales evitando publicar demos/código.

**Impacto:**
- Documentación actualizada en `src/ARCHITECTURE.md`, `docs/SPEC.md` y `docs/COMPONENTS.md`.
- `presentation/pages/cv-alvaro-hernandez.html` (HTML CV) queda pendiente de creación.

### [2026-05-12] — v1.1.1 · Hotfix: Compatibilidad local (file://) y CORS

**Tipo:** Fix / Hotfix
**Sección afectada:** Infraestructura, Presentación

**Qué se hizo:**
- Se cambió la forma de cargar `AppConfig` y `DownloadService` de ES modules a scripts globales para evitar errores de política de mismo origen (CORS) al abrir `src/portfolio.html` directamente con `file://` en ciertos navegadores.
- `src/infrastructure/config/app-config.js` ahora exporta `window.AppConfig` y helpers globales (`getCVUrl`, `getPortfolioInfo`).
- `src/infrastructure/download/download-service.js` ahora define `window.DownloadService` (clase con métodos `downloadPDF`, `downloadHTML`, `openCVInNewTab`, `getCVUrl`) y usa `window.AppConfig` internamente.
- `src/portfolio.html` se actualizó para cargar ambos scripts con `<script src="...">` y para usar `window.DownloadService` / `window.AppConfig` desde el código inline.

**Por qué:**
- Navegadores aplican políticas CORS más estrictas a importaciones de módulos cuando el origen es `file://`. Cambiar a scripts globales mantiene compatibilidad local (abrir con doble clic) y evita bloqueos.

**Impacto:**
- Mejora la compatibilidad local y evita errores en desarrollo sin servidor.
- Mantiene la funcionalidad de descarga del CV intacta.
