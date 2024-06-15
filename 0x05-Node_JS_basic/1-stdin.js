// Create a program named 1-stdin.js


process.stdin.setEncoding('utf8')
process.stdout.write("Welcome to Holberton School, what is your name?\n")
process.stdin.on("data", (data) => {
	const name = data
	process.stdout.write(`Your name is: ${name}`)
	process.exit();
});
process.on('exit', () => {
	process.stdout.write("This important software is now closing\n")
});
