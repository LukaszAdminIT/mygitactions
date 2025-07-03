const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // 1) Get some input values
    const bucket = core.getInput('bucket',{ required: true});
    const bucketRegion = core.getInput('bucket-region',{ required: true});
    const distFolder = core.getInput('dist-folder',{ required: true});

    // 2) Upload files
    exec.exec('echo ""')
    core.notice('Hello from my custom JavaScript Action!')
}

run();