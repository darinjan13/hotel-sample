<template>
  <div>
    <v-carousel show-arrows-on-hover hide-delimiters height="650">
      <v-carousel-item
        v-for="(pic, i) in pictures"
        :key="i"
        :src="pic.src"
        transition="fade-transition"
        reverse-transition="fade transition"
      >
      </v-carousel-item>
    </v-carousel>
    <v-container>
        <v-row justify="center">
            <v-col cols="xs-8 sm-8 md-10 lg-7 xl-12">
                <h1 class="text-center">HOTEL NAME</h1>
                <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla! Praesentium vel molestiae unde ea culpa eligendi fuga nostrum quam.</p>
                <p class="no-margin text-center">Feugiat vivamus at augue eget arcu dictum.</p>
                <p class="no-margin text-center">Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Feugiat vivamus at augue eget arcu dictum.</p>
                <p class="text-center">Aliquet risus feugiat in ante metus dictum at. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.</p>
                <p class="text-center">Blandit volutpat maecenas volutpat blandit. Velit scelerisque in dictum non.</p>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pictures: [
        { src: require("../assets/1.jpg") },
        { src: require("../assets/2.jpg") },
        { src: require("../assets/3.jpg") },
      ],
    };
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
</style>