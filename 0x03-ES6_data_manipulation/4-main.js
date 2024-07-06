import getListStudents from './0-get_list_students';
import updateStudentGradeByCity from './4-update_grade_by_city';

const students = getListStudents();

console.log(updateStudentGradeByCity(students, 'San Francisco', [
  { studentId: 1, newGrade: 90 },
  { studentId: 2, newGrade: 85 },
]));

// End of file
