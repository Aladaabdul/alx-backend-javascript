import { uploadPhoto, createUser } from './utils';

export default async function () {
  const photoResponse = await uploadPhoto();
  const userResponse = await createUser();

  return {
    photo: photoResponse,
    user: userResponse,
  };
}
