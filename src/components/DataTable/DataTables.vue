<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title class="justify-center"> Data Tables </v-card-title>

      <!-- Search -->
      <v-card-title>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="8" lg="8" xl="8">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table
        class="elevation-1"
        :search="search"
        :headers="headers"
        :items="data"
        :page.sync="page"
        hide-default-footer
        @page-count="pageCount = $event"
        :items-per-page="itemsPerPage"
      >
        <!-- Action Column -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- Edit Icon -->
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                color="primary"
                @click="editData(item)"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </template>
            <span>Update</span>
          </v-tooltip>

          <!-- Delete Icon -->
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                color="error"
                @click="deleteData(item)"
                v-bind="attrs"
                v-on="on"
                ><v-icon>mdi-delete-outline</v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </template>
      </v-data-table>
      <v-card-actions class="justify-center">
        <!-- Add Dialog or Edit Dialog -->
        <v-dialog v-model="editDialog" max-width="500">
          <!-- Dialog Activator -->
          <template v-slot:activator="{ on, attrs }">
            <v-col cols="5">
              <v-btn
                v-bind="attrs"
                v-on="on"
                block
                elevation="2"
                color="#66f1e1"
                class="black--text"
                >Add
              </v-btn>
            </v-col>
          </template>

          <!-- Add Dialog or Edit Dialog card-->
          <v-card>
            <v-card-title class="justify-center">Add New Item</v-card-title>
            <v-card-text>
              <v-row justify="center">
                <v-form ref="form" v-model="validRules">
                  <!-- Add Name  or Edit Name-->
                  <v-col cols="12">
                    <v-text-field
                      v-model="forEditData.name"
                      label="Name"
                      :rules="requiredRules"
                      required
                    ></v-text-field>
                  </v-col>

                  <!-- Add Email or Edit Email-->
                  <v-col cols="12">
                    <v-text-field
                      v-model="forEditData.email"
                      label="Email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                  </v-col>

                  <!-- Add Address or Edit Address -->
                  <v-col cols="12">
                    <v-text-field
                      v-model="forEditData.address"
                      label="Address"
                      :rules="requiredRules"
                      required
                    ></v-text-field>
                  </v-col>
                </v-form>
              </v-row>
            </v-card-text>

            <!-- Add Dialog or Edit Dialog Actions -->
            <v-card-actions class="justify-center">
              <v-btn outlined color="error" @click="saveDialogClose()"
                >Cancel</v-btn
              >
              <v-btn
                outlined
                :disabled="!validRules"
                color="success"
                @click="
                  saveData();
                  validate;
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Delete Dialog -->
        <v-dialog v-model="deleteDialog" max-width="500">
          <v-card>
            <v-card-title>
              Are you sure you want to delete {{ forEditData.name }}'s Data?
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn text color="primary" @click="closeDeleteDialog()">No</v-btn>
              <v-btn
                text
                color="error"
                @click="
                  confirmDelete();
                "
                >Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
        <v-snackbar v-model="snackbarAdd" color="success" :timeout="timeout">Succesfully added a data.</v-snackbar>
        <v-snackbar v-model="snackbarEdit" color="success" :timeout="timeout">Updated successfully.</v-snackbar>
        <v-snackbar v-model="snackbarDel" color="error" :timeout="timeout">{{name}} 's data is deleted.</v-snackbar>
      
      <!-- Pagination -->
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </v-card>
  </v-dialog>
</template>
<script>
import { EventBus } from "../../main";

export default {
  data() {
    return {
      dialog: false,
      snackbarAdd: false,
      snackbarDel: false,
      snackbarEdit: false,
      validRules: true,
      editDialog: false,
      deleteDialog: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 3,
      editIndex: -1,
      timeout: 2000,
      search: "",
      name: "",
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Address", value: "address" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      data: [
        {
          name: "Fanny",
          email: "fanny@gmail.com",
          address: "Cebu City",
        },
        {
          name: "Miya",
          email: "miya@gmail.com",
          address: "Cebu City",
        },
        {
          name: "Mikasa",
          email: "mikasa@gmail.com",
          address: "Cebu City",
        },
        {
          name: "Eren",
          email: "eren@gmail.com",
          address: "Cebu City",
        },
        {
          name: "Annie",
          email: "annie@gmail.com",
          address: "Cebu City",
        },
        {
          name: "Catviper",
          email: "catviper@gmail.com",
          address: "Cebu City",
        },
        {
          name: "Boruto",
          email: "boruto@gmail.com",
          address: "Cebu City",
        },
      ],
      requiredRules: [(v) => !!v || "Required."],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      forEditData: [
        {
          name: "",
          email: "",
          address: "",
        },
      ],
      defaultData: [
        {
          name: "",
          email: "",
          address: "",
        },
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    saveData() {
      if (this.editIndex > -1) {
        Object.assign(this.data[this.editIndex], this.forEditData);
        this.snackbarEdit = true;
      } else {
        this.snackbarAdd = true;
        this.data.push(this.forEditData);
      }
      this.saveDialogClose();
    },

    saveDialogClose() {
      this.editDialog = false;
      this.$nextTick(() => {
        this.forEditData = { ...this.defaultData };
        this.editIndex = -1;
      });
    },

    editData(item) {
      this.editIndex = this.data.indexOf(item);
      this.forEditData = { ...item };
      this.editDialog = true;
    },

    deleteData(item) {
      this.editIndex = this.data.indexOf(item);
      this.forEditData = { ...item };
      this.deleteDialog = true;
    },
    confirmDelete() {
      this.data.splice(this.editIndex, 1);
      this.snackbarDel = true;
      this.name = this.forEditData.name;
      this.closeDeleteDialog();
    },

    closeDeleteDialog() {
      this.deleteDialog = false;
      this.$nextTick(() => {
        this.forEditData = { ...this.defaultData };
        this.editIndex = -1;
      });
    },
  },

  created() {
    EventBus.$on("showDataTablesDialog", (data) => {
      this.dialog = data;
    });
  },
};
</script>
<style scoped>
</style>