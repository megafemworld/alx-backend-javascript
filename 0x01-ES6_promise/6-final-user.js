import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => [
      for (const value of values) {
        {
          'status': value.status,
          'value': value.value || values.reason,
        },
      }

    ]);
}
