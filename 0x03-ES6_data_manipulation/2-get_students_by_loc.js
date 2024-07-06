// 2-get_students_by_loc.js

/**
 * Filter students by location.
 * @param {Array<Object>} students - List of student objects.
 * @param {string} city - City name to filter students by location.
 * @returns {Array<Object>} - Array of student objects located in the specified city.
 */
const getStudentsByLocation = (students, city) => (
  students.filter((student) => student.location === city)
);

export default getStudentsByLocation;
