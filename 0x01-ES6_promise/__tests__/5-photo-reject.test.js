import uploadPhoto from '../5-photo-reject.js';

test('uploadPhoto returns a rejected promise with an error message', () => {
  expect(uploadPhoto('guillaume.jpg')).rejects.toThrow('guillaume.jpg cannot be processed');
});
