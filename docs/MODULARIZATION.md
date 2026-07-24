# Estrategia de Modularización - Portfolio React v2.0

**Versión:** 2.0  
**Propósito:** Explicar cómo la aplicación está modularizada para facilitar mantenimiento, escalabilidad y testabilidad

---

## 🎯 Principios de Modularización

### 1. Domain-Driven Design (DDD)

La aplicación sigue arquitectura en capas con énfasis en separar la **lógica de negocio** de la **infraestructura** y **presentación**.

```
┌─────────────────────────────────────────┐
│      PRESENTATION (UI Components)       │
│    Componentes React, Páginas, Hooks    │
└────────────────────┬────────────────────┘
                     │ depende de
┌────────────────────▼────────────────────┐
│  APPLICATION (Business Logic)           │
│    Use Cases, Services, Orchestration   │
└────────────────────┬────────────────────┘
                     │ depende de
┌────────────────────▼────────────────────┐
│     DOMAIN (Pure Business Rules)        │
│    Entities, Types, Business Services   │
└────────────────────┬────────────────────┘
                     │ depende de
┌────────────────────▼────────────────────┐
│  INFRASTRUCTURE (Technical Details)     │
│    Config, API Clients, Caching, etc    │
└─────────────────────────────────────────┘
```

### 2. Regla de Dependencias

- ✅ **Presentation** puede depender de: Application, Domain, Infrastructure, Shared
- ✅ **Application** puede depender de: Domain, Infrastructure, Shared
- ✅ **Domain** puede depender de: Shared SOLAMENTE
- ✅ **Infrastructure** puede depender de: Domain, Shared
- ❌ Nunca inverso: Domain NO debe saber de UI, API endpoints específicos, etc.

---

## 📦 Descripción de Cada Módulo

### DOMAIN/

**Propósito:** Código puro de negocio. Sin dependencias externas. Testeable sin mocks complicados.

```
domain/
├── entities/              # Tipos de datos del negocio
│   ├── project.ts         # interface Project, tipos, validaciones
│   ├── experience.ts      # interface Experience
│   ├── skill.ts           # interface Skill, SkillCategory
│   ├── developer.ts       # interface Developer (info personal)
│   └── contact.ts         # interface ContactForm
│
├── services/              # Lógica pura sin side effects
│   ├── portfolio-service.ts     # Lógica de portafolio (filtros, sorting)
│   ├── skill-service.ts         # Lógica de skills (categorización)
│   └── experience-service.ts    # Lógica de experiencia (cálculos)
│
├── types/                 # Tipos compartidos
│   └── common.ts          # Enums, unions, tipos helpers
│
└── README.md              # "Lógica pura de negocio sin dependencies externas"
```

**Ejemplo - domain/entities/project.ts:**
```ts
export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: Technology[];
  status: ProjectStatus;
  links: {
    demo?: string;
    github?: string;
  };
  startDate: Date;
  endDate?: Date;
}

export enum ProjectStatus {
  LIVE_DEMO = 'LIVE_DEMO',
  IN_PROGRESS = 'IN_PROGRESS',
  PRIVATE = 'PRIVATE',
  ARCHIVED = 'ARCHIVED',
}

// Validación pura
export function isProjectValid(project: Partial<Project>): project is Project {
  return !!(project.id && project.name && project.description);
}
```

### APPLICATION/

**Propósito:** Orquestar el dominio para casos de uso específicos. Conecta lógica de negocio con infraestructura.

```
application/
├── cv/
│   ├── download-service.ts      # Descargar CV PDF/HTML
│   ├── generate-service.ts      # Generar CV (futuro)
│   └── types.ts
│
├── portfolio/
│   ├── portfolio-use-case.ts    # Obtener/filtrar proyectos
│   ├── experience-use-case.ts   # Obtener experiencia
│   └── types.ts
│
├── contact/
│   ├── contact-use-case.ts      # Enviar formulario de contacto (futuro)
│   ├── validation-service.ts    # Validar form
│   └── types.ts
│
└── README.md                    # "Casos de uso conectando Domain e Infrastructure"
```

