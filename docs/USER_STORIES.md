# Historias de Usuario - Portfolio Profesional v2.0 (React + TypeScript)

**Versión:** 2.0  
**Estado:** Planificación  
**Última actualización:** Mayo 2026  
**Stack:** React 18+ | TypeScript 5+ | Vite | TailwindCSS | Zustand/Context API

---

## US-001: Migración Base - Configurar Proyecto React + TypeScript

**Como** desarrollador  
**Quiero** tener un proyecto React moderno y escalable  
**Para que** pueda construir componentes reutilizables y mantener el código limpio

### Descripción Detallada
Configurar un nuevo proyecto React con TypeScript, Vite como bundler, Tailwind CSS, y estructura de carpetas modular basada en DDD (Domain-Driven Design).

### Definition of Done
- [ ] Proyecto Vite + React 18+ + TypeScript configurado
- [ ] Tailwind CSS integrado y funcionando
- [ ] ESLint + Prettier configurados
- [ ] Estructura de carpetas DDD implementada:
  - `src/domain/` - Lógica de negocio pura
  - `src/application/` - Casos de uso
  - `src/infrastructure/` - Servicios externos
  - `src/presentation/` - Componentes UI
  - `src/shared/` - Utilidades compartidas
- [ ] Variables de entorno configuradas
- [ ] Scripts de build y dev funcionando
- [ ] `.gitignore` y archivos de configuración en GitHub
- [ ] README.md con instrucciones de setup

### Aceptación de Criterios
```
DADO que abro el proyecto en VS Code
CUANDO ejecuto `npm run dev`
ENTONCES la aplicación inicia en http://localhost:5173
Y veo el mensaje "React + TypeScript + Tailwind working"
```

### Tareas Asociadas
- TASK-001-1: Crear proyecto con `npm create vite@latest`
- TASK-001-2: Instalar dependencias (React, TypeScript, Tailwind)
- TASK-001-3: Configurar ESLint y Prettier
- TASK-001-4: Crear estructura de carpetas DDD
- TASK-001-5: Configurar variables de entorno
- TASK-001-6: Crear README y docs iniciales
- TASK-001-7: Inicializar repositorio Git y GitHub

---

## US-002: Componentes Base - Sistema de Diseño (Design System)

**Como** desarrollador  
**Quiero** tener componentes reutilizables consistentes  
**Para que** mantenga la coherencia visual y de código en toda la aplicación

### Descripción Detallada
Crear una librería de componentes base reutilizables (Button, Card, Input, Badge, etc.) con TypeScript y Tailwind CSS. Todos deben seguir el tema de color actual (cyan/lime dark mode).

### Definition of Done
- [ ] Componentes base creados:
  - `Button.tsx` (variantes: primary, secondary, tertiary)
  - `Card.tsx` (variantes simples y con header/footer)
  - `Input.tsx` (tipos: text, email, password)
  - `Badge.tsx` (variantes de estado)
  - `Terminal.tsx` (componente terminal estilado)
  - `SkillBadge.tsx` (badges de tecnologías)
- [ ] Props TypeScript tipadas correctamente
- [ ] Colores consistentes con el sistema de diseño
- [ ] Componentes documentados con historias (Storybook opcional para futura)
- [ ] Ejemplos de uso en archivos .stories.tsx

### Aceptación de Criterios
```
DADO que importo Button desde @components
CUANDO renderizo <Button variant="primary">Click</Button>
ENTONCES aparece un botón con estilo primary y es clickeable
```

### Tareas Asociadas
- TASK-002-1: Crear estructura de componentes base
- TASK-002-2: Implementar Button.tsx con variantes
- TASK-002-3: Implementar Card.tsx
- TASK-002-4: Implementar Input.tsx y Forms
- TASK-002-5: Implementar Badge.tsx y SkillBadge.tsx
- TASK-002-6: Implementar Terminal.tsx
- TASK-002-7: Crear archivo de tema y colores centralizados

---

## US-003: Sección Hero - Landing Page Principal

