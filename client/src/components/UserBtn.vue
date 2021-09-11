<template>
  <button
    type="button"
    :class="btnStyle"
    :data-bs-toggle="action"
    :data-bs-target="actionId"
  >
    {{ btnLabel }}
  </button>
</template>

<script>
export default {
  name: "UserBtn",
  props: {
    btnStyle: {
      type: String,
      required: true,
    },
    btnLabel: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    actionId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_user-btn.scss";
</style>
