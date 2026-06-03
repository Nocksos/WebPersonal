# Backlog de Migración: Tareas y Especificaciones Técnicas

Este documento representa la **guía maestra de desarrollo** para la evolución del portafolio estático a **React + TypeScript + Tailwind CSS**. Vincula de forma directa cada tarea de GitHub con sus especificaciones de diseño, comportamiento y variables técnicas.

---

## 🔹 US-000: Configuración Inicial del Proyecto React + TS

### [TASK-000-1] Inicializar proyecto Vite + React + TypeScript (Issue #156)
- **Especificación técnica:**
  - Bundler: Vite 5+ (para tiempos de carga y recargas instantáneas en desarrollo).
  - Framework: React 18+.
  - Lenguaje: TypeScript 5+ (`strict: true` habilitado en `tsconfig.json`).
  - Limpieza: Eliminar ficheros plantilla por defecto (`App.css`, `index.css` de Vite) y reconfigurar la base limpia de `index.html` y `src/main.tsx`.

### [TASK-000-2] Instalar y configurar TailwindCSS (Issue #157)
- **Especificación de Estilos y Colores:**
  - El tema visual es "IDE/Hacker Dashboard" (Dark Mode obligatorio).
  - Se debe configurar la paleta de colores extendida en `tailwind.config.js`:
    ```javascript
    colors: {
      "surface": "#0b1326",
      "surface-dim": "#0b1326",
      "surface-bright": "#31394d",
      "surface-container-lowest": "#060e20",
      "surface-container-low": "#131b2e",
      "surface-container": "#171f33",
      "surface-container-high": "#222a3d",
      "surface-container-highest": "#2d3449",
      "on-surface": "#dae2fd",
      "on-surface-variant": "#bcc9cd",
      "outline": "#869397",
      "outline-variant": "#3d494c",
      "primary": "#4cd7f6",
      "on-primary": "#003640",
      "primary-container": "#06b6d4",
      "secondary": "#94de2d",
      "on-secondary": "#1f3700",
      "secondary-container": "#7ac100",
      "tertiary": "#c0c1ff",
      "background": "#0b1326",
      "on-background": "#dae2fd",
      "error": "#ffb4ab"
    }
    ```
  - Directivas Tailwind a incorporar en `src/index.css`:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### [TASK-000-3] Configurar ESLint y Prettier para TypeScript (Issue #158)
- **Especificación de Calidad de Código:**
  - Linter: ESLint con el parser de TypeScript (`@typescript-eslint/parser`) y reglas de React Hooks.
  - Formateador: Prettier con reglas:
    - `semi: true`
    - `singleQuote: true`
    - `tabWidth: 2`
    - `trailingComma: "all"`
  - Scripts en `package.json`:
    - `"lint": "eslint . --ext ts,tsx --report-unused-disable-directives"`
    - `"format": "prettier --write src/"`

### [TASK-000-4] Configurar alias de importación (@) (Issue #159)
- **Especificación de Arquitectura:**
  - En `vite.config.ts`: Configurar alias `@` apuntando a la carpeta `/src`.
  - En `tsconfig.json`: Añadir en `compilerOptions`:
    ```json
    "paths": {
      "@/*": ["./src/*"]
    }
    ```

---

## 🔹 US-016: Migración de Estructura HTML a Componentes React

