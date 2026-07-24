require('dotenv').config();
const { execSync } = require('child_process');
const { Octokit } = require("@octokit/rest");

// ================= CONFIGURACIÓN =================
const REPO_OWNER = "Nocksos";
const REPO_NAME = "WebPersonal";

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error("❌ No se encontró GITHUB_TOKEN en .env");
  process.exit(1);
}
const octokit = new Octokit({ auth: token });

// ================= TAREAS PREDEFINIDAS =================
const taskCommands = {
  "Instalar y configurar TailwindCSS": [
    `cd apps/portfolio-react`,
    `npm install -D tailwindcss postcss autoprefixer`,
    `npx tailwindcss init -p`,
    `echo "@tailwind base;" > src/index.css`,
    `echo "@tailwind components;" >> src/index.css`,
    `echo "@tailwind utilities;" >> src/index.css`,
    `$config = @"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
"@; $config | Out-File -FilePath tailwind.config.js -Encoding utf8`,
    `echo "✅ TailwindCSS configurado correctamente"`
  ]
  // Puedes añadir aquí más tareas según las issues
};

// ================= FUNCIONES =================
async function getIssueByNumber(issueNumber) {
  const { data } = await octokit.rest.issues.get({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number: parseInt(issueNumber)
  });
  return data;
}

async function updateIssueState(issueNumber, stateLabel, close = false) {
  await octokit.rest.issues.update({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number: issueNumber,
    state: close ? "closed" : "open",
    labels: [stateLabel]
  });
  console.log(`✅ Issue #${issueNumber} → ${stateLabel}${close ? ' (cerrada)' : ''}`);
}

function executeCommands(commands) {
  console.log(`\n🔨 Ejecutando ${commands.length} comandos...\n`);
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    console.log(`[${i+1}] > ${cmd}`);
    try {
      execSync(cmd, { stdio: 'inherit', shell: 'powershell.exe', cwd: process.cwd() });
    } catch (err) {
      console.error(`❌ Comando fallido: ${cmd}`);
      return false;
    }
  }
  return true;
}

// ================= MAIN =================
async function main() {
  const issueNumber = process.argv[2];
  if (!issueNumber) {
    console.error("Uso: node ia-autonomous.js <issue_number>");
    process.exit(1);
  }

  console.log(`📖 Leyendo issue #${issueNumber} desde GitHub...`);
  const issue = await getIssueByNumber(issueNumber);
  console.log(`   Título: ${issue.title}\n`);

  // Buscar comandos según el título
  let commands = null;
  for (const [key, cmds] of Object.entries(taskCommands)) {
    if (issue.title.includes(key)) {
      commands = cmds;
      break;
    }
  }

  if (!commands) {
    console.error(`⚠️ No hay comandos predefinidos para la tarea: "${issue.title}"`);
    console.log("   Puedes añadirla manualmente en taskCommands del script.");
    process.exit(1);
  }

  await updateIssueState(issueNumber, "status:in-progress");

  const ok = executeCommands(commands);
  if (ok) {
    await updateIssueState(issueNumber, "status:done", true);
    console.log(`\n🎉 Tarea #${issueNumber} completada exitosamente.`);
  } else {
    console.error(`\n💥 La tarea #${issueNumber} falló. Se mantiene en 'in-progress'.`);
  }
}

main().catch(console.error);