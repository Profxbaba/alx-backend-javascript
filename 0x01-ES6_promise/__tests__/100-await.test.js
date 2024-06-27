import asyncUploadUser from '../100-await';

test('asyncUploadUser returns photo and user objects', async () => {
  const result = await asyncUploadUser();
  expect(result).toEqual({
    photo: { status: 200, body: 'photo-profile-1' },
    user: { firstName: 'Guillaume', lastName: 'Salva' }
  });
});
