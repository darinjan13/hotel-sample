<template>
  <v-app>
    <v-main>
      <DataTables />
    </v-main>
  </v-app>
</template>
<script>
import DataTables from "../../components/DataTable/DataTables";
export default {
  components: {
    DataTables,
  },
};
</script>