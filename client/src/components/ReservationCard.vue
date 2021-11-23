<template>
  <div class="col-md-6 col-lg-4 item location">
    <div class="box">
      <img
        width="150"
        height="100"
        class="rounded"
        :src="image"
        alt="restaurant image"
      />
      <h3 class="name">{{ name }}</h3>
      <p class="date">{{ date }}</p>
      <p class="time">Time: {{ time }}</p>
      <p class="guests">Guests: {{ guests }}</p>
      <p class="mobile">Mobile: {{ mobile }}</p>
      <p class="requests">Requests: {{ requests }}</p>
      <div class="update">
        <router-link
          @click="scrollToTop"
          :to="{
            name: 'ReservationUpdate',
            params: { restaurant: restId, reservation: resId },
          }"
          ><i class="fa fa-edit icon fa-lg" id="1" title="edit"></i
        ></router-link>
        <a @click="submitRequest"
          ><i class="fa fa-trash icon fa-lg" id="1" title="delete"></i
        ></a>
      </div>
      <div class="status">
        <p>Status: {{ status }}</p>
        <div
          v-if="status === 'Processing'"
          class="spinner-border"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    requests: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    restId: {
      type: String,
      required: true,
    },
    resId: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 100);
    },
    async submitRequest() {
      this.$store.dispatch("deleteReservation", [
        this.$store.state.activeUser,
        this.resId,
      ]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_reservation-card.scss";
</style>
