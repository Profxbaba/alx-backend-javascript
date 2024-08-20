const http = require('http');
const fs = require('fs');
const { parse } = require('csv-parse');

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const content = data.toString().trim();
      if (!content) {
        resolve('');
        return;
      }

      const students = {};
      const lines = content.split('\n').slice(1); // Remove the header row

      for (const line of lines) {
        if (line) {
          const [firstName, , , field] = line.split(',');
          if (field) {
            if (!students[field]) students[field] = [];
            students[field].push(firstName);
          }
        }
      }

      const totalStudents = Object.values(students).reduce((acc, curr) => acc + curr.length, 0);

      let output = `Number of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(students)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((studentInfo) => {
        res.end(`${studentInfo}\n`);
      })
      .catch((err) => {
        res.end(`${err.message}\n`);
      });
  }
});

app.listen(1245);

module.exports = app;
