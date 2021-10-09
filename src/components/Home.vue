<template>
  <h1>Home</h1>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    const user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
};
</script>
