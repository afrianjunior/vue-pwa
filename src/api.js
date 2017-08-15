const user = { id: 1, name: 'Junior' };
const userToken = 'my-token';

const login = (email, password) => new Promise((resolve, reject) => {
  if (password === 'rahasia') {
    resolve({ user, token: userToken });
  }

  reject('Credentials is not valid');
});

const getUser = token => new Promise((resolve, reject) => {
  console.log('Getting user with token: %s ... ', token); // eslint-disable-line
  if (token === userToken) {
    resolve(user);
  }

  reject('Token is not valid');
});

export default {
  login,
  getUser,
};
