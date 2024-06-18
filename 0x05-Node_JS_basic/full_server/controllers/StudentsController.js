const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const data = await readDatabase('path/to/database.csv');
            res.status(200).send(formatStudentData(data));
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const data = await readDatabase('path/to/database.csv');
            const students = data[major];
            if (students) {
                res.status(200).send(`List: ${students.join(', ')}`);
            } else {
                res.status(200).send('List: ');
            }
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

function formatStudentData(data) {
    const sortedFields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    let result = 'This is the list of our students\n';
    for (const field of sortedFields) {
        const students = data[field];
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
    return result.trim();
}

module.exports = StudentsController;
