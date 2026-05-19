# 🎯 BIRDS-EYE VIEW - Portfolio v2.0

**Propósito:** Visión general visual del proyecto completo

---

## 🏗️ Arquitectura de Capas

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃        PRESENTATION (React UI)            ┃  Hero.tsx, ProjectCard.tsx,
┃  Components, Pages, Hooks                ┃  NavBar.tsx, Forms, etc.
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                    ▲
                    │ depende
                    │
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃      APPLICATION (Use Cases)              ┃  PortfolioUseCase.ts,
┃  Business logic orchestration             ┃  ContactUseCase.ts,
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                    ▲
                    │ depende
                    │
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃        DOMAIN (Pure Business Logic)       ┃  Project.ts, Experience.ts
┃  Entities, Services, Types                ┃  portfolio-service.ts
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                    ▲
                    │ depende
                    │
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   INFRASTRUCTURE (Technical Details)      ┃  API client, Config,
┃  APIs, Config, Services                   ┃  Mocks, Caching
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                    ▲
                    │ depende
                    │
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃     SHARED (Shared Utilities)             ┃  utils, types, constants
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

🔑 Rule: Siempre depender hacia ADENTRO (arriba en el diagrama)
```

---

## 📊 Componentes Principales

```
┌─────────────────────────────────────────────────────────────┐
│                      PORTFOLIO REACT                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   SECTIONS   │  │ COMPONENTS   │  │ UTILITIES    │      │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤      │
│  │ • Hero       │  │ • Button     │  │ • Validators │      │
│  │ • Projects   │  │ • Card       │  │ • Formatters │      │
│  │ • Stack      │  │ • Input      │  │ • useHooks   │      │
│  │ • Experience │  │ • Badge      │  │ • Constants  │      │
│  │ • Contact    │  │ • Terminal   │  │              │      │
│  │ • NavBar     │  │ • SkillBadge │  │              │      │
│  │ • Footer     │  │              │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│              ┌─────────────────────────────┐                │
│              │   DATA LAYER                │                │
│              ├─────────────────────────────┤                │
│              │ • Domain Entities           │                │
│              │ • Application Services      │                │
│              │ • Mock Data                 │                │
│              │ • API Client (futuro)       │                │
│              └─────────────────────────────┘                │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📈 Fases de Desarrollo Visualizadas

```
SEMANA    HORAS    TAREAS    PROGRESO         DELIVERABLE
────────────────────────────────────────────────────────────
Semana 1   2.5h    7/73     9%      ███░░░░░░░  Setup + Componentes
Semana 2-3 7.5h    22/73    39%     █████████░  Core UI (Hero, Nav)
Semana 4   6.0h    32/73    63%     ███████░░░  Contenido (Stack, Exp)
Semana 4   3.5h    39/73    75%     ███████░░░  Detalles (CV, Footer)
Semana 5   4.5h    49/73    90%     ██████████  Testing + Backend
Semana 6   2.0h    73/73    100%    ██████████  Deploy 🎉
```

---

## 🗂️ Estructura de Carpetas Completa

