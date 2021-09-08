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
          src="img/dropblk.png"
          width="40"
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
      <div class="toast-body">Your reservation request has been confirmed.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationModal",
};
</script>

<style></style>
