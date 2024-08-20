import fs from 'fs';
import { promisify } from 'util';
import parse from 'csv-parse';

const readFile = promisify(fs.readFile);
const parseCSV = promisify(parse);

export const readDatabase = async (filePath) => {
  try {
    const data = await readFile(filePath);
    const records = await parseCSV(data, { columns: true });

    const result = { CS: [], SWE: [] };

    records.forEach(record => {
      if (record.field && result[record.field]) {
        result[record.field].push(record.firstname);
      }
    });

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
