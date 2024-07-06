// 2-get_students_by_loc.test.js

import getListStudents from './0-get_list_students';
import getStudentsByLocation from './2-get_students_by_loc';

describe('getStudentsByLocation', () => {
  const students = getListStudents();

  it('returns students in San Francisco', () => {
    // Ensure we have at least one assertion
    expect.assertions(1);

    const result = getStudentsByLocation(students, 'San Francisco');

    // Use toStrictEqual() for deep equality comparison
    expect(result).toStrictEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });

  it('returns an empty array for non-existent location', () => {
    // Ensure we have at least one assertion
    expect.assertions(1);

    const result = getStudentsByLocation(students, 'Mars');

    // Use toStrictEqual() for deep equality comparison
    expect(result).toStrictEqual([]);
  });
});
