<template>
  <Header />
  <h1>Home</h1>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Home",
  components: {
    Header
  },
  mounted() {
    const user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
};
</script>
