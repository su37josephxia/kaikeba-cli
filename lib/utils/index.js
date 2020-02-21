
const { spawn } = require('child_process');
module.exports.run = (...args) => {
	const proc = spawn(...args);
	proc.stdout.pipe(process.stdout);
	proc.stderr.pipe(process.stderr);
	return proc;
};