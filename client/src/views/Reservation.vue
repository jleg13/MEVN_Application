<template>
  <div class="reservation-form row">
    <div class="col-md-8 res-form">
      <div class="form-container"></div>
      <ReservationForm :action="action" :btnLabel="btnLabel" />
    </div>
  </div>
</template>

<script>
import ReservationForm from "@/components/ReservationForm.vue";
import { useRoute } from "vue-router";

export default {
  name: "Reservation",
  components: {
    ReservationForm,
  },
  data() {
    return {
      action: "",
      btnLabel: "",
    };
  },
  async created() {
    const route = useRoute();
    let restParam = route.params.restaurant;
    let resvParam = route.params.reservation;
    if (resvParam === undefined) {
      this.action = "Finalise";
      this.btnLabel = "Submit Reservation";
      this.$store.dispatch("nullReservation");
      this.$store.dispatch("updateCurrentRestaurant", restParam);
    } else {
      this.action = "Update";
      this.btnLabel = "Update Reservation";
      this.$store.dispatch("updateCurrentReservation", [
        this.$store.state.activeUser,
        resvParam,
      ]);
      this.$store.dispatch("updateCurrentRestaurant", restParam);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/views/_reservation.scss";
</style>
