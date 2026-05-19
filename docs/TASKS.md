# Tareas - Portfolio React + TypeScript v2.0

**Versión:** 2.0  
**Estado:** Backlog  
**Última actualización:** Mayo 2026

---

## TASK-001: Setup del Proyecto React + TypeScript

### TASK-001-1: Crear proyecto con Vite

**Historia:** US-001  
**Prioridad:** 🔴 Alta  
**Estimación:** 15 min  
**Estado:** Not Started

**Descripción:**
Inicializar nuevo proyecto React con Vite y template de TypeScript.

**Checklist:**
- [ ] Ejecutar `npm create vite@latest web-personal -- --template react-ts`
- [ ] Navegar a la carpeta del proyecto
- [ ] Instalar dependencias iniciales
- [ ] Verificar que `npm run dev` funciona

**Aceptación:**
```bash
npm create vite@latest web-personal -- --template react-ts
cd web-personal
npm install
npm run dev
# App visible en http://localhost:5173
```

**Notas:**
- Usar Node 18+
- Crear en nueva carpeta separada del proyecto actual si es necesario

---

### TASK-001-2: Instalar y configurar Tailwind CSS

**Historia:** US-001  
**Prioridad:** 🔴 Alta  
**Estimación:** 20 min  
**Estado:** Not Started

**Descripción:**
Integrar Tailwind CSS en el proyecto Vite + React.

**Checklist:**
- [ ] Instalar `tailwindcss`, `postcss`, `autoprefixer`
- [ ] Ejecutar `npx tailwindcss init -p`
- [ ] Configurar `tailwind.config.js` con rutas de archivos
- [ ] Crear `src/index.css` con directivas Tailwind
- [ ] Importar en `src/main.tsx`
- [ ] Verificar que funciona

**Instalación:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js:**
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { /* colores del tema */ },
      fontFamily: { /* fuentes */ },
    },
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### TASK-001-3: Instalar y configurar ESLint y Prettier

**Historia:** US-001  
**Prioridad:** 🟡 Media  
**Estimación:** 25 min  
**Estado:** Not Started

**Descripción:**
Setup de linting y formatting para mantener código consistente.

**Checklist:**
- [ ] Instalar ESLint y plugins React/TypeScript
- [ ] Crear `.eslintrc.cjs`
- [ ] Instalar Prettier
- [ ] Crear `.prettierrc`
- [ ] Crear `.prettierignore`
- [ ] Añadir scripts en `package.json`
- [ ] Integrar con VS Code (extensiones recomendadas)

**Instalación:**
```bash
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-@typescript-eslint
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

**Scripts en package.json:**
```json
"scripts": {
  "lint": "eslint src --ext ts,tsx",
  "lint:fix": "eslint src --ext ts,tsx --fix",
  "format": "prettier --write src/"
}
```

---

### TASK-001-4: Crear estructura de carpetas DDD

**Historia:** US-001  
**Prioridad:** 🔴 Alta  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Crear arquitectura modular basada en Domain-Driven Design.

**Checklist:**
- [ ] Crear estructura base:
  ```
  src/
  ├── domain/
  │   ├── entities/
  │   ├── types/
  │   └── services/
  ├── application/
  │   ├── cv/
  │   ├── portfolio/
  │   └── contact/
  ├── infrastructure/
  │   ├── config/
  │   ├── services/
  │   └── api/
  ├── presentation/
  │   ├── components/
  │   │   ├── common/
  │   │   ├── layout/
  │   │   └── pages/
  │   ├── hooks/
  │   ├── pages/
  │   ├── styles/
  │   └── assets/
  ├── shared/
  │   ├── constants/
  │   ├── utils/
  │   └── types/
  ├── App.tsx
  └── main.tsx
  ```
- [ ] Crear archivos `index.ts` en cada carpeta para exports
- [ ] Documentar propósito de cada capa en un README interno

**Estructura Esperada:**
Ver [ARCHITECTURE.md](../src/ARCHITECTURE.md) para detalles

---

### TASK-001-5: Configurar variables de entorno

**Historia:** US-001  
**Prioridad:** 🟡 Media  
**Estimación:** 15 min  
**Estado:** Not Started

**Descripción:**
Setup de archivos .env para diferentes ambientes.

**Checklist:**
- [ ] Crear `.env` (desarrollo)
- [ ] Crear `.env.production` (producción)
- [ ] Crear `.env.example` (template públicamente compartible)
- [ ] Configurar tipos en Vite (vite-env.d.ts)
- [ ] Documentar variables necesarias

**Archivos:**

`.env.example`:
```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Portfolio
```

`.env`:
```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Portfolio Dev
```

---

### TASK-001-6: Crear README y documentación inicial

**Historia:** US-001  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Documentar cómo setup, desarrollar y deployar el proyecto.

**Checklist:**
- [ ] Crear `README.md` con:
  - Descripción del proyecto
  - Stack técnico
  - Instrucciones de setup
  - Scripts disponibles
  - Estructura de carpetas
  - Contribuciones
- [ ] Actualizar [ARCHITECTURE.md](../src/ARCHITECTURE.md)
- [ ] Crear [DEVELOPMENT.md](../DEVELOPMENT.md) con guías

**README.md content:**
```markdown
# Portfolio React v2.0

