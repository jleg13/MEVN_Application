<template>
  <section class="restaurant-list">
    <div id="venues" class="container">
      <div id="form-title">
        <h2 class="section-title">Browse My Reservations.</h2>
      </div>
      <NonAvailable
        v-if="reservations.length === 0"
        :item="'reservations'"
        :msg="'Make Reservation'"
        :link="'Restaurants'"
      />
      <div v-else class="available">
        <div class="row places">
          <ReservationCard
            v-for="reservation in reservations"
            :key="reservation._id"
            :image="getImage(reservation.restaurant)"
            :name="reservation.name"
            :date="reservation.date.slice(0, 10)"
            :time="reservation.time"
            :guests="reservation.guests"
            :mobile="reservation.mobile"
            :requests="reservation.requests"
            :status="reservation.status"
            :restId="reservation.restaurant"
            :resId="reservation._id"
          />
        </div>
        <div class="more-res">
          <router-link
            to="Restaurants"
            class="btn btn-primary d-block w-100"
            type="submit"
            @click="scrollToTop"
            >Add More Reservations
          </router-link>
        </div>
        <div class="graph">
          <div id="form-title">
            <h3 class="section-sub-title">Current Trending Restaurants</h3>
          </div>
          <PieChart />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/services/api";
import ReservationCard from "@/components/ReservationCard.vue";
import PieChart from "@/components/PieChart.vue";
import NonAvailable from "@/components/nonAvailable.vue";
import { mapState } from "vuex";

export default {
  name: "Reservations",
  components: {
    ReservationCard,
    PieChart,
    NonAvailable,
  },
  computed: {
    ...mapState({
      restaurants: (state) => state.restaurants,
      reservations: (state) => state.reservations,
      user: (state) => state.activeUser,
    }),
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 100);
    },
    getImage(id) {
      for (let i = 0; i < this.restaurants.length; i++) {
        if (this.restaurants[i]._id == id) {
          return this.restaurants[i].image;
        }
      }
    },
  },
  async created() {
    this.$store.dispatch("initRestaurants");
    this.$store.dispatch("initReservations", this.user);
    this.graphData = await api.getReservationData();
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/views/_reservations.scss";
</style>
