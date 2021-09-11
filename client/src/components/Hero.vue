<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <h1 class="hero-style">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: {
      type: String,
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_hero.scss";
</style>
