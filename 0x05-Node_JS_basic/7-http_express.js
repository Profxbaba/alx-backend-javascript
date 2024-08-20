const express = require('express');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const app = express();

// Endpoint to display Hello Holberton School!
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Endpoint to display students from the CSV file
app.get('/students', async (req, res) => {
  const filePath = process.argv[2]; // Get the database file path from command line arguments
  
  if (!filePath) {
    res.status(500).send('Database file not provided');
    return;
  }

  try {
    // Read and parse the CSV file asynchronously
    const data = fs.readFileSync(path.resolve(filePath), 'utf8');
    const students = [];
    const parser = parse(data, { columns: true });

    parser.on('readable', () => {
      let record;
      while ((record = parser.read())) {
        if (record && record.field && record.firstname) {
          students.push(record);
        }
      }
    });

    parser.on('end', () => {
      const fields = [...new Set(students.map(s => s.field))];
      let message = 'This is the list of our students\n';
      message += `Number of students: ${students.length}\n`;

      fields.forEach(field => {
        const names = students.filter(s => s.field === field).map(s => s.firstname).join(', ');
        message += `Number of students in ${field}: ${students.filter(s => s.field === field).length}. List: ${names}\n`;
      });

      res.send(message.trim());
    });

    parser.on('error', (error) => {
      res.status(500).send('Cannot load the database');
    });

  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the app
module.exports = app;
