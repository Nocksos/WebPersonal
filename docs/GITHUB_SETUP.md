# 📤 Guía: Subir Proyecto a GitHub

**Objetivo:** Completar configuración del repositorio y subir documentación + plan de trabajo

---

## ✅ Requisitos Previos

- [ ] Cuenta en GitHub (si no tienes, crear una)
- [ ] Git instalado en tu máquina
- [ ] VS Code con extensión GitHub Copilot (tienes)

---

## 📋 Opción A: Si NO tienes repositorio GitHub todavía

### Paso 1: Crear Repositorio en GitHub

1. Ir a [github.com/new](https://github.com/new)
2. Llenar:
   - **Repository name:** `web-personal` (o tu nombre)
   - **Description:** "Portfolio profesional - React + TypeScript"
   - **Public / Private:** Público (para que vean tu trabajo)
   - ❌ NO inicializar con README (ya tienes uno)
3. Click "Create repository"

### Paso 2: Configurar Git Localmente

```bash
cd c:\Proyectos\WebPersonal

# Inicializar git (si no lo está)
git init

# Configurar usuario (una sola vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Verificar
git config --global user.name
git config --global user.email
```

### Paso 3: Añadir Remoto

```bash
# Reemplaza USERNAME con tu usuario de GitHub
git remote add origin https://github.com/USERNAME/web-personal.git

# Verificar
git remote -v
# Debe mostrar:
# origin  https://github.com/USERNAME/web-personal.git (fetch)
# origin  https://github.com/USERNAME/web-personal.git (push)
```

### Paso 4: Crear Rama Main y Commit Inicial

```bash
# Renombrar a main si no lo está
git branch -M main

# Agregar todos los archivos
git add .

# Commit
git commit -m "docs: add project setup and user stories

- Add USER_STORIES.md with 13 user stories
- Add TASKS.md with 73 tasks
- Add DEVELOPMENT.md with setup guide
- Add MODULARIZATION.md with architecture
- Add RESUMEN_EJECUTIVO.md summary
- Project ready for React migration"

# Push a main
git push -u origin main
```

### Paso 5: Verificar en GitHub

1. Ir a [github.com/USERNAME/web-personal](https://github.com/USERNAME/web-personal)
2. Verificar que se vea:
   - Archivos y carpetas
   - Documentación en `/docs`
   - README.md

✅ **¡Repositorio creado!**

---

## 📋 Opción B: Si YA tienes repositorio GitHub

### Paso 1: Conectar remoto existente

```bash
cd c:\Proyectos\WebPersonal

# Ver remoto actual (si lo hay)
git remote -v

# Si no hay remote, añadir
git remote add origin https://github.com/USERNAME/web-personal.git

# Si remote ya existe pero está mal, actualizarlo
git remote set-url origin https://github.com/USERNAME/web-personal.git
```

### Paso 2: Push de documentación nueva

```bash
# Crear rama para cambios
git checkout -b docs/v2-planning

# Agregar nuevos archivos de documentación
git add docs/USER_STORIES.md docs/TASKS.md docs/DEVELOPMENT.md docs/MODULARIZATION.md docs/RESUMEN_EJECUTIVO.md

# Commit
git commit -m "docs: add v2 planning and architecture

- 13 user stories with definition of done
- 73 tasks with estimations
- Development guide and setup instructions
- DDD architecture explanation
- Executive summary"

# Push
git push origin docs/v2-planning

# Crear Pull Request en GitHub
# GitHub te mostrará link a crear PR automáticamente
```

### Paso 3: Merge a Main

1. Ir a GitHub → Pull Requests
2. Click en tu PR
3. Click "Merge pull request"
4. Confirmar

```bash
# Actualizar local
git checkout main
git pull origin main
```

✅ **¡Cambios mergeados!**

---

## 🎯 Configurar GitHub Project Board

### Crear Project para Tracking

1. En tu repo de GitHub → "Projects"
2. Click "New project"
3. Nombre: "Portfolio v2.0 Development"
4. Template: "Table" o "Board"
5. Create project

### Estructura del Board

```
📋 Status
├── Backlog      (Nuevas tareas)
├── Todo         (Listas para empezar)
├── In Progress  (Siendo trabajadas)
├── In Review    (En PR review)
└── Done         (Completadas)
```

### Llenar el Board

1. Click "Add item"
2. Crear tareas basadas en TASKS.md
3. Asignar por fase:
   - Fase 1: TASK-001-1 hasta TASK-002-7
   - Fase 2: TASK-003-1 hasta TASK-009-6
   - etc.

**Ejemplo de tarea:**
```
Title: TASK-001-1: Create Vite project with React + TypeScript
Description: npm create vite@latest . -- --template react-ts
Status: Backlog
Labels: setup, phase-1, high-priority
```

---

## 📁 Crear Estructura de Ramas

### Ramas Principales

```bash
# Ya tienes main

# Crear develop (integración)
git checkout -b develop
git push origin develop

# Configurar GitHub para proteger main
# Repo Settings → Branches → Add rule
# Branch name: main
#   ✓ Require pull request reviews before merging
#   ✓ Require branches to be up to date
```

### Convención para Feature Branches

```
feature/us-001-setup-react
feature/us-002-design-system
feature/us-003-hero-section
...
```

### Workflow

```bash
# 1. Partir de develop
git checkout develop
git pull origin develop

# 2. Crear rama feature
git checkout -b feature/us-001-setup-react

# 3. Hacer cambios, commits
git add .
git commit -m "feat(us-001): setup vite react typescript"

# 4. Push
git push origin feature/us-001-setup-react

# 5. En GitHub: Create Pull Request
# - Contra develop
# - Descripción detallada
# - Relacionar Issue si existe

# 6. Merge en GitHub
# 7. Actualizar local
git checkout develop
git pull origin develop
```

---

## 🏷️ Configurar Issues y Labels

### Labels Recomendados

```
setup              (Setup inicial)
component          (Componente nuevo)
feature            (Nueva funcionalidad)
bug                (Correción)
documentation      (Docs)
testing            (Tests)
style              (Estilos/CSS)
refactor           (Refactoring)
performance        (Performance)
accessibility      (A11y)

high-priority      (🔴 Alta)
medium-priority    (🟡 Media)
low-priority       (🟢 Baja)

phase-1            (Fase 1)
phase-2            (Fase 2)
...
```

### Crear Issues para cada US

```
Title: US-001: Migration Base - Setup React + TypeScript
Description:
... (copiar de USER_STORIES.md)

Labels: setup, high-priority, phase-1
Milestone: v2.0
Assignee: (tu usuario)
```

---

## 📝 Crear CONTRIBUTING.md

Crear archivo `CONTRIBUTING.md`:

```markdown
# Contribuyendo a este Proyecto

## Flujo de Trabajo

1. Fork del repo (si eres colaborador externo)
2. Crear rama feature: `git checkout -b feature/us-xxx`
3. Hacer cambios y commits
4. Push a rama
5. Crear Pull Request
6. Review y merge

## Convenciones de Commit

```
feat: nueva funcionalidad
fix: correción de bug
docs: cambios en documentación
style: cambios que no afectan código
refactor: cambio de estructura
test: agregar/actualizar tests
chore: tareas de mantenimiento

Ejemplo:
feat(hero): add animated stat counters
```

## Convenciones de Código

- TypeScript tipado (0 any)
- ESLint + Prettier
- Tests para nuevas features
- Documentar cambios significativos

## Preguntas?

Abrir Issue en el repo.
```

---

## 🚀 Configurar GitHub Actions (Básico)

### Crear `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run linting
      run: npm run lint

    - name: Run build
      run: npm run build

    # Después de TASK-011: agregar tests
    # - name: Run tests
    #   run: npm run test
```

Workflow básico para ahora (solo verificar que compila).

---

## ✅ Checklist Final

### Antes de empezar el desarrollo:

- [ ] Repositorio en GitHub creado/actualizado
- [ ] main branch protegida (require PR reviews)
- [ ] develop branch creada
- [ ] Documentación pusheada (docs/*.md)
- [ ] PROJECT BOARD creado
- [ ] CONTRIBUTING.md creado
- [ ] GitHub Actions workflow básico creado
- [ ] .gitignore configurado para Node.js
- [ ] README.md actualizado
- [ ] First issue/milestone creado

### Verificación:

```bash
# Desde tu terminal local
git remote -v
git branch -a
git log --oneline | head -5

# Debe mostrar:
# origin URLs correctas
# ramas main y develop
# commits recientes
```

---

## 🎯 Siguiente Paso: Empezar Desarrollo

Cuando tengas todo en GitHub:

1. Crear rama: `git checkout -b feature/us-001-setup-react`
2. Ejecutar: `npm create vite@latest . -- --template react-ts`
3. Seguir DEVELOPMENT.md
4. Commit y Push regularmente
5. Crear PR cuando termines US
6. Merge a develop
7. Repetir con siguiente US

---

## 📞 Troubleshooting

### "permission denied (publickey)"
```bash
# Configurar SSH (recomendado)
ssh-keygen -t ed25519 -C "tu@email.com"
# Copiar key pública a GitHub Settings → SSH Keys
```

### "fatal: not a git repository"
```bash
cd c:\Proyectos\WebPersonal
git init
```

### "Your branch is behind origin"
```bash
git pull origin main
```

### "Cannot push to protected branch"
```bash
# Es normal en main
# Crear PR desde otra rama en su lugar
git checkout -b feature/something
# hacer cambios
git push origin feature/something
# Crear PR en GitHub
```

---

## 🎉 ¡Listo!

Tu proyecto está organizado y listo para:
- ✅ Colaboración en GitHub
- ✅ Tracking de progreso
- ✅ CI/CD automático (después)
- ✅ Desarrollo profesional

**Próximo paso: Comenzar TASK-001** 🚀

