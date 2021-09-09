<template>
  <section class="restaurant-list">
    <div id="venues" class="container">
      <div id="form-title">
        <h2 class="section-title">Browse My Reservations.</h2>
      </div>
      <div class="not-available">
        <p class="nonavail">No reservations confirmed.</p>
      </div>
      <div class="available">
        <ReservationCard />
      </div>
      <div class="graph">
        <Graph />
      </div>
      <Modal />
    </div>
  </section>
</template>

<script>
import { Graph } from "@/components/Graph.vue";
import { ReservationCard } from "@/components/ReservationCard.vue";
import { Modal } from "@/components/Modal.vue";

export default {
  name: "Reservations",
  components: {
    Graph,
    ReservationCard,
    Modal,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/_reservations.scss";
</style>

