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
import Home from "../../components/Home";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import Emailus from "../../components/Emailus";
import Form from "../../components/Form";

export default {
  components: {
    Home,
    Services,
    Footer,
    Emailus,
    Form,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap");
#app {
  font-family: "Playfair Display", serif;
  letter-spacing: 3px;
}
</style> 
<!--
<template>
 <v-app>
    <v-main>
      <Home />
      <Form />
      <Services />
      <Emailus />
      <DataTables />
      <Footer />
      <h1>Gwapo</h1>
    </v-main>
  </v-app> 
</template>

<script>
import Home from "../../components/Home";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import Emailus from "../../components/Emailus";
import Form from "../../components/Form";
import DataTables from "../../components/DataTable/DataTables";

export default {
  components: {
    Home,
    Services,
    Footer,
    Emailus,
    Form,
    DataTables,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"); */
#app {
  font-family: "Playfair Display", serif;
  letter-spacing: 3px;
}
</style> 
-->