Portfolio profesional de Álvaro Hernández - Construido con React, TypeScript y Tailwind CSS.

## Stack
- React 18+
- TypeScript
- Vite
- Tailwind CSS
- [+ stack adicional]

## Setup
1. Clone el repo
2. `npm install`
3. `npm run dev`
4. Abre http://localhost:5173

## Scripts
- `npm run dev` - Iniciar dev server
- `npm run build` - Build para producción
- `npm run preview` - Preview de build
- `npm run lint` - Linting
- `npm run format` - Format código

## Estructura
Ver [ARCHITECTURE.md](src/ARCHITECTURE.md)
```

---

### TASK-001-7: Inicializar repositorio Git y GitHub

**Historia:** US-001  
**Prioridad:** 🔴 Alta  
**Estimación:** 20 min  
**Estado:** Not Started

**Descripción:**
Configurar repositorio Git local y GitHub.

**Checklist:**
- [ ] Crear `.gitignore` basado en Node.js + Vite
- [ ] Inicializar git: `git init`
- [ ] Crear repositorio en GitHub
- [ ] Añadir remote: `git remote add origin https://github.com/username/repo.git`
- [ ] Commit inicial: agregar archivos y hacer push
- [ ] Verificar en GitHub

**Comandos:**
```bash
git init
git add .
git commit -m "Initial commit: Setup React + TypeScript + Tailwind"
git branch -M main
git remote add origin https://github.com/username/web-personal.git
git push -u origin main
```

**.gitignore:**
```
# Dependencies
node_modules/
npm-debug.log*

# Build
dist/
build/

# Development
.env
.env.local
.DS_Store

# IDE
.vscode/
.idea/
*.swp

# Optional npm cache
.npm
```

---

## TASK-002: Sistema de Diseño y Componentes Base

### TASK-002-1: Crear estructura de componentes

**Historia:** US-002  
**Prioridad:** 🔴 Alta  
**Estimación:** 15 min  
**Estado:** Not Started

**Descripción:**
Crear estructura base para componentes base.

**Checklist:**
- [ ] Crear carpeta `src/presentation/components/common/`
- [ ] Crear carpeta `src/presentation/components/layout/`
- [ ] Crear carpeta `src/presentation/styles/` para temas y variables
- [ ] Crear `src/shared/types/index.ts` para types globales

**Estructura:**
```
src/presentation/components/
├── common/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css (opcional)
│   │   └── index.ts
│   ├── Card/
│   ├── Input/
│   └── ...
├── layout/
│   ├── NavBar/
│   ├── Footer/
│   └── ...
└── index.ts
```

---

### TASK-002-2: Implementar Button.tsx

**Historia:** US-002  
**Prioridad:** 🔴 Alta  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Crear componente Button reutilizable con variantes.

