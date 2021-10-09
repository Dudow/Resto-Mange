import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import AddResto from "../components/AddResto.vue";
import UpdateResto from "../components/UpdateResto.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/"
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up"
  },
  {
    name: "Login",
    component: Login,
    path: "/login"
  },
  {
    name: "Add",
    component: AddResto,
    path: "/add"
  },
  {
    name: "Update",
    component: UpdateResto,
    path: "/update/:id"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
