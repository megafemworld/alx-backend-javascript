import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      for (const value of values) {
        if (value.status === 'rejected') {
          value.reason.message = `Error: ${value.reason.message}`;
          value.reason.message = `Error: ${value.reason.message}`;
        }
      }
      return values;
    });
}
