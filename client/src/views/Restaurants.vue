<template>
  <section class="restaurant-list">
    <div id="venues" class="container">
      <div id="form-title">
        <h2 class="section-title">Browse the restaurants.</h2>
      </div>
      <NonAvailable
        v-if="this.$store.state.restaurants.length == 0"
        :item="'restaurants'"
        :msg="'Try Again'"
        :link="'Home'"
      />
      <div v-else class="available">
        <div class="row places">
          <RestaurantCard
            v-for="restaurant in this.$store.state.restaurants"
            :key="restaurant._id"
            :image="restaurant.image"
            :name="restaurant.name"
            :cuisine="restaurant.cuisine"
            :description="restaurant.info"
            :restId="restaurant._id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard.vue";
import NonAvailable from "@/components/nonAvailable.vue";

export default {
  name: "Restaurants",
  components: {
    RestaurantCard,
    NonAvailable,
  },
  async created() {
    this.$store.dispatch("initRestaurants");
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/_restaurants.scss";
</style>