**Ejemplo - application/portfolio/portfolio-use-case.ts:**
```ts
import type { Project } from '@/domain/entities/project';
import { portfolioService } from '@/domain/services/portfolio-service';
import { mockProjects } from '@/infrastructure/config/mocks';

export class PortfolioUseCase {
  // En futuro, inyectaría API client
  constructor(private apiClient?: any) {}

  async getProjects(): Promise<Project[]> {
    try {
      // Futura integración: this.apiClient.get('/api/projects')
      // Por ahora retorna mock
      return mockProjects;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return mockProjects; // Fallback
    }
  }

  async filterProjects(status: string): Promise<Project[]> {
    const projects = await this.getProjects();
    return portfolioService.filterByStatus(projects, status);
  }
}

export const portfolioUseCase = new PortfolioUseCase();
```

### INFRASTRUCTURE/

**Propósito:** Detalles técnicos: APIs, configuración, archivos, caching, etc.

```
infrastructure/
├── config/
│   ├── app-config.ts            # Configuración de la app
│   ├── mocks.ts                 # Mock data para desarrollo
│   ├── environment.ts           # Variables de entorno tipadas
│   └── constants.ts             # URLs, keys, etc.
│
├── api/
│   ├── http-client.ts           # Wrapper de fetch
│   ├── endpoints.ts             # URLs de endpoints
│   └── error-handler.ts         # Manejo de errores API
│
├── services/
│   ├── logger.ts                # Logging
│   ├── storage.ts               # LocalStorage wrapper
│   └── cache.ts                 # Caching strategy
│
└── README.md                    # "Detalles técnicos e implementación"
```

**Ejemplo - infrastructure/config/mocks.ts:**
```ts
import type { Project } from '@/domain/entities/project';

export const mockProjects: Project[] = [
  {
    id: '001',
    name: 'Portfolio v2.0',
    description: 'Portfolio profesional con React + TypeScript',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    status: 'LIVE_DEMO',
    links: {
      demo: 'https://alvaro.dev',
      github: 'https://github.com/...',
    },
    image: '/images/project-01.png',
    startDate: new Date('2024-01-01'),
  },
  // ... más proyectos
];
```

### PRESENTATION/

**Propósito:** Componentes React, páginas, hooks. Orquesta Application para mostrar UI.

```
presentation/
├── components/
│   ├── common/               # Componentes base reutilizables
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Terminal/
│   │   ├── SkillBadge/
│   │   └── index.ts
│   │
│   ├── layout/              # Layout components
│   │   ├── NavBar/
│   │   ├── Footer/
│   │   ├── MobileMenu/
│   │   ├── Layout/
│   │   └── index.ts
│   │
│   ├── pages/               # Componentes de secciones
│   │   ├── Hero/
│   │   ├── Projects/
│   │   ├── Stack/
│   │   ├── Experience/
│   │   ├── Contact/
│   │   └── index.ts
│   │
│   └── index.ts             # Re-exports centralizados
│
├── hooks/                   # React hooks custom
│   ├── useInViewAnimation.ts
│   ├── useScrollPosition.ts
│   ├── useAnimation.ts
│   └── index.ts
│
├── pages/                   # Páginas principales
│   ├── Home.tsx             # Página principal
│   ├── NotFound.tsx
│   └── index.ts
│
├── styles/                  # Estilos globales
│   ├── colors.ts            # Constantes de colores
│   ├── theme.ts             # Variables de tema
│   ├── animations.css       # Keyframes
│   └── globals.css
│
├── assets/                  # Recursos
│   ├── images/
│   ├── cv/
│   └── icons/
│
└── README.md                # "Componentes y UI de la aplicación"
```

**Ejemplo - presentation/pages/Projects/Projects.tsx:**
```tsx
import React, { useEffect, useState } from 'react';
import type { Project } from '@/domain/entities/project';
import { portfolioUseCase } from '@/application/portfolio/portfolio-use-case';
import { ProjectCard } from '@/presentation/components/pages';
import { useInViewAnimation } from '@/presentation/hooks';

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { ref, isVisible } = useInViewAnimation();

  useEffect(() => {
    const loadProjects = async () => {
      const data = await portfolioUseCase.getProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
```

### SHARED/

**Propósito:** Código reutilizable sin opinión sobre el dominio.

```
shared/
├── constants/
│   ├── app.constants.ts     # Valores constantes (timeouts, etc)
│   └── colors.ts            # Paleta de colores (si no está en Tailwind)
│
├── utils/
│   ├── validators.ts        # Funciones de validación genéricas
│   ├── formatters.ts        # Formateo (números, fechas, texto)
│   ├── dom.ts               # Helpers de DOM (scroll, download)
│   ├── array.ts             # Helpers de arrays
│   └── string.ts            # Helpers de strings
│
├── types/
│   └── index.ts             # Tipos globales
│
└── README.md                # "Utilidades compartidas entre módulos"
```

