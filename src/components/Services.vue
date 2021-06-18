<template>
  <div>
    <v-container>
        
        <!-- First Row -->
      <v-row class="mt-16" align-sm="center">
        <v-col cols="xs-5 8">
          <v-card>
            <v-card-title><h1 class="text-h1">Gwapo</h1></v-card-title>
          </v-card>
        </v-col>
        <v-col sm="5" md="4">
          <v-card>
            <v-img :src="require('../assets/1.jpg')"></v-img>
          </v-card>
        </v-col>
      </v-row>

        <!-- Second Row -->
      <v-row class="mt-16" align-sm="center" justify-sm="end">
        <v-col cols="xs-5 8" order="sm-last">
            <h1 class="text-h1">Gwapo</h1>
        </v-col>
        <v-col sm="5" md="4" order="sm-first">
            <v-img :src="require('../assets/2.jpg')"></v-img>
        </v-col>
      </v-row>

      <!-- Third Row -->
      <v-row class="mt-16" align-sm="center">
        <v-col cols="xs-5 8">
          <v-card>
            <v-card-title><h1 class="text-h1">Gwapo</h1></v-card-title>
          </v-card>
        </v-col>
        <v-col sm="5" md="4">
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