**Como** visitante  
**Quiero** ver una sección principal impactante con información sobre el desarrollador  
**Para que** entienda de qué se trata el portfolio en los primeros segundos

### Descripción Detallada
Implementar la sección Hero con:
- Presentación del nombre/marca
- Tagline y descripción profesional
- Stats animados (años, proyectos, tecnologías)
- Terminal simulado con información técnica
- CTAs (Ver Proyectos, Contactar)
- Decoraciones visuales (grid, glow effects)

### Definition of Done
- [ ] Componente Hero.tsx creado
- [ ] Animaciones de entrada (fade-in, stagger)
- [ ] Stats contadores animados con IntersectionObserver
- [ ] Terminal component integrado
- [ ] CTAs linkean a secciones correspondientes
- [ ] Responsive en mobile/tablet/desktop
- [ ] Datos personalizables (nombre, tagline, stats)
- [ ] SEO tags correctos

### Aceptación de Criterios
```
DADO que cargo la página
CUANDO veo la sección Hero
ENTONCES:
  - Se ven las animaciones de entrada suave
  - Los contadores animan del 0 al valor final
  - El terminal muestra información técnica
  - Los botones funcionan correctamente
  - Se ve correctamente en mobile
```

### Tareas Asociadas
- TASK-003-1: Crear componente Hero.tsx
- TASK-003-2: Implementar animaciones de entrada
- TASK-003-3: Crear contador animado reutilizable
- TASK-003-4: Integrar Terminal.tsx
- TASK-003-5: Implementar decoraciones (grid, glows)
- TASK-003-6: Hacer responsive
- TASK-003-7: Crear datos mock para Hero

---

## US-004: Sección Proyectos - Carrusel Interactivo

**Como** visitante  
**Quiero** ver todos los proyectos en un carrusel interactivo  
**Para que** explore de forma intuitiva los trabajos realizados

### Descripción Detallada
Implementar carrusel de proyectos con:
- Grid/carrusel responsive
- Tarjetas de proyecto con imagen, descripción, tecnologías
- Badges de estado (LIVE DEMO, EN PROCESO, PRIVADO)
- Links a demo en vivo y código en GitHub
- Navegación (flechas, dots)
- Hover effects y transiciones suaves

### Definition of Done
- [ ] Componente ProjectCard.tsx creado
- [ ] Componente ProjectCarousel.tsx con navegación
- [ ] Datos de proyectos tipados (interface Project)
- [ ] Estados visuales (hover, active, disabled)
- [ ] Responsive (1, 2, 3 columnas según viewport)
- [ ] Links internos a detalles de proyecto (futura)
- [ ] Performance optimizado (lazy loading de imágenes)
- [ ] Accesible (ARIA labels, keyboard navigation)

### Aceptación de Criterios
```
DADO que veo la sección Proyectos
CUANDO navego por las tarjetas
ENTONCES:
  - Veo 3 proyectos en desktop, 2 en tablet, 1 en mobile
  - Puedo hacer clic en DEMO y CÓDIGO
  - Hay transiciones suaves
  - Las imágenes cargan sin distorsión
```

### Tareas Asociadas
- TASK-004-1: Crear tipos TypeScript para Project
- TASK-004-2: Crear componente ProjectCard.tsx
- TASK-004-3: Crear componente ProjectCarousel.tsx
- TASK-004-4: Implementar navegación (flechas, dots, keyboard)
- TASK-004-5: Implementar responsive design
- TASK-004-6: Optimizar imágenes y lazy loading
- TASK-004-7: Crear datos mock de proyectos

---

## US-005: Sección Stack Técnico - Tecnologías

**Como** visitante/reclutador  
**Quiero** ver claramente qué tecnologías domina el desarrollador  
**Para que** sepa si sus skills coinciden con lo que buscamos

### Descripción Detallada
Mostrar stack técnico categorizado por:
- Frontend (React, TypeScript, Tailwind, etc.)
- Backend (Node.js, Python, etc.)
- DevOps/Cloud (Docker, Kubernetes, AWS, etc.)
- Herramientas (Git, GitHub, etc.)

