const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const minLength = parseInt(core.getInput('min-length'), 10);
    let commitMessage = '';

    await exec.exec('git log -1 --pretty=%B', [], {
      listeners: {
        stdout: (data) => {
          commitMessage += data.toString();
        }
      }
    });

    commitMessage = commitMessage.trim();
    console.log(`Commit message: "${commitMessage}"`);

    if (commitMessage.length < minLength) {
      core.setFailed(`Commit message too short: ${commitMessage.length} characters (min ${minLength})`);
    } else {
      console.log(`Commit message is long enough ✅`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