**Checklist:**
- [ ] Crear `src/presentation/components/common/Button/Button.tsx`
- [ ] Definir tipos `ButtonProps`
- [ ] Implementar variantes: primary, secondary, tertiary, ghost
- [ ] Implementar tamaños: sm, md, lg
- [ ] Añadir states: hover, active, disabled, loading
- [ ] Crear archivo de barril (index.ts)
- [ ] Escribir tests básicos

**Código Base:**
```tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  children,
  className,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-primary text-on-primary hover:bg-primary/90',
    secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
    tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary/90',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        font-grotesk font-medium rounded transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
```

---

### TASK-002-3: Implementar Card.tsx

**Historia:** US-002  
**Prioridad:** 🟡 Media  
**Estimación:** 25 min  
**Estado:** Not Started

**Descripción:**
Crear componente Card para contenedores genéricos.

**Checklist:**
- [ ] Crear `src/presentation/components/common/Card/Card.tsx`
- [ ] Definir tipos `CardProps`
- [ ] Implementar variantes: elevated, outlined, filled
- [ ] Soporte para children
- [ ] Crear CardHeader, CardBody, CardFooter (optional subcomponents)
- [ ] Escribir tests básicos

---

### TASK-002-4: Implementar Input.tsx y componentes de forma

**Historia:** US-002  
**Prioridad:** 🟡 Media  
**Estimación:** 40 min  
**Estado:** Not Started

**Descripción:**
Crear componentes Input, TextArea, Select para formularios.

**Checklist:**
- [ ] Crear `Input.tsx` para campos de texto
- [ ] Crear `TextArea.tsx` para áreas de texto
- [ ] Crear `Select.tsx` para dropdowns
- [ ] Soporte para labels, placeholders, errors
- [ ] Validación básica
- [ ] Escribir tests

---

### TASK-002-5: Implementar Badge.tsx y SkillBadge.tsx

**Historia:** US-002  
**Prioridad:** 🟡 Media  
**Estimación:** 20 min  
**Estado:** Not Started

**Descripción:**
Crear componentes Badge para etiquetas y badges de skills.

**Checklist:**
- [ ] Crear `Badge.tsx` con variantes de estado
- [ ] Crear `SkillBadge.tsx` para mostrar tecnologías
- [ ] Soporte para iconos
- [ ] Variantes de color según categoría de skill

---

### TASK-002-6: Implementar Terminal.tsx

**Historia:** US-002  
**Prioridad:** 🟡 Media  
**Estimación:** 45 min  
**Estado:** Not Started

**Descripción:**
Crear componente Terminal estilado para mostrar código/comandos.

**Checklist:**
- [ ] Crear `Terminal.tsx` 
- [ ] Implementar barra superior con puntos de control (macOS style)
- [ ] Sintaxis highlighting para código
- [ ] Cursor parpadeante
- [ ] Glow effect opcional
- [ ] Líneas de comandos con prompt
- [ ] Scrollable si contenido es largo

**Features:**
- Mostrar comandos y outputs
- Colores según tipo (prompt, comando, output, error, éxito)
- Animación de líneas apareciendo

---

### TASK-002-7: Crear archivo de tema y colores centralizados

**Historia:** US-002  
**Prioridad:** 🟡 Media  
**Estimación:** 20 min  
**Estado:** Not Started

**Descripción:**
Centralizar colores y constantes de diseño.

**Checklist:**
- [ ] Crear `src/presentation/styles/colors.ts`
- [ ] Crear `src/presentation/styles/theme.ts`
- [ ] Exportar constantes de colores desde variable system
- [ ] Documentar sistema de colores
- [ ] Asegurar que match con Tailwind config

**Archivo colors.ts:**
```ts
export const colors = {
  primary: '#4cd7f6',
  secondary: '#94de2d',
  tertiary: '#c0c1ff',
  surface: '#0b1326',
  // ... rest
};
```

---

## TASK-003: Sección Hero

### TASK-003-1: Crear componente Hero.tsx

**Historia:** US-003  
**Prioridad:** 🔴 Alta  
**Estimación:** 60 min  
**Estado:** Not Started

**Descripción:**
Implementar componente Hero principal.

