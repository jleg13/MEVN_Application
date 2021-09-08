import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Booking from "@/views/Booking.vue";
import Login from "@/views/Login.vue";
import Reservations from "@/views/Reservations.vue";
import Restaurants from "@/views/Restaurants.vue";
import Signup from "@/views/Signup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reservations",
    name: "Reservations",
    component: Reservations,
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: Restaurants,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
