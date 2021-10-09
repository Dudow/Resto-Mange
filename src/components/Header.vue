<template>
  <div class="header">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/add">
      Add Restaurant
    </router-link>
    <router-link to="/update">
      Update Restaurant
    </router-link>
    <a
      href="#"
      @:click="logout"
    >
      Logout
    </a>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {}
  }
};
</script>

<style scoped>
.header {
  display: flex;
  grid-gap: 15px;
}

.header a {
  padding: 14px 16px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 5px;
}
</style>
