<template>
<div>
  <div class="container">
    <ReservationForm />
  </div>
</div>
</template>

<script>
import { ReservationForm } from "@/components/ReservationForm.vue";
export default {
  name: "Booking",
  components: {
    ReservationForm,
  },
};
</script>

<style></style>
