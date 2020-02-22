
const { spawn } = require('child_process');
module.exports.run = (emitter, ...args) => {
	const proc = spawn(...args);
	proc.stdout.pipe(process.stdout)
	proc.stderr.pipe(process.stderr)

	if (emitter) {
		proc.stdout.on('data', data => {
			emitter.emit('data', data)
			console.log('data.......')
		})
		proc.stderr.on('data', data => {
			emitter.emit('data', data)
			console.log('error.......')
		})
	}

	return proc;
};