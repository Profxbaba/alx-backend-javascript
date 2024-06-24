// Use const to declare the variable in taskFirst function
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Use let to declare the variable in taskNext function
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  
  return combination;
}

// A helper function to be used in taskNext function
export function getLast() {
  return ' is okay';
}
