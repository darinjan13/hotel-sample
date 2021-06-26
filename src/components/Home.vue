<template>
  <div>
    <!-- Book Now button -->
    <v-card>
      <v-img
        class="align-end mb-10"
        height="640"
        :src="require('../assets/3.jpg')"
      >
      <v-row>
        <v-col class="mb-12 mb-md-0" align="center">
          <v-btn
            color="rgba(0, 209, 255, 0.78)"
            class="pa-sm-6 pa-md-8 mb-16 white--text"
            x-large
            elevation="24"
            @click="gwapo()"
            >Book Now</v-btn>
        </v-col>
      </v-row>
      </v-img>
    </v-card>

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
import { EventBus } from "../main";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    gwapo() {
      this.dialog = true;
      EventBus.$emit("show", this.dialog);
    },
  },
};
</script>
<style scoped>
p {
  letter-spacing: 2px;
  word-spacing: 3px;
  font-size: 19px;
}
.no-margin {
  margin-bottom: 0;
}
.button {
  margin-bottom: -30%;
}
</style>