<template>
  <div>
    <form method="post" id="limit" @submit.prevent="checkFormAndSubmit">
      <h2 class="">
        <strong>{{ action }}</strong> Reservation.
      </h2>
      <div class="mb-3 form-section">
        <label> Restaurant </label>
        <div class="input-bord">
          <input
            class="form-control"
            type="text"
            name="restaurant"
            :placeholder="this.currentRest"
            v-model="reservation.name"
            readonly
          />
        </div>
      </div>
      <div class="mb-3 form-section">
        <label> Date </label>
        <div class="input-bord">
          <input
            id="datepicker"
            class="form-control"
            type="date"
            :min="minDate"
            :max="maxDate"
            v-model="reservation.date"
            required
          />
        </div>
      </div>
      <div class="mb-3 form-section">
        <label> Time </label>
        <div class="input-bord">
          <select
            id="numpeople"
            class="form-select form-control"
            name="time"
            v-model="reservation.time"
            required
          >
            <option
              v-for="(time, idx) in this.times"
              v-bind:value="time"
              :key="idx"
              id="options"
            >
              {{ time }}
            </option>
          </select>
        </div>
      </div>
      <div class="mb-3 form-section">
        <label> Guests </label>
        <div class="input-bord">
          <input
            class="form-control"
            type="number"
            name="guests"
            :placeholder="reservation.guests"
            v-model="reservation.guests"
            max="6"
            min="1"
            required
          />
        </div>
      </div>
      <div class="mb-3 form-section">
        <label> Mobile Phone (required)</label>
        <div class="input-bord">
          <input
            class="form-control"
            type="text"
            name="mobile"
            v-model="reservation.mobile"
            required
          />
        </div>
      </div>
      <div class="mb-3 form-section">
        <label> Special Requests </label>
        <div class="input-bord">
          <input
            class="form-control"
            type="text"
            name="requests"
            v-model="reservation.requests"
          />
        </div>
      </div>
      <div class="mb-3 form-section">
        <button
          id="confirm"
          class="btn btn-primary d-block w-100"
          type="submit"
        >
          {{ btnLabel }}
        </button>
      </div>
    </form>
    <div class="errors" v-if="errors.length">
      <p>Please correct the following error(s):</p>
      <ul>
        <li v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import router from "@/router";
import api from "@/services/api";
import { mapState } from "vuex";

export default {
  name: "ReservationForm",
  props: {
    action: {
      type: String,
      required: true,
    },
    btnLabel: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      errors: [],
      reservation: {},
      minDate: this.formatDate(new Date()),
      maxDate: this.formatDate(new Date(Date.now() + 6.048e8)),
    };
  },
  computed: {
    ...mapState({
      restaurants: (state) => state.restaurants,
      user: (state) => state.activeUser,
      times: (state) => state.selectedSchedule,
      currentRest: (state) => state.selectedRestaurant,
      storeRes: (state) => state.selectedReservation,
    }),
  },
  methods: {
    async checkFormAndSubmit() {
      this.errors = [];
      const phoneregx = /^\d{10}$/;

      if (!this.reservation.mobile.match(phoneregx)) {
        this.errors.push("Valid Mobile Required.");
      }
      if (this.reservation.requests.length > 200) {
        this.errors.push("Add less Requests");
      }
      let sendRequest;
      if (this.errors.length === 0) {
        if (this.action === "Finalise") {
          sendRequest = await api.createReservation(
            this.user,
            this.reservation
          );
        } else {
          sendRequest = await api.updateReservation(
            this.user,
            this.storeRes._id,
            this.reservation
          );
        }
        this.scrollToTop();
        if (sendRequest.errors !== undefined || sendRequest === null) {
          router.push({ name: "PageNotFound" });
        } else {
          router.push({ name: "Reservations" });
        }
      }
    },
    formatDate(date) {
      let month = "" + (date.getMonth() + 1);
      let day = "" + date.getDate();
      let year = date.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    scrollToTop() {
      window.scrollTo(0, 100);
    },
  },
  async created() {
    const route = useRoute();
    // update the selected restaurants schedule of confirmed bookings
    await this.$store.dispatch(
      "updateCurrentSchedule",
      route.params.restaurant
    );
    if (this.action === "Finalise") {
      this.reservation.date = new Date().toJSON().slice(0, 10);
      this.reservation.time = this.times[0];
      this.reservation.guests = "1";
      this.reservation.mobile = "";
      this.reservation.requests = "";
    } else {
      this.reservation.date = new Date(this.storeRes.date)
        .toJSON()
        .slice(0, 10);
      this.reservation.time = this.storeRes.time;
      this.reservation.guests = this.storeRes.guests;
      this.reservation.mobile = this.storeRes.mobile;
      this.reservation.requests = this.storeRes.requests;
    }
    this.reservation.restaurant = route.params.restaurant;
    this.reservation.name = this.currentRest;
    this.reservation.status = "Processing";
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/_reservation-form.scss";
</style>
