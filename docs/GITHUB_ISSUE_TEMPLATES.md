# 🐛 ISSUE TEMPLATES - Portfolio v2.0

**Propósito:** Plantillas de Issues para GitHub para User Stories y Tareas

---

## 📋 Cómo Usar

1. En GitHub → Issues → New Issue
2. Copiar contenido de la plantilla correspondiente
3. Rellenar [campos entre corchetes]
4. Submit

O criar archivo `.github/ISSUE_TEMPLATE/` automáticamente en GitHub.

---

## 🎯 Plantilla 1: Historia de Usuario

**Archivo:** `.github/ISSUE_TEMPLATE/user-story.md`

```markdown
---
name: User Story
about: Describe a new feature or capability
title: 'US-XXX: [Nombre de la Historia]'
labels: 'user-story,phase-X'
assignees: ''
---

## Descripción
[Copiar descripción de USER_STORIES.md]

## Aceptación de Criterios
```
DADO que [condición inicial]
CUANDO [acción del usuario]
ENTONCES [resultado esperado]
```

## Definition of Done
- [ ] Todos los criterios de aceptación cumplidos
- [ ] Código revisado
- [ ] Tests >70% coverage
- [ ] Documentación actualizada
- [ ] Merge a develop
- [ ] Deployable a producción

## Tareas Asociadas
- [ ] TASK-XXX-1: [descripción]
- [ ] TASK-XXX-2: [descripción]
- [ ] TASK-XXX-3: [descripción]

## Notas
[Contexto adicional si aplica]
```

---

## 📝 Plantilla 2: Tarea (Task)

**Archivo:** `.github/ISSUE_TEMPLATE/task.md`

```markdown
---
name: Task
about: Specific task within a user story
title: 'TASK-XXX-Y: [Descripción]'
labels: 'task,phase-X'
assignees: ''
---

## Historia de Usuario
Parte de US-XXX: [Nombre]

## Descripción
[Copiar descripción de TASKS.md]

## Estimación
[X horas]

## Checklist
- [ ] [Item 1 del checklist]
- [ ] [Item 2 del checklist]
- [ ] [Item 3 del checklist]

## Criterios de Aceptación
[Copiar de TASKS.md si aplica]

## Notas
[Links a documentación, referencias, etc.]
```

---

## 🐛 Plantilla 3: Bug Report

```markdown
---
name: Bug Report
about: Report a problem
title: 'bug: [Descripción breve]'
labels: 'bug'
assignees: ''
---

## Descripción
[Describe el bug claramente]

## Pasos para Reproducir
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

## Comportamiento Actual
[Qué está pasando]

## Comportamiento Esperado
[Qué debería pasar]

## Screenshots/Logs
[Si aplica]

## Entorno
- Browser: [Chrome/Firefox/Safari]
- OS: Windows/Mac/Linux
- Node version: [18+]

## Posible Solución
[Si tienes idea cómo arreglarlo]
```

---

## 📚 Plantilla 4: Documentación

```markdown
---
name: Documentation
about: Improve or add documentation
title: 'docs: [Tema]'
labels: 'documentation'
assignees: ''
---

## Tipo de Documento
- [ ] Nuevo documento
- [ ] Actualizar existente
- [ ] Corregir errores
- [ ] Añadir ejemplos

## Descripción
[Qué documentación falta o necesita mejora]

## Ubicación
[Dónde va: docs/[nombre].md]

## Contenido Sugerido
[Outline o contenido sugerido]

## Referencias
[Links a código, PRs, issues relacionadas]
```

---

## 🔧 Plantilla 5: Mejora/Refactor

```markdown
---
name: Enhancement
about: Suggest an improvement
title: 'enhancement: [Descripción]'
labels: 'enhancement'
assignees: ''
---

## Descripción
[Qué mejora se propone y por qué]

## Impacto
- [ ] Performance
- [ ] Mantenibilidad
- [ ] Escalabilidad
- [ ] Developer Experience

## Cambios Propuestos
[Qué cambiaría]

## Código Ejemplo
[Si aplica, mostrar cambio]

## Alternativas Consideradas
[Otras formas de hacerlo]

## Complejidad Estimada
- [ ] Low (1-2 horas)
- [ ] Medium (3-8 horas)
- [ ] High (>8 horas)
```

---

