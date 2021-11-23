const url = "http://localhost:3000/api";
const axios = require('axios').default;

const client = axios.create({
  baseURL: url,
  json: true,
});

export default {
  async execute(method, resource, data) {
    return client({
      method,
      url: resource,
      data,
    }).then((req) => {
      return req.data.data;
    }).catch(() => {
      return null;
    })
  },
  getRestaurants() {
    return this.execute("get", "/restaurant");
  },
  getRestaurant(restId) {
    return this.execute("get", `/restaurant/${restId}`);
  },
  getSchedule(restId) {
    return this.execute("get", `/restaurant/${restId}/schedule`);
  },
  getReservation(userId, resId) {
    return this.execute("get", `/user/${userId}/reservations/${resId}`);
  },
  getReservationData(){
    return this.execute("get", `/user/reservations`);
  },
  getReservations(userId) {
    return this.execute("get", `/user/${userId}/reservations`);
  },
  createReservation(userId, data) {
    return this.execute("post", `/user/${userId}/reservations`, data);
  },
  updateReservation(userId, reservationId, data) {
    return this.execute(
      "put",
      `/user/${userId}/reservations/${reservationId}`,
      data
    );
  },
  deleteReservation(userId, reservationId) {
    return this.execute(
      "delete",
      `/user/${userId}/reservations/${reservationId}`
    );
  },
};
