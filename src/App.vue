<template>
  <v-app>
    <v-main>
      <Home />
      <Form />
      <Services />
      <Emailus />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Emailus from './components/Emailus';
import Form from './components/Form'

export default {
  name: "App",

  components: {
    Home,
    Services,
    Footer,
    Emailus,
    Form,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style> 
