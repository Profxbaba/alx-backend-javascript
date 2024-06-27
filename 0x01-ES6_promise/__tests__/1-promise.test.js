import getFullResponseFromAPI from '../1-promise.js';

test('getFullResponseFromAPI resolves when success is true', () => {
  return getFullResponseFromAPI(true).then(response => {
    expect(response).toEqual({
      status: 200,
      body: 'Success'
    });
  });
});

test('getFullResponseFromAPI rejects when success is false', () => {
  expect.assertions(1);
  return getFullResponseFromAPI(false).catch(error => {
    expect(error).toEqual(new Error('The fake API is not working currently'));
  });
});
