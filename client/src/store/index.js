import { createStore } from "vuex";
import api from "../services/api";
const ObjectID = require("bson-objectid");

export default createStore({
  state: {
    restaurants: [],
    selectedRestaurant: null,
    selectedSchedule: [],
    reservations: [],
    selectedReservation: null,
    activeUser: ObjectID("6149a6e3de7c4b0001cde343"),
  },
  mutations: {
    setRestaurants(state, restaurants) {
      state.restaurants = restaurants;
    },
    setReservations(state, reservations) {
      state.reservations = reservations;
    },
    updateRestaurant(state, selectedRestaurant) {
      state.selectedRestaurant = selectedRestaurant;
    },
    updateSchedule(state, selectedSchedule) {
      state.selectedSchedule = selectedSchedule;
    },
    updateReservation(state, selectedReservation) {
      state.selectedReservation = selectedReservation;
    },
  },
  actions: {
    async initRestaurants({ commit }) {
      let restaurants = await api.getRestaurants();
      commit("setRestaurants", restaurants);
    },
    async initReservations({ commit }, userId) {
      let reservations = await api.getReservations(userId);
      if (reservations) {
        commit("setReservations", reservations);
      }
    },
    async updateCurrentRestaurant({ commit }, selectedRestaurant) {
      let restaurant = await api.getRestaurant(selectedRestaurant);
      commit("updateRestaurant", restaurant.name);
    },
    async updateCurrentReservation({ commit }, reservationDetails) {
      let reservation = await api.getReservation(
        reservationDetails[0],
        reservationDetails[1]
      );
      commit("updateReservation", reservation);
    },
    async updateCurrentSchedule({ commit }, selectedSchedule) {
      let schedule = await api.getSchedule(selectedSchedule);
      commit("updateSchedule", schedule);
    },
    nullReservation({ commit }) {
      commit("updateReservation", null);
    },
    async deleteReservation({ commit }, reservationDetails) {
      await api.deleteReservation(reservationDetails[0], reservationDetails[1]);
      let reservations = await api.getReservations(reservationDetails[0]);
      if (!reservations) {
        commit("setReservations", []);
      } else {
        commit("setReservations", reservations);
      }
    },
  },
  modules: {},
});
