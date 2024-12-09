const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const datas = data.toString('utf-8').trim().split('\n');
      const studentRecords = {};
      const fileHead = datas[0].split(',');
      const studentNames = fileHead.slice(0, fileHead.length - 1);

      for (const data of datas.slice(1)) {
        const studentData = data.split(',');
        const studentMainData = studentData.slice(0, studentData.length - 1);
        const field = studentData[studentData.length - 1];

        if (!(field in studentRecords)) {
          studentRecords[field] = [];
        }

        const dataEntry = studentNames
          .map((name, index) => [name, studentMainData[index]]);
        studentRecords[field].push(dataEntry);
      }

      for (const field in studentRecords) {
        if (Object.prototype.hasOwnProperty.call(studentRecords, field)) {
          const list = studentRecords[field];
          const studentNames = list.map((item) => item[0][1]).join(', ');
          console.log(`Number of students in ${field}: ${list.length}.`);
          console.log(`List: ${studentNames}`);
        }
      }
      resolve({ studentRecords, totalStudents: datas.length - 1 });
    });
  });
}
module.exports = countStudents;
