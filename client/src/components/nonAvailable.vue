<template>
  <div class="not-available">
    <p class="nonavail">No {{ item }} available.</p>
    <div class="return-btn">
      <router-link
        :to="{ name: link }"
        class="btn btn-primary d-block w-100"
        type="submit"
        >{{ msg }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NonAvailable",
  props: {
    item: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
p.nonavail {
  font-size: 2em;
  color: #fff;
  padding-bottom: 5rem;
}
.return-btn {
    width: 20%;
  }
</style>
