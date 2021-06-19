<template>
  <div>
    <v-footer dark padless>
      <v-col cols="12">
        <v-card color="transparent" elevation="0" class="px-16 py-10">
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <a href="#" class="text-body-1 text-decoration-none white--text"
                >Careers</a
              ><br />
              <a href="#" class="text-body-1 text-decoration-none white--text"
                >Privacy</a
              ><br />
              <a href="#" class="text-body-1 text-decoration-none white--text"
                >FAQs</a
              ><br />
              <a href="#" class="text-body-1 text-decoration-none white--text"
                >Contact us</a
              >
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <a href="#" class="text-body-1 text-decoration-none white--text"
                >Careers</a
              ><br />
              <a href="#" class="text-body-1 text-decoration-none white--text"
                >Privacy</a
              ><br />
              <a href="#" class="text-body-1 text-decoration-none white--text"
                >FAQs</a
              ><br />
              <a href="#" class="text-body-1 text-decoration-none white--text"
                >Contact us</a
              >
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-btn icon class="mr-4">
                <v-icon large>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon class="mr-4">
                <v-icon large>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon large>mdi-twitter</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-divider></v-divider>
        <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} - Made by <a href="#" class="text-decoration-none white--text">Darin Jan Soriano</a>
        </v-col>
      </v-col>
      
    </v-footer>

    
  </div>
</template>