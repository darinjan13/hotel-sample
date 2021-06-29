<template>
  <v-lazy>
    <v-container class="mb-16 animate__animated animate__fadeIn animate__delay-1s">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8" lg="6" xl="6">
          <v-card elevation="24" color="rgba(0, 209, 255, 0.78)" class="text-center pa-8 pa-md-16">
            <div class="">Stay Informed</div>
            <v-card-title>
              <v-text-field label="Email" prepend-icon="mdi-email">
              </v-text-field>
            </v-card-title>
            <v-btn outlined>Subscribe</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-lazy>
</template>