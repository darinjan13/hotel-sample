<template>
  <div>
    <v-lazy>
      <v-container class="my-10 animate__animated animate__fadeInUp animate__delay-1s">
        <h1 class="text-center">Rooms</h1>
        <v-row class="pa-3 text-center" align="center">
          <v-col cols="12" md="6">
            <v-card elevation="24" min-height="300">
              <v-row align="center" class="row-max-height">
                <v-col md="5">
                  <v-card-title
                    class="my-3 justify-center justify-sm-start justify-md-start justify-lg-start"
                    >Standard</v-card-title
                  >
                  <v-card-subtitle class="mb-n10 mb-md-1"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    debitis, quia minima dignissimos architecto et magni
                    repellendus illum eaque mollitia, expedita nulla vero iusto,
                    suscipit ex pariatur autem tempora nisi.</v-card-subtitle
                  >
                </v-col>
                <v-col md="7">
                  <v-img
                    class="mx-5 my-4"
                    min-height="250"
                    :src="require('../assets/1.jpg')"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col class="my-6" cols="12" md="6">
            <v-card elevation="24" min-height="300">
              <v-row align="center">
                <v-col md="5">
                  <v-card-title
                    class="my-3 justify-center justify-sm-start justify-md-start justify-lg-start"
                    >Deluxe</v-card-title
                  >
                  <v-card-subtitle class="mb-n10 mb-md-1"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, molestias cupiditate? Delectus, animi sint.
                    Quisquam accusamus adipisci itaque obcaecati blanditiis at
                    nesciunt similique officia est.</v-card-subtitle
                  >
                </v-col>
                <v-col md="7">
                  <v-img
                    class="mx-5 my-4"
                    min-height="250"
                    :src="require('../assets/2.jpg')"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>