## 📊 Script: Crear Issues Automáticamente

Si quieres crear todos los Issues a la vez, puedes usar este script (GitHub CLI):

```bash
# Instalar GitHub CLI si no lo tienes
# https://cli.github.com

# US-001
gh issue create --title "US-001: Setup React + TypeScript" \
  --body "Descripción..." \
  --label "user-story,high-priority,phase-1" \
  --milestone "v2.0"

# Repetir para cada US...
```

O [usa esta herramienta web](https://github.com/gist) para bulk crear issues.

---

## 🏷️ Labels Recomendados

Crear estos labels en GitHub (Settings → Labels):

### Tipo de Issue
- `user-story` - Historia de usuario
- `task` - Tarea dentro de US
- `bug` - Bug report
- `documentation` - Docs
- `enhancement` - Mejora/feature

### Prioridad
- `high-priority` 🔴 - Blocker
- `medium-priority` 🟡 - Importante
- `low-priority` 🟢 - Puede esperar

### Fase
- `phase-1` - Setup
- `phase-2` - Core UI
- `phase-3` - Contenido
- `phase-4` - Detalles
- `phase-5` - Testing
- `phase-6` - Deploy

### Categoría de Código
- `component` - Componente nuevo
- `style` - CSS/Tailwind
- `feature` - Nueva funcionalidad
- `refactor` - Refactoring
- `test` - Tests/coverage
- `performance` - Performance

---

## 📋 Ejemplo Completo: Crear US-001 como Issue

```
Title: US-001: Migration Base - Setup React + TypeScript

Description:
==============

**Como** desarrollador
**Quiero** tener un proyecto React moderno y escalable
**Para que** pueda construir componentes reutilizables

## Descripción Detallada
Configurar nuevo proyecto React con TypeScript, Vite como bundler, 
Tailwind CSS, y estructura de carpetas modular basada en DDD.

## Criterios de Aceptación
```
DADO que abro el proyecto en VS Code
CUANDO ejecuto npm run dev
ENTONCES la aplicación inicia en http://localhost:5173
Y veo el mensaje "React + TypeScript + Tailwind working"
```

## Definition of Done
- [ ] Proyecto Vite + React 18+ + TypeScript configurado
- [ ] Tailwind CSS integrado
- [ ] ESLint + Prettier configurados
- [ ] Estructura DDD implementada
- [ ] Variables de entorno configuradas
- [ ] Scripts de build/dev funcionando
- [ ] GitHub + .gitignore
- [ ] README.md con setup

## Tareas Asociadas
- [ ] TASK-001-1: Crear proyecto Vite
- [ ] TASK-001-2: Instalar Tailwind
- [ ] TASK-001-3: ESLint/Prettier
- [ ] TASK-001-4: Estructura DDD
- [ ] TASK-001-5: Env vars
- [ ] TASK-001-6: Docs iniciales
- [ ] TASK-001-7: GitHub init

## Notas
Ver USER_STORIES.md para detalles completos.

Labels: user-story, high-priority, phase-1
Milestone: v2.0
Assignee: [tu usuario]
```

---

## 🔄 Flujo de Issues en GitHub

```
NEW (Inbox) 
    ↓
TRIAGE (Revisar, asignar label)
    ↓
READY (Listo para ser trabajado)
    ↓
IN PROGRESS (Asignado, siendo trabajado)
    ↓
IN REVIEW (PR creado, esperando review)
    ↓
MERGED (Merged a develop)
    ↓
CLOSED (Verificado y listo para producción)
```

---

## 📝 Checklist: GitHub Setup

- [ ] Crear labels en Settings
- [ ] Crear proyecto board
- [ ] Crear milestones (v2.0, v2.1, etc.)
- [ ] Crear ISSUE_TEMPLATE folder
- [ ] Copiar templates aquí
- [ ] Crear issue de cada US
- [ ] Crear issue de cada tarea importante
- [ ] Asignar a milestone/label correcto

---

## 🚀 Siguiente Paso

Una vez hayas setup los templates:

1. Crear US-001 como Issue en GitHub
2. Crear TASK-001-1 como Issue en GitHub
3. Asignar a ti mismo
4. Mover a "In Progress"
5. Comenzar trabajo

---

**Usa estos templates para mantener GitHub organizado y llevar track del progreso.** 📊

