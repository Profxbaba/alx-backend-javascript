import handleProfileSignup from './3-all.js';
import * as utils from '../0x01-ES6_promise/utils.js';

jest.mock('../0x01-ES6_promise/utils.js');

test('handleProfileSignup resolves correctly', () => {
  utils.uploadPhoto.mockResolvedValue({ body: 'photo-profile-1' });
  utils.createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  console.log = jest.fn();

  return handleProfileSignup().then(() => {
    expect(console.log).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
  });
});

test('handleProfileSignup handles rejection', () => {
  utils.uploadPhoto.mockRejectedValue(new Error('Failed to upload photo'));
  utils.createUser.mockRejectedValue(new Error('Failed to create user'));

  console.log = jest.fn();

  return handleProfileSignup().catch(() => {
    expect(console.log).toHaveBeenCalledWith('Signup system offline');
  });
});
