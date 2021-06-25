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
                      label="Arrival Date"
                      prepend-icon="mdi-calendar"
                      readonly
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

              <!-- End Date -->
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
                      label="End Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      :disabled="disable"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="endDate"
                    scrollable
                    :min="arrivalDate"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="endDateCanel">Cancel</v-btn>
                    <v-btn text color="primary" @click="endDateOkay">Okay</v-btn>
                  </v-date-picker>
                </v-dialog>
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
      arrivalDate: null,
      endDate: null,
      dateToday: new Date().toISOString().substr(0, 10),
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate() == true) {
        this.dialog = false;
      }
    },

    // Arrival Date Functions
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

    // End Date Functions
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