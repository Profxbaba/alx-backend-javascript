// 3-main.js

import getListStudents from './0-get_list_students'; // Removed .js extension
import updateStudentGrade from './1-update_grade_by_user_id'; // Removed .js extension

const students = getListStudents();

console.log(updateStudentGrade(students, '1', { grade: 90 }));

// No blank lines beyond this point