```
WebPersonal/
│
├── 📁 .github/
│   ├── workflows/
│   │   └── ci.yml                    (GitHub Actions)
│   └── ISSUE_TEMPLATE/
│       ├── user-story.md
│       ├── task.md
│       └── bug.md
│
├── 📁 docs/                          ★ DOCUMENTACIÓN
│   ├── INDEX.md                      ← Comienza aquí
│   ├── INICIO_RAPIDO.md             ← 5 pasos (30 min)
│   ├── RESUMEN_EJECUTIVO.md         ← Visión general
│   ├── DEVELOPMENT.md               ← Setup + convenciones
│   ├── MODULARIZATION.md            ← Arquitectura DDD
│   ├── USER_STORIES.md              ← 13 historias
│   ├── TASKS.md                     ← 73 tareas
│   ├── GITHUB_SETUP.md              ← GitHub guide
│   ├── GITHUB_ISSUE_TEMPLATES.md    ← Plantillas
│   ├── README.md                    (existente)
│   ├── SPEC.md                      (v1 reference)
│   ├── COMPONENTS.md                (v1 reference)
│   ├── ARCHITECTURE.md              (v1 reference)
│   └── CHANGELOG.md
│
├── 📁 src/
│   ├── domain/                      ★ LÓGICA DE NEGOCIO
│   │   ├── entities/
│   │   │   ├── project.ts
│   │   │   ├── experience.ts
│   │   │   ├── skill.ts
│   │   │   └── developer.ts
│   │   ├── services/
│   │   │   ├── portfolio-service.ts
│   │   │   └── skill-service.ts
│   │   └── types/
│   │       └── common.ts
│   │
│   ├── application/                 ★ CASOS DE USO
│   │   ├── cv/
│   │   │   ├── download-service.ts
│   │   │   └── types.ts
│   │   ├── portfolio/
│   │   │   ├── portfolio-use-case.ts
│   │   │   └── types.ts
│   │   └── contact/
│   │       ├── contact-use-case.ts
│   │       └── validation.ts
│   │
│   ├── infrastructure/              ★ DETALLES TÉCNICOS
│   │   ├── config/
│   │   │   ├── app-config.ts
│   │   │   ├── mocks.ts
│   │   │   └── environment.ts
│   │   ├── api/
│   │   │   ├── http-client.ts
│   │   │   └── endpoints.ts
│   │   └── services/
│   │       └── logger.ts
│   │
│   ├── presentation/                ★ COMPONENTES REACT
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button/
│   │   │   │   ├── Card/
│   │   │   │   ├── Input/
│   │   │   │   ├── Badge/
│   │   │   │   ├── Terminal/
│   │   │   │   └── index.ts
│   │   │   ├── layout/
│   │   │   │   ├── NavBar/
│   │   │   │   ├── Footer/
│   │   │   │   └── Layout/
│   │   │   ├── pages/
│   │   │   │   ├── Hero/
│   │   │   │   ├── Projects/
│   │   │   │   ├── Stack/
│   │   │   │   ├── Experience/
│   │   │   │   └── Contact/
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── useInViewAnimation.ts
│   │   │   ├── useScrollPosition.ts
│   │   │   └── index.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── styles/
│   │   │   ├── colors.ts
│   │   │   ├── theme.ts
│   │   │   ├── animations.css
│   │   │   └── globals.css
│   │   └── assets/
│   │       ├── images/
│   │       ├── cv/
│   │       └── icons/
│   │
│   ├── shared/                      ★ UTILIDADES
│   │   ├── constants/
│   │   │   └── app.constants.ts
│   │   ├── utils/
│   │   │   ├── validators.ts
│   │   │   ├── formatters.ts
│   │   │   └── dom.ts
│   │   └── types/
│   │       └── index.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── 📁 public/
│   ├── favicon.svg
│   └── robots.txt
│
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 tsconfig.json
├── 📄 vite.config.ts
├── 📄 tailwind.config.js
├── 📄 eslint.config.js
├── 📄 .gitignore
├── 📄 .env.example
└── 📄 README.md
```

---

## 🎯 13 Historias de Usuario

```
┌─────────────────────────────────────────────────────────────┐
│                    USER STORIES (13 total)                  │
├──────┬────────────────────────────────────┬───────┬─────────┤
│ # US │ Nombre                             │ Prio  │ Estado  │
├──────┼────────────────────────────────────┼───────┼─────────┤
│ 001  │ Setup React + TypeScript           │ 🔴    │ ⏳      │
│ 002  │ Sistema de Diseño                  │ 🔴    │ ⏳      │
│ 003  │ Sección Hero                       │ 🔴    │ ⏳      │
│ 004  │ Sección Proyectos (Carrusel)      │ 🔴    │ ⏳      │
│ 005  │ Sección Stack Técnico              │ 🟡    │ ⏳      │
│ 006  │ Sección Experiencia (Timeline)    │ 🟡    │ ⏳      │
│ 007  │ Sección Contacto (Formulario)     │ 🟡    │ ⏳      │
│ 008  │ Descargas CV (PDF/HTML)            │ 🟡    │ ⏳      │
│ 009  │ Navegación (NavBar + Router)       │ 🔴    │ ⏳      │
│ 010  │ Footer + SEO                       │ 🟡    │ ⏳      │
│ 011  │ Testing & Coverage                 │ 🟡    │ ⏳      │
│ 012  │ Backend Ready (API Interfaces)    │ 🟡    │ ⏳      │
│ 013  │ CI/CD y Deployment                 │ 🔴    │ ⏳      │
└──────┴────────────────────────────────────┴───────┴─────────┘

Leyenda: 🔴 Alta | 🟡 Media | 🟢 Baja | ✅ Done | ⏳ Not Started
```

