const http = require('http');
const fs = require('fs');

const path = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      if (!data) {
        reject(Error('Cannot load the database'));
      }
      const datas = data.trim().split('\n');
      const studentRecords = {};
      const fileHead = datas[0].split(',');
      const StudentNames = fileHead.slice(0, fileHead.length - 1);

      for (const data of datas.slice(1)) {
        const studentData = data.split(',');
        const studentMainData = studentData.slice(0, studentData.length - 1);
        const field = studentData[studentData.length - 1];

        if (!(field in studentRecords)) {
          studentRecords[field] = [];
        }

        const dataEntry = StudentNames
          .map((name, index) => [name, studentMainData[index]]);
        studentRecords[field].push(dataEntry);
      }

      const num = `Number of students: ${datas.length - 1}`;
      const StL = [];

      for (const field in studentRecords) {
        if (Object.prototype.hasOwnProperty.call(studentRecords, field)) {
          const list = studentRecords[field];
          const st = `Number of students in ${field}: ${list.length}. List: ${list.map((item) => item[0][1]).join(', ')}`;
          StL.push(st);
        }
      }
      const exp = [num, ...StL];
      resolve(exp);
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(path)
      .then((value) => {
        res.end(value.join('\n'));
      })
      .catch((error) => {
        res.end(`Cannot load the database: ${error}`);
      });
  }
});

app.listen(1245);
module.exports = app;
