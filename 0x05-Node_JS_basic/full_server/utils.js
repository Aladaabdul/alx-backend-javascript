// full_server/utils.js

const fs = require('fs').promises;
const path = require('path');


module.exports = function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        const fullPath = path.resolve(filePath);
        
        fs.readFile(fullPath, 'utf8')
            .then(data => {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const headers = lines[0].split(',');

                const fieldData = {};

                for (let i = 1; i < lines.length; i++) {
                    const student = lines[i].split(',');
                    if (student.length === headers.length) {
                        const studentRecord = {};
                        for (let j = 0; j < headers.length; j++) {
                            studentRecord[headers[j]] = student[j];
                        }

                        const field = studentRecord.field;
                        if (!fieldData[field]) {
                            fieldData[field] = [];
                        }
                        fieldData[field].push(studentRecord.firstname);
                    }
                }

                resolve(fieldData);
            })
            .catch(error => {
                reject(error);
            });
    });
}
