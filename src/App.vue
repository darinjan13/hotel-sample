<template>
  <v-app>
    <v-main>
      <Home />
      <Services />
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Home,
    Services,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
