// Example student data array
const students = [
  { id: '1', firstName: 'Alice', grade: 85 },
  { id: '2', firstName: 'Bob', grade: 90 },
  { id: '3', firstName: 'Charlie', grade: 88 },
];

// Function to update student's grade by ID
export default function updateStudentGrade(studentsArray, studentId, newGrade) {
  // Find the student by ID
  const studentIndex = studentsArray.findIndex((student) => student.id === studentId);

  // If student is found, update their grade
  if (studentIndex !== -1) {
    studentsArray[studentIndex].grade = newGrade.grade;
    return studentsArray[studentIndex];
  }

  // Return null if student with given ID is not found
  return null;
}

// Example usage:
// const updatedStudent = updateStudentGrade(students, '1', { grade: 95 });
// console.log('Updated Student:', updatedStudent);

// Exporting the students array (optional)
export { students };
