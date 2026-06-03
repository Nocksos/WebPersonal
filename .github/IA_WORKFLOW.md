# Instrucciones para la IA - Migración a React+TypeScript

## Objetivo
Migrar el portfolio estático (HTML/CSS/JS) a una aplicación React + TypeScript, siguiendo el backlog definido en GitHub Issues (US-000 a US-025). Cada tarea debe ser movida a través de los estados: **Todo → In Progress → In Review → Done**.

## Estados y cómo actualizarlos en GitHub
Usaremos etiquetas (labels) para indicar el estado:
- `status:in-progress`
- `status:in-review`
- `status:done`

Además, al terminar una tarea se **cerrará el issue** (lo que lo moverá a "Done" si el proyecto Kanban está configurado).

### Comandos que la IA proporcionará al usuario
La IA no puede ejecutar comandos directamente, pero **te dará el comando exacto** (curl o node) para que tú lo ejecutes en tu terminal.

#### Ejemplo: marcar una tarea como "In Progress"
```bash
node move-task.js <issue-number> in-progress