**Checklist:**
- [ ] Crear `src/presentation/components/pages/Hero.tsx`
- [ ] Estructura: Texto + Terminal side-by-side
- [ ] Hero grid decoration background
- [ ] Badge de estado
- [ ] H1 con gradient text
- [ ] Párrafo descriptivo
- [ ] CTAs (botones primario y secundario)

---

### TASK-003-2: Implementar animaciones de entrada

**Historia:** US-003  
**Prioridad:** 🟡 Media  
**Estimación:** 40 min  
**Estado:** Not Started

**Descripción:**
Añadir animaciones fade-in con stagger al cargar Hero.

**Checklist:**
- [ ] Crear hook `useInViewAnimation.ts`
- [ ] Implementar fade-in + translate
- [ ] Stagger animation entre elementos
- [ ] Test en diferentes dispositivos

---

### TASK-003-3: Crear contador animado reutilizable

**Historia:** US-003  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Crear componente que anima contadores de números.

**Checklist:**
- [ ] Crear `StatCounter.tsx`
- [ ] Props: target number, label, duration
- [ ] Animar del 0 al target con easing
- [ ] Trigger al scroll (IntersectionObserver)
- [ ] Formato de números (1M+, 5K+, etc.)

---

### TASK-003-4: Integrar Terminal.tsx en Hero

**Historia:** US-003  
**Prioridad:** 🟡 Media  
**Estimación:** 20 min  
**Estado:** Not Started

**Descripción:**
Mostrar terminal con comandos en Hero.

**Checklist:**
- [ ] Integrar Terminal component
- [ ] Datos: whoami, cat skills, etc.
- [ ] Simular typing effect (opcional)

---

### TASK-003-5: Implementar decoraciones (grid, glows)

**Historia:** US-003  
**Prioridad:** 🟡 Media  
**Estimación:** 25 min  
**Estado:** Not Started

**Descripción:**
Añadir elementos visuales decorativos.

**Checklist:**
- [ ] Grid pattern background
- [ ] Glow circles en esquinas
- [ ] Gradientes sutiles
- [ ] SVG decorativos

---

### TASK-003-6: Hacer responsive

**Historia:** US-003  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Adaptar Hero para diferentes tamaños de pantalla.

**Checklist:**
- [ ] Mobile: Stack vertical, terminal debajo
- [ ] Tablet: Ajustar tamaños y espaciado
- [ ] Desktop: Layout original
- [ ] Testear en Chrome DevTools

---

### TASK-003-7: Crear datos mock para Hero

**Historia:** US-003  
**Prioridad:** 🟡 Media  
**Estimación:** 15 min  
**Estado:** Not Started

**Descripción:**
Crear archivo con datos de ejemplo para Hero.

**Checklist:**
- [ ] Crear `src/domain/entities/developer.ts`
- [ ] Definir types para Developer data
- [ ] Crear archivo `src/infrastructure/config/mocks.ts`
- [ ] Incluir: nombre, tagline, descripción, stats

---

## TASK-004: Sección Proyectos

### TASK-004-1: Crear tipos TypeScript para Project

**Historia:** US-004  
**Prioridad:** 🔴 Alta  
**Estimación:** 20 min  
**Estado:** Not Started

**Descripción:**
Definir interfaces TypeScript para proyectos.

**Checklist:**
- [ ] Crear `src/domain/entities/project.ts`
- [ ] Interface Project con: id, name, description, image, technologies, status, links
- [ ] Enums para status (LIVE_DEMO, IN_PROGRESS, PRIVATE)
- [ ] Type Technologies (union type)

---

### TASK-004-2: Crear componente ProjectCard.tsx

**Historia:** US-004  
**Prioridad:** 🔴 Alta  
**Estimación:** 40 min  
**Estado:** Not Started

**Descripción:**
Implementar tarjeta individual de proyecto.

**Checklist:**
- [ ] Crear `ProjectCard.tsx`
- [ ] Mostrar: imagen, título, descripción, technologies, badge, links
- [ ] Hover effects y transiciones
- [ ] Responsive image
- [ ] Accesibilidad (alt text, titles)

