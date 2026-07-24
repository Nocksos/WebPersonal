# Guía de Ejecución de Tareas y Control de Estados en GitHub

Esta guía contiene la secuencia exacta de comandos y acciones necesarias para avanzar la migración a **React + TypeScript** paso a paso, agrupados por **Historia de Usuario (US)**, sincronizando al mismo tiempo los estados de las issues en GitHub.

---

## 🛠️ Instrucciones de Uso

Para cada tarea realizaremos el siguiente flujo en la terminal (desde la raíz de `c:\Proyectos\WebPersonal`):

1. **Iniciar la tarea**: Ejecuta el comando para pasar el issue a **In Progress** en GitHub.
2. **Desarrollar**: Ejecuta los comandos de instalación o realiza los cambios de código indicados.
3. **Completar la tarea**: Ejecuta el comando para cerrar el issue y marcarlo como **Done** en GitHub.

> [!NOTE]
> Asegúrate de ejecutar `dotenv` o tener cargada la variable de entorno `GITHUB_TOKEN` en tu terminal para que `move-task.js` funcione.

---

## 📋 Lista Secuencial de Comandos por Historia de Usuario

### 🔹 US-000: Configuración Inicial del Proyecto React + TS

#### TASK-000-1: Inicializar proyecto Vite + React + TypeScript (Issue #156)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 156 in-progress
   ```
2. **Acciones de Desarrollo:**
   *(La carpeta `apps/portfolio-react` ya cuenta con la inicialización base, limpia los archivos por defecto si es necesario).*
3. **Marcar Done:**
   ```bash
   node move-task.js 156 done
   ```

#### TASK-000-2: Instalar y configurar TailwindCSS (Issue #157)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 157 in-progress
   ```
2. **Acciones de Desarrollo:**
   ```bash
   cd apps/portfolio-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   # Configura el tailwind.config.js y añade las directivas de tailwind a src/index.css
   cd ../..
   ```
3. **Marcar Done:**
   ```bash
   node move-task.js 157 done
   ```

#### TASK-000-3: Configurar ESLint y Prettier para TypeScript (Issue #158)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 158 in-progress
   ```
2. **Acciones de Desarrollo:**
   ```bash
   cd apps/portfolio-react
   npm install -D eslint prettier eslint-config-prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
   # Crea los ficheros .eslintrc.cjs y .prettierrc
   cd ../..
   ```
3. **Marcar Done:**
   ```bash
   node move-task.js 158 done
   ```

#### TASK-000-4: Configurar alias de importación (@) (Issue #159)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 159 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Configurar `paths` en `tsconfig.json` y los aliases en `vite.config.ts`.*
3. **Marcar Done:**
   ```bash
   node move-task.js 159 done
   ```

---

### 🔹 US-016: Migración de estructura HTML a componentes React

#### TASK-016-1: Crear componente Header (navbar fijo, responsive) (Issue #160)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 160 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/layout/Header.tsx` migrando el menú superior y lógica del menú hamburguesa.*
3. **Marcar Done:**
   ```bash
   node move-task.js 160 done
   ```

#### TASK-016-2: Crear componente MobileMenu (off-canvas) (Issue #161)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 161 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/layout/MobileMenu.tsx` y su animación de deslizamiento.*
3. **Marcar Done:**
   ```bash
   node move-task.js 161 done
   ```

#### TASK-016-3: Crear componente Hero (sección principal) (Issue #162)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 162 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/pages/Hero.tsx` con los contadores y el terminal bash simulado.*
3. **Marcar Done:**
   ```bash
   node move-task.js 162 done
   ```

#### TASK-016-4: Crear componente ProjectsCarousel (carrusel de proyectos) (Issue #163)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 163 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/common/ProjectsCarousel.tsx` y sus controles.*
3. **Marcar Done:**
   ```bash
   node move-task.js 163 done
   ```

