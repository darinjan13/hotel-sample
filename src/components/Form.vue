<template>
  <div>
    <v-row>
      <v-dialog v-model="dialog">
        <v-card class="pa-6 pa-sm-10 pa-md-15">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row justify="center">
              <v-col cols="12" sm="4" md="4" lg="5" xl="6" class="text-center">
                <v-text-field
                  class="mb-n3"
                  v-model="fname"
                  :rules="fnameRules"
                  label="First name"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4" lg="5" xl="6">
                <v-text-field
                  class="mb-n3"
                  v-model="lname"
                  :rules="lnameRules"
                  label="Last name"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Dates -->
            <v-row justify="center">
              <!-- Arrival Date -->
              <v-col cols="12" sm="4" md="4" lg="5" xl="6">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="asd()"
                  :value.sync="arrivalDate"
                  elevation="0"
                  transition="scale-transition"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="arrivalDate"
                    label="Pick a Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="dates" multiple no-title>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(dates)">Okay</v-btn>
                </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="text-center" cols="12">
                <v-btn :disabled="!valid" @click="validate()">Submit</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import { EventBus } from "../main";

export default {
  data() {
    return {
      dialog: false,
      valid: true,
      fname: "",
      fnameRules: [
        (v) => !!v || "First name is Required",
        (v) => (v && v.length >= 2) || "First name must be more than 1",
      ],
      lname: "",
      lnameRules: [
        (v) => !!v || "Last name is Required",
        (v) => (v && v.length >= 2) || "Last name must be more than 1",
      ],
      menu: false,
      dates: [],
      dateToday: new Date().toISOString().substr(0, 10),
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate() == true) {
        this.dialog = false;
      }
    },
    asd() {
      if (this.dates.length < 2) {
        return false;
      }
    }
  },

  computed: {
    arrivalDate() {
      this.dates.toString();
      return this.dates.join(' ~ ')
    }
  },

  created() {
    EventBus.$on("show", (data) => {
      this.dialog = data;
    });
  },
};
</script>