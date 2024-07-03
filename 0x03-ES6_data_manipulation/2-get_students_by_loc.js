// Function definition
function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}

// Named export
export { getStudentsByLocation };
