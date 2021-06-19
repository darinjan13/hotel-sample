<template>
  <div>
    <v-container>
      <!-- First Row -->
      <v-row class="mt-16" align-sm="center">
        <v-col cols="12" sm="8" md="8" lg="8" xl="8">
          <v-card>
            <v-card-title><h1 class="text-subtitle-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione, ipsam totam ut recusandae maiores officia dolor animi quia saepe suscipit vel quisquam officiis aliquam accusamus, quae, labore fugiat eius!</h1></v-card-title>
          </v-card>
        </v-col>

        <v-col sm="4" md="4" lg="4" xl="4">
          <v-card>
            <v-img :src="require('../assets/1.jpg')"></v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- Second Row -->
      <v-row class="mt-16" align-sm="center" justify-sm="end">
        <v-col cols="12" sm="8" md="8" lg="8" xl="8" order="sm-last">
          <v-card>
            <v-card-title><h1 class="text-subtitle-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quia veniam neque ex quidem architecto maxime et eum corporis sapiente dolore alias, consequatur aspernatur aut autem deleniti labore cum doloribus?</h1></v-card-title>
          </v-card>
        </v-col>

        <v-col sm="4" md="4" lg="4" xl="4" order="sm-first">
          <v-card>
            <v-img :src="require('../assets/2.jpg')"></v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- Third Row -->
      <v-row class="mt-16" align-sm="center">
        <v-col ccols="12" sm="8" md="8" lg="8" xl="8">
          <v-card>
            <v-card-title><h1 class="text-subtitle-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolorem natus, iure beatae quam excepturi molestias facilis reprehenderit debitis itaque odio, maiores iusto iste repellendus eos ipsam minima! Exercitationem, labore.</h1></v-card-title>
          </v-card>
        </v-col>

        <v-col sm="4" md="4" lg="4" xl="4">
          <v-card>
            <v-img :src="require('../assets/3.jpg')"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>