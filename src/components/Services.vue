<template>
  <div>
    <v-container class="my-10">
      <div class="text-h3 text-center">Rooms</div>
      <v-row class="pa-3" align-sm="center">
        <v-col cols="12" md="6">
          <v-card elevation="24">
            <v-row align="center">
              <v-col md="5">
                <v-card-title>Standard</v-card-title>
                <v-card-subtitle
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  debitis, quia minima dignissimos architecto et magni
                  repellendus illum eaque mollitia, expedita nulla vero iusto,
                  suscipit ex pariatur autem tempora nisi.</v-card-subtitle
                >
              </v-col>
              <v-col md="7">
                <v-img class="mx-5" :src="require('../assets/1.jpg')"></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col class="my-6" cols="12" md="6">
          <v-card elevation="24">
            <v-row align="center">
              <v-col md="5">
                <v-card-title>Superior</v-card-title>
                <v-card-subtitle
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  debitis, quia minima dignissimos architecto et magni
                  repellendus illum eaque mollitia, expedita nulla vero iusto,
                  suscipit ex pariatur autem tempora nisi.</v-card-subtitle
                >
              </v-col>
              <v-col md="7">
                <v-img class="mx-5" :src="require('../assets/2.jpg')"></v-img>
              </v-col>
            </v-row>
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