### Definition of Done
- [ ] Componente Stack.tsx creado
- [ ] Stack categorizado por áreas
- [ ] Iconos/badges para cada tecnología
- [ ] Datos centralizados en `domain/entities/`
- [ ] Responsive y con buena presentación
- [ ] Animaciones sutiles
- [ ] Accesible

### Aceptación de Criterios
```
DADO que veo la sección Stack
CUANDO observo las categorías
ENTONCES veo organizadas: Frontend, Backend, DevOps, Herramientas
```

### Tareas Asociadas
- TASK-005-1: Crear tipos para Stack y SkillCategory
- TASK-005-2: Crear componente Stack.tsx
- TASK-005-3: Crear componente SkillGroup.tsx
- TASK-005-4: Implementar datos del stack
- TASK-005-5: Añadir iconos de tecnologías

---

## US-006: Sección Experiencia - Timeline Profesional

**Como** visitante  
**Quiero** ver la experiencia profesional del desarrollador  
**Para que** conozca su trayectoria y evolución

### Descripción Detallada
Timeline vertical mostrando:
- Posiciones/empleos
- Fechas
- Descripción de responsabilidades
- Logros
- Tecnologías utilizadas

### Definition of Done
- [ ] Componente Timeline.tsx creado
- [ ] Componente TimelineEntry.tsx
- [ ] Datos tipados (interface Experience)
- [ ] Timeline visual con línea conectora
- [ ] Responsive (horizontal en mobile, vertical en desktop)
- [ ] Animaciones al scroll
- [ ] Accesible

### Aceptación de Criterios
```
DADO que veo la sección Experiencia
CUANDO desplazo hacia abajo
ENTONCES aparecen las experiencias con animación
Y veo los detalles claramente
```

### Tareas Asociadas
- TASK-006-1: Crear tipos para Experience y Timeline
- TASK-006-2: Crear componente Timeline.tsx
- TASK-006-3: Crear componente TimelineEntry.tsx
- TASK-006-4: Implementar datos de experiencia
- TASK-006-5: Implementar animaciones

---

## US-007: Sección Contacto - Formulario y Datos de Contacto

**Como** visitante interesado  
**Quiero** contactar con el desarrollador fácilmente  
**Para que** podamos discutir oportunidades

### Descripción Detallada
Sección con:
- Datos de contacto directo (email, teléfono, LinkedIn, GitHub, Twitter)
- Formulario de contacto (nombre, email, mensaje)
- Validación cliente y servidor (futura integración backend)
- Links a redes sociales
- Copiar email al portapapeles

### Definition of Done
- [ ] Componente Contact.tsx creado
- [ ] Componente ContactForm.tsx con validación
- [ ] Links a redes sociales funcionales
- [ ] Form submitible (backend ready)
- [ ] Mensajes de validación claros
- [ ] Estados de loading/success/error
- [ ] Responsive y accessible

### Aceptación de Criterios
```
DADO que voy a la sección Contacto
CUANDO completo el formulario y presiono enviar
ENTONCES veo un mensaje de éxito
Y se prepara para enviar datos a backend
```

### Tareas Asociadas
- TASK-007-1: Crear componente Contact.tsx
- TASK-007-2: Crear componente ContactForm.tsx
- TASK-007-3: Implementar validación con Zod o similar
- TASK-007-4: Crear Social Links component
- TASK-007-5: Preparar hooks para API calls (sin backend aún)
- TASK-007-6: Implementar copiar email al portapapeles

---

## US-008: Descargas - CV en múltiples formatos

**Como** visitante  
**Quiero** descargar el CV en PDF o HTML  
**Para que** lo guarde localmente

### Descripción Detallada
Proporcionar descargas de CV:
- Descarga de PDF pre-generado
- Descarga de HTML con estilos
- Botones en Hero y Footer
- Servicio centralizado para gestionar descargas

### Definition of Done
- [ ] Servicio DownloadService.ts creado
- [ ] Archivos CV en assets/
- [ ] Botones de descarga funcionales
- [ ] Tracking de descargas (opcional)
- [ ] Responsive y accessible

