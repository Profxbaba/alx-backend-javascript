import handleResponseFromAPI from '../2-then.js';

test('handleResponseFromAPI resolves correctly', () => {
  const promise = Promise.resolve();
  return handleResponseFromAPI(promise).then(response => {
    expect(response).toEqual({
      status: 200,
      body: 'success'
    });
  });
});

test('handleResponseFromAPI rejects correctly', () => {
  const promise = Promise.reject();
  return handleResponseFromAPI(promise).catch(error => {
    expect(error).toEqual(new Error());
  });
});
