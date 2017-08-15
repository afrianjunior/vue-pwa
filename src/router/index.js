import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Hello from '@/components/Hello';
import Protected from '@/components/Protected';

import auth from '../auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        console.log('Entering login page'); // eslint-disable-line
        auth.check()
          .then(() => {
            console.log('Entering login page -> Already logged in...'); // eslint-disable-line
            next({ path: '/protected' });
          })
          .catch(() => {
            next();
          });
      },
    },
    {
      path: '/protected',
      name: 'Protected',
      component: Protected,
      beforeEnter: (to, from, next) => {
        console.log('Entering protected page'); // eslint-disable-line

        auth.check()
          .then(() => {
            console.log('Entering protected page -> Already logged in...'); // eslint-disable-line
            next();
          })
          .catch(() => {
            next({ path: '/login' });
          });
      },
    },
  ],
});