### [TASK-016-1] Crear componente Header (navbar fijo, responsive) (Issue #160)
- **Especificación Funcional (ver [SPEC.md#3.1-nav](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#3.1-nav)):**
  - Posición: Sticky top (`fixed top-0 w-full z-50`).
  - Fondo: Glassmorphism (`backdrop-filter: blur(16px)` + `bg-surface/50` + borde inferior).
  - Efecto Scroll: Al bajar más de 20px, añadir opacidad al fondo (`bg-surface/80`).
  - Contenido:
    - Logo: "ÁLVARO.DEV" en tipografía *Space Grotesk* (`font-grotesk`), color `#4cd7f6`.
    - Enlaces: Proyectos, Sobre mí, Stack, Experiencia, CV, Contacto (con scroll suave a sus respectivos IDs).
    - CTA: Botón `RESUME.PDF` con estilo gradiente cyan→indigo que lanza la descarga del PDF.
    - Mobile: Ícono de menú hamburguesa (líneas SVG) para pantallas pequeñas.

### [TASK-016-2] Crear componente MobileMenu (off-canvas) (Issue #161)
- **Especificación Funcional:**
  - Tipo: Drawer lateral deslizante desde la derecha (`width: w-72`, `fixed inset-y-0 right-0 z-[60]`).
  - Animación: Deslizamiento suave mediante clases CSS (`transition-transform` controlando la clase `open`).
  - Fondo: Overlay oscuro semitransparente (`bg-black/60`) que cierra el menú al hacer clic fuera del drawer.
  - Elementos: Réplica de los enlaces del Header y botón `RESUME.PDF` en la parte inferior.

### [TASK-016-3] Crear componente Hero (sección principal) (Issue #162)
- **Especificación Funcional (ver [SPEC.md#3.2-hero](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#3.2-hero)):**
  - Grid: 12 columnas en escritorio (col-span-7 texto, col-span-5 terminal). Stack vertical en móvil.
  - Decoración: Fondo con patrón de grid SVG (`hero-grid`) y orbes de brillo difuminado (cyan y violeta pastel).
  - Texto principal (H1): "Diseñando soluciones cloud a escala empresarial.", aplicando gradiente en la palabra "soluciones" (`grad-text`).
  - CTAs: Botón principal "DESCARGAR_CV" (scroll suave al selector de CV) y "CONTACTAR" (scroll a contacto).
  - **Stats animados:** 3 contadores numéricos (Años Exp: 15, Proyectos: 50, Tecnologías: 25).
    - *Lógica React:* Iniciar conteo progresivo del 0 al valor objetivo al entrar en el viewport (IntersectionObserver).
  - **Terminal bash simulado:**
    - Cabecera: macOS style (3 botones de colores rojo, amarillo, verde) y texto `bash — portfolio.sh`.
    - Contenido: Simulación de comandos:
      - `$ whoami` ➔ `Álvaro Hernández Gil`
      - `$ cat expertise.json` ➔ Objeto JSON formateado con claves documentales (RAG, IA Search), backend (C#, .NET Core), y cloud (Azure, Terraform).
      - Cursor parpadeante (`cursor-blink`) animado al final.

### [TASK-016-4] Crear componente ProjectsCarousel (Issue #163)
- **Especificación Funcional (ver [SPEC.md#3.3-projects](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#3.3-projects)):**
  - Grid: Slider horizontal responsive (3 tarjetas visibles en desktop, 2 en tablet, 1 en móvil).
  - Navegación: Botones de flechas (Prev/Next) con estados deshabilitados en los extremos, dots indicadores interactivos y soporte de gestos táctiles (drag/swipe).
  - Tarjetas de Proyecto (ProjectCard):
    - Cabecera: Imagen aspect-video, número monospace superior-izquierdo y badge superior-derecho.
    - Contenido: Título, descripción (máximo 2 líneas), tags del stack en tipografía *JetBrains Mono*, divisor degradado y enlaces.
    - **Casos de Estudio**: Para proyectos empresariales (GADA-i, Bergé API, bitDoc), **no** se ofrecen enlaces a código o demo. En su lugar, el badge dirá `CASO DE ESTUDIO` y al final se mostrará el texto en cursiva: *"Proyecto empresarial · Sin código disponible"*.

### [TASK-016-5] Crear componente About (sección sobre mí) (Issue #164)
- **Especificación Funcional (ver [SPEC.md#3.4-about](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#3.4-about)):**
  - Grid: Terminal bio (col-span-5) + Texto y tarjetas de soft-skills (col-span-7).
  - **Terminal bio:** Título `about_me.md`, campos de información estructurados (Localización: España, Especialidad: Azure/IA/Scrum, etc.).
  - **Soft Skills Cards (4):** Arquitectura, Infraestructura, Liderazgo Ágil y Transformación. Cada una con un icono SVG representativo y colores de borde alternos (cyan, lime, indigo).

### [TASK-016-6] Crear componente TechStack (barras de progreso) (Issue #165)
- **Especificación Funcional (ver [SPEC.md#3.5-stack](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#3.5-stack)):**
  - Layout: 3 Bloques (Frontend, Backend, Cloud & Infraestructura).
  - **Frontend / Backend:** Contiene listas de tecnologías con porcentajes y barras de progreso horizontales.
    - *Lógica React:* Las barras de progreso deben arrancar con `width: 0` y animarse dinámicamente hasta su valor meta cuando el componente entra en pantalla.
  - **Cloud & Infra:** Conjunto de badges semánticos con tecnologías (Azure, Terraform, Docker, KQL, etc.).

### [TASK-016-7] Crear componente Experience (tabs y timeline) (Issue #166)
- **Especificación Funcional (ver [SPEC.md#3.6-experience](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#3.6-experience)):**
  - Tabs: Botón de tabulación "TRABAJO" y "EDUCACIÓN" que alternan de forma reactiva la vista del timeline.
  - **Timeline:** Estructura vertical con línea continua y puntos de hito.
    - Cada entrada laboral incluye: Puesto, empresa, fecha, descripción del rol y tags de tecnologías usadas.
    - Opacidad: Aplicar opacidad decremental en el CSS (1.0, 0.6, 0.4) para las experiencias más antiguas para crear profundidad temporal.

### [TASK-016-8] Crear componente CVDownload (descarga de CV) (Issue #167)
- **Especificación Funcional (ver [SPEC.md#6-assets](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#6-assets)):**
  - Caja de descargas estilizada con acceso a:
    - CV en PDF (`Alvaro_Hernandez_Gil_CV_ES.pdf`)
    - CV en HTML (`cv-alvaro-hernandez.html`)
  - Menú desplegable para seleccionar el formato de descarga y opción de visualizar el HTML directamente en una pestaña nueva.

### [TASK-016-9] Crear componente ContactForm (formulario de contacto) (Issue #168)
- **Especificación Funcional (ver [SPEC.md#3.8-contact](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#3.8-contact)):**
  - Formulario minimalista con inputs sin bordes laterales (solo borde inferior `#3d494c`).
  - Campos: Nombre, Email, Asunto, Mensaje.
  - Efecto: El borde inferior cambia a color cyan (`#4cd7f6`) al recibir foco.
  - Envío: Botón "ENVIAR_MENSAJE" con gradiente y efecto de glow, mostrando estados de carga (*Loading*) y éxito/error.

### [TASK-016-10] Crear componente Footer (Issue #169)
- **Especificación Funcional (ver [SPEC.md#3.9-footer](file:///c:/Proyectos/WebPersonal/docs/SPEC.md#3.9-footer)):**
  - Contenido: Logotipo de marca, copyright de año actual, enlaces a GitHub/LinkedIn.
  - Indicador de estado: Un punto verde pulsante al lado del texto: `STATUS: TODOS LOS SISTEMAS OPERATIVOS`.

### [TASK-016-11] Crear componente Layout que agrupe Header, main y Footer (Issue #170)
- **Especificación Funcional:**
  - Proveer una envoltura central para las páginas del portafolio.
  - Controla de manera centralizada el estado del menú móvil off-canvas (`isMenuOpen`) para pasarlo como props o mediante Context/Redux.

---

## 🔹 US-017: Implementación de TypeScript para Tipado Estático

### [TASK-017-1] Crear interfaces para los datos del portfolio (Issue #171)
- **Tipos de Datos a Definir (en `src/domain/types/` o `src/shared/types/`):**
  - `interface Project`: id (string/number), title (string), description (string), tags (string[]), category ('live' | 'progress' | 'enterprise'), demoUrl? (string), codeUrl? (string), image? (string).
  - `interface Skill`: name (string), percentage (number), category ('frontend' | 'backend' | 'cloud').
  - `interface Experience`: company (string), position (string), dates (string), description (string), technologies? (string[]), isCurrent? (boolean).
  - `interface Education`: degree (string), institution (string), dates (string), description? (string).

### [TASK-017-2] Tipar todos los componentes con React.FC (Issue #172)
- **Especificación:**
  - Evitar el uso de `any` en todo el código del proyecto.
  - Definir interfaces de `Props` para componentes con propiedades dinámicas (ej. `ProjectsCarouselProps`, `TimelineEntryProps`, `ButtonProps`).

### [TASK-017-3] Configurar `tsc --noEmit` en pre-commit hook (Issue #173)
- **Especificación:**
  - Añadir hook de Git con Husky y `lint-staged`.
  - Asegurar que la subida de código falle si existen errores del compilador de TypeScript.

---

## 🔹 US-018: Gestión de Estado con Redux Toolkit y TypeScript

### [TASK-018-1] Configurar store de Redux y slices (Issue #174)
- **Especificación de Estado Global:**
  - Configurar Redux Store en `src/store/index.ts`.
  - Slice `ui`: Gestiona `isMobileMenuOpen` (boolean) y `activeSection` (string).
  - Slice `projects` (opcional): Almacena el listado de proyectos.

### [TASK-018-2] Crear hooks tipados useAppDispatch y useAppSelector (Issue #175)
- **Especificación:**
  - Evitar repetir tipados en componentes exportando hooks de acceso seguro:
    - `useAppDispatch` tipado con `AppDispatch`.
    - `useAppSelector` tipado con `RootState`.

---

## 🔹 US-019: Integración de APIs con TypeScript y Zod

### [TASK-019-1] Implementar servicio de descarga de CV (PDF y HTML) (Issue #176)
- **Especificación de Servicio:**
  - Crear `DownloadService.ts` en `src/infrastructure/services/`.
  - Implementar métodos usando la API de Blob del navegador para forzar la descarga de los archivos de forma limpia, leyendo las rutas relativas configuradas.

### [TASK-019-2] Crear servicio de envío de formulario de contacto (Issue #177)
- **Especificación de Validación y Envío:**
  - Validar los campos del formulario en el cliente utilizando un esquema de **Zod**:
    - `name`: string mínimo 2 caracteres.
    - `email`: string con formato email válido.
    - `message`: string mínimo 10 caracteres.
  - Simular o conectar el envío de la petición HTTP mediante Axios hacia el servicio configurado.

---

## 🔹 US-020: Sistema de Pruebas con TypeScript

### [TASK-020-1] Configurar Jest/Vitest y Testing Library (Issue #178)
- **Especificación:**
  - Integrar Vitest por velocidad de ejecución y compatibilidad directa con las configuraciones de Vite.
  - Configurar entorno de pruebas en el navegador simulado (`jsdom`) y extender los matchers con `testing-library/jest-dom`.

### [TASK-020-2] Escribir test para el componente Header (Issue #179)
- **Especificación de Tests:**
  - Validar que renderice el logotipo.
  - Validar que al hacer clic en el menú hamburguesa se muestre el menú móvil.

### [TASK-020-3] Escribir test para el carrusel de proyectos (Issue #180)
- **Especificación de Tests:**
  - Validar que se muestren las tarjetas de proyecto.
  - Comprobar que los botones de navegación cambien las tarjetas visibles.

---

## 🔹 US-021: Migración de Estilos a Tailwind y Clases Personalizadas

### [TASK-021-1] Extraer colores y tipografías a configuración de Tailwind (Issue #181)
- **Especificación de Fuentes:**
  - Cargar las familias tipográficas externas en `index.html` o a través de imports CSS en `index.css`:
    - `Space Grotesk`
    - `JetBrains Mono`
    - `Geist`

### [TASK-021-2] Aplicar estilos de la terminal y las animaciones (Issue #182)
- **Especificación de Utilidades CSS (para portar a `index.css`):**
  - Cursor parpadeante:
    ```css
    .cursor-blink { border-right: 2px solid #94de2d; animation: blink 1s step-end infinite; }
    @keyframes blink { 50% { border-color: transparent; } }
    ```
  - Patrón de scanlines en el fondo:
    ```css
    .scanlines { background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(76,215,246,0.015) 2px, rgba(76,215,246,0.015) 4px); }
    ```
  - Efectos de resplandor (Glows):
    - `.glow-cyan` (sombra cian difusa).
    - `.glow-lime` (sombra lima difusa).
    - `.glow-btn` (sombra para botones interactivos).

---

## 🔹 US-022: Optimización de Assets y Rendimiento

### [TASK-022-1] Lazy load de componentes no visibles inicialmente (Issue #183)
- **Especificación:**
  - Dividir el código de la landing page usando `React.lazy()` para importar secciones pesadas como `ProjectsCarousel` o `Experience`.
  - Envolverlas en un contenedor `<Suspense fallback={<Spinner />} />` para optimizar la métrica de *First Contentful Paint (FCP)*.

---

## 🔹 Historias de Usuario Finales (Cierre de Épicas)

### [US-023] Mejoras de Accesibilidad y SEO (Issue #153)
- **Especificación de Accesibilidad (A11y) y SEO:**
  - SEO: Incorporar meta description descriptiva y tags Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) en la cabecera para mejorar la indexación y visualización al compartir enlaces en redes.
  - SEO: Utilizar títulos de página dinámicos y descriptivos (por ejemplo, mediante React Helmet).
  - A11y: Asegurar que todas las imágenes y gráficos SVG descriptivos contengan atributos `alt` correctos o `aria-hidden="true"` para elementos decorativos.
  - A11y: Mantener una navegación completa por teclado funcional, asegurando que todos los botones e inputs interactivos tengan `tabIndex` correctos y focos visibles (`focus-visible`).
  - Semántica: Usar de manera estructurada elementos semánticos de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) manteniendo una única etiqueta `<h1>` por página.

### [US-024] Despliegue continuo en GitHub Pages o Vercel (Issue #154)
- **Especificación de DevOps:**
  - Pipeline: Configurar un flujo de trabajo automático en GitHub Actions (`.github/workflows/deploy.yml`) para desencadenar el despliegue tras cada commit en la rama `main` que pase las pruebas.
  - Automatización: El pipeline debe instalar dependencias, correr el linter y compilar el proyecto (`npm run build`). Posteriormente, desplegar la carpeta de salida (`/dist`) de manera automatizada en GitHub Pages, Vercel o Netlify.
  - Seguridad: Asegurar que las variables de entorno estén inyectadas como *Repository Secrets* en GitHub.

### [US-025] Documentación completa del proyecto (Issue #155)
- **Especificación de Documentación (DoD):**
  - README: Documentar de forma íntegra el proyecto detallando la arquitectura DDD elegida, las decisiones técnicas de componentes, las instrucciones de instalación en local (`npm run dev`), compilación (`npm run build`) y comandos de testing.
  - Guías: Incluir una guía clara sobre cómo realizar commits consistentes (Conventional Commits) y convenciones para crear ramas (Git Flow).
  - Changelog: Crear o actualizar el archivo `CHANGELOG.md` documentando la versión final y las mejoras introducidas en esta evolución a React.
