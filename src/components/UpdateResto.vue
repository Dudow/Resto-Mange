<template>
  <Header />
  <h1>Update Resto</h1>
  <form
    action=""
    class="form"
  >
    <input
      v-model="resto.name"
      type="text"
      name="name"
      placeholder="Name"
    >
    <input
      v-model="resto.address"
      type="text"
      name="address"
      placeholder="Address"
    >
    <input
      v-model="resto.contact"
      type="text"
      name="contact"
      placeholder="Contact"
    >
    <button
      type="button"
      @click="addResto"
    >
      Add Resto
    </button>
  </form>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "UpdateResto",
  components: {
    Header
  },
  data() {
    return {
      resto: {
        name: "",
        address: "",
        contact: ""
      }
    };
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    this.name = JSON.stringify(user).name;

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
  methods: {
    async addResto() {
      const response = await axios.post("http://localhost:3000/restos", {
        name: this.resto.name,
        address: this.resto.address,
        contact: this.resto.contact
      });

      if (response.status === 201) {
        this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 5px;
}

.form input {
  padding-left: 20px;
  border: 1px solid skyblue;
  border-radius: 2px;
  height: 30px;
}

.form button {
  height: 30px;
  border: 1px solid skyblue;
  border-radius: 2px;
  background: skyblue;
  width: 150px;
}
</style>
