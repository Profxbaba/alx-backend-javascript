import signUpUser from '../4-user-promise.js';

test('signUpUser returns a resolved promise with user details', () => {
  expect(signUpUser('Bob', 'Dylan')).resolves.toEqual({
    firstName: 'Bob',
    lastName: 'Dylan',
  });
});
