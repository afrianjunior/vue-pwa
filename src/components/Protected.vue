<template>
  <div>
    <router-link to="/">Home</router-link>
    <div>Protected Page</div>
    <button @click="logout">Log Out</button>
  </div>
</template>

<script>
import auth from '../auth';

export default {
  mounted() {
    alert('Hi, Berhasil ke halaman protected'); // eslint-disable-line
  },
  methods: {
    logout() {
      auth.logout()
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>