#### TASK-016-5: Crear componente About (sección sobre mí) (Issue #164)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 164 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/pages/About.tsx` migrando el terminal con los detalles y las soft-skills.*
3. **Marcar Done:**
   ```bash
   node move-task.js 164 done
   ```

#### TASK-016-6: Crear componente TechStack (barras de progreso) (Issue #165)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 165 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/pages/TechStack.tsx` con la lógica de animación de las barras al hacer scroll.*
3. **Marcar Done:**
   ```bash
   node move-task.js 165 done
   ```

#### TASK-016-7: Crear componente Experience (tabs y timeline) (Issue #166)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 166 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/pages/Experience.tsx` gestionando los datos y cambio de pestañas.*
3. **Marcar Done:**
   ```bash
   node move-task.js 166 done
   ```

#### TASK-016-8: Crear componente CVDownload (descarga de CV) (Issue #167)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 167 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/pages/CVDownload.tsx` con el selector de formatos de descarga.*
3. **Marcar Done:**
   ```bash
   node move-task.js 167 done
   ```

#### TASK-016-9: Crear componente ContactForm (formulario de contacto) (Issue #168)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 168 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/common/ContactForm.tsx` con control local del formulario.*
3. **Marcar Done:**
   ```bash
   node move-task.js 168 done
   ```

#### TASK-016-10: Crear componente Footer (Issue #169)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 169 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/layout/Footer.tsx` e incluir la luz de estado parpadeante.*
3. **Marcar Done:**
   ```bash
   node move-task.js 169 done
   ```

#### TASK-016-11: Crear componente Layout que agrupe Header, main y Footer (Issue #170)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 170 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/layout/Layout.tsx` envolviendo los componentes e integrándolo en `App.tsx`.*
3. **Marcar Done:**
   ```bash
   node move-task.js 170 done
   ```

---

### 🔹 US-017: Implementación de TypeScript para Tipado Estático

#### TASK-017-1: Crear interfaces para los datos del portfolio (Issue #171)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 171 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/domain/types/index.ts` o `src/shared/types/index.ts` definiendo las interfaces para `Project`, `Skill`, `Experience`.*
3. **Marcar Done:**
   ```bash
   node move-task.js 171 done
   ```

#### TASK-017-2: Tipar todos los componentes con React.FC o interfaces de props (Issue #172)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 172 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Tipar props y retornos de todos los componentes creados en la fase de UI.*
3. **Marcar Done:**
   ```bash
   node move-task.js 172 done
   ```

#### TASK-017-3: Configurar `tsc --noEmit` en pre-commit hook (Issue #173)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 173 in-progress
   ```
2. **Acciones de Desarrollo:**
   ```bash
   cd apps/portfolio-react
   npm install -D husky lint-staged
   npx husky install
   # Configura lint-staged para ejecutar "tsc --noEmit" en los archivos .ts/.tsx
   cd ../..
   ```
3. **Marcar Done:**
   ```bash
   node move-task.js 173 done
   ```

---

### 🔹 US-018: Gestión de Estado con Redux Toolkit y TypeScript

#### TASK-018-1: Configurar store de Redux y slices (Issue #174)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 174 in-progress
   ```
2. **Acciones de Desarrollo:**
   ```bash
   cd apps/portfolio-react
   npm install @reduxjs/toolkit react-redux
   # Crear src/store/index.ts y src/store/slices/uiSlice.ts
   cd ../..
   ```
3. **Marcar Done:**
   ```bash
   node move-task.js 174 done
   ```

#### TASK-018-2: Crear hooks tipados useAppDispatch y useAppSelector (Issue #175)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 175 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/store/hooks.ts` definiendo y exportando `useAppDispatch` y `useAppSelector`.*
3. **Marcar Done:**
   ```bash
   node move-task.js 175 done
   ```

---

### 🔹 US-019: Integración de APIs con TypeScript y Zod

