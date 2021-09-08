<template>
  <div>
    <div class="container hero">
      <Hero />
    </div>
    <div class="search-container">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import { Hero } from "@/components/Hero.vue";
import { SearchBar } from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    Hero,
    SearchBar,
  },
};
</script>
