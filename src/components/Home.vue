<template>
  <div>
    <v-card class="mx-auto mb-16">
      <v-img
        class="align-center"
        height="650"
        :src="require('../assets/3.jpg')"
      >
        <v-card-actions>
          <v-btn
            color="rgba(0, 209, 255, 0.78)"
            class="button pa-sm-6 pa-md-8 mx-auto white--text text-button"
            x-large
            >Book Now</v-btn
          >
        </v-card-actions>
      </v-img>
    </v-card>

    <v-spacer></v-spacer>
    <v-container>
      <v-row justify="center">
        <v-col cols="xs-8 sm-8 md-10 lg-7 xl-12">
          <v-spacer></v-spacer>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, nulla! Praesentium vel molestiae unde ea culpa eligendi
            fuga nostrum quam.
          </p>
          <p class="no-margin text-center">
            Feugiat vivamus at augue eget arcu dictum.
          </p>
          <p class="no-margin text-center">
            Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.
            Feugiat vivamus at augue eget arcu dictum.
          </p>
          <p class="text-center">
            Aliquet risus feugiat in ante metus dictum at. Et egestas quis ipsum
            suspendisse ultrices gravida dictum fusce. Adipiscing commodo elit
            at imperdiet dui accumsan sit amet nulla.
          </p>
          <p class="text-center">
            Blandit volutpat maecenas volutpat blandit. Velit scelerisque in
            dictum non.
          </p>
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
<style scoped>
p {
  letter-spacing: 1px;
  word-spacing: 1px;
}
.no-margin {
  margin-bottom: 0;
}
.button {
  margin-bottom: -30%;
}
</style>