const core = require('@actions/core');

try {
  const name = core.getInput('name');
  console.log(`Cześć, ${name}!`);
} catch (error) {
  core.setFailed(`Błąd akcji: ${error.message}`);
}