const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuración
const REPO_OWNER = "Nocksos";
const REPO_NAME = "WebPersonal";
const TASK_STEPS_FILE = "tasks-steps.json";

// Leer pasos
const stepsMap = JSON.parse(fs.readFileSync(TASK_STEPS_FILE, 'utf8'));

// Obtener la siguiente tarea pendiente (por simplicidad, la definimos manualmente)
// En producción se podría obtener de GitHub API con etiqueta "status:todo"
const currentTask = process.argv[2]; // Ej: TASK-000-2
if (!currentTask) {
  console.error("Uso: node ia-executor.js <TASK-ID>");
  process.exit(1);
}

const steps = stepsMap[currentTask];
if (!steps) {
  console.error(`No hay pasos definidos para ${currentTask}`);
  process.exit(1);
}

console.log(`🚀 Ejecutando tarea ${currentTask}...`);

// Marcar como "in progress" en GitHub (usamos move-task.js)
try {
  execSync(`node move-task.js ${getIssueNumber(currentTask)} in-progress`, { stdio: 'inherit' });
} catch(e) { console.log("⚠️ No se pudo marcar in-progress, continuando..."); }

// Ejecutar cada paso
for (let i = 0; i < steps.length; i++) {
  const step = steps[i];
  console.log(`\n📌 Paso ${i+1}: ${step}`);
  try {
    execSync(step, { cwd: path.resolve(__dirname), stdio: 'inherit', shell: true });
  } catch (err) {
    console.error(`❌ Falló el paso ${i+1}. Abortando.`);
    process.exit(1);
  }
}

// Marcar como "done"
try {+
  execSync(`node move-task.js ${getIssueNumber(currentTask)} done`, { stdio: 'inherit' });
  console.log(`✅ Tarea ${currentTask} completada.`);
} catch(e) { console.error("Error al cerrar la issue", e); }

// Función auxiliar para obtener número de issue (podrías tener un mapping manual o consultar API)
function getIssueNumber(taskId) {
  const mapping = {
    "TASK-000-1": 131,
    "TASK-000-2": 132, // reemplaza por el número real
    // ... añade según la issue real
  };
  return mapping[taskId];
}