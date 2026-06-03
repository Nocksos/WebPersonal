const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { Octokit } = require("@octokit/rest");

// ========== CONFIGURACIÓN ==========
const REPO_OWNER = "Nocksos";
const REPO_NAME = "WebPersonal";
const LABELS = {
  todo: "status:todo",
  inProgress: "status:in-progress",
  inReview: "status:in-review",
  done: "status:done"
};

// Mapeo de IDs de tarea a número de issue (actualízalo con los números reales)
const ISSUE_NUMBERS = {
  "TASK-000-1": 131,
  "TASK-000-2": 132,
  "TASK-000-3": 133
  // ... añade todas las que tengas
};

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error("❌ Falta GITHUB_TOKEN en variables de entorno");
  process.exit(1);
}
const octokit = new Octokit({ auth: token });

// ========== FUNCIONES ==========
async function getTaskDefinitions() {
  // Descargar .github/task-definitions.json desde la rama main
  const { data } = await octokit.rest.repos.getContent({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    path: ".github/task-definitions.json",
    ref: "main"
  });
  const content = Buffer.from(data.content, 'base64').toString('utf8');
  return JSON.parse(content);
}

async function getIssueNumber(taskId) {
  if (ISSUE_NUMBERS[taskId]) return ISSUE_NUMBERS[taskId];
  // Si no está en el mapa, lo buscamos en GitHub (por título)
  const { data: issues } = await octokit.rest.issues.listForRepo({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    state: "all",
    per_page: 100
  });
  const found = issues.find(iss => iss.title.includes(`[${taskId}]`));
  if (found) {
    ISSUE_NUMBERS[taskId] = found.number;
    return found.number;
  }
  throw new Error(`No se encontró la issue para ${taskId}`);
}

async function updateIssueState(issueNumber, stateLabel, close = false) {
  try {
    await octokit.rest.issues.update({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      issue_number: issueNumber,
      state: close ? "closed" : "open",
      labels: [stateLabel]
    });
    console.log(`✅ Issue #${issueNumber} → ${stateLabel}`);
  } catch (error) {
    console.error(`❌ Error al actualizar issue: ${error.message}`);
  }
}

async function getPendingTasks() {
  const { data: issues } = await octokit.rest.issues.listForRepo({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    state: "open",
    labels: LABELS.todo,
    per_page: 100
  });
  return issues.map(issue => {
    const match = issue.title.match(/\[(TASK-\d+-\d+)\]/);
    return match ? match[1] : null;
  }).filter(id => id !== null).sort();
}

async function executeTask(taskId, definitions) {
  const steps = definitions[taskId]?.steps;
  if (!steps) {
    console.log(`⚠️ No hay pasos definidos para ${taskId}, se omite.`);
    return false;
  }
  
  const issueNumber = await getIssueNumber(taskId);
  console.log(`\n🚀 Ejecutando tarea ${taskId} (issue #${issueNumber})`);
  
  await updateIssueState(issueNumber, LABELS.inProgress);
  
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    console.log(`\n📌 Paso ${i+1}: ${step}`);
    try {
      execSync(step, { cwd: path.resolve(__dirname), stdio: 'inherit', shell: true });
    } catch (err) {
      console.error(`❌ Falló el paso ${i+1}. Tarea ${taskId} no completada.`);
      return false;
    }
  }
  
  await updateIssueState(issueNumber, LABELS.done, true);
  console.log(`🎉 Tarea ${taskId} completada y cerrada.`);
  return true;
}

async function main() {
  const definitions = await getTaskDefinitions();
  const pending = await getPendingTasks();
  if (pending.length === 0) {
    console.log("✅ No hay tareas pendientes.");
    return;
  }
  console.log(`📋 Tareas pendientes: ${pending.join(", ")}`);
  
  for (const taskId of pending) {
    const success = await executeTask(taskId, definitions);
    if (!success) {
      console.error(`⛔ Deteniendo por fallo en ${taskId}.`);
      break;
    }
  }
}

main().catch(console.error);