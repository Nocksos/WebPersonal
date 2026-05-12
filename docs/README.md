# README — Cómo trabajar con este sistema de specs

## Estructura de archivos

```
src/portfolio.html          ← El portfolio (entry point dentro de `src/`) — puede mover a `src/presentation/pages/index.html` si se reestructura
src/                      ← Código fuente organizado por capas (DDD + clean architecture)
  ARCHITECTURE.md         ← Documentación de la arquitectura y guía para desarrolladores
docs/
  README.md              ← Este archivo (guidelines de colaboración y flujo)
  COMPONENTS.md          ← Inventario de todos los componentes reutilizables
  SPEC.md                ← Qué hace cada sección, pendientes, variables
  CHANGELOG.md           ← Registro de decisiones y cambios
```

---

## Cómo hacer una solicitud a la IA

### Prompt base (copia y adapta):

```
Lee los siguientes archivos antes de hacer cualquier cambio:
- specs/DESIGN.md (colores, tipografía, espaciado)
- specs/SPEC.md (estado actual de cada sección)
- specs/COMPONENTS.md (componentes ya existentes, no reinventarlos)

Tarea: [describe qué quieres hacer]

Restricciones:
- Mantén el aesthetic del DESIGN.md
- Reutiliza los componentes de COMPONENTS.md
- No rompas el comportamiento descrito en SPEC.md
- Al terminar, dime qué actualizaciones debo hacer en los specs
```

---

## Ejemplos de solicitudes bien formadas

### Añadir un proyecto nuevo al carrusel
```
Lee specs/SPEC.md sección 3.3 y specs/COMPONENTS.md sección C-03.
Añade una nueva card al carrusel con estos datos:
- Número: 04
- Nombre: Mi Nuevo Proyecto
- Descripción: Plataforma de gestión de inventario en tiempo real
- Estado: LIVE DEMO
- Tecnologías: React, Node.js, MongoDB
- Demo URL: https://...
- GitHub URL: https://...
- Imagen: usar placeholder por ahora (gradiente tertiary)
```

### Modificar la sección Hero
```
Lee specs/SPEC.md sección 3.2 y specs/DESIGN.md.
Actualiza el Hero con mi información real:
- Nombre en terminal: [tu nombre]
- Tagline H1: [tu tagline]
- Descripción: [tu descripción]
- Stats: [X] años / [Y] proyectos / [Z] tecnologías
- Stack en terminal: [lista real]
```

### Crear un componente nuevo
```
Lee specs/COMPONENTS.md completo para no duplicar nada.
Lee specs/DESIGN.md para respetar el sistema de colores.
Crea un modal de detalle para los proyectos del carrusel con:
- Overlay oscuro con click para cerrar
- Título, descripción larga
- Galería de imágenes (3-4 screenshots)
- Lista de features/logros
- Métricas si las hay (usuarios, performance...)
- Botones DEMO y CÓDIGO
Al terminar, añade el componente C-14 a COMPONENTS.md
```

### Arreglar un bug
```
Lee specs/SPEC.md para entender el comportamiento esperado.
Problema: [describe el bug]
Sección afectada: [sección]
Comportamiento esperado: [qué debería pasar]
Comportamiento actual: [qué está pasando]
No cambies nada más mientras arreglas esto.
```

---

## Flujo de trabajo recomendado

```
1. Decide qué quieres cambiar o añadir
2. Abre el prompt con "Lee specs/DESIGN.md, SPEC.md y COMPONENTS.md"
3. Describe la tarea con precisión
4. Revisa el resultado
5. Si está bien: pide a la IA que actualice los specs afectados
6. Guarda todo
```

**Regla de oro:** Si la IA genera algo y no actualizas los specs, la próxima sesión será inconsistente. Los specs son tan importantes como el código.

---

## Señales de que los specs necesitan actualización

- Añadiste o eliminaste una sección
- Cambiaste el comportamiento de un componente
- Tomaste una decisión de diseño no obvia
- Resolviste un problema que podría repetirse
- Completaste un pendiente de SPEC.md

---

## Comandos útiles de verificación

Cuando quieras saber el estado actual, pregunta a la IA:
```
Basándote en specs/SPEC.md, ¿qué pendientes quedan por resolver?
```
```
Revisa portfolio.html y compara con specs/COMPONENTS.md.
¿Hay algún componente en el HTML que no esté documentado?
```
```
¿Qué falta para tener el portfolio listo para publicar?
Basate en specs/SPEC.md sección "Pendientes" y sección 6 Assets.
```