---

### TASK-004-3: Crear componente ProjectCarousel.tsx

**Historia:** US-004  
**Prioridad:** 🔴 Alta  
**Estimación:** 50 min  
**Estado:** Not Started

**Descripción:**
Implementar carrusel de proyectos.

**Checklist:**
- [ ] Crear `ProjectCarousel.tsx`
- [ ] Navegación con flechas (prev/next)
- [ ] Dots indicadores
- [ ] Auto-scroll opcional
- [ ] Smooth transitions

---

### TASK-004-4: Implementar navegación

**Historia:** US-004  
**Prioridad:** 🟡 Media  
**Estimación:** 35 min  
**Estado:** Not Started

**Descripción:**
Añadir controles de navegación completos.

**Checklist:**
- [ ] Botones prev/next funcionales
- [ ] Indicadores de página (dots)
- [ ] Keyboard navigation (arrows)
- [ ] Touch gestures en mobile
- [ ] Disabled states en extremos

---

### TASK-004-5: Implementar responsive design

**Historia:** US-004  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Adaptar carrusel para diferentes pantallas.

**Checklist:**
- [ ] Desktop: 3 cards
- [ ] Tablet: 2 cards
- [ ] Mobile: 1 card, full width
- [ ] Testear breakpoints

---

### TASK-004-6: Optimizar imágenes y lazy loading

**Historia:** US-004  
**Prioridad:** 🟡 Media  
**Estimación:** 25 min  
**Estado:** Not Started

**Descripción:**
Performance optimization para imágenes.

**Checklist:**
- [ ] Lazy loading con Intersection Observer
- [ ] Placeholders mientras cargan
- [ ] WebP con fallbacks
- [ ] Srcset para diferentes resoluciones

---

### TASK-004-7: Crear datos mock de proyectos

**Historia:** US-004  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Crear datos de ejemplo para proyectos.

**Checklist:**
- [ ] Crear 4-5 proyectos de ejemplo
- [ ] Incluir tecnologías reales
- [ ] Links de demostración (placeholders)
- [ ] GitHub URLs
- [ ] Guardar en `infrastructure/config/mocks.ts`

---

## TASK-005: Sección Stack Técnico

### TASK-005-1: Crear tipos para Stack

**Historia:** US-005  
**Prioridad:** 🟡 Media  
**Estimación:** 15 min  
**Estado:** Not Started

**Descripción:**
Definir tipos para categorías de tecnologías.

**Checklist:**
- [ ] Crear `src/domain/entities/stack.ts`
- [ ] Interface SkillCategory
- [ ] Interface Skill
- [ ] Enums para categorías

---

### TASK-005-2: Crear componente Stack.tsx

**Historia:** US-005  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

---

### TASK-005-3: Crear componente SkillGroup.tsx

**Historia:** US-005  
**Prioridad:** 🟡 Media  
**Estimación:** 25 min  
**Estado:** Not Started

---

### TASK-005-4: Implementar datos del stack

**Historia:** US-005  
**Prioridad:** 🟡 Media  
**Estimación:** 20 min  
**Estado:** Not Started

**Descripción:**
Crear archivo con stack técnico.

**Checklist:**
- [ ] Categorías: Frontend, Backend, DevOps, Herramientas
- [ ] Incluir tecnologías principales
- [ ] Guardar en mocks

---

### TASK-005-5: Añadir iconos de tecnologías

**Historia:** US-005  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Integrar iconos para tecnologías (React, Node, etc.).

**Checklist:**
- [ ] Usar librería (React Icons, Lucide, etc.)
- [ ] Mapear tecnología a icono
- [ ] Colores consistentes

---

## TASK-006: Sección Experiencia

Sigue patrón similar a Stack (6 tareas)

---

## TASK-007: Sección Contacto

### TASK-007-1 a TASK-007-6: Similar a Pattern anterior

---

## TASK-008: Descargas - CV

### TASK-008-1: Crear servicio DownloadService.ts

**Historia:** US-008  
**Prioridad:** 🟡 Media  
**Estimación:** 20 min  
**Estado:** Not Started

