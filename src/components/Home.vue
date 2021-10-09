<template>
  <Header />
  <h1>Home</h1>
  <table
    class="table"
    border="1"
  >
    <th colspan="3">
      RESTOS
    </th>
    <tr>
      <td>name</td>
      <td>contact</td>
      <td>address</td>
    </tr>
    <tr
      v-for="item in restos"
      :key="item.id"
    >
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
    </tr>
  </table>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header
  },
  data() {
    return {
      name: "",
      restos: []
    };
  },
  async mounted() {
    const user = localStorage.getItem("user-info");
    this.name = JSON.stringify(user).name;

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    const response = await axios.get("http://localhost:3000/restos");
    this.restos = response.data;
  }
};
</script>

<style scoped>
.table td {
  width: 160px;
  height: 40px;
}
</style>
