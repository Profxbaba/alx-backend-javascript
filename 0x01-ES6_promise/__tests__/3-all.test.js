import * as utils from '../utils.js';  // Adjust the path based on your project structure
jest.mock('../utils.js');  // Adjust the path based on your project structure

test('handleProfileSignup resolves correctly', () => {
  utils.uploadPhoto.mockResolvedValue({ body: 'photo-profile-1' });

  // Your test assertions here
});
