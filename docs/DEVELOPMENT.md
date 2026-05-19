# Guía de Desarrollo - Portfolio React v2.0

**Versión:** 2.0  
**Actualizado:** Mayo 2026

---

## 📋 Antes de Empezar

### Checklist Pre-Desarrollo

- [ ] Node.js 18+ instalado (`node --version`)
- [ ] npm actualizado (`npm --version`)
- [ ] Git configurado (`git config --global user.name`, `git config --global user.email`)
- [ ] VS Code con extensiones recomendadas:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint
  - TypeScript Vue Plugin

---

## 🚀 Inicio del Proyecto

### Paso 1: Setup Inicial

```bash
# Navegar a la carpeta del proyecto
cd c:\Proyectos\WebPersonal

# Crear nuevo proyecto React + TypeScript con Vite
npm create vite@latest . -- --template react-ts

# Instalar dependencias principales
npm install

# Instalar Tailwind CSS y dependencias de estilos
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Instalar dev tools
npm install -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install -D eslint-config-prettier eslint-plugin-prettier
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Instalar dependencias de producción
npm install react-router-dom
npm install zustand  # State management
npm install zod      # Validation
npm install react-icons  # Icons
```

### Paso 2: Configurar Tailwind

Actualizar `tailwind.config.js`:
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        "surface-variant": "#2d3449",
        "primary-fixed-dim": "#4cd7f6",
        "error": "#ffb4ab"
      },
      fontFamily: {
        "grotesk": ["Space Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
        "geist": ["Geist", "sans-serif"]
      },
    },
  },
  plugins: [],
}
```

Crear `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Geist:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-primary text-on-primary hover:bg-primary/90 px-4 py-2 rounded font-medium transition-colors;
  }
  
  .card {
    @apply bg-surface-container border border-outline-variant rounded-lg p-6;
  }
}
```

---

## 📁 Estructura del Proyecto Explicada

```
src/
├── domain/                      # LÓGICA DE NEGOCIO PURA
│   ├── entities/                # Tipos de datos: Project, Experience, Skill
│   │   ├── project.ts
│   │   ├── experience.ts
│   │   ├── skill.ts
│   │   └── developer.ts
│   ├── services/                # Servicios puros (sin dependencias externas)
│   │   └── portfolio-service.ts
│   └── types/                   # Tipos y enums globales
│       └── common.ts
│
├── application/                 # CASOS DE USO
│   ├── cv/                      # Use case: Gestionar CV
│   │   └── download-service.ts
│   ├── portfolio/               # Use case: Portfolio
│   │   └── portfolio-use-case.ts
│   └── contact/                 # Use case: Contacto (futuro backend)
│       └── contact-service.ts
│
├── infrastructure/              # DETALLES TÉCNICOS
│   ├── config/                  # Configuración
│   │   ├── app-config.ts
│   │   └── mocks.ts             # Datos mock para desarrollo
│   ├── api/                     # API client
│   │   └── http-client.ts
│   └── services/                # Servicios de infraestructura
│       └── logger.ts
│
├── presentation/                # INTERFAZ DE USUARIO
│   ├── components/
│   │   ├── common/              # Componentes reutilizables
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Input/
│   │   │   ├── Badge/
│   │   │   └── Terminal/
│   │   ├── layout/              # Componentes de layout
│   │   │   ├── NavBar/
│   │   │   ├── Footer/
│   │   │   └── Layout/
│   │   ├── pages/               # Componentes de secciones/páginas
│   │   │   ├── Hero/
│   │   │   ├── Projects/
│   │   │   ├── Stack/
│   │   │   ├── Experience/
│   │   │   └── Contact/
│   │   └── index.ts             # Re-exports
│   ├── hooks/                   # React hooks personalizados
│   │   ├── useInViewAnimation.ts
│   │   ├── useScrollPosition.ts
│   │   └── useAnimation.ts
│   ├── pages/                   # Páginas/Routes principales
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── styles/                  # Estilos globales y temas
│   │   ├── colors.ts
│   │   ├── theme.ts
│   │   └── animations.css
│   └── assets/                  # Imágenes, íconos
│       ├── images/
│       ├── cv/
│       └── fonts/
│
├── shared/                      # CÓDIGO COMPARTIDO
│   ├── constants/               # Constantes de la app
│   │   └── app.constants.ts
│   ├── utils/                   # Utilidades genéricas
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── dom.ts
│   └── types/                   # Tipos globales (si aplica)
│       └── index.ts
│
├── App.tsx                      # Componente raíz
├── main.tsx                     # Entry point
└── vite-env.d.ts               # Type definitions de Vite
```

---

## 🎯 Convenciones de Código

### 1. Nombres de Archivos

```
✅ Components:          Button.tsx, ProjectCard.tsx
✅ Types/Interfaces:    project.ts (contiene Project interface)
✅ Services:            download-service.ts
✅ Hooks:               useInViewAnimation.ts
✅ Utilities:           validators.ts
❌ Index files only in: components/common/Button/index.ts (re-export)
```

### 2. Estructura de Componentes

```tsx
import React from 'react';
import { ComponentProps } from 'src/shared/types';

