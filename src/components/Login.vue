<template>
  <div class="header">
    <img alt="Dudow logo" class="logo" src="../assets/logo.png" />
    <h1>Login</h1>
  </div>
  <div class="form">
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up"> Sign Up </router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const response = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password${this.password}`
      );

      if (response.status === 200 && response.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(response.data[0]));
        this.$router.push({ name: "Home" });
      }
    }
  },
  mounted() {
    const user = localStorage.getItem("user-info");

    if (user) {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
.logo {
  width: 35px;
  height: 35px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
}

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
