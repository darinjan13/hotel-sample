<template>
  <div>
    <v-footer color="#041e29" padless>
      <v-col cols="12" class="text-center">
        <v-card color="transparent" elevation="0" class="px-11 py-10">
          <v-row align="center">
            <v-col cols="12" sm="4" md="4">
              <p class="address white--text">Unit 1164 UGF, SM Southmall, Alabang-Zapote Road</p>
              <a href="#" class=" text-decoration-none white--text"
                >(02) 805-8560</a
              >
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <a href="/crud" class=" text-decoration-none white--text"
                >Costumer Data</a
              ><br />
              <a href="#" class=" text-decoration-none white--text"
                >Feedback</a
              ><br />
              <a href="#" class=" text-decoration-none white--text"
                >FAQs</a
              ><br />
              <a href="#" class=" text-decoration-none white--text"
                >Contact us</a
              >
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-btn icon class="mr-4">
                <v-icon class="white--text" large>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon class="mr-4">
                <v-icon class="white--text" large>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon class="white--text" large>mdi-twitter</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-divider></v-divider>
        <v-col class="text-center white--text" cols="12">
            {{ new Date().getFullYear() }} - Made by <a href="#" class=" white--text">Darin Jan Soriano</a>
        </v-col>
      </v-col>
      
    </v-footer>

    
  </div>
</template>
<style scoped>
p {
  font-size: 20px;
}
</style>