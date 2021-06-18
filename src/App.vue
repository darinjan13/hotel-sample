<template>
  <v-app>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
background: url('assets/background.jpg');
background-size: cover;
}
</style>
