<template>
  <div>
    <div class="hero-container">
      <Hero title="The Dining Revolution is Here."/>
    </div>
    <div class="search-container">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    Hero,
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/_home.scss";
</style>

