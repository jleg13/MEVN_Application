import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: () =>
      import(/* webpackChunkName: "restaurants" */ "../views/Restaurants.vue"),
  },
  {
    path: "/reservation/:restaurant",
    name: "Reservation",
    component: () =>
      import(/* webpackChunkName: "reservation" */ "../views/Reservation.vue"),
  },
  {
    path: "/reservation/:restaurant/:reservation",
    name: "ReservationUpdate",
    component: () =>
      import(/* webpackChunkName: "reservation" */ "../views/Reservation.vue"),
  },
  {
    path: "/reservations",
    name: "Reservations",
    component: () =>
      import(
        /* webpackChunkName: "reservations" */ "../views/Reservations.vue"
      ),
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: () =>
      import(
        /* webpackChunkName: "pagenotfound" */ "../views/PageNotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
