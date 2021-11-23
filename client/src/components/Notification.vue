<template>
  <div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
    <div
      id="liveToast"
      class="toast hide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <img
          src="../assets/dropblk.png"
          width="30"
          class="rounded me-2"
          alt="DropBear"
        />
        <strong class="me-auto">DropBearTable</strong>
        <small>Now</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  name: "Notification",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    showNotification() {
      const notification = document.getElementById("liveToast");
      const showNotification = new Toast(notification);
      showNotification.show();
    },
  },
  created() {
    const sse = new EventSource(
      `http://localhost:3000/api/user/${this.$store.state.activeUser}/notification`
    );
    sse.addEventListener("reservationConfirmed", (event) => {
      this.$store.dispatch("initReservations", this.$store.state.activeUser);
      this.msg = event.data;
      this.showNotification();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_notification.scss";
</style>
