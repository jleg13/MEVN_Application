<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <NotificationModal />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NotificationModal from "@/components/NotificationModal.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    NotificationModal
  }
};
</script>

<style></style>