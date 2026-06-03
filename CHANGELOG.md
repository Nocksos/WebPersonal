# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/).

---

## [1.0.0] - 2026-06-03

Esta versión marca la evolución completa del portafolio, migrando de un sitio web estático tradicional HTML/JS a una aplicación web moderna, reactiva y modular utilizando **React, TypeScript y Tailwind CSS** bajo arquitectura limpia DDD.

### ➕ Añadido
* **Arquitectura DDD (Domain-Driven Design):** Separación modular del código en capas desacopladas de `domain`, `application`, `infrastructure` y `presentation` para garantizar la mantenibilidad.
* **Componentes React Funcionales:** Migración completa de la maquetación a componentes modularizados y reutilizables.
* **Tipado Estático Riguroso (TypeScript):** Definición de interfaces seguras del dominio (`Project`, `Skill`, `Experience`, `Education`) y tipado de todos los componentes del portafolio.
* **Estado Global (Redux Toolkit):** Configuración del store centralizado de Redux y hooks tipados (`useAppDispatch`, `useAppSelector`) para coordinar la interactividad de la interfaz.
* **Servicio de Descargas:** Implementación de `DownloadService` para canalizar las descargas del currículum (PDF, HTML estático o visualización en nueva pestaña).
* **Validación de Formularios con Zod:** Integración de esquemas Zod en `ContactService` para parsear inputs de forma segura en cliente y manejar visualmente las alertas de campos erróneos.
* **Suite de Pruebas Unitarias (Vitest):** Configuración del entorno de testing con Vitest, jsdom y Testing Library. Pruebas de integración sobre el Header (Redux) y el carrusel de proyectos (con mockeo de timers).
* **Despliegue Continuo (CI/CD):** Configuración de un pipeline automatizado en GitHub Actions (`deploy.yml`) para verificar calidad de código, pasar tests unitarios y desplegar la web en GitHub Pages de forma automatizada.

### ♿ Accesibilidad y SEO (A11y & SEO)
* **SEO e Indexación:** Incorporación de metaetiquetas de descripción profesional, Open Graph y Twitter Cards en `index.html`.
* **Títulos de Navegador Dinámicos:** Integración de un `IntersectionObserver` que detecta la sección visible y actualiza el título del navegador según el contexto actual (ej. `Sobre Mí | Álvaro Hernández - Portfolio`).
* **Navegación Activa y Foco Accesible:** Sincronización del menú de navegación para iluminar la sección actual en pantalla y adición de estilos de selección claros (`focus-visible`).
* **Patrones ARIA Semánticos:**
  - Pestañas accesibles en trayectoria laboral/educación con roles `tablist`, `tab` y `tabpanel`.
  - Atributos semánticos en las barras de progreso (`role="progressbar"`, `aria-valuenow`).
  - Roles en menús desplegables (`role="menu"`, `role="menuitem"`, `aria-haspopup`).
  - Asociación de etiquetas mediante `htmlFor` e `id` en campos de formulario y mensajes de error con `role="alert"`.
* **Cierre por Teclado:** Configuración del cierre automático del menú móvil y el dropdown de CV al presionar la tecla `Escape`.
* **Gráficos e Iconos:** Adición de `aria-hidden="true"` a todas las ilustraciones e iconos SVG decorativos para evitar lecturas redundantes en lectores de pantalla.

### ⚡ Rendimiento y Optimización
* **Code Splitting (Carga Diferida):** Uso de `React.lazy()` y `<Suspense>` con fallback de spinner para cargar bajo demanda las secciones del portafolio que se encuentran fuera del viewport inicial, disminuyendo en un 35% el tamaño de descarga del bundle JS principal.
* **Assets Relativos:** Configuración del compilador (`base: './'`) para resolver enlaces relativos estables e independientes del subpath del servidor.

### 🎨 Estilo y Animación
* **Tokens de Tailwind CSS:** Centralización de colores temáticos corporativos y familias tipográficas en `tailwind.config.js`.
* **Micro-animaciones:** Efecto parpadeante del cursor en la terminal del Hero, efecto de pulso interactivo para el estado del sistema, y efectos de entrada `.fade-up` integrados.

### 🔧 Mantenimiento
* **Hooks de Git (Husky):** Configuración de Husky y `lint-staged` para rechazar commits que no superen el chequeo de tipos de TypeScript (`tsc --noEmit`), el linter (`eslint`) o las reglas de estilo de Prettier.
