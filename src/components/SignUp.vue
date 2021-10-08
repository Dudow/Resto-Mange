<template>
  <div class="header">
    <img alt="Dudow logo" class="logo" src="../assets/logo.png">
    <h1>Sign Up</h1>
  </div>
  <div class="form">
    <input type="text" v-model="name" placeholder="Name">
    <input type="email" v-model="email"  placeholder="Email">
    <input type="password" v-model="password"  placeholder="Password">
    <button v-on:click="signUp">
      Sign Up
    </button>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'SignUp',
    data()
    {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async signUp()
      {
        const result = await axios.post("http://localhost:3000/users", {
          email: this.email,
          password: this.password,
          name: this.name
        })

        console.log(result)

        result.status === 201 &&
          alert("done")
          localStorage.setItem("user-info", JSON.stringify(result.data))
      }
    }
  }
</script>

<style>
  .logo{
    width: 35px;
    height: 35px;
  }

  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 15px;
  }

  .form{
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

  .form button{
    height: 30px;
    border: 1px solid skyblue;
    border-radius: 2px;
    background: skyblue;
    width: 150px;

  }
</style>