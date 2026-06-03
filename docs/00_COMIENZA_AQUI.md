# 🚀 GUÍA DE BIENVENIDA Y ONBOARDING — WebPersonal

¡Bienvenido al proyecto de migración y rediseño de **WebPersonal**! Este documento tiene todo lo necesario para que un nuevo desarrollador se incorpore al proyecto y empiece a programar en cuestión de minutos.

---

## 🗺️ Mapa de Documentación
El proyecto cuenta con los siguientes documentos técnicos clave en la carpeta `docs/`:

* **[00_COMIENZA_AQUI.md](file:///c:/Proyectos/WebPersonal/docs/00_COMIENZA_AQUI.md)**: Este documento (Guía de Onboarding).
* **[MIGRATION_BACKLOG_SPECS.md](file:///c:/Proyectos/WebPersonal/docs/MIGRATION_BACKLOG_SPECS.md)**: Especificaciones de diseño, variables de Tailwind CSS y comportamiento funcional para cada componente de la migración.
* **[MIGRATION_COMMANDS.md](file:///c:/Proyectos/WebPersonal/docs/MIGRATION_COMMANDS.md)**: Lista secuencial de comandos para automatizar el ciclo de desarrollo en local y su sincronización en GitHub.
* **[SPEC.md](file:///c:/Proyectos/WebPersonal/docs/SPEC.md)**: Especificación funcional detallada del portafolio original (útil como referencia de comportamiento).
* **[COMPONENTS.md](file:///c:/Proyectos/WebPersonal/docs/COMPONENTS.md)**: Inventario de clases Tailwind CSS, marcado HTML y estilos para los componentes (como botones, carruseles, terminales, etc.).
* **[MODULARIZATION.md](file:///c:/Proyectos/WebPersonal/docs/MODULARIZATION.md)**: Explicación a fondo de la arquitectura DDD (Domain-Driven Design).
* **[DEVELOPMENT.md](file:///c:/Proyectos/WebPersonal/docs/DEVELOPMENT.md)**: Guía práctica de convenciones de código, nombrado de archivos, TypeScript y tests (Vitest).

---

## 🏗️ Arquitectura del Proyecto

El portafolio se está migrando de archivos estáticos HTML/JS a una aplicación moderna en **React + TypeScript + Tailwind CSS** dentro del subdirectorio:
📂 `apps/portfolio-react`

### Estructura de Capas (Domain-Driven Design)
Seguimos el patrón de diseño guiado por el dominio (DDD) estructurado en `apps/portfolio-react/src`:

1. **`domain/` (Dominio):** Contiene las entidades puras de negocio e interfaces (ej. `Project`, `Experience`). No depende de ningún framework ni librería externa.
2. **`application/` (Aplicación):** Casos de uso de la aplicación (ej. descarga del CV, validación del formulario). Orquesta la interacción entre el dominio y los servicios externos.
3. **`infrastructure/` (Infraestructura):** Detalles técnicos como configuración, clientes API (Axios), logs o mocks de datos para desarrollo.
4. **`presentation/` (Presentación):** Componentes visuales de React, estilos globales, hooks y páginas. Es donde se construye la interfaz de usuario.
5. **`shared/` (Compartido):** Constantes y utilidades auxiliares genéricas libres de lógica de negocio (formateadores, validadores genéricos, etc.).

> [!IMPORTANT]
> **Regla de Dependencia Dorada:** Las dependencias solo fluyen hacia adentro. La capa `domain` nunca debe conocer ni depender de componentes de React, configuraciones de API o bases de datos.

### Gestión de Estado
* Usamos **Redux Toolkit** para gestionar el estado global de la interfaz de usuario (como la visibilidad del menú móvil o la sección activa del viewport).

---

## 🐙 Control de Versiones (Git)

### 🌿 Estrategia de Ramas
* **Rama principal:** `main` (código estable, listo para despliegue).
* **Ramas de feature:** Se crean a partir de `main` con la siguiente nomenclatura:
  * `feature/us-XXX` (para una historia de usuario completa).
  * `feature/task-XXX` (donde `XXX` es el número del issue de GitHub).

### ✍️ Convención de Commits
Para mantener el historial limpio, seguimos **Conventional Commits**:
* `feat(componente):` Nueva funcionalidad (ej. `feat(hero): add typing effect to terminal`).
* `fix(componente):` Corrección de un error (ej. `fix(header): resolve overlapping logo on mobile`).
* `docs:` Cambios en la documentación (ej. `docs: update onboarding steps`).
* `style:` Cambios puramente estéticos o de formateo sin impacto funcional.
* `test:` Añadir o modificar tests unitarios.

> [!IMPORTANT]
> **Trazabilidad y Commits Atómicos:**
> Cada tarea (`TASK-XXX-Y`) dentro de una Historia de Usuario **debe ser validada y confirmada (committed) en un commit independiente** tras asegurar que pasa todos los linters, formateos y builds. No se deben agrupar múltiples tareas en un solo commit para garantizar una trazabilidad limpia del historial de Git.

---

## 📋 Gestión de Tareas (Workflow de GitHub)

El progreso del proyecto se sincroniza con el tablero Kanban de GitHub mediante un script automatizado local (`move-task.js`). Las tareas avanzan por los siguientes estados:
`Todo ➔ In Progress ➔ In Review ➔ Done`

### Normas para Gestionar Tareas en la Terminal:
Ejecuta estos comandos desde la raíz del proyecto (`c:\Proyectos\WebPersonal`):

1. **Antes de empezar una tarea**, muévela a "In Progress":
   ```bash
   node move-task.js <issue_number> in-progress
   ```
2. **Si el desarrollo requiere revisión**, muévela a "In Review":
   ```bash
   node move-task.js <issue_number> review
   ```
3. **Al completar y probar la tarea**, ciérrala y muévela a "Done":
   ```bash
   node move-task.js <issue_number> done
   ```

---

## 🚀 Guía de Inicio Rápido en 5 Pasos

### 1. Requisitos Previos
Asegúrate de tener instalado:
* **Node.js 18+** (`node --version`)
* **npm** o **yarn**
* **Git**

### 2. Configura las Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto (`c:\Proyectos\WebPersonal`) con tu token de acceso personal de GitHub (requerido por el script de control de tareas):
```env
GITHUB_TOKEN=tu_token_de_github_aqui
```

### 3. Selecciona tu Tarea
Abre **[MIGRATION_COMMANDS.md](file:///c:/Proyectos/WebPersonal/docs/MIGRATION_COMMANDS.md)** para ver el estado de la migración y el número del issue de la siguiente tarea pendiente.

### 4. Empieza a Desarrollar
Mueve la tarea a "In Progress" y arranca el entorno de desarrollo:
```bash
# 1. Mueve el issue a In Progress
node move-task.js <issue_number> in-progress

# 2. Entra al directorio del portfolio react
cd apps/portfolio-react

# 3. Levanta el servidor de desarrollo local
npm run dev
```
Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.

### 5. Verifica y Entrega tu Código
Antes de marcar tu tarea como terminada, ejecuta las validaciones y tests:
```bash
# Formatea y comprueba errores de TypeScript/Linter
npm run lint
npm run build

# Ejecuta los tests unitarios
npm run test

# Vuelve a la raíz y cierra la tarea en GitHub
cd ../..
node move-task.js <issue_number> done
```
¡Haz push de tu rama y crea un Pull Request hacia `main`! 🚀