#### TASK-019-1: Implementar servicio de descarga de CV (PDF y HTML) (Issue #176)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 176 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/infrastructure/services/DownloadService.ts` migrando la lógica del script de descarga original.*
3. **Marcar Done:**
   ```bash
   node move-task.js 176 done
   ```

#### TASK-019-2: Crear servicio de envío de formulario de contacto (Issue #177)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 177 in-progress
   ```
2. **Acciones de Desarrollo:**
   ```bash
   cd apps/portfolio-react
   npm install zod
   # Crear src/infrastructure/services/ContactService.ts y el esquema Zod para validar campos
   cd ../..
   ```
3. **Marcar Done:**
   ```bash
   node move-task.js 177 done
   ```

---

### 🔹 US-020: Sistema de Pruebas con TypeScript

#### TASK-020-1: Configurar Jest/Vitest y Testing Library en el proyecto (Issue #178)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 178 in-progress
   ```
2. **Acciones de Desarrollo:**
   ```bash
   cd apps/portfolio-react
   npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
   # Configura vitest.config.ts y añade el script "test": "vitest" en package.json
   cd ../..
   ```
3. **Marcar Done:**
   ```bash
   node move-task.js 178 done
   ```

#### TASK-020-2: Escribir test para el componente Header (Issue #179)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 179 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/layout/Header.test.tsx` probando la visibilidad del navbar y apertura del menú.*
3. **Marcar Done:**
   ```bash
   node move-task.js 179 done
   ```

#### TASK-020-3: Escribir test para el carrusel de proyectos (Issue #180)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 180 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear `src/presentation/components/common/ProjectsCarousel.test.tsx` validando la navegación del carrusel.*
3. **Marcar Done:**
   ```bash
   node move-task.js 180 done
   ```

---

### 🔹 US-021: Migración de Estilos a Tailwind y Componentes Estilizados

#### TASK-021-1: Extraer colores y tipografías a configuración de Tailwind (Issue #181)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 181 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Portar colores de marca (`primary`, `secondary`, `surface`, etc.) e integrar tipografías externas a `tailwind.config.js`.*
3. **Marcar Done:**
   ```bash
   node move-task.js 181 done
   ```

#### TASK-021-2: Aplicar estilos de la terminal y las animaciones (Issue #182)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 182 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Agregar clases personalizadas para terminal y animaciones fade-up a `src/index.css`.*
3. **Marcar Done:**
   ```bash
   node move-task.js 182 done
   ```

---

### 🔹 US-022: Optimización de Assets y Rendimiento

#### TASK-022-1: Lazy load de componentes no visibles inicialmente (Issue #183)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 183 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Utilizar `React.lazy` y `Suspense` para la carga diferida de secciones secundarias del portafolio.*
3. **Marcar Done:**
   ```bash
   node move-task.js 183 done
   ```

---

### 🔹 Historias de Usuario Finales (Cierre de Épicas)

Las siguientes historias no tienen tareas hijas atómicas en GitHub, por lo que se gestionan y cierran directamente a nivel de Épica una vez completado el objetivo:

#### US-023: Mejoras de Accesibilidad y SEO (Issue #153)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 153 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Añadir etiquetas meta, optimizar el uso de etiquetas semánticas y probar la navegación por teclado.*
3. **Marcar Done:**
   ```bash
   node move-task.js 153 done
   ```

#### US-024: Despliegue Continuo en GitHub Pages o Vercel (Issue #154)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 154 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Crear workflow de GitHub Actions `.github/workflows/deploy.yml`.*
3. **Marcar Done:**
   ```bash
   node move-task.js 154 done
   ```

#### US-025: Documentación Completa del Proyecto (Issue #155)
1. **Marcar In Progress:**
   ```bash
   node move-task.js 155 in-progress
   ```
2. **Acciones de Desarrollo:**
   *Redactar el README.md final, detallar la instalación, la arquitectura del software y la guía de desarrollo.*
3. **Marcar Done:**
   ```bash
   node move-task.js 155 done
   ```
