/* eslint-disable */

import cookie from 'js-cookie';
import api from './api';

let currentUser = null;

const getUser = () => currentUser;

const login = (email, password) => {
  console.log('Logging in...', email, password); // eslint-disable-line

  return api.login(email, password)
    .then((data) => {
      currentUser = data.user;
      cookie.set('auth_token', data.token);
    });
}

const getToken = () => cookie.get('auth_token');

const check = () => new Promise((resolve, reject) => {
  if (currentUser) {
    resolve(currentUser);
  }

  const token = getToken();

  resolve(token);
}).then((result) => {
  // ada tiga kemungkinan value result
  // 1. object user
  // 2. stringtoken
  // 3. null
  console.log('Value of result is ', result);

  if (result === currentUser) {
    return result;
  }

  return api.getUser(result);
});

const logout = () => new Promise((resolve) => {
  currentUser = null;
  cookie.remove('auth_token');

  resolve(true);
});

export default {
  getUser,
  check,
  login,
  logout,
};