---

## 📊 Desglose de Tareas (73 total)

```
Setup & Foundation (14 tareas)
├── TASK-001-1 to 001-7      ← Setup Vite, Tailwind, etc
└── TASK-002-1 to 002-7      ← Componentes base

Core UI (14 tareas)
├── TASK-003-1 to 003-7      ← Hero component
├── TASK-004-1 to 004-7      ← Projects carousel
└── TASK-009-1 to 009-6      ← NavBar + Router

Content (16 tareas)
├── TASK-005-1 to 005-5      ← Stack técnico
├── TASK-006-1 to 006-5      ← Experience timeline
└── TASK-007-1 to 007-5      ← Contact form

Details (9 tareas)
├── TASK-008-1 to 008-4      ← CV downloads
└── TASK-010-1 to 010-5      ← Footer + SEO

Quality (10 tareas)
├── TASK-011-1 to 011-5      ← Testing
└── TASK-012-1 to 012-5      ← Backend ready

Deployment (5 tareas)
└── TASK-013-1 to 013-5      ← CI/CD + Deploy

═══════════════════════════════════════════
Total: 73 tareas | ~32 horas | 6 fases
```

---

## 🚀 Flujo de Datos Típico

```
┌──────────────────────────────────────────────────────────────┐
│ 1. Usuario visita portfolio en navegador                    │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│ 2. React renderiza App.tsx → Home Page                      │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│ 3. Projects component monta y hace useEffect                │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│ 4. Llama portfolioUseCase.getProjects()                     │
└──────────────────────────┬───────────────────────────────────┘
                           │ (APPLICATION LAYER)
┌──────────────────────────▼───────────────────────────────────┐
│ 5. PortfolioUseCase consulta infraestructure                │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│ 6a. Hoy: mockProjects devuelve datos                        │
│ 6b. Futuro: API client devuelve datos de backend            │
└──────────────────────────┬───────────────────────────────────┘
                           │ (INFRASTRUCTURE LAYER)
┌──────────────────────────▼───────────────────────────────────┐
│ 7. Domain services procesan datos (filtros, sorting)        │
└──────────────────────────┬───────────────────────────────────┘
                           │ (DOMAIN LAYER)
┌──────────────────────────▼───────────────────────────────────┐
│ 8. Application retorna datos al componente                  │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────────┐
│ 9. Component renderiza ProjectCard para cada proyecto       │
└──────────────────────────┬───────────────────────────────────┘
                           │ (PRESENTATION LAYER)
┌──────────────────────────▼───────────────────────────────────┐
│ 10. Usuario ve proyectos en pantalla ✨                     │
└──────────────────────────────────────────────────────────────┘
```

---

## 📱 Responsive Design Secciones

```
            DESKTOP (1920px)    |  TABLET (768px)  |  MOBILE (375px)
────────────────────────────────┼──────────────────┼──────────────────
Hero        2 cols (50/50)       │  1 col stack     │  1 col stack
Projects    3 cards/row          │  2 cards/row     │  1 card full
Stack       4 categorías inline  │  2x2 grid        │  1 col stack
Experience  Vertical timeline    │  Vertical        │  Vertical
Contact     2 cols               │  1 col           │  1 col
NavBar      Horizontal           │  Horizontal      │  Mobile drawer
```

---

## 🎨 Color System

