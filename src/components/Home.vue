<template>
  <Header />
  <h1>Home</h1>
  <table
    class="table"
    border="1"
  >
    <th colspan="5">
      RESTOS
    </th>
    <tr>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td colspan="2">
        Actions
      </td>
    </tr>
    <tr
      v-for="item in restos"
      :key="item.id"
    >
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id">
          Update
        </router-link>
      </td>
      <td>
        <button @click="deleteResto(item.id)">
          Delete
        </button>
      </td>
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

    this.fetchData();
  },
  methods: {
    async deleteResto(id) {
      const response = await axios.delete("http://localhost:3000/restos/" + id);

      if (response.status === 200) {
        this.fetchData();
      }
    },

    async fetchData() {
      const response = await axios.get("http://localhost:3000/restos");
      this.restos = response.data;
    }
  }
};
</script>

<style scoped>
.table td {
  width: 160px;
  height: 40px;
}
</style>
