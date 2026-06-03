# 🚀 Álvaro Hernández Gil — Portafolio Profesional

Este es el repositorio del portafolio profesional de **Álvaro Hernández Gil**, migrado desde un sitio estático HTML/JS a una arquitectura moderna y escalable basada en **React + TypeScript + Tailwind CSS**.

El proyecto está diseñado bajo un enfoque de **Diseño Guiado por el Dominio (DDD)** y cuenta con gestión de estado global, carga diferida (code splitting), accesibilidad integral (A11y), optimización SEO y un flujo de despliegue continuo (CI/CD).

---

## 🗺️ Estructura del Proyecto

El repositorio está organizado de la siguiente manera:

* **`/` (Raíz):** Contiene las dependencias de control de tareas y flujos de automatización, hooks de pre-commit (`.husky`), y scripts de control.
* **`apps/portfolio-react/`:** Carpeta principal de la aplicación React.
  * **`src/domain/` (Dominio):** Contiene las interfaces y entidades puras de negocio (ej. `Project`, `Experience`, `Skill`). Libre de frameworks o librerías externas.
  * **`src/application/` (Aplicación):** Casos de uso de negocio y orquestación.
  * **`src/infrastructure/` (Infraestructura):** Lógica técnica y servicios externos (ej. `DownloadService` para la descarga de CVs y `ContactService` con validaciones robustas mediante **Zod**).
  * **`src/presentation/` (Presentación):** Componentes visuales de React, hooks tipados de UI, estilos globales y el store de Redux.
  * **`src/store/` (Redux Store):** Store centralizado y slices de estado de interfaz (`uiSlice`).
  * **`src/test/` (Testing):** Configuración de Vitest, utilidades de renderizado y suite de pruebas.

---

## 🏗️ Decisiones Técnicas y Arquitectura

### 1. Arquitectura en Capas (DDD)
Siguiendo los principios de Clean Architecture y DDD, las dependencias fluyen estrictamente de afuera hacia adentro. La lógica de negocio e interfaces definidas en `domain` son completamente puras, aisladas del framework de presentación y los servicios de red.

### 2. Gestión de Estado Global (Redux Toolkit)
Utilizamos Redux Toolkit para gestionar el estado de la UI (por ejemplo, el estado de apertura del menú móvil o la sección visible actualmente en pantalla). Se crearon hooks fuertemente tipados (`useAppDispatch` y `useAppSelector`) para evitar el prop-drilling.

### 3. Carga Diferida y Rendimiento
Para optimizar las métricas de rendimiento del navegador (*First Contentful Paint (FCP)*), dividimos la landing page utilizando `React.lazy()` y `<Suspense>` para secciones secundarias pesadas:
* `Hero` e `Layout` se cargan estáticamente (above-the-fold).
* `ProjectsCarousel`, `About`, `TechStack`, `Experience`, `CVDownload` y `ContactForm` se cargan dinámicamente mediante fragmentación de bundle (code-splitting).

### 4. Accesibilidad (A11y) y Semántica
La aplicación cumple con estándares de accesibilidad para lectores de pantalla y navegación por teclado:
* **Estructura HTML5 Semántica:** Uso estructurado de etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, y `<footer>` con un único encabezado `<h1>` por página.
* **Roles ARIA:** Pestañas interactivas en la sección de trayectoria (`role="tablist"`, `role="tab"`, `role="tabpanel"`), barras de progreso con atributos dinámicos (`role="progressbar"`) e inputs con etiquetas enlazadas (`htmlFor`).
* **Teclado:** Focos de selección claramente visibles (`focus-visible`), soporte para cerrar overlays/menús emergentes con la tecla `Escape` e interactividad intuitiva.
* **SVGs:** Todos los iconos puramente decorativos contienen `aria-hidden="true"`.

### 5. SEO y Títulos Dinámicos
* Implementamos metaetiquetas enriquecidas en la cabecera (Open Graph y Twitter Cards) para optimizar la previsualización al compartir el sitio en redes.
* Configuramos un `IntersectionObserver` global que monitorea el scroll del usuario; al entrar una sección en pantalla, se despacha a Redux y actualiza dinámicamente el título de la pestaña del navegador (ej. *Proyectos | Álvaro Hernández - Portfolio*).

---

## 🛠️ Guía de Desarrollo en Local

### 1. Instalación de Dependencias
Navega a la carpeta de la aplicación React e instala los paquetes correspondientes:
```bash
cd apps/portfolio-react
npm install
```

### 2. Ejecutar Servidor de Desarrollo
Para arrancar el proyecto localmente con recarga en vivo (HMR):
```bash
npm run dev
```

### 3. Compilación de Producción
Genera el bundle optimizado y minificado en la carpeta `/dist`:
```bash
npm run build
```

### 4. Pruebas Unitarias
Para correr la suite de pruebas unitarias con Vitest (incluye soporte para componentes conectados a Redux, timers mockeados y Testing Library):
```bash
npm run test
```

### 5. Calidad de Código (Linter & Format)
* Ejecutar el linter para revisar el código estáticamente:
  ```bash
  npm run lint
  ```
* Formatear los archivos de código y estilos con Prettier:
  ```bash
  npm run format
  ```

---

## 🌿 Convenciones de Trabajo

### ✍️ Conventional Commits
Para mantener un historial de control de versiones limpio y legible, todos los commits deben seguir la especificación de commits convencionales:
* `feat(componente):` Nueva funcionalidad (ej. `feat(seo): add meta tags`).
* `fix(componente):` Corrección de un fallo (ej. `fix(header): repair focus ring`).
* `docs:` Cambios en la documentación (ej. `docs: update readme`).
* `style:` Cambios visuales o de formateo sin impacto en lógica de código.
* `test:` Creación o refactorización de pruebas.
* `perf:` Mejoras de rendimiento o de carga.
* `chore:` Cambios en el sistema de construcción, dependencias u hooks.

### 🌿 Git Flow y Commits Atómicos
* Se trabaja sobre ramas de características dedicadas partiendo desde `master` (ej. `feature/us-023` o `feature/task-153`).
* Se requiere que cada tarea de usuario (`TASK`) sea confirmada en un **commit atómico e independiente** tras pasar exitosamente el compilador, linter y suite de pruebas locales.
* Contamos con ganchos de Git (`Husky` y `lint-staged`) configurados para forzar el chequeo de tipos (`tsc --noEmit`), linter (`eslint`) y formato (`prettier`) de forma automática en cada pre-commit.

---

## 🚀 Integración y Despliegue Continuo (CI/CD)

El proyecto incluye un flujo de trabajo automatizado configurado en GitHub Actions en [.github/workflows/deploy.yml](file:///.github/workflows/deploy.yml).

Ante cada actualización (push) en las ramas `master` o `main`, el pipeline de CI/CD realiza las siguientes operaciones:
1. Valida las dependencias e instala paquetes limpios (`npm ci`).
2. Corre el linter de código (`npm run lint`).
3. Ejecuta todas las pruebas unitarias (`npm run test`).
4. Compila la aplicación para producción (`npm run build`).
5. Sube y despliega de manera automática e integrada el contenido resultante a **GitHub Pages**.
