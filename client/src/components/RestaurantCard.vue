<template>
  <div class="col-md-6 col-lg-4 item location">
    <div class="box">
      <img
        class="rounded"
        width="150"
        height="100"
        :src="image"
        alt="restaurant image"
      />
      <h3 class="name">{{ name }}</h3>
      <p class="cuisine">{{ cuisine }}</p>
      <p class="description">{{ description }}</p>
      <div class="mb-3">
        <router-link
          id="restId"
          @click="scrollToTop"
          :to="{ name: 'Reservation', params: { restaurant: restId } }"
          class="btn btn-primary d-block w-100"
          type="submit"
          >Make Reservation</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cuisine: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    restId: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 150);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_restaurant-card.scss";
</style>
