<template>
  <div>
    <p>Login First</p>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import auth from '../auth';

export default {
  data() {
    return { email: 'mail@mail.com', password: '' };
  },
  methods: {
    login() {
      auth.login(this.email, this.password)
        .then(() => {
          this.$router.push('/protected');
        });
    },
  },
};
</script>
