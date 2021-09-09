<template>
  <section class="restaurant-list">
    <div id="venues" class="container">
      <div id="form-title">
        <h2 class="section-title">Browse the restaurants.</h2>
      </div>
      <div class="not-available">
        <p class="nonavail">No restaurants available.</p>
      </div>
      <div class="available">
        <RestaurantCard />
      </div>
    </div>
  </section>
</template>

<script>
import { RestaurantCard } from "@/components/RestaurantCard.vue";

export default {
  name: "RestaurantCard",
  components: {
    RestaurantCard,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/_restaurants.scss";
</style>

