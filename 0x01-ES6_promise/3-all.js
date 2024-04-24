import { createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser()])
    .then(([user]) => {
      console.log(`${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