```
Primary:         #4cd7f6  (Cyan)          ← CTAs, highlights
Secondary:       #94de2d  (Lime)          ← Success, badges
Tertiary:        #c0c1ff  (Purple)        ← Accents

Background:      #0b1326  (Dark Navy)     ← Surface base
Surface:         #171f33                  ← Cards
Surface High:    #222a3d  (Lighter)       ← Hover states
On-Surface:      #dae2fd  (Light Text)    ← Text principal
On-Surface Var:  #bcc9cd  (Gray Text)     ← Secondary text

Error:           #ffb4ab  (Red)           ← Validations
```

---

## ⚡ Performance Targets

```
Metric              Target      Cómo medir
────────────────────────────────────────────
Lighthouse Score    >90         PageSpeed Insights
FCP (First Paint)   <1s        Chrome DevTools
LCP (Largest Paint) <2.5s      Chrome DevTools
CLS (Layout Shift)  <0.1       Chrome DevTools
Test Coverage       >70%        npm run test:coverage
Bundle Size         <250KB      npm run build
```

---

## 🔐 Seguridad & Privacidad

```
✅ Implementado
- HTTPS (desde hosting)
- CSP headers (desde server config)
- No almacenar datos sensibles en localStorage
- Sanitizar inputs en formularios

🔄 Futuro (post v2.0)
- Rate limiting en API
- CSRF tokens
- Email verification
- Captcha en contact form
```

---

## 📈 Métricas de Éxito

```
✓ Código
  - TypeScript 100% tipado (0 any)
  - ESLint clean
  - Prettier formatted
  - >70% test coverage
  
✓ Rendimiento
  - Lighthouse >90
  - Bundle <250KB
  - LCP <2.5s
  
✓ UX
  - Accesible (WCAG AA)
  - Responsive (mobile-first)
  - Dark mode funcional
  
✓ DevOps
  - CI/CD automático
  - Deploy en <2 min
  - 0 manual steps
```

---

## 🎉 Proyecto Completado Vs Hoy

```
HOY (v1.0)                         FUTURO (v2.0)
────────────────────────────────────────────────────────
HTML vanilla                       React + TypeScript ✨
CSS vanilla + Tailwind CDN         Tailwind + CSS modules
JavaScript vanilla                 TypeScript strict
Sin tests                          >70% coverage ✨
Sin linting                        ESLint + Prettier ✨
Manual deploy                      GitHub Actions CI/CD ✨
No escalable                       DDD arquitectura ✨
No modularizado                    Completamente modular ✨
No TypeScript                      100% TypeScript ✨
Archivo único                      Estructura escalable ✨
Backend ready: No                  Backend ready: Sí ✨
```

---

## 🚦 Estado Actual

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ESTADO: 🟡 PLANIFICACIÓN        ┃
┃  COMPLETADA                       ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  ✅ Documentación (100%)          ┃
┃  ✅ User Stories (100%)           ┃
┃  ✅ Tasks (100%)                  ┃
┃  ✅ Architecture (100%)           ┃
┃  ✅ Setup guide (100%)            ┃
┃  ✅ GitHub setup (100%)           ┃
┃                                   ┃
┃  ⏳ Proyecto Vite (0%)            ┃
┃  ⏳ Componentes (0%)              ┃
┃  ⏳ Secciones (0%)                ┃
┃  ⏳ Testing (0%)                  ┃
┃  ⏳ Deploy (0%)                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

🎯 Próximo paso: Empezar TASK-001-1
```

---

## 📞 Quick Links

| Recurso | Ubicación |
|---------|-----------|
| 📖 Documentación | `docs/INDEX.md` |
| 🚀 Inicio Rápido | `docs/INICIO_RAPIDO.md` |
| 📋 User Stories | `docs/USER_STORIES.md` |
| 📝 Tareas | `docs/TASKS.md` |
| 🛠️ Setup Dev | `docs/DEVELOPMENT.md` |
| 🏗️ Arquitectura | `docs/MODULARIZATION.md` |

---

**¡Todo está listo para empezar! 🚀**

Próximo paso: Lee `docs/INICIO_RAPIDO.md`