**Descripción:**
Servicio centralizado para gestionar descargas.

**Checklist:**
- [ ] Crear `src/application/cv/download-service.ts`
- [ ] Métodos: `downloadPDF()`, `downloadHTML()`
- [ ] Usar Blob API
- [ ] Error handling

---

### TASK-008-2 a TASK-008-4: Similar a patrón anterior

---

## TASK-009: Navegación - Router

### TASK-009-1: Configurar React Router

**Historia:** US-009  
**Prioridad:** 🔴 Alta  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Setup de React Router v6.

**Checklist:**
- [ ] Instalar `react-router-dom`
- [ ] Crear estructura de rutas
- [ ] Definir páginas principales
- [ ] Layout wrapper

---

### TASK-009-2 a TASK-009-6: Similar a patrón anterior

---

## TASK-010: Footer y SEO

Similar a patrón anterior

---

## TASK-011: Testing

### TASK-011-1: Configurar Vitest + RTL

**Historia:** US-011  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

---

### TASK-011-2 a TASK-011-5: Similar a patrón anterior

---

## TASK-012: Integración Backend - API Ready

### TASK-012-1: Crear servicio HTTP client

**Historia:** US-012  
**Prioridad:** 🟡 Media  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Setup de cliente HTTP para futuras llamadas a API.

**Checklist:**
- [ ] Crear `src/infrastructure/api/http-client.ts`
- [ ] Wrapper para fetch API
- [ ] Interceptores para auth (futuro)
- [ ] Error handling
- [ ] Base URL configurable

---

### TASK-012-2 a TASK-012-5: Similar a patrón anterior

---

## TASK-013: Deployment - CI/CD

### TASK-013-1: Crear GitHub Actions workflow

**Historia:** US-013  
**Prioridad:** 🔴 Alta  
**Estimación:** 30 min  
**Estado:** Not Started

**Descripción:**
Configurar CI/CD con GitHub Actions.

**Checklist:**
- [ ] Crear `.github/workflows/ci.yml`
- [ ] Trigger en push a main y PRs
- [ ] Instalar dependencias
- [ ] Ejecutar linting
- [ ] Ejecutar tests
- [ ] Build para verificar

---

### TASK-013-2 a TASK-013-5: Similar a patrón anterior

---

## Resumen de Estimaciones

| Sección | Tareas | Tiempo Total | Prioridad |
|---------|--------|--------------|-----------|
| Setup | 7 | 2.5 horas | 🔴 Alta |
| Componentes Base | 7 | 3.5 horas | 🔴 Alta |
| Hero | 7 | 3.5 horas | 🔴 Alta |
| Proyectos | 7 | 3.5 horas | 🔴 Alta |
| Stack | 5 | 2 horas | 🟡 Media |
| Experiencia | 5 | 2 horas | 🟡 Media |
| Contacto | 5 | 2 horas | 🟡 Media |
| Descargas | 4 | 1.5 horas | 🟡 Media |
| NavBar/Router | 6 | 2.5 horas | 🔴 Alta |
| Footer/SEO | 5 | 1.5 horas | 🟡 Media |
| Testing | 5 | 2.5 horas | 🟡 Media |
| Backend Ready | 5 | 2 horas | 🟡 Media |
| Deploy | 5 | 2 horas | 🔴 Alta |
| **TOTAL** | **73** | **~32 horas** | - |

---

## Cómo Usar Este Documento

1. **Para iniciar**: Comienza por TASK-001-1 a TASK-001-7 (Setup)
2. **Para seguimiento**: Marca como "In Progress" mientras trabajas
3. **Para completar**: Marca como "Done" cuando termines
4. **Para estimar**: Usa las estimaciones como referencia
5. **Para detalles**: Cada tarea tiene descripción, checklist y código base

---

## Notas

- Estas estimaciones asumen experiencia con React/TypeScript
- Pueden variar según contexto y familiaridad con herramientas
- Testing puede hacerse en paralelo con desarrollo
- Fases pueden ser ajustadas según necesidad

