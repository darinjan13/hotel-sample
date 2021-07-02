<template>
  <div>
    <!-- Book Now button -->
    <v-card tile flat>
      <v-img
        class="align-start mb-10"
        height="650"
        :src="require('../assets/1.jpg')"
      >
        <v-alert color="#041e29" dense>
          <v-row class="align-center">
            <v-col cols=12 sm=9 md=9 lg=9 xl=9 class="pa-0 mt-n4 mt-sm-0">
              <v-card-title class="card-title justify-start justify-md-end py-6 mb-n10 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 text-center white--text">
                50% off on your first booking. Use the code "COOL"!
              </v-card-title>
            </v-col>
            <v-col cols=12 sm=3 md=3 lg=3 xl=3 class="px-0 pb-0">
              <v-card-actions class="justify-center justify-sm-start mb-3" >
                <v-btn x-large outlined color="white" block @click="bookNowForm">BOOK NOW!</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-alert>
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
import { EventBus } from "../a";

export default {
  data() {
    return {
      bookNowFormDialog: false,
    };
  },
  methods: {
    bookNowForm() {
      this.bookNowFormDialog = true;
      EventBus.$emit("showBookNowForm", this.bookNowFormDialog);
    },
  },
};
</script>
<style scoped>
.card-title {
  word-break: unset;
}
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