### Aceptación de Criterios
```
DADO que hago clic en descargar CV
CUANDO elijo formato PDF o HTML
ENTONCES se descarga el archivo correctamente
```

### Tareas Asociadas
- TASK-008-1: Crear servicio DownloadService.ts
- TASK-008-2: Preparar archivos CV (PDF y HTML)
- TASK-008-3: Crear componente Download Button
- TASK-008-4: Implementar descargas en Hero y Footer

---

## US-009: Navegación Principal - NavBar y Router

**Como** visitante  
**Quiero** navegar fácilmente entre secciones  
**Para que** encuentre la información que necesito

### Descripción Detallada
NavBar sticky con:
- Logo/marca
- Links a secciones principales
- Smooth scroll
- Menu móvil (hamburguesa)
- Indicador de sección activa
- CTA primario (Contactar)

### Definition of Done
- [ ] Componente NavBar.tsx creado
- [ ] React Router configurado
- [ ] Links smooth scroll o router links
- [ ] Mobile menu funcional
- [ ] Indicador de sección activa
- [ ] Sticky top con glassmorphism
- [ ] Responsive

### Aceptación de Criterios
```
DADO que veo la NavBar
CUANDO hago clic en un link
ENTONCES se desplaza/navega suavemente a esa sección
```

### Tareas Asociadas
- TASK-009-1: Configurar React Router
- TASK-009-2: Crear componente NavBar.tsx
- TASK-009-3: Crear componente MobileMenu.tsx
- TASK-009-4: Implementar smooth scroll / router
- TASK-009-5: Implementar indicador de sección activa
- TASK-009-6: Hacer responsive

---

## US-010: Footer y Meta - Información y SEO

**Como** desarrollador  
**Quiero** tener un footer profesional y SEO optimizado  
**Para que** mejore el posicionamiento y se vea completo

### Descripción Detallada
- Footer con links, copyright, redes sociales
- Meta tags para SEO
- Open Graph para compartir en redes
- Favicon
- Structured data (JSON-LD)

### Definition of Done
- [ ] Componente Footer.tsx creado
- [ ] Meta tags en index.html
- [ ] Open Graph configurado
- [ ] Favicon agregado
- [ ] JSON-LD schema implementado
- [ ] Lighthouse score > 90

### Aceptación de Criterios
```
DADO que comparto el portfolio en redes
CUANDO se muestra la preview
ENTONCES se ve correctamente con imagen y descripción
```

### Tareas Asociadas
- TASK-010-1: Crear componente Footer.tsx
- TASK-010-2: Configurar meta tags
- TASK-010-3: Agregar favicon
- TASK-010-4: Implementar Open Graph
- TASK-010-5: Agregar JSON-LD schema

---

## US-011: Testing - Cobertura de Tests

**Como** desarrollador  
**Quiero** tener tests en componentes y servicios  
**Para que** evite bugs y tenga confianza en cambios

### Descripción Detallada
- Setup de testing framework (Vitest)
- Tests unitarios para componentes
- Tests de integración para servicios
- Coverage > 70%

### Definition of Done
- [ ] Vitest + React Testing Library configurado
- [ ] Tests para componentes base (Button, Card, Input)
- [ ] Tests para servicios (DownloadService, etc.)
- [ ] Coverage > 70%
- [ ] CI/CD con tests automáticos

### Aceptación de Criterios
```
DADO que ejecuto `npm run test`
CUANDO terminan los tests
ENTONCES veo coverage > 70%
```

### Tareas Asociadas
- TASK-011-1: Configurar Vitest y React Testing Library
- TASK-011-2: Escribir tests para componentes base
- TASK-011-3: Escribir tests para servicios
- TASK-011-4: Configurar CI/CD con GitHub Actions
- TASK-011-5: Llegar a 70% coverage

---

## US-012: Integración Backend - API Ready

**Como** desarrollador  
**Quiero** preparar la aplicación para conectar backends  
**Para que** en futuro sea fácil integrar APIs reales

