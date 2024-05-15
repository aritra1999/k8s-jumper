import { exec } from 'node:child_process';

export function cmd(command: string) {
	return new Promise((resolve, reject) => {
		exec(command, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
			if (error) return reject(error);
			if (stderr) return reject(stderr);
			resolve(stdout);
		});
	});
}
