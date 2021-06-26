<template>
  <div>
    <v-row>
      <v-dialog v-model="dialog">
        <v-card class="py-6 pa-sm-10 pa-md-16">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row class="mx-10 mx-sm-10 mx-md-16" justify="center">
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
            <v-row class="mx-10 mx-sm-10 mx-md-16" justify="center">
              <!-- Check in -->
              <v-col cols="12" sm="4" md="4" lg="5" xl="6">
                <v-dialog
                  ref="dialog2"
                  v-model="modal1"
                  :value.sync="arrivalDate"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="arrivalDate"
                      label="Check in"
                      prepend-icon="mdi-calendar"
                      readonly
                      required
                      dense
                      :rules="arrivalDateRule"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="arrivalDate"
                    scrollable
                    :min="dateToday"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="arrivalDateCanel()"
                      >Cancel</v-btn
                    >
                    <v-btn text color="primary" @click="arrivalDateOkay()"
                      >Okay</v-btn
                    >
                  </v-date-picker>
                </v-dialog>
              </v-col>

              <!-- Check out -->
              <v-col cols="12" sm="4" md="4" lg="5" xl="6">
                <v-dialog
                  ref="dialog3"
                  v-model="modal2"
                  :value.sync="endDate"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="endDate"
                      label="Check out"
                      prepend-icon="mdi-calendar"
                      readonly
                      required
                      dense
                      :rules="endDateRule"
                      :disabled="disable"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <!-- Check out Date Picker -->
                  <v-date-picker
                    v-model="endDate"
                    scrollable
                    :min="arrivalDate"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="endDateCanel"
                      >Cancel</v-btn
                    >
                    <v-btn text color="primary" @click="endDateOkay"
                      >Okay</v-btn
                    >
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>

            <!-- Third Row -->
            <v-row class="mx-10 mx-sm-10 mx-md-16" justify="center">
              <!-- Child -->
              <v-col cols="12" sm="4" md="4" lg="5" xl="6" class="text-center">
                <v-select
                  class="mb-n3"
                  v-model="child"
                  :items="numberOfChild"
                  label="Child"
                  outlined
                  dense
                ></v-select>
              </v-col>
              <!-- Adult -->
              <v-col cols="12" sm="4" md="4" lg="5" xl="6">
                <v-select
                  class="mb-n3"
                  v-model="adult"
                  :items="numberOfAdult"
                  label="Adult"
                  outlined
                  dense
                ></v-select>
              </v-col>
            </v-row>
            <v-row class="mx-10 mx-sm-10 mx-md-16" justify="center">
              <v-col cols="12" sm="4" md="4" lg="5" xl="6">
                <v-select
                  class="mb-n3"
                  v-model="room"
                  :items="selectRoom"
                  :rules="roomRules"
                  label="Select Room"
                  required
                  outlined
                  dense
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4" md="4" lg="5" xl="6">
                <v-text-field
                  class="mb-n3"
                  label="Promo Code"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-col class="text-center" cols="12">
              <v-btn :disabled="!valid" @click="validate()">Submit</v-btn>
            </v-col>
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
      modal1: false,
      modal2: false,
      disable: true,
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
      arrivalDate: "",
      arrivalDateRule: [(v) => !!v || "Check in is Required."],
      endDate: null,
      endDateRule: [(v) => !!v || "Check out is Required."],
      dateToday: new Date().toISOString().substr(0, 10),
      child: 0,
      numberOfChild: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      adult: 0,
      numberOfAdult: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      room: "",
      selectRoom: ["Standard", "Deluxe"],
      roomRules: [ (v) => !!v || "Room is required." ],
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate() == true) {
        this.dialog = false;
      }
    },

    // Check in Functions
    arrivalDateCanel() {
      this.modal1 = false;
      this.disable = true;
      this.endDate = null;
      this.arrivalDate = null;
    },
    arrivalDateOkay() {
      this.$refs.dialog2.save(this.arrivalDate);
      this.disable = false;
    },

    // Check out Functions
    endDateCanel() {
      this.modal2 = false;
      this.endDate = null;
    },
    endDateOkay() {
      this.$refs.dialog3.save(this.endDate);
    },
  },

  created() {
    EventBus.$on("show", (data) => {
      this.dialog = data;
    });
  },
};
</script>