### Descripción Detallada
- Servicios en capa Application listos para APIs
- Environment config para endpoints
- Mock data para desarrollo
- Types para responses de API
- Error handling genérico

### Definition of Done
- [ ] Servicio HTTP client creado
- [ ] Interfaces para todas las APIs futuras
- [ ] Environment variables configuradas
- [ ] Mock data para desarrollo
- [ ] Error handling implementado
- [ ] Documentación de APIs futura

### Aceptación de Criterios
```
DADO que quiero conectar un API real
CUANDO reemplazo el mock por el endpoint real
ENTONCES la aplicación funciona sin cambios en componentes
```

### Tareas Asociadas
- TASK-012-1: Crear servicio HTTP client
- TASK-012-2: Crear types para APIs
- TASK-012-3: Crear mock data handlers
- TASK-012-4: Implementar error handling
- TASK-012-5: Documentar cómo conectar APIs

---

## US-013: Deployment - CI/CD y Hosting

**Como** desarrollador  
**Quiero** automatizar el deployment  
**Para que** los cambios se publiquen automáticamente

### Descripción Detallada
- Configurar GitHub Actions para CI/CD
- Build automático en cada push
- Deployment a hosting (Vercel, Netlify)
- Domain y SSL configurados
- Analytics (opcional)

### Definition of Done
- [ ] GitHub Actions workflow creado
- [ ] Build automático en cada push a main
- [ ] Tests corren antes de deploy
- [ ] Deployment a hosting configurado
- [ ] Domain apunta correctamente
- [ ] SSL/HTTPS funciona
- [ ] Lighthouse score mantenido

### Aceptación de Criterios
```
DADO que hago push a main
CUANDO GitHub Actions se ejecuta
ENTONCES la aplicación se deploya automáticamente
Y está disponible en el domain
```

### Tareas Asociadas
- TASK-013-1: Crear workflow GitHub Actions
- TASK-013-2: Configurar hosting (Vercel/Netlify)
- TASK-013-3: Configurar domain
- TASK-013-4: Setup SSL/HTTPS
- TASK-013-5: Configurar Analytics (opcional)

---

## Timeline Recomendado

| Fase | US | Timeline | Prioridad |
|------|----|----|-----------|
| **Fase 1: Setup** | US-001, US-002 | Semana 1 | 🔴 Alta |
| **Fase 2: Core** | US-003, US-004, US-009 | Semana 2-3 | 🔴 Alta |
| **Fase 3: Contenido** | US-005, US-006, US-007 | Semana 3-4 | 🟡 Media |
| **Fase 4: Polish** | US-008, US-010 | Semana 4 | 🟡 Media |
| **Fase 5: Testing** | US-011, US-012 | Semana 5 | 🟡 Media |
| **Fase 6: Deploy** | US-013 | Semana 6 | 🔴 Alta |

---

## Dependencias entre Historias

```
US-001 (Setup)
  ├── US-002 (Componentes Base) 
  │   ├── US-003 (Hero)
  │   ├── US-004 (Proyectos)
  │   ├── US-005 (Stack)
  │   ├── US-006 (Experiencia)
  │   └── US-007 (Contacto)
  ├── US-009 (NavBar/Router)
  └── US-010 (Footer/SEO)
  
US-008 (Descargas) → Puede ir en paralelo después de US-002
US-011 (Testing) → Después de US-002 y en paralelo con otras
US-012 (Backend Ready) → Después de US-002 y US-011
US-013 (Deployment) → Al final, después de US-001
```

---

## Notas Técnicas

- **Package Manager:** npm (mantener lock file)
- **Build Tool:** Vite (más rápido que Webpack)
- **CSS:** Tailwind + CSS modules/styled-components (decidir)
- **State Management:** Context API o Zustand (preferir Zustand por simplicidad)
- **API Calls:** Fetch API o Axios
- **Validation:** Zod para forms
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel o Netlify con GitHub Actions
- **Monitoring:** Opcional - Sentry para errores

