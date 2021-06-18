<template>
  <v-app>
    <v-main>
      <Home/>
      <Services/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';
import Services from './components/Services'

export default {
  name: 'App',

  components: {
    Home,
    Services,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
