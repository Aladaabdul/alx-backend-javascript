// 2-read_file.js


const fs = require("fs");
const path = require("path");


module.exports = function countStudents(filePath) {
	const fullpath = path.resolve(filePath);

	let data;
	try {
		data = fs.readFileSync(fullpath, 'utf8');
	} catch (error) {
		throw new Error('Cannot load the database');
	}

	const lines = data.split('\n').filter(line => line.trim() !== '');

	const headers = lines[0].split(',');

	const fieldCounts = {};
	const students = [];

	for (let i = 1; i < lines.length; i++) {
		const student = lines[i].split(',');
		if (student.length === headers.length) {
			const studentRecord = {};
		for (let j = 0; j < headers.length; j++) {
			studentRecord[headers[j]] = student[j];
		}
		students.push(studentRecord);

		const field = studentRecord.field;
		if (!fieldCounts[field]) {
			fieldCounts[field] = [];
		}
		fieldCounts[field].push(studentRecord.firstname);
		}
	}

	console.log(`Number of students: ${students.length}`);

	for (const [field, names] of Object.entries(fieldCounts)) {
		console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
	}
}

