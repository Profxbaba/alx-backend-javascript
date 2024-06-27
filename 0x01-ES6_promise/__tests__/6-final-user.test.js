import handleProfileSignup from '../6-final-user.js';

test('handleProfileSignup returns the correct array structure', async () => {
  const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
  expect(result).toEqual([
    { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
    { status: 'rejected', value: new Error('bob_dylan.jpg cannot be processed') },
  ]);
});
