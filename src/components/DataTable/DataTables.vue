<template>
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
              ><v-icon>mdi-pencil-outline</v-icon>
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
        <!-- Add Dialog or Edit Dialog card-->
        <v-card>
          <v-card-title class="justify-center">Add New Item</v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-form ref="form" v-model="validRules">
                <!-- Add Name  or Edit Name-->
                <v-col cols="12">
                  <v-text-field
                    v-model="forEditData.firstname"
                    label="First Name"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                </v-col>

                <!-- Add Email or Edit Email-->
                <v-col cols="12">
                  <v-text-field
                    v-model="forEditData.lastname"
                    label="Lastname"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                </v-col>

                <!-- Add Address or Edit Address -->
                <v-col cols="12">
                  <v-text-field
                    v-model="forEditData.checkin"
                    label="Check in"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="forEditData.checkout"
                    label="Check out"
                    :rules="requiredRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="forEditData.child"
                    label="Child"
                  ></v-text-field>
                  <v-col cols="12">
                    <v-text-field
                      v-model="forEditData.adult"
                      label="Adult"
                    ></v-text-field>
                    <v-col cols="12">
                      <v-text-field
                        v-model="forEditData.room"
                        label="Room"
                        :rules="requiredRules"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-col>
                </v-col>
              </v-form>
            </v-row>
          </v-card-text>

          <!-- Add Dialog or Edit Dialog Actions -->
          <v-card-actions class="justify-center">
            <v-btn outlined color="error" @click="saveDialogClose()">
              Cancel
            </v-btn>
            <v-btn
              outlined
              text
              color="success"
              :loading="loading"
              :disabled="loading"
              @click="saveData()"
              >Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Delete Dialog -->
      <v-dialog v-model="deleteDialog" max-width="500">
        <v-card>
          <v-card-title>
            Are you sure you want to delete {{ name }}'s Data?
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn text color="primary" @click="closeDeleteDialog()">No</v-btn>
            <v-btn
              text
              :loading="loading2"
              :disabled="loading2"
              color="error"
              @click="confirmDelete()"
              >Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
    <v-snackbar v-model="snackbarAdd" color="success" :timeout="timeout"
      >Succesfully added a data.</v-snackbar
    >
    <v-snackbar v-model="snackbarEdit" color="success" :timeout="timeout"
      >Updated successfully.</v-snackbar
    >
    <v-snackbar v-model="snackbarDel" color="error" :timeout="timeout"
      >{{ name }} 's data is deleted.</v-snackbar
    >

    <!-- Pagination -->
    <v-pagination v-model="page" :length="pageCount"></v-pagination>
  </v-card>
</template>
<script>
import { EventBus } from "../../a";
import { db } from "../../firebase/database";

export default {
  data() {
    return {
      snackbarAdd: false,
      snackbarDel: false,
      snackbarEdit: false,
      validRules: true,
      editDialog: false,
      deleteDialog: false,
      loader: null,
      loading: false,
      loading2: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      editIndex: -1,
      dataId: null,
      timeout: 2000,
      search: "",
      name: "",
      headers: [
        {
          text: "First Name",
          align: "start",
          value: "firstname",
        },
        { text: "Last Name", value: "lastname" },
        { text: "Check in Date", value: "checkin" },
        { text: "Check out Date", value: "checkout" },
        { text: "Child", value: "child" },
        { text: "Adult", value: "adult" },
        { text: "Room", value: "room" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      data: [],
      requiredRules: [(v) => !!v || "Required."],
      forEditData: [
        {
          id: "",
          firstname: "",
          lastname: "",
          checkin: "",
          checkout: "",
          child: "",
          adult: "",
          room: "",
        },
      ],
      defaultData: [
        {
          id: "",
          firstname: "",
          lastname: "",
          checkin: "",
          checkout: "",
          child: "",
          adult: "",
          room: "",
        },
      ],
    };
  },
  methods: {
    async saveData() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const booking = db.collection("booking").doc(this.dataId);
        await booking.update(this.forEditData);

        this.snackbarEdit = true;
        this.saveDialogClose();
      }
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
      this.dataId = item.id;
      this.forEditData = { ...item };
      this.editDialog = true;
    },

    deleteData(item) {
      this.editIndex = this.data.indexOf(item);
      this.dataId = item.id;
      this.forEditData = { ...item };
      this.deleteDialog = true;
    },
    async confirmDelete() {
      this.loading2 = true;
      await db.collection("booking").doc(this.dataId).delete();
      this.snackbarDel = true;
      this.name = this.forEditData.lastname;
      this.data.splice(this.editIndex, 1);
      this.closeDeleteDialog();
    },

    closeDeleteDialog() {
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

    const bookingDb = db.collection("booking");
    bookingDb.onSnapshot((bookingSnapshot) => {
      bookingSnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          this.data.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
        if (change.type === 'modified') {
          this.loading = false
        }
        if (change.type === "removed") {
          this.deleteDialog = false;
          this.loading2 = false;
          this.dataId = null;
        }
      });
    });
  },
};
</script>
<style scoped>
</style>