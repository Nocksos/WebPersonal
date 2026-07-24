require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const REPO_OWNER = "Nocksos";
const REPO_NAME = "WebPersonal";

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error("❌ Falta GITHUB_TOKEN en variables de entorno");
  process.exit(1);
}
const octokit = new Octokit({ auth: token });

const [,, issueNumber, state] = process.argv;
if (!issueNumber || !state) {
  console.error("Uso: node move-task.js <issue_number> <in-progress|review|done>");
  process.exit(1);
}

async function main() {
  try {
    if (state === "in-progress") {
      await octokit.rest.issues.update({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        issue_number: parseInt(issueNumber),
        state: "open",
        labels: ["status:in-progress"]
      });
      console.log(`✅ Issue #${issueNumber} marcada como In Progress`);
    } 
    else if (state === "review") {
      await octokit.rest.issues.update({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        issue_number: parseInt(issueNumber),
        labels: ["status:in-review"]
      });
      console.log(`✅ Issue #${issueNumber} marcada como In Review`);
    }
    else if (state === "done") {
      await octokit.rest.issues.update({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        issue_number: parseInt(issueNumber),
        state: "closed",
        labels: ["status:done"]
      });
      console.log(`✅ Issue #${issueNumber} cerrada y marcada como Done`);
    }
    else {
      console.error("Estado no válido. Usa: in-progress, review o done");
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

main();