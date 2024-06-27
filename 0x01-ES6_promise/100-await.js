import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto('guillaume.jpg');
    const userPromise = createUser('Guillaume', 'Salva');

    const [photo, user] = await Promise.all([photoPromise, userPromise]);

    return {
      photo,
      user
    };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
    return {
      photo: null,
      user: null
    };
  }
}
