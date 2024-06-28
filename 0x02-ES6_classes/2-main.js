import HolbertonCourse from './2-hbtn_course';

function createCourse() {
  const courseName = 'ES6';
  const length = 30;
  const students = ['Jane Doe', 'John Doe'];

  try {
    return new HolbertonCourse(courseName, length, students);
  } catch (error) {
    console.error(`Error creating course: ${error.message}`);
    return null;
  }
}

const c1 = createCourse();
if (c1) {
  console.log('Course created:', c1);
}

try {
  const c2 = new HolbertonCourse('Python', 15, ['Grace Hopper', 'Betty Holberton']);
  console.log('Course created:', c2);
} catch (error) {
  console.error(`Error creating course: ${error.message}`);
}
