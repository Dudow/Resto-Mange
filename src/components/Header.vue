<template>
  <div class="header">
    <a href="#">
      Home
    </a>
    <a href="#">
      Add Restaurant
    </a>
    <a href="#">
      Update Restaurant
    </a>
    <a href="#" @:click="logout">
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
