import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      let message = 'This is the list of our students\n';

      Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach(field => {
        message += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });

      res.status(200).send(message.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(process.argv[2]);
      const students = data[major];

      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
