import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    uploadPhoto()
    .then((data) => {
        createUser()
        .then((response) => {
            console.log(data.body, response.firstName, response.lastName);
        })
        .catch(() => console.log('Signup system offline'));
    })
}