---

## 🔗 Flujo de Datos

### Ejemplo: Mostrar Lista de Proyectos

```
1. Usuario abre la app
   ↓
2. Presentation/pages/Home.tsx renderiza
   ↓
3. Projects section monta
   ↓
4. useEffect llama portfolioUseCase.getProjects()
   ↓
5. PortfolioUseCase consulta mockProjects (o API en futuro)
   ↓
6. Infrastructure/config/mocks retorna datos
   ↓
7. Application layer orquesta datos
   ↓
8. Presentation recibe datos y renderiza ProjectCard componentes
   ↓
9. Usuario ve los proyectos
```

---

## 📊 Matriz de Dependencias

|  | Domain | Application | Infrastructure | Presentation | Shared |
|---|--------|-------------|-----------------|--------------|--------|
| **Domain** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Application** | ✅ | ✅ | ✅ | ❌ | ✅ |
| **Infrastructure** | ✅ | ❌ | ✅ | ❌ | ✅ |
| **Presentation** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Shared** | ❌ | ❌ | ❌ | ❌ | ✅ |

**Regla Dorada:** Siempre depender hacia adentro (izquierda en el diagrama)

---

## 🧪 Testabilidad

### Componentes más fáciles de testear:

1. **Domain Services** - Lógica pura
   ```ts
   // Fácil de testear - no hay side effects
   portfolioService.filterByStatus(projects, 'LIVE_DEMO')
   ```

2. **Application Use Cases** - Con mocks simples
   ```ts
   // Mock solo de infrastructure
   const useCase = new PortfolioUseCase(mockApiClient);
   ```

3. **Presentation Components** - Con React Testing Library
   ```tsx
   render(<ProjectCard project={mockProject} />);
   ```

### Componentes más difíciles de testear:

- Los que mezclan Domain + Presentation sin Application
- Los que importan directamente de services concretos sin inyección

---

## 🚀 Escalabilidad

### Si quieres añadir nueva feature: "Blog"

```
1. domain/entities/blog-post.ts         ← Define modelo
2. domain/services/blog-service.ts      ← Lógica de negocio
3. application/blog/blog-use-case.ts    ← Casos de uso
4. infrastructure/config/mocks.ts       ← Mock data
5. presentation/components/pages/Blog/  ← UI
6. presentation/pages/Home.tsx          ← Incluir en Home
```

Cada capa está lista para ser reemplazada/extendida sin afectar otras.

---

## 🔄 Flujo de Integración Backend (Futuro)

### Hoy (con mocks):
```
Presentation → Application → Infrastructure.mocks → Presentation
```

### Mañana (con API):
```
// Cambio SOLO en infrastructure/api/http-client.ts
// El resto del código NO CAMBIA

Presentation → Application → Infrastructure.api.httpClient → Backend API
                             (mismo interface)
```

**Porque Application espera:**
```ts
interface IPortfolioRepository {
  getProjects(): Promise<Project[]>;
}
```

**Tanto mocks como API cumplen la interfaz:**
```ts
// Ahora: mockRepository implements IPortfolioRepository
// Futuro: apiRepository implements IPortfolioRepository
// Código no cambia ✅
```

---

## 📋 Checklist de Modularización

- [ ] ¿Cada capa tiene responsabilidad clara?
- [ ] ¿Domain no importa de Application/Presentation?
- [ ] ¿Application orquesta Domain e Infrastructure?
- [ ] ¿Presentation solo usa Application, no Infrastructure directo?
- [ ] ¿Hay interfaces/contracts claros entre capas?
- [ ] ¿Se puede testear cada capa independientemente?
- [ ] ¿Se puede reemplazar Infrastructure sin cambiar Domain?
- [ ] ¿Todos los tipos están en domain/entities o shared/types?
- [ ] ¿Los archivos index.ts hacen re-exports?

---

## 🎓 Conclusión

Esta modularización permite:

✅ **Mantenibilidad:** Cambios localizados  
✅ **Testabilidad:** Cada capa independiente  
✅ **Escalabilidad:** Fácil añadir features  
✅ **Flexibility:** Cambiar implementaciones sin afectar lógica  
✅ **Colaboración:** Múltiples devs sin conflictos  

Si no la respetas, terminas con "spaghetti code" que es difícil de mantener.