// 1. Define props interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// 2. Define component
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  // 3. Component logic
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;

  return (
    <button 
      className={`${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// 4. Export default
export default Button;
```

### 3. Importaciones

```tsx
// ✅ HACER
import { Button } from '@/presentation/components/common/Button';
import { useScrollPosition } from '@/presentation/hooks';
import type { Project } from '@/domain/entities/project';
import { downloadFile } from '@/shared/utils/dom';

// ❌ NO HACER
import Button from '../../../presentation/components/common/Button';
import * from 'everything';
```

### 4. TypeScript

```tsx
// ✅ Tipado explícito
const value: string = 'hello';
const items: Project[] = [];
const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {};

// ❌ Implicit any
const value = 'hello'; // OK si es obvio, pero mejor explícito
const items = []; // Evitar

// ✅ Tipos para Props
interface MyComponentProps {
  title: string;
  count?: number;
  onAction: (id: string) => void;
}

// ❌ Props sin tipar
function MyComponent(props) { }
```

---

## 🎨 Convenciones de Estilos

### Usar Tailwind para estilos

```tsx
// ✅ HACER
<div className="bg-surface rounded-lg p-6 hover:bg-surface-container transition-colors">
  {children}
</div>

// ❌ NO HACER
<div style={{ backgroundColor: '#0b1326', borderRadius: '8px' }}>
```

### CSS personalizado solo cuando sea necesario

```css
/* ✅ En src/presentation/styles/animations.css */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@layer components {
  .fade-in {
    animation: fadeIn 0.6s ease;
  }
}
```

---

## 🧪 Testing

### Setup en vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

### Ejemplo de Test

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/presentation/components/common/Button';

describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant class', () => {
    const { container } = render(<Button variant="primary">Test</Button>);
    expect(container.querySelector('button')).toHaveClass('btn-primary');
  });
});
```

---

## 🚀 Flujo de Desarrollo

### 1. Crear componente nuevo

```bash
# Crear carpeta
mkdir -p src/presentation/components/common/NewComponent

# Crear archivos
touch src/presentation/components/common/NewComponent/NewComponent.tsx
touch src/presentation/components/common/NewComponent/index.ts
```

### 2. Definir tipos

```bash
# Si es nuevo tipo/entidad de negocio
touch src/domain/entities/new-entity.ts

# Escribir interface
# export interface NewEntity { ... }
```

### 3. Implementar componente

Ver convenciones de código arriba.

### 4. Exportar

```ts
// src/presentation/components/common/NewComponent/index.ts
export { NewComponent } from './NewComponent';
export type { NewComponentProps } from './NewComponent'; // si aplica
```

### 5. Usar en otro componente

```tsx
import { NewComponent } from '@/presentation/components/common';

function ParentComponent() {
  return <NewComponent />;
}
```

---

## 🔍 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Build
npm run build        # Build para producción
npm run preview      # Preview local del build

# Code quality
npm run lint         # Verifica ESLint
npm run lint:fix     # Arregla automáticamente
npm run format       # Formatea con Prettier

# Testing
npm run test         # Ejecuta tests
npm run test:ui      # UI para tests
npm run test:coverage # Coverage report
```

---

## 📦 Dependencias Principales

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| react | 18+ | Framework UI |
| typescript | 5+ | Tipado estático |
| vite | 5+ | Build tool |
| tailwindcss | 3+ | Estilos |
| react-router-dom | 6+ | Routing |
| zustand | 4+ | State management |
| zod | 3+ | Validación |
| react-icons | 5+ | Icons |

---

## 🐛 Debugging

### VS Code Launch Config

Crear `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverride": {
        "${webRoot}/src/*": "${workspaceFolder}/src/*"
      }
    }
  ]
}
```

---

## 📝 Commit Messages

Usar Conventional Commits:

```
feat(hero): add animated counter component
fix(button): resolve hover state color
docs(readme): update setup instructions
style(tailwind): configure color system
refactor(components): move Button to common
test(button): add unit tests
```

---

## 🚨 Troubleshooting

### "Cannot find module" errors
- Verificar alias en `vite.config.ts`
- Verificar spelling y path correcto
- Limpiar `node_modules` y reinstalar

### Tailwind colors no funcionan
- Verificar `tailwind.config.js` tiene colores
- Ejecutar `npm run build` para regenerar
- Limpiar caché de navegador

### Tests no corren
- Verificar instalación de `vitest`
- Verificar `.ts` files en `src/`
- Revisar `vite.config.ts` test config

---

## 📚 Recursos

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/guide)
- [React Router](https://reactrouter.com)
- [Zustand](https://github.com/pmndrs